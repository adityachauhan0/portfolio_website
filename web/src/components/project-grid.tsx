import { featuredProjects, type FeaturedProject } from "@/content/projects";
import type { LiveRepoStatMap } from "@/lib/github";

type ProjectGridProps = {
  items?: readonly FeaturedProject[];
  liveRepoStats?: LiveRepoStatMap;
};

function formatRepoUpdate(isoDate: string): string {
  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) {
    return "Unknown";
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export function ProjectGrid({
  items = featuredProjects,
  liveRepoStats,
}: ProjectGridProps) {
  return (
    <section className="project-grid" aria-label="Project case studies">
      <ul className="project-grid__list">
        {items.map((project) => {
          const stat = liveRepoStats?.[project.name.toLowerCase()];

          return (
            <li key={project.slug} className="project-grid__item">
              <article className="project-card">
                <header className="project-card__header">
                  {stat ? (
                    <div className="project-card__repo-metrics">
                      <span className="badge badge--theme-data">
                        Stars: {stat.stars.toLocaleString("en-US")}
                      </span>
                      <span className="badge">
                        Updated: {formatRepoUpdate(stat.updatedAt)}
                      </span>
                    </div>
                  ) : null}

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
          );
        })}
      </ul>
    </section>
  );
}
