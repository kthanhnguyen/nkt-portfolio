# nkt-portfolio

Personal portfolio — a single-page app built with React + Vite, featuring: Home, About, Skills, Portfolio, Detail (project detail), Contact, and a 404 page.

## Tech stack

- [React 18](https://react.dev/) + [React Router v6](https://reactrouter.com/)
- [Vite 5](https://vitejs.dev/) — build tool & dev server
- [Sass](https://sass-lang.com/) — styles organized as SCSS partials
- [GSAP](https://gsap.com/) — animation (mobile menu, ...)
- [tsParticles](https://particles.js.org/) (`@tsparticles/react`, `@tsparticles/slim`, `@tsparticles/shape-image`) — particle effect in MainVisual
- [react-slick](https://react-slick.neostack.com/) — carousel

## Project structure

```
src/
├─ main.jsx              # entry point, wraps ParticlesProvider
├─ App.jsx                # BrowserRouter + layout, renders routes
├─ routes/routes.js       # centralized route list
├─ pages/                 # Home, About, Skills, Portfolio, Detail, Contact, PageNotFound
├─ components/            # Navbar, Cursor, Loader, MainVisual, Modal, ItemProject, Wrapper
├─ templates/HomeTemplate.jsx  # shared layout
└─ styles/                # SCSS partials, aggregated via main.scss

public/
└─ project/<id>/          # images for each project
```

## Getting started

```bash
npm install       # install dependencies
npm run dev       # run the dev server (Vite, with HMR)
npm run build     # production build, output to dist/
npm run preview   # preview the production build
npm run lint      # lint with ESLint
npm run format    # format with Prettier
```

## Deployment

The project is deployed on [Vercel](https://vercel.com/). Pushing to the `master` branch automatically triggers a new deploy.
