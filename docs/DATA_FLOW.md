# Portfolio data flow

```text
index.html (#root)
       │
       ▼
src/main.tsx ─── imports ─── src/styles.css
       │
       ▼
src/App.tsx ─── reads profile, navItems, contentStatus
       │
       ├── reusable components (portrait, headings, status, pending panels)
       │
       └── ProjectCatalog ─── reads projectCategories + projectEntries
                    │
                    ├── query state
                    └── category state
                           │
                           ▼
                   filtered project cards
```

## Editing content

Edit `src/data/portfolio.ts` to update the verified profile, navigation, project records, or missing-content notices. A real project should replace a placeholder entry with verified title, summary, category, technologies, date, image path, and any confirmed LinkedIn or external URLs. Leave unavailable fields `null` or empty. Add a portrait asset only after the correct photograph is supplied, then set `profile.portraitUrl` to its project-relative URL.

## Render path

1. Vite serves `index.html` and loads the TypeScript entry at `src/main.tsx`.
2. React renders `App` into the root element.
3. `App` turns the central content records into section text and links.
4. `ProjectCatalog` filters its records in memory as the visitor types or chooses a category.
5. CSS applies desktop and mobile layouts without a runtime UI library or remote font dependency.
