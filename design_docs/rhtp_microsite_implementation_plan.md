 Healthcare State RHTP Microsite — Implementation Plan

 Context

 Build a fourth microsite at /m/healthcare-state-rhtp for state-government RHTP buyers (State Health IT
 Directors, Medicaid Directors, Public Health Officers, Offices of Rural Health). This audience reads very
 differently from the existing PE-targeted microsites: PE/VC argot ("EBITDA", "scalable", "M&A",
 "go-to-market") is counterproductive here. Canonical state/federal language ("data modernization", "burden
 reduction", "data infrastructure", "Health Data Utility", "interoperability") is required.

 The microsite gates a single PDF (public/papers/mtn-wp-004-exec.pdf, 3.5 MB, "Rural Data Infrastructure in
 Weeks, Not Quarters — Executive Edition") and frames around the Sept 30, 2027 RHTP Year 1 obligation
 deadline and Technical Factor F.2 (Data Infrastructure) scoring under Section 71401 of P.L. 119-21.

 Two custom graphics anchor the page:
 - A new scroll-driven 4-phase deployment timeline (Schema Ingestion → Automated Mapping → Targeted Review →
  Ongoing Maintenance).
 - An adapted scaling/maintenance-burden curve forked from the existing MaintenanceRow
 (components/microsites/shared/AccelerationRows.tsx lines 180–280), re-indexed to a 25-FQHC baseline with
 cubic (not quadratic) traditional growth.

 The existing dedicated-page pattern from healthcare-pe, b2b-pe, and cms-interop (each at
 app/(microsites)/m/{slug}/page.tsx) is followed. Source content lives in
 design_docs/healthcare-state-rhtp-microsite.md.

 User decisions (already taken):
 - Hero stat: 238 hrs / FQHC / year (HRSA OMB Control 0915-0193); Sept 30, 2027 deadline lives in the
 subhead.
 - Include the "Where it breaks" two-example component (FQHC A1c → UDS LOINC, behavioral health → PHQ-9 /
 eCQM CMS2v13).
 - Hero has a single primary CTA only ("Download the executive paper" → #download).

 Files to modify

 lib/microsites.ts

 Append a new MicrositeConfig to the microsites array (after cms-interop at line 208):

 {
   slug: 'healthcare-state-rhtp',
   title: 'MTN | Rural Data Infrastructure in Weeks, Not Quarters',
   metaDescription:
     'Hit your RHTP F.2 milestones before the September 30, 2027 obligation deadline. Semantic normalization
  between your HIE and your analytics stack.',
   headline: 'Rural Data Infrastructure in Weeks, Not Quarters',
   subheadline:
     'Hit your RHTP F.2 milestones before the September 30, 2027 obligation deadline. The transport layer is
  solved. The semantic layer is not.',
   heroStat: '238 hrs',
   heroStatCaption: 'per FQHC per year of UDS reporting alone (HRSA OMB 0915-0193) — about six full-time
 weeks',
   papers: [
     {
       title: 'Rural Data Infrastructure in Weeks, Not Quarters — Executive Edition',
       subtitle: 'Hitting Your RHTP F.2 Milestones Before the 2027 Deadline',
       filePath: '/papers/mtn-wp-004-exec.pdf',
       fileSize: '3.5 MB',
     },
   ],
   formspreeId: 'xaqbaljo',
   ctaLabel: 'Download the white paper',
   theme: {
     primaryColor: '#AC1F2D',
     primaryColorHover: '#8B1924',
     heroGradientColor: '#F5E0E2',
   },
   sections: [],
   utmCampaign: 'healthcare-state-rhtp-wp',
   brandTagline: 'Semantic normalization between your HIE and your analytics stack.',
 },

 app/(microsites)/m/[slug]/page.tsx (lines 22–31)

 Add 'healthcare-state-rhtp' to the generateStaticParams exclusion list so the dynamic catch-all does not
 also try to render it:

 .filter((slug) =>
   slug !== 'cms-interop' &&
   slug !== 'healthcare-pe' &&
   slug !== 'b2b-pe' &&
   slug !== 'healthcare-state-rhtp'
 )

 Files to create

 All new files live under two new directories:

 - app/(microsites)/m/healthcare-state-rhtp/page.tsx
 - components/microsites/healthcare-state-rhtp/RhtpHero.tsx
 - components/microsites/healthcare-state-rhtp/RhtpWhereItBreaks.tsx
 - components/microsites/healthcare-state-rhtp/RhtpStateStack.tsx
 - components/microsites/healthcare-state-rhtp/RhtpDeploymentTimeline.tsx
 - components/microsites/healthcare-state-rhtp/RhtpMaintenanceCurve.tsx
 - components/microsites/healthcare-state-rhtp/RhtpCta.tsx

 Page composition

 app/(microsites)/m/healthcare-state-rhtp/page.tsx follows the structure of
 app/(microsites)/m/cms-interop/page.tsx. Render order:

 1. <MicrositeThemeWrapper theme={config.theme}> — wrapper.
 (components/microsites/MicrositeThemeWrapper.tsx)
 2. <header> — logo-only header copied verbatim from cms-interop/page.tsx lines 37–50.
 3. <RhtpHero /> — hero with id="hero-section" (required by StickyMobileCta observer at
 components/microsites/shared/StickyMobileCta.tsx lines 27–43).
 4. <ReturnCards> — three proof-point cards. Reused with state-tone copy:
   - 40% — local health departments with no dedicated informatics staff (NACCHO 2024)
   - 71% → 42% — hospitals reporting access vs. clinicians routinely using outside clinical info (ONC 2023)
   - 4–6 — EHR vendors per typical state rural network (vs. 1 for an integrated delivery network)
   - Heading: "The structural gap states are working with."
   - accentColor="#AC1F2D", accentRgb="172,31,45".
 5. <MeaningBeat> — "Transport is solved. Semantics is not." Use red accent (172,31,45) to stay coherent on
 a red-themed page; closer prop = the design-doc pull-quote "The record moves through the HIE. The meaning
 does not travel with it."
 6. <RhtpWhereItBreaks /> — two concrete failure rows (see component spec).
 7. <RhtpStateStack /> — Transport → Semantic (highlighted) → Analytics layer cards. Section anchor:
 id="state-stack".
 8. <RhtpDeploymentTimeline /> — 4-phase scroll-driven timeline.
 9. <RhtpMaintenanceCurve /> — adapted scaling curve.
 10. <DarkReveal> — annual-scoring-clock punchline ("The scoring clock runs every year. Manual
 reconciliation cannot keep up."). Glow color rgba(172,31,45,0.14), punchline color #F06070.
 11. <RhtpCta /> — "Thirty days. Three facilities. No PHI." Static CTA wrapper.
 12. <section id="download"> with <MicrositeEmailGate> — copied from cms-interop/page.tsx lines 71–97. The
 gate already handles single-paper arrays (it branches on papers.length === 1 at
 components/microsites/MicrositeEmailGate.tsx line 113).
 13. <footer> — copied from cms-interop/page.tsx lines 100–109; tagline = config.brandTagline.
 14. <StickyMobileCta bgColor="#AC1F2D" activeBgColor="#8B1924" label="Download the executive paper"
 href="#download" />.

 New component specs

 RhtpHero.tsx

 Static hero modeled on components/microsites/healthcare-pe/PeHero.tsx. Headline: "Rural Data Infrastructure
  in Weeks, Not Quarters." Hero stat card: 238 hrs with caption "per FQHC per year of UDS reporting alone —
 about six full-time weeks." Subhead: "Hit your RHTP F.2 milestones before the September 30, 2027 obligation
  deadline. The transport layer is solved. The semantic layer is not." Single primary CTA ("Download the
 executive paper" → #download). Eyebrow: "Section 71401 · Technical Factor F.2 · September 30, 2027
 deadline."

 No client-side state, no scroll hooks. Must render <section id="hero-section"> so the sticky mobile CTA
 observer fires correctly. Reuses --ms-hero-gradient from MicrositeThemeWrapper for the background tint.

 export default function RhtpHero(): JSX.Element

 RhtpWhereItBreaks.tsx

 Two-row failure-mode card, modeled visually on the before-after block in app/(microsites)/m/[slug]/page.tsx
  lines 203–234. Each row has three columns: What the source documents | What the spec requires | Result.
 Rows are hard-coded:

 - FQHC: "A1c 9.2%, drawn 3/15" | UDS Table 7: LOINC 4548-4 with result and date | Result exists but is not
 coded; excluded from numerator.
 - Behavioral health: narrative depression assessment | eCQM CMS2v13: PHQ-9 score ≥10 with documented
 follow-up | Narrative without instrument score; measure not met even when follow-up care occurred.

 Animation: scroll-triggered fade-up per row using useScrollProgress (hooks/useScrollProgress.ts) and remap.
  Row 1 fades at progress 0.05–0.40, row 2 at 0.30–0.70. Reduced-motion safe (useScrollProgress returns 1
 immediately).

 export default function RhtpWhereItBreaks(): JSX.Element

 RhtpStateStack.tsx

 Three vertically-stacked layer cards: Transport & identity (HIE / TEFCA QHINs / Carequality / CommonWell —
 "moves records and matches identity"), Semantic normalization (MTN Data Foundry) (highlighted with
 --ms-primary left border, "this paper" badge, "normalizes what the data means across vendors, code sets,
 and reporting specifications"), Analytics & reporting (Innovaccer, Arcadia, Azara, Health Catalyst,
 Snowflake, Databricks, Microsoft Fabric — "population health analytics, quality reporting, data
 warehousing"). Caption beneath the middle card: "Complement, not replace."

 Section anchor id="state-stack". Animation: three staggered scroll fades using useScrollProgress + three
 remap ranges (0–0.40, 0.25–0.65, 0.50–0.85). Visual scaffolding from
 components/microsites/cms-interop/FoundryDiagram.tsx (the three-box layout pattern at lines 44–65), but
 rotated to a vertical stack with text-heavy cards. List vendor categories, not specific vendors that may
 rotate (TEFCA QHIN list updates regularly).

 export default function RhtpStateStack(): JSX.Element

 RhtpDeploymentTimeline.tsx (NEW)

 Four horizontal phase blocks: vertical-stack on mobile, horizontal Gantt-like row on desktop. Each block
 carries a phase number (01–04), title, duration label, and one-sentence description. Scroll-triggered,
 phases light up left-to-right.

 Phases (literal copy from design doc lines 107–111):
 1. Schema Ingestion — Days 1–5 — "Ingest schemas, data dictionaries, and API documentation. No data
 migration. No PHI required."
 2. Automated Mapping — Weeks 1–2 — "Concept mapping across facility sources and target reporting schemas.
 Confidence scoring flags what needs review."
 3. Targeted Review — Weeks 2–3 — "State staff and clinical SMEs validate flagged mappings."
 4. Ongoing Maintenance — Continuous — "Schema drift detection and re-mapping as systems and reporting
 specifications evolve."

 Mechanic: useScrollProgress(sectionRef, { startVh: 0.50, endVh: -0.20 }) (matches AccelerationRows
 cadence). Compute four sub-progresses with remap:
 - p1 = remap(progress, 0.05, 0.30)
 - p2 = remap(progress, 0.25, 0.50)
 - p3 = remap(progress, 0.45, 0.70)
 - p4 = remap(progress, 0.65, 0.90)

 For each block:
 - Bottom progress bar width: ${p * 100}% (phases 1–3).
 - Phase 4: once p4 > 0.5, swap progress bar for a pulsing dot (@keyframes pulse on opacity 0.4 → 1.0,
 infinite, 2s).
 - Title color: var(--ms-muted) → var(--ms-heading) based on p.
 - Left border: 2px → 4px solid var(--ms-primary) based on p.

 Distinct from the existing TimelineRow in AccelerationRows.tsx (lines 60–133), which is single-bar
 compression; this is four discrete labeled blocks.

 export default function RhtpDeploymentTimeline(): JSX.Element

 RhtpMaintenanceCurve.tsx (ADAPTED)

 Single SVG chart with two curves indexed to a 25-FQHC baseline. Forked from the MaintenanceRow function in
 components/microsites/shared/AccelerationRows.tsx lines 180–280. Copy that function into the new file, then
  change:

 - Conventional curve formula from t*t to t*t*t (cubic — design-doc says superlinear growth, "compounds with
  every facility and every spec change").
 - Foundry curve formula stays nearly flat (e.g., t * 0.10).
 - Conventional color: #4D4D4D for lineAnim < 0.5, lerp toward #AC1F2D for lineAnim ≥ 0.5 (cross-paper
 red-bad convention from design doc lines 287–298).
 - Foundry curve color: #657EE2 (cross-paper blue-good convention; not the theme's --ms-blue which differs).
 - X-axis labels: "25 facilities (1×)" → "all participating rural facilities".
 - Y-axis label (rotated): "annual reporting hours (relative)".
 - SVG <text> annotation, visible once lineAnim > 0.7: "238 hrs/FQHC × 25 FQHCs ≈ 6,000 hrs baseline".
 - Caption HTML <p> below SVG: "Illustrative growth, not a claimed MTN result."

 Heading above chart: "Why the burden compounds." Subhead below: "Traditional integration grows with every
 new facility onboarded and every annual specification change. Mapping-artifact architecture grows with
 neither."

 Do not modify the original MaintenanceRow — fork in place. The state version is content-distinct (axis
 labels, baseline indexing, annotation) and doesn't belong in shared/.

 export default function RhtpMaintenanceCurve(): JSX.Element

 RhtpCta.tsx

 Static CTA section, modeled on components/microsites/healthcare-pe/PeCta.tsx. Heading: "Thirty days. Three
 facilities. No PHI." Body: "We map the semantic gap between what your facilities document and what your
 reporting specifications require — UDS, MBQIP, T-MSIS, eCQM. Quantifies the manual reconciliation hours
 your network is carrying today and demonstrates drift-resilient mapping against a real specification
 change."

 Two buttons:
 - Primary (red filled): "Email warren@themtn.ai" →
 mailto:warren@themtn.ai?subject=RHTP%20Proof%20of%20Value.
 - Secondary (red outlined): "Download the executive paper" → #download.

 Footnote line beneath: "Procurement: NASPO ValuePoint, state cooperative master contracts, or sole-source
 via the Rural Tech Catalyst Fund (10% of award or $20M per budget period, whichever is less). NOFO Category
  F. Supports Technical Factor F.2 (Data Infrastructure) progress."

 export default function RhtpCta(): JSX.Element

 Existing components reused

 - components/microsites/MicrositeThemeWrapper.tsx — theme variable injection. Required wrapper.
 - components/microsites/MicrositeEmailGate.tsx — supports single-paper arrays via papers.length === 1
 branch at line 113.
 - components/microsites/shared/MeaningBeat.tsx — narrative pause for "Transport is solved. Semantics is
 not."
 - components/microsites/shared/DarkReveal.tsx — closing "scoring clock" three-stage reveal.
 - components/microsites/shared/ReturnCards.tsx — three proof-point stat cards.
 - components/microsites/shared/StickyMobileCta.tsx — mobile sticky CTA. Requires id="hero-section" on the
 hero and id="download" on the gate (both present in this plan).
 - hooks/useScrollProgress.ts — useScrollProgress and remap for scroll-driven animations in the three new
 animated components.

 Verification

 cd /Users/warrenpettine/Dropbox/mb_tmp/integration-focused-website
 npm run dev

 Then in a browser:

 1. Navigate to http://localhost:3000/m/healthcare-state-rhtp. Verify hero renders with 238 hrs stat, Sept
 30, 2027 subhead, single primary CTA, and red theme.
 2. Scroll. Verify ReturnCards stat trio (40% / 71%→42% / 4–6) reveals with stagger; MeaningBeat plays
 headline → body → closer; RhtpWhereItBreaks two rows fade up sequentially.
 3. Continue. Verify RhtpStateStack three layer cards stagger in (Transport / Semantic-highlighted /
 Analytics).
 4. Continue. Verify RhtpDeploymentTimeline lights up phases 1→2→3→4 left-to-right; phases 1–3 fill 0–100%,
 phase 4 pulses.
 5. Continue. Verify RhtpMaintenanceCurve draws cubic gray-to-red curve and a flat blue (#657EE2) curve;
 "238 hrs/FQHC × 25 ≈ 6,000 hrs" annotation appears once curves complete; caption "Illustrative growth, not
 a claimed MTN result." is present.
 6. Continue. DarkReveal plays its three-stage scoring-clock punchline.
 7. RhtpCta renders with mailto and #download buttons, plus procurement footnote.
 8. Submit email gate with a test address. Confirm Formspree success unlocks the single-paper title "Rural
 Data Infrastructure in Weeks, Not Quarters — Executive Edition." Click and confirm mtn-wp-004-exec.pdf (3.5
  MB) downloads.
 9. Scroll back to mid-page on mobile width (375 px DevTools). Confirm StickyMobileCta slides in once hero
 is offscreen and #download is offscreen, slides out otherwise.
 10. Run npm run lint — confirm no new errors.
 11. Run npm run build — confirm static export. The dynamic [slug]/page.tsx route should not generate a
 duplicate out/m/healthcare-state-rhtp/; the dedicated out/m/healthcare-state-rhtp/index.html should exist
 with the hero copy server-rendered.
 12. DevTools → Rendering → Emulate prefers-reduced-motion: reduce. Reload. Verify all scroll-driven
 sections render in their final state immediately (handled by useScrollProgress).

 Notes / risks

 - The <17 months framing was rejected because today is 2026-04-26 and the deadline is 2027-09-30 — a
 countdown stat would decay quickly and force build-time recomputation. The Sept 30, 2027 date is safer in
 the subhead.
 - TEFCA QHIN list is volatile (11 designated as of Nov 2025 per the design doc). RhtpStateStack lists
 categories ("TEFCA QHINs", "Carequality", "CommonWell") rather than specific vendors that may rotate.
 - The Formspree ID (xaqbaljo) is shared across all four microsites; utmCampaign: 'healthcare-state-rhtp-wp'
  distinguishes submissions.
 - The design doc references document number MTN-WP-003-EXEC-v0 while the file is mtn-wp-004-exec.pdf. The
 microsite does not surface a document number, so this discrepancy does not affect the page; flag for
 separate cleanup.
 - scripts/generate-cards.ts reads lib/team-data.ts, not lib/microsites.ts, so adding a microsite does not
 touch the prebuild card pipeline.
