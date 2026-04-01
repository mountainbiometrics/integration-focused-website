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

No test framework is configured.

## Architecture

### Routing (App Router with Route Groups)

- `app/(main)/` — Primary site pages (homepage, product, use-cases, technical, about, contact, cards, privacy, terms). Wrapped in Header + Footer layout.
- `app/(microsites)/m/` — Targeted landing pages with minimal layout. Microsites defined in `lib/microsites.ts` (`healthcare-pe`, `b2b-pe`, `cms-interop`). Dynamic routes via `[slug]/page.tsx`, with dedicated route directories for `healthcare-pe/`, `b2b-pe/`, and `cms-interop/`.

### Component Organization (`components/`)

Organized by feature domain: `global/` (Header, Footer), `content/` (Hero, SectionHeader, bullets), `comparison/` (BeforeAfter, ThreeStepFlow), `product/`, `animation/`, `cta/`, `forms/`, `microsites/`, `technical/`.

### Key Conventions

- **Static export only** — `output: "export"` in next.config.ts. No SSR, API routes, or runtime data fetching. Images use `unoptimized: true`.
- **Server components by default** — Only interactive components use `'use client'` (Header, forms, email gate, scroll hooks).
- **Styling** — Tailwind v4 configured via `app/globals.css` with `@theme inline` (no tailwind.config file). Design tokens use `--ms-*` CSS variables (e.g. `--ms-heading`, `--ms-body`, `--ms-accent`, `--ms-surface`). Tailwind theme maps to these via `@theme inline` block.
- **Fonts** — Three Google Fonts loaded in root layout: Inter (sans), Instrument Serif (display), Source Serif 4 (body serif). Available as CSS variables `--font-inter`, `--font-display`, `--font-body-serif`.
- **Microsite theming** — `MicrositeThemeWrapper` injects CSS variables (`--ms-primary`, `--ms-hero-gradient`) per microsite config.
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

Static files in `out/` deployed via Cloudflare Workers (`wrangler.jsonc`).
