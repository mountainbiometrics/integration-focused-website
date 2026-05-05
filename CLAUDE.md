# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Mountain Biometrics marketing/product website. Next.js 16 App Router with React 19, TypeScript (strict), Tailwind CSS v4, deployed as a static export to Cloudflare Workers.

## Commands

```bash
npm run dev          # Dev server at localhost:3000
npm run build        # Production build (runs prebuild card generation → static export to out/)
npm run lint         # ESLint (Next.js core-web-vitals + TypeScript)
npm run generate-cards  # Generate VCF contact files + QR codes to public/cards/
```

No test framework is configured. The validation surface is `npm run lint` + `npm run build` + manual browser verification.

## Architecture

### Routing (App Router with Route Groups)

- `app/(main)/` — Primary site pages (homepage, product, use-cases, technical, about, contact, cards, privacy, terms). Wrapped in Header + Footer layout.
- `app/(microsites)/m/` — Targeted landing pages with minimal layout. Microsites defined in `lib/microsites.ts` (current set: `healthcare-pe`, `b2b-pe`, `cms-interop`, `healthcare-ma-alliance`, `healthcare-state-rhtp`, `b2b-saas-ma-alliance`). Dynamic routes via `[slug]/page.tsx`, with sibling directories for any microsite that needs bespoke layout beyond the dynamic template. Because the build is a static export, adding a microsite requires updating `lib/microsites.ts` (the data source for `getAllMicrositeSlugs` / `generateStaticParams`) and creating a custom page directory only if the dynamic `[slug]` template is insufficient.

### Component Organization (`components/`)

Organized by feature domain: `global/` (Header, Footer), `content/` (Hero, SectionHeader, bullets), `comparison/` (BeforeAfter, ThreeStepFlow), `product/`, `animation/`, `cta/`, `forms/`, `microsites/`, `technical/`.

### Key Conventions

- **Static export only** — `output: "export"` in next.config.ts. No SSR, API routes, or runtime data fetching. Images use `unoptimized: true`.
- **Server components by default** — Only interactive components use `'use client'` (Header, forms, email gate, scroll hooks).
- **Styling** — Tailwind v4 configured via `app/globals.css` with `@theme inline` (no tailwind.config file). Design tokens use `--ms-*` CSS variables: `--ms-heading` (primary text), `--ms-body` / `--ms-body-light` (secondary), `--ms-muted`, `--ms-accent` / `--ms-accent-hover` (CTAs, brand red), `--ms-surface` / `--ms-surface-warm`, plus shadows `--ms-shadow-card`, `--ms-shadow-hero`, `--ms-shadow-btn`. Tailwind theme maps to these via `@theme inline` block.
- **Layout utilities** — Defined in `globals.css`: `.container-site` (responsive max-width with breakpoints up to 2200px), `.container-content` (768px reading column), `.section-spacing` / `.subsection-spacing` (responsive vertical padding), `.shadow-card-hover` (CSS-only shadow lift). Prefer these over hand-rolled paddings/widths.
- **Typography** — `h1`–`h6` and `p` get base styles via `@layer base` in `globals.css`: headings auto-apply Instrument Serif with `clamp()`-scaled font sizes, so do NOT add `font-display` or size classes to headings unless intentionally overriding. Body default is Inter at 1.125rem, weight 300, line-height 1.6.
- **Fonts** — Three Google Fonts loaded in root layout: Inter (`--font-inter`, used as `--font-sans`), Instrument Serif (`--font-display`, used by all headings), Source Serif 4 (`--font-body-serif`, opt-in only).
- **Microsite theming** — `MicrositeThemeWrapper` injects per-microsite CSS variables (`--ms-primary`, `--ms-primary-hover`, `--ms-hero-gradient`) from each microsite's `theme` config; the global `--ms-accent` red stays unchanged.
- **Props** — Typed with interfaces, not inline types.
- **Icons** — lucide-react throughout.
- **Forms** — @formspree/react integration.
- **Path alias** — `@/*` maps to project root.

### Custom Hooks (`hooks/`)

- `useScrollProgress` — Scroll-based progress tracking
- `useLoopProgress` — Looping animation progress

### Data & Config Files (`lib/`)

- `lib/microsites.ts` — Microsite definitions (themes, content, white paper paths)
- `lib/team-data.ts` — Team member data for QR card generation

### Design Documents (`design_docs/`)

Planning and content docs for microsites (material briefs, design memos). Reference these for context when building or modifying microsites.

### Build-time Scripts

`scripts/generate-cards.ts` runs at prebuild: reads team-data.ts, generates VCF files and SVG QR codes into `public/cards/`.

### Deployment

Static files in `out/` deployed via Cloudflare Workers (`wrangler.jsonc` — `assets.directory: "./out"`). White paper PDFs live in `public/papers/` and are referenced by `filePath` in `lib/microsites.ts`; adding a paper means dropping the file into `public/papers/` and wiring it into the microsite config.
