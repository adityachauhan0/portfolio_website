# Design System Phase 2: Section Polish Guide

## Scope
This phase keeps the existing visual language and focuses on higher signal, better scanning, and cleaner mobile rhythm for:
- Hero (`.hero`, `.hero-title`, `.hero-subtitle`, `.hero-tags`)
- Project cards (`.project-grid__*`, `.project-card__*`)
- AI showcase (`.ai-showcase__*`, `.pipeline-stage__*`, `.proof-card__*`)
- Contact CTA (`#contact .panel`, `.panel-title`, `.mono-line`)

## Mobile-First Baseline Tweaks
Use these as the first pass before section-specific polish.

```css
/* Base: mobile first */
.site-shell {
  padding: var(--space-3);
}

.section {
  padding-block: var(--space-6);
}

.panel,
.ai-showcase__surface {
  padding: var(--space-4);
}

.eyebrow {
  margin-bottom: var(--space-2);
}

.panel-copy,
.hero-subtitle,
.ai-showcase__intro {
  max-width: 34ch;
}

@media (min-width: 768px) {
  .site-shell {
    padding: var(--space-5);
  }

  .section {
    padding-block: var(--space-7);
  }

  .panel,
  .ai-showcase__surface {
    padding: var(--space-5);
  }
}

@media (min-width: 1024px) {
  .site-shell {
    padding: var(--space-6);
  }
}
```

## Hero Polish
### Recommendations
- Tighten hero padding on small screens to prevent oversized first viewport.
- Reduce hero title wrap depth on mobile by constraining measure.
- Improve separation between summary text and metadata tags.
- Add soft interaction polish on desktop without depending on motion.

### Class-Level CSS
```css
.hero {
  gap: var(--space-4);
  padding: var(--space-4);
  padding-top: var(--space-5);
}

.hero-title {
  max-width: 12ch;
  font-size: clamp(2.15rem, 10.5vw, 4.7rem);
  line-height: 1.01;
}

.hero-subtitle {
  margin-top: var(--space-3);
  font-size: clamp(1rem, 4.1vw, 1.18rem);
  line-height: 1.55;
}

.hero-tags {
  margin-top: var(--space-1);
  gap: var(--space-1);
}

.hero .mono-line {
  margin-top: var(--space-2);
}

@media (min-width: 768px) {
  .hero {
    grid-template-columns: 2fr 1fr;
    align-items: end;
    gap: var(--space-5);
    padding: var(--space-6);
  }
}

@media (min-width: 1024px) {
  .hero {
    transition: box-shadow var(--motion-base) var(--ease-standard);
  }

  .hero:hover {
    box-shadow: 0 12px 30px rgba(17, 19, 21, 0.11);
  }
}
```

## Project Cards Polish
### Recommendations
- Normalize card internals so scanning order is consistent.
- Improve label-to-content contrast and spacing hierarchy.
- Add desktop hover/focus affordance but keep content readable without hover.
- Make highlights list easier to read on narrow screens.

### Class-Level CSS
```css
.project-grid__list {
  gap: var(--space-3);
}

.project-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  padding: var(--space-4);
  transition:
    transform var(--motion-fast) var(--ease-standard),
    box-shadow var(--motion-base) var(--ease-standard),
    border-color var(--motion-base) var(--ease-standard);
}

.project-card__header,
.project-card__block {
  margin: 0;
}

.project-card__title {
  font-size: clamp(1.1rem, 4.6vw, 1.45rem);
}

.project-card__summary,
.project-card__text {
  line-height: 1.58;
}

.project-card__label {
  margin-bottom: var(--space-1);
  color: color-mix(in srgb, var(--color-text-muted) 82%, black 18%);
}

.project-card__highlights {
  padding-left: 1rem;
  margin-top: var(--space-1);
}

.project-card__highlights li {
  line-height: 1.52;
}

@media (min-width: 768px) {
  .project-grid__list {
    gap: var(--space-4);
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .project-card:hover,
  .project-card:focus-within {
    transform: translateY(-2px);
    border-color: color-mix(in srgb, var(--color-accent-build) 35%, var(--color-border-subtle));
    box-shadow: 0 14px 30px rgba(17, 19, 21, 0.14);
  }
}
```

## AI Showcase Polish
### Recommendations
- Increase section contrast from surrounding panels so AI block feels like a feature module.
- Reduce connector noise on mobile and restore directional cues on tablet+.
- Improve pipeline card legibility with clearer output treatment.
- Make proof cards feel equal in weight on desktop.

### Class-Level CSS
```css
.ai-showcase__surface {
  padding: var(--space-4);
  background:
    linear-gradient(160deg, rgba(14, 165, 164, 0.04), transparent 42%),
    var(--color-bg-elevated);
}

.ai-showcase__header {
  margin-bottom: var(--space-4);
}

.ai-showcase__title {
  font-size: clamp(1.7rem, 7.3vw, 3rem);
  max-width: 18ch;
}

.ai-showcase__intro {
  margin-top: var(--space-2);
  line-height: 1.6;
}

.ai-showcase__pipeline-list {
  gap: var(--space-3);
}

.ai-showcase__pipeline-step {
  gap: var(--space-1);
}

.pipeline-stage {
  padding: var(--space-3);
}

.pipeline-stage__output {
  margin-top: var(--space-2);
  padding-top: var(--space-2);
  border-top: 1px dashed color-mix(in srgb, var(--color-accent-ai) 32%, var(--color-border-subtle));
  color: color-mix(in srgb, var(--color-accent-ai) 65%, black 35%);
}

.pipeline-stage__connector {
  display: none;
}

.proof-card {
  height: 100%;
}

@media (min-width: 768px) {
  .ai-showcase__surface {
    padding: var(--space-5);
  }

  .ai-showcase__pipeline-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: var(--space-3);
  }

  .pipeline-stage__connector {
    display: inline-block;
  }

  .ai-showcase__proof-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    align-items: stretch;
  }
}
```

## Contact CTA Polish
### Recommendations
- Make contact section visually distinct from generic content panels.
- Increase heading prominence and compress copy for faster action.
- Style the GitHub line as a CTA chip on mobile and inline utility on larger screens.

### Class-Level CSS
```css
#contact .panel {
  position: relative;
  overflow: hidden;
  padding: var(--space-4);
  border-color: color-mix(in srgb, var(--color-accent-data) 30%, var(--color-border-subtle));
  background:
    radial-gradient(circle at 100% 0, rgba(37, 99, 235, 0.09), transparent 40%),
    linear-gradient(130deg, #fffdf8 0%, #f4f8ff 100%);
}

#contact .panel-title {
  font-size: clamp(1.75rem, 7.5vw, 2.8rem);
  line-height: 1.02;
  margin-bottom: var(--space-2);
}

#contact .panel-copy {
  max-width: 32ch;
}

#contact .mono-line {
  margin-top: var(--space-3);
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  padding: 0.45rem 0.7rem;
  border-radius: 9999px;
  border: 1px solid var(--color-border-subtle);
  background: color-mix(in srgb, var(--color-bg-elevated) 92%, white 8%);
  color: var(--color-text-secondary);
  word-break: break-all;
}

@media (min-width: 768px) {
  #contact .panel {
    padding: var(--space-5);
  }

  #contact .panel-copy {
    max-width: 40ch;
  }
}
```

## Suggested Rollout Order
1. Apply mobile-first baseline tweaks and verify spacing rhythm at `360px`, `390px`, and `430px`.
2. Implement hero and project-card updates together; they share spacing and typography behavior.
3. Apply AI showcase changes and verify pipeline readability at `768px` transition.
4. Apply contact CTA treatment last and tune contrast against neighboring sections.
