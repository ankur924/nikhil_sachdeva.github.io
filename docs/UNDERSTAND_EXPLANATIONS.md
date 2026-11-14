# Source explanations

The ranges below use 1-based lines from the current source files and were checked against the deterministic Understand structure extraction.

## `src/App.tsx`

`App` (237–261) assembles the accessible single-page layout and sets the page title and description from central profile data. `SiteHeader` (17–51) manages the responsive menu state and closes it after navigation. `Hero` (53–81) displays the confirmed identity, institution, and external profile links. `AboutSection` (83–106) separates verified facts from pending biography details. `EducationSection` (108–119), `ExperienceSection` (121–134), `ResearchSection` (136–153), `PublicationsSection` (164–181), and `AwardsSection` (183–194) show explicit empty states because those details have not been provided. `ProjectsSection` (155–162) embeds the filterable project catalogue. `ContactSection` (196–223) shows the verified LinkedIn and institution links and leaves email pending. `Footer` (225–235) provides the page credit and back-to-top link. `LinkedInMark` (9–11) and `ExternalArrow` (13–15) are decorative inline marks.

## `src/components/ProjectCatalog.tsx`

`ProjectArtwork` (6–16) draws a decorative placeholder rather than implying a supplied project image. `ProjectCatalog` (18–116) owns search text and selected category state (19–20). Its memoized filter (21–28) matches both category and a lowercased search over title, category, and description. The rendered filter buttons expose their selected state with `aria-pressed` (48–68). Matching entries render as cards; no results render a clear-filters action (74–113). The current data contains only explicit placeholder records.

## `src/data/portfolio.ts`

`ProjectCategory` and `ProjectEntry` (1–14) define the editable project record shape. `profile` (17–33) holds the displayed identity, page metadata, verified facts and links, plus null portrait/email fields. `navItems` (35–44) defines internal section links. `projectCategories` and `projectEntries` (48–66) create category-specific empty-state templates, not real project claims. `contentStatus` (68–77) centralizes the pending messages used by the page.

## Reusable components

- `InfoPlaceholder` in `src/components/InfoPlaceholder.tsx` (9–19) renders a pending-content card.
- `PortraitCard` in `src/components/PortraitCard.tsx` (4–28) displays an image only when `portraitUrl` is supplied; otherwise it renders a labeled abstract monogram.
- `SectionHeading` in `src/components/SectionHeading.tsx` (9–22) standardizes numbered section headings.
- `StatusPill` in `src/components/StatusPill.tsx` (8–10) styles verified/pending status text.

## Entry and configuration

`src/main.tsx` (5–10) loads the app and CSS and mounts React. The Vite config in `vite.config.ts` (4–11) reads `VITE_BASE_PATH` for static hosting. `src/styles.css` owns layout, responsiveness, focus visibility, and reduced-motion rules; it has no functions to explain.
