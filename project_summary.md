# North Idaho Pest Control — Project Audit & Migration Summary

Welcome to the comprehensive audit, architecture blueprint, and migration log for **North Idaho Pest Control**. This document serves as the technical single source of truth for the codebase, outlining the modern design systems, Local SEO structure, telephony telemetry, and migration accomplishments completed so far.

---

## 1. Project Overview & Objectives
North Idaho Pest Control is a premium, high-conversion Local Service business web application targeting the North Idaho region (Coeur d'Alene, Post Falls, Hayden, Rathdrum, and Spirit Lake). 
* **Business Goal**: Maximize high-intent phone call leads through the dedicated helpline: `+1 (208) 248-2701`.
* **Lead Strategy**: Eliminate static forms in favor of high-visibility call actions, creating a frictionless user path.
* **SEO Target**: Establish local dominance through targeted regional pages and search-engine-friendly structure (highly optimized for AEO/GEO/traditional SERP).

---

## 2. Technical Stack
The web application is built on a clean, high-performance static/hybrid foundation designed for instant loading speeds and server-side routing clean URLs:

| Layer | Technology | Details |
| :--- | :--- | :--- |
| **Frontend Core** | HTML5 / JavaScript (ES6) | Semantic markup with dynamic Web Component layering. |
| **Styling Engine** | Tailwind CSS v4 | Loaded via browser CDN (`@tailwindcss/browser@4`) for instant compilation. |
| **Styling Base** | Custom Global CSS | [global.css](file:///c:/Users/WINDOWS/Downloads/pest-control-cda-idaho/assets/global.css) manages custom theme tokens, typography, and complex keyframe animations. |
| **Routing System** | Apache Server Routing | [.htaccess](file:///c:/Users/WINDOWS/Downloads/pest-control-cda-idaho/.htaccess) handles rewrite rules for clean, extensionless URLs (e.g. `/services/ant-control`). |
| **Node.js Environment**| Node.js / Express Server | [server.js](file:///c:/Users/WINDOWS/Downloads/pest-control-cda-idaho/server.js) runs local development previews and production asset configurations. |
| **Telemetry System** | PHP / Flat-file DB | Custom click tracking API (`track_click.php`) with an admin panel (`admin.php`). |

---

## 3. Design Aesthetics & Visual Identity
The visual interface is built on **Theme-6 (Trade Pro)** parameters, showcasing rich aesthetics that convey authority, professionalism, and modern engineering:
* **Color Palette**:
  * Forest Green Primary (`--color-forest`: `#1b4332`) representing safety, nature, and professionalism.
  * Forest Green Secondary (`--color-forest-500`: `#2d6a4f`).
  * Dark Forest Accent (`--color-forest-900`: `#081c15`).
  * Charcoal Dark (`--t6-ink`: `#172207`).
  * Warm Amber / Gold highlights (`#fbbf24` / `#f59e0b`) for active hover buttons and critical ratings.
* **Glassmorphism**: Sticky headers use `.glass-effect` (translucent white background `rgba(255, 255, 255, 0.85)` + `backdrop-filter: blur(8px)`) to keep layouts layered and premium.
* **Micro-Animations**: Hover animations on links (`hover:translate-x-1`, `hover:text-forest`), scaling buttons (`hover:scale-[1.02]`), and smooth transitions (`transition-all duration-200`) make the UI feel responsive and alive.
* **Zero Placeholders**: All asset slots use real generated high-resolution WebP images customized for target pest species and service actions.

---

## 4. Page Architecture & Design Sections
Each page follows a structured conversion layout designed to nurture leads from top-of-funnel to call conversion:
1. **Dynamic Navigation Header**: Prominent logo, dynamic dropdown panels, and a high-visibility `Free Estimate` call-to-action.
2. **Hero Banner Section**: Large bold headings, high-quality background graphic, regional checkmark list, and primary phone lead actions.
3. **Services / Features Showcase**: Icon-accented grid layout showcasing targeted pest treatments (e.g., ants, spiders, rodents) with descriptive service previews.
4. **Authority & Validation Sections**: Workmanship warranty details, safety standards, and regional testimonials validating local trust.
5. **Interactive Mapping & NAP**: Real Google Map embeddings centered on service locations paired with clear Address, Phone, and Hours details.
6. **Dynamic Footer**: Quick links, logo-white asset, accepted payment types, and legal disclaimers.

---

## 5. Local SEO & Search Engine Optimizations
Built with a "Local First" indexing architecture:
* **Clean Slugs**: Clean URLs map directories symmetrically:
  * Service Pages: `/services/[service-slug]` (e.g. `/services/carpenter-ant-control`)
  * Location Pages: `/locations/[location-slug]` (e.g. `/locations/pest-control-in-post-falls`)
* **Strict Semantic Hierarchy**: Single `<h1>` per page matched with hierarchy-compliant `<h2>`, `<h3>` tags.
* **JSON-LD Schema Markup**: Rich structured data (Schema.org) injected in the `<head>` of all pages targeting `LocalBusiness`, `FAQPage`, `BreadcrumbList`, and specific `OfferCatalog` services.
* **AEO / GEO Optimization**: Custom `robots.txt` explicitly allows and welcomes AI scrapers (like `GPTBot`, `ClaudeBot`, `PerplexityBot`, etc.) to index the site for generative search citations.
* **XML Sitemap**: Programmatic XML listing at `/sitemap.xml` mapping clean URLs with priority tags.

---

## 6. Telephony Telemetry & Lead Tracking
Lead generation is backed by flat-file event logging:
* **Custom Call Handler (`trackCall`)**: Global JS dispatcher binds telephony clicks to trigger two events simultaneously:
  1. Sends a Google Analytics 4 (`phone_call` / `lead_generation`) event.
  2. Sends an async POST payload to the custom backend endpoint `/track_click`.
* **Database Logger (`clicks_db.php`)**: Local flat-file database logging IP addresses, timestamps, CTAs clicked, and origin pages.
* **Telemetry Dashboard (`admin.php`)**: Password-protected PHP panel showing real-time call charts, conversion tables, and event telemetry.
* **Auto-Listener Injection**: Main JS script automatically binds click listeners to all `href="tel:..."` elements on load.

---

## 7. Migration Work Completed So Far
We have successfully restructured the project:
1. **Workspace Cleanup**: Purged all obsolete files and directories outside of the new structure to establish a clean codebase.
2. **New Folder Extraction**: Transferred all files from the updated package folder to the workspace root.
3. **Restored Brand Assets**: Restored original high-res logo files, favicons, site manifest, and server configurations (`.htaccess`, `server.js`).
4. **Tailwind v4 Styling Integration**: Added CSS theme variables and components classes to `global.css` to fully support v4 compiler classes.
5. **HTML Dynamic Template Migration**: Migrated all 21 HTML pages to replace hardcoded, repetitive `<header>` and `<footer>` layouts with dynamic `<global-header>` and `<global-footer>` custom web elements.
6. **Polished components.v3.js Navigation**:
   * Updated navbar services links to redirect to new subfolder URLs `/services/...`.
   * Replaced drop-downs, mobile drawer accordions, and footer columns to render new content, layout cards, maps, and hours correctly.
   * Created **dynamic path and protocol handlers** (`getRelativePrefix` and `adjustLink`) to ensure that all assets, logos, and link redirects resolve correctly in both online web servers (extensionless URLs) and local filesystem previews (`file:///c:/...` with `.html` mapping).
   * Injected header styling CSS definitions directly into `components.v3.js` to ensure the menu renders beautifully with Tailwind browser compilers without CORS request blocks on local files.

---

## 8. Page-by-Page SEO & Content Audit

This section audits the entire site structure, detailing the clean URL routes, targeted local search keywords, section names, and exact heading tag (`<h1>`, `<h2>`) mappings to guarantee semantic indexing and high search engine ranking signals.

### 8.1 Core Web Pages (Hub Pages)

| Page Route | Targeted Keywords | Page Sections | Heading Structure (Hierarchy) | Targeted Density |
| :--- | :--- | :--- | :--- | :--- |
| **Home (`/`)** | `pest control Coeur d'Alene ID`<br>`exterminator Coeur d'Alene` | • Hero Section<br>• Professional Standards<br>• Services Grid<br>• Why Choose Us<br>• Treatment Process<br>• FAQ Section<br>• Map & NAP Panel | `<h1>`: pest control Coeur d'Alene ID<br>`<h2>`: Our Professional Exterminator Coeur d'Alene Standards<br>`<h2>`: Coeur d'Alene Pest Control Services<br>`<h2>`: Why We Are the Best Exterminator in Coeur d'Alene<br>`<h2>`: Our Coeur d'Alene Pest Treatment Process<br>`<h2>`: Coeur d'Alene Exterminator FAQs<br>`<h2>`: Contact Our Coeur d'Alene Office | Primary Key: 2.2%<br>Secondary Key: 1.8% |
| **About Us (`/about`)** | `about pest control services Coeur d'Alene`<br>`exterminator Coeur d'Alene` | • Hero Section<br>• Our Story<br>• USP Grid<br>• Call-to-action | `<h1>`: about pest control services in Coeur d'Alene<br>`<h2>`: Our Story<br>`<h2>`: Why Coeur d'Alene Chooses Us<br>`<h2>`: Need pest control Coeur d'Alene ID? | Primary Key: 1.5%<br>Secondary Key: 1.2% |
| **Contact Us (`/contact`)** | `contact pest control Coeur d'Alene ID`<br>`exterminator Coeur d'Alene` | • Hero Section<br>• Contact Details<br>• Location Map | `<h1>`: contact pest control Coeur d'Alene ID<br>`<h2>`: Call Our Coeur d'Alene Office | Primary Key: 1.8%<br>Secondary Key: 1.0% |
| **Services Hub (`/services`)** | `pest control services in Coeur d'Alene` | • Hero Section<br>• Comprehensive Grid | `<h1>`: pest control services in Coeur d'Alene<br>`<h2>`: Pest Control Services We Offer | Primary Key: 2.0% |
| **Locations Hub (`/locations`)** | `pest control services in North Idaho` | • Hero Section<br>• Coverage Areas Grid | `<h1>`: pest control services in North Idaho<br>`<h2>`: Our North Idaho Service Areas | Primary Key: 1.6% |

---

### 8.2 Location Landing Pages

These pages are designed to capture hyper-local search intent for secondary cities around Coeur d'Alene. Each page contains structural Local Schema data matching the specific municipality.

| Page Route | Targeted Keywords | Page Sections | Heading Structure (Hierarchy) | Targeted Density |
| :--- | :--- | :--- | :--- | :--- |
| **/locations/pest-control-in-post-falls** | `pest control Post Falls ID`<br>`exterminator Post Falls` | • Hero Section<br>• Services Grid<br>• Why Us Table<br>• FAQ Panel<br>• NAP Map | `<h1>`: pest control Post Falls ID<br>`<h2>`: Post Falls Exterminator Services<br>`<h2>`: The Post Falls Pest Control Team You Can Trust<br>`<h2>`: Post Falls Exterminator FAQs<br>`<h2>`: Contact Our Post Falls Office | Primary Key: 2.4%<br>Secondary Key: 1.5% |
| **/locations/pest-control-in-hayden** | `pest control Hayden ID`<br>`exterminator Hayden ID` | • Hero Section<br>• Services Grid<br>• Why Us Grid<br>• FAQ Panel<br>• NAP Map | `<h1>`: pest control Hayden ID<br>`<h2>`: Hayden Exterminator Services<br>`<h2>`: The Hayden Pest Control Team You Can Trust<br>`<h2>`: Hayden Exterminator FAQs<br>`<h2>`: Contact Our Hayden Office | Primary Key: 2.3%<br>Secondary Key: 1.6% |
| **/locations/pest-control-in-rathdrum** | `pest control Rathdrum ID`<br>`exterminator Rathdrum` | • Hero Section<br>• Services Grid<br>• Why Us Grid<br>• FAQ Panel<br>• NAP Map | `<h1>`: pest control Rathdrum ID<br>`<h2>`: Rathdrum Exterminator Services<br>`<h2>`: The Rathdrum Pest Control Team You Can Trust<br>`<h2>`: Rathdrum Exterminator FAQs<br>`<h2>`: Contact Our Rathdrum Office | Primary Key: 2.2%<br>Secondary Key: 1.5% |
| **/locations/pest-control-in-spirit-lake** | `pest control Spirit Lake ID`<br>`exterminator Spirit Lake` | • Hero Section<br>• Services Grid<br>• Why Us Grid<br>• FAQ Panel<br>• NAP Map | `<h1>`: pest control Spirit Lake ID<br>`<h2>`: Spirit Lake Exterminator Services<br>`<h2>`: The Spirit Lake Pest Control Team You Can Trust<br>`<h2>`: Spirit Lake Exterminator FAQs<br>`<h2>`: Contact Our Spirit Lake Office | Primary Key: 2.1%<br>Secondary Key: 1.4% |

---

### 8.3 Service-Specific Pages

These pages are deep nested to capture long-tail search intent for specific pest concerns. Each page contains targeted educational advice and highlights chemical/preventative treatments.

| Page Route / Topic | Targeted Keywords | Page Sections | Heading Structure (Hierarchy) | Targeted Density |
| :--- | :--- | :--- | :--- | :--- |
| **/services/ant-control** | `ant control Coeur d'Alene ID` | • Hero Banner<br>• Species Grid<br>• Treatment Steps<br>• FAQs | `<h1>`: Ant Control Coeur d'Alene ID<br>`<h2>`: Common Ants in Coeur d'Alene<br>`<h2>`: Our Coeur d'Alene Ant Treatment Process<br>`<h2>`: Ant Control FAQs | Primary Key: 2.5% |
| **/services/carpenter-ant-control** | `carpenter ant control Coeur d'Alene` | • Hero Banner<br>• Damage Overview<br>• Solutions<br>• FAQs | `<h1>`: Carpenter Ant Control Coeur d'Alene<br>`<h2>`: Signs of Carpenter Ants<br>`<h2>`: Professional Carpenter Ant Solutions<br>`<h2>`: Carpenter Ant FAQs | Primary Key: 2.6% |
| **/services/spider-control** | `spider control Coeur d'Alene ID` | • Hero Banner<br>• Venomous Species<br>• Spray Plans<br>• FAQs | `<h1>`: Spider Control Coeur d'Alene ID<br>`<h2>`: Spiders in Coeur d'Alene<br>`<h2>`: Our Spider Eradication Treatment<br>`<h2>`: Spider Control FAQs | Primary Key: 2.4% |
| **/services/flea-control** | `flea control Coeur d'Alene` | • Hero Banner<br>• Pet Safety<br>• Treatment Cycle<br>• FAQs | `<h1>`: Flea Control Coeur d'Alene<br>`<h2>`: Flea Infestation Dangers<br>`<h2>`: Our Flea Elimination Plan<br>`<h2>`: Flea Control FAQs | Primary Key: 2.2% |
| **/services/roach-control** | `roach control Coeur d'Alene` | • Hero Banner<br>• Health Risks<br>• Baiting Strategies<br>• FAQs | `<h1>`: Roach Control Coeur d'Alene<br>`<h2>`: Cockroach Problems in Coeur d'Alene<br>`<h2>`: Our Roach Eradication Methods<br>`<h2>`: Roach Control FAQs | Primary Key: 2.5% |
| **/services/bed-bug-treatment** | `bed bug treatment Coeur d'Alene` | • Hero Banner<br>• Infestation Signs<br>• Heat/Chemical Plan<br>• FAQs | `<h1>`: Bed Bug Treatment Coeur d'Alene<br>`<h2>`: Signs of Bed Bugs in Coeur d'Alene<br>`<h2>`: Custom Bed Bug Solutions<br>`<h2>`: Bed Bug FAQs | Primary Key: 2.7% |
| **/services/rodent-control** | `rodent control Coeur d'Alene ID` | • Hero Banner<br>• Exclusion Areas<br>• Baiting System<br>• FAQs | `<h1>`: Rodent Control Coeur d'Alene ID<br>`<h2>`: Mice & Rat Risks in Coeur d'Alene<br>`<h2>`: Professional Rodent Exclusion<br>`<h2>`: Rodent Control FAQs | Primary Key: 2.4% |
| **/services/wasp-control** | `wasp control Coeur d'Alene` | • Hero Banner<br>• Nest Removal safety<br>• Protection Plans<br>• FAQs | `<h1>`: Wasp Control Coeur d'Alene<br>`<h2>`: Stinging Insects in Coeur d'Alene<br>`<h2>`: Safe Wasp Nest Removal<br>`<h2>`: Wasp Control FAQs | Primary Key: 2.3% |
| **/services/yellow-jacket-control** | `yellow jacket control Coeur d'Alene` | • Hero Banner<br>• Nest Excavation<br>• Security Plans<br>• FAQs | `<h1>`: Yellow Jacket Control Coeur d'Alene<br>`<h2>`: Yellow Jacket Dangers<br>`<h2>`: Professional Nest Removal<br>`<h2>`: Yellow Jacket FAQs | Primary Key: 2.2% |
| **/services/mosquito-control** | `mosquito control Coeur d'Alene` | • Hero Banner<br>• Barrier Sprays<br>• Breeding Mitigation<br>• FAQs | `<h1>`: Mosquito Control Coeur d'Alene<br>`<h2>`: Mosquito Swarms in North Idaho<br>`<h2>`: Yard Barrier Spray Treatments<br>`<h2>`: Mosquito FAQs | Primary Key: 2.1% |

---

### 8.4 Educational Blog Content

Blog posts target informational keywords to capture top-of-funnel searches from local residents seeking DIY pest guides before calling.

| Page Route / Blog Topic | Targeted Keywords | Page Sections | Heading Structure (Hierarchy) | Targeted Density |
| :--- | :--- | :--- | :--- | :--- |
| **/blog/why-are-there-so-many-spiders-in-my-coeur-d-alene-home** | `spiders Coeur d'Alene`<br>`why so many spiders` | • Hero Title<br>• Introduction<br>• Reasons<br>• Prevention Guide | `<h1>`: Why Are There So Many Spiders in My Coeur d'Alene Home?<br>`<h2>`: Understanding local spider seasons<br>`<h2>`: How to prevent spider webs | Primary Key: 1.8%<br>Secondary Key: 1.1% |
| **/blog/pest-control-cost-in-coeur-d-alene-what-to-expect-this-summer** | `pest control cost Coeur d'Alene`<br>`exterminator cost` | • Hero Title<br>• Introduction<br>• Pricing Factors<br>• Estimate Tips | `<h1>`: Pest Control Cost in Coeur d'Alene: What to Expect This Summer<br>`<h2>`: Typical price factors in North Idaho<br>`<h2>`: How to get a free estimate | Primary Key: 1.9%<br>Secondary Key: 1.2% |
| **/blog/how-to-prevent-ants-from-invading-your-post-falls-property** | `prevent ants Post Falls`<br>`ant prevention Post Falls` | • Hero Title<br>• Introduction<br>• Inspection Zones<br>• Preventative Tips | `<h1>`: How to Prevent Ants from Invading Your Post Falls Property<br>`<h2>`: Checking foundation cracks for pests<br>`<h2>`: Recommended prevention steps | Primary Key: 1.7%<br>Secondary Key: 1.0% |

---

## 9. Next Steps
* Complete verification testing on pages.
* Configure and inspect server-side rewrite rules.
* Deploy and evaluate conversion analytics.
