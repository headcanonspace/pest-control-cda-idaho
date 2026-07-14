// Pay-per-call conversion tracking (Global Scope for inline onclicks)
window.trackCall = function(label) {
  // Google Analytics 4 event
  if (typeof gtag !== 'undefined') {
    gtag('event', 'phone_call', {
      'event_category': 'lead_generation',
      'event_label': label,
      'value': 1
    });
  }
  // Custom Local Telemetry
  sendTelemetry({
    page: window.location.pathname,
    cta: label
  });
};

window.sendTelemetry = function(data) {
  fetch('/track_click', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).catch(function(err) {
    console.warn('Telemetry offline:', err);
  });
};

// Auto-attach tracking to all tel: links
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('a[href^="tel:"]').forEach(function(link) {
    link.addEventListener('click', function() {
      var label = this.closest('[data-cta-label]')?.dataset.ctaLabel
                  || this.closest('section')?.id
                  || 'unknown';
      window.trackCall(label);
    });
  });
});

(function () {
  "use strict";


  // ------- Mobile drawer -------
  function initDrawer() {
    var toggle = document.getElementById("t6NavToggle");
    var drawer = document.getElementById("t6Drawer");
    if (!toggle || !drawer) return;

    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      var open = drawer.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      document.body.style.overflow = open ? "hidden" : "";
    });

    drawer.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        drawer.classList.remove("is-open");
        document.body.style.overflow = "";
        toggle.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && drawer.classList.contains("is-open")) {
        drawer.classList.remove("is-open");
        document.body.style.overflow = "";
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  // ------- Sticky CTA show/hide -------
  function initStickyCta() {
    var bar = document.querySelector(".t6-mobile-cta");
    if (!bar) return;
    bar.style.transition = "transform .25s ease";
    window.addEventListener("scroll", function () {
      var y = window.scrollY;
      // Hide when at the very top of the page (no need to interrupt hero).
      if (y < 120) {
        bar.style.transform = "translateY(100%)";
      } else {
        bar.style.transform = "translateY(0)";
      }
    }, { passive: true });
  }

  // ------- Smooth-scroll for anchor links -------
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener("click", function (e) {
        var hash = a.getAttribute("href");
        if (!hash || hash === "#" || hash.length < 2) return;
        var target = document.querySelector(hash);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

  // ------- sal.js init + safety net -------
  function initSal() {
    if (typeof sal === "function") {
      try {
        sal({ once: true, threshold: 0.12 });
      } catch { /* noop */ }
    }
    // Safety: force-reveal anything still hidden 600 ms after init in case
    // sal.js fails to load or activate elements already in the viewport.
    setTimeout(function () {
      document.querySelectorAll("[data-sal]:not(.sal-animate)").forEach(function (el) {
        el.style.opacity = "1";
        el.style.transform = "none";
      });
    }, 600);
  }

  function init() {
    initDrawer();
    initStickyCta();
    initSmoothScroll();
    initSal();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
