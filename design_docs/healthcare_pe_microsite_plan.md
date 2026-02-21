# Healthcare PE Microsite — Implementation Plan

## Context

The CMS interop microsite (`/m/cms-interop`) has a polished, scroll-animated design. The healthcare-pe microsite (`/m/healthcare-pe`) currently uses a generic template with no custom components. This plan builds a custom healthcare-pe microsite with the same visual quality, adapting the narrative from the video2 story arc and white paper material, following "sell like Jobs" messaging principles.

---

## Narrative Arc

| # | Section | Narrative beat | Jobs principle |
|---|---------|---------------|----------------|
| 1 | **PeHero** | "Five clinics. Five systems. No answers." | Succinct headline — felt problem |
| 2 | **ChaosGrid** | Five denial encodings, zero consolidated reporting | Show don't tell — make the chaos visible |
| 3 | **MeshDiagram** | Every acquisition multiplies connections quadratically | Contextualize a number (45 vs 10) |
| 4 | **AccelerationRows** | Three things get faster: timeline, team, maintenance | Rule of Three |
| 5 | **ReturnCards** | $208K/clinic → $2.08M portfolio → $24M exit value | Build to the big number |
| 6 | **MeaningBeat** | This isn't a spreadsheet problem — it's care arriving on time | The "meaning" moment |
| 7 | **DarkReveal** | 20–30% of your hold period, burned | Dramatic reveal / "one more thing" |
| 8 | **PeCta** | "Bring us your messiest portfolio." | Clear CTA, infectious confidence |

---

## Files to Create

### Page route
- `app/(microsites)/m/healthcare-pe/page.tsx` — compose all sections (model on cms-interop/page.tsx)

### Components (`components/microsites/healthcare-pe/`)
| Component | Animation complexity | Closest CMS equivalent |
|-----------|---------------------|----------------------|
| `useScrollProgress.ts` | — | Copy from cms-interop (identical) |
| `PeHero.tsx` | None (static) | CmsHero |
| `ChaosGrid.tsx` | High — 5 staggered cards, red sweep, cost counter | BudgetBar |
| `MeshDiagram.tsx` | High — SVG mesh → hub transition | FoundryDiagram |
| `AccelerationRows.tsx` | Medium — 3 animated cards (bar compression, icon reduction, line chart) | TransformationRows |
| `ReturnCards.tsx` | Low — 3 staggered fade-in cards | RevenueCards |
| `MeaningBeat.tsx` | Low — sequential text fade | MeaningBeat |
| `DarkReveal.tsx` | Low — sequential text reveal on dark bg | OneMoreThing |
| `PeCta.tsx` | None (static) | CmsCta |
| `StickyMobileCta.tsx` | None | Copy from cms-interop, change label/href |

## Files to Modify

- `app/(microsites)/m/[slug]/page.tsx` — add `'healthcare-pe'` to the exclusion filter in `generateStaticParams`
- `lib/microsites.ts` — update `healthcare-pe` paper file sizes to match actual PDFs (currently says 2.4MB/3.1MB, actuals are 3.3MB/3.8MB)

---

## Section Details

### 1. PeHero — Static hero
- **Background:** `linear-gradient(160deg, #F5E0E2 0%, #FDFBFC 40%, #F7F7FB 100%)`
- **Headline:** `Five clinics. Five systems. No answers.`
- **Stat card:** `$200K–$500K/mo` / "leaking from your portfolio while systems don't talk"
- **Body:** "Every add-on acquisition makes the data problem worse. We make it disappear."
- **CTA:** "See how" → `#architecture`
- **Label:** `73% of PE deals are add-ons · integration is the bottleneck`
- Decorative EKG SVG background (same as CMS hero)

### 2. ChaosGrid — "The Babel Problem"
- **Background:** `var(--ms-surface-warm)`
- **Badge:** `The problem` (crimson)
- **Heading:** `Your CFO asked for a denial report. This is what came back.`
- **Animation (startVh: 0.50, endVh: -0.30):**
  - Phase 1 (0–0.30): Five cards stagger in, each showing a different denial encoding:
    - Clinic A: CARC code `CO-4`
    - Clinic B: Free text `"Patient not eligible per plan"`
    - Clinic C: Numeric `412`
    - Clinic D: Note `"See attached EOB"`
    - Clinic E: Binary `DENIED`
  - Phase 2 (0.25–0.55): Cards dim red, cost counter animates $200K → $500K/mo
  - Phase 3 (0.55–0.75): Bracket spans all cards with "?" label
  - Phase 4 (0.75–0.90): Closing line fades in
- **Closing:** "Same denial. Five translations. Zero clarity."

### 3. MeshDiagram — "Every Addition Makes It Worse"
- **Background:** `white`
- **Badge:** `The math` (blue)
- **Heading:** `Every acquisition multiplies the mess.`
- **Animation (startVh: 0.45, endVh: -0.35):**
  - Phase 1 (0–0.35): 5 nodes appear, pairwise lines draw (10 connections). Counter: "10 connections"
  - Phase 2 (0.25–0.55): Grows to 10 nodes, 45 connections. Lines turn red/warm. Counter: "45 connections"
  - Phase 3 (0.50–0.75): Mesh fades. Central "Concept Layer" node appears. 10 clean radial lines. Counter: "10 connections"
  - Phase 4 (0.75–0.95): Takeaway fades in
- **Takeaway:** "Clinic fifty doesn't touch clinics one through forty-nine."
- SVG-based with circles for nodes, lines for connections

### 4. AccelerationRows — Rule of Three
- **Background:** `var(--ms-surface)`
- **Badge:** `What changes` (blue)
- **Heading:** `Three things get faster. Permanently.`
- Three white cards, staggered scroll entry (same pattern as TransformationRows)

**Row 1 — Timeline Compression (progress 0–0.50):**
- Horizontal bar "36 months" compresses to "3 weeks", color shifts gray → blue, bounce at end
- Label: "Weeks, not years."
- Stat: "Per acquisition. Every time."

**Row 2 — Team Compression (progress 0.30–0.68):**
- Grid of 20 person icons → 15 fade out, 5 remain and turn blue
- Label: "A handful, not a department."
- Stat: "3–5 people instead of 15–25. Same output."

**Row 3 — Flat Maintenance (progress 0.50–1.0):**
- Two SVG lines: conventional curves up (quadratic, turns red), Foundry stays flat (blue)
- Label: "Costs don't compound."
- Stat: "<1 hr/week at 200+ connections"

### 5. ReturnCards — The Money Slide
- **Background:** `linear-gradient(180deg, white, var(--ms-surface-warm))`
- **Badge:** `The returns` (crimson)
- **Heading:** `What faster integration does to your fund math.`
- Three cards, staggered fade-in (same pattern as CMS RevenueCards)

| Card | Label | Stat | Detail |
|------|-------|------|--------|
| 1 | Per-Clinic Uplift | $208K | additional EBITDA per clinic, per year |
| 2 | 10-Clinic Portfolio | $2.08M | year-one EBITDA improvement across the platform |
| 3 | Enterprise Value | $24M | at a 12x exit multiple — the spread between "met plan" and "exceeded plan" |

### 6. MeaningBeat — The Emotional Pivot
- **Background:** `white`
- **Badge:** `Why it matters` (blue)
- **Heading:** `This isn't a spreadsheet problem.`
- **Body (fade sequence):** "Every month your systems don't talk, a clinician somewhere is making a decision without the full picture. A referral loops. A prior auth stalls. A patient waits."
- **Closer (bold):** "Faster integration isn't operational efficiency. It's care that arrives on time."

### 7. DarkReveal — "One More Thing"
- **Background:** `var(--ms-dark-bg)` with warm radial glow
- Sequential reveal (startVh: 0.50, endVh: -0.20):
  - Small-caps: "One more thing"
  - Setup: "A five-year hold that loses twelve to eighteen months to integration..."
  - Reveal (font-display, large): "...is really a three-and-a-half-year hold."
  - Punchline (#F06070, bold): "You don't get those months back."

### 8. PeCta — The Close
- **Background:** `white`
- **Heading:** `Bring us your messiest portfolio.`
- **Body:** "Your systems. Your clinics. We'll show you what the Foundry sees in two weeks."
- **Primary CTA:** "Request an assessment" → `mailto:warren@themtn.ai?subject=Healthcare%20PE%20Assessment`
- **Secondary CTA:** "Download the white papers" → `#download`

---

## Implementation Order

1. Copy `useScrollProgress.ts` to `components/microsites/healthcare-pe/`
2. Build static components first: `PeHero`, `PeCta`, `MeaningBeat`, `DarkReveal`, `StickyMobileCta`
3. Build simple animated: `ReturnCards`
4. Build medium animated: `AccelerationRows`
5. Build complex animated: `ChaosGrid`, `MeshDiagram`
6. Create `page.tsx` composing all sections
7. Update `[slug]/page.tsx` exclusion filter
8. Update `lib/microsites.ts` paper file sizes

## Verification

1. Run `npx next dev -p 3003` and visit `/m/healthcare-pe`
2. Hard-refresh (Cmd+Shift+R) after each animation component change
3. Scroll through entire page — verify all animations trigger when content is visible
4. Test mobile viewport — verify sticky CTA, responsive grids, readable text
5. Test email gate — submit form, verify papers download
6. Verify `/m/healthcare-pe` no longer renders from the generic `[slug]` template
7. Verify `/m/b2b-pe` still works (unaffected by changes)
