import { featuredProjects, type FeaturedProject } from "@/content/projects";

type ProjectGridProps = {
  items?: readonly FeaturedProject[];
};

export function ProjectGrid({ items = featuredProjects }: ProjectGridProps) {
  return (
    <section className="project-grid" aria-label="Project case studies">
      <ul className="project-grid__list">
        {items.map((project) => (
          <li key={project.slug} className="project-grid__item">
            <article className="project-card">
              <header className="project-card__header">
                <div className="project-card__meta">
                  <span className={`badge badge--theme-${project.theme}`}>
                    {project.theme}
                  </span>
                  <span className="badge">{project.status}</span>
                </div>
                <h3 className="project-card__title">
                  <a href={project.repoUrl} target="_blank" rel="noreferrer">
                    {project.name}
                  </a>
                </h3>
                <p className="project-card__summary">{project.summary}</p>
              </header>

              <div className="project-card__block">
                <p className="project-card__label">Problem</p>
                <p className="project-card__text">{project.problem}</p>
              </div>

              <div className="project-card__block">
                <p className="project-card__label">Architecture</p>
                <p className="project-card__text">{project.architecture}</p>
              </div>

              <div className="project-card__block">
                <p className="project-card__label">Stack</p>
                <div className="project-card__badges">
                  {project.stack.map((item) => (
                    <span key={item} className="badge">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-card__block">
                <p className="project-card__label">Highlights</p>
                <ul className="project-card__highlights">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
