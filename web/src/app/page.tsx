import AiShowcase from "@/components/ai-showcase";
import { ProjectGrid } from "@/components/project-grid";
import { profileHighlights, systemsDeepDives } from "@/content/projects";

export default function Home() {
  return (
    <main className="site-shell">
      <nav className="top-nav" aria-label="Primary">
        <div className="nav-brand">Aditya Chauhan</div>
        <div className="nav-links">
          <a href="#projects">Projects</a>
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
              {profileHighlights.map((item) => (
                <article className="metric-card" key={item.label}>
                  <p className="metric-card__value">{item.value}</p>
                  <p className="metric-card__label">{item.label}</p>
                </article>
              ))}
            </div>

            <div className="hero-actions">
              <a
                className="action-link action-link--primary"
                href="https://github.com/adityachauhan0"
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
            <ProjectGrid />
          </div>
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
              href="https://github.com/adityachauhan0"
              target="_blank"
              rel="noreferrer"
            >
              github.com/adityachauhan0
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
