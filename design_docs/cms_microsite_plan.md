# CMS Interoperability Microsite — Build Plan

## Overview

Build a custom CMS interoperability microsite that follows the narrative arc of the CMS video (video1), translating its 4-scene story structure into a scroll-driven web experience. The microsite uses copy and evidence from the two CMS white papers (Executive and Technical editions) but follows the video's tone, pacing, and visual language — not the white papers' document structure.

The video's emotional arc drives the page:

1. **Recognition** — You have a maintenance problem, not a connectivity problem
2. **Understanding** — There is a structural solution: one adaptive layer
3. **Relief** — Your operating reality changes: things stop breaking
4. **Action** — Here's the next step

---

## Architecture Decision: Custom Page

The existing microsite system is config-driven (`lib/microsites.ts`) with generic section types (`bullets`, `stats`, `before-after`). The CMS microsite needs visual components that don't fit those types:

- An animated horizontal budget bar with animated counter
- A 3-box architecture diagram with data-flow visualization
- Three visual transformation rows (timeline compression, self-healing line, audit trail)

**Approach:** Create a dedicated page at `app/(microsites)/m/cms-interop/page.tsx`. In Next.js App Router, this static route takes precedence over the dynamic `[slug]` route. We still use:

- `lib/microsites.ts` config for papers, formspreeId, metadata
- `MicrositeThemeWrapper` for CSS variable injection
- `MicrositeEmailGate` for the email-gated download section

This avoids bloating the generic microsite system with CMS-specific section types while reusing all shared infrastructure.

---

## Theme & Color Palette

Switch the CMS microsite from teal (#2E7D6F) to the brand red (#AC1F2D) to match the video and white papers. The video's full palette:

| Role | Hex | Web Usage |
|---|---|---|
| Brand red (primary) | `#AC1F2D` | Primary accent, CTA buttons, urgency states, budget bar "maintain" segment |
| Blue accent | `#657EE2` | Output/success states, "after" states, audit trail, compressed timeline |
| Dark text | `#4D4D4D` | Primary body text |
| Mid gray | `#7D7D7D` | Secondary text, captions |
| Light gray | `#B4B1B1` | Borders, "before" states, build segment |
| Alert red | `#EF5350` | Error/break state in self-healing animation |
| Success green | `#4CAF50` | Audit checkmarks, healed connection |
| Surface | `#FAFAFA` | Box backgrounds |

The existing `healthcare-pe` microsite also uses `#AC1F2D`. This is fine — different audiences (PE operating partners vs. payer executives), different URLs, different content. The brand color is the brand color.

---

## Section-by-Section Design

### Section 0: Hero

**Maps to:** Video Scene 1 opening + white paper positioning

**Headline:** "Nobody's talking about what happens six months later."

**Subtext:** Your plan spent 18 months building CMS-mandated APIs. The data is flowing. But your quality team still can't compute Star measures without chart chase. Your risk adjustment team is finding diagnoses don't survive normalization. Your PA auto-adjudication rates are in single digits. The APIs are live. The data is not usable.

**Hero stat (floating card):** `57%` / "of your integration budget — spent after go-live"

**Bottom badge:** CMS-0057-F · January 2027

**CTA button:** "See how it works" (scrolls to architecture section)

**Design notes:**
- White background with subtle gradient wash
- The 57% stat is the single most provocative number from the video — it anchors the hero
- Tone matches the video's opening: direct, slightly confrontational, peer-to-peer
- No jargon. No "AI-powered." Just the problem stated plainly.

---

### Section 1: The Problem — Budget Bar

**Maps to:** Video Scene 1 (BudgetBar component)

**Section label badge:** "THE PROBLEM"

**Heading:** "More than half of your budget is spent maintaining what you already built."

**Visual:** Horizontal budget bar that animates on scroll:
- Left segment (gray #B4B1B1): "Build" = 43%
- Right segment (red #AC1F2D): "Maintain" = 57%
- The maintain segment overflows the bar boundary, visually showing uncontrolled cost growth
- Animated counter ticks up to 57%
- Vertical divider labeled "Go-live" separates the two segments

**Supporting copy (below bar):**

> The $1.55 billion CMS is requiring the industry to spend builds the connectivity. It does not build the capability. Standards do not guarantee meaning. Only 59% of SNOMED CT concepts map directly to ICD-11 equivalents. Patient match rates between organizations can be as low as 50%.

> Every month of delay between compliance and capability is a month of Star data you cannot compute, risk adjustment revenue you cannot capture, and PA transactions stuck in manual queues.

**Supporting stat row (3-up, compact):**
- `$1.55B` — industry compliance cost over 10 years
- `6.9M hours` — first-year burden
- `Jan 2027` — API compliance deadline

**Design notes:**
- The budget bar is the hero visual of this section — it tells the story before any text is read
- Animate on scroll entry using Intersection Observer
- The "overflow" effect (maintain bar extending past container) is the visual metaphor for compounding maintenance
- Keep copy minimal — the bar does the work

---

### Section 2: The Architecture — Data Foundry Diagram

**Maps to:** Video Scene 2 (FoundryDiagram + DataFlowParticles)

**Section label badge:** "THE ARCHITECTURE"

**Heading:** "One layer between your sources and your systems."

**Visual:** 3-box horizontal diagram:

```
[  Clinics & Sources  ] ——→ [  MTN Data Foundry  ] ——→ [  Your Systems  ]
   EHRs, Claims,              Auto-detects format       RAF Engine
   Prior Auth, P2P,            Maps to shared layer      Stars Measures
   TEFCA/QHINs                 Routes uncertainty        PA Auto-Adjudication
                               to human review           Analytics
```

Left box: Contains scattered multi-colored dots (representing varied data formats) with source type labels
Center box: Red accent border, contains confidence indicators ("98% ✓" and "62% ⚑")
Right box: Contains uniform blue dots (representing standardized output)

Arrows between boxes show data flow. On the left arrow, dots are varied colors/sizes. On the right arrow, dots are uniform blue. This is the video's core visual metaphor: chaotic input → ordered output.

**Copy blocks (staggered below diagram, keyed to diagram phases):**

1. "When a new clinic connects, the Foundry detects how they send data. No upfront definitions. No months of mapping."

2. "It translates everything into a consistent layer your systems already understand. When it's confident, it applies the mapping automatically. When it's not sure, it routes it to a human."

3. "Adding provider connection two hundred does not require touching connections one through one hundred ninety-nine."

**Design notes:**
- The diagram is the centerpiece. It should be large, well-spaced, and immediately readable.
- On mobile, stack the three boxes vertically with downward arrows.
- The data flow dots can be a subtle CSS animation (color shift on the arrow path) or a static SVG with colored dots — we don't need full particle streaming like the video. The concept communicates clearly with static dots that change color.
- The confidence badges ("98% ✓" / "62% ⚑") communicate that this is not a black box — it knows what it knows and what it doesn't.

---

### Section 3: What Changes — Three Transformation Rows

**Maps to:** Video Scene 3 (TimelineCompress, SelfHealingLine, AuditTrail)

**Section label badge:** "WHAT CHANGES"

**Heading:** "Here's what actually changes."

Three horizontal rows, each with a before → after visual:

**Row 1: Speed**
- Visual: Horizontal bar labeled "Mo 1 — Mo 6" (gray, wide) that compresses on scroll to "D 1 — D 5" (blue, narrow)
- Label: "New clinics come online in days, not months."
- Subtext: "No custom development per source. No six-month onboarding project every time a provider network shifts."

**Row 2: Reliability**
- Visual: Two nodes connected by a line. The line breaks (red flash), then heals itself (blue, nodes pulse green).
- Label: "Existing connections stop breaking."
- Subtext: "When a source system updates — and they always update — the Foundry catches it and adapts. No ticket. No dev sprint."

**Row 3: Auditability**
- Visual: Seven log entry bars that slide in from left, each followed by a green checkmark.
- Label: "Your compliance posture is continuous, not periodic."
- Subtext: "Every mapping decision is logged, scored, and auditable. Not because you prepared for an audit — because that's how the system works."

**Design notes:**
- Each row animates on scroll entry
- Rows are separated by subtle horizontal rules
- The visuals are simple SVG/CSS animations — the same concepts as the video but adapted for scroll interaction rather than timed playback
- The copy is taken nearly verbatim from the video voiceover — it's already excellent

---

### Section 4: The Revenue Case

**Maps to:** White paper content (not directly in video, but essential for conversion)

**Section label badge:** "THE REVENUE CASE"

**Heading:** "Four revenue pools. One capability gap."

Four cards in a 2×2 grid:

**Card 1: Star Ratings**
- Stat: `~5 percentage points`
- Detail: "rebate increase from 3.5 → 4 stars — worth hundreds of millions annually for large plans"
- Subtext: "Most Star measure failures are not clinical. They are data availability failures."

**Card 2: Risk Adjustment**
- Stat: `Millions in PMPM`
- Detail: "revenue from accurate RAF capture across MA populations"
- Subtext: "A diagnosis that fails to map is revenue that silently disappears."

**Card 3: Prior Authorization**
- Stat: `$3.52 → $0.05`
- Detail: "per transaction — manual vs. electronic"
- Subtext: "CMS built the highway. The question is whether your data is clean enough for auto-adjudication."

**Card 4: Membership Retention**
- Stat: `1 point of churn`
- Detail: "preserved = tens to hundreds of millions in annual premium revenue"
- Subtext: "Better payer-to-payer exchange eliminates the blind spot for new members."

**Design notes:**
- Cards use the same stat-card pattern as existing microsites (familiar component) but with the CMS-specific data
- Red accent for the "pain" framing, blue accent for the "opportunity" numbers
- This section bridges the video's brevity with the white papers' evidence base

---

### Section 5: The Proof

**Section label badge:** "THE PROOF"

**Heading:** "Benchmarked across the structural diversity found in payer networks."

**Performance metrics row (horizontal, 4-up):**
- `99.0%` — Mapping accuracy
- `$3.30` — Per field mapping cost
- `<1 hr/week` — Maintenance at 200+ connections
- `5–15 min` — Per integration review

**Supporting context:**
> "Evaluated across 60 format variants spanning flat files, nested hierarchies, entity-attribute-value structures, columnar batches, pipe-delimited feeds, and wide sparse-column layouts — the structural diversity found in real payer networks."

**Maintenance comparison (compact):**
- At 50 integrations: "Conventional requires a dedicated engineering team. Data Foundry requires one part-time reviewer."
- At 200 integrations: "Conventional demands 5–10 dedicated engineers. Data Foundry's review burden remains under one hour per week."

---

### Section 6: CTA + Email Gate

**Maps to:** Video Scene 4 (The Close)

**Heading:** "We'd love to show you how it works."

**Subtext:** "Twenty minutes. Your stack, your sources."

**Two CTAs:**
1. **Primary:** "Schedule a walkthrough" — links to contact/calendar
2. **Secondary:** "Download the white papers" — scrolls to email gate below

**Email gate:** Uses existing `MicrositeEmailGate` component with two papers:
- Compliance to Capability — Executive Edition (for payer executives and compliance leaders)
- Compliance to Capability — Technical Edition (for health IT architects and interoperability teams)

**Contact info:**
- Warren Pettine, MD · CEO
- warren@themtn.ai
- themtn.ai

---

## Animation Strategy: Scroll-Linked

**Scroll-linked, not scroll-triggered.** Animations are continuously driven by scroll position, not just "play once when visible." This gives the user direct control — scroll forward to advance the animation, scroll back to reverse it. It feels like scrubbing through the video.

**Technology:** CSS Scroll-Driven Animations API (`animation-timeline: view()`) with an Intersection Observer fallback for older browsers. No JS animation libraries needed.

**How it works:**
- Each animated section uses `animation-timeline: view()` to bind its CSS `@keyframes` to scroll position within the viewport.
- `animation-range` controls when the animation starts and ends relative to the element's visibility (e.g., `entry 0% cover 50%` = animation plays from element entering viewport to element covering 50% of viewport).
- For browsers that don't support Scroll-Driven Animations (Safari <18, older browsers), we fall back to Intersection Observer that applies a `.in-view` class, triggering a one-shot CSS transition. Progressive enhancement — scroll-linked where supported, fade-in-on-enter elsewhere.

**Scroll-linked animations by section:**

1. **Budget bar fill** — Bar width and counter are driven by scroll position through the section. As user scrolls, the build segment fills first, then the maintain segment grows and overflows. The 57% counter ticks up proportionally to scroll. Scrolling back reverses it.

2. **Budget bar overflow** — Continuous: the maintain segment keeps growing past the container edge as the user scrolls deeper into the section. Feels like the costs keep growing the longer you look.

3. **Diagram entry** — Three boxes and arrows animate in sequence as the user scrolls: Foundry box first (scale up), then Clinics box (slide from left), arrows draw, then Your Systems box (slide from right). Scroll position controls each phase.

4. **Data flow dots** — Dots on the left arrow are static multi-color. Dots on the right arrow are static uniform blue. As user scrolls through the section, a subtle `translateX` animation slides dots along the arrows, creating a continuous flow effect tied to scroll speed.

5. **Timeline compression** — The "6 months" bar continuously compresses to "5 days" as the user scrolls. Width interpolates between 100% and ~20% based on scroll position. Labels crossfade proportionally.

6. **Self-healing line** — Three-phase sequence driven by scroll: line intact → line breaks (gap opens) → line heals (gap closes, color shifts to blue). Each phase maps to a scroll range within the section.

7. **Audit trail bars** — Bars slide in from left with staggered timing as user scrolls through the section. Checkmarks appear after each bar arrives. Scroll back = bars retract.

8. **Section content fade-in** — Text blocks and cards use `animation-timeline: view()` with a simple opacity + translateY animation. Everything feels connected to the user's scroll.

**Fallback strategy:**
```css
/* Modern browsers: scroll-linked */
@supports (animation-timeline: view()) {
  .budget-bar-fill {
    animation: fill-bar linear both;
    animation-timeline: view();
    animation-range: entry 0% cover 40%;
  }
}

/* Fallback: transition on .in-view class (added by Intersection Observer) */
@supports not (animation-timeline: view()) {
  .budget-bar-fill {
    transition: width 1s ease-out;
    width: 0%;
  }
  .budget-bar-fill.in-view {
    width: 57%;
  }
}
```

**`prefers-reduced-motion`:** All animations are disabled when the user has requested reduced motion. Static final states are shown immediately.

---

## File Plan

### New Files

```
app/(microsites)/m/cms-interop/
  page.tsx                              — Custom CMS microsite page (server component shell)
  cms-interop.css                       — Scroll-linked @keyframes, animation-timeline rules, fallbacks

components/microsites/cms-interop/
  CmsHero.tsx                           — Hero section with 57% stat card
  BudgetBar.tsx                         — Scroll-linked budget bar (client component)
  FoundryDiagram.tsx                    — Scroll-linked 3-box diagram (client component)
  TransformationRows.tsx                — Scroll-linked transformation demos (client component)
  RevenueCards.tsx                      — Four revenue pool cards (server component)
  ProofMetrics.tsx                      — Benchmark stats + maintenance comparison (server component)
  CmsCta.tsx                            — CTA section with dual actions
  StickyMobileCta.tsx                   — Sticky bottom CTA bar (client component)
  useScrollFallback.ts                  — Intersection Observer hook for browsers without scroll-timeline support
```

### Modified Files

```
lib/microsites.ts                       — Update cms-interop theme to #AC1F2D, update config
```

### No Changes Needed

```
app/(microsites)/m/[slug]/page.tsx      — Still handles healthcare-pe, b2b-pe
app/(microsites)/m/layout.tsx           — Minimal layout, works for custom page too
components/microsites/MicrositeThemeWrapper.tsx  — Reused as-is
components/microsites/MicrositeEmailGate.tsx     — Reused as-is
components/forms/EmailCaptureForm.tsx    — Reused as-is
```

---

## Page Component Structure

```tsx
// app/(microsites)/m/cms-interop/page.tsx

<MicrositeThemeWrapper theme={config.theme}>
  <Header />                            {/* Minimal logo-only header */}
  <CmsHero />                           {/* Hero + 57% stat */}
  <BudgetBarSection />                   {/* Section 1: The Problem */}
  <FoundryDiagramSection />              {/* Section 2: The Architecture */}
  <TransformationRowsSection />          {/* Section 3: What Changes */}
  <RevenueCardsSection />                {/* Section 4: The Revenue Case */}
  <ProofMetricsSection />                {/* Section 5: The Proof */}
  <CmsCtaSection />                      {/* Section 6: CTA */}
  <EmailGateSection />                   {/* Email-gated downloads */}
  <Footer />                            {/* Minimal footer */}
</MicrositeThemeWrapper>
```

---

## Copy Source Mapping

| Section | Primary Copy Source | Tone |
|---|---|---|
| Hero | Video Scene 1 opening + white paper exec summary | Provocative, direct |
| Budget Bar | Video Scene 1 voiceover + white paper "Compliance Trap" | Data-driven alarm |
| Architecture | Video Scene 2 voiceover verbatim | Explanatory, calm |
| What Changes | Video Scene 3 voiceover verbatim | Relief, tangible |
| Revenue Case | White paper "Four Revenue Pools" sections | Evidence-based |
| Proof | White paper "Performance Results" + benchmarks | Technical confidence |
| CTA | Video Scene 4 voiceover | Unhurried, confident |

**Language rules (from video design doc):**
- Never say "AI"
- Describe behavior, not mechanisms: "catches it and adapts" not "auto-remaps the schema"
- Plain vivid words: "breaks," "catches," "heals"
- Avoid: "AI-powered," "intelligent," "machine learning," "autonomous," "canonical ontology," "schema drift," "ETL pipeline," "middleware"

---

## Mobile-First Design

**Design for the phone first, then scale up.** Most payer executives will receive this link on their phone (email, LinkedIn message, text). The page must feel native-quality on a 375px screen.

### Layout Principles (Mobile)

- **Single column throughout.** No side-by-side layouts below 768px.
- **Full-bleed sections.** Sections use full viewport width. Content containers have 20px horizontal padding.
- **Large touch targets.** CTA buttons minimum 48px tall, full-width on mobile.
- **Generous vertical spacing.** Sections separated by 48–64px. No cramming.
- **Text sizing.** Body: 16px minimum (prevents iOS zoom). Headlines: clamp() fluid scaling.

### Section-by-Section Mobile Layout

**Hero:**
- Headline: 28px, bold, left-aligned (not centered — left-aligned text reads faster on narrow screens)
- Stat card: Full-width, centered, prominent
- Subtext: 16px, max 3–4 lines visible without scroll
- CTA: Full-width button, sticky consideration (see below)

**Budget Bar (Section 1):**
- Bar is full-width (minus padding). Still horizontal — the proportional comparison is the point.
- Counter (57%) displayed large above the bar: 48px font, red
- "Build" and "Maintain" labels below bar, not inside it (no room inside at 335px)
- Supporting stats: single column stack, one per row
- The overflow animation still works — the bar extends past the right padding, creating visual tension

**Foundry Diagram (Section 2):**
- **Vertical stack.** Three boxes stacked top-to-bottom: Clinics → Foundry → Your Systems
- Downward arrows between boxes (not horizontal)
- Each box is full-width, ~160px tall
- Data flow dots animate vertically along the arrows
- Foundry box gets a subtle pulse or glow to draw attention as the anchor
- Confidence badges ("98% ✓" / "62% ⚑") displayed prominently inside Foundry box
- Copy blocks interleaved between boxes (not below the full diagram)

**Transformation Rows (Section 3):**
- Each row is a self-contained card (full-width, rounded corners, subtle border)
- Visual animation centered in the card, ~120px tall
- Label and subtext below the visual
- Cards separated by 16px gaps
- Timeline compression: bar runs full-width of the card
- Self-healing line: centered in card, nodes 24px circles
- Audit trail: bars are proportional to card width

**Revenue Cards (Section 4):**
- Single column stack. One card per row, full-width.
- Stat is large (32px), detail text below, subtext in lighter weight
- Top red accent border on each card (consistent with existing microsite stat cards)

**Proof Metrics (Section 5):**
- 2×2 grid on mobile (metrics are compact enough)
- Or: horizontal scroll row if we want all 4 visible without scrolling

**CTA + Email Gate (Section 6):**
- "Schedule a walkthrough" — full-width primary button
- "Download the white papers" — full-width secondary button
- Email form: single input + submit button, stacked vertically
- Contact info: centered, comfortable spacing

### Sticky Mobile CTA

Consider a sticky CTA bar at the bottom of the screen (below the fold) that appears after the user scrolls past the hero. Shows "See how it works ↓" initially, then switches to "Schedule a walkthrough" after they've scrolled through the full page. Disappears when the footer/email-gate is visible (so it doesn't overlap the form).

Implementation: fixed position bar, visibility controlled by Intersection Observer on hero and footer elements. 48px tall, full-width, semi-transparent backdrop-blur background.

### Tablet (768px–1024px)

- Foundry diagram: horizontal 3-box layout returns (enough width)
- Revenue cards: 2×2 grid
- Transformation rows: can show label + visual side by side
- Budget bar: same as mobile but wider, labels can go inside bar

### Desktop (1024px+)

- Max content width: 960px centered (matching existing `max-w-3xl` pattern)
- Foundry diagram: full horizontal layout with generous spacing
- Revenue cards: 2×2 grid or 4-up single row
- More whitespace between sections (80–100px)

---

## Implementation Order

1. **Scroll infrastructure** — `useScrollFallback.ts` hook + `cms-interop.css` with `@keyframes` definitions, `animation-timeline: view()` rules, and `@supports` fallbacks
2. **Page shell** — `page.tsx` with layout, metadata, theme wrapper, header, footer. Mobile-first container styles.
3. **CmsHero** — Hero section. Left-aligned on mobile, stat card full-width. No scroll animation needed.
4. **BudgetBar** — Scroll-linked budget bar fill + counter + overflow. Test on phone first.
5. **FoundryDiagram** — Vertical-stacked on mobile, horizontal on desktop. Scroll-linked box entry + dot flow.
6. **TransformationRows** — Three scroll-linked card animations. Each self-contained.
7. **RevenueCards** — Stat cards, single column mobile → 2×2 desktop.
8. **ProofMetrics** — Compact metric display, 2×2 mobile grid.
9. **CmsCta + EmailGate** — Dual CTA buttons + reuse existing email gate.
10. **StickyMobileCta** — Bottom bar that appears after hero, hides at footer.
11. **Theme update** — Switch cms-interop config to #AC1F2D in `lib/microsites.ts`.
12. **Mobile polish** — Test every section at 375px. Spacing, touch targets, text sizing, animation timing. Then tablet, then desktop.

---

## Open Questions

1. **Formspree ID:** The current cms-interop config uses `xaqbaljo` (same as healthcare-pe). Should we create a separate Formspree form for CMS leads? (Can be done later — using existing ID works.)

2. **"Schedule a walkthrough" CTA:** Where should this link? Options: mailto:warren@themtn.ai, a Calendly link, or a contact form. (Can use mailto as default, swap later.)

3. **PDF files:** Are the CMS white papers already in `/public/papers/`? The config references `mtn-wp-003-exec.pdf` and `mtn-wp-003-tech.pdf`. Need to confirm these exist.

4. **Video embed:** Should we embed the actual CMS video somewhere on the page once it's produced? Could go in the hero or as a secondary CTA. (Not blocking — can add later.)
