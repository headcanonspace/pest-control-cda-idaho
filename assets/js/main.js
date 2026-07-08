// Pay-per-call conversion tracking
function trackCall(label) {
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
}

function sendTelemetry(data) {
  fetch('/track_click', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).catch(function(err) {
    console.warn('Telemetry offline:', err);
  });
}

// Auto-attach tracking to all tel: links
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('a[href^="tel:"]').forEach(function(link) {
    link.addEventListener('click', function() {
      var label = this.closest('[data-cta-label]')?.dataset.ctaLabel
                  || this.closest('section')?.id
                  || 'unknown';
      trackCall(label);
    });
  });
});

// assets/js/main.js
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initAccordions();
  initContactForm();
  initZipChecker();
  initDesktopDropdowns();
});

/**
 * Mobile Navigation Menu Toggler
 */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (!menuBtn || !mobileMenu) return;

  menuBtn.addEventListener('click', () => {
    const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', !isExpanded);
    
    // Toggle classes
    mobileMenu.classList.toggle('hidden');
    
    // Update menu button icon representation if any
    const hamburgerIcon = menuBtn.querySelector('.hamburger-icon');
    const closeIcon = menuBtn.querySelector('.close-icon');
    
    if (hamburgerIcon && closeIcon) {
      hamburgerIcon.classList.toggle('hidden');
      closeIcon.classList.toggle('hidden');
    }
  });
}

/**
 * FAQ Accordion Behavior
 */
function initAccordions() {
  const accordionButtons = document.querySelectorAll('[data-accordion-btn], [data-mobile-accordion-btn]');

  accordionButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const panelId = btn.getAttribute('aria-controls');
      const panel = document.getElementById(panelId);
      if (!panel) return;

      const isExpanded = btn.getAttribute('aria-expanded') === 'true';
      
      // Close other accordions in the same group if needed, but standard rank-and-rent allows multi-open.
      // Toggle current accordion
      btn.setAttribute('aria-expanded', !isExpanded);
      
      // Toggle visual height
      if (!isExpanded) {
        panel.style.maxHeight = panel.scrollHeight + 'px';
        panel.classList.add('active');
        // Toggle icon rotation
        const icon = btn.querySelector('.accordion-icon');
        if (icon) icon.classList.add('rotate-180');
      } else {
        panel.style.maxHeight = '0px';
        panel.classList.remove('active');
        // Toggle icon rotation
        const icon = btn.querySelector('.accordion-icon');
        if (icon) icon.classList.remove('rotate-180');
      }
    });
  });
}

/**
 * Contact Form Validation and Success State
 */
function initContactForm() {
  const form = document.getElementById('pest-contact-form');
  if (!form) return;

  const nameInput = document.getElementById('form-name');
  const phoneInput = document.getElementById('form-phone');
  const zipInput = document.getElementById('form-zip');
  const issueSelect = document.getElementById('form-issue');
  const messageInput = document.getElementById('form-message');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // Reset previous errors
    clearErrors(form);

    // Validate Name
    if (!nameInput.value.trim()) {
      showError(nameInput, 'Name is required.');
      isValid = false;
    }

    // Validate Phone (10 digits, optional hyphens/parentheses)
    const phonePattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (!phoneInput.value.trim()) {
      showError(phoneInput, 'Phone number is required.');
      isValid = false;
    } else if (!phonePattern.test(phoneInput.value.trim())) {
      showError(phoneInput, 'Please enter a valid 10-digit phone number (e.g. 208-555-0199).');
      isValid = false;
    }

    // Validate ZIP (5-digit number)
    const zipPattern = /^[0-9]{5}$/;
    if (!zipInput.value.trim()) {
      showError(zipInput, 'ZIP code is required.');
      isValid = false;
    } else if (!zipPattern.test(zipInput.value.trim())) {
      showError(zipInput, 'Please enter a valid 5-digit ZIP code.');
      isValid = false;
    }

    // Validate Pest Issue
    if (!issueSelect.value) {
      showError(issueSelect, 'Please select a pest issue.');
      isValid = false;
    }

    if (isValid) {
      // Form submission success behavior (visual feedback since static page)
      const successDiv = document.createElement('div');
      successDiv.className = 'mt-6 p-4 bg-emerald-50 border border-emerald-300 text-emerald-800 rounded-lg shadow-sm flex items-start gap-3 animate-fade-in';
      successDiv.innerHTML = `
        <svg class="h-6 w-6 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <div>
          <h4 class="font-bold">Connection Request Received!</h4>
          <p class="text-sm mt-1">We are matching your details with a local pest control provider in your area. A professional will contact you shortly.</p>
        </div>
      `;
      
      // Hide form contents, append success message
      form.innerHTML = '';
      form.appendChild(successDiv);
    }
  });

  // Helper to show error messages
  function showError(inputElement, message) {
    inputElement.classList.add('border-red-500', 'ring-1', 'ring-red-500');
    
    const errSpan = document.createElement('span');
    errSpan.className = 'text-red-600 text-xs mt-1 block form-error-msg';
    errSpan.innerText = message;
    
    inputElement.parentNode.appendChild(errSpan);
  }

  // Helper to clear error messages
  function clearErrors(formElement) {
    const inputs = formElement.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
      input.classList.remove('border-red-500', 'ring-1', 'ring-red-500');
    });

    const errorMsgs = formElement.querySelectorAll('.form-error-msg');
    errorMsgs.forEach(msg => msg.remove());
  }
}

/**
 * ZIP Code Checker for Contact Page
 */
function initZipChecker() {
  const input = document.getElementById('zip-checker-input');
  const btn = document.getElementById('zip-checker-btn');
  const result = document.getElementById('zip-checker-result');

  if (!input || !btn || !result) return;

  const coveredZips = ["83825","83840","83841","83822","83851","83852","83856","83869","83876","83843","83844","83864","83858","83854","83877","83835","83814","83815","83816","83803","83813","83860"];

  btn.addEventListener('click', () => {
    const val = input.value.trim();
    if (!val) {
      result.className = "text-xs p-3 rounded-lg leading-relaxed bg-amber-50 border border-amber-200 text-amber-800 font-medium";
      result.innerText = "Please enter a ZIP code.";
      result.classList.remove('hidden');
      return;
    }

    if (!/^[0-9]{5}$/.test(val)) {
      result.className = "text-xs p-3 rounded-lg leading-relaxed bg-red-50 border border-red-200 text-red-800 font-medium";
      result.innerText = "Please enter a valid 5-digit numerical ZIP code.";
      result.classList.remove('hidden');
      return;
    }

    if (coveredZips.includes(val)) {
      result.className = "text-xs p-3 rounded-lg leading-relaxed bg-emerald-50 border border-emerald-200 text-emerald-800 font-medium";
      result.innerText = "Good news. This ZIP code may be within our current pest control provider coverage. Please call now or complete the form so we can help connect you.";
    } else {
      result.className = "text-xs p-3 rounded-lg leading-relaxed bg-blue-50 border border-blue-200 text-blue-800 font-medium";
      result.innerText = "This ZIP code may be outside current coverage. You can still contact us and we will check availability.";
    }
    result.classList.remove('hidden');
  });
}

/**
 * Desktop Accessible Hover & Keyboard Focus Dropdowns
 */
function initDesktopDropdowns() {
  const dropdownContainers = document.querySelectorAll('.relative.group');
  
  dropdownContainers.forEach(container => {
    const button = container.querySelector('button[aria-haspopup="true"]');
    if (!button) return;

    // Hover mouse behavior updates ARIA tags
    container.addEventListener('mouseenter', () => {
      button.setAttribute('aria-expanded', 'true');
    });
    container.addEventListener('mouseleave', () => {
      button.setAttribute('aria-expanded', 'false');
    });
    
    // Keyboard Focus behavior
    button.addEventListener('focus', () => {
      button.setAttribute('aria-expanded', 'true');
    });
    
    // Collapse if focus moves out of the active container
    container.addEventListener('focusout', (e) => {
      if (!container.contains(e.relatedTarget)) {
        button.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

