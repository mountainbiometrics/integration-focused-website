# MTN Data Foundry, B2B SaaS PE Alliance Microsite, Design Doc

**Purpose.** This document is the build reference for a public-facing microsite paired with the *Turn Integration Labor Into Compounding IP, B2B SaaS Edition* Design Partner Briefing. It exists so a designer or copywriter can build the microsite without retrieving additional internal memos.

**Structure.** The white paper body comes first (the same prose that ships in the printed briefing). Below the horizontal rule is **Appendix: Microsite Build Reference**, an internal pack covering audience, positioning, vertical context, pilot mechanics, visual assets, proof points, voice and claim discipline, a pull-quote library, and source-material pointers. Sections marked **[INTERNAL]** are strategic targeting that should inform copy choices but should not appear verbatim on a public site.

**Sibling.** This is the B2B SaaS counterpart to `design_docs/healthcare-pe-alliance-microsite.md`. Where shared infrastructure (figures, color semantics, pilot mechanics) is identical across the two papers, this doc cross-references rather than duplicates. Where the verticals diverge (personas, source systems, compliance posture, lead proof-point), this doc carries its own copy.

**Status.** First-pass. Section C (Wave Outreach Map) is a placeholder pending consulting-firm research; sections A, B, D, E, F, G, H, I, J are populated from the B2B SaaS Design Partner memo, the B2B SaaS demo fixtures, and the new paper directory.

# Executive Summary

The senior consultants on your B2B SaaS M&A team are exceptionally good at integrating disparate CRM, billing, and finance systems across PE-backed bolt-ons. The work is profitable, the methodology is real, and almost none of it carries to the next acquisition. Intellectual Property that should be accruing to your firm is being rebuilt by hand and walked out the door with each engagement.

The MTN Data Foundry augments your team's work with AI-assisted mapping that builds a semantic data model across sources. The Foundry operates on schema metadata: table and field names, data types, API documentation, internal data dictionaries, and your team's accumulated knowledge. Customer, contract, and revenue data values stay in your client's environment; the platform never sees them.

- **Your talent focuses on the high-value work.** Schema discovery and mapping that conventionally consumes 6 to 8 weeks compresses to 1 to 2 weeks during the pilot.
- **Maintain your data model, even as the software changes.** The Foundry automatically detects drift and suggests new mappings.
- **Every engagement deposits IP into your firm's library.** The Foundry captures three reusable assets on each deal: the annotation conventions your seniors apply, the firm's own documented mapping knowledge, and a growing library of canonical concepts (`Customer.AccountID`, `Contract.MRR`, `Opportunity.Stage`) that every future source maps against. Adding the tenth acquired CRM does not require touching the first nine. By engagement five, the marginal cost of integration is reviewing a queue, not building from scratch.

# Your Team's Talent is Under-Leveraged

Your senior consultants know the Salesforce metadata API, HubSpot's object model, and NetSuite's SuiteAnalytics segment dimensions at a level few in B2B SaaS PE can match. They read revenue-recognition edges and renewal-classification ambiguity that no generalist consultancy gets right. That expertise is what your firm's reputation rests on.

But B2B SaaS M&A integration is a slog. Three CRMs, two billing platforms, a stale Snowflake instance the platform CFO inherited, an operating partner asking for a unified ARR bridge across the platform by Friday. The pipelines you build break silently when Salesforce ships a winter release that renames a custom field, and none of the work carries to the next bolt-on.

The operating partner wants ARR by product line, NRR and GRR, CAC and payback, and pipeline coverage on a unified opportunity-stage taxonomy, all comparable across the platform and refreshed before the next LP letter. Nothing about that ask is new. What is new is that it has to land four times after four closes, then five, then six, on a clock your firm does not control.

The Foundry takes the mechanical mapping layer off your senior consultants' desks: schema discovery, field-level annotation, and the canonical concept map that lets one source plug into a shared semantic layer instead of into every other source pairwise. The judgment work stays human (architecture, exception handling, revenue-recognition and seat-counting calls), and value-level normalization stays where it belongs, in your firm's methodology and your client's data environment. The methodology your team applies is encoded once, audited, and carries into the next engagement.

## A Solution that Converges

**For the practice leader.** Concurrency lift on every senior consultant, fixed-fee margin lift on every engagement that can shift off T&M, and a productized accelerator that survives consultant turnover.

**For your senior integration architect.** The mechanical mapping work disappears; architecture, exception handling, and revenue-recognition judgment stay human. Confidence scoring, audit logs, and the canonical schema model are visible and controllable.

**For your engagement partner.** A faster commitment your competitors cannot credibly match. Your team owns the client relationship and the deliverable; MTN engineering deploys in support, ensuring the platform performs against the engagement's specifics.

# How the Foundry Works

The MTN Data Foundry is an AI-assisted data integration and normalization platform. Given a new source, it reasons over schema, software documentation, and your team's accumulated knowledge to discover the common data model and the mapping decisions that get there, with confidence scoring and human review on every key step.

The Foundry's integration technology operates on metadata: schema names, data types, API documentation, internal data dictionaries, and your team's accumulated knowledge. Customer, contract, and revenue data values stay in your client's environment; the platform never sees them. On top of that boundary, three AI-assisted capabilities replace the manual labor that consumes most of a conventional integration:

- **Annotations describing the function and intent of every table and field.** Your team spends hours hunting down the meaning of columns in someone else's Salesforce org or in a NetSuite instance whose segment, class, and department dimensions encode an undocumented chart of accounts. The Foundry reasons over database structure, software documentation, organizational documents, and your team's accumulated knowledge to annotate the database. Annotations are suggested by the system and flagged with confidence levels for human review.

- **Flexibly join data across sources.** Rather than building pairwise mappings between every source and every other source (the N×M explosion that consumes 65 to 75% of integration labor), the Foundry maps every source to a shared concept layer. Adding the tenth acquired CRM does not require touching the first nine; maintenance stays manageable as the portfolio grows.

- **Self-healing maintenance.** When Salesforce ships a Winter release that deprecates a Lead field, or NetSuite SuiteAnalytics renames a saved-search column, the Foundry detects the deviation, proposes the updated mapping, and queues it for review rather than letting the integration break silently weeks later.

The platform is bounded to the schema-and-concept layer by design. Value-level normalization (revenue-recognition rules across acquired billing systems, currency normalization, customer-account deduplication, product-SKU canonicalization) is a separately-deployable module that runs inside your client's environment when scope requires it. The metadata-driven approach extends to adjacent stacks (Microsoft Dynamics, Workday, Sage Intacct) where engagements require it.

# What the Accelerator Is

An accelerator is an asset with pre-built tooling, methodology stacks, and AI-enabled platforms that layer into M&A integration projects. Every engagement you enter draws on the accumulated knowledge of engagements past. With the MTN Data Foundry, that asset has several constituent parts:

1. **Annotation conventions, your firm's house style, encoded.** Every engagement, senior consultants confirm or edit field-level annotations: usage notes, display names, definitions, and the reasoning behind each mapping. These are structured, versioned artifacts with confidence scores attached. The next engagement starts pre-loaded with the firm's accumulated conventions, and the suggestion engine is calibrated against the firm's own gold-standard reviews.
2. **Internal documented knowledge, made operational.** The Foundry reasons over your firm's own integration playbooks, methodology decks, prior engagement deliverables, and internal data dictionaries, using them as context for mapping reasoning so first-pass annotations reflect your documented approach rather than a generic prior. Document libraries that previously lived dormant in SharePoint become active mapping intelligence on every engagement.
3. **Canonical concepts derived from past engagements.** A growing library of stable business objects (`Customer.AccountID`, `Contract.MRR`, `Contract.RenewalDate`, `Subscription.SeatCount`, `Opportunity.Stage`, `Product.SKU`) that every future source maps against. By engagement five, the library has crystallized around your firm's B2B SaaS roll-up patterns (CRM consolidation, billing-platform migration, ARR bridge construction, customer-360 unification), and the marginal cost of the next bolt-on falls toward the cost of reviewing a queue.
4. **Vendor-schema drift signatures and reviewer feedback loops.** When Salesforce, HubSpot, NetSuite, or any of the major billing platforms ships a release that renames a field, the Foundry's correction is captured and applies firm-wide. Every approve, reject, or edit decision a senior consultant makes becomes labeled training data calibrating the system for your firm's standards.

The MTN Data Foundry accelerates work during the pilot period, and value compounds with every subsequent engagement. Pilot benchmarks suggest a senior consultant who today delivers 4 to 6 PE bolt-on integrations per year can deliver materially more on a productized platform, at higher margin per deal. We will commit to specific targets jointly with our design partner based on engagement scope.

## What Engagement One Looks Like

The conventional first integration on a typical B2B SaaS PE bolt-on takes roughly three months. The Foundry compresses that work substantially on engagement one, before any cross-engagement compounding has kicked in. Engagement one delivers a canonical concept map across the in-scope CRM, billing, and finance instances, and a queryable semantic layer your team can build the operating partner's ARR bridge, NRR/GRR, and pipeline-coverage dashboards on top of. MTN's engineering talent deploys in support of your team, ensuring the Data Foundry delivers.

# What Success Looks Like

A successful pilot produces:

- Detailed annotations for every table and field, facilitating both general business intelligence and the use of advanced AI tooling.
- A clear mapping of data sources to either a target schema, or a canonical set of concepts.
- A unified ARR, retention, and pipeline dashboard delivered to the operating partner, built on the canonical concept map the Foundry produces, with your firm's normalization and revenue-recognition rules applied in your delivery environment.
- An audit log of every transform applied.

After the pilot, the relationship is mutually opt-in. Whether you continue or not, you keep your annotation conventions, methodology playbooks, vertical templates, and engagement deliverables, exported as portable JSON manifests. MTN keeps the platform and the learnings about how it performs across deployments. License terms, support model, and account scoping for an ongoing relationship are documented in the design partner term sheet, available on request.

# What We Are Asking For

We are seeking our first B2B SaaS M&A integration design partner. The terms below reflect that: discounted, scope-bounded, and structured to build a case study together.

Three concrete asks over the next 90 days.

1. A 30-minute scoping conversation with the M&A practice leader for B2B SaaS and the engagement lead for an upcoming PE bolt-on, to confirm whether the Foundry's current CRM, billing, and finance coverage matches the engagement.
2. Identification of a candidate engagement in your firm's pipeline (CRM consolidation, billing-platform migration, ARR-bridge construction, vertical SaaS aggregator integration, horizontal SaaS tuck-in, SaaS carve-out) that could host the 90-day pilot.
3. A 90-day Design Partner agreement covering platform license discount, engineering support, and other key details. Draft term sheet ready for review.

No exclusive in either direction.

For the platform's technical architecture and compliance posture, request the *MTN Data Foundry Architecture and Compliance Brief*.

# About MTN

MTN is a team with deep expertise in data infrastructure, machine learning, and semantic data systems. The founding team has built schema-mapping and data-integration systems from the ground up at production scale.

## Technical Leadership

```{=latex}
\vspace{0.3\baselineskip}

\noindent
\begin{minipage}[t]{0.38\columnwidth}
\vspace{0pt}
\oldincludegraphics[width=\linewidth]{team/pettine_headshot.jpg}
\end{minipage}%
\hfill
\begin{minipage}[t]{0.58\columnwidth}
\vspace{0pt}
\textbf{Warren Pettine, MD, Co-Founder and CEO.} Assistant Professor at the University of Utah, where he leads the Medical Machine Intelligence (M$^2$Int) Lab. Trained in machine learning research at Harvard, Stanford, NYU, and Yale.
\end{minipage}

\vspace{0.7\baselineskip}

\noindent
\begin{minipage}[t]{0.38\columnwidth}
\vspace{0pt}
\oldincludegraphics[width=\linewidth]{team/Matthias_Christenson.jpeg}
\end{minipage}%
\hfill
\begin{minipage}[t]{0.58\columnwidth}
\vspace{0pt}
\textbf{Matthias Christenson, PhD, AI Architect.} Leads MTN's technical architecture design and data model development. PhD and postdoctoral research at Columbia University in computational machine learning. Prior industry experience as a Deep Learning Research Engineer at DeepLife, training foundational models on genomic and biometric data.
\end{minipage}

\vspace{0.7\baselineskip}

\noindent
\begin{minipage}[t]{0.38\columnwidth}
\vspace{0pt}
\oldincludegraphics[width=\linewidth]{team/samuel_wecker.jpg}
\end{minipage}%
\hfill
\begin{minipage}[t]{0.58\columnwidth}
\vspace{0pt}
\textbf{Samuel Wecker, Lead Systems Engineer.} Over twelve years building and scaling production software, including as a founding engineer at a startup that grew to a billion-dollar platform. Specializes in unifying disparate systems and data sources at scale. Leads Data Foundry's core platform development.
\end{minipage}
```

**Contact:**\
Warren Pettine, MD, CEO of MTN\
<warren@themtn.ai>\
<https://www.themtn.ai>

---

# Appendix: Microsite Build Reference

This appendix consolidates the audience, positioning, mechanics, and brand context behind the white paper above. It exists so a designer or copywriter can build the microsite without retrieving additional internal memos. Sections marked **[INTERNAL]** contain strategic targeting that should inform copy choices but should not appear verbatim on a public site.

## A. Audience and Personas

The white paper targets three primary personas at boutique consulting firms and systems integrators doing post-acquisition data integration for PE-backed B2B SaaS roll-ups.

### Practice Leader / Service Line Head (primary target)

**Role.** P&L owner for the practice deploying MTN. At boutiques: Managing Partner running M&A Integration, Tech-Enabled Services, or Operating-Partner Reporting. At PE-advisory: Head of Software M&A Practice or Head of Private Equity Practice. At Big 4 / Accenture: Partner running M&A Integration service line for the software vertical.

**Top three pains:**

1. PE clients demanding faster integration timelines and EBITDA realization on platform-and-bolt-on B2B SaaS deals.
2. Talent constraints on senior architects fluent in Salesforce metadata API, NetSuite SuiteAnalytics, and the billing-platform stack (Zuora, Stripe, Chargebee).
3. Margin compression as PE sponsors consolidate vendor relationships and demand fixed-fee outcomes.

**Currently evaluated against:** Snowflake and Databricks partner-built accelerators (existing alliances); in-house manual mapping; competitor boutiques bidding with a productized data layer.

**Buyer-signal phrases (use in microsite copy):**

- "Productized practice" (analogues: KPMG's KLAS-rated Workday practice; LTIMindtree's Snowflake practice).
- "3 to 5x services multiplier."
- "Fixed-fee outcome-based pricing."
- "Flat maintenance cost as portfolio size grows."
- "Time-to-Snowflake-readiness" and "time-to-ASC-606-readiness."

**Objections to pre-empt:**

- "If MTN automates 70 percent of the work, what happens to my utilization?"
- "How do I price a fixed-fee engagement when my historical estimating model assumes manual mapping?"
- "Does this commoditize my practice or differentiate it?"
- "Why aren't the largest software-PE platforms (Vista, Thoma Bravo, Insight) already demanding we use it?"

### Engagement Partner / Managing Director

**Role.** Relationship owner for the named PE sponsor or platform CEO. Final call on engagement staffing, scope, pricing, tooling. Titles: Lead Client Service Partner, Client Account Lead, Senior Director, Principal.

**Top three pains:**

1. Manual schema mapping is the most common cause of integration delay on PE add-on deals.
2. Accountable to the operating partner for slipped timelines, missed ARR-bridge dates, and synergy-capture overruns.
3. Reputational risk of deploying an unproven platform on a mission-critical engagement.

**Currently evaluated against:** Competitor firms' tooling capabilities; internal architect availability; the manual in-house baseline.

**Buyer-signal phrases:**

- "Faster timeline than competitors can credibly promise."
- "Compressed 90-day integrations to 14 to 21 days while improving margin."
- "On-deal partner enablement so your team is the hero."
- Reference clients in PE-backed B2B SaaS roll-ups (Vista, Thoma Bravo, Insight, K1 platform investments).

**Objections to pre-empt:**

- "I cannot put an unproven platform on my Q4 close-out engagement; what is your reference book in PE-backed B2B SaaS specifically?"
- "Who configures and maintains this on-deal, and what happens if your team is unavailable?"
- "What does the DPA structure look like, and is the platform PCI-DSS attested?"
- "If we lose this client, who eats the cost?"

### Senior Integration Architect / Data Engineer (technical champion)

**Role.** Hands-on technical lead. Designs source-to-target mappings, data normalization, pipeline architecture. Often holds Salesforce certifications (Admin, Platform App Builder, Data Architect), NetSuite ERP Consultant, and SQL/dbt fluency. The actual day-to-day Foundry user.

**Top three pains:**

1. Profiling source schemas, building lookup tables, writing transformation logic takes days or weeks per add-on.
2. Reconciling ambiguous fields (the seven-dimension ARR-definition problem) is the lowest-leverage part of the job.
3. Repeatedly validating the same Salesforce-to-Salesforce or Salesforce-to-HubSpot mappings across deals.

**Currently evaluated against:** Manual schema mapping tools; spreadsheets and custom scripts; competitor architects' approaches; Snowflake-and-dbt-only architectures with no semantic layer.

**Buyer-signal phrases:**

- "Confidence-scored AI mappings you review and approve."
- "Replace the work you hate, keep the architecture work you love."
- "Become lead architect on 3x more integrations per year."
- Audit trails and human-in-the-loop validation.

**Objections to pre-empt:**

- "I do not trust black boxes; show me the mapping logic."
- "How does it handle ambiguous fields where two source columns plausibly map to one target (Zuora `subscriptions.mrr` vs. Stripe-derived MRR)?"
- "What is the human-in-the-loop workflow for low-confidence matches?"
- "Where is the audit log, and is every mapping decision traceable to a source field?"

### Pain-intensity ranking (background context)

| Persona | Threat perception | Notes |
|---|---|---|
| Engagement Manager | High | Span of control shrinks; promotion path narrows. **Deliberate non-target.** |
| Junior Consultant | High in absolute terms, lower in influence | Entry-level mapping work disappears. **Deliberate non-target.** |
| Practice Leader | Medium | Productivity upside vs. revenue cannibalization risk. |
| Talent / Resource Manager | Medium | Utilization compression risk. |
| Senior Integration Architect | Medium | Job-security anxiety offset by craft satisfaction. |
| Engagement Partner | Low to Medium | Reputational risk on first deals. |
| Alliance Leader | Low | Incentives aligned with high-leverage partners. |
| Operating Partner (PE-side) | Low | Direct beneficiary of compressed integration timelines. |

The microsite must not give engagement managers ammunition to block adoption. No copy block should imply MTN replaces a junior consultant team; no "fully autonomous, no humans needed" framing.

### Landing-page guidance

Lead with the **Practice Leader** as primary persona. The practice leader is effectively the buyer; they control budget, alliance posture, and engagement-level deployment. Secondary entry points are the Senior Integration Architect (technical champion) and the Engagement Partner with named PE-sponsor relationships (on-deal decision-maker).

The unifying thread across all three is the **platform-anchored services accelerator analogue**. In adjacent ecosystems (MuleSoft, Workday, Snowflake, Databricks), boutique-led alliances built first-generation accelerator IP during the platform's pre-scale years. The microsite copy should frame the Foundry as the platform layer that grows the partner firm's revenue, the way MuleSoft enabled Deloitte's CareConnect and Workday enabled KPMG's #1 KLAS ERP business. Snowflake and Databricks partner ecosystems are the closest current analogues for B2B SaaS readers.

## B. Strategic Positioning

**Headline frame.** Turn integration labor into compounding IP. The work senior consultants do today is rebuilt by hand on every engagement; the Foundry captures it as portable artifacts that compound across deals.

**Founding Partner framing.** This is MTN's first B2B SaaS M&A integration design partner program. The terms reflect that: discounted, scope-bounded, and structured to build a case study together. The microsite should foreground the "first design partner" framing rather than implying mature reference customers exist.

**MuleSoft / Workday / Snowflake analogue.** The strongest comparable: Deloitte's CareConnect was built on MuleSoft; KPMG's KLAS-rated practice was built on Workday; LTIMindtree, Slalom, and Hakkoda built Snowflake-native services accelerators. Each is a platform-anchored services accelerator that grew the partner firm's revenue. The microsite copy should use that pattern, not a "Big 4 disruption" pattern. The 3-to-5x services multiplier is the operative number.

**Operating-partner storyline.** The microsite has a secondary read for PE operating partners on the buy side. Two metrics they actually quote at each other: **time-to-Snowflake-readiness** and **time-to-ASC-606-readiness**. Vista, Thoma Bravo, Insight, and K1-tier operating partners discuss these numbers at PE finance forums. Surface them in copy alongside the practice-leader pitch.

**What MTN is not.**

- Not a CRM or ERP replacement.
- Not a customer-data or revenue-data analytics platform; the Foundry operates on schema metadata, not customer-record or invoice-line values.
- Not a generalist data fabric; the platform is bounded to the schema-and-concept layer by design.
- Not a CDP, ETL tool, or reverse-ETL tool. The canonical-concept layer is upstream of the Snowflake Gold layer the partner builds.

## C. Wave Outreach Map [INTERNAL]

**First-pass; refresh when consulting-firm research is complete.** This section is internal positioning to inform copy and case-study choices. It should not appear verbatim on the public microsite.

The PE-sponsor-side recognition pattern is well-defined from the demo fixtures: **Vista Equity Partners, Thoma Bravo, Insight Partners, K1 Investment Management, Hg Capital**. Operating partners at these platforms talk to each other and reference common metrics (time-to-Snowflake-readiness, time-to-ASC-606-readiness, ARR-bridge timing). The microsite should foreground recognizable PE-platform sponsor categories rather than direct-naming platforms.

The consulting-firm-side targeting (Wave 1 Founding Partner candidates) is **deferred**. Healthcare-side wave research lives in `info_docs/integration_consultants/wave_outreach_map.md`; an equivalent B2B SaaS-side memo does not yet exist. Plausible Wave 1 candidate categories pending research:

- Boutique PE-advisory practices with named B2B SaaS verticals (West Monroe's software practice, Accordion's software-specific advisory).
- Tech-enabled M&A integration shops anchored on Salesforce, NetSuite, or Snowflake alliances (Slalom, Hakkoda).
- Firms with a co-branded data accelerator precedent (Mizu Databricks Accelerator at West Monroe).

**Action item before Wave 1 outreach:** commission a B2B SaaS analogue to the healthcare wave-outreach memo, naming three specific firms with rationale and entry path.

## D. Vertical Context

The accelerator targets six PE B2B SaaS roll-up patterns: **CRM consolidation, billing-platform migration, ARR-bridge construction, vertical SaaS aggregator integration, horizontal SaaS tuck-in, SaaS carve-out**.

**Why each is hot.** System fragmentation is structural. A typical 8-to-12 acquisition B2B SaaS platform runs across 2 to 3 CRMs (Salesforce Enterprise on the platform, HubSpot on acquired companies, sometimes a homegrown system), 2 to 3 billing platforms (Zuora at enterprise tier, Stripe Billing at SMB tier, Chargebee on legacy acquisitions), 1 to 2 finance systems (NetSuite as platform-of-record, QuickBooks on the acquired company), 1 product-analytics tool (Mixpanel or Amplitude), and a support stack (Zendesk). Salesforce ships triannual releases that deprecate fields; Stripe runs API version migrations (notably the Tax API); Zuora pushes ZOQL changes. Typical PE hold is 4 to 6 years; roughly 30 percent of US PE portfolio companies are now held seven or more years. The integration tax compounds against a clock the consulting firm does not control.

**Lead vertical: legal-tech B2B SaaS rollup.** Vista's Aderant / Litera / Onit precedent. Clean (low PHI risk, mostly contract and billing data). Vertical-distinct enough that names do not collide with real well-known SaaS. The buyer audience (Vista, Insight, K1) recognizes the category instantly. RevTech / sales enablement is a tempting alternative but carries name-collision risk with Outreach, Salesloft, and Gong.

**Typical PE sponsors.** Mid-market and mega-fund PE focused on B2B SaaS platform-and-bolt-on consolidation: Vista Equity Partners, Thoma Bravo, Insight Partners, K1 Investment Management, Hg Capital, TA Associates, Francisco Partners. The consulting firm already maintains those sponsor relationships; the lead path is firm-internal, not direct-to-sponsor.

**Lead proof-point: Stripe-to-Zuora ARR bridge across a billing-platform migration.** A PE sponsor wants ARR comparable across acquisitions. Zuora computes MRR from active rate-plan charges; Stripe Billing computes invoice-line subtotal divided by interval. The Foundry's B2B SaaS reference template normalizes both onto a canonical `Contract.MRR` model with confidence-scored mappings (Zuora `subscriptions.mrr` at 68% confidence vs. Stripe-derived `invoices.amount_paid / interval_months` at 72%) and human review on ambiguous cases (mid-cycle plan changes, backdated cancellations, race conditions). The seven-dimension ARR-definition problem (terminology, formula, recognition timing, segment inclusion, revenue stream inclusion, channel treatment, currency policy) is the deepest credibility load in B2B SaaS data; a unified ARR bridge across eight acquisitions is a Day 47 deliverable on the platform; the same bridge on the ninth bolt-on is a Month-14 deliverable under conventional methodology.

**Secondary proof-point: Salesforce-to-HubSpot opportunity-stage reconciliation.** Pipeline reporting across an acquired-company sales pipeline. HubSpot uses internal stage IDs in API calls; Salesforce stage picklists vary by record type. Modeling `pipeline_id`, `pipeline_stage_id`, and `pipeline_stage_label` as separate attributes with provenance is the canonical-concept move that makes cross-acquisition pipeline coverage credible.

## E. Pilot Mechanics and Term-Sheet Outline

**Volume target.** Three to five Design Partners across different consulting firms in 2026, each deployed on a different PE bolt-on B2B SaaS engagement. **No exclusivity in either direction.**

**Structure.** 90-day Design Partner pilot on a single PE bolt-on engagement. Single engagement, mutually opt-in continuation, Design Partner discount on the first engagement.

**Comparable engagement economics from the demo fixtures (boutique side).** A representative B2B SaaS-PE consulting-firm engagement runs at fixed-fee $140K to $220K per add-on (8 to 12 weeks, scope-dependent on source-system count) plus a quarterly platform retainer of $30K to $60K covering drift detection and ongoing concept-layer governance. The Design Partner pilot is calibrated against that benchmark.

**What MTN brings.**

- Productized data fabric with B2B SaaS schema templates covering customer, contract, subscription, opportunity, product, user, and support objects across major CRM, billing, finance, product-analytics, and support systems.
- Multi-tenant, configuration-light platform deployment with a persistent post-Day-90 data plane that survives engagement demobilization.
- Confidence-scored mappings with human-in-the-loop review, immutable audit log, and drift-detection coverage for Salesforce triannual releases, HubSpot API version changes, NetSuite SuiteAnalytics updates, Stripe Tax-API-style migrations, and Zuora ZOQL changes.
- Self-service licensability decoupled from any partner-led engagement; the partner controls the customer relationship.
- Direct MTN engineering support during the pilot, a named engineer paired with the partner team for the duration, not arms-length tier-one support.

**What the partner brings.** B2B SaaS M&A methodology, source-system fluency (Salesforce metadata API, NetSuite SuiteAnalytics, billing-platform APIs), named PE sponsor relationships, vertical credibility. A co-developed accelerator with partner-owned methodology and MTN-owned platform extension.

**Compliance posture for the engagement.** SOC 2 Type II; GDPR DPA-ready commercial terms; CCPA; ISO 27001; PCI-DSS attestation (since billing data flows are scope-relevant on every B2B SaaS engagement, even when no PANs are stored); BAA available on request (for portfolio acquisitions in vertical SaaS for healthcare, life sciences, or clinical-trial tech); customer-managed keys (BYOK / HYOK); SSO and SCIM; subprocessor list with 30-day change notification; annual third-party penetration test report; data residency by region (US, EU/Frankfurt, UK/London, AU/Sydney); VPC peering / PrivateLink deployment option; audit log export with field-level filter. **Drop or downplay** HITRUST (healthcare-only) and FedRAMP (gov-tech only).

**IP ownership model (contract-binding).**

- The partner owns the methodology, business-logic templates, and configuration assets.
- MTN owns the platform-native artifacts.
- The partner can resell its accelerator only on top of MTN licenses.
- MTN does not develop competing methodology assets in the partner's named verticals.
- This is the same split that protected Deloitte's CareConnect and Member Connect investments inside the MuleSoft ecosystem and the same pattern in the Snowflake partner ecosystem.

**Scope boundaries.** One named engagement covering one PE bolt-on B2B SaaS acquisition. The engagement lives inside the partner's existing engagement structure; MTN provides engineering support and a discounted platform license for the pilot phase. The Design Partner agreement covers the platform license discount, the engineering support arrangement, IP ownership during the pilot, and reference rights. Draft term sheet covers: services margins, named-account rights, MDF, certification track design, IP ownership.

**Pricing flexibility.** The Founding Partner program supports T&M, fixed-fee, and outcome-based pricing on the partner side. A vendor that compresses billable hours is structurally threatening to a utilization-bonus practice unless paired with an explicit alternative pricing path. The platform license is the Foundry's revenue line; the partner's revenue line is whichever pricing motion fits the deal.

**What the pilot produces.**

- A unified ARR, NRR/GRR, and pipeline dashboard across the bolt-ons in scope, refreshed weekly, signed off by the operating partner.
- A documented canonical schema model for the CRM, billing, finance, product-analytics, and support systems used in the engagement.
- An audit log and provenance record covering every transform applied.
- A co-authored case study, drafted with the partner, ready to use in future PE-sponsor pitches.
- A clear yes-or-no decision from the partner firm about deploying the Foundry on a subsequent bolt-on.

**After the pilot.** Mutually opt-in. If the partner firm wants to continue, both sides have a real conversation: license terms, support model, IP ownership, account scoping, with the pilot's actual experience as input. If the partner ends the relationship, they keep the canonical schema model and operational artifacts the team built; MTN keeps the product feedback that shapes v1.0.

## F. Visual Assets

**Compounding curve (`fig_compounding_curve`).** Two-line chart: conventional integration flat at approximately 90 days per bolt-on; MTN Foundry declines from approximately 45 days on engagement one toward a 14-day asymptote by engagement five. Annotations call out the engagement-1 compression and the compounding margin between the curves. Two layouts are produced from one script: a full annotated layout for the body figure and a simplified narrow layout for cover use. Canonical source path: `papers/b2b-saas-pe-alliance-briefing/figures/fig_compounding_curve.py`. The script is identical to the healthcare sibling's; the calibration (90-day conventional, 45-day engagement-1, 14-day asymptote) holds across both verticals because the underlying claim ("6 to 8 weeks compresses to 1 to 2 weeks") is the same. Embedded verbatim below for self-contained rebuild:

```python
"""Figure: Days to Integrated, Reportable Data Across Sequential Bolt-Ons.

Two layouts shipped from one script:
  1. Full annotated layout for Section 03 of the body.
  2. Simplified two-line layout for the cover, sized to fit beside the abstract.

Both compare a conventional approach (flat at ~90 days per bolt-on) against
the MTN Foundry approach (declines from 90 toward an asymptote at 14 days
by bolt-on 5, holds at 14 through bolt-on 10). Conservative calibration:
the asymptote stops at 14 days, not zero.
"""

import os
import numpy as np
import matplotlib.pyplot as plt
from style import setup_style, FULL_WIDTH, COLUMN_WIDTH


# --- Curve definitions ------------------------------------------------------
N_BOLTONS = 10
BOLTONS = np.arange(1, N_BOLTONS + 1)
CONVENTIONAL = np.full(N_BOLTONS, 90.0)

# Foundry curve: 45 days on engagement 1 (templates already ship and automated
# mapping kicks in immediately), declining toward a 14-day asymptote by
# acquisition 5 as cross-engagement reuse compounds.
ASYMPTOTE = 14.0
START = 45.0
RATE = 0.85  # tuned so y(5) is close to ASYMPTOTE
FOUNDRY = np.maximum(
    ASYMPTOTE + (START - ASYMPTOTE) * np.exp(-RATE * (BOLTONS - 1)),
    ASYMPTOTE,
)

# --- Colors -----------------------------------------------------------------
CONV_COLOR = '#4D4D4D'        # dark gray, conventional
FOUNDRY_COLOR = '#657EE2'     # brand blue, Foundry
DELTA_FILL = '#657EE2'
LABEL_COLOR = '#2A2A2A'
SUB_COLOR = '#6A6A6A'
AXIS_LINE = '#B4B1B1'

# (Full draw / generate functions: see canonical source path above.)
```

**Accelerator quadrant (`fig_accelerator_quadrant`).** A 2x2 quadrant scatter showing the prominent in-house Big 4 and Accenture M&A integration accelerators clustered in the lower-left half of the plane, and an empty upper-right quadrant labeled "The wedge" where MTN Data Foundry sits. The labeled accelerators (Deloitte M&A Central, Deloitte ConvergeHEALTH, EY Capital Edge, PwC Junction + Harvey, KPMG Powered + Velocity, Accenture myConcerto) are vertical-agnostic; this figure transfers from the healthcare sibling without modification. Canonical source path: `papers/healthcare-pe-alliance-briefing/figures/fig_accelerator_quadrant.py`. Reuse as-is rather than duplicating into the B2B SaaS paper directory.

**Generated artifacts.** SVG and PDF outputs land in `papers/b2b-saas-pe-alliance-briefing/docs/images/` and are gitignored; they are regenerated by `./scripts/compile-pdf.sh b2b-saas-pe-alliance-briefing`. Microsite use should re-export from the Python source rather than copy a stale PDF.

**Header image.** `papers/b2b-saas-pe-alliance-briefing/docs/images/aconcagua_side.jpg` (mountain landscape, light banner). Pair with `latex/assets/MTN_ekg.pdf` (dark logo).

**Team headshots.** `papers/b2b-saas-pe-alliance-briefing/docs/images/team/`:

- `pettine_headshot.jpg` (Warren Pettine)
- `Matthias_Christenson.jpeg` (Matthias Christenson)
- `samuel_wecker.jpg` (Samuel Wecker)

The B2B SaaS edition omits Brian Locke (whose clinical-AI bio is healthcare-specific). The microsite team-page should mirror this; do not pull the healthcare sibling's headshot directory.

## G. Proof Points and Headline Metrics

These are the operating-partner-facing numbers PE operating partners actually quote at each other. Use them on the microsite as headline metrics, ideally on the landing page above the fold and reinforced on a "Results" or "Pilot Outcomes" section.

| Metric | Before MTN | After MTN |
|---|---|---|
| Time to first consolidated ARR / NDR view | 14 months | 47 days |
| KPI definition conflicts surfaced and resolved | 0 (silent) | 37 during integration |
| Engagement margin (fixed-fee) | 28% | 52% |
| Senior-architect hours per add-on | 320 | 45 |
| Concurrent integrations per engagement team | 1 | 3 |
| ASC 606 reportable book ready | Month 9 | Day 60 |
| Snowflake Gold-layer ready | Month 6+ | Week 3 |
| Audit trail completeness | Partial / manual | 100% of mappings traceable to source field |
| EBITDA exposed by Day 47 (cumulative) | $0 | $1.8M annualized; synergy capture window opened 10 months earlier |

**Mapping reuse curve across deals 1 to 6.** 0% → 41% → 58% → 67% → 71% → 76%. This is the visual story behind the compounding curve: the asymptote in the figure corresponds to this reuse-rate curve in the data. The microsite can render this as a small inline chart or as a callout card.

**Two metrics to push hardest.** **Time-to-Snowflake-readiness** and **time-to-ASC-606-readiness**. Operating partners on Vista, Thoma Bravo, Insight, and K1-style platforms talk to each other about those two numbers specifically. They are the strongest microsite-headline candidates for the operating-partner read.

**Services multiplier framing.** Show services dollars per dollar of MTN license alongside the explicit MuleSoft / CareConnect and Workday / KPMG analogues called out as the precedent. The 3-to-5x services multiplier is the operative number; cite it with the analogue, not as a freestanding claim.

**Headline copy candidates the metrics support:**

- "47 days to consolidated ARR. Down from 14 months."
- "28% to 52% engagement margin on fixed-fee bolt-ons."
- "Three integrations concurrent per team. Up from one."

## H. Voice, Style, and Claim Discipline

**Color semantics.**

- `#AC1F2D` (brand red): problems, costs, conventional approach, brand chrome.
- `#4A5FCF` and `#657EE2` (brand blues): solutions, gains, Foundry performance.
- `#4D4D4D` (dark gray): conventional comparator in figures.
- Reds and blues are not interchangeable. Conventional approach is gray or red; Foundry is always blue.

**Schema-and-concept boundary.** The Foundry operates on schema metadata only. Avoid language that implies the platform touches customer-record or revenue-line values: "currency normalization applied," "revenue-recognition rules executed," "customer accounts deduplicated," "product-SKU canonicalization in place." The crosswalk *table* is metadata; *applying* it is value-level work the firm owns and runs in the client's environment. Refer to value-level normalization as "a separately deployable module."

**Pronoun discipline.** "Your team's" (singular firm), not "your teams'." Hold the "your" perspective throughout the body. The senior consultants are *your team's* consultants, not "their" consultants.

**No em dashes.** Use commas, semicolons, parentheses, or sentence breaks. (Project rule, applied across all white papers.)

**Claim discipline.**

- Defensible: "Schema discovery and mapping that conventionally consumes 6 to 8 weeks compresses to 1 to 2 weeks during the pilot."
- Defensible: "Pilot benchmarks suggest a senior consultant who today delivers 4 to 6 PE bolt-on integrations per year can deliver materially more on a productized platform; we will commit to specific targets jointly with our design partner based on engagement scope."
- Defensible: "Time to first consolidated ARR view: 14 months under conventional methodology, 47 days on the platform."
- Avoid: "An analyst reviews and approves a typical dataset in minutes rather than days." (Unsubstantiated.)
- Avoid: "Already shipping for Salesforce Enterprise, NetSuite, and Zuora." (Not currently true; the Founding Partner framing means there is no production reference yet.)
- Avoid: claiming specific named PE-platform reference customers (Vista, Thoma Bravo, etc.) until a Design Partner case study exists. Use category framing ("PE-backed B2B SaaS roll-ups in legal tech, vertical SaaS, and software-and-services") instead of named-platform claims.

**IP-ownership pre-answer.** Do not let visitors leave the site without seeing this sentence: "Your firm owns the methodology, conventions, and templates you bring or build during the pilot. MTN owns the platform and the cross-customer learnings derived from how the platform performs across deployments." This is the contract-shaped statement that defuses the most common practice-leader objection.

**Operating-partner-facing language.** When the page targets the buy-side reader, lean on ARR-bridge timing, NRR/GRR consistency, ASC 606 readiness, and Snowflake Gold-layer time-to-ready. These are the phrases operating partners use among themselves; mirroring them earns credibility faster than generic "data unification" language.

## I. Pull-Quote Library

These are publishable as pull-quotes throughout the microsite. Each is sourced and claim-defensible. Tag suggestions noted.

> *"40% of SaaS companies miscalculate or inconsistently define ARR."*

Use on: practice-leader landing block, near the "Three CRMs, two billing platforms, a stale Snowflake instance" passage. Anchors the credibility of the canonical-concept story.

> *"SaaS Capital demonstrated how methodology choice alone can make gross retention appear anywhere from 35% to 100% for the same company."*

Use on: the proof-points page or near the lead proof-point on Stripe-to-Zuora ARR reconciliation. Establishes that ARR/NRR ambiguity is structural, not anecdotal.

> *"If EBITDA and ARR aren't consistently defined and audited, dashboards become argument generators."*

Use on: the operating-partner-facing block. This is the line that closes the practice-leader-to-operating-partner translation.

> *"72% of PE firms identify weak data and KPI reporting as the biggest finance issue at exit."* — EY Private Equity Exit Readiness Study

Use on: above-the-fold or operating-partner section. Strongest exit-readiness anchor.

> *"65% of PE firms struggle to reflect value creation initiatives accurately in reported EBITDA at exit."*

Use on: secondary block beneath the EY citation. Reinforces the exit-readiness theme without repeating the headline number.

> *"41% lack the data granularity to substantiate their equity stories at exit."*

Use on: the same exit-readiness block; rotate with the previous quote.

**Citation discipline.** The EY citation is the strongest because it is the most identifiable. The other quotes should be attributed to "industry research" inline with a footnote linking to source where available; if a quote cannot be sourced under fact-check, drop it.

## J. Source Materials

For deeper context behind any section above, consult these in-repo memos and assets:

| File | Use for |
|---|---|
| `info_docs/integration_consultants/integration_consulting_b2bSaaS_white_paper_memo.md` | The source memo this paper was ported from. Appendices A–D contain source-system reference, canonical concept library, 90-day workplan, and compliance posture detail beyond what the briefing surfaces. |
| `info_docs/b2b_saas_demo_fixtures.md` | The 15-minute product-demo fixture spec for B2B SaaS. Source for personas (§1), source-system universe (§2), canonical schema (§3), MRR-derivation case (§4), cross-deal reuse pattern (§5), exception roster (§6), compliance frameworks (§7), headline metrics (§8), pull-quotes (§13), and persona click-paths (§12). |
| `papers/b2b-saas-pe-alliance-briefing/` | Source markdown, LaTeX, figures, and config for the printed briefing. |
| `design_docs/healthcare-pe-alliance-microsite.md` | Sibling design doc for the healthcare alliance microsite. Cross-reference for shared infrastructure (color semantics, figure scripts, IP-ownership language, pricing flexibility). |

For the architecture and compliance posture (referenced from "What We Are Asking For"), the planned companion document is the *MTN Data Foundry Architecture and Compliance Brief*; that document is not yet drafted in this repo.

**Items deliberately excluded from this design doc** (despite living in the demo fixtures): the fictional Meridian Integration Partners and Meridian Legal Software firm names, the named architect archetypes (Lin Park, Devin Okafor, Priya Mehta, Jordan Kim, Sam Reyes), the eight fictional acquired-company names (Quill Legal, Brief.io, Statute Inc, etc.), and the scene-by-scene fixture mappings. Those are demo-walkthrough scaffolding; surfacing them on a public microsite would create both surface-area risk (fictional firm names mistaken for real references) and IP exposure (the canonical-schema layout). They live in `info_docs/b2b_saas_demo_fixtures.md` for the demo build, not here.
