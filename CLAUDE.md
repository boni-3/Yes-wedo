# CLAUDE.md — Project Reference for AI Assistants

## Overview

**Yes, We Do** is a marketing and advertising agency based in Rio Tinto, Porto, Portugal.
This repository contains a single-page landing website served at **https://yes-wedo.pt**.
The site is a static HTML page with no build system, no frameworks, and no backend.
Language: **Portuguese (Portugal) (pt-PT)**.

---

## Project Structure

```
Yes-wedo/
├── index.html                  # Single-page HTML (all sections)
├── portfolio.html              # Portfolio gallery page (filterable grid + lightbox)
├── data/
│   └── portfolio-data.json     # All portfolio projects (JSON, read by JS)
├── css/
│   ├── style.css               # Source CSS (includes pg-* gallery classes)
│   ├── style.min.css           # Minified CSS — referenced by HTML
│   └── fonts.css               # Local @font-face declarations
├── js/
│   ├── main.js                 # Source JS (includes gallery/lightbox logic)
│   ├── main.min.js             # Minified JS — referenced by HTML
│   └── vendor/
│       ├── gsap.min.js         # GSAP core (self-hosted)
│       ├── ScrollTrigger.min.js
│       └── ScrollToPlugin.min.js
├── fonts/
│   ├── inter-latin.woff2
│   ├── inter-latin-ext.woff2
│   ├── space-grotesk-latin.woff2
│   └── space-grotesk-latin-ext.woff2
├── img/
│   ├── portfolio/              # WebP images (1536x1024, ~100-200KB each)
│   │   └── new/                # Drop new images here for add-portfolio.sh
│   ├── favicons/               # 5 sizes (16, 32, 180, 192, 512)
│   ├── logo-horizontal-new.webp
│   ├── Socios .webp            # NOTE: space before the dot in filename
│   ├── hero-video-light.mp4    # 3.5MB hero background video
│   ├── hero-poster.jpg         # Fallback poster for hero video
│   ├── og-image.jpg            # 1200x630 Open Graph image
│   └── FavIcon.png             # Original favicon source
├── add-portfolio.sh            # Automation: add new projects (WebP + JSON + minify + deploy)
├── robots.txt                  # Allows GPTBot, ClaudeBot, PerplexityBot, Google-Extended
├── sitemap.xml
├── site.webmanifest
├── llms.txt                    # AI-readable site summary
├── CNAME                       # GitHub Pages custom domain
├── favicon.ico
└── CLAUDE.md                   # This file
```

---

## Critical Workflow Rules

### Minification is mandatory

The HTML references **only** the minified files. Editing the source files alone will have no visible effect on the site.

After editing `css/style.css`:
```bash
npx clean-css-cli css/style.css -o css/style.min.css
```

After editing `js/main.js`:
```bash
npx terser js/main.js -c -m -o js/main.min.js
```

**Always run the appropriate minification command after any source edit.**

### Critical inline CSS

`index.html` contains a `<style>` block in the `<head>` with critical CSS for the nav and hero section. If you change nav or hero styles in `style.css`, you must also update the inline `<style>` block in `index.html` to match.

### No backend

The contact form at the bottom of the page is front-end only. Form submission is simulated in JavaScript with no actual HTTP request.

---

## HTML (index.html)

### index.html — Page sections (in order)
1. **Hero** — fullscreen video background with logo, headline, tagline, CTA button, scroll indicator
2. **Marquee** — infinite horizontal scrolling text strip
3. **Services** — 12 service cards in a grid
4. **Portfolio** — horizontal-scrolling project showcase (GSAP on desktop, native scroll-snap on mobile) + "Ver todos os trabalhos" link to portfolio.html
5. **About** — agency description with animated counters (stats section)
6. **Process** — step-by-step workflow cards
7. **Testimonials** — auto-rotating slider with dot navigation
8. **CTA** — call-to-action section
9. **Contact** — form with name, email, phone, message fields
10. **Footer** — logo, navigation links, social links, legal text

### portfolio.html — Dedicated gallery page
- **Compact hero** — title only, no video
- **Sticky filter bar** — category pill buttons (rendered from JSON)
- **Responsive grid** — 3 cols desktop, 2 cols tablet, 1 col mobile
- **Lightbox** — fullscreen viewer with arrow/keyboard/swipe navigation
- **CTA section** — "Gostou do que viu?" with link to contact
- All project data loaded from `data/portfolio-data.json` via fetch

### Structural notes
- Semantic HTML: `<header>`, `<main id="main-content">`, `<footer>`
- Skip-to-content link (`<a class="skip-link">`) for screen readers
- `viewport-fit=cover` in the viewport meta tag for notched devices
- Async stylesheet loading: `<link rel="stylesheet" href="css/style.min.css" media="print" onload="this.media='all'">`
- All fonts and GSAP libraries are self-hosted (zero external blocking requests)

### Structured data (JSON-LD)
- **LocalBusiness** schema: name, address (Rio Tinto, Porto), phone numbers, email, geo coordinates, 12 services listed in `hasOfferCatalog`
- **FAQPage** schema: 7 questions in Portuguese targeting Porto and Rio Tinto search queries

### Meta tags
- Open Graph tags (og:title, og:description, og:image, og:url, og:locale=pt_PT)
- Twitter Card tags (summary_large_image)
- Canonical URL: `https://yes-wedo.pt`

---

## CSS (style.css)

### Design tokens (CSS custom properties in `:root`)
- `--orange: #F04320` (primary brand color)
- `--blue: #529BCA`
- `--magenta: #BA046A`
- `--dark: #111827`
- `--dark-blue: #0F1B2D` (used as page background)
- Fonts: `--font-heading: 'Space Grotesk'`, `--font-body: 'Inter'`
- Easing functions defined as custom properties

### Responsive strategy
- **Mobile-first** with breakpoints at:
  - `1024px` (desktop)
  - `768px` (tablet)
  - `640px` (small mobile)

### Animation classes
- `.reveal-up` and `.reveal-text` — initial state `opacity: 0; transform: translateY(20px)`, animated into view by GSAP ScrollTrigger
- Service cards and process steps start at `opacity: 0; transform: translateY(30px)` and are stagger-animated by JS

### Key CSS patterns
- Custom cursor (circle that follows mouse) — hidden on touch via `@media (pointer: coarse)`
- Portfolio section: GSAP horizontal scroll on desktop, `overflow-x: auto` with `scroll-snap-type` on mobile
- Testimonials: absolutely positioned items, `.active` class toggles `opacity` and `visibility`
- `@supports (padding: env(safe-area-inset-bottom))` for safe area insets on notched devices
- `@media (prefers-reduced-motion: reduce)` disables all transitions and animations

### Accessibility in CSS
- `:focus-visible` styles on all interactive elements (orange outline)
- `.skip-link` visually hidden until focused
- Contrast-safe text colors throughout

---

## JavaScript (main.js)

### Architecture
- Wrapped in an IIFE with `'use strict'`
- Polls for GSAP availability before initializing (GSAP loads from self-hosted vendor files)
- Registers GSAP plugins: `ScrollTrigger`, `ScrollToPlugin`

### Feature breakdown

| Feature | Details |
|---|---|
| **Hero entrance** | GSAP timeline: staggered fade-in of headline, tagline, CTA, scroll indicator |
| **Custom cursor** | Lerp-based follow on desktop (`pointer: fine` only) |
| **Navigation** | Scroll detection adds `.scrolled` class to header; mobile hamburger toggle |
| **Smooth scroll** | All `a[href^="#"]` links use GSAP ScrollTo plugin |
| **Reveal animations** | ScrollTrigger batch animations for `.reveal-up`, `.reveal-text` elements |
| **Service cards** | Stagger animation triggered on scroll |
| **Process steps** | Stagger animation triggered on scroll |
| **Animated counters** | Count from 0 to `data-count` attribute value when stats section enters viewport |
| **Portfolio scroll** | Desktop: GSAP scrub-based horizontal scroll with sticky wrapper. Mobile: native scroll with JS progress bar |
| **Testimonials** | Auto-rotate every 5 seconds, dot navigation, dynamic height measurement |
| **Magnetic buttons** | Buttons subtly follow cursor on hover (desktop, `pointer: fine` only) |
| **Text scramble** | Randomized character effect on nav link hover |
| **Contact form** | Client-side validation and simulated submission (no HTTP request) |

---

## SEO and AEO (Answer Engine Optimization)

- JSON-LD `LocalBusiness` schema with full address, multiple phone numbers, email, geographic coordinates, and a catalog of 12 services
- JSON-LD `FAQPage` schema with 7 Q&A pairs in Portuguese, targeting Porto and Rio Tinto queries
- `llms.txt` at root for AI crawlers (structured plain-text site summary)
- `robots.txt` explicitly allows: `GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`
- `sitemap.xml` listing the single page
- OG image: `img/og-image.jpg` (1200x630)
- Canonical: `https://yes-wedo.pt`

---

## Accessibility Checklist

- [x] Skip-to-content link (`.skip-link`)
- [x] `:focus-visible` outlines on all interactive elements
- [x] `aria-hidden="true"` on all decorative SVG icons (~42 instances)
- [x] `aria-live="polite"` on testimonials slider container
- [x] `aria-label` on hero background video
- [x] All `<img>` tags have `alt` text and explicit `width`/`height` attributes
- [x] All form `<input>` and `<textarea>` elements have associated `<label>` elements
- [x] Touch targets are minimum 44px on mobile
- [x] `@media (prefers-reduced-motion: reduce)` disables animations and transitions

---

## Gotchas and Known Issues

1. **Filename with space**: `img/Socios .webp` and `img/Socios .png` have a space before the file extension. When referencing in HTML or CSS, the space must be preserved (or URL-encoded as `%20`).
2. **No build pipeline**: There is no webpack, Vite, or any bundler. Minification is done manually via CLI commands (see Critical Workflow Rules above).
3. **GSAP polling**: `main.js` uses `setInterval` to poll for `window.gsap` before initializing. If GSAP fails to load, the site will render but without scroll animations.
4. **Portfolio PNGs still present**: The `img/portfolio/` directory contains both the original PNG/JPG files and the optimized WebP files. Only the WebP files are referenced in HTML. Do not delete the originals without checking if they are needed elsewhere.
5. **hero-video.mp4 (23MB)**: A large original hero video exists alongside the optimized `hero-video-light.mp4` (3.5MB). Only the light version is referenced in HTML.
6. **Critical CSS duplication**: Some nav and hero styles appear both inline in `index.html` `<style>` and in `style.css`. Changes must be synchronized manually.
7. **GitHub Pages hosting**: The `CNAME` file indicates deployment via GitHub Pages with the custom domain `yes-wedo.pt`.

---

## File Size Reference

| File | Size |
|---|---|
| `index.html` | ~74KB |
| `css/style.css` | ~37KB |
| `css/style.min.css` | ~26KB |
| `js/main.js` | ~18KB |
| `js/main.min.js` | ~7KB |
| `js/vendor/gsap.min.js` | ~72KB |
| `js/vendor/ScrollTrigger.min.js` | ~43KB |
| `js/vendor/ScrollToPlugin.min.js` | ~4KB |
| `hero-video-light.mp4` | ~3.5MB |

---

## Adding New Portfolio Projects

Use the automation script to add new projects:

1. Create `img/portfolio/new/` directory (if not exists)
2. Drop image files (PNG/JPG) into `img/portfolio/new/`
3. Create `img/portfolio/new/metadata.txt` with one line per image:
   ```
   filename.png | Category | Title | Description
   ```
4. Run:
   ```bash
   ./add-portfolio.sh
   ```

The script will: convert to WebP 1536x1024, update `portfolio-data.json`, minify CSS/JS, git commit & push.

Requires: `brew install webp jq`

---

## Quick Commands

```bash
# Minify CSS after editing style.css
npx clean-css-cli css/style.css -o css/style.min.css

# Minify JS after editing main.js
npx terser js/main.js -c -m -o js/main.min.js

# Add new portfolio projects
./add-portfolio.sh

# Local preview (any static server works)
npx serve .
```
