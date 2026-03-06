type PipelineStage = {
  id: "ingest" | "graph-vector" | "reason" | "visualize";
  title: string;
  summary: string;
  output: string;
};

type ProofCard = {
  id: "stack" | "retrieval" | "impact";
  title: string;
  subtitle: string;
  bullets: string[];
};

const pipelineStages: PipelineStage[] = [
  {
    id: "ingest",
    title: "Ingest",
    summary: "Normalize product docs, tickets, logs, and user transcripts into versioned chunks.",
    output: "Grounded source units with provenance metadata.",
  },
  {
    id: "graph-vector",
    title: "Graph + Vector",
    summary:
      "Build an entity graph for relationship-aware traversal and pair it with dense embeddings for semantic recall.",
    output: "Hybrid retriever that captures both structure and intent.",
  },
  {
    id: "reason",
    title: "Reason",
    summary:
      "Route context through planner + critic loops to produce traceable answers and ranked actions.",
    output: "Decision-ready outputs with confidence signals.",
  },
  {
    id: "visualize",
    title: "Visualize",
    summary:
      "Render retrieval paths, rationale, and outcome metrics into UX-facing dashboards.",
    output: "Transparent insights teams can validate and ship from.",
  },
];

const proofCards: ProofCard[] = [
  {
    id: "stack",
    title: "Stack",
    subtitle: "Production-grade building blocks",
    bullets: [
      "TypeScript + React interface layer for operator workflows",
      "Python/Node services with job queues for batch and realtime tasks",
      "Postgres + vector index + graph store behind a unified retrieval API",
    ],
  },
  {
    id: "retrieval",
    title: "Retrieval Strategy",
    subtitle: "Precision first, recall when it matters",
    bullets: [
      "Hybrid search: lexical, dense, and graph-neighbor expansion",
      "Query planning that adapts by question type and latency budget",
      "Cross-encoder reranking with citation checks before response generation",
    ],
  },
  {
    id: "impact",
    title: "Product Impact",
    subtitle: "Measured on real user flows",
    bullets: [
      "Reduced time-to-answer for support and enablement teams",
      "Higher answer trust through visible evidence trails",
      "Faster feature iteration from analytics tied to retrieval quality",
    ],
  },
];

export default function AiShowcase() {
  return (
    <section className="ai-showcase" aria-labelledby="ai-showcase-title">
      <div className="ai-showcase__surface">
        <header className="ai-showcase__header">
          <p className="ai-showcase__eyebrow">AI Engineering Showcase</p>
          <h2 id="ai-showcase-title" className="ai-showcase__title">
            From Raw Context to Product-Ready Intelligence
          </h2>
          <p className="ai-showcase__intro">
            This system turns fragmented knowledge into explainable answers by
            combining structured retrieval, reasoning loops, and clear visual
            outputs for teams that ship fast.
          </p>
        </header>

        <article className="ai-showcase__pipeline" aria-labelledby="pipeline-title">
          <h3 id="pipeline-title" className="ai-showcase__subheading">
            Pipeline
          </h3>
          <ol className="ai-showcase__pipeline-list">
            {pipelineStages.map((stage, index) => (
              <li key={stage.id} className="ai-showcase__pipeline-step">
                <article className="pipeline-stage">
                  <p className="pipeline-stage__step-label">Step {index + 1}</p>
                  <h4 className="pipeline-stage__title">{stage.title}</h4>
                  <p className="pipeline-stage__summary">{stage.summary}</p>
                  <p className="pipeline-stage__output">{stage.output}</p>
                </article>
                {index < pipelineStages.length - 1 ? (
                  <span className="pipeline-stage__connector" aria-hidden="true">
                    →
                  </span>
                ) : null}
              </li>
            ))}
          </ol>
        </article>

        <article className="ai-showcase__proofs" aria-labelledby="proof-title">
          <h3 id="proof-title" className="ai-showcase__subheading">
            Proof Points
          </h3>
          <ul className="ai-showcase__proof-grid">
            {proofCards.map((card) => (
              <li key={card.id} className="ai-showcase__proof-item">
                <article className="proof-card">
                  <header className="proof-card__header">
                    <h4 className="proof-card__title">{card.title}</h4>
                    <p className="proof-card__subtitle">{card.subtitle}</p>
                  </header>
                  <ul className="proof-card__bullets">
                    {card.bullets.map((bullet) => (
                      <li key={bullet} className="proof-card__bullet">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
