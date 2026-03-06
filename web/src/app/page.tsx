import AiShowcase from "@/components/ai-showcase";
import { ProjectGrid } from "@/components/project-grid";
import { systemsDeepDives } from "@/content/projects";
import { getGitHubSnapshot } from "@/lib/github";

function formatDate(isoDate: string): string {
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

export default async function Home() {
  const snapshot = await getGitHubSnapshot();
  const fetchedAt = formatDate(snapshot.fetchedAt);

  return (
    <main className="site-shell">
      <nav className="top-nav" aria-label="Primary">
        <div className="nav-brand">Aditya Chauhan</div>
        <div className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#github">GitHub</a>
          <a href="#systems">Systems</a>
          <a href="#ai">AI</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="section" id="home">
        <div className="hero">
          <div>
            <span className="eyebrow">Fullstack Developer + AI Engineer</span>
            <h1 className="hero-title">AI product engineer with systems roots.</h1>
            <p className="hero-subtitle">
              I build end-to-end software: protocol-heavy backends in Go and
              Rust, and AI features in TypeScript that solve real workflow
              problems.
            </p>

            <ul className="hero-points">
              <li>
                Implemented a modular BitTorrent client in Go with BEP 3/5/9,
                tracker integration, and peer-wire messaging.
              </li>
              <li>
                Built a Rust VM and runtime with compiler, lexical closures,
                classes, and mark-and-sweep GC.
              </li>
              <li>
                Shipped a Graph-RAG product using triplet extraction,
                `pgvector`, and interactive graph exploration.
              </li>
            </ul>
          </div>

          <div>
            <div className="hero-tags">
              <span className="badge badge--build">Systems + Backend</span>
              <span className="badge badge--ai">Applied AI</span>
              <span className="badge badge--theme-data">Retrieval + Ranking</span>
              <span className="badge">TypeScript Product UI</span>
            </div>

            <div className="metrics-grid" aria-label="Portfolio metrics">
              {snapshot.metrics.map((item) => (
                <article className="metric-card" key={item.label}>
                  <p className="metric-card__value">{item.value}</p>
                  <p className="metric-card__label">{item.label}</p>
                </article>
              ))}
            </div>

            <div className="hero-actions">
              <a
                className="action-link action-link--primary"
                href={snapshot.profile.profileUrl}
                target="_blank"
                rel="noreferrer"
              >
                View GitHub
              </a>
              <a className="action-link" href="#contact">
                Build Together
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="projects">
        <span className="eyebrow">Featured AI Work</span>
        <div className="panel">
          <h2 className="panel-title">AI Products with Real Engineering Constraints</h2>
          <p className="panel-copy">
            These projects demonstrate applied AI systems across retrieval,
            guardrails, multimodal interfaces, and product-grade UX.
          </p>
          <div className="section-stack-gap">
            <ProjectGrid liveRepoStats={snapshot.repoStats} />
          </div>
        </div>
      </section>

      <section className="section" id="github">
        <span className="eyebrow">GitHub Pulse</span>
        <div className="panel">
          <h2 className="panel-title">Pinned and Live Repo Activity</h2>
          <p className="panel-copy">
            Live GitHub data is cached for one hour to keep page loads fast and
            API usage predictable.
          </p>
          <p className="mono-line">Latest snapshot: {fetchedAt}</p>

          <ul className="pinned-grid section-stack-gap">
            {snapshot.pinned.map((repo) => (
              <li key={repo.name} className="pinned-grid__item">
                <article className="pinned-card">
                  <h3 className="pinned-card__title">
                    <a href={repo.url} target="_blank" rel="noreferrer">
                      {repo.name}
                    </a>
                  </h3>
                  <p className="pinned-card__copy">
                    {repo.description ?? "No repository description available."}
                  </p>
                  <div className="hero-tags pinned-card__meta">
                    <span className="badge badge--theme-data">
                      Stars: {repo.stars.toLocaleString("en-US")}
                    </span>
                    <span className="badge">Updated: {formatDate(repo.updatedAt)}</span>
                    {repo.language ? <span className="badge">{repo.language}</span> : null}
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" id="systems">
        <span className="eyebrow">Systems Core</span>
        <div className="content-grid">
          {systemsDeepDives.map((system) => (
            <article key={system.name} className="panel">
              <h3 className="panel-title">{system.name}</h3>
              <p className="panel-copy">{system.summary}</p>
              <div className="hero-tags panel-copy--spaced">
                {system.stack.map((item) => (
                  <span key={item} className="badge badge--build">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="ai">
        <div className="panel panel--accent">
          <h2 className="panel-title">AI Mission</h2>
          <p className="panel-copy">
            I use AI where it improves decisions or speed: retrieval, ranking,
            synthesis, and interface design that helps users act faster with
            better context.
          </p>
          <p className="panel-copy panel-copy--spaced">
            My systems background shapes every layer: kernel memory/interrupt
            primitives, protocol flow design, and reliability-first application
            architecture.
          </p>
        </div>
        <div className="section-stack-gap">
          <AiShowcase />
        </div>
      </section>

      <section className="section" id="contact">
        <div className="panel">
          <h2 className="panel-title">Let&apos;s Build</h2>
          <p className="panel-copy">
            Have a hard product or platform problem that mixes AI and backend
            complexity? Let&apos;s design it, scope it, and ship a clean first
            version.
          </p>
          <div className="hero-actions panel-copy--spaced">
            <a
              className="action-link action-link--primary"
              href={snapshot.profile.profileUrl}
              target="_blank"
              rel="noreferrer"
            >
              github.com/{snapshot.profile.username}
            </a>
            <a className="action-link" href="mailto:adityac.1406@gmail.com">
              adityac.1406@gmail.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
