export const featuredProjectSlugs = [
  "wait-whaa-win",
  "gamer-cat",
  "slap-app",
  "research-waifu",
  "are-you-okay",
] as const;

export type FeaturedProjectSlug = (typeof featuredProjectSlugs)[number];

export type FeaturedProject = {
  slug: FeaturedProjectSlug;
  name: string;
  repoUrl: string;
  status: "Live" | "Code";
  theme: "ai" | "build" | "data";
  summary: string;
  problem: string;
  architecture: string;
  stack: readonly string[];
  highlights: readonly string[];
};

export const featuredProjects = [
  {
    slug: "wait-whaa-win",
    name: "wait-whaa-win",
    repoUrl: "https://github.com/adityachauhan0/wait-whaa-win",
    status: "Live",
    theme: "ai",
    summary:
      "Graph-RAG discovery engine that surfaces non-obvious connections from user knowledge.",
    problem:
      "Pure vector search misses relationship-level context and often fails to explain why an insight should be trusted.",
    architecture:
      "Triplet extraction builds graph+vector memory in Neon Postgres; multi-stage retrieval and bridge hypotheses drive interactive graph outputs.",
    stack: ["Next.js", "TypeScript", "Gemini", "Neon + pgvector", "Drizzle", "Clerk"],
    highlights: [
      "Combined graph and vector retrieval for contextual recall.",
      "Implemented bridge-hypothesis generation for distant-node reasoning.",
      "Rendered evidence paths with interactive graph UX.",
    ],
  },
  {
    slug: "gamer-cat",
    name: "gamer-cat",
    repoUrl: "https://github.com/adityachauhan0/gamer-cat",
    status: "Code",
    theme: "ai",
    summary:
      "Local-first multimodal gaming copilot with live screen understanding and voice interaction.",
    problem:
      "Most assistants depend on cloud pipelines and add latency/privacy risks for fast game-time feedback.",
    architecture:
      "A local loop combines screen capture, vision-language inference, and conversational voice IO for low-latency guidance.",
    stack: ["Python", "Ollama", "Llama 3.2", "Moondream", "STT/TTS"],
    highlights: [
      "Built an offline-first multimodal interaction pipeline.",
      "Integrated screen + voice context for in-session assistance.",
      "Optimized for local inference and privacy-sensitive workflows.",
    ],
  },
  {
    slug: "slap-app",
    name: "slap-app",
    repoUrl: "https://github.com/adityachauhan0/slap-app",
    status: "Live",
    theme: "build",
    summary:
      "AI reality-check app with structured feedback and production guardrails.",
    problem:
      "Direct LLM advice flows are easy to abuse without authentication, rate control, and consistent response formatting.",
    architecture:
      "Next.js app with Clerk auth, Upstash rate limits, and a structured prompting layer that returns multi-part diagnostics.",
    stack: ["Next.js", "TypeScript", "Gemini", "Clerk", "Upstash Redis", "Tailwind"],
    highlights: [
      "Implemented sliding-window rate limits for abuse control.",
      "Shipped structured responses suitable for product UX.",
      "Balanced AI output quality with operational safety controls.",
    ],
  },
  {
    slug: "research-waifu",
    name: "research-waifu",
    repoUrl: "https://github.com/adityachauhan0/research-waifu",
    status: "Code",
    theme: "data",
    summary:
      "Agentic RAG research system with planning, critique, and grounded report synthesis.",
    problem:
      "Single-pass retrieval and generation pipelines struggle to maintain depth and factual grounding on open-ended research.",
    architecture:
      "Planner-worker-evaluator-compiler graph orchestrates web/PDF retrieval, embedding search, revision loops, and final synthesis.",
    stack: ["Python", "LangGraph", "LangChain", "Ollama", "ChromaDB", "DuckDuckGo Search"],
    highlights: [
      "Added self-correction loops before final report generation.",
      "Combined web and document retrieval for better source coverage.",
      "Separated planning and evaluation roles to improve answer quality.",
    ],
  },
  {
    slug: "are-you-okay",
    name: "are-you-okay",
    repoUrl: "https://github.com/adityachauhan0/are-you-okay",
    status: "Live",
    theme: "ai",
    summary:
      "Real-time gesture-controlled browser synth powered by on-device hand tracking.",
    problem:
      "Interactive ML demos often fail due to high-latency inference and weak mapping between vision signals and user control.",
    architecture:
      "Client-side hand landmark inference drives audio synthesis zones and interaction states for immediate feedback.",
    stack: ["Next.js", "TypeScript", "MediaPipe", "Tone.js", "Framer Motion"],
    highlights: [
      "Designed low-latency gesture-to-audio control mapping.",
      "Implemented browser-native real-time inference loop.",
      "Shipped playful UX while preserving technical depth.",
    ],
  },
] as const satisfies readonly FeaturedProject[];

export type SystemsDeepDive = {
  name: string;
  summary: string;
  stack: readonly string[];
};

export const systemsDeepDives = [
  {
    name: "go-torrent",
    summary:
      "Built a protocol-level BitTorrent client in Go with tracker, DHT, and peer-wire internals.",
    stack: ["Go", "BEP 3/5/9", "Networking"],
  },
  {
    name: "hyle",
    summary:
      "Implemented a stack-based VM and language runtime with compiler and mark-and-sweep GC.",
    stack: ["Rust", "Compiler", "Runtime"],
  },
  {
    name: "rust_os",
    summary:
      "Developed a no_std x86_64 micro-kernel with paging, interrupt handling, and allocator subsystems.",
    stack: ["Rust", "x86_64", "Kernel"],
  },
] as const satisfies readonly SystemsDeepDive[];

export const profileHighlights = [
  { label: "Public repos", value: "63+" },
  { label: "Featured AI projects", value: "5" },
  { label: "Systems deep dives", value: "3" },
] as const;
