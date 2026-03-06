export const projectSlugs = [
  "go-torrent",
  "hyle",
  "rust_os",
  "wait-whaa-win",
] as const;

export type ProjectSlug = (typeof projectSlugs)[number];

export type Project = {
  slug: ProjectSlug;
  name: string;
  summary: string;
  problem: string;
  architecture: string;
  stack: readonly string[];
  highlights: readonly string[];
};

export const projects = [
  {
    slug: "go-torrent",
    name: "go-torrent",
    summary:
      "A BitTorrent client in Go implementing peer wire, trackers, DHT, and metadata exchange.",
    problem:
      "Most examples stop at basic downloads and do not cover robust peer discovery, scheduling, and integrity handling.",
    architecture:
      "Protocol modules for tracker communication and peer wire feed a concurrent piece scheduler with verification and resume-safe writes.",
    stack: ["Go", "BEP 3/5/9", "DHT", "HTTP/UDP Trackers", "React"],
    highlights: [
      "Implemented magnet-link metadata exchange and distributed peer discovery.",
      "Built concurrent piece workers with retry, timeout, and choke/unchoke handling.",
      "Added real-time dashboard visibility for peers and transfer state.",
    ],
  },
  {
    slug: "hyle",
    name: "hyle",
    summary:
      "A stack-based VM and dynamic language in Rust with a custom compiler and garbage collector.",
    problem:
      "Language tooling tutorials often skip hard runtime concerns like closures, classes, and memory reclamation under cyclic references.",
    architecture:
      "A single-pass compiler emits bytecode executed by a VM runtime supporting lexical scopes, class inheritance, and method dispatch.",
    stack: ["Rust", "Pratt Parser", "Bytecode VM", "Mark-and-Sweep GC"],
    highlights: [
      "Implemented a handwritten compiler from parser to bytecode emission.",
      "Added closures, lexical environments, and class/object model semantics.",
      "Designed a mark-and-sweep collector to handle cyclic object graphs.",
    ],
  },
  {
    slug: "rust_os",
    name: "rust_os",
    summary:
      "A 64-bit Rust micro-kernel exploring interrupts, memory management, and no_std systems programming.",
    problem:
      "Kernel experimentation needs reliable low-level tooling for memory and fault handling without undefined-behavior traps.",
    architecture:
      "Boot sequence initializes GDT/IDT and paging; frame allocator and heap layers enable higher-level allocations in kernel space.",
    stack: ["Rust", "x86_64", "no_std", "QEMU", "Paging"],
    highlights: [
      "Set up interrupt handling, PIC remapping, and double-fault recovery path.",
      "Implemented 4-level paging plus frame and heap allocators.",
      "Enabled kernel collections (`Box`, `Vec`, `String`) for richer subsystems.",
    ],
  },
  {
    slug: "wait-whaa-win",
    name: "wait-whaa-win",
    summary:
      "An AI discovery engine using Graph-RAG to surface non-obvious connections in user knowledge.",
    problem:
      "Pure vector search misses relationship-level context and weakly explains why an insight should be trusted.",
    architecture:
      "Triplet extraction builds graph+vector memory in Neon Postgres with multi-stage retrieval, bridge hypotheses, and interactive graph rendering.",
    stack: ["Next.js", "TypeScript", "Gemini", "Neon + pgvector", "Drizzle"],
    highlights: [
      "Combined graph and vector retrieval for better contextual recall.",
      "Added bridge-hypothesis generation to connect distant knowledge nodes.",
      "Rendered reasoning paths with interactive graph UX for explainability.",
    ],
  },
] as const satisfies readonly Project[];
