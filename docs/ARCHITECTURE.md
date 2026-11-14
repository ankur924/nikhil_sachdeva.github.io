# Portfolio architecture

## Overview

This is a client-rendered, single-page portfolio built with React, TypeScript, and Vite. It separates the presentation from the editable profile content: `src/App.tsx` composes the page, `src/components/` contains reusable visual pieces, and `src/data/portfolio.ts` is the single content source.

## Layers

1. **Browser entry and page composition** — `index.html` provides the mount point; `src/main.tsx` mounts React and loads the stylesheet; `src/App.tsx` builds the navigation, hero, portfolio sections, contact area, and footer.
2. **Content model** — `src/data/portfolio.ts` contains the verified name, role, institution, links, project-entry shape, and explicit missing-content messages.
3. **Reusable presentation** — `src/components/` provides headings, status pills, placeholder panels, and the portrait placeholder. `src/components/ProjectCatalog.tsx` handles project search and category filtering.
4. **Styling and responsive behavior** — `src/styles.css` defines the visual system, focus indicators, reduced-motion handling, and responsive breakpoints.
5. **Build configuration** — `package.json`, `tsconfig*.json`, and `vite.config.ts` define dependencies, TypeScript checking, local serving, production bundling, and the GitHub Pages base path.

## Data flow

`src/main.tsx` imports `App` and `src/styles.css`, then mounts the app into `#root`. `App` reads `profile`, `navItems`, and `contentStatus` from the central data module and passes verified content or explicit pending messages into its sections. `ProjectCatalog` reads `projectCategories` and `projectEntries`; its local query and category state are combined in a memoized filter before cards are rendered. Project data stays editable in `src/data/portfolio.ts`.

## Deployment

Vite builds static assets into `dist/`. `vite.config.ts` uses `VITE_BASE_PATH` when supplied, which supports a GitHub Pages project site under `/<repository-name>/`. No deployment workflow is configured or triggered by this project.
