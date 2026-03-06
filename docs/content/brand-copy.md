# Portfolio Brand Copy (First Pass)

## Hero Headline
I build fullstack products from first principles: low-level systems in Rust and Go, and AI-powered web apps that people can actually use.

## Tagline Variants
1. Fullstack developer and AI engineer shipping everything from custom VMs and kernels to Graph-RAG products.
2. Systems-minded fullstack engineer: protocol-heavy backends, polished TypeScript frontends, and practical AI workflows.

## About
I am a fullstack developer with a strong systems foundation and an AI product mindset. I like building software across the stack, from bytecode interpreters and operating-system internals to modern web applications with production-friendly developer experience.

My core strengths are distributed/networked backend work in Go and Rust, user-facing applications in TypeScript/React, and applied AI features that improve actual workflows instead of just adding novelty. I care about correctness, observability, and clear architecture decisions, especially where performance, reliability, and product usability intersect.

I am at my best on technically demanding builds: implementing protocols, designing runtime behavior, modeling data pipelines, and turning complex systems into interfaces that feel simple.

## Project Blurbs
### go-torrent
A modular BitTorrent client in Go that implements core protocol layers end-to-end: BEP 3 torrent parsing, BEP 5 DHT peer discovery, BEP 9 metadata exchange for magnet links, HTTP/UDP tracker communication, and Peer Wire messaging (handshake, bitfield, choke/unchoke, piece requests). Alongside the backend, I built a modern React/Vite/Three.js dashboard for real-time transfer stats, peer visibility, and `.torrent` uploads.

### hyle
A stack-based virtual machine and dynamic programming language implemented in Rust. The project includes a hand-written single-pass compiler (Pratt parser) that emits bytecode, plus a runtime with closures, lexical scoping, classes, inheritance, and method dispatch. Memory is managed by a custom mark-and-sweep garbage collector designed to handle cyclic references and sustained allocation pressure.

### rust_os
A 64-bit x86_64 Rust micro-kernel focused on core OS primitives in a `no_std` environment. I implemented interrupt handling with GDT/IDT setup, PIC remapping, and dedicated double-fault recovery paths, then built out memory subsystems including 4-level paging, a boot-info frame allocator, and a heap allocator that enables `Box`, `Vec`, and `String`. The kernel runs via a bootable image in QEMU for iterative low-level testing.

### wait-whaa-win
An AI discovery engine built with Next.js and TypeScript that uses a Graph-RAG pipeline to uncover non-obvious connections in user knowledge. The system extracts knowledge triplets, stores graph + vector data in Neon Postgres (`pgvector`) via Drizzle ORM, and runs multi-stage retrieval with bridge-hypothesis generation before rendering results in an interactive React Flow graph. Auth and app scaffolding are production-oriented, with Clerk and server-side actions.

## TODO: Facts To Verify Before Publishing
- Confirm canonical repo names and URLs (especially whether `rust_os` is published as `valhalla_os`).
- Confirm current model/version naming in `wait-whaa-win` (Gemini embedding + generation models).
- Verify `hyle` benchmark numbers and whether they are still representative.
- Verify `go-torrent` runtime/deployment details (Go version requirement, frontend serving flow).
- Add outcome metrics where available (performance numbers, user counts, stars, or demo usage).
