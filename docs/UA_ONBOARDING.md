# Understand Anything onboarding

## Project overview

The portfolio is a static, single-page React application using TypeScript and Vite. It presents confirmed academic profile facts and provides labeled spaces for information that has not yet been supplied.

## Guided tour

1. Start at `src/main.tsx` to see how the browser entry loads React and the global stylesheet.
2. Read `src/App.tsx` to follow navigation and the page sections.
3. Open `src/data/portfolio.ts` to see which content is verified and how placeholders are represented.
4. Follow the Projects section into `src/components/ProjectCatalog.tsx` to see search and category filtering.
5. Review `src/styles.css` for responsive breakpoints, keyboard focus treatment, and reduced-motion behavior.
6. Read `vite.config.ts` and `README.md` for local development and GitHub Pages configuration.

## File map

- `src/main.tsx` — React entry point.
- `src/App.tsx` — navigation, sections, and page composition.
- `src/data/portfolio.ts` — editable profile/project data and missing-content notices.
- `src/components/ProjectCatalog.tsx` — project search and category filter.
- `src/components/PortraitCard.tsx` — supplied portrait or labeled graphic placeholder.
- `src/components/InfoPlaceholder.tsx`, `SectionHeading.tsx`, `StatusPill.tsx` — shared section UI.
- `src/styles.css` — site theme, responsive layout, focus states, reduced motion.
- `vite.config.ts` — Vite configuration and GitHub Pages base path.
- `docs/ARCHITECTURE.md`, `docs/DATA_FLOW.md` — architecture and render/data paths.

## Verified-content boundary

The supplied and verified profile details are Dr. Nikhil Sachdeva’s name, Professor role, Republic Polytechnic affiliation, Singapore location, and LinkedIn URL. No education history, appointments, research interests, actual projects, publications, awards, email, or portrait asset were found in the workspace. Keep these fields pending until confirmed.

## Local commands

- `npm install` — install project dependencies.
- `npm run dev` — start the local Vite server (normally `http://localhost:5173/`).
- `npm run build` — type-check and create the static production build in `dist/`.

## Understand artifacts

The current graph and detailed code lessons are in `.ua/knowledge-graph.json` and `.ua/code-lessons.json`. Installed skill files, generated analysis data, dependency output, and build output are excluded by `.ua/.understandignore` or the scanner’s built-in exclusions.
