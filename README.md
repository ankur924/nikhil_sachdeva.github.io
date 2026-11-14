# Dr. Nikhil Sachdeva — Academic Portfolio

A responsive, single-page academic portfolio built with React, TypeScript, and Vite. Central profile and portfolio content lives in `src/data/portfolio.ts`.

## Run locally

```sh
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173/`).

Create a production build with `npm run build` and preview it with `npm run preview`.

## GitHub Pages

The site is a static Vite build. For a repository named `professor-portfolio`, build with `VITE_BASE_PATH=/professor-portfolio/ npm run build` (PowerShell: `$env:VITE_BASE_PATH='/professor-portfolio/'; npm run build`). For a user or organization site, use `/` as the base. The generated `dist/` directory can be published through GitHub Pages after the repository name and publishing method are confirmed. No deployment workflow is enabled by this project.

## Content and assets

The profile photograph is stored at `public/images/nikhil-sachdeva-new.jpg`. Profile details, education, experience, research interests, projects, publications, awards, and contact information are maintained in `src/data/portfolio.ts`.
