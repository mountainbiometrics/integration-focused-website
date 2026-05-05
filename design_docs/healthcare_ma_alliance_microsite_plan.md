# Healthcare M&A Alliance Microsite — Plan

Microsite at `/m/healthcare-ma-alliance` gating the executive briefing
`public/papers/mtn-wp-005-exec.pdf` (3.8 MB). Audience is M&A integration
practice leaders at boutique healthcare-M&A consulting firms (Wave 1: Accordion,
West Monroe, Nordic Global). Copy is calibrated to read as a category page so
Wave 2 firms (Big 4, larger advisories) are not turned off when the URL
inevitably reaches them.

Source content: `design_docs/healthcare-pe-alliance-microsite.md`.

---

## 1. Copy (as it will appear on the page)

### Header

Logo only. Links to `/`.

### Hero

> Healthcare M&A · Productized Accelerator    ← eyebrow, uppercase tracking
>
> **Turn Integration Labor into Compounding IP**
>
> 6–8 wk → 1–2 wk
> Encode your expertise. Compress engagement timelines
>
> Your firm's methodology as portable IP.
>
> [Download the Briefing ↓]

Word count: ~24 words of prose, in line with the other microsites
(`healthcare-pe` ~27, `b2b-pe` ~22, `cms-interop` ~30, `healthcare-state-rhtp`
~20). The schema-metadata disclaimer is deliberately not duplicated here; it
lives once in §3's annotation, where the visitor sees it after the value
proposition has landed.

### Section 1 — Engagement Amnesia (badge: "The problem")

> **The same field. Mapped from scratch on every bolt-on.**
>
> [5 cards stagger in: Engagement 1, Engagement 2, Engagement 3, Engagement 4,
> Engagement 5. Each shows the same field (`Encounter.PrimaryPayer`) being
> "discovered" — 6 weeks of senior time. Each card carries a "rediscovered from
> scratch" label after the first.]
>
> **30 weeks of senior time**
> rebuilt across one platform's bolt-ons
>
> Closer: *Five engagements. Five rediscoveries. Zero carryover.*

(See §3.A for the visual sketch.)

### Section 2 — The N×M Tax (badge: "And it compounds")

> **Every new bolt-on adds an EHR. Every pair has to talk.**
>
> [TangleGrid: 8 healthcare EHR/PM nodes in a circle (Epic, athenahealth,
> eClinicalWorks, NextGen, MEDITECH, Greenway, AdvancedMD, Cerner). Pairwise
> lines draw in, gray → red. Live counter ticks 0 → 28 connections.]
>
> **65–75%**
> of integration labor on pairwise mappings
>
> Closer: *Twenty-eight mappings. And every quarterly EHR upgrade silently
> breaks one of them.*

(See §3.B for the visual sketch. Pain #3 from the earlier draft — silent
breakage on EHR upgrade — folds into the closer here rather than getting its
own section.)

### Section 3 — Glow Graphic: The Compounding Curve

> **Engagement Five Costs a Fraction of Engagement One**
>
> Conventional integration is flat at roughly 90 days per bolt-on. The
> accelerator declines from about 45 days on engagement one toward a 14-day
> asymptote by engagement five, as your firm's annotations, methodology, and
> canonical concepts compound across the deal flow.

(See §3.C for the graphic sketch.)

### Section 4 — The Solution (badge: "The Solution")

> **What Compresses, and Compounds**
>
> ⏱ **6–8 wk → 1–2 wk** — Schema discovery during the pilot
> ⚡ **90 → 14 days** — Per bolt-on by engagement five
> 🧱 **3 reusable assets** — Captured every engagement
>
> AI-assisted mapping operates on schema metadata only. Patient and financial
> data values stay in your client's environment.

### Section 5 — Glow Graphic: The IP Library

> **Every Engagement Deposits IP into Your Firm's Library**
>
> Annotation conventions, internal documented knowledge, and canonical concepts
> are captured as portable, versioned artifacts. By engagement five, the library
> has crystallized around your firm's vertical and the marginal cost of the
> next bolt-on falls toward the cost of reviewing a queue.

(See §3.D for the graphic sketch.)

### Section 6 — What Your Firm Keeps (badge: "Your IP")

> **What Your Firm Keeps**
>
> ✓ **Annotation conventions, your firm's house style, encoded.** Versioned
> artifacts with confidence scores. The next engagement starts pre-loaded with
> your firm's accumulated conventions.
>
> ✓ **Internal documented knowledge, made operational.** Playbooks and data
> dictionaries that lived dormant in SharePoint become active mapping
> intelligence on every engagement.
>
> ✓ **Canonical concepts derived from past engagements.** A growing library of
> stable business objects (Patient.MRN, Claim.DenialReason, Provider.NPI) that
> every future source maps against.
>
> Annotation: *Your firm owns the methodology, conventions, and templates you
> bring or build. MTN owns the platform and the cross-customer learnings about
> how it performs across deployments.*

### Download section

> [icon: file-down, glow]
>
> **Compounding IP for Healthcare M&A — Executive Briefing**
> For M&A practice leaders, engagement partners, and integration architects
> PDF, 3.8 MB
>
> [Email field]
> [Download the Briefing →]

### Footer

> A productized accelerator for healthcare M&A integration.
> © {currentYear} Mountain Biometrics. All rights reserved.

### Sticky mobile CTA

> [Download the Briefing]

### Meta

- **Title:** `MTN | Compounding IP for Healthcare M&A`
- **Description:** Turn integration labor into compounding firm IP. A
  productized accelerator for healthcare M&A practices integrating PE-backed
  bolt-ons.
- **OG type:** website

---

## 2. Page Structure

| #  | Section                                        | Source                                                                       |
|----|------------------------------------------------|------------------------------------------------------------------------------|
| 1  | Header (logo)                                  | Reuse from `m/healthcare-pe/page.tsx`                                        |
| 2  | Hero                                           | Bespoke `MaaHero.tsx` (white→`heroGradientColor` wash)                       |
| 3  | **Engagement Amnesia** (scroll-driven)         | New `EngagementAmnesia.tsx` — clones `healthcare-pe/ChaosGrid.tsx` mechanics |
| 4  | **The N×M Tax** (scroll-driven)                | New `EhrTangle.tsx` — clones `b2b-pe/TangleGrid.tsx` mechanics               |
| 5  | **Glow graphic: Compounding Curve**            | Bespoke `CompoundingCurve.tsx` (see §3.C)                                    |
| 6  | The Solution (stats)                           | Reuse `SectionBlock` pattern from `[slug]/page.tsx`                          |
| 7  | **Glow graphic: IP Library**                   | Bespoke `IpLibrary.tsx` (see §3.D)                                           |
| 8  | What Your Firm Keeps (bullets, solution)       | Reuse `SectionBlock` pattern                                                 |
| 9  | Download (email gate)                          | Reuse `MicrositeEmailGate`                                                   |
| 10 | Footer                                         | Reuse from `m/healthcare-pe/page.tsx`                                        |
| 11 | `StickyMobileCta`                              | Reuse from `shared/`                                                         |

Four animated visuals total: two scroll-driven entrance animations (warm-toned,
problem) and two glow graphics (dark-toned, solution / IP). The contrast
between warm-light Problem and dark-glow Solution creates the visual rhythm —
chaos warming to calm. Density is in line with `healthcare-pe`, which runs
PeHero → ChaosGrid → MeshDiagram → AccelerationRows → ReturnCards → MeaningBeat
→ DarkReveal → PeCta.

Sections 3 and 4 are clones of existing components, not from-scratch builds, so
the bespoke surface area stays at three components (hero + two glow graphics).

---

## 3. Visual Components

Two scroll-driven entrance animations on warm surfaces (Problem) and two
glow graphics on dark surfaces (Solution / IP). The two scroll animations are
clones of existing components; copy `ChaosGrid.tsx` and `TangleGrid.tsx` into
the new `healthcare-ma-alliance/` directory and replace the data constants
rather than abstracting either into a shared component. (Per the project rule
to not introduce abstractions beyond what the task requires.)

### A. Engagement Amnesia (clone of `healthcare-pe/ChaosGrid.tsx`)

Sits between the Hero and the N×M section. Five engagement cards stagger in
left-to-right; each shows the same field being rediscovered, then dims red as
the senior-time counter ticks up. A bracket spanning all five carries the
"Zero carryover" punch.

```
  ┌──────────────────────────────────────────────────────────────────────┐
  │  Badge: THE PROBLEM                                                  │
  │                                                                      │
  │  The same field. Mapped from scratch on every bolt-on.               │
  │                                                                      │
  │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐    │
  │  │ Engage. 1│ │ Engage. 2│ │ Engage. 3│ │ Engage. 4│ │ Engage. 5│    │
  │  │          │ │          │ │          │ │          │ │          │    │
  │  │ Encounter│ │ Encounter│ │ Encounter│ │ Encounter│ │ Encounter│    │
  │  │.PrimaryP.│ │.PrimaryP.│ │.PrimaryP.│ │.PrimaryP.│ │.PrimaryP.│    │
  │  │   6 wk   │ │   6 wk   │ │   6 wk   │ │   6 wk   │ │   6 wk   │    │
  │  │          │ │  rebuilt │ │  rebuilt │ │  rebuilt │ │  rebuilt │    │
  │  └──────────┘ └──────────┘ └──────────┘ └──────────┘ └──────────┘    │
  │   (red dim staggers in left-to-right with scroll progress)           │
  │                                                                      │
  │                       30 weeks of senior time                        │
  │                rebuilt across one platform's bolt-ons                │
  │                                                                      │
  │            ╭──────────────────────────────────────────╮              │
  │            │           "0 carryover"                  │              │
  │            ╰──────────────────────────────────────────╯              │
  │                                                                      │
  │     Five engagements. Five rediscoveries. Zero carryover.            │
  └──────────────────────────────────────────────────────────────────────┘
```

**Mechanics.** Identical to `ChaosGrid.tsx`:
- Phase 1 (progress 0–0.30): five cards stagger in.
- Phase 2 (0.25–0.55): cards dim red as the senior-time counter animates 0 → 30 weeks.
- Phase 3 (0.55–0.75): bracket with "0 carryover" spans all five.
- Phase 4 (0.75–0.90): closing line fades in.

**Build notes.** Copy `ChaosGrid.tsx` to
`components/microsites/healthcare-ma-alliance/EngagementAmnesia.tsx` and
swap:
- `DENIAL_CARDS` → `ENGAGEMENT_CARDS` with `{ engagement: 'Engagement N',
  field: 'Encounter.PrimaryPayer', subtext: i === 0 ? '6 wk discovery' :
  '6 wk, rebuilt' }`.
- Cost counter `$200K → $500K` → senior-time counter `0 → 30 weeks`. Tweak
  the formula in line 28 from `Math.round(200 + costAnim * 300)` to
  `Math.round(costAnim * 30)` and change the suffix.
- Bracket "?" glyph → "0 carryover" text.
- Closing line text.

The ChaosGrid color palette (warm surface, red dim) carries over unchanged.

### B. The N×M Tax (clone of `b2b-pe/TangleGrid.tsx`)

Sits between Engagement Amnesia and the Compounding Curve. Eight healthcare
EHR/PM nodes arranged in a circle; pairwise lines draw in gray and warm to
red as a connection counter ticks 0 → 28. The cost ticker is replaced with
the labor-percentage figure from the source design doc.

```
  ┌──────────────────────────────────────────────────────────────────────┐
  │  Badge: AND IT COMPOUNDS                                             │
  │                                                                      │
  │  Every new bolt-on adds an EHR. Every pair has to talk.              │
  │                                                                      │
  │                            ●  Epic                                   │
  │                       ╱     ╲     ╲                                  │
  │              Cerner ●────────────────● athenahealth                  │
  │                  ╱  ╲   ╳   ╳  ╳   ╱  ╲                              │
  │                ╱     ╲ ╳ ╳ ╳ ╳ ╳ ╱     ╲                             │
  │       AdvMD ●─────────●●●●●●●─────────● eClinicalWorks               │
  │                ╲     ╱ ╳ ╳ ╳ ╳ ╳ ╲     ╱                             │
  │                  ╲  ╱   ╳   ╳  ╳   ╲  ╱                              │
  │             Greenway ●────────────────● NextGen                      │
  │                       ╲     ╱     ╱                                  │
  │                            ●  MEDITECH                               │
  │                                                                      │
  │   (lines stagger in, gray → red as scroll progresses; counter ticks  │
  │    "0 connections" → "28 connections")                               │
  │                                                                      │
  │                              65–75%                                  │
  │                  of integration labor on pairwise mappings           │
  │                                                                      │
  │     Twenty-eight mappings. And every quarterly EHR upgrade           │
  │              silently breaks one of them.                            │
  └──────────────────────────────────────────────────────────────────────┘
```

**Mechanics.** Identical to `TangleGrid.tsx`:
- Phase 1 (0–0.30): eight nodes stagger in.
- Phase 2 (0.25–0.55): 28 pairwise lines draw, gray → red.
- Phase 3 (0.50–0.70): connection counter and labor-percentage ticker animate.
- Phase 4 (0.70–0.90): closer fades in.

**Build notes.** Copy `TangleGrid.tsx` to
`components/microsites/healthcare-ma-alliance/EhrTangle.tsx` and swap:
- `NODE_LABELS` (NetSuite, Salesforce, ...) → healthcare EHRs/PMs:
  `[{ name: 'Epic' }, { name: 'athenahealth' }, { name: 'eClinicalWorks' },
  { name: 'NextGen' }, { name: 'MEDITECH' }, { name: 'Greenway' },
  { name: 'AdvancedMD' }, { name: 'Cerner' }]`. Drop the `fmt` field — it's
  noisy and not relevant for EHRs (or replace with EHR category like 'EHR'
  /'PM'/'EHR/PM').
- Cost ticker `$400K → $800K/year in maintenance` → labor-percentage ticker
  `65% → 75%`, with caption "of integration labor on pairwise mappings". The
  counter math becomes `Math.round(65 + costAnim * 10)`.
- Heading and closing line text.

Node count stays at 8 → 28 pairwise connections, which matches the design
doc's "typical 10-practice MSO platform runs across 4 to 6 EHR systems plus
2 to 3 PM systems" (4 + 2 = 6 minimum, 6 + 3 = 9 maximum; 8 sits in the middle
and gives the visually-readable 28-line tangle).

### C. Compounding Curve

Both glow graphics (§3.C, §3.D) render on a dark surface (`bg-[#0F1115]` or
`bg-[#1A1D24]`) with a colored radial glow behind the focal element, mirroring
the `shared/DarkReveal.tsx` glow primitive (`glowColor` prop, `radial-gradient`
behind the content layer). Glow color is the brand red `#AC1F2D` at low alpha
(0.18 → 0.28 on scroll progress).

Full-width chart sitting between the N×M Tax and Solution sections. Two lines:
conventional integration flat at ~90 days, accelerator declining from 45 → 14
days across engagements 1 through 10. The accelerator line carries a glow that
intensifies as the curve flattens at the asymptote.

```
  ┌─────────────────────────────────────────────────────────────┐
  │                                                             │
  │  Days to integrated, reportable data                        │
  │                                                             │
  │  90 ●━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━●  │   ← Conventional
  │       (gray, no glow)                                       │
  │                                                             │
  │  45 ●╮                                                      │
  │      ╲                                                      │
  │       ╲                                                     │
  │        ╲╮                                                   │
  │         ╲                                                   │
  │  14      ╲●━━━●━━━●━━━●━━━●━━━●━━━●━━━●  ◀── glow halo     │
  │           (red, glow strengthens left-to-right)             │
  │                                                             │
  │     1   2   3   4   5   6   7   8   9   10  Bolt-on number │
  └─────────────────────────────────────────────────────────────┘

         "compounding margin"  ← italic annotation in red,
                                  arrow pointing into the gap
```

**Glow behavior.** A radial gradient sits behind the asymptote portion of the
red line (engagements 5 through 10). As the user scrolls into the section, the
glow's alpha ramps from 0 to ~0.28 over `useScrollProgress` 0.40–0.75. The
"compounding margin" annotation fades in at progress 0.75.

**Build notes.** Render the curves as inline SVG `<path>` with `stroke="#657EE2"`
for the accelerator and `stroke="#6A6A6A"` for conventional, matching the design
doc §G color semantics (Foundry blue, conventional gray). The glow is a
separate `<filter>` `<feGaussianBlur>` layer, or a CSS `filter: drop-shadow()`
on the SVG path. Curve math comes straight from the Python figure in
`design_docs/healthcare-pe-alliance-microsite.md` lines 354–369; transcribe the
ten `(x, y)` points directly into a constant array.

### D. IP Library

Sits between the Solution and "What Your Firm Keeps" sections. A central
glowing repository (the library) on the right; five engagement panels on the
left, each scroll-triggered to "deposit" three artifact tokens (Annotations,
Methodology, Canonical concepts) into the library. The library's glow
intensifies with each deposit.

```
                                              ┌─────────────────┐
   Engagement 1  ●━━━━━━━━━━━━━━━━━━━▶        │                 │
                  └ A  M  C ┘                  │                 │
                                              │   Your Firm's   │
   Engagement 2  ●━━━━━━━━━━━━━━━━▶           │     IP          │
                  └ A  M  C ┘                  │    Library      │
                                              │                 │
   Engagement 3  ●━━━━━━━━━━━━━▶              │   ◉ ◉ ◉ ◉ ◉    │  ← glow ring
                  └ A  M  C ┘                  │                 │     brightens
                                              │                 │     per deposit
   Engagement 4  ●━━━━━━━━━━▶                 │                 │
                  └ A  M  C ┘                  │                 │
                                              │                 │
   Engagement 5  ●━━━━━━━▶                    │                 │
                  └ A  M  C ┘                  └─────────────────┘
                                                       ▲
                                                       │
                                              red radial glow,
                                              alpha 0.10 → 0.32
                                              across scroll
```

**Token content (per engagement).** Each engagement deposits FEWER tokens than
the previous one (4 → 3 → 2 → 2 → 1), so the rows visually tell the
compounding story directly: less new work each engagement because the library
does more. Canonical concepts (Patient, Encounter, Claim, Provider, RVU, etc.)
get defined in engagement 1 alongside the foundation EHR mapping; subsequent
engagements add new source coverage and methodology refinement, not new
concept categories.

| Engagement | Tokens                                                                       | What's new                          |
|------------|------------------------------------------------------------------------------|--------------------------------------|
| 1          | `Epic mapping` · `Annotation v1` · `MSO playbook` · `Drift baseline` (4)     | Foundation: source + scaffolding     |
| 2          | `athena mapping` · `Annotation v2` · `Dental playbook` (3)                   | Second source, refined conventions   |
| 3          | `eCW mapping` · `Drift signatures` (2)                                       | New source, drift patterns captured  |
| 4          | `NextGen mapping` · `Reviewer corpus` (2)                                    | New source, training corpus accrues  |
| 5          | `MEDITECH mapping` (1)                                                       | New source; library handles the rest |

Total deposits at peak: 12 (was 15 with uniform 3 per row). Library card glow
factor adjusted to keep peak intensity comparable.

Caption beneath the rows: *"Each engagement deposits less new work because
your library does more. Mappings, annotations, methodology, and drift
signatures compound across every deal."*

**Glow behavior.** The library card sits on a dark surface with a `radial-gradient`
behind it. Library glow alpha = `0.10 + 0.045 * deposits_landed`. Each
engagement row stagger-fades its tokens into the library on scroll progress
windows of 0.10 (engagement 1) → 0.65 (engagement 5).

**Build notes.** Five horizontal rows on the left, one card on the right. Token
"flight" can be a CSS transform animation triggered by `useScrollProgress`
crossing per-engagement thresholds, or a simpler approach: tokens fade in on
the engagement row, then a thin connecting line draws toward the library and a
counter on the library increments. The simpler approach is preferred — three
tokens per row × five rows is enough movement; explicit "flight paths" risk
looking busy.

---

## 4. Implementation

### 4.1 `lib/microsites.ts`

Append a new `MicrositeConfig` after the `healthcare-state-rhtp` entry:

```ts
{
  slug: 'healthcare-ma-alliance',
  title: 'MTN | Compounding IP for Healthcare M&A',
  metaDescription:
    'Turn integration labor into compounding firm IP. A productized accelerator for healthcare M&A practices integrating PE-backed bolt-ons.',
  headline: 'Turn Integration Labor into Compounding IP',
  heroStat: '6\u20138 wk \u2192 1\u20132 wk',
  heroStatCaption:
    'Schema discovery and mapping during the pilot engagement. Your firm\u2019s methodology and conventions deposit into a library that compounds across every engagement after.',
  subheadline:
    'A productized accelerator for healthcare M&A integration. AI-assisted mapping operates on schema metadata only; patient and financial data values stay in your client\u2019s environment.',
  papers: [
    {
      title: 'Compounding IP for Healthcare M&A — Executive Briefing',
      subtitle: 'For M&A practice leaders, engagement partners, and integration architects',
      filePath: '/papers/mtn-wp-005-exec.pdf',
      fileSize: '3.8 MB',
    },
  ],
  formspreeId: 'xaqbaljo',
  ctaLabel: 'Download the Briefing',
  theme: {
    primaryColor: '#AC1F2D',
    primaryColorHover: '#8B1924',
    heroGradientColor: '#F5E0E2',
  },
  sections: [],          // bespoke page renders content directly
  utmCampaign: 'healthcare-ma-alliance-wp',
  brandTagline: 'A productized accelerator for healthcare M&A integration.',
},
```

`sections: []` because the bespoke page renders the bullets/stats blocks
directly rather than going through the `SectionBlock` map.

### 4.2 `app/(microsites)/m/[slug]/page.tsx`

Add `'healthcare-ma-alliance'` to the `generateStaticParams` exclusion list
(lines 26–31) so the dynamic catch-all does not also try to render it
alongside the bespoke page.

### 4.3 New files

```
app/(microsites)/m/healthcare-ma-alliance/page.tsx
components/microsites/healthcare-ma-alliance/MaaHero.tsx
components/microsites/healthcare-ma-alliance/EngagementAmnesia.tsx   ← clone of healthcare-pe/ChaosGrid.tsx
components/microsites/healthcare-ma-alliance/EhrTangle.tsx           ← clone of b2b-pe/TangleGrid.tsx
components/microsites/healthcare-ma-alliance/CompoundingCurve.tsx
components/microsites/healthcare-ma-alliance/IpLibrary.tsx
```

`MaaHero.tsx` mirrors the dynamic-template hero (gradient wash, EKG path,
center-aligned headline + hero stat card + subheadline + CTA) but rendered as
a server component so it stays cheap. `EngagementAmnesia` and `EhrTangle` are
direct copies of `ChaosGrid` and `TangleGrid` with data constants and copy
swapped per §3.A and §3.B. The two glow components are `'use client'` because
they use `useScrollProgress`; `EngagementAmnesia` and `EhrTangle` carry the
`'use client'` directive over from their source files.

### 4.4 Validation

- `npm run lint`
- `npm run build` — verify the new route lands at `out/m/healthcare-ma-alliance/`
- Manual: load `localhost:3000/m/healthcare-ma-alliance`, confirm hero, scroll
  through both Problem visuals (Engagement Amnesia → N×M Tax) and both glow
  graphics (Compounding Curve → IP Library), submit the email gate, verify the
  PDF downloads.

---

## 5. Claim Discipline (carried forward from source design doc §G)

These are non-negotiable on this page:

- **No em dashes.** Use commas, semicolons, parentheses, or sentence breaks.
- **"Your firm's" pronoun.** Singular, not "your firms'". Hold the "your"
  perspective throughout.
- **Schema-and-concept boundary.** AI-assisted mapping operates on schema
  metadata only. Avoid any phrasing that implies the platform touches patient
  or financial data values ("format normalization," "ICD-9-to-ICD-10
  crosswalks applied," "clean the values").
- **Defensible numbers only.** `6–8 wk → 1–2 wk` is the design doc's
  explicitly-defensible benchmark. The `90 → 14 days` projection lives only in
  the compounding-curve graphic and is captioned as a curve, not a measured
  outcome.
- **IP-ownership statement is mandatory.** It lands in §6 of the page (the
  "What Your Firm Keeps" annotation). No visitor leaves the site without
  seeing it.
- **Founding-Partner framing stays in the briefing, not on the page.** The
  page reads as a category landing; the design-partner ask is the briefing's
  job.

## 6. Boutique-vs-Big-4 Calibration Notes

- **Headline frames value as IP capture, not "competing with Big 4."** Boutiques
  hear *"your firm's IP, encoded"* as their differentiator; Big 4 readers hear
  it as a generic accelerator pitch. Neither audience is alienated.
- **Wedge / quadrant framing from the source doc §F is deliberately omitted.**
  Naming Big 4 in-house accelerators in the lower-left would burn Wave 2 firms
  that we want to convert later.
- **"Productized accelerator"** is the platform-anchored services pattern
  (Deloitte CareConnect on MuleSoft, KPMG Powered on Workday). It is
  category-neutral language that works at any firm size.
- **No size-coded language.** Avoid "boutique," "challenger," "alternative to
  the Big 4," or "for firms that punch above their weight." All of these read
  as positioning against Big 4 even when the boutique reader hears them as
  flattering.
