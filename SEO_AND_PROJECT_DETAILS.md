# North Idaho Pest Control — SEO & Project Details Documentation

This document provides a complete technical reference for the **North Idaho Pest Control** static lead-generation website (`northidahopestcontrol.com`). It details the tech stack, site architecture, page sections, SEO/AEO optimizations, tracking mechanisms, and deployment configurations implemented.

---

## 1. Technical Stack

*   **Core Structure**: Semantic HTML5 markup.
*   **Styling**: Tailwind CSS loaded via CDN, with custom extend configurations (e.g., custom forest green color palette matching the Kootenai county region theme).
*   **Fonts**: Outfit (headers) and Inter (body copy) imported from Google Fonts.
*   **Components Layer (`assets/js/components.v3.js`)**: Encapsulates reusable UI elements like `<global-header>` and `<global-footer>` as custom web components for easier maintenance across multiple pages.
*   **Behavior Layer (`assets/js/main.js`)**: Vanilla JavaScript managing desktop dropdown toggles, mobile drawers, accordion expansion, and local form validations.
*   **Local Dev Server (`server.js`)**: A lightweight, zero-dependency Node.js server designed to serve clean, extensionless URLs locally by automatically appending `.html` on request fallbacks.

---

## 2. Directory & Site Architecture

The project consists of **22 main pages** structured as follows:

```text
[Workspace Root]
│   index.html                  # Homepage (Coeur d'Alene target & regional context)
│   about.html                  # Referral model & licensing disclosures
│   contact.html                # Contact page with integrated ZIP availability widget
│   services.html               # General directory listing of all pest categories
│   robots.txt                  # Search engine crawl configs (optimized for AI bots)
│   sitemap.xml                 # XML sitemap index for search engines
│   server.js                   # Zero-dependency Node.js development server
│
├───.github
│   └───workflows
│           deploy.yml          # GitHub Actions cPanel FTP deployment workflow
│
├───assets
│   ├───css
│   │       style.css           # Custom stylesheets (glassmorphism, fonts, keyframes)
│   │
│   └───js
│           components.v3.js    # Custom HTML Web Components (header and footer)
│           main.js             # Form behaviors, accordion triggers, telemetry click events
│
├───locations                   # 6 City target landing pages
│       pest-control-hayden.html
│       pest-control-moscow.html
│       pest-control-post-falls.html
│       pest-control-rathdrum.html
│       pest-control-sandpoint.html
│       pest-control-spirit-lake.html
│
└───services                    # 11 Service category landing pages
        ant-control.html
        bed-bug-treatment.html
        carpenter-ant-control.html
        flea-control.html
        house-fly-control.html
        mosquito-control.html
        rodent-control.html
        roach-control.html
        spider-control.html
        wasp-control.html
        yellow-jacket-control.html
```

---

## 3. Page Structure & Section Layouts

### Homepage (`index.html`)
The primary target page optimized for Coeur d'Alene, ID.
1.  **Sticky Announcement Bar**: Displays target conversion number `+1 (208) 248-2701`.
2.  **Navigation Header**: Custom web component logo, links, and dropdown list.
3.  **Hero Section (`id="hero"`)**: High-converting title, connection trust triggers, and immediate CTA.
4.  **AEO Answer Block (`id="answer-block"`)**: Directly addresses user search intent in the first 100 words for search engines.
5.  **USPs Block (`id="usps"`)**: Features licensing disclosures, fast dispatch metrics, and contractor parameters.
6.  **Coverage Section (`id="coverage"`)**: Maps served cities and offers an interactive ZIP checker tool.
7.  **Service Directory Grid (`id="services"`)**: Visual grid of the 11 pest control cards.
8.  **Pest Identification Guide (`id="north-idaho-pests"`)**: Content targeting regional pests (Hobo spiders, carpenter ants, mice) and weather cycles.
9.  **Site FAQs Accordion (`id="faqs"`)**: 10 collapsible question containers addressing common questions.
10. **Legal Disclosures Footer**: Standard Ringba/LeadSmart compliance disclaimer.

### Location Pages (`locations/*.html`)
Targeted city-specific landing pages (e.g. Hayden, Moscow, Post Falls) using a structured SEO footprint:
*   **Hero Section**: Emphasizes local availability.
*   **Core Answer Block**: Answers local pest queries immediately.
*   **Common Local Pests section**: Focuses on bugs unique to that city's ecology.
*   **Local Service List**: List of 11 pest cards.
*   **Footer Nearby Communities Grid**: Interlinks neighboring cities to boost thematic coverage.

### Service Pages (`services/*.html`)
Dedicated pages targeting specific bugs (e.g., Carpenter Ants, Yellow Jackets) containing:
*   **Hero Grid**: High-quality macro image and immediate call buttons.
*   **AEO Definition block**: Factual introduction block.
*   **Signs of Infestation**: 3-step indicators (e.g., frass, nesting wood, visual sightings).
*   **Treatment Approach**: Professional steps deployed by exterminators.

---

## 4. Technical SEO & AEO Optimization Details

### Domain & Canonical Configuration
*   **Target Domain**: Globally configured to use `https://northidahopestcontrol.com/` in all HTML canonical files.
*   **Canonical System**: Every file contains an absolute `<link rel="canonical" href="...">` tag to prevent duplicate content indexing.
*   **Open Graph and Twitter URL Cards**: OG meta properties (`og:url`, `og:image`, `twitter:image`) are dynamically mapped on all 22 files to ensure smooth sharing previews.

### Clean & Extensionless Slug Architecture
*   All internal links (menu navigation, footer links, in-page grids) utilize clean, extensionless slugs (e.g. `/services/wasp-control` instead of `/services/wasp-control.html` and `/about` instead of `/about.html`).
*   This matches professional hosting routing behaviors on production.

### Structured Schema Markups (JSON-LD)
*   **LocalBusiness Schema**: Configured on the homepage to register Coeur d'Alene, ID, including geographic coordinates, business details, and county boundaries.
*   **Service Schema**: Configured on every service-specific page defining `serviceType`, `areaServed`, and service descriptions.
*   **FAQPage Schema**: Embedded in the HTML of pages hosting FAQ sections to allow rich results in Google SERPs.
*   **BreadcrumbList Schema**: Active breadcrumb trails populated in schema formats across all location pages, service subpages, and index paths.

### Sitemap and Crawling Control
*   **Sitemap (`sitemap.xml`)**: Lists all 22 clean page slugs, complete with `<lastmod>` values and correct prioritization weights (Home: `1.0`, Locations: `0.9`, Services: `0.8`, Support: `0.6`).
*   **robots.txt**: Standard search configurations combined with explicit **Allow** commands welcoming generative AI crawlers (`GPTBot`, `ClaudeBot`, `PerplexityBot`, `OAI-SearchBot`, etc.) to index the site for GEO/AEO citation sources.

---

## 5. Outbound Call Telemetry & GA4 Integration

*   **Tel: Anchors**: All dialer targets formatted cleanly to `tel:+12082482701` to trigger hardware handlers.
*   **Click Captures**: Outbound call buttons integrate telemetry hooks:
    ```javascript
    onclick="gtag('event', 'call_click', {'event_category': 'outbound', 'event_label': 'coeur-dalene-hero'});"
    ```
*   **Auto-attach Script (`assets/js/main.js`)**: An automated DOM listener scans for `tel:` link interactions, maps their relative section IDs or parent cards, and dispatches custom conversion logs to Google Analytics.

---

## 6. GitHub Actions FTP Deployment Workflow

The site's deployment is automated using a YAML workflow file:
*   **Path**: `.github/workflows/deploy.yml`
*   **Trigger**: Fires on any push to the `main` branch.
*   **Action**: Syncs build folders directly to your cPanel hosting at the directory `/northidahopestcontrol.com/` using FTP.
*   **Exclusions**: Keeps repository config files (`.git/`, `.github/`, local dev `server.js`, and raw markdown documentations) from cluttering the cPanel hosting root directory.
