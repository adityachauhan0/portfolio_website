# Design System v1: Signal Workshop

## 1. Visual Intent
This system is built for a fullstack + AI portfolio that should feel like a product lab, not a template. The visual language blends editorial confidence with technical precision:
- Editorial: bold headlines, asymmetrical compositions, generous whitespace.
- Technical: grid-aligned modules, mono data labels, status colors, restrained motion.

Core personality:
- Sharp, optimistic, hands-on.
- Human-first storytelling with machine-readable structure.
- High contrast without defaulting to neon-on-black.

## 2. Typography
Use three families with strict role boundaries.

### Primary Pair
- Display / Section Headings: `Syne`, fallback `"Avenir Next", "Segoe UI", sans-serif`
- Body / UI Text: `Manrope`, fallback `"Helvetica Neue", "Segoe UI", sans-serif`
- Data / Code / Labels: `IBM Plex Mono`, fallback `"SFMono-Regular", Menlo, monospace`

### Typographic Rules
- Headings (`Syne`): weight 600-800, tight line-height (0.95-1.1), slight negative tracking for large sizes.
- Body (`Manrope`): weight 400-600, line-height 1.45-1.65.
- Data labels (`IBM Plex Mono`): weight 500, uppercase allowed for metadata only.
- Do not mix more than two families in a single component.

### Type Scale (Fluid)
Use `clamp()` to maintain rhythm across desktop/mobile.

```css
:root {
  --font-display: "Syne", "Avenir Next", "Segoe UI", sans-serif;
  --font-body: "Manrope", "Helvetica Neue", "Segoe UI", sans-serif;
  --font-mono: "IBM Plex Mono", "SFMono-Regular", Menlo, monospace;

  --text-hero: clamp(2.6rem, 5.2vw, 5rem);
  --text-h1: clamp(2rem, 3.4vw, 3.4rem);
  --text-h2: clamp(1.5rem, 2.5vw, 2.3rem);
  --text-h3: clamp(1.15rem, 1.6vw, 1.45rem);
  --text-body-lg: clamp(1.05rem, 1.2vw, 1.2rem);
  --text-body: 1rem;
  --text-body-sm: 0.875rem;
  --text-mono: 0.82rem;
}
```

## 3. Color System
Naming convention: `--color-{category}-{role}`.
Example categories: `bg`, `text`, `border`, `accent`, `state`.

### Core Palette (Light-First)
```css
:root {
  --color-bg-canvas: #f5f2eb;
  --color-bg-surface: #fffdf8;
  --color-bg-elevated: #ffffff;

  --color-text-primary: #111315;
  --color-text-secondary: #3e454c;
  --color-text-muted: #66707a;
  --color-text-inverse: #f8fafc;

  --color-border-subtle: #d8d2c6;
  --color-border-strong: #8d97a1;

  --color-accent-ai: #0ea5a4;
  --color-accent-build: #dd6b20;
  --color-accent-data: #2563eb;

  --color-state-success: #2f855a;
  --color-state-warning: #b7791f;
  --color-state-danger: #c53030;

  --color-focus-ring: #0f766e;
  --gradient-hero: linear-gradient(130deg, #fffdf8 0%, #e8f6f4 48%, #f6ede2 100%);
}
```

### Color Usage Rules
- AI-related elements (models, prompts, agents): `--color-accent-ai`.
- Engineering/build elements (architecture, infra, deployment): `--color-accent-build`.
- Metrics/data elements (charts, KPIs, telemetry): `--color-accent-data`.
- Never use accent colors for long text paragraphs.
- Maintain WCAG AA minimum contrast for body text.

## 4. Spacing and Layout Tokens
Use a 6px rhythm for tighter, intentional density than default 8px systems.

```css
:root {
  --space-0: 0;
  --space-1: 0.375rem;  /* 6px */
  --space-2: 0.75rem;   /* 12px */
  --space-3: 1.125rem;  /* 18px */
  --space-4: 1.5rem;    /* 24px */
  --space-5: 2.25rem;   /* 36px */
  --space-6: 3rem;      /* 48px */
  --space-7: 4.5rem;    /* 72px */
  --space-8: 6rem;      /* 96px */

  --radius-sm: 0.5rem;
  --radius-md: 0.85rem;
  --radius-lg: 1.25rem;

  --shadow-soft: 0 8px 24px rgba(17, 19, 21, 0.08);
  --shadow-card: 0 14px 32px rgba(17, 19, 21, 0.12);

  --content-max: 75rem;     /* 1200px */
  --content-reading: 42rem; /* paragraph measure */
}
```

## 5. Motion Principles
Motion should communicate structure and confidence, not decoration.

### Motion Tokens
```css
:root {
  --motion-fast: 120ms;
  --motion-base: 220ms;
  --motion-slow: 380ms;

  --ease-standard: cubic-bezier(0.2, 0.0, 0.2, 1);
  --ease-emphasized: cubic-bezier(0.22, 1, 0.36, 1);
}
```

### Interaction Rules
- Hover: translate Y by -2px max, subtle shadow increase only.
- Entry: section children stagger by 40-60ms (title -> copy -> actions).
- Scroll effects: use opacity + 8-16px translate only; no large parallax.
- State changes (filters, tabs): animate color/background and border, not layout.
- Respect reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition-duration: 1ms !important;
    scroll-behavior: auto !important;
  }
}
```

## 6. Section Composition Rules
### Global Grid
- Desktop (`>= 1024px`): 12 columns, 24px gutters, max width `--content-max`.
- Tablet (`768px-1023px`): 8 columns, 20px gutters.
- Mobile (`< 768px`): 4 columns, 16px gutters.

### Rhythm
- Alternate section density: dense -> breathable -> dense.
- Use one dominant visual anchor per section (headline, artifact, or data block).
- Keep body copy width to `--content-reading` on desktop.

### Section Templates
- Hero: two-column split on desktop (statement + live artifact), stacked on mobile with artifact after intro text.
- Projects: masonry-like asymmetry on desktop (featured card + two supporting cards), single-column stack on mobile.
- About/Process: editorial text block + side rail metadata on desktop; metadata collapses below copy on mobile.
- Contact CTA: centered high-contrast panel with short action list; full-width on mobile.

## 7. Example Component Aesthetics
### Top Navigation
- Transparent over hero, then transitions to `--color-bg-elevated` with border on scroll.
- Logo in display font, nav items in mono small caps.
- Mobile: compact bar with single menu trigger; drawer uses large tap targets (min 44px).

### Project Card
- Card surface: `--color-bg-elevated`, border `--color-border-subtle`, radius `--radius-md`.
- Header includes status chip (`Live`, `Case Study`, `In Progress`) using state tokens.
- On hover (desktop): subtle lift + border tint to relevant accent.
- On mobile: no hover dependence; key metadata always visible.

### AI Case Study Panel
- Uses split color stripe (AI accent + neutral) on left edge.
- Includes prompt snippet in mono block, model/version metadata row, and measurable outcome.
- Desktop: prompt and outcome can sit side by side.
- Mobile: prompt above outcome; keep mono block scroll-free.

### Skill Matrix
- Not tag clouds. Use grouped capability rows:
  - `Build`: backend, infra, APIs.
  - `Intelligence`: LLM orchestration, evaluation, retrieval.
  - `Experience`: frontend systems, accessibility, performance.
- Each row has maturity indicators (dot/bar) and proof link.

## 8. Desktop and Mobile Enforcement
- Desktop layouts may use asymmetry, but mobile must preserve reading order and narrative flow.
- Any component requiring hover must have an equivalent tap-visible state.
- Minimum touch target: 44x44px.
- Maximum paragraph width on mobile: 34ch.
- Clamp heading sizes aggressively on mobile to avoid wrapping into 4+ lines.
- Avoid fixed-height cards on mobile; content should define height.

## 9. Implementation Notes
- Define tokens once in `:root`, then expose semantic aliases at component level when needed.
- Keep accent application intentional: one accent dominant per viewport section.
- Reserve gradients for hero and CTA moments only.
- Do not introduce additional fonts without replacing an existing role.
