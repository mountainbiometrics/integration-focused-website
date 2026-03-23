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
- `app/(microsites)/m/` — Targeted landing pages with minimal layout. Three microsites defined in `lib/microsites.ts` (`healthcare-pe`, `b2b-pe`, `cms-interop`). Dynamic routes via `[slug]/page.tsx`, plus a custom page for `cms-interop/`.

### Component Organization (`components/`)

Organized by feature domain: `global/` (Header, Footer), `content/` (Hero, SectionHeader, bullets), `comparison/` (BeforeAfter, ThreeStepFlow), `cta/`, `forms/`, `microsites/`, `technical/`.

### Key Conventions

- **Static export only** — `output: "export"` in next.config.ts. No SSR, API routes, or runtime data fetching. Images use `unoptimized: true`.
- **Server components by default** — Only interactive components use `'use client'` (Header, forms, email gate, scroll hooks).
- **Styling** — Tailwind v4 configured via `app/globals.css` (no tailwind.config file). Design tokens as CSS variables (`--color-primary-red`, `--color-cta-blue`, `--spacing-section`, etc.). Custom container utilities (`.container-site`, `.container-content`, `.section-spacing`).
- **Microsite theming** — `MicrositeThemeWrapper` injects CSS variables (`--ms-primary`, `--ms-hero-gradient`) per microsite config.
- **Props** — Typed with interfaces, not inline types.
- **Icons** — lucide-react throughout.
- **Forms** — @formspree/react integration.
- **Path alias** — `@/*` maps to project root.

### Data & Config Files (`lib/`)

- `lib/microsites.ts` — Microsite definitions (themes, content, white paper paths)
- `lib/team-data.ts` — Team member data for QR card generation
- `lib/design-tokens.ts` — Exported design tokens (mirrors CSS variables)

### Build-time Scripts

`scripts/generate-cards.ts` runs at prebuild: reads team-data.ts, generates VCF files and SVG QR codes into `public/cards/`.

### Deployment

Static files in `out/` deployed via Cloudflare Workers (`wrangler.jsonc`).
