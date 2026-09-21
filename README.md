# Project Intelligence

Visitor-facing local studio that assembles your learning collections under one polished experience.

## Open locally

Double-click **`Start Project Intelligence.command`** on the Desktop (or inside this folder).

Opens `http://127.0.0.1:8787/`.

## Version notes

- **v2 (current):** Public-facing home — boutique / consulting presentation, collection cards, studio chrome.
- **v1 backup:** `index.v1.html`, `css/styles.v1.css`, `js/app.v1.js`

Original collection lesson content is preserved. Hub shell is visitor-facing.

## QA fixes applied

- Standard CSS font weights
- Self-hosted Manrope + Cormorant Garamond (`css/fonts.css` + `css/fonts/`)
- Money Atlas opens only the production `dist/` build (friendly message if missing)
- Fit-Meaning chrome includes **Source pack** → `Survival of the Fittest`
- Business Decision Principles copy no longer points at a Desktop-root folder
- Speak Well lesson prev/next links stay inside `learn/`
- Hub collections use hash URLs (`#fit`, `#money`, …), encoded paths, and Escape-to-home
- Threaded local server (`serve.py`) so markdown source packs display as text
- Money Atlas in-page tool/glossary/article links no longer break HashRouter

## Collections

| Card | Opens |
|------|--------|
| Survival of the Fittest & Fit-Meaning | `Fit-Meaning/` (+ Source pack) |
| Speak Well | `Speak-Well/` |
| Public Speaking Resources | `Public-Speaking-Resources/` |
| Money Atlas | `money-atlas/dist/` |
| Marketing Signal | `Marketing-Signal/dist/` |
| Gold and Silver | `Gold and silver/gold-silver-learn/` |
| Business Decision Principles | `Business-Decision-Principles/Business-Decision-Principles-Website/` |

## Live site

Production: [https://project-intelligence-ashen.vercel.app/](https://project-intelligence-ashen.vercel.app/)

GitHub: https://github.com/TaarakChauhan/project-intelligence

## SEO

- `robots.txt` — allows indexing; points to sitemap
- `sitemap.xml` — hub + collection home URLs
- `site.config.json` — canonical site origin
- `og-image.png` — default social share image
- Hub includes Open Graph / Twitter tags, JSON-LD, and crawlable collection links (iframe studio UX kept for visitors)

**Note:** Money Atlas is a client-rendered SPA under `/money-atlas/dist/` with hash routes, so individual article URLs are limited for SEO until prerendering is added later.

## Draft offer (not promoted)

- Path: `/offers/bdp-decision-briefing.html`
- Offer: Business Decision Principles · Decision Briefing · $297 (PDF + 45 min review)
- Waitlist UI is draft only (localStorage on device; no server email; `noindex`)
- Do not add to sitemap or run public promo until explicitly approved

## Vercel instrumentation

- Web Analytics: `/js/vercel-analytics.js` + `/_vercel/insights/script.js` on static pages
- Speed Insights: `<script defer src="/_vercel/speed-insights/script.js"></script>` before `</body>` on served HTML (including Vite app `index.html` shells)
- Enable both in the Vercel project dashboard, and promote Production if the live domain lags behind `main`

