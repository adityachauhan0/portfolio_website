import { projects, type Project } from "@/content/projects";

type ProjectGridProps = {
  items?: readonly Project[];
};

export function ProjectGrid({ items = projects }: ProjectGridProps) {
  return (
    <section className="project-grid" aria-label="Project case studies">
      <ul className="project-grid__list">
        {items.map((project) => (
          <li key={project.slug} className="project-grid__item">
            <article className="project-card">
              <header className="project-card__header">
                <h3 className="project-card__title">{project.name}</h3>
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
                    <span key={item} className="badge badge--build">
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
