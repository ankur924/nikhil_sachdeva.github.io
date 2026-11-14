import { useMemo, useState } from "react";
import { projectCategories, projectEntries, type ProjectCategory } from "../data/portfolio";

const allCategory = "All entries";

function ProjectArtwork({ variant, image, title }: { variant: number; image: string | null; title: string }) {
  if (image) return <div className={`project-art project-art--${variant}`}><img src={image} alt={title} /></div>;
  return <div className={`project-art project-art--${variant}`} aria-hidden="true" />;
}

export function ProjectCatalog() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<typeof allCategory | ProjectCategory>(allCategory);
  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return projectEntries.filter((project) => project.visible !== false && project.title.trim() && project.description.trim()).filter((project) => {
      const matchesCategory = category === allCategory || project.category === category;
      const searchable = [project.title, project.category, project.description, ...project.technologies].join(" ").toLowerCase();
      return matchesCategory && (!normalizedQuery || searchable.includes(normalizedQuery));
    });
  }, [category, query]);

  return (
    <div className="project-catalog">
      <div className="project-catalog__toolbar">
        <label className="search-field">
          <span className="search-field__icon" aria-hidden="true">⌕</span>
          <span className="sr-only">Search projects</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search projects"
          />
          {query && (
            <button className="search-field__clear" type="button" onClick={() => setQuery("")} aria-label="Clear search">
              ×
            </button>
          )}
        </label>
        <div className="filter-list" aria-label="Filter projects by category">
          <button
            type="button"
            className={`filter-chip ${category === allCategory ? "is-active" : ""}`}
            aria-pressed={category === allCategory}
            onClick={() => setCategory(allCategory)}
          >
            All entries
          </button>
          {projectCategories.map((item) => (
            <button
              type="button"
              className={`filter-chip ${category === item ? "is-active" : ""}`}
              aria-pressed={category === item}
              onClick={() => setCategory(item)}
              key={item}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <p className="project-catalog__note">Research, teaching and professional initiatives.</p>

      {filteredProjects.length > 0 ? (
        <div className="project-grid" aria-live="polite">
          {filteredProjects.map((project) => {
            const variant = projectCategories.indexOf(project.category) + 1;
            return (
              <article className="project-card" key={project.id}>
                <ProjectArtwork variant={variant} image={project.image} title={project.title} />
                <div className="project-card__body">
                  <div className="project-card__meta">
                    <span>{project.category}</span>
                    <span className="project-card__dot" aria-hidden="true">·</span>
            {project.date && <span>{project.date}</span>}
                  </div>
                  <h3>{project.title}</h3>
                  <p className="project-card__description">{project.description}</p>
                  <dl className="project-card__facts">
                    <div><dt>Areas</dt><dd>{project.technologies.join(", ")}</dd></div>
                  </dl>
                  <div className="project-card__links">
                    <a href={project.sourceUrl} target="_blank" rel="noreferrer">LinkedIn project entry ↗</a>
                    {project.linkedinPost && <a href={project.linkedinPost} target="_blank" rel="noreferrer">Original LinkedIn post ↗</a>}
                    {project.externalUrl && <a href={project.externalUrl} target="_blank" rel="noreferrer">Related link ↗</a>}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="project-empty" aria-live="polite">
          <span className="project-empty__mark" aria-hidden="true">⌕</span>
          <div>
            <h3>No matching entries</h3>
            <p>Try another search or choose a different category.</p>
          </div>
          <button type="button" className="text-button" onClick={() => { setQuery(""); setCategory(allCategory); }}>
            Clear filters <span aria-hidden="true">↗</span>
          </button>
        </div>
      )}
    </div>
  );
}
