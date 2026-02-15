# Yes, We Do — Developer Documentation

Single-page landing page for **Yes, We Do**, a marketing and advertising agency located at Av. D. Joao I 81, Rio Tinto, Porto, Portugal.

**Live site:** [yes-wedo.pt](https://yes-wedo.pt)

---

## 1. Project Overview

- Single-page landing page (`index.html`), no framework, no SPA router
- Vanilla HTML, CSS, and JavaScript — no React, no Vue, no build step
- GSAP 3.12.5 for scroll and entrance animations (self-hosted in `js/vendor/`)
- Fonts: **Space Grotesk** (headings) + **Inter** (body), self-hosted woff2 files
- No build tools, no bundler — minification is done manually via CLI
- Language: Portuguese (pt-PT)

---

## 2. File Structure

```
Yes-wedo/
├── index.html                        # Single-page HTML (all sections)
├── css/
│   ├── style.css                     # Source CSS (~1932 lines, 37KB)
│   ├── style.min.css                 # Minified CSS (26KB) — referenced by HTML
│   └── fonts.css                     # @font-face declarations for local fonts
├── js/
│   ├── main.js                       # Source JS (503 lines, 18KB)
│   ├── main.min.js                   # Minified JS (6.8KB) — referenced by HTML
│   └── vendor/
│       ├── gsap.min.js               # GSAP 3.12.5 core
│       ├── ScrollTrigger.min.js      # GSAP ScrollTrigger plugin
│       └── ScrollToPlugin.min.js     # GSAP ScrollToPlugin
├── fonts/
│   ├── inter-latin.woff2
│   ├── inter-latin-ext.woff2
│   ├── space-grotesk-latin.woff2
│   └── space-grotesk-latin-ext.woff2
├── img/
│   ├── portfolio/                    # 7 WebP images (60KB–240KB each)
│   ├── favicons/                     # Multiple sizes (16, 32, 192, 512)
│   ├── hero-video-light.mp4          # Hero background video (3.5MB, 720p)
│   ├── hero-poster.jpg               # Video poster for instant LCP (122KB)
│   ├── og-image.jpg                  # Open Graph image (1200x630)
│   ├── socios.webp                   # Team photo
│   └── logo-*.png / *.webp           # Various logo versions
├── robots.txt                        # Crawl rules (allows all major bots)
├── sitemap.xml                       # Sitemap for search engines
├── site.webmanifest                  # PWA manifest (icons)
├── llms.txt                          # AI crawler guidance
├── favicon.ico
├── CNAME                             # GitHub Pages custom domain
└── docs/
    └── DEVELOPER.md                  # This file
```

---

## 3. Development Workflow

### Editing CSS

1. Edit `css/style.css` (the source file)
2. Minify:
   ```bash
   npx clean-css-cli css/style.css -o css/style.min.css
   ```
3. If you changed nav or hero styles, **also update the inline `<style>` block** in `index.html` (line 47) — it contains critical CSS that renders before the full stylesheet loads

### Editing JavaScript

1. Edit `js/main.js` (the source file)
2. Minify:
   ```bash
   npx terser js/main.js -c -m -o js/main.min.js
   ```

### Rules

- **NEVER edit `.min.css` or `.min.js` files directly.** Always edit the source, then re-minify.
- The HTML references only the `.min` files. Source files are for development only.

### Local Testing

- Open `index.html` directly in a browser for basic testing
- For video playback, use a local server:
  ```bash
  npx serve .
  # or
  python3 -m http.server 8000
  ```

---

## 4. CSS Architecture

### Custom Properties

All design tokens are defined as CSS custom properties in `:root` (line 14 of `style.css`):

| Variable | Value | Usage |
|---|---|---|
| `--orange` | `#F04320` | Primary brand color, CTAs, accents |
| `--blue` | `#529BCA` | Secondary brand color |
| `--magenta` | `#BA046A` | Tertiary brand color |
| `--dark` | `#111827` | Page background |
| `--dark-blue` | `#0F1B2D` | Hero gradient, nav background |
| `--font-heading` | `'Space Grotesk'` | H1-H3, display text |
| `--font-body` | `'Inter'` | Body text, buttons, UI |
| `--ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` | UI transitions |

Each brand color also has `-light` and `-dark` variants.

### Responsive Breakpoints

```css
@media (max-width: 1200px)  /* Large tablet / small desktop */
@media (max-width: 1024px)  /* Tablet — nav switches to hamburger */
@media (max-width: 768px)   /* Mobile — portfolio switches to native scroll */
@media (max-width: 640px)   /* Small mobile */
@media (max-width: 480px)   /* Extra small */
@media (max-height: 640px)  /* Short phones (iPhone SE landscape) */
@media (pointer: coarse)    /* Touch devices — hides custom cursor */
@media (prefers-reduced-motion: reduce)  /* Disables all animations */
```

### Animation Classes

Elements that animate on scroll start hidden in CSS:

```css
.reveal-up     { opacity: 0; transform: translateY(40px); }
.reveal-text   { opacity: 0; transform: translateY(20px); }
.service-card  { opacity: 0; transform: translateY(30px); }
.process-step  { opacity: 0; transform: translateY(30px); }
```

GSAP animates these to `opacity: 1; transform: none` when they enter the viewport.

### Key Layout Patterns

- **Portfolio (desktop):** `position: sticky` wrapper with GSAP horizontal scrub. Section height is set dynamically by JS.
- **Portfolio (mobile, <= 768px):** Native `overflow-x: auto` with `scroll-snap-type: x mandatory`.
- **Custom cursor:** Two fixed-position divs (`.cursor-dot` + `.cursor-outline`). Hidden on touch via `@media (pointer: coarse)`.
- **Marquee:** Pure CSS `@keyframes` infinite scroll. Content is duplicated in HTML to create the seamless loop.

---

## 5. JavaScript Architecture

### Pattern

The entire JS is wrapped in an **IIFE** with `'use strict'`. It polls for GSAP availability (100ms intervals) before initializing, since GSAP scripts use `defer`.

```
(function () {
    'use strict';
    function init() {
        if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
            setTimeout(init, 100);  // retry until GSAP loads
            return;
        }
        gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
        // ... all setup code ...
    }
    // Start when DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
```

### Key Sections (in order)

| Section | What it does |
|---|---|
| **Hero entrance** | GSAP timeline, staggers headline/tagline/CTA/scroll-indicator with delays |
| **Custom cursor** | `requestAnimationFrame` loop with lerp (0.15) for outline lag. Only on `pointer: fine` devices. Adds `.cursor-hover` class on interactive elements. |
| **Navigation** | Scroll listener adds `.scrolled` class at 50px. Mobile toggle with body overflow lock. |
| **Smooth scroll** | Intercepts all `a[href^="#"]` clicks, uses `gsap.to(window, { scrollTo })` with 80px offset |
| **Scroll animations** | `.reveal-up` and `.reveal-text` elements: `ScrollTrigger` at `start: 'top 85%'`, plays once |
| **Service cards** | Staggered reveal (0.1s between), triggered when `.services-grid` enters viewport |
| **Process steps** | Staggered reveal (0.15s between), triggered when `.process-grid` enters viewport |
| **Animated counters** | Reads `data-count` attribute from `.stat-number` elements. GSAP tweens `innerText` from 0 to target over 2.5s. Triggers once when `.stats-grid` enters viewport. |
| **CTA section** | Staggered entrance for title, text, answer spans, button |
| **Hero parallax** | `#heroContent` moves up 80px with scrub as hero scrolls out |
| **Magnetic buttons** | `.magnetic` elements follow mouse within bounds (0.3x offset), elastic snap-back on leave. `pointer: fine` only. |
| **Testimonials** | Auto-rotates every 5s with `setInterval`. Dot buttons reset the timer. Dynamic `minHeight` measurement prevents layout shift. |
| **Contact form** | `preventDefault`, simulates submission (1.5s delay), shows confirmation text, resets after 3s. **Frontend only — no actual backend.** |
| **Portfolio scroll** | Waits for all portfolio images to load (with 3s fallback timeout). Desktop: calculates `scrollWidth - offsetWidth`, sets section height, creates GSAP scrub. Mobile: native scroll with progress bar via scroll listener. |
| **Text scramble** | On `.nav-link` hover, randomizes characters then resolves left-to-right at 30ms intervals |

---

## 6. Performance Optimizations

| Technique | Details |
|---|---|
| **Zero external requests** | All fonts, scripts, and images are self-hosted |
| **Critical CSS inlined** | ~5KB of CSS inlined in `<head>` covers nav, hero, cursor, and base styles for instant first paint |
| **Async stylesheet** | Full CSS loaded via `media="print" onload="this.media='all'"` trick |
| **Font preload** | `<link rel="preload">` for Inter and Space Grotesk latin subsets |
| **Scripts deferred** | All `<script>` tags use `defer` |
| **WebP images** | Portfolio images are WebP, 60KB–240KB each |
| **Hero video** | Compressed to 3.5MB (720p, crf 28). Poster image (`hero-poster.jpg`, 122KB) shows immediately for fast LCP |
| **Lazy loading** | Portfolio images have `loading="lazy"` |
| **CLS prevention** | All images have explicit `width` and `height` attributes |
| **`font-display: swap`** | Prevents invisible text during font load |

---

## 7. SEO Implementation

### Structured Data (JSON-LD)

Two schemas in `<head>`:
1. **LocalBusiness** — name, address, phone, email, geo coordinates, area served, services catalog, social links
2. **FAQPage** — 6 questions/answers for Google Featured Snippets and AI search

### Meta Tags

- Open Graph: title, description, image (1200x630), locale (pt_PT)
- Twitter Card: `summary_large_image`
- Canonical URL: `https://yes-wedo.pt`
- `<meta name="robots" content="index, follow">`

### HTML Semantics

- `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- One `<h1>` in hero, `<h2>` per section, `<h3>` for individual items
- All images have descriptive `alt` text

### Crawl Files

- `robots.txt` — allows all major bots (Googlebot, Bingbot, GPTBot, Anthropic, etc.)
- `sitemap.xml` — single URL entry
- `llms.txt` — structured guidance for AI crawlers

---

## 8. Accessibility

| Feature | Implementation |
|---|---|
| **Skip link** | `.skip-link` at top of `<body>`, visible on focus, jumps to `#main` |
| **Focus indicators** | `:focus-visible` with 2px orange outline on all interactive elements |
| **Decorative SVGs** | `aria-hidden="true"` on all inline decorative SVGs |
| **Testimonials** | `aria-live` region for dynamic content changes |
| **Video** | `aria-label` on hero video element |
| **Buttons** | `aria-label` on icon-only buttons (nav toggle, social links) |
| **Touch targets** | Minimum 44px on mobile |
| **Color contrast** | WCAG AA compliant |
| **Form labels** | All form inputs have associated `<label>` elements |
| **Reduced motion** | `@media (prefers-reduced-motion: reduce)` sets all animation/transition durations to 0.01ms |

---

## 9. Adding New Content

### New Service Card

1. Find the `.services-grid` in `index.html` (section `#servicos`)
2. Copy an existing `.service-card` block
3. Change the SVG icon, title (`<h3>`), description (`<p>`), and tags
4. The grid auto-fills — no CSS changes needed
5. The `.service-card` class already has `opacity: 0` and GSAP handles the reveal

### New Portfolio Item

1. Add a new `.portfolio-item` inside `#portfolioScrollTrack`
2. Image should be **1536x1024 WebP** format
3. Include these attributes:
   ```html
   <img src="img/portfolio/your-image.webp"
        alt="Descriptive alt text"
        loading="lazy"
        width="1536"
        height="1024">
   ```
4. Desktop horizontal scroll recalculates automatically (JS reads `scrollWidth`)

### New Testimonial

1. Add a `.testimonial-item` div inside the testimonials slider container
2. Add a corresponding `.testimonial-dot` button with `data-index="N"` (0-based)
3. The JS reads `testimonialItems.length` dynamically — no array size to update
4. Dynamic height measurement adjusts automatically

### Update Marquee

The marquee content is **duplicated** in HTML for the seamless loop. When adding or changing service names, update **both copies** of `.marquee-content`.

### Update Footer Links

Add or modify service links in the `.footer-links` section inside `<footer>`.

---

## 10. Known Quirks

| Issue | Details |
|---|---|
| **socios.webp filename** | Renamed from `Socios .webp` (which had a space). Now uses lowercase without spaces. |
| **Contact form (Formspree)** | The form submits via `fetch` POST to Formspree (`https://formspree.io/f/mzdaewqk`). Shows "A enviar..." while processing, resets on success, displays error with auto-recovery on failure. |
| **Portfolio section height** | On desktop, the portfolio section height is set dynamically by JS (`window.innerHeight + scrollDistance`). If you add/remove portfolio items, the height recalculates on next page load. |
| **Testimonials height** | The slider container `minHeight` is measured dynamically by JS to prevent layout shift when switching between testimonials of different lengths. |
| **Critical CSS sync** | The inline `<style>` block in `index.html` (line 47) is a manual copy of key styles from `style.css`. If you change nav, hero, cursor, or base reset styles, you must **manually update** the inline block to match. There is no automated sync. |
| **GSAP polling** | The JS polls with `setTimeout(init, 100)` until GSAP is available. If GSAP fails to load entirely, the page renders without any animations but the poll loop continues silently. |
| **Portfolio image loading** | Portfolio horizontal scroll waits for all images to load before calculating widths. A 3-second fallback timeout forces initialization even if images are still loading. |

---

## Quick Reference

```bash
# Minify CSS after editing style.css
npx clean-css-cli css/style.css -o css/style.min.css

# Minify JS after editing main.js
npx terser js/main.js -c -m -o js/main.min.js

# Start local server for testing
npx serve .

# Check file sizes
ls -lh css/style.min.css js/main.min.js img/hero-video-light.mp4
```
