# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Angular 19 personal portfolio website for ChuckySRB. Features English/Serbian internationalization, a markdown-based blog, and SSR support. Deployed to GitHub Pages.

## Commands

All commands must be run from the `chucky/` subdirectory:

```bash
cd chucky

npm start           # Dev server (localhost:4200)
npm run build       # Production build → dist/chucky/
npm run watch       # Dev build with file watching
npm test            # Karma/Jasmine unit tests
npm run serve:ssr:chucky  # Serve SSR build (after ng build)
```

Deploy to GitHub Pages:
```bash
npx ng deploy       # Builds and pushes to gh-pages branch
```

## Architecture

### Key Patterns

- **Standalone components only** — no NgModules. Each component declares its `imports` array directly.
- **Lazy-loaded routes** — all page components use `loadComponent()` in [chucky/src/app/app.routes.ts](chucky/src/app/app.routes.ts).
- **SSR configured** — `src/main.server.ts` + `src/server.ts` (Express). `provideClientHydration(withEventReplay())` is active.

### Internationalization

Translations live in [chucky/src/assets/lang/](chucky/src/assets/lang/) as `en.json` and `срб.json`. The utility in [chucky/src/app/utils/lang.ts](chucky/src/app/utils/lang.ts) handles async loading and localStorage persistence (`LANG_TAG` key). Each component independently fetches translations on `ngOnInit()` — there is no shared translation service.

### Blog System

Markdown files in [chucky/src/assets/blogs/](chucky/src/assets/blogs/) are fetched at runtime, parsed with `marked`, and rendered via `DomSanitizer.bypassSecurityTrustHtml()`. YAML frontmatter (title, date) is extracted manually before parsing.

### Styling

SCSS throughout. Angular Material with the magenta-violet theme. Custom pixel-art fonts (Pixelify Sans, Tiny5) loaded from [chucky/src/assets/fonts/](chucky/src/assets/fonts/). Global styles in [chucky/src/styles.scss](chucky/src/styles.scss).

### Directory Layout

```
chucky/src/app/
├── pages/          # Route-level components (home, about, blog, projects, buckit)
├── components/     # Shared UI (navbar, footer, lang, profile-card, colaboration-card)
└── utils/          # lang.ts translation helper
```

Assets: icons (PNG), fonts, blog posts (Markdown), and translation JSONs are all under `chucky/src/assets/`.
