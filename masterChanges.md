# CURSOR MASTER PROMPT — North Idaho Pest Control
## Complete SEO + GEO + AEO + Pay-Per-Call Conversion Optimization
## Paste this ENTIRE prompt into Cursor Composer (Ctrl+I / Cmd+I)

---

You are a senior technical SEO engineer and conversion rate optimization expert.
I need you to audit and fully optimize an existing 24-file static HTML pest control
lead generation website for North Idaho that monetizes via LeadSmart/Ringba
pay-per-call. The site uses Tailwind CSS (CDN), vanilla JS, Google Fonts (Outfit +
Inter), and has 7 location pages + 11 service pages + 4 root pages.

The site currently has ZERO competitor analysis, ZERO on-page SEO optimization
beyond basic meta tags, and NO content written with AEO/GEO citation signals.
It also lacks critical pay-per-call conversion elements.

Work through ALL tasks below in order. Do NOT skip any section.

---

## ══════════════════════════════════════════
## PHASE 1 — CRITICAL TECHNICAL SEO FIXES
## ══════════════════════════════════════════

### TASK 1.1 — robots.txt (REPLACE ENTIRE FILE)

Open `robots.txt` and REPLACE the entire contents with:

```
User-agent: *
Allow: /

# AI Crawlers — explicitly welcomed for GEO/AEO citations
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: anthropic-ai
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: OAI-SearchBot
Allow: /

# Sitemaps
Sitemap: https://northidahopestcontrol.com/sitemap.xml
```

### TASK 1.2 — sitemap.xml (UPDATE ALL PRIORITIES + ADD lastmod)

Open `sitemap.xml`. For EVERY url entry:
- Add `<lastmod>2026-06-01</lastmod>` below each `<loc>` tag
- Ensure priorities are: index.html=1.0, location pages=0.9, service pages=0.8,
  about/contact/services=0.6
- Verify all 22 URLs are present and use HTTPS

### TASK 1.3 — Google Search Console + Bing Verification Tags

In the `<head>` of `index.html`, add these two meta tags (replace XXXX
with actual verification codes once you have them — leave as placeholders):

```html
<meta name="google-site-verification" content="GOOGLE_VERIFICATION_CODE_HERE" />
<meta name="msvalidate.01" content="BING_VERIFICATION_CODE_HERE" />
```

NOTE FOR USER: After launch, go to:
- search.google.com/search-console → Add property → HTML tag method
- bing.com/webmasters → Add site → Meta tag method
Then replace placeholders with your actual codes.

BING WEBMASTER TOOLS IS CRITICAL — it powers ChatGPT Search citations.
Submit your sitemap at: bing.com/webmasters after verifying.

### TASK 1.4 — Page Speed: Preload Critical Resources

In the `<head>` of EVERY HTML file, add these lines BEFORE the Tailwind CDN link:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="dns-prefetch" href="https://cdn.tailwindcss.com" />
```

Also add to every `<head>`:
```html
<meta name="theme-color" content="#1b4332" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

### TASK 1.5 — Canonical Tags Audit

Open EVERY HTML file. Ensure the canonical tag uses the EXACT URL pattern:
- Homepage: `<link rel="canonical" href="https://northidahopestcontrol.com/" />`
- Location pages: `<link rel="canonical" href="https://northidahopestcontrol.com/" />`
- Service pages: `<link rel="canonical" href="https://northidahopestcontrol.com/ant-control" />`

Fix any that are missing or incorrect.

---

## ══════════════════════════════════════════
## PHASE 2 — SCHEMA MARKUP OVERHAUL
## ══════════════════════════════════════════

### TASK 2.1 — Homepage Schema (index.html)

REPLACE the existing JSON-LD block in index.html with this COMPLETE schema stack:

```html
<script type="application/ld+json">
[
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "North Idaho Pest Control",
    "description": "North Idaho Pest Control is a free referral service connecting homeowners and businesses with licensed independent pest control contractors in Coeur d'Alene, Post Falls, Sandpoint, Hayden, Rathdrum, Spirit Lake, and Moscow, Idaho.",
    "url": "https://northidahopestcontrol.com/",
    "telephone": "(208) 248-2701",
    "areaServed": [
      {"@type": "City", "name": "Coeur d'Alene", "sameAs": "https://en.wikipedia.org/wiki/Coeur_d%27Alene,_Idaho"},
      {"@type": "City", "name": "Post Falls", "sameAs": "https://en.wikipedia.org/wiki/Post_Falls,_Idaho"},
      {"@type": "City", "name": "Sandpoint", "sameAs": "https://en.wikipedia.org/wiki/Sandpoint,_Idaho"},
      {"@type": "City", "name": "Hayden", "sameAs": "https://en.wikipedia.org/wiki/Hayden,_Idaho"},
      {"@type": "City", "name": "Rathdrum", "sameAs": "https://en.wikipedia.org/wiki/Rathdrum,_Idaho"},
      {"@type": "City", "name": "Spirit Lake", "sameAs": "https://en.wikipedia.org/wiki/Spirit_Lake,_Idaho"},
      {"@type": "City", "name": "Moscow", "sameAs": "https://en.wikipedia.org/wiki/Moscow,_Idaho"}
    ],
    "serviceType": [
      "Ant Control", "Carpenter Ant Extermination", "Spider Control",
      "Rodent Control", "Mouse Extermination", "Wasp Removal",
      "Yellowjacket Control", "Bed Bug Treatment", "Mosquito Control",
      "Cockroach Extermination", "Flea Control"
    ],
    "priceRange": "$$",
    "openingHours": "Mo-Su 00:00-23:59",
    "sameAs": []
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "North Idaho Pest Control",
    "url": "https://northidahopestcontrol.com/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://northidahopestcontrol.com/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What pests are most common in North Idaho?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The most common pests in North Idaho include carpenter ants, hobo spiders, rodents, yellowjackets, paper wasps, odorous house ants, and occasional black widows. Homes near lakes such as Coeur d'Alene, Hayden, and Spirit Lake face elevated mosquito pressure during summer months. Rodents become the primary concern in winter as field mice move indoors seeking warmth."
        }
      },
      {
        "@type": "Question",
        "name": "Is there a brown recluse spider in North Idaho?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. The brown recluse spider is not native to Idaho or the Pacific Northwest. The spider most often mistaken for a brown recluse in North Idaho is the hobo spider (Eratigena agrestis), which builds funnel webs in basements, garages, and window wells. Professional spider control is still recommended regardless of species."
        }
      },
      {
        "@type": "Question",
        "name": "How does your pest control referral service work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "North Idaho Pest Control is a free referral service. You call our number, describe your pest problem and location, and we connect you with a licensed independent pest control contractor in your ZIP code who is available to help. There is no fee to use the service. All contractors are independent and licensed by the state of Idaho."
        }
      },
      {
        "@type": "Question",
        "name": "How much does pest control cost in Coeur d'Alene?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pest control in the Coeur d'Alene area typically costs $100 to $300 for a one-time treatment depending on the pest type and property size. Quarterly maintenance plans range from $40 to $80 per month. Rodent exclusion projects average $300 to $800. Bed bug heat treatments range from $1,200 to $2,500 for a standard home."
        }
      },
      {
        "@type": "Question",
        "name": "What cities in North Idaho do you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "North Idaho Pest Control connects homeowners with licensed pest control contractors in Coeur d'Alene, Post Falls, Sandpoint, Hayden, Rathdrum, Spirit Lake, and Moscow, Idaho. We also cover surrounding communities including Dalton Gardens, Athol, Hauser, Twin Lakes, and Ponderay."
        }
      },
      {
        "@type": "Question",
        "name": "Are there Hantavirus-carrying mice in North Idaho?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Deer mice, the primary carrier of Hantavirus Pulmonary Syndrome, are common throughout Kootenai and Bonner County in North Idaho. Hantavirus is transmitted through contact with infected rodent droppings, urine, or nesting materials. If you discover rodent evidence in a long-closed building, do not sweep or vacuum — call a professional pest control service immediately."
        }
      }
    ]
  }
]
</script>
```

### TASK 2.2 — Location Page Schema Template

For EACH of the 7 location pages, REPLACE the existing JSON-LD with this
template (substitute [CITY], [CITY_SLUG], [COUNTY], [COUNTY_WIKI] per city):

CITY MAPPING:
- pest-control-coeur-dalene.html → City: Coeur d'Alene | County: Kootenai
- pest-control-post-falls.html → City: Post Falls | County: Kootenai
- pest-control-sandpoint.html → City: Sandpoint | County: Bonner
- pest-control-hayden.html → City: Hayden | County: Kootenai
- pest-control-rathdrum.html → City: Rathdrum | County: Kootenai
- pest-control-spirit-lake.html → City: Spirit Lake | County: Kootenai
- pest-control-moscow.html → City: Moscow | County: Latah

```html
<script type="application/ld+json">
[
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Pest Control in [CITY], Idaho",
    "description": "North Idaho Pest Control connects homeowners in [CITY], Idaho with licensed independent pest control contractors. We cover ant control, spider treatment, rodent removal, wasp and hornet removal, bed bug treatment, and mosquito control in [CITY] and surrounding [COUNTY] County.",
    "areaServed": {
      "@type": "City",
      "name": "[CITY]",
      "containedInPlace": {
        "@type": "AdministrativeArea",
        "name": "[COUNTY] County, Idaho"
      }
    },
    "provider": {
      "@type": "Organization",
      "name": "North Idaho Pest Control",
      "url": "https://northidahopestcontrol.com/"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://northidahopestcontrol.com/"},
      {"@type": "ListItem", "position": 2, "name": "Locations", "item": "https://northidahopestcontrol.com/"},
      {"@type": "ListItem", "position": 3, "name": "Pest Control in [CITY]", "item": "https://northidahopestcontrol.com/pest-control-[CITY_SLUG]"}
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What pests are common in [CITY], Idaho?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "[CITY_PEST_ANSWER — see city-specific content section below]"
        }
      },
      {
        "@type": "Question",
        "name": "How do I get rid of ants in my [CITY] home?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ant infestations in [CITY] are most common in spring and summer. The most destructive species is the carpenter ant, which nests in moisture-damaged wood. Professional treatment involves perimeter barrier spraying, interior bait placement targeting the queen, and a moisture assessment. Call North Idaho Pest Control to be connected with a licensed contractor in [CITY] for a same-day quote."
        }
      },
      {
        "@type": "Question",
        "name": "Is pest control available in [CITY], Idaho?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. North Idaho Pest Control connects homeowners in [CITY], Idaho with licensed independent pest control contractors. Call (208) 248-2701 to speak with an available provider serving the [CITY] area. Contractors can typically schedule an inspection within 24 to 48 hours for most pest situations."
        }
      }
    ]
  }
]
</script>
```

CITY-SPECIFIC FAQ ANSWERS — use these for the first FAQ "What pests are common in [CITY]":

Coeur d'Alene: "Common pests in Coeur d'Alene include carpenter ants (the leading structural pest in Kootenai County), hobo spiders, odorous house ants, yellowjackets, and mice. Properties near Coeur d'Alene Lake experience elevated mosquito pressure from May through September. Vacation rentals and short-term rental properties also face higher bed bug risk due to frequent guest turnover."

Post Falls: "Common pests in Post Falls include carpenter ants thriving in the moisture of the Spokane River basin, hobo spiders, field mice (which invade from harvested fields each fall), yellowjackets, and paper wasps. The Riverbend and Prairie Falls neighborhoods report consistent ant pressure due to proximity to the river corridor."

Sandpoint: "Common pests in Sandpoint include mosquitoes (breeding heavily near Lake Pend Oreille from May through August), carpenter ants, hobo spiders, yellowjackets, ticks in wooded areas, and mice in the fall. Vacation cabins and lake homes face elevated bed bug risk from seasonal rental activity."

Hayden: "Common pests in Hayden include carpenter ants, mice and voles from adjacent agricultural areas, hobo spiders, yellowjackets, and stink bugs in fall. Properties near Hayden Lake report additional mosquito pressure. Newer construction in Hayden often develops moisture issues in crawlspaces that attract carpenter ants."

Rathdrum: "Common pests in Rathdrum include rodents (especially on larger rural lots with outbuildings), carpenter ants, hobo spiders, black widow spiders, and yellowjackets. Rural Kootenai County properties around Rathdrum and Twin Lakes face some of the highest rodent pressure in the region during fall."

Spirit Lake: "Common pests in Spirit Lake include mosquitoes from the lake itself (active May through August), carpenter ants in wooded lots, hobo spiders, black widow spiders in garages and sheds, and mice in the fall. The forested environment around Spirit Lake creates ideal habitat for spiders and ants year-round."

Moscow: "Common pests in Moscow include mice and cockroaches in multi-unit and student housing near the University of Idaho campus, odorous house ants, hobo spiders, and occasional bed bugs in rental properties with high turnover. Latah County's drier climate creates slightly different pest pressure than Kootenai County."

### TASK 2.3 — Service Page Schema Template

For EACH of the 11 service pages, ADD this JSON-LD (substitute [SERVICE] values):

SERVICE MAPPING:
- ant-control.html → serviceType: "Ant Control", name: "Ant Control Services in North Idaho"
- carpenter-ant-control.html → serviceType: "Carpenter Ant Extermination", name: "Carpenter Ant Control in North Idaho"
- spider-control.html → serviceType: "Spider Control", name: "Spider Exterminator Services in North Idaho"
- rodent-control.html → serviceType: "Rodent Control", name: "Rodent Control in North Idaho"
- wasp-control.html → serviceType: "Wasp Removal", name: "Wasp Control and Nest Removal in North Idaho"
- yellow-jacket-control.html → serviceType: "Yellowjacket Extermination", name: "Yellowjacket Control in North Idaho"
- bed-bug-treatment.html → serviceType: "Bed Bug Treatment", name: "Bed Bug Treatment Services in North Idaho"
- mosquito-control.html → serviceType: "Mosquito Control", name: "Mosquito Control Services in North Idaho"
- roach-control.html → serviceType: "Cockroach Extermination", name: "Cockroach Control in North Idaho"
- flea-control.html → serviceType: "Flea Control", name: "Flea Treatment Services in North Idaho"
- house-fly-control.html → serviceType: "Fly Control", name: "House Fly Control in North Idaho"

```html
<script type="application/ld+json">
[
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "[SERVICE NAME]",
    "serviceType": "[SERVICE TYPE]",
    "description": "[SERVICE DESCRIPTION — use first paragraph of page H1 section]",
    "areaServed": [
      {"@type": "City", "name": "Coeur d'Alene"},
      {"@type": "City", "name": "Post Falls"},
      {"@type": "City", "name": "Sandpoint"},
      {"@type": "City", "name": "Hayden"},
      {"@type": "City", "name": "Rathdrum"},
      {"@type": "City", "name": "Spirit Lake"},
      {"@type": "City", "name": "Moscow"}
    ],
    "provider": {
      "@type": "Organization",
      "name": "North Idaho Pest Control",
      "url": "https://northidahopestcontrol.com/"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://northidahopestcontrol.com/"},
      {"@type": "ListItem", "position": 2, "name": "Services", "item": "https://northidahopestcontrol.com/services"},
      {"@type": "ListItem", "position": 3, "name": "[SERVICE NAME]", "item": "https://northidahopestcontrol.com/[service-slug]"}
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I get rid of [PEST] in North Idaho?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "[ANSWER — write 2–3 declarative, encyclopedic sentences specific to North Idaho's environment. No marketing language.]"
        }
      },
      {
        "@type": "Question",
        "name": "What time of year are [PEST] worst in North Idaho?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "[SEASONAL ANSWER — specific months, conditions in Kootenai/Bonner County]"
        }
      },
      {
        "@type": "Question",
        "name": "How much does [SERVICE] cost in the Coeur d'Alene area?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "[PRICE RANGE ANSWER — specific dollar ranges. Price transparency is an AI Overview magnet.]"
        }
      }
    ]
  }
]
</script>
```

---

## ══════════════════════════════════════════
## PHASE 3 — ON-PAGE CONTENT OPTIMIZATION
## ══════════════════════════════════════════

### TASK 3.1 — Homepage H1 + Answer Block

Find the Hero Section (id="hero") in index.html. The H1 must be:

```html
<h1>Pest Control in North Idaho — Connect with a Licensed Exterminator Today</h1>
```

IMMEDIATELY below the H1 (within the first visible 100 words on the page),
add this Answer Block paragraph. This is the most important AEO/GEO element
on the entire site — AI Overviews pull citations from the first 30% of content:

```html
<p id="answer-block">
  North Idaho Pest Control is a free referral service matching homeowners and
  businesses in Coeur d'Alene, Post Falls, Sandpoint, Hayden, Rathdrum, Spirit
  Lake, and Moscow, Idaho with licensed independent pest control contractors.
  We connect callers with available local providers treating carpenter ants,
  hobo spiders, mice, yellowjackets, bed bugs, and mosquitoes across Kootenai,
  Bonner, and Latah County. Call <a href="tel:2082482701">(208) 248-2701</a>
  to speak with a contractor today.
</p>
```

### TASK 3.2 — Meta Title + Description Optimization

Update meta titles and descriptions on ALL 22 pages. Current titles are too
generic. Replace with these SEO-optimized versions:

**index.html:**
- Title: `Pest Control North Idaho | Connect with a Local Exterminator | CDA, Post Falls, Sandpoint`
- Description: `Free referral service connecting North Idaho homeowners with licensed pest control contractors. Serving Coeur d'Alene, Post Falls, Sandpoint, Hayden, Rathdrum, Spirit Lake & Moscow. Call now.`

**locations/.html:**
- Title: `Pest Control Coeur d'Alene ID | Licensed Exterminator in CDA`
- Description: `Connect with a licensed pest control contractor in Coeur d'Alene, Idaho. We match you with local exterminators treating ants, spiders, rodents, wasps & bed bugs. Call (208) 248-2701.`

**locations/pest-control-post-falls.html:**
- Title: `Pest Control Post Falls ID | Local Exterminator | Kootenai County`
- Description: `Connect with a licensed pest control contractor in Post Falls, Idaho. Local providers treating carpenter ants, mice, spiders, wasps & more in Post Falls and Kootenai County.`

**locations/pest-control-sandpoint.html:**
- Title: `Pest Control Sandpoint ID | Exterminator | Bonner County`
- Description: `Connect with a licensed pest control contractor in Sandpoint, Idaho. Local providers treating ants, mosquitoes, spiders, mice & wasps in Sandpoint and Bonner County.`

**locations/pest-control-hayden.html:**
- Title: `Pest Control Hayden ID | Local Exterminator | North Idaho`
- Description: `Connect with a licensed pest control contractor in Hayden, Idaho. Local providers treating ants, spiders, rodents & wasps in Hayden and Hayden Lake area.`

**locations/pest-control-rathdrum.html:**
- Title: `Pest Control Rathdrum ID | Exterminator | Kootenai County`
- Description: `Connect with a licensed pest control contractor in Rathdrum, Idaho. Local providers treating mice, ants, spiders, black widows & wasps in rural Kootenai County.`

**locations/pest-control-spirit-lake.html:**
- Title: `Pest Control Spirit Lake ID | Exterminator | North Idaho`
- Description: `Connect with a licensed pest control contractor in Spirit Lake, Idaho. Local providers treating mosquitoes, ants, spiders & mice near Spirit Lake.`

**locations/pest-control-moscow.html:**
- Title: `Pest Control Moscow ID | Exterminator | University of Idaho Area`
- Description: `Connect with a licensed pest control contractor in Moscow, Idaho. Local providers treating ants, spiders, cockroaches & bed bugs in Moscow and Latah County.`

**services/ant-control.html:**
- Title: `Ant Control North Idaho | Carpenter Ant Exterminator | CDA & Post Falls`
- Description: `Connect with a licensed ant exterminator in North Idaho. We refer local contractors treating carpenter ants, odorous house ants & pavement ants across Kootenai County.`

**services/carpenter-ant-control.html:**
- Title: `Carpenter Ant Control North Idaho | Structural Ant Exterminator`
- Description: `Carpenter ants are the #1 structural pest in the Idaho Panhandle. Connect with a licensed contractor treating carpenter ant infestations in Coeur d'Alene, Post Falls & Sandpoint.`

**services/spider-control.html:**
- Title: `Spider Control North Idaho | Hobo Spider & Black Widow Exterminator`
- Description: `Connect with a licensed spider exterminator in North Idaho. Local contractors treating hobo spiders, black widows, wolf spiders & more across Kootenai and Bonner County.`

**services/rodent-control.html:**
- Title: `Rodent Control North Idaho | Rodent Exterminator | CDA Area`
- Description: `Connect with a licensed rodent control contractor in North Idaho. Local providers using trapping, exclusion & sanitation to remove rodents from homes in Kootenai County.`

**services/wasp-control.html:**
- Title: `Wasp Control North Idaho | Hornet & Nest Removal | CDA & Sandpoint`
- Description: `Connect with a licensed wasp removal contractor in North Idaho. Local providers removing paper wasp, yellowjacket & bald-faced hornet nests across Kootenai and Bonner County.`

**services/yellow-jacket-control.html:**
- Title: `Yellowjacket Control North Idaho | Nest Removal | Kootenai County`
- Description: `Connect with a licensed yellowjacket exterminator in North Idaho. Local contractors remove aggressive yellowjacket nests from yards, eaves & underground colonies.`

**services/bed-bug-treatment.html:**
- Title: `Bed Bug Treatment North Idaho | Exterminator | Coeur d'Alene Area`
- Description: `Connect with a licensed bed bug exterminator in North Idaho. Local contractors offering heat treatment and chemical protocols for homes, rentals & vacation properties.`

**services/mosquito-control.html:**
- Title: `Mosquito Control North Idaho | Lake Property Treatment | CDA & Sandpoint`
- Description: `Connect with a licensed mosquito control contractor in North Idaho. Local providers offering barrier treatments for lake properties, yards & commercial spaces.`

**services/roach-control.html:**
- Title: `Cockroach Exterminator North Idaho | Roach Control | Coeur d'Alene`
- Description: `Connect with a licensed cockroach exterminator in North Idaho. Local contractors treating German cockroaches, American roaches & brown-banded roaches in homes and businesses.`

**services/flea-control.html:**
- Title: `Flea Control North Idaho | Flea Exterminator | Kootenai County`
- Description: `Connect with a licensed flea control contractor in North Idaho. Local providers treating flea infestations in homes with pets across Coeur d'Alene, Post Falls & Hayden.`

**services/house-fly-control.html:**
- Title: `House Fly Control North Idaho | Fly Exterminator | Commercial & Residential`
- Description: `Connect with a licensed fly control contractor in North Idaho. Local providers treating house fly infestations in homes, restaurants & commercial properties.`

**about.html:**
- Title: `About North Idaho Pest Control | How Our Referral Service Works`
- Description: `Learn how North Idaho Pest Control connects homeowners with licensed independent pest control contractors in Coeur d'Alene, Post Falls, Sandpoint & surrounding areas.`

**contact.html:**
- Title: `Contact North Idaho Pest Control | Check ZIP Code Coverage | Call Now`
- Description: `Check if pest control referral coverage is available in your ZIP code. Call (208) 248-2701 to be connected with a licensed pest control contractor in North Idaho.`

**services.html:**
- Title: `Pest Control Services in North Idaho | Ants, Spiders, Rodents, Wasps & More`
- Description: `Browse pest control services available through North Idaho Pest Control. We connect homeowners with licensed contractors treating ants, spiders, rodents, wasps, bed bugs & more.`

### TASK 3.3 — Location Page Content Enhancement

For EACH location page, find the main content section and ensure these
elements exist IN THIS ORDER. Add any that are missing:

1. **H1** — must contain: "[CITY] Pest Control | Connect with a Licensed Exterminator"

2. **Answer Block** (first 100 words, paragraph tag, id="answer-block-[city]"):
   "[Business Name] connects homeowners and businesses in [CITY], Idaho with
   licensed independent pest control contractors. We refer local providers
   treating the area's most common pests including [3-4 specific local pests].
   Call (208) 248-2701 for a same-day connection to an available contractor
   serving [CITY] and [COUNTY] County."

3. **H2: Common Pests in [CITY], Idaho** — paragraph with city-specific
   pest details (use the city pest notes from Task 2.2)

4. **H2: Pest Control Services Available in [CITY]** — bullet list of services

5. **H2: Frequently Asked Questions — Pest Control in [CITY]** — 3 Q&A pairs
   displayed as visible text (in addition to schema)

6. **H2: ZIP Codes We Cover in [CITY] Area** — list the ZIP codes:
   - Coeur d'Alene: 83814, 83815, 83816
   - Post Falls: 83854
   - Sandpoint: 83864
   - Hayden: 83835
   - Rathdrum: 83858
   - Spirit Lake: 83869
   - Moscow: 83843, 83844

7. **H2: Nearby Communities We Also Serve** — link to neighboring city pages

### TASK 3.4 — Service Page Content: Add Answer Blocks

For EACH of the 11 service pages, find the opening paragraph and ensure
the FIRST 100 words contain a direct declarative answer block. It must:
- State what the service IS (declarative, not marketing)
- Name the specific pests in North Idaho context
- Name the cities served
- Give a price range

Example for ant-control.html (insert/replace opening paragraph):
```html
<p id="answer-block">
  Ant control services in North Idaho eliminate carpenter ants, odorous house
  ants, and pavement ants from residential and commercial properties across
  Kootenai, Bonner, and Latah County. Carpenter ants are the most destructive
  species in the Idaho Panhandle, nesting in moisture-damaged wood in crawl
  spaces, decks, and wall voids. Treatment typically costs $120 to $280 for
  a one-time perimeter application. North Idaho Pest Control refers callers
  in Coeur d'Alene, Post Falls, Sandpoint, Hayden, Rathdrum, Spirit Lake,
  and Moscow to licensed local contractors. Call (208) 248-2701.
</p>
```

Write equivalent answer blocks for all 11 service pages using the same
structure (factual, declarative, price range, city list).

---

## ══════════════════════════════════════════
## PHASE 4 — PAY-PER-CALL CONVERSION OPTIMIZATION
## ══════════════════════════════════════════

### TASK 4.1 — Phone Number Consistency (CRITICAL for Ringba/LeadSmart)

Search EVERY HTML file for phone number instances.
Replace ALL instances of `(208) 248-2701` tel: links with this exact format:
```html
<a href="tel:+12082482701" class="[existing classes]">(208) 248-2701</a>
```

IMPORTANT: The `tel:` format MUST use E.164 format (`+1` prefix) for proper
Ringba call routing. Do NOT use `tel:2082482701` — use `tel:+12082482701`.

### TASK 4.2 — Sticky CTA Bar Enhancement

Find the sticky bottom CTA bar (mobile sticky conversion bar). REPLACE its
content with this enhanced version that includes urgency + trust signals:

```html
<div id="sticky-cta" class="fixed bottom-0 left-0 right-0 z-50 bg-green-900 py-3 px-4 flex items-center justify-between shadow-lg md:hidden">
  <div class="flex flex-col">
    <span class="text-white text-xs font-medium">📞 Pest problem? Connect now</span>
    <span class="text-green-300 text-xs">Licensed contractors · Available today</span>
  </div>
  <a href="tel:+12082482701"
     class="bg-amber-500 hover:bg-amber-400 text-white font-bold text-sm px-5 py-2.5 rounded-lg transition-colors"
     onclick="gtag && gtag('event', 'call_click', {'event_category': 'conversion', 'event_label': 'sticky_cta'})">
    Call (208) 248-2701
  </a>
</div>
```

### TASK 4.3 — Hero Section CTA Buttons

In the Hero Section (id="hero"), ensure there are TWO conversion buttons:

```html
<!-- Primary CTA — phone call -->
<a href="tel:+12082482701"
   class="inline-flex items-center bg-amber-500 hover:bg-amber-400 text-white font-bold text-lg px-8 py-4 rounded-xl shadow-lg transition-colors"
   onclick="gtag && gtag('event', 'call_click', {'event_category': 'conversion', 'event_label': 'hero_primary'})">
  📞 Call (208) 248-2701
</a>

<!-- Secondary CTA — ZIP checker -->
<a href="#coverage"
   class="inline-flex items-center bg-white hover:bg-green-50 text-green-900 font-semibold text-base px-6 py-4 rounded-xl border border-green-200 transition-colors ml-4">
  Check Your ZIP Code →
</a>
```

### TASK 4.4 — Above-the-Fold Trust Signals

In the hero section, immediately below the buttons, add this trust bar:

```html
<div class="flex flex-wrap items-center gap-4 mt-4 text-sm text-green-100">
  <span class="flex items-center gap-1.5">
    <svg class="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
    Idaho Licensed Contractors
  </span>
  <span class="flex items-center gap-1.5">
    <svg class="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
    Free to Use — No Fees
  </span>
  <span class="flex items-center gap-1.5">
    <svg class="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
    Same-Day Connections Available
  </span>
  <span class="flex items-center gap-1.5">
    <svg class="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
    Serving 22 ZIP Codes in North Idaho
  </span>
</div>
```

### TASK 4.5 — Add Click Tracking Events to ALL CTAs

In `assets/js/main.js`, add this function at the TOP of the file:

```javascript
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
  // Ringba call tracking (auto-fires on tel: link click via Ringba JS)
  // No additional code needed if Ringba JS tag is installed
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
```

### TASK 4.6 — Add Google Analytics 4 Tag Placeholder

In the `<head>` of EVERY HTML file, add this block (user replaces
G-DFQG3EQM3C with their actual GA4 Measurement ID):

```html
<!-- Google Analytics 4 — replace G-DFQG3EQM3C with your Measurement ID -->
<!-- Get your ID at: analytics.google.com → Admin → Data Streams -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-DFQG3EQM3C"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-DFQG3EQM3C');
</script>
```

NOTE FOR USER: You must also add the Ringba JS tracking tag in the <head>.
Get your Ringba JS tag from your Ringba account → Campaign → Tracking Tags.
It looks like: `<script src="//b-js.ringba.com/CAXXXXXXXXXXXXX"></script>`

---

## ══════════════════════════════════════════
## PHASE 5 — GEO/AEO CONTENT SIGNALS
## ══════════════════════════════════════════

### TASK 5.1 — North Idaho Regional Pest Context Section

Find the section with id="north-idaho-pests" in index.html.
REPLACE its inner content with this AEO-optimized version:

```html
<div class="max-w-4xl mx-auto">
  <h2 class="text-3xl font-bold text-green-900 mb-6">
    Pest Control in North Idaho: What Homeowners Need to Know
  </h2>

  <p class="text-gray-700 mb-6 text-lg leading-relaxed">
    North Idaho's pest landscape is shaped by its geography: the moisture from
    Coeur d'Alene Lake, Hayden Lake, and the Spokane River basin creates ideal
    conditions for carpenter ant colonies, while cold winters push mice and
    rodents into crawl spaces, attics, and wall voids. Understanding the
    seasonal pest cycle in Kootenai, Bonner, and Latah County is the first
    step toward effective protection.
  </p>

  <div class="grid md:grid-cols-2 gap-8 mb-8">
    <div>
      <h3 class="text-xl font-semibold text-green-800 mb-3">Spring (March–May)</h3>
      <p class="text-gray-600 leading-relaxed">
        Carpenter ants emerge as the leading structural threat, nesting in
        moisture-damaged wood as snow melts. Odorous house ants invade kitchens
        following pheromone trails laid by scouts. Hobo spiders become active
        and move into basements and garages. Wasps begin building nests under
        eaves and in wall voids.
      </p>
    </div>
    <div>
      <h3 class="text-xl font-semibold text-green-800 mb-3">Summer (June–August)</h3>
      <p class="text-gray-600 leading-relaxed">
        Yellowjackets peak in aggression by late July and August, particularly
        near garbage cans and outdoor dining areas. Mosquitoes breed heavily
        near Coeur d'Alene Lake, Spirit Lake, Lake Pend Oreille, and Hayden
        Lake. Bald-faced hornets build large enclosed nests in trees and shrubs.
      </p>
    </div>
    <div>
      <h3 class="text-xl font-semibold text-green-800 mb-3">Fall (September–November)</h3>
      <p class="text-gray-600 leading-relaxed">
        Field mice and deer mice — the primary carriers of Hantavirus in North
        Idaho — move indoors as harvested fields cool and temperatures drop.
        Boxelder bugs and stink bugs cluster on south-facing walls seeking
        warmth. Black widow spiders are more commonly encountered in garages
        and sheds as they prepare for winter.
      </p>
    </div>
    <div>
      <h3 class="text-xl font-semibold text-green-800 mb-3">Winter (December–February)</h3>
      <p class="text-gray-600 leading-relaxed">
        Mice nest in attic insulation and wall voids, gnawing on electrical
        wiring (a documented fire hazard). German cockroaches remain active
        year-round in multi-unit residential buildings. Winter is the optimal
        time for professional exclusion work — sealing entry points before the
        next pest season begins.
      </p>
    </div>
  </div>

  <div class="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
    <h3 class="text-lg font-semibold text-amber-900 mb-2">
      ⚠️ Important: Hobo Spider vs. Brown Recluse in North Idaho
    </h3>
    <p class="text-amber-800 text-sm leading-relaxed">
      The brown recluse spider is <strong>not native to Idaho</strong> or the
      Pacific Northwest. The spider most frequently misidentified as a brown
      recluse in North Idaho is the <strong>hobo spider</strong> (Eratigena
      agrestis), which builds funnel-shaped webs in basements, garages, and
      window wells. While current research has revised earlier assessments of
      hobo spider venom danger, professional treatment is still recommended.
      If you have found a spider in your home, call (208) 248-2701 and describe
      it to a contractor who can advise you.
    </p>
  </div>

  <div class="bg-red-50 border border-red-200 rounded-xl p-6">
    <h3 class="text-lg font-semibold text-red-900 mb-2">
      🦠 Hantavirus Risk: Deer Mice in North Idaho
    </h3>
    <p class="text-red-800 text-sm leading-relaxed">
      Deer mice are the primary reservoir of Hantavirus Pulmonary Syndrome
      in the Northern Rocky Mountain region. If you discover rodent evidence
      — droppings, gnaw marks, or nesting material — in a long-closed cabin,
      garage, or outbuilding, <strong>do not sweep or vacuum</strong> without
      proper respiratory protection. Contact a pest control professional
      immediately. North Idaho Pest Control can connect you with a licensed
      rodent control contractor serving your ZIP code.
    </p>
  </div>
</div>
```

### TASK 5.2 — Enhanced FAQ Section (id="faqs")

REPLACE the existing FAQ accordion content in index.html with these
10 questions. Keep the existing accordion CSS/JS — only change the Q&A content:

Q1: What is the most common pest in Coeur d'Alene?
A1: Carpenter ants are the most common and most destructive pest in Coeur
d'Alene and the surrounding Kootenai County area. They do not eat wood but
excavate moisture-damaged wood to build nesting galleries, causing structural
damage over time. Homes near Coeur d'Alene Lake are especially vulnerable
due to ambient moisture levels. Odorous house ants are the most frequently
seen species entering kitchens in spring and summer.

Q2: Are hobo spiders dangerous in North Idaho?
A2: The hobo spider (Eratigena agrestis) is the most common spider concern
in North Idaho and the Pacific Northwest. Early research suggested its venom
caused tissue damage, but more recent studies have largely not replicated
those findings. That said, spiders in the home are a nuisance and some
individuals may react to bites. Professional spider treatment creates a
perimeter barrier that prevents spiders from entering and eliminates
existing indoor populations.

Q3: Is there Hantavirus in North Idaho?
A3: Yes. Deer mice, the primary carrier of Hantavirus Pulmonary Syndrome,
are widespread throughout Kootenai, Bonner, and Latah County. Hantavirus
cases have been reported periodically in Idaho. The disease is transmitted
through contact with infected rodent droppings, urine, or nesting materials —
most commonly when cleaning closed structures like cabins or garages. Do not
disturb rodent evidence without respiratory protection. Call a professional
for safe removal.

Q4: How much does pest control cost in North Idaho?
A4: Pest control costs in North Idaho vary by service type. A one-time general
pest treatment typically costs $120 to $280 for a standard home. Quarterly
maintenance plans range from $40 to $80 per month. Rodent exclusion programs
cost $300 to $800 depending on property size. Bed bug heat treatments average
$1,200 to $2,500. Wasp and hornet nest removal is typically $150 to $300.
Mosquito barrier treatments for lake properties range from $75 to $200 per
application.

Q5: How do I know if I have carpenter ants or termites?
A5: Carpenter ants and termites can both damage wood structures, but they
behave differently. Carpenter ants excavate wood without eating it, leaving
behind smooth-walled galleries and "frass" — a sawdust-like material mixed
with insect body parts. Termites eat wood and leave behind mud tubes and
damaged wood with a honeycomb interior. In North Idaho, carpenter ants are
far more common than termites, though termite activity has been documented
in the region. If you are unsure which pest you have, a licensed contractor
can inspect and identify the species.

Q6: How do I get rid of yellowjackets in my yard in North Idaho?
A6: Yellowjackets in North Idaho are most aggressive from late July through
September. Nest removal should never be attempted without professional
equipment, as yellowjackets will defend nests aggressively and can sting
multiple times. Underground nests — the most dangerous type — require
dusting or foaming treatment at night when workers have returned to the
nest. Paper wasp nests on eaves can be removed more safely but still
carry sting risk. Call a pest control contractor for professional nest
removal.

Q7: What are the ZIP codes covered by North Idaho Pest Control?
A7: North Idaho Pest Control covers 22 ZIP codes across Kootenai, Bonner,
and Latah County, including: 83814, 83815, 83816 (Coeur d'Alene); 83854
(Post Falls); 83864 (Sandpoint); 83835 (Hayden); 83858 (Rathdrum); 83869
(Spirit Lake); 83843, 83844 (Moscow); and surrounding communities. Use
the ZIP code checker on our contact page to confirm coverage for your address.

Q8: Do I need pest control if I live outside a city in North Idaho?
A8: Rural and semi-rural properties in North Idaho often face greater pest
pressure than urban areas. Homes on larger lots near fields, forests, or
water sources experience higher rodent activity (especially in fall), more
carpenter ant pressure, and greater exposure to ticks and mosquitoes.
North Idaho Pest Control connects callers in rural areas with licensed
contractors who serve unincorporated Kootenai, Bonner, and Latah County.

Q9: How do mosquito control treatments work for lake properties?
A9: Mosquito barrier treatments for lake-adjacent properties in North Idaho
involve applying a residual insecticide to vegetation and shaded areas where
mosquitoes rest during the day. The treatment kills existing adults on
contact and provides protection for three to four weeks. For properties
on Coeur d'Alene Lake, Hayden Lake, Spirit Lake, or Lake Pend Oreille,
regular applications from May through September provide the most effective
season-long control.

Q10: Are the pest control contractors licensed in Idaho?
A10: All independent pest control contractors referred through North Idaho
Pest Control operate under their own licenses and are responsible for
maintaining valid Idaho state pesticide applicator licenses. Idaho requires
commercial pesticide applicators to hold a current license issued by the
Idaho Department of Agriculture. When you speak with a contractor, ask to
confirm their license number, which you can verify at agri.idaho.gov.

---

## ══════════════════════════════════════════
## PHASE 6 — INTERNAL LINKING ARCHITECTURE
## ══════════════════════════════════════════

### TASK 6.1 — Service-to-Location Cross-Links

In EACH service page, add a "Service Available in These Cities" section
before the footer with links to all 7 location pages:

```html
<section class="bg-green-50 py-10">
  <div class="max-w-5xl mx-auto px-4">
    <h2 class="text-xl font-semibold text-green-900 mb-4">
      [SERVICE NAME] Available Across North Idaho
    </h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
      <a href="../locations/.html" class="text-green-700 hover:text-green-900 underline text-sm">Coeur d'Alene</a>
      <a href="../locations/pest-control-post-falls.html" class="text-green-700 hover:text-green-900 underline text-sm">Post Falls</a>
      <a href="../locations/pest-control-sandpoint.html" class="text-green-700 hover:text-green-900 underline text-sm">Sandpoint</a>
      <a href="../locations/pest-control-hayden.html" class="text-green-700 hover:text-green-900 underline text-sm">Hayden</a>
      <a href="../locations/pest-control-rathdrum.html" class="text-green-700 hover:text-green-900 underline text-sm">Rathdrum</a>
      <a href="../locations/pest-control-spirit-lake.html" class="text-green-700 hover:text-green-900 underline text-sm">Spirit Lake</a>
      <a href="../locations/pest-control-moscow.html" class="text-green-700 hover:text-green-900 underline text-sm">Moscow</a>
    </div>
  </div>
</section>
```

### TASK 6.2 — Location-to-Service Cross-Links

In EACH location page, ensure the services section links to ALL service pages:

```html
<h2 class="text-2xl font-bold text-green-900 mb-4">
  Pest Control Services in [CITY]
</h2>
<div class="grid grid-cols-2 md:grid-cols-3 gap-3">
  <a href="../services/ant-control.html">Ant Control</a>
  <a href="../services/carpenter-ant-control.html">Carpenter Ant Control</a>
  <a href="../services/spider-control.html">Spider Control</a>
  <a href="../services/rodent-control.html">Rodent Control</a>
  <a href="../services/wasp-control.html">Wasp Control</a>
  <a href="../services/yellow-jacket-control.html">Yellowjacket Control</a>
  <a href="../services/bed-bug-treatment.html">Bed Bug Treatment</a>
  <a href="../services/mosquito-control.html">Mosquito Control</a>
  <a href="../services/roach-control.html">Cockroach Control</a>
  <a href="../services/flea-control.html">Flea Control</a>
  <a href="../services/house-fly-control.html">Fly Control</a>
</div>
```

### TASK 6.3 — Location-to-Location Nearby Cities Links

In EACH location page, add a "Nearby Communities We Serve" section with
links to the other 6 location pages:

```html
<section class="py-8 border-t border-green-100">
  <h2 class="text-xl font-semibold text-green-900 mb-3">
    Pest Control in Nearby North Idaho Communities
  </h2>
  <div class="flex flex-wrap gap-3">
    <!-- Link to all OTHER 6 location pages from this city page -->
    <!-- Exclude the current city from this list -->
  </div>
</section>
```

---

## ══════════════════════════════════════════
## PHASE 7 — OPEN GRAPH + SOCIAL SIGNALS
## ══════════════════════════════════════════

### TASK 7.1 — Open Graph Tags Enhancement

For EVERY page, ensure these OG tags are present and correctly filled:

```html
<meta property="og:type" content="website" />
<meta property="og:site_name" content="North Idaho Pest Control" />
<meta property="og:title" content="[PAGE TITLE — same as meta title]" />
<meta property="og:description" content="[PAGE DESCRIPTION — same as meta description]" />
<meta property="og:url" content="[FULL CANONICAL URL]" />
<meta property="og:image" content="https://northidahopestcontrol.com/assets/images/og-image.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:locale" content="en_US" />
```

Also add Twitter Card tags:
```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="[PAGE TITLE]" />
<meta name="twitter:description" content="[PAGE DESCRIPTION]" />
<meta name="twitter:image" content="https://northidahopestcontrol.com/assets/images/og-image.jpg" />
```

---

## ══════════════════════════════════════════
## PHASE 8 — FINAL VALIDATION CHECKLIST
## ══════════════════════════════════════════

After completing all changes, verify the following:

### Technical Checks
- [ ] Every page has exactly ONE <h1> tag
- [ ] robots.txt includes all AI bot user-agents
- [ ] sitemap.xml has lastmod dates on all 22 URLs
- [ ] All tel: links use format `tel:+12082482701`
- [ ] All canonical tags use HTTPS and match exact file paths
- [ ] No broken internal links (check all href values)
- [ ] JSON-LD schema exists on all 22 pages
- [ ] FAQPage schema exists on homepage + all location + all service pages
- [ ] Answer blocks (id="answer-block*") appear in first 100 words on all pages
- [ ] Service-to-location cross-links working in both directions
- [ ] Google Analytics placeholder in all 22 pages
- [ ] Preconnect tags for Google Fonts in all pages

### Content Checks
- [ ] Meta titles between 50-60 characters (count every title)
- [ ] Meta descriptions between 140-160 characters
- [ ] City-specific pest content on all 7 location pages
- [ ] ZIP codes listed on each location page
- [ ] Price ranges mentioned in service page answer blocks
- [ ] Hobo spider / brown recluse clarification on spider-control.html
- [ ] Hantavirus section on rodent-control.html and homepage

### Conversion Checks
- [ ] Sticky bottom bar on all pages (mobile only: md:hidden)
- [ ] Sticky top announcement bar on all pages
- [ ] Trust signals bar in hero section
- [ ] TWO CTAs in hero (call button + ZIP checker)
- [ ] Click tracking on all tel: links
- [ ] GA4 placeholder in all pages

---

## ══════════════════════════════════════════
## POST-IMPLEMENTATION: USER ACTION ITEMS
## (Things Cursor cannot do — you must do manually)
## ══════════════════════════════════════════

1. **Replace domain placeholder**: Find-replace `northidahopestcontrol.com`
   with your actual domain throughout all files.

2. **Replace phone number**: Find-replace `(208) 248-2701` and `+12082482701`
   with your actual LeadSmart/Ringba tracking number throughout all files.

3. **Google Search Console**: Go to search.google.com/search-console
   → Add property → select URL prefix → choose HTML tag verification
   → copy the code → replace GOOGLE_VERIFICATION_CODE_HERE in index.html
   → click Verify → Submit sitemap at: /sitemap.xml

4. **Bing Webmaster Tools** (CRITICAL for ChatGPT Search citations):
   Go to bing.com/webmasters → Add site → meta tag verification
   → replace BING_VERIFICATION_CODE_HERE in index.html → verify
   → Submit sitemap URL

5. **Google Analytics 4**: Go to analytics.google.com → Admin
   → Create property → Web data stream → copy Measurement ID (G-XXXXXXXX)
   → Find-replace G-DFQG3EQM3C in all files with your actual ID

6. **Ringba JS Tag**: Log into your Ringba account → Campaigns
   → select your pest control campaign → Tracking Tags → JS Tag
   → copy the script tag → add it to <head> of every HTML page

7. **OG Image**: Create a 1200×630px image with your site name and a
   North Idaho landscape or pest control visual. Save as
   `assets/images/og-image.jpg` and add to all pages.

8. **LeadSmart ZIP List**: Log into LeadSmart → open the ZIP List Spreadsheet
   → verify all North Idaho ZIP codes are covered and note payout rates
   → update the ZIP checker in main.js with covered ZIP codes

9. **Citation Building** (do after launch):
   Submit identical NAP to: Google Business Profile, Yelp, Bing Places,
   Apple Maps, Angi/HomeAdvisor, BBB, Nextdoor
   Use EXACT same business name, address, phone every time.

10. **Monthly**: Ask ChatGPT and Perplexity "best pest control in Coeur d'Alene"
    and "pest control North Idaho" — document whether your site is cited.
    This is your GEO tracking dashboard.

---

*Prompt Version: June 2026 | Optimized for Google May 2026 Core Update signals,
Google's official AI Optimization Guide (June 2026), LeadSmart/Ringba
pay-per-call compliance, and North Idaho local search market.*