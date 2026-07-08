const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 5501;

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.xml': 'application/xml',
  '.txt': 'text/plain'
};

const server = http.createServer((req, res) => {
  // Parse URL to get file path (ignore query parameters/anchors)
  let safeUrl = req.url.split('?')[0].split('#')[0];
  
  // If the path ends in a slash, treat it as requesting index.html in that folder
  if (safeUrl.endsWith('/')) {
    safeUrl += 'index.html';
  }

  let filePath = path.join(__dirname, safeUrl);

  function serveFile(pathToFile, status = 200) {
    const ext = path.extname(pathToFile).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';
    
    fs.readFile(pathToFile, (err, content) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('500 Internal Server Error');
      } else {
        res.writeHead(status, { 'Content-Type': contentType });
        res.end(content, 'utf-8');
      }
    });
  }

  // Check if requested path exists
  fs.stat(filePath, (err, stats) => {
    if (!err && stats.isFile()) {
      serveFile(filePath);
    } else {
      // Try appending .html (clean/extensionless URL fallback)
      const htmlFilePath = filePath + '.html';
      fs.stat(htmlFilePath, (errHtml, statsHtml) => {
        if (!errHtml && statsHtml.isFile()) {
          serveFile(htmlFilePath);
        } else {
          // Serve simple 404 page
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.end('<h1>404 Not Found</h1><p>The requested URL was not found on this server.</p>');
        }
      });
    }
  });
});

server.listen(PORT, () => {
  console.log(`\n======================================================`);
  console.log(`ðŸš€ Development server is running at: http://localhost:${PORT}/`);
  console.log(`Serving clean extensionless URLs (e.g. /about or /services/yellow-jacket-control)`);
  console.log(`Press Ctrl+C to stop.`);
  console.log(`======================================================\n`);
});
