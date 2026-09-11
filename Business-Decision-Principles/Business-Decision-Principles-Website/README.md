# Business Decision Principles — Website

A self-contained, premium single-page site that presents the **Business Decision Principles** educational library: decision quality under uncertainty, the shared operating loop, role paths (VC / Angel / Owner / Board), curriculum map, worksheets, and sources.

Companion content lives in the Project Intelligence library folder:

`the sibling Business-Decision-Principles library inside Project Intelligence/`

## One-click launch (macOS)

**Easiest:** double-click either:

- `Start Website.command` (inside this folder), or
- `Desktop/Start Business Decision Site.command (points into Project Intelligence)`

What the launcher does:

1. Changes to this folder
2. If `python3` is available, starts a tiny local server on port **8765** and opens `http://127.0.0.1:8765/`
3. Otherwise falls back to opening `index.html` directly in your default browser
4. Keeps the Terminal window open with a short status message while the server runs (Ctrl+C to stop)

No npm install. No build step. No React/Next required.

## Manual open

```bash
cd "/Users/tarakchauhan/Desktop/Business-Decision-Principles-Website"
python3 -m http.server 8765
# then visit http://127.0.0.1:8765/
```

Or open `index.html` in a browser.

## Files

| File | Role |
|------|------|
| `index.html` | Main experience (all sections) |
| `styles.css` | Dark editorial theme, glass cards, animations |
| `app.js` | Nav, IntersectionObserver reveals, counters, tabs, loop highlight |
| `Start Website.command` | One-click macOS launcher |
| `README.md` | This file |

## Design notes

- Dark navy/charcoal with gold/amber accents
- Typography via Google Fonts CDN: Fraunces + DM Sans
- Respects `prefers-reduced-motion`
- Responsive mobile → desktop; accessible focus states

## Disclaimer

Educational material only — **not** legal, tax, accounting, or financial advice. Research figures (including Gompers et al.) are survey findings from the cited sources, not guarantees. Obtain qualified professional advice before acting.
