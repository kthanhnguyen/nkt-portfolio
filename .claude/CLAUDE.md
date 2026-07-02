# CLAUDE.md

Default guidance for Claude Code when working in this repo.

## Project Overview

- Personal portfolio (nkt-portfolio), a single-page app with multiple routes: Home, About, Skills, Portfolio, Detail (project detail), Contact, 404.
- Previously bootstrapped with Create React App, currently **migrating to Vite** (old `.js` files under `src/` are being deleted and replaced with new `.jsx` files — see `git status`: many `D` entries paired with newly created `??` `.jsx` files).
- README.md is still the default CRA README and is out of date compared to the actual Vite setup — TODO: update the README.

## Architecture

- Entry point: [src/main.jsx](src/main.jsx) — mounts the React root, wraps App in `ParticlesProvider` (`@tsparticles/react`) to initialize particles (slim + image shape engine).
- [src/App.jsx](src/App.jsx) — declares `BrowserRouter` (react-router-dom v6, using future flags `v7_startTransition`, `v7_relativeSplatPath`), renders routes through the shared layout `HomeLayout` ([src/templates/HomeTemplate.jsx](src/templates/HomeTemplate.jsx)) and wraps each page with `PageWrapper` ([src/components/Wrapper.jsx](src/components/Wrapper.jsx)).
- Route list is centralized in [src/routes/routes.js](src/routes/routes.js) as an array of `{ path, component }`, mapped directly in App.jsx.
- Pages: [src/pages/](src/pages/) (Home, About, Skills, Portfolio, Detail, Contact, PageNotFound).
- Reusable components: [src/components/](src/components/) (Navbar, Cursor, Loader, MainVisual, Modal, ItemProject, Wrapper).
- Static project data lives in [src/data/data.js](src/data/data.js) — each project has `id`, `name`, `about`, `technical`, `imgMain`, `listImgs`, `tags`, `link`. Corresponding project images are stored under `public/project/<id>/`.
- Styles: SCSS organized as partials in [src/styles/](src/styles/) (`_variable.scss`, `_reset.scss`, `_components.scss`, per-page files like `_home.scss`, `_about.scss`, ...), aggregated via `main.scss`. `main.jsx` imports `main.scss` directly.
- Build tool: Vite ([vite.config.js](vite.config.js)) with the `@vitejs/plugin-react` plugin and sass config (silences legacy deprecation warnings).
- Animation: GSAP used directly inside components (e.g. Navbar) to drive the mobile menu transition.

## Coding Standards

- Function components + hooks (`useState`, `useRef`), exported as `export default function ComponentName() {}`.
- No semicolons, single quotes `'...'` for strings in JS/JSX.
- React is imported explicitly at the top of each file (`import React from 'react'`, plus any hooks needed).
- `className` uses plain strings or simple template strings; the `classnames` library is a dependency but doesn't appear to be used in practice — verify before introducing a new usage pattern.
- Component files use the `.jsx` extension (the new standard post-migration); don't create new React component files with `.js`.
- Enforced via ESLint (flat config, [eslint.config.js](eslint.config.js): `eslint:recommended` + `eslint-plugin-react-hooks` + `eslint-plugin-react-refresh`) and Prettier ([.prettierrc](.prettierrc): `semi: false`, `singleQuote: true`), matching the existing style above. Run `npm run lint` / `npm run format`.

## Development Workflow

- Install dependencies: `npm install`.
- Run dev server: `npm run dev` (Vite, with HMR).
- Production build: `npm run build` → outputs to `dist/`.
- Preview the build: `npm run preview`.
- Lint: `npm run lint` (ESLint). Format: `npm run format` (Prettier).
- No test scripts exist in package.json; to sanity-check changes, run `npm run build` to catch compile-time errors.
- The repo is mid-migration from CRA to Vite; many old `.js` files have been deleted but not yet committed (`git status` shows `D` entries). When editing, prefer the new `.jsx` files and don't restore the old `.js` files.

## Do & Don't

- DO keep the existing code style (no semicolons, single quotes, function components + hooks).
- DO place new project images under `public/project/<id>/` and register them in `src/data/data.js` following the existing shape.
- DO update `src/routes/routes.js` when adding/removing pages instead of hardcoding routes elsewhere.
- DON'T recreate the `.js` files deleted during the Vite migration unless the user explicitly asks for a rollback.
- DON'T add new libraries (state management, UI kits, etc.) unless truly necessary — this is a lightweight personal portfolio; avoid over-engineering.
- DON'T update README.md to describe CRA — if you touch it, make it reflect the actual Vite setup.

## Notes

- Deployed on Vercel. Pushing to the connected branch (master) triggers an automatic Vercel deploy — there's no separate GitHub Actions/CI pipeline.
- The `@tsparticles/*` packages power the particle effect in MainVisual — if tweaking the effect, also check the init config in `main.jsx`.
