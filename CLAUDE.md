# CLAUDE.md — Project Reference for AI Assistants

## Overview

**Yes, We Do** is a marketing and advertising agency based in Rio Tinto, Porto, Portugal.
This repository contains a single-page landing website served at **https://yes-wedo.pt**.
The site is a static HTML page with no build system and no frameworks. The contact form integrates with **Formspree** for email delivery.
Language: **Portuguese (Portugal) (pt-PT)**.

---

## Project Structure

```
Yes-wedo/
├── index.html                  # Landing page (all sections) → /
├── portfolio.html              # Portfolio gallery (filterable grid + lightbox) → /portfolio
├── politica-privacidade.html   # Privacy policy (GDPR) → /politica-privacidade
├── politica-cookies.html       # Cookie policy → /politica-cookies
├── termos-condicoes.html       # Terms and conditions → /termos-condicoes
├── vercel.json                 # Vercel config: cleanUrls, no trailing slash
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
│   ├── socios.webp             # Team photo
│   ├── hero-video-light.mp4    # 3.5MB hero background video
│   ├── hero-poster.jpg         # Fallback poster for hero video
│   ├── og-image.jpg            # 1200x630 Open Graph image
│   └── FavIcon.png             # Original favicon source
├── telegram-bot/
│   └── bot.py                  # Telegram bot: auto-add portfolio via photo (AI-powered)
├── add-portfolio.sh            # Automation: add new projects (WebP + JSON + minify + deploy)
├── robots.txt                  # Allows GPTBot, ClaudeBot, PerplexityBot, Google-Extended
├── sitemap.xml                 # Index + portfolio pages
├── site.webmanifest
├── llms.txt                    # AI-readable site summary
├── CNAME                       # GitHub Pages custom domain (yes-wedo.pt)
├── favicon.ico
├── PRD.md                      # Product Requirements Document
├── CLAUDE.md                   # This file
└── docs/
    ├── DEVELOPER.md            # Developer documentation
    ├── DOCUMENTACAO-CLIENTE.md  # Client-facing documentation (Portuguese)
    └── compliance-report.md    # Legal compliance report
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

### Contact form (Formspree)

The contact form submits via `fetch` POST to **Formspree** (`https://formspree.io/f/mzdaewqk`). It sends `FormData` with JSON accept header, shows "A enviar..." while processing, resets on success, and displays an error message with auto-recovery on failure. Emails are delivered to the agency inbox.

---

## HTML (index.html)

### index.html — Page sections (in order)
1. **Hero** — fullscreen video background with logo, headline, tagline, CTA button, scroll indicator
2. **Marquee** — infinite horizontal scrolling text strip
3. **Services** — 12 service cards in a grid
4. **Portfolio** — horizontal-scrolling project showcase (GSAP on desktop, native scroll-snap on mobile) + "Ver todos os trabalhos" link to portfolio/index.html
5. **About** — agency description with animated counters (stats section)
6. **Process** — step-by-step workflow cards
7. **Testimonials** — auto-rotating slider with dot navigation
8. **CTA** — call-to-action section
9. **Contact** — form with name, email, phone, message fields
10. **Footer** — logo, navigation links, social links, legal text

### portfolio/index.html — Dedicated gallery page
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
| **Contact form** | Client-side validation + Formspree submission (`POST https://formspree.io/f/mzdaewqk`), success/error UI states |
| **WhatsApp button** | Floating button (bottom-right) with popup showing two contact numbers. Click outside or `×` to close. Present on both `index.html` and `portfolio/index.html` |

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

1. ~~**Filename with space**~~: Resolved. `Socios .webp` renamed to `socios.webp` (and `.png` variant).
2. **No build pipeline**: There is no webpack, Vite, or any bundler. Minification is done manually via CLI commands (see Critical Workflow Rules above).
3. **GSAP polling**: `main.js` uses `setInterval` to poll for `window.gsap` before initializing. If GSAP fails to load, the site will render but without scroll animations.
4. **Portfolio PNGs still present**: The `img/portfolio/` directory contains both the original PNG/JPG files and the optimized WebP files. Only the WebP files are referenced in HTML. Do not delete the originals without checking if they are needed elsewhere.
5. **hero-video.mp4 (23MB)**: A large original hero video exists alongside the optimized `hero-video-light.mp4` (3.5MB). Only the light version is referenced in HTML.
6. **Critical CSS duplication**: Some nav and hero styles appear both inline in `index.html` `<style>` and in `style.css`. Changes must be synchronized manually.
7. **Vercel hosting**: The site is deployed on **Vercel** (not GitHub Pages). `vercel.json` enables `cleanUrls` (all `.html` files served without extension). The `CNAME` file is a leftover from a previous GitHub Pages setup — Vercel handles the custom domain `yes-wedo.pt` via its dashboard.
8. **Telegram bot runs locally**: The bot requires the Mac to be running (uses local GPU for Real-ESRGAN upscale). If the Mac sleeps or restarts, the bot stops — restart manually.
9. **Gemini free tier limits**: Google Gemini free tier allows 15 requests/minute, 1500/day. More than enough for portfolio use. If rate-limited, send with manual caption as fallback.
10. **Duplicate slugs**: The bot auto-appends a number suffix (`-2`, `-3`, etc.) if a project with the same slug already exists.

---

## File Size Reference

| File | Size |
|---|---|
| `index.html` | ~77KB |
| `portfolio/index.html` | ~17KB |
| `css/style.css` | ~51KB |
| `css/style.min.css` | ~36KB |
| `js/main.js` | ~28KB |
| `js/main.min.js` | ~12KB |
| `js/vendor/gsap.min.js` | ~72KB |
| `js/vendor/ScrollTrigger.min.js` | ~43KB |
| `js/vendor/ScrollToPlugin.min.js` | ~4KB |
| `hero-video-light.mp4` | ~3.5MB |

---

## Adding New Portfolio Projects

### Method 1: Telegram Bot (Recommended)

Send a photo to **@Yeswedoworksbot** on Telegram — the AI handles everything automatically.

The bot:
1. Receives the photo (as image or file)
2. Analyzes with **Gemini AI** to detect category, title, and description
3. Enhances with **Real-ESRGAN** (upscayl-bin, local, free) — 4x upscale
4. Resizes to 1536x1024 and converts to optimized **WebP** (~100-200KB)
5. Updates `data/portfolio-data.json` with the new project entry
6. Commits and pushes to GitHub Pages — live in ~35 seconds

**Optional:** Add a caption in format `Categoria | Título | Descrição` to override AI detection.

To start the bot:
```bash
cd telegram-bot
TELEGRAM_BOT_TOKEN="<token>" GEMINI_API_KEY="<key>" python3 bot.py
```

Or run in background:
```bash
cd telegram-bot
TELEGRAM_BOT_TOKEN="<token>" GEMINI_API_KEY="<key>" nohup python3 bot.py > /tmp/portfolio-bot.log 2>&1 &
```

Bot commands:
- `/start` — Instructions and AI status
- `/status` — Portfolio stats by category
- `/id` — Show Telegram user ID

### Method 2: Shell Script (Manual)

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

## Telegram Portfolio Bot (`telegram-bot/bot.py`)

### Overview

A Telegram bot that automates the entire portfolio upload workflow. Send a photo from your phone — it appears on yes-wedo.pt in ~35 seconds. No typing required.

### Architecture

```
📱 Telegram              🖥️ Mac (local)                    🌐 GitHub Pages
    │                         │                                 │
    │  Send photo             │                                 │
    │ ────────────────►  1. Download image                      │
    │                    2. Gemini AI → detect category/title   │
    │                    3. Resize 1536x1024 (ImageMagick)      │
    │                    4. Upscale 4x (Real-ESRGAN, local)     │
    │                    5. Resize back to 1536x1024            │
    │                    6. Convert to WebP (cwebp)             │
    │                    7. Update portfolio-data.json           │
    │                    8. git commit + push ──────────────►   │
    │                         │                            Auto-deploy
    │  ◄── "Added! ✅"       │                                 │
```

### Stack

| Component | Tool | Cost |
|---|---|---|
| Bot framework | `python-telegram-bot` v22+ | Free |
| Image analysis | Google Gemini 2.0 Flash API | Free (free tier) |
| AI upscale | `upscayl-bin` (Real-ESRGAN, ultrasharp-4x) | Free (local) |
| Image resize | ImageMagick (`magick`) | Free |
| WebP conversion | `cwebp` | Free |
| Hosting/deploy | GitHub Pages | Free |

### Dependencies

```bash
# Python packages
pip3 install python-telegram-bot google-genai

# System tools (already installed via Homebrew)
# brew install imagemagick webp
# brew install --cask upscayl
```

### Environment Variables

| Variable | Description |
|---|---|
| `TELEGRAM_BOT_TOKEN` | Bot token from @BotFather |
| `GEMINI_API_KEY` | Google AI Studio API key (https://aistudio.google.com/apikey) |

### Key Paths

| Path | Description |
|---|---|
| `telegram-bot/bot.py` | Bot source code |
| `img/portfolio/_processing/` | Temp directory during image processing (auto-cleaned) |
| `data/portfolio-data.json` | Portfolio data (updated by bot) |
| `img/portfolio/<slug>.webp` | Final output images |
| `/tmp/portfolio-bot.log` | Bot logs when running in background |

### Image Processing Pipeline

1. **Download** — Telegram photo (compressed) or file (uncompressed)
2. **AI Analysis** — Gemini 2.0 Flash analyzes the image and returns `Category | Title | Description` in Portuguese
3. **Resize** — ImageMagick crop-to-fill to 1536x1024
4. **AI Upscale** — Real-ESRGAN `ultrasharp-4x` model, 4x upscale via upscayl-bin (local GPU)
5. **Resize Back** — ImageMagick resize from 6144x4096 back to 1536x1024 (sharper result)
6. **WebP** — cwebp at quality 82 (~100-200KB output)
7. **Cleanup** — Remove temp files from `_processing/`

### Gemini AI Prompt

The bot sends the image to Gemini with the full list of portfolio categories and 10 example projects for context. Gemini returns exactly one line: `CATEGORY | TITLE | DESCRIPTION`. The category is validated against `portfolio-data.json` categories.

### Git Deploy

The bot switches GitHub auth to `boni-3` for push, then restores to `ade-studio3` after.

### Portfolio Categories (detected by AI)

- Reclames Luminosos
- Letras Recortadas
- Stands & Eventos
- Sinaléticas
- Lonas & Impressão
- Decoração de Viaturas
- Decoração de Montras

### Security Notes

- `telegram-bot/.env` is in `.gitignore` — never commit API keys
- `AUTHORIZED_USERS` list in bot.py can restrict access by Telegram user ID (empty = allow everyone)
- Bot token and Gemini key are passed via environment variables only

---

## Quick Commands

```bash
# Minify CSS after editing style.css
npx clean-css-cli css/style.css -o css/style.min.css

# Minify JS after editing main.js
npx terser js/main.js -c -m -o js/main.min.js

# Add new portfolio projects (manual method)
./add-portfolio.sh

# Start Telegram portfolio bot (recommended method)
cd telegram-bot && TELEGRAM_BOT_TOKEN="<token>" GEMINI_API_KEY="<key>" python3 bot.py

# Start bot in background
cd telegram-bot && TELEGRAM_BOT_TOKEN="<token>" GEMINI_API_KEY="<key>" nohup python3 bot.py > /tmp/portfolio-bot.log 2>&1 &

# Check bot logs
tail -f /tmp/portfolio-bot.log

# Local preview (any static server works)
npx serve .
```
