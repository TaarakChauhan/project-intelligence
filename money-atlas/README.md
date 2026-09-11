# Money Atlas

An original visual encyclopedia of how money works — firms, markets, the state, and a household ledger. Not financial advice. Not affiliated with any publisher.

## Run

**Mac one-click:** double-click `Start Money Atlas.command` in this folder. It installs dependencies if needed, starts the site, and opens your browser. Leave the Terminal window open while you browse; close it to stop the server.

```bash
cd money-atlas
npm install
npm run dev
```

Dev server: http://localhost:5173 (also `--host 0.0.0.0 --port 5173`).

```bash
npm run build
npm run preview
```

## What’s here

- Five chapters, thirty-five original articles
- Five live calculators (compound, inflation, extra loan payment, tax brackets, rule of 72)
- A searchable glossary (80+ terms)
- Client-side search of articles and terms
- Original SVG diagrams, no stock photography

## Stack

Vite, React, TypeScript, React Router v6. No backend. All copy lives in `src/data/`.
