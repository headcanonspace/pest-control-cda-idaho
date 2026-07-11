
// Inject required CSS for custom elements
const style = document.createElement('style');
style.textContent = 'global-header { display: block; width: 100%; } global-footer { display: block; width: 100%; margin-top: auto; }';
document.head.appendChild(style);

class GlobalHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<!-- 1. Top Bar -->
  <div class="bg-forest-900 text-slate-100 text-xs md:text-sm py-2.5 px-4 border-b border-forest/20">
    <div class="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
      <!-- Left Info -->
      <div class="flex items-center gap-4 text-center sm:text-left">
        <span class="inline-flex items-center gap-1 font-medium">
          <svg class="w-3.5 h-3.5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/></svg>
          Coeur d'Alene, ID 83814
        </span>
        <span class="font-semibold text-amber-300">|</span>

        <a href="tel:+12082482701" class="hover:underline inline-flex items-center gap-1 font-bold">
          <svg class="w-3.5 h-3.5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
          +1 (208) 248-2701
        </a>
      </div>
      <!-- Right Info -->
      <div class="flex items-center gap-4">
        <!-- Social Icons Commented Out
        <div class="hidden sm:flex items-center gap-4 text-slate-400">
          <a href="#" class="hover:text-amber-400 transition-colors" aria-label="Facebook">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href="#" class="hover:text-amber-400 transition-colors" aria-label="Twitter">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
          </a>
          <a href="#" class="hover:text-amber-400 transition-colors" aria-label="YouTube">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </a>
        </div>
        -->
      </div>
    </div>
  </div>

  <!-- 2. Header / Navbar -->
  <!-- Header Navigation -->
  <header class="glass-effect sticky top-0 z-50 border-b border-slate-200/80 shadow-sm transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
      <!-- Logo -->
      <a href="/" class="flex items-center" style="height: 100%; display: flex; align-items: center;">
        <img src="/assets/images/logo.png" alt="North Idaho Pest Control" style="height: 48px; width: auto; max-height: 48px; display: block;" loading="eager">
      </a>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center gap-6 lg:gap-8 font-medium text-slate-650">
        <a href="/" class="hover:text-forest transition-colors">Home</a>
        <a href="/about" class="hover:text-forest transition-colors">About</a>
        
        <!-- Services Dropdown -->
        <div class="relative group py-2">
          <button class="flex items-center gap-1 hover:text-forest transition-colors focus:outline-none" aria-haspopup="true" aria-expanded="false" aria-label="Services Menu">
            <span>Services</span>
            <svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
          </button>
          
          <!-- Services Panel (2-column layout) -->
          <div class="absolute left-1/2 -translate-x-1/2 mt-2 w-[480px] bg-white border border-slate-200/80 rounded-xl shadow-xl p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible focus-within:opacity-100 focus-within:visible transition-all duration-200 z-50 grid grid-cols-2 gap-4">
            <div class="space-y-1.5">
              <span class="block text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b pb-1 mb-2">Insect Control</span>
              <a href="/ant-control" class="block text-sm text-slate-600 hover:text-forest hover:font-semibold py-1">Ant Control</a>
              <a href="/carpenter-ant-control" class="block text-sm text-slate-600 hover:text-forest hover:font-semibold py-1">Carpenter Ant Control</a>
              <a href="/spider-control" class="block text-sm text-slate-600 hover:text-forest hover:font-semibold py-1">Spider Control</a>
              <a href="/flea-control" class="block text-sm text-slate-600 hover:text-forest hover:font-semibold py-1">Flea Control</a>
              <a href="/roach-control" class="block text-sm text-slate-600 hover:text-forest hover:font-semibold py-1">Roach Control</a>
              <a href="/bed-bug-treatment" class="block text-sm text-slate-600 hover:text-forest hover:font-semibold py-1">Bed Bug Treatment</a>
            </div>
            <div class="space-y-1.5">
              <span class="block text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b pb-1 mb-2">Rodent & Stinging</span>
              <a href="/rodent-control" class="block text-sm text-slate-600 hover:text-forest hover:font-semibold py-1">Rodent Control</a>
              <a href="/wasp-control" class="block text-sm text-slate-600 hover:text-forest hover:font-semibold py-1">Wasp Control</a>
              <a href="/yellow-jacket-control" class="block text-sm text-slate-600 hover:text-forest hover:font-semibold py-1">Yellow Jacket Control</a>
              <a href="/mosquito-control" class="block text-sm text-slate-600 hover:text-forest hover:font-semibold py-1">Mosquito Control</a>
            </div>
          </div>
        </div>

        <!-- Locations Dropdown -->
<!-- Temporarily Hidden
        <div class="relative group py-2">
          <button class="flex items-center gap-1 hover:text-forest transition-colors focus:outline-none" aria-haspopup="true" aria-expanded="false" aria-label="Locations Menu">
            <span>Locations</span>
            <svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
          </button>
          
          [- Locations Panel (1-column layout) -]
          <div class="absolute left-0 mt-2 w-64 bg-white border border-slate-200/80 rounded-xl shadow-xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible focus-within:opacity-100 focus-within:visible transition-all duration-200 z-50 space-y-1.5">
            <span class="block text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b pb-1 mb-2">North Idaho Cities</span>
            <a href="/" class="block text-sm text-slate-600 hover:text-forest hover:font-semibold py-1">Coeur d'Alene, ID</a>
            <a href="/pest-control-post-falls" class="block text-sm text-slate-600 hover:text-forest hover:font-semibold py-1">Post Falls, ID</a>
            <a href="/pest-control-sandpoint" class="block text-sm text-slate-600 hover:text-forest hover:font-semibold py-1">Sandpoint, ID</a>
            <a href="/pest-control-moscow" class="block text-sm text-slate-600 hover:text-forest hover:font-semibold py-1">Moscow, ID</a>
            <a href="/pest-control-hayden" class="block text-sm text-slate-600 hover:text-forest hover:font-semibold py-1">Hayden, ID</a>
            <a href="/pest-control-rathdrum" class="block text-sm text-slate-600 hover:text-forest hover:font-semibold py-1">Rathdrum, ID</a>
            <a href="/pest-control-spirit-lake" class="block text-sm text-slate-600 hover:text-forest hover:font-semibold py-1">Spirit Lake, ID</a>
          </div>
        </div>
-->

        <a href="/contact" class="hover:text-forest transition-colors">Contact</a>
      </nav>

      <!-- CTA Desktop Button -->
      <div class="hidden lg:flex items-center gap-3">
        <a href="tel:+12082482701" class="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold px-6 py-2.5 rounded-md transition-colors shadow-sm flex items-center gap-2 text-sm md:text-base">
          <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
          +1 (208) 248-2701
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button id="mobile-menu-btn" class="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 focus:outline-none" aria-label="Toggle navigation menu" aria-expanded="false">
        <svg class="h-6 w-6 hamburger-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg class="h-6 w-6 close-icon hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Navigation Panel -->
    <div id="mobile-menu" class="hidden md:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-3 shadow-inner max-h-[75vh] overflow-y-auto">
      <a href="/" class="block py-2 text-slate-600 hover:text-forest border-b border-slate-100">Home</a>
      <a href="/about" class="block py-2 text-slate-600 hover:text-forest border-b border-slate-100">About</a>
      
      <!-- Mobile Services Accordion -->
      <div class="border-b border-slate-100">
        <button class="w-full text-left py-2 text-slate-600 hover:text-forest flex items-center justify-between focus:outline-none" data-mobile-accordion-btn aria-expanded="false" aria-controls="mobile-services-list">
          <span>Services</span>
          <svg class="w-4 h-4 transition-transform duration-250 accordion-icon text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
        </button>
        <div id="mobile-services-list" class="accordion-content space-y-1.5 pl-4 pb-2">
          <a href="/services" class="block text-sm text-slate-500 hover:text-forest py-1 font-bold">All Services &rarr;</a>
          <a href="/ant-control" class="block text-sm text-slate-500 hover:text-forest py-1">Ant Control</a>
          <a href="/carpenter-ant-control" class="block text-sm text-slate-500 hover:text-forest py-1">Carpenter Ant Control</a>
          <a href="/rodent-control" class="block text-sm text-slate-500 hover:text-forest py-1">Rodent Control</a>
          <a href="/bed-bug-treatment" class="block text-sm text-slate-500 hover:text-forest py-1">Bed Bug Treatment</a>
          <a href="/flea-control" class="block text-sm text-slate-500 hover:text-forest py-1">Flea Control</a>
          <a href="/roach-control" class="block text-sm text-slate-500 hover:text-forest py-1">Roach Control</a>
          <a href="/spider-control" class="block text-sm text-slate-500 hover:text-forest py-1">Spider Control</a>
          <a href="/yellow-jacket-control" class="block text-sm text-slate-500 hover:text-forest py-1">Yellow Jacket Control</a>
          <a href="/wasp-control" class="block text-sm text-slate-500 hover:text-forest py-1">Wasp Control</a>
          <a href="/mosquito-control" class="block text-sm text-slate-500 hover:text-forest py-1">Mosquito Control</a>
        </div>
      </div>

      <!-- Mobile Locations Accordion -->
<!-- Temporarily Hidden
      <div class="border-b border-slate-100">
        <button class="w-full text-left py-2 text-slate-600 hover:text-forest flex items-center justify-between focus:outline-none" data-mobile-accordion-btn aria-expanded="false" aria-controls="mobile-locations-list">
          <span>Locations</span>
          <svg class="w-4 h-4 transition-transform duration-250 accordion-icon text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
        </button>
        <div id="mobile-locations-list" class="accordion-content space-y-1.5 pl-4 pb-2">
          <a href="/" class="block text-sm text-slate-500 hover:text-forest py-1">Coeur d'Alene, ID</a>
          <a href="/pest-control-post-falls" class="block text-sm text-slate-500 hover:text-forest py-1">Post Falls, ID</a>
          <a href="/pest-control-sandpoint" class="block text-sm text-slate-500 hover:text-forest py-1">Sandpoint, ID</a>
          <a href="/pest-control-moscow" class="block text-sm text-slate-500 hover:text-forest py-1">Moscow, ID</a>
          <a href="/pest-control-hayden" class="block text-sm text-slate-500 hover:text-forest py-1">Hayden, ID</a>
          <a href="/pest-control-rathdrum" class="block text-sm text-slate-500 hover:text-forest py-1">Rathdrum, ID</a>
          <a href="/pest-control-spirit-lake" class="block text-sm text-slate-500 hover:text-forest py-1">Spirit Lake, ID</a>
        </div>
      </div>
-->

      <a href="/contact" class="block py-2 text-slate-600 hover:text-forest">Contact</a>
      
      <!-- Phone Call CTA inside Mobile Drawer -->
      <div class="pt-3">
                <a href="tel:+12082482701" class="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-3.5 rounded-md transition-colors shadow-sm text-center flex items-center justify-center gap-2 text-base">
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
          Call Now: +1 (208) 248-2701
        </a>
      </div>
    </div>
  </header>
    `;
  }
}
customElements.define('global-header', GlobalHeader);

class GlobalFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<footer class="bg-slate-900 text-slate-350 border-t-4 border-forest mt-auto text-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        
        <!-- NAP Info Column -->
        <div class="space-y-6">
          
          <!-- Logo -->
          <a href="/" class="inline-block mb-2" style="display: inline-block;">
            <img src="/assets/images/logo-white.png" alt="North Idaho Pest Control" style="height: 48px; width: auto; max-height: 48px; display: block;" loading="lazy">
          </a>

          <!-- Contact Details List -->
          <ul class="space-y-4 text-sm text-slate-400">
            <!-- Address -->
            <li class="flex items-start gap-3">
              <svg class="w-5 h-5 text-slate-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
              </svg>
              <span class="text-slate-300">Coeur d'Alene, ID 83814</span>
            </li>
            
            <!-- Phone -->
            <li class="flex items-center gap-3">
              <svg class="w-5 h-5 text-slate-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.432-4.09-7.084-7.084l1.292-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <a href="tel:+12082482701" class="hover:text-amber-400 font-bold transition-colors text-slate-300">+1 (208) 248-2701</a>
            </li>


          </ul>

          <!-- Social Icons (Like the reference) -->
          <!-- Social Icons Commented Out
          <div class="flex items-center gap-3 pt-2">
            <a href="#" class="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:border-amber-400 hover:text-amber-400 transition-colors" aria-label="X (Twitter)">
              <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="#" class="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:border-amber-400 hover:text-amber-400 transition-colors" aria-label="LinkedIn">
              <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="#" class="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:border-amber-400 hover:text-amber-400 transition-colors" aria-label="Instagram">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="#" class="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:border-amber-400 hover:text-amber-400 transition-colors" aria-label="Facebook">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
            </a>
          </div>
          -->
        </div>

        <!-- Services Column -->
        <div>
          <h4 class="font-bold text-white mb-4 uppercase tracking-widest text-xs border-b border-slate-800 pb-2">Supported Services</h4>
          <ul class="space-y-2 text-sm">
            <li><a href="/ant-control" class="text-slate-400 hover:text-amber-400 transition-all duration-200 inline-block hover:translate-x-1">Ant Control</a></li>
            <li><a href="/carpenter-ant-control" class="text-slate-400 hover:text-amber-400 transition-all duration-200 inline-block hover:translate-x-1">Carpenter Ant Control</a></li>
            <li><a href="/rodent-control" class="text-slate-400 hover:text-amber-400 transition-all duration-200 inline-block hover:translate-x-1">Rodent Control</a></li>
            <li><a href="/bed-bug-treatment" class="text-slate-400 hover:text-amber-400 transition-all duration-200 inline-block hover:translate-x-1">Bed Bug Treatment</a></li>
            <li><a href="/spider-control" class="text-slate-400 hover:text-amber-400 transition-all duration-200 inline-block hover:translate-x-1">Spider Control</a></li>
            <li><a href="/wasp-control" class="text-slate-400 hover:text-amber-400 transition-all duration-200 inline-block hover:translate-x-1">Wasp & Stinging Insect Control</a></li>
          </ul>
        </div>

        <!-- Locations Column Commented Out
        <div>
          <h4 class="font-bold text-white mb-4 uppercase tracking-widest text-xs border-b border-slate-800 pb-2">Coverage Areas</h4>
          <ul class="space-y-2 text-sm">
            <li><a href="/" class="text-slate-400 hover:text-amber-400 transition-all duration-200 inline-block hover:translate-x-1">Coeur d'Alene, ID</a></li>
            <li><a href="/pest-control-post-falls" class="text-slate-400 hover:text-amber-400 transition-all duration-200 inline-block hover:translate-x-1">Post Falls, ID</a></li>
            <li><a href="/pest-control-sandpoint" class="text-slate-400 hover:text-amber-400 transition-all duration-200 inline-block hover:translate-x-1">Sandpoint, ID</a></li>
            <li><a href="/pest-control-moscow" class="text-slate-400 hover:text-amber-400 transition-all duration-200 inline-block hover:translate-x-1">Moscow, ID</a></li>
            <li><a href="/pest-control-hayden" class="text-slate-400 hover:text-amber-400 transition-all duration-200 inline-block hover:translate-x-1">Hayden, ID</a></li>
            <li><a href="/pest-control-rathdrum" class="text-slate-400 hover:text-amber-400 transition-all duration-200 inline-block hover:translate-x-1">Rathdrum, ID</a></li>
            <li><a href="/pest-control-spirit-lake" class="text-slate-400 hover:text-amber-400 transition-all duration-200 inline-block hover:translate-x-1">Spirit Lake, ID</a></li>
          </ul>
        </div>
        -->

        <!-- Quick Links Column -->
        <div>
          <h4 class="font-bold text-white mb-4 uppercase tracking-widest text-xs border-b border-slate-800 pb-2">Company</h4>
          <ul class="space-y-2 text-sm">
            <li><a href="/" class="text-slate-400 hover:text-amber-400 transition-all duration-200 inline-block hover:translate-x-1">Home</a></li>
            <li><a href="/services" class="text-slate-400 hover:text-amber-400 transition-all duration-200 inline-block hover:translate-x-1">All Services</a></li>
            <li><a href="/about" class="text-slate-400 hover:text-amber-400 transition-all duration-200 inline-block hover:translate-x-1">About Us</a></li>
            <li><a href="/contact" class="text-slate-400 hover:text-amber-400 transition-all duration-200 inline-block hover:translate-x-1">Contact</a></li>
          </ul>
        </div>

      </div>

      <!-- Copyright Section -->
      <div class="mt-10 pt-6 border-t border-slate-800 text-center text-slate-500 text-sm">
        <p>&copy; 2026 North Idaho Pest Control. All rights reserved.</p>
      </div>

    </div>
  </footer>
    `;
  }
}
customElements.define('global-footer', GlobalFooter);
