import AiShowcase from "@/components/ai-showcase";
import { ProjectGrid } from "@/components/project-grid";

export default function Home() {
  return (
    <main className="site-shell">
      <nav className="top-nav" aria-label="Primary">
        <div className="nav-brand">Aditya Chauhan</div>
        <div className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#ai">AI</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="section" id="home">
        <div className="hero">
          <div>
            <span className="eyebrow">Fullstack Developer + AI Engineer</span>
            <h1 className="hero-title">
              Building software from protocol layers to AI product interfaces.
            </h1>
            <p className="hero-subtitle">
              Systems-minded engineer shipping low-level Rust and Go work alongside
              production-facing TypeScript applications with practical AI retrieval
              and reasoning workflows.
            </p>
          </div>
          <div>
            <div className="hero-tags">
              <span className="badge badge--build">Go / Rust Systems</span>
              <span className="badge badge--ai">Graph-RAG</span>
              <span className="badge">Next.js + TypeScript</span>
              <span className="badge">Product Engineering</span>
            </div>
            <p className="mono-line">New Delhi, India | Open to engineering roles</p>
          </div>
        </div>
      </section>

      <section className="section" id="projects">
        <span className="eyebrow">Selected Work</span>
        <div className="panel">
          <h2 className="panel-title">Case Studies in Systems and Applied AI</h2>
          <p className="panel-copy">
            Projects are selected to show depth in protocol design, runtime systems,
            and user-facing AI product execution.
          </p>
          <div className="section-stack-gap">
            <ProjectGrid />
          </div>
        </div>
      </section>

      <section className="section" id="ai">
        <AiShowcase />
      </section>

      <section className="section" id="about">
        <div className="panel">
          <h2 className="panel-title">About</h2>
          <p className="panel-copy">
            I work across the stack with an emphasis on correctness and product
            clarity. My core strengths are backend and systems engineering in Go
            and Rust, frontend product delivery in TypeScript/React, and AI
            workflows that combine retrieval quality with explainable outputs.
          </p>
          <p className="panel-copy panel-copy--spaced">
            I enjoy technically demanding builds where architecture matters:
            protocol implementations, VM/runtime behavior, memory and performance
            constraints, and interfaces that make complex systems feel usable.
          </p>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="panel">
          <h2 className="panel-title">Let&apos;s Build</h2>
          <p className="panel-copy">
            Reach out for fullstack and AI engineering collaboration, product
            builds, or backend/platform-focused roles.
          </p>
          <p className="mono-line">GitHub: github.com/adityachauhan0</p>
        </div>
      </section>
    </main>
  );
}
