// Inject required CSS for custom elements (Including @theme forest colors for Tailwind Browser CDN compatibility and header menu layout rules)
const style = document.createElement('style');
style.textContent = `
global-header { display: block; width: 100%; }
global-footer { display: block; width: 100%; margin-top: auto; }
@theme {
  --color-forest: #1b4332;
  --color-forest-50: #f2f8f5;
  --color-forest-100: #e2f0e8;
  --color-forest-500: #2d6a4f;
  --color-forest-900: #081c15;
}
:root {
  --color-forest: #1b4332;
  --color-forest-50: #f2f8f5;
  --color-forest-100: #e2f0e8;
  --color-forest-500: #2d6a4f;
  --color-forest-900: #081c15;
}
.glass-effect {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}
.t6-drawer.is-open {
  display: flex !important;
}

/* Header Navigation Styles restored from original design */
.t6-nav-desktop { display: none; align-items: center; gap: 1.85rem; font-family: var(--font-body); font-weight: 500; font-size: 0.95rem; }
.t6-nav-link { display: inline-flex; align-items: center; gap: 0.3rem; color: var(--t6-ink); text-decoration: none; padding: 0.4rem 0; }
.t6-nav-link:hover { color: var(--t6-green-dark); }
.t6-nav-chevron { transition: transform 0.2s ease; }
.t6-nav-dropdown { position: relative; }
.t6-nav-dropdown > .t6-nav-link { cursor: pointer; }
.t6-nav-panel {
  position: absolute;
  top: 100%; left: 50%;
  transform: translateX(-50%) translateY(8px);
  width: 540px;
  background: #fff;
  border: 1px solid var(--t6-hairline);
  border-radius: 12px;
  box-shadow: 0 18px 50px rgba(23, 34, 7, 0.13);
  padding: 1.25rem;
  opacity: 0; visibility: hidden;
  transition: opacity 0.2s ease, visibility 0.2s ease, transform 0.2s ease;
  z-index: 50;
}
.t6-nav-dropdown:hover > .t6-nav-panel,
.t6-nav-dropdown:focus-within > .t6-nav-panel {
  opacity: 1; visibility: visible;
  transform: translateX(-50%) translateY(0);
}
.t6-nav-dropdown:hover .t6-nav-chevron,
.t6-nav-dropdown:focus-within .t6-nav-chevron { transform: rotate(180deg); }
.t6-nav-panel-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.45rem;
  max-height: 380px;
  overflow-y: auto;
}
.t6-nav-panel-item {
  display: flex; gap: 0.7rem; align-items: flex-start;
  padding: 0.7rem 0.8rem;
  border-radius: 8px;
  text-decoration: none;
  color: var(--t6-ink);
  transition: background 0.15s ease;
}
.t6-nav-panel-item:hover { background: var(--t6-band); color: var(--t6-ink); }
.t6-nav-panel-icon {
  flex: 0 0 36px;
  width: 36px; height: 36px;
  background: rgba(169, 223, 89, 0.22);
  border-radius: 8px;
  display: inline-flex; align-items: center; justify-content: center;
  color: var(--t6-ink);
}
.t6-nav-panel-text { flex: 1 1 auto; min-width: 0; display: flex; flex-direction: column; gap: 0.2rem; }
.t6-nav-panel-title { font-family: var(--font-display); font-weight: 600; font-size: 0.92rem; line-height: 1.2; color: var(--t6-ink); }
.t6-nav-panel-desc { font-size: 0.78rem; color: var(--t6-muted); line-height: 1.4; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
.t6-nav-panel-all {
  display: block;
  margin-top: 1rem;
  padding-top: 0.85rem;
  border-top: 1px solid var(--t6-hairline);
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 0.88rem;
  color: var(--t6-ink);
  text-decoration: none;
}
.t6-nav-panel-all:hover { color: var(--t6-green-dark); }
@media (min-width: 1024px) {
  .t6-nav-desktop { display: flex !important; }
  .t6-nav-toggle { display: none !important; }
  .t6-nav-phone { display: inline-flex !important; align-items: center; gap: 6px; }
}
`;
document.head.appendChild(style);

// Helper function to resolve relative assets path based on URL nesting depth
function getRelativePrefix() {
  const path = window.location.pathname;
  const lowercasePath = path.toLowerCase();
  if (lowercasePath.includes('/services/') || lowercasePath.includes('/locations/') || lowercasePath.includes('/blog/')) {
    return '../';
  }
  return '';
}

// Helper function to format page links dynamically for file:/// protocol and clean URLs
function adjustLink(target) {
  const prefix = getRelativePrefix();
  const isFile = window.location.protocol === 'file:';
  
  if (!isFile) {
    // Production / Local Server: Use standard clean URLs
    return target;
  }
  
  // Local double-click (file:///): Map to physical relative paths and append .html
  if (target === '/') {
    return prefix + 'index.html';
  }
  
  const cleanTarget = target.startsWith('/') ? target.slice(1) : target;
  
  if (cleanTarget.includes('.') || cleanTarget.includes('#') || cleanTarget.startsWith('tel:') || cleanTarget.startsWith('mailto:')) {
    return prefix + cleanTarget;
  }
  
  return prefix + cleanTarget + '.html';
}

class GlobalHeader extends HTMLElement {
  connectedCallback() {
    const prefix = getRelativePrefix();
    this.innerHTML = `
<header style="position:sticky;top:0;z-index:50;background:#fff;color:var(--t6-ink);border-bottom:1px solid var(--t6-hairline);box-shadow:0 1px 0 rgba(23,34,7,0.04);">
  <div class="t6-container" style="display:flex;align-items:center;justify-content:space-between;gap:1.5rem;padding-top:0.95rem;padding-bottom:0.95rem;">
    <!-- Brand Logo using assets/images/logo.png from previous project -->
    <a href="${adjustLink('/')}" style="display:flex;align-items:center;text-decoration:none;color:var(--t6-ink);">
      <img src="${prefix}assets/images/logo.png" alt="north idaho pest control" style="height:48px; width:auto; max-height:48px; display:block;" loading="eager" />
    </a>

    <nav aria-label="Primary" class="t6-nav-desktop">
      <a href="${adjustLink('/')}" class="t6-nav-link">Home</a>
      <a href="${adjustLink('/about')}" class="t6-nav-link">About</a>
      <div class="t6-nav-dropdown">
        <a href="${adjustLink('/services')}" class="t6-nav-link" aria-haspopup="true">Services <svg class="t6-nav-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></a>
        <div class="t6-nav-panel" role="menu">
          <div class="t6-nav-panel-grid">
            <a href="${adjustLink('/services/ant-control')}" class="t6-nav-panel-item">
              <span class="t6-nav-panel-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect width="6" height="12" x="9" y="6" rx="3"/><path d="M19 8L15 10"/><path d="M5 8l4 2"/><path d="M19 16l-4-2"/><path d="M5 16l4-2"/><path d="M12 2v4"/><path d="M12 18v4"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/></svg></span>
              <span class="t6-nav-panel-text">
                <span class="t6-nav-panel-title">Ant Control</span>
                <span class="t6-nav-panel-desc">Our ant control service targets common species like carpenter ants. We use effective baits and insecticides to eliminate infestations in your home.</span>
              </span>
            </a>
            <a href="${adjustLink('/services/carpenter-ant-control')}" class="t6-nav-panel-item">
              <span class="t6-nav-panel-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 9.7a1 1 0 0 1-.68 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 .76-.97l8-2a1 1 0 0 1 .48 0l8 2A1 1 0 0 1 20 6z"/><path d="M12 22V12M12 12H4M12 12h8"/></svg></span>
              <span class="t6-nav-panel-text">
                <span class="t6-nav-panel-title">Carpenter Ant Control</span>
                <span class="t6-nav-panel-desc">Specializing in carpenter ant control, we identify nesting sites and apply targeted treatments to protect your property from structural damage.</span>
              </span>
            </a>
            <a href="${adjustLink('/services/spider-control')}" class="t6-nav-panel-item">
              <span class="t6-nav-panel-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3.5"/><path d="M12 2v6.5M12 15.5v6.5M2 12h6.5M15.5 12h6.5M5.3 5.3l4.7 4.7M14 14l4.7 4.7M5.3 18.7l4.7-4.7M14 10l4.7-4.7"/></svg></span>
              <span class="t6-nav-panel-text">
                <span class="t6-nav-panel-title">Spider Control</span>
                <span class="t6-nav-panel-desc">Our spider control services focus on common species in Coeur d'Alene. We ensure your home is safe and free from these unwanted pests.</span>
              </span>
            </a>
            <a href="${adjustLink('/services/flea-control')}" class="t6-nav-panel-item">
              <span class="t6-nav-panel-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg></span>
              <span class="t6-nav-panel-text">
                <span class="t6-nav-panel-title">Flea Control</span>
                <span class="t6-nav-panel-desc">Flea infestations can be troublesome for pets and families. Our flea control service uses effective treatments to eliminate these pests from your home.</span>
              </span>
            </a>
            <a href="${adjustLink('/services/roach-control')}" class="t6-nav-panel-item">
              <span class="t6-nav-panel-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="14" x="8" y="7" rx="4"/><path d="M6 3c2 2 2 5 2 7"/><path d="M18 3c-2 2-2 5-2 7"/><path d="M4 11h4M16 11h4M4 16h4M16 16h4"/></svg></span>
              <span class="t6-nav-panel-text">
                <span class="t6-nav-panel-title">Roach Control</span>
                <span class="t6-nav-panel-desc">We provide thorough roach control services, targeting both adult roaches and their eggs. Our methods ensure a long-lasting solution for your home.</span>
              </span>
            </a>
            <a href="${adjustLink('/services/bed-bug-treatment')}" class="t6-nav-panel-item">
              <span class="t6-nav-panel-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4v16M2 8h18a2 2 0 0 1 2 2v10M2 17h20M6 8v9"/><path d="M13 11v3M16 11v3M13 14h3" stroke-width="1.5"/></svg></span>
              <span class="t6-nav-panel-text">
                <span class="t6-nav-panel-title">Bed Bug Treatment</span>
                <span class="t6-nav-panel-desc">Bed bugs can disrupt your peace. Our bed bug treatment includes inspection and targeted applications to eradicate them from your property.</span>
              </span>
            </a>
            <a href="${adjustLink('/services/rodent-control')}" class="t6-nav-panel-item">
              <span class="t6-nav-panel-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a9 9 0 0 0 9-9c0-5-4-9-9-9s-9 4-9 9a9 9 0 0 0 9 9z"/><circle cx="8.5" cy="11.5" r="1.5" fill="currentColor"/><circle cx="15.5" cy="11.5" r="1.5" fill="currentColor"/><path d="M12 15l-1.5 2.5h3L12 15z" fill="currentColor"/><path d="M3.5 6.5C2 7.5 1.5 10 2 11.5M20.5 6.5C22 7.5 22.5 10 22 11.5"/></svg></span>
              <span class="t6-nav-panel-text">
                <span class="t6-nav-panel-title">Rodent Control</span>
                <span class="t6-nav-panel-desc">Our rodent control services include trapping and exclusion methods to keep your home safe from mice and rats. We address entry points to prevent future infestations.</span>
              </span>
            </a>
            <a href="${adjustLink('/services/wasp-control')}" class="t6-nav-panel-item">
              <span class="t6-nav-panel-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l8.66 5v10L12 22l-8.66-5V7L12 2z"/><path d="M12 2v20M12 7l8.66 5M12 17l-8.66-5"/></svg></span>
              <span class="t6-nav-panel-text">
                <span class="t6-nav-panel-title">Wasp Control</span>
                <span class="t6-nav-panel-desc">We safely remove wasp nests and provide preventative measures to keep your yard free from these stinging pests, ensuring your outdoor space is enjoyable.</span>
              </span>
            </a>
            <a href="${adjustLink('/services/yellow-jacket-control')}" class="t6-nav-panel-item">
              <span class="t6-nav-panel-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><path d="M12 9v4M12 17h.01"/></svg></span>
              <span class="t6-nav-panel-text">
                <span class="t6-nav-panel-title">Yellow Jacket Control</span>
                <span class="t6-nav-panel-desc">Specializing in yellow jacket control, we handle aggressive nests to keep your property safe and secure.</span>
              </span>
            </a>
            <a href="${adjustLink('/services/mosquito-control')}" class="t6-nav-panel-item">
              <span class="t6-nav-panel-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2v20M2 12h20M12 12m-6 0a6 6 0 1 0 12 0 6 6 0 1 0-12 0"/></svg></span>
              <span class="t6-nav-panel-text">
                <span class="t6-nav-panel-title">Mosquito Control</span>
                <span class="t6-nav-panel-desc">Our mosquito control services use barrier sprays to protect your yard and family from dangerous bites and swarm interruptions.</span>
              </span>
            </a>
          </div>
          <a href="${adjustLink('/services')}" class="t6-nav-panel-all">View all services &rarr;</a>
        </div>
      </div>
      <div class="t6-nav-dropdown">
        <a href="${adjustLink('/locations')}" class="t6-nav-link" aria-haspopup="true">Locations <svg class="t6-nav-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></a>
        <div class="t6-nav-panel" role="menu">
          <div class="t6-nav-panel-grid">
            <a href="${adjustLink('/locations/pest-control-in-post-falls')}" class="t6-nav-panel-item">
              <span class="t6-nav-panel-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg></span>
              <span class="t6-nav-panel-text">
                <span class="t6-nav-panel-title">Post Falls</span>
                <span class="t6-nav-panel-desc">Local service in Post Falls</span>
              </span>
            </a>
            <a href="${adjustLink('/locations/pest-control-in-hayden')}" class="t6-nav-panel-item">
              <span class="t6-nav-panel-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg></span>
              <span class="t6-nav-panel-text">
                <span class="t6-nav-panel-title">Hayden</span>
                <span class="t6-nav-panel-desc">Local service in Hayden</span>
              </span>
            </a>
            <a href="${adjustLink('/locations/pest-control-in-rathdrum')}" class="t6-nav-panel-item">
              <span class="t6-nav-panel-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg></span>
              <span class="t6-nav-panel-text">
                <span class="t6-nav-panel-title">Rathdrum</span>
                <span class="t6-nav-panel-desc">Local service in Rathdrum</span>
              </span>
            </a>
            <a href="${adjustLink('/locations/pest-control-in-spirit-lake')}" class="t6-nav-panel-item">
              <span class="t6-nav-panel-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg></span>
              <span class="t6-nav-panel-text">
                <span class="t6-nav-panel-title">Spirit Lake</span>
                <span class="t6-nav-panel-desc">Local service in Spirit Lake</span>
              </span>
            </a>
          </div>
          <a href="${adjustLink('/locations')}" class="t6-nav-panel-all">View all service areas &rarr;</a>
        </div>
      </div>
      <a href="${adjustLink('/blog')}" class="t6-nav-link">Blog</a>
      <a href="${adjustLink('/contact')}" class="t6-nav-link">Contact</a>
    </nav>

    <div style="display:flex;align-items:center;gap:.85rem;">
      <a class="t6-btn t6-btn-primary" href="${adjustLink('/contact')}">Free Estimate</a>
      <button id="t6NavToggle" aria-label="Open menu" aria-expanded="false" aria-controls="t6Drawer" class="t6-nav-toggle" style="background:transparent;border:1px solid var(--t6-hairline);color:var(--t6-ink);width:42px;height:42px;border-radius:8px;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
      </button>
    </div>
  </div>

  <div id="t6Drawer" class="t6-drawer" style="background:var(--t6-ink);border-top:1px solid rgba(255,255,255,.1);position:fixed;top:73px;right:0;bottom:0;left:0;z-index:49;display:none;flex-direction:column;overflow-y:auto;">
    <div class="t6-container" style="padding:1.25rem 1.5rem 1.75rem;">
      <ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:.6rem;font-family:var(--font-body);font-weight:500;font-size:1rem;">
        <li><a href="${adjustLink('/')}" style="color:#fff;text-decoration:none;display:block;padding:.55rem 0;border-bottom:1px solid rgba(255,255,255,.08);">Home</a></li>
        <li><a href="${adjustLink('/about')}" style="color:#fff;text-decoration:none;display:block;padding:.55rem 0;border-bottom:1px solid rgba(255,255,255,.08);">About</a></li>
        <li><a href="${adjustLink('/services')}" style="color:#fff;text-decoration:none;display:block;padding:.55rem 0;border-bottom:1px solid rgba(255,255,255,.08);">Services</a></li>
        <li><a href="${adjustLink('/locations')}" style="color:#fff;text-decoration:none;display:block;padding:.55rem 0;border-bottom:1px solid rgba(255,255,255,.08);">Locations</a></li>
        <li><a href="${adjustLink('/blog')}" style="color:#fff;text-decoration:none;display:block;padding:.55rem 0;border-bottom:1px solid rgba(255,255,255,.08);">Blog</a></li>
        <li><a href="${adjustLink('/contact')}" style="color:#fff;text-decoration:none;display:block;padding:.55rem 0;border-bottom:1px solid rgba(255,255,255,.08);">Contact</a></li>
      </ul>
      <details style="margin-top:1.25rem;color:#fff;"><summary style="font-family:var(--font-display);cursor:pointer;font-weight:600;">Browse Services</summary><ul style="list-style:none;padding:.6rem 0 0;margin:0;display:grid;grid-template-columns:1fr 1fr;gap:.4rem .8rem;color:rgba(255,255,255,.85);"><li><a href="${adjustLink('/services/ant-control')}" class="t6-link-grow t6-link-grow--on-ink">Ant Control</a></li><li><a href="${adjustLink('/services/carpenter-ant-control')}" class="t6-link-grow t6-link-grow--on-ink">Carpenter Ant Control</a></li><li><a href="${adjustLink('/services/spider-control')}" class="t6-link-grow t6-link-grow--on-ink">Spider Control</a></li><li><a href="${adjustLink('/services/flea-control')}" class="t6-link-grow t6-link-grow--on-ink">Flea Control</a></li><li><a href="${adjustLink('/services/roach-control')}" class="t6-link-grow t6-link-grow--on-ink">Roach Control</a></li><li><a href="${adjustLink('/services/bed-bug-treatment')}" class="t6-link-grow t6-link-grow--on-ink">Bed Bug Treatment</a></li><li><a href="${adjustLink('/services/rodent-control')}" class="t6-link-grow t6-link-grow--on-ink">Rodent Control</a></li><li><a href="${adjustLink('/services/wasp-control')}" class="t6-link-grow t6-link-grow--on-ink">Wasp Control</a></li></ul></details>
      <details style="margin-top:1rem;color:#fff;"><summary style="font-family:var(--font-display);cursor:pointer;font-weight:600;">Service Areas</summary><ul style="list-style:none;padding:.6rem 0 0;margin:0;display:grid;grid-template-columns:1fr 1fr;gap:.4rem .8rem;color:rgba(255,255,255,.85);"><li><a href="${adjustLink('/locations/pest-control-in-post-falls')}" class="t6-link-grow t6-link-grow--on-ink">Post Falls</a></li><li><a href="${adjustLink('/locations/pest-control-in-hayden')}" class="t6-link-grow t6-link-grow--on-ink">Hayden</a></li><li><a href="${adjustLink('/locations/pest-control-in-rathdrum')}" class="t6-link-grow t6-link-grow--on-ink">Rathdrum</a></li><li><a href="${adjustLink('/locations/pest-control-in-spirit-lake')}" class="t6-link-grow t6-link-grow--on-ink">Spirit Lake</a></li></ul></details>
      <a href="tel:+12082482701" class="t6-btn t6-btn-primary" style="margin-top:1.5rem;width:100%;">Call +1 (208) 248-2701</a>
    </div>
  </div>
</header>
`;

    // Self-contained mobile drawer toggle logic
    const toggle = this.querySelector("#t6NavToggle");
    const drawer = this.querySelector("#t6Drawer");
    if (toggle && drawer) {
      toggle.addEventListener("click", (e) => {
        e.preventDefault();
        const open = drawer.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
        document.body.style.overflow = open ? "hidden" : "";
        drawer.style.display = open ? "flex" : "none";
      });
      
      drawer.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
          drawer.classList.remove("is-open");
          document.body.style.overflow = "";
          toggle.setAttribute("aria-expanded", "false");
          drawer.style.display = "none";
        });
      });
    }
  }
}
customElements.define('global-header', GlobalHeader);

class GlobalFooter extends HTMLElement {
  connectedCallback() {
    const prefix = getRelativePrefix();
    this.innerHTML = `
<footer class="t6-band-ink" style="padding-top:5rem;padding-bottom:3.5rem;background:var(--t6-ink);color:#fff;border-top:5px solid var(--t6-green); display: block; width: 100%;">
  <div class="t6-container" style="display:grid;grid-template-columns:1.5fr 1fr 1fr 1fr;gap:2.5rem 2rem;">
    
    <!-- Column 1: Brand Info -->
    <div>
      <a href="${adjustLink('/')}" style="display:flex;align-items:center;text-decoration:none;color:#fff;margin-bottom:1.5rem;">
        <img src="${prefix}assets/images/logo-white.png" alt="north idaho pest control" style="height:48px; width:auto; max-height:48px; display:block;" loading="lazy" />
      </a>
      <p style="color:rgba(255,255,255,.78);max-width:340px;font-size:.95rem;line-height:1.7;">Licensed, insured pest control pros serving local homes and businesses with same-day response and a workmanship warranty.</p>
      
      <!-- Social icons -->
      <div style="margin-top:1.25rem;display:flex;flex-wrap:wrap;gap:.6rem;" data-social-links>
        <a href="#" data-social="facebook" aria-label="Facebook" style="color:#fff;display:inline-flex;width:36px;height:36px;border:1px solid rgba(255,255,255,.25);border-radius:50%;align-items:center;justify-content:center;text-decoration:none;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"/></svg>
        </a>
        <a href="#" data-social="instagram" aria-label="Instagram" style="color:#fff;display:inline-flex;width:36px;height:36px;border:1px solid rgba(255,255,255,.25);border-radius:50%;align-items:center;justify-content:center;text-decoration:none;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"/></svg>
        </a>
        <a href="#" data-social="x" aria-label="X/Twitter" style="color:#fff;display:inline-flex;width:36px;height:36px;border:1px solid rgba(255,255,255,.25);border-radius:50%;align-items:center;justify-content:center;text-decoration:none;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"/></svg>
        </a>
        <a href="#" data-social="linkedin" aria-label="LinkedIn" style="color:#fff;display:inline-flex;width:36px;height:36px;border:1px solid rgba(255,255,255,.25);border-radius:50%;align-items:center;justify-content:center;text-decoration:none;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"/></svg>
        </a>
      </div>
    </div>

    <!-- Column 2: Contact -->
    <div>
      <h4 style="color:#fff;font-family:var(--font-display);font-weight:600;font-size:1rem;margin-bottom:1rem;">Contact</h4>
      <hr class="t6-hr-green" style="margin:0 0 1rem;" />
      <div style="color:rgba(255,255,255,.85);font-size:.92rem;line-height:1.7;">
        <p style="margin:0 0 .4rem;"><a href="tel:+12082482701" style="color:#fff;text-decoration:none;font-weight:600;">+1 (208) 248-2701</a></p>
        <p style="margin:0 0 .4rem;">Coeur d'Alene, ID 83814, Coeur d'Alene, Idaho</p>
        <p style="margin:0;">Mon&ndash;Fri: 7AM &ndash; 7PM<br/>Sat: 8AM &ndash; 4PM<br/>24/7 Emergency</p>
      </div>
    </div>

    <!-- Column 3: Services -->
    <div>
      <h4 style="color:#fff;font-family:var(--font-display);font-weight:600;font-size:1rem;margin-bottom:1rem;">Services</h4>
      <hr class="t6-hr-green" style="margin:0 0 1rem;" />
      <ul style="list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:.5rem;font-size:.92rem;">
        <li><a href="${adjustLink('/services/ant-control')}" style="color:rgba(255,255,255,.85);text-decoration:none;">Ant Control</a></li>
        <li><a href="${adjustLink('/services/carpenter-ant-control')}" style="color:rgba(255,255,255,.85);text-decoration:none;">Carpenter Ant Control</a></li>
        <li><a href="${adjustLink('/services/spider-control')}" style="color:rgba(255,255,255,.85);text-decoration:none;">Spider Control</a></li>
        <li><a href="${adjustLink('/services/flea-control')}" style="color:rgba(255,255,255,.85);text-decoration:none;">Flea Control</a></li>
        <li><a href="${adjustLink('/services/roach-control')}" style="color:rgba(255,255,255,.85);text-decoration:none;">Roach Control</a></li>
        <li><a href="${adjustLink('/services/bed-bug-treatment')}" style="color:rgba(255,255,255,.85);text-decoration:none;">Bed Bug Treatment</a></li>
        <li><a href="${adjustLink('/services')}" class="t6-link-grow t6-link-grow--on-ink" style="color:var(--t6-green);">View All &rarr;</a></li>
      </ul>
    </div>

    <!-- Column 4: Quick Links -->
    <div>
      <h4 style="color:#fff;font-family:var(--font-display);font-weight:600;font-size:1rem;margin-bottom:1rem;">Quick Links</h4>
      <hr class="t6-hr-green" style="margin:0 0 1rem;" />
      <ul style="list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:.5rem;font-size:.92rem;">
        <li><a href="${adjustLink('/about')}" style="color:rgba(255,255,255,.85);text-decoration:none;">About Us</a></li>
        <li><a href="${adjustLink('/locations')}" style="color:rgba(255,255,255,.85);text-decoration:none;">Service Areas</a></li>
        <li><a href="${adjustLink('/locations/pest-control-in-post-falls')}" style="color:rgba(255,255,255,.85);text-decoration:none;">Post Falls</a></li>
        <li><a href="${adjustLink('/locations/pest-control-in-hayden')}" style="color:rgba(255,255,255,.85);text-decoration:none;">Hayden</a></li>
        <li><a href="${adjustLink('/locations/pest-control-in-rathdrum')}" style="color:rgba(255,255,255,.85);text-decoration:none;">Rathdrum</a></li>
        <li><a href="${adjustLink('/contact')}" style="color:rgba(255,255,255,.85);text-decoration:none;">Contact</a></li>
        <li><a href="${adjustLink('/privacy-policy')}" style="color:rgba(255,255,255,.85);text-decoration:none;">Privacy Policy</a></li>
      </ul>
    </div>

  </div>

  <div style="margin-top:3rem;padding-top:1.5rem;border-top:1px solid rgba(255,255,255,.12);display:flex;flex-wrap:wrap;justify-content:space-between;gap:1rem;align-items:center;color:rgba(255,255,255,.6);font-size:.85rem;">
    <p style="margin:0;">&copy; 2026 north idaho pest control . Licensed &amp; insured. All rights reserved.</p>
    <p style="margin:0;display:flex;gap:1rem;align-items:center;">
      <span style="display:inline-flex;gap:6px;align-items:center;">
        <span style="font-family:var(--font-display);font-weight:700;color:var(--t6-green);">VISA</span>
        <span style="font-family:var(--font-display);font-weight:700;color:var(--t6-green);">MC</span>
        <span style="font-family:var(--font-display);font-weight:700;color:var(--t6-green);">AMEX</span>
        <span style="font-family:var(--font-display);font-weight:700;color:var(--t6-green);">CASH</span>
      </span>
    </p>
  </div>
  <style>
    @media (max-width: 900px) {
      footer.t6-band-ink > .t6-container > div:first-child { grid-template-columns: 1fr 1fr !important; }
    }
    @media (max-width: 600px) {
      footer.t6-band-ink > .t6-container > div:first-child { grid-template-columns: 1fr !important; }
    }
  </style>
</footer>
`;
  }
}
customElements.define('global-footer', GlobalFooter);
