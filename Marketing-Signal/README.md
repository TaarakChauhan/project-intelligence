# Marketing Signal

Free, open educational website covering a full **marketing management** curriculum with **100% original** lessons, quizzes, mini-cases, and apply-it exercises.

> This is **not** a copy or paraphrase of Kotler / Kotler & Keller or any commercial textbook. See [About](#affiliation--license) below.

## Quick start

```bash
cd /workspace/marketing-management-academy
npm install
npm run dev
```

Or double-click `Start Marketing Signal.command` on macOS.

Production build & preview:

```bash
npm run build
npm run preview
```

Then open the URL printed by Vite (usually `http://localhost:4173` for preview).

## What’s inside

- **23 modules** across 8 parts (strategy → insights → customers → brands → value creation → channels → communications → organization)
- Data-driven lessons in `src/content/modules/`
- Routes: Home, Course, Module, Glossary, About/License, Search
- Light/dark theme + **localStorage** progress (completed modules & quiz scores)
- Tasteful motion (Framer Motion) with `prefers-reduced-motion` support
- Distinctive education UI (teal/sand/coral — not generic purple AI)

## Share it free (static deploy)

`npm run build` outputs static files to `dist/`. Deploy that folder to:

### Netlify

1. Drag-and-drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop), **or**
2. Connect the repo; build command `npm run build`, publish directory `dist`.

HashRouter is used (`#/…` routes), so no special SPA redirects are required — works inside an iframe hub.

### Vercel

```bash
npx vercel --prod
```

Or connect the Git repo with framework preset Vite; output `dist`.

### GitHub Pages

1. Set `base` in `vite.config.ts` if deploying to a project subpath (e.g. `base: '/marketing-signal/'`).
2. Build, then push `dist` to the `gh-pages` branch or use Actions.

Because routing uses hash URLs, GitHub Pages works without a 404.html SPA hack.

## Affiliation & license

- **Independent OER** — not affiliated with Kotler, Keller, Pearson, or other textbook publishers.
- Learners *may* optionally buy commercial textbooks separately; this site stands alone.
- **Educational content:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)
- **Code:** MIT (see `LICENSE`)

## Tech stack

Vite · React · TypeScript · Tailwind CSS v4 · React Router · lucide-react · Framer Motion

## Project layout

```
src/
  content/modules/   # one file per module
  components/        # Layout, Quiz, ModuleCard, PageTransition
  pages/             # Home, Course, Module, Glossary, About, Search
  hooks/             # theme + progress
  lib/progress.ts    # localStorage helpers
```
