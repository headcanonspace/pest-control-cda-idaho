<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");

function get_ip_geo($ip) {
    // Check if it's a private or loopback IP
    if ($ip === '127.0.0.1' || $ip === '::1' || strpos($ip, '192.168.') === 0 || strpos($ip, '10.') === 0 || strpos($ip, '172.16.') === 0) {
        return [
            'city' => 'Localhost',
            'region' => 'Local Network',
            'postal' => 'Local',
            'country' => 'Local'
        ];
    }
    
    $url = "http://ip-api.com/json/" . urlencode($ip);
    
    // 1. Try cURL (standard in cPanel)
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 3);
    curl_setopt($ch, CURLOPT_USERAGENT, 'NorthIdahoPestControlTelemetry/1.0');
    $response = curl_exec($ch);
    $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    
    if ($http_code === 200 && $response) {
        $geo = json_decode($response, true);
        if ($geo && ($geo['status'] ?? '') === 'success') {
            return [
                'city' => $geo['city'] ?? 'Unknown',
                'region' => $geo['regionName'] ?? $geo['region'] ?? 'Unknown',
                'postal' => $geo['zip'] ?? 'Unknown',
                'country' => $geo['country'] ?? 'Unknown'
            ];
        }
    }
    
    // 2. Try file_get_contents fallback
    if (ini_get('allow_url_fopen')) {
        $context = stream_context_create([
            'http' => [
                'timeout' => 3,
                'header' => "User-Agent: NorthIdahoPestControlTelemetry/1.0\r\n"
            ]
        ]);
        $response = @file_get_contents($url, false, $context);
        if ($response) {
            $geo = json_decode($response, true);
            if ($geo && ($geo['status'] ?? '') === 'success') {
                return [
                    'city' => $geo['city'] ?? 'Unknown',
                    'region' => $geo['regionName'] ?? $geo['region'] ?? 'Unknown',
                    'postal' => $geo['zip'] ?? 'Unknown',
                    'country' => $geo['country'] ?? 'Unknown'
                ];
            }
        }
    }
    
    return [
        'city' => 'Unknown',
        'region' => 'Unknown',
        'postal' => 'Unknown',
        'country' => 'Unknown'
    ];
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $raw = file_get_contents('php://input');
    $data = json_decode($raw, true);
    
    if (!$data) {
        $data = [];
    }
    
    // Get real client IP if behind proxy/Cloudflare
    $ip = $_SERVER['REMOTE_ADDR'];
    if (!empty($_SERVER['HTTP_CF_CONNECTING_IP'])) {
        $ip = $_SERVER['HTTP_CF_CONNECTING_IP'];
    } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        $ip = explode(',', $_SERVER['HTTP_X_FORWARDED_FOR'])[0];
        $ip = trim($ip);
    }
    
    // Resolve Geolocation Server-Side
    $geo = get_ip_geo($ip);
    
    $data['ip'] = $ip;
    $data['city'] = $geo['city'];
    $data['region'] = $geo['region'];
    $data['postal'] = $geo['postal'];
    $data['country'] = $geo['country'];
    $data['user_agent'] = $_SERVER['HTTP_USER_AGENT'] ?? 'Unknown';
    $data['timestamp'] = date('Y-m-d H:i:s');
    
    $db_file = __DIR__ . '/clicks_db.php';
    
    $clicks = [];
    if (file_exists($db_file)) {
        $content = file_get_contents($db_file);
        $json_data = str_replace('<?php http_response_code(403); exit; ?>', '', $content);
        $clicks = json_decode($json_data, true);
        if (!$clicks) {
            $clicks = [];
        }
    }
    
    array_unshift($clicks, $data);
    
    $new_content = '<?php http_response_code(403); exit; ?>' . json_encode($clicks, JSON_PRETTY_PRINT);
    file_put_contents($db_file, $new_content);
    
    echo json_encode(["status" => "success"]);
} else {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed"]);
}
?>
