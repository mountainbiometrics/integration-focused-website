# Executive Summary

The senior consultants on your healthcare M&A team are exceptionally good at integrating disparate clinical and billing systems across PE-backed bolt-ons. The work is profitable, the methodology is real, and almost none of it carries to the next acquisition. Intellectual Property that should be accruing to your firm is being rebuilt by hand and walked out the door with each engagement.

The MTN Data Foundry augments your team's work with AI-assisted mapping that builds a semantic data model across sources. The Foundry operates on schema metadata: table and field names, data types, API documentation, internal data dictionaries, and your team's accumulated knowledge. Patient and financial data values stay in your client's environment; the platform never sees them.

- **Your talent focuses on the high-value work.** Schema discovery and mapping that conventionally consumes 6 to 8 weeks compresses to 1 to 2 weeks during the pilot.
- **Maintain your data model, even as the software changes.** The Foundry automatically detects drift and suggests new mappings.
- **Every engagement deposits IP into your firm's library.** The Foundry captures three reusable assets on each deal: the annotation conventions your seniors apply, the firm's own documented mapping knowledge, and a growing library of canonical concepts (`Patient.MRN`, `Claim.DenialReason`, `Provider.NPI`) that every future source maps against. Adding the tenth EHR does not require touching the first nine. By engagement five, the marginal cost of integration is reviewing a queue, not building from scratch.
# Your Team's Talent is Under-Leveraged

Your senior consultants know Epic Clarity, athenahealth, and eClinicalWorks at a level few in healthcare can match. They read clinical workflows and payer-segment ambiguity that no generalist consultancy gets right. That expertise is what your firm's reputation rests on.

But healthcare M&A integration is a slog. Three EHRs, two PM systems, a stale data warehouse, a PE sponsor's MD asking for payer mix across eight practices by Friday. The pipelines you build break silently when an EHR upgrade renames a column, and none of the work carries to the next bolt-on.

The PE sponsor's MD wants payer mix, days in AR, denial reasons, and provider productivity, comparable across the platform, refreshed before the next LP letter. Nothing about that ask is new. What is new is that it has to land eight times after eight closes, then nine, then ten, on a clock your firm does not control.

The Foundry takes the mechanical mapping layer off your senior consultants' desks: schema discovery, field-level annotation, and the canonical concept map that lets one source plug into a shared semantic layer instead of into every other source pairwise. The judgment work stays human (architecture, exception handling, clinical-fidelity calls), and value-level normalization stays where it belongs, in your firm's methodology and your client's data environment. The methodology your team applies is encoded once, audited, and carries into the next engagement.

## A Solution that Converges

**For the practice leader.** Concurrency lift on every senior consultant, fixed-fee margin lift on every engagement that can shift off T&M, and a productized accelerator that survives consultant turnover.

**For your senior integration architect.** The mechanical mapping work disappears; architecture, exception handling, and clinical-fidelity judgment stay human. Confidence scoring, audit logs, and the canonical schema model are visible and controllable.

**For your engagement partner with the named PE sponsor.** A faster commitment your competitors cannot credibly match. Your team owns the client relationship and the deliverable; MTN engineering deploys in support, not in front, ensuring the platform performs against the engagement's specifics.
# How the Foundry Works

The MTN Data Foundry is an AI-assisted data integration and normalization platform. Given a new source, it reasons over schema, software documentation, and your team's accumulated knowledge to discover the common data model and the mapping decisions that get there, with confidence scoring and human review on every key step.

The Foundry's integration technology operates on metadata: schema names, data types, API documentation, internal data dictionaries, and your team's accumulated knowledge. Patient and financial data values stay in your client's environment; the platform never sees them. This eliminates, rather than reduces, the PHI handling overhead that blocks most integration projects before they start. On top of that boundary, three AI-assisted capabilities replace the manual labor that consumes most of a conventional integration:

- **Annotations describing the function and intent of every table and field.** Your team spends hours painstakingly hunting down the meaning of columns in important but isolated tables. The MTN Data Foundry reasons over database structure, software documentation, organizational documents and your team's accumulated knowledge to annotate the database. Annotations are suggested by the system, flagged with confidence levels for human review. These can be used both by individuals, and super-power any software that uses the data.

- **Flexibly join data across sources.** Joining data across multiple sources involves manually wrangling tables from one form to another. Rather than building pairwise mappings between every source and every other source (the N×M explosion that consumes 65 to 75% of integration labor), the Foundry maps every source to a shared concept layer. Adding the tenth EHR does not require touching the first nine; maintenance stays manageable as the portfolio grows.

- **Self-healing maintenance.** When an upstream EHR adds or renames a field, the Foundry detects the deviation, proposes the updated mapping, and queues it for review rather than letting the integration break silently weeks later.

The platform is bounded to the schema-and-concept layer by design. Value-level normalization (applying ICD-9 to ICD-10 crosswalks, reconciling enum vocabularies, harmonizing payer-name variants) is a separately-deployable module that runs inside your client's environment when scope requires it. This white paper focuses on the schema-and-concept layer because that is where senior-consultant time is consumed and where productized methodology compounds across engagements.

# What the Accelerator Is

An accelerator is an asset with pre-built tooling, methodology stacks, and AI-enabled platforms that layer into M&A integration projects. Every engagement you enter draws on the accumulated knowledge of engagements past. With the MTN Data Foundry, that asset has several constituent parts:

1. **Annotation conventions, your firm's house style, encoded.** Every engagement, senior consultants confirm or edit field-level annotations: usage notes, display names, definitions, and the reasoning behind each mapping. These are structured, versioned artifacts with confidence scores attached. The next engagement starts pre-loaded with the firm's accumulated conventions, and the suggestion engine is calibrated against the firm's own gold-standard reviews.
2. **Internal documented knowledge, made operational.** The Foundry reasons over your firm's own integration playbooks, methodology decks, prior engagement deliverables, and internal data dictionaries, using them as context for mapping reasoning so first-pass annotations reflect your documented approach rather than a generic prior. Document libraries that previously lived dormant in SharePoint become active mapping intelligence on every engagement.
3. **Canonical concepts derived from past engagements.** A growing library of stable business objects (`Patient.MRN`, `Encounter.EncounterType`, `Claim.DenialReason`, `Provider.NPI`, `Practice.RVU`) that every future source maps against. By engagement five, the library has crystallized around your firm's vertical (MSO consolidation, dental DSO, behavioral health, RCM rollups), and the marginal cost of the next bolt-on falls toward the cost of reviewing a queue.
4. **Vendor-schema drift signatures and reviewer feedback loops.** When an upstream EHR renames a field in a quarterly release, the Foundry's correction is captured and applies firm-wide. Every approve, reject, or edit decision a senior consultant makes becomes labeled training data calibrating the system for your firm's standards.

The MTN Data Foundry accelerates work during the pilot period, and value compounds with every subsequent engagement. Pilot benchmarks suggest a senior consultant who today delivers 4 to 6 PE bolt-on integrations per year can deliver materially more on a productized platform, at higher margin per deal. We will commit to specific targets jointly with our design partner based on engagement scope.

## What Engagement One Looks Like

The conventional first integration on a typical PE bolt-on takes roughly three months. The Foundry compresses that work substantially on engagement one, before any cross-engagement compounding has kicked in. Engagement one delivers a canonical concept map across the in-scope source systems and a queryable semantic layer your team can build the PE-sponsor deliverable on top of. MTN's engineering talent deploys in support of your team, ensuring the Data Foundry delivers.
# What Success Looks Like

A successful pilot produces:

- Detailed annotations for every table and field, facilitating both general business intelligence and the use of advanced AI tooling.
- A clear mapping of data sources to either a target schema, or canonical set of concepts.
- A unified payer-mix and KPI dashboard delivered to the PE sponsor, built on the canonical concept map the Foundry produces, with your firm's normalization and clinical-fidelity rules applied in your delivery environment.
- An audit log of every transform applied.

After the pilot, the relationship is mutually opt-in. Whether you continue or not, you keep your annotation conventions, methodology playbooks, vertical templates, and engagement deliverables, exported as portable JSON manifests. MTN keeps the platform and the learnings about how it performs across deployments. License terms, support model, and account scoping for an ongoing relationship are documented in the design partner term sheet, available on request.
# What We Are Asking For

We are seeking our first healthcare-M&A integration design partner. The terms below reflect that: discounted, scope-bounded, and structured to build a case study together.

Three concrete asks over the next 90 days.

1. A 30-minute scoping conversation with the M&A practice leader for healthcare and the engagement lead for an upcoming PE bolt-on, to confirm whether the Foundry's current EHR and PM coverage matches the engagement.
2. Identification of a candidate engagement in your firm's pipeline (MSO consolidation, dental services, behavioral health, ambulatory surgery, RCM rollups, payer integration) that could host the 90-day pilot.
3. A 90-day Design Partner agreement covering platform license discount, engineering support and other key details. Draft term sheet ready for review.

No exclusive in either direction.

For the platform's technical architecture and compliance posture, request the *MTN Data Foundry Architecture and Compliance Brief*.
# About MTN

MTN is a team with deep expertise in healthcare data infrastructure, machine learning, and clinical informatics. The founding team includes a physician-researcher and experienced engineers who have built semantic mapping systems from the ground up, with active research support for extending the platform into clinical decision modeling.

## Technical Leadership

Our team's work has been published in Nature journals, PNAS, JMIR, Chest, PLoS Computational Biology, The Royal Society, and other leading venues.

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
\textbf{Warren Pettine, MD, Co-Founder and CEO.} Assistant Professor at the University of Utah where he leads the Medical Machine Intelligence (M$^2$Int) Lab. Trained in machine learning research at Harvard, Stanford, NYU, and Yale. Prior health policy experience in the U.S. Congress and service on the University of Utah Institutional Review Board ground MTN's approach in policy and regulatory expertise.
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
\textbf{Matthias Christenson, PhD, AI Architect.} Investigator with the M$^2$Int Lab. PhD and postdoctoral research at Columbia University in computational ML, with prior industry experience as a Deep Learning Research Engineer at DeepLife training foundational models on genomic and biometric data. Leads MTN's technical architecture design and data model development.
\end{minipage}

\vspace{0.7\baselineskip}

\noindent
\begin{minipage}[t]{0.38\columnwidth}
\vspace{0pt}
\oldincludegraphics[width=\linewidth]{team/Brian_Locke.jpg}
\end{minipage}%
\hfill
\begin{minipage}[t]{0.58\columnwidth}
\vspace{0pt}
\textbf{Brian Locke, MD, MSCI, Clinical AI Lead.} Investigator with the M$^2$Int Lab. Active ICU physician and Assistant Professor at Intermountain Healthcare, bringing firsthand understanding of clinical workflows across academic medical centers and integrated delivery networks. Provides the methodological rigor for the clinical and operational implications of MTN's technology.
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

The white paper targets three primary personas at healthcare M&A integration consulting firms.

### Practice Leader / Service Line Head (primary target)

**Role.** P&L owner for the practice deploying MTN. At boutiques: Managing Partner running EHR Implementation, Interoperability, or Mergers and System Consolidation. At PE-advisory: Head of M&A Practice or Head of Private Equity Practice. At Big 4: Partner running M&A Integration service line.

**Top three pains (verbatim from persona research):**

1. PE clients demanding faster integration timelines and EBITDA realization.
2. Talent constraints on senior architects and Epic, athena, MEDITECH-certified consultants.
3. Margin compression as PE sponsors consolidate vendors.

**Currently evaluated against:** MuleSoft, Boomi, Informatica (existing alliances); in-house manual mapping; competitors bidding with MTN.

**Buyer-signal phrases (use in microsite copy):**

- "Productized practice" (analogue: KPMG's KLAS-rated Workday practice).
- "3 to 5x services multiplier."
- "Fixed-fee outcome-based pricing."
- "Flat maintenance cost as portfolio size grows."

**Objections to pre-empt:**

- "If MTN automates 70 percent of the work, what happens to my utilization?"
- "How do I price a fixed-fee engagement when my historical estimating model assumes manual mapping?"
- "Does this commoditize my practice or differentiate it?"
- "Why are the largest health systems not already demanding we use it?"

### Engagement Partner / Managing Director

**Role.** Relationship owner for the named PE sponsor or portfolio company CEO. Final call on engagement staffing, scope, pricing, tooling. Titles: Lead Client Service Partner, Client Account Lead, Senior Director, Principal.

**Top three pains:**

1. Manual schema mapping is the most common cause of integration delay on PE add-on deals.
2. Accountable to the PE sponsor for slipped timelines and cost overruns.
3. Reputational risk of deploying an unproven platform on a mission-critical engagement.

**Currently evaluated against:** Competitor firms' tooling capabilities; internal architect availability; the manual in-house baseline.

**Buyer-signal phrases:**

- "Faster timeline than competitors can credibly promise."
- "Compressed 90-day integrations to 14 to 21 days while improving margin."
- "On-deal partner enablement so your team is the hero."
- Reference clients in PE-backed healthcare and insurance roll-ups.

**Objections to pre-empt:**

- "I cannot put an unproven platform on my Q4 close-out engagement; what is your reference book in PE-backed healthcare specifically?"
- "Who configures and maintains this on-deal, and what happens if your team is unavailable?"
- "What does the BAA structure look like?"
- "If we lose this client, who eats the cost?"

### Integration Architect / Data Engineer (technical champion)

**Role.** Hands-on technical lead. Designs source-to-target mappings, data normalization, pipeline architecture. Often holds Epic, MEDITECH, or athenahealth certifications and HL7 / FHIR fluency. The actual day-to-day Foundry user.

**Top three pains:**

1. Profiling source schemas, building lookup tables, writing transformation logic takes days or weeks.
2. Reconciling ambiguous fields is the lowest-leverage part of the job.
3. Repeatedly validating the same Epic-to-Epic or Epic-to-athena mappings across deals.

**Currently evaluated against:** Manual schema mapping tools; spreadsheets and custom scripts; competitor architects' approaches.

**Buyer-signal phrases:**

- "Confidence-scored AI mappings you review and approve."
- "Replace the work you hate, keep the architecture work you love."
- "Become lead architect on 3x more integrations per year."
- Audit trails and human-in-the-loop validation.

**Objections to pre-empt:**

- "I do not trust black boxes; show me the mapping logic."
- "How does it handle ambiguous fields where two source columns plausibly map to one target?"
- "What is the human-in-the-loop workflow for low-confidence matches?"
- "Where is the audit log?"

### Pain-intensity ranking (background context)

| Persona | Threat perception | Notes |
|---|---|---|
| Engagement Manager | High | Span of control shrinks; promotion path narrows. |
| Junior Consultant | High in absolute terms, lower in influence | Entry-level mapping work disappears. |
| Practice Leader | Medium | Productivity upside vs. revenue cannibalization risk. |
| Talent / Resource Manager | Medium | Utilization compression risk. |
| Integration Architect | Medium | Job-security anxiety offset by craft satisfaction. |
| Clinical Interoperability Specialist | Low to Medium | Mechanical validation work disappears; clinical judgment remains. |
| Engagement Partner | Low to Medium | Reputational risk on first deals. |
| Alliance Leader | Low | Incentives aligned with high-leverage partners. |

### Landing-page guidance

Lead with the **Practice Leader** as primary persona. Per the persona research: the practice leader is effectively the buyer; they control budget, alliance posture, and engagement-level deployment. Secondary entry points are the Integration Architect (technical champion) and the Engagement Partner with a named PE-sponsor relationship (on-deal decision-maker).

The unifying thread across all three is the **MuleSoft / Workday analogue**: position the Foundry as the platform layer that enabled Deloitte's CareConnect on MuleSoft and KPMG's KLAS-rated practice on Workday. The microsite copy should use that pattern, framing the Foundry as a growth multiplier rather than a threat to billable hours.

## B. Strategic Positioning

**Headline frame.** Turn integration labor into compounding IP. The work senior consultants do today is rebuilt by hand on every engagement; the Foundry captures it as portable artifacts that compound across deals.

**Founding Partner framing.** This is MTN's first healthcare-M&A integration design partner. The terms reflect that: discounted, scope-bounded, and structured to build a case study together. The microsite should foreground the "first design partner" framing rather than implying mature reference customers exist.

**MuleSoft / Workday analogue.** The strongest comparable: Deloitte's CareConnect was built on MuleSoft; KPMG's KLAS-rated practice was built on Workday. Both are platform-anchored services accelerators that grew the partner firm's revenue. The microsite copy should use that pattern, not a "Big 4 disruption" pattern.

**What MTN is not.**

- Not an EHR replacement.
- Not a PHI-touching analytics platform; the Foundry operates on schema metadata, not patient or financial data values.
- Not a generalist data fabric; the platform is bounded to the schema-and-concept layer by design.

## C. Wave Outreach Map [INTERNAL]

This section is internal positioning to inform copy and case-study choices. It should not appear verbatim on the public microsite.

**Wave 1 (now, 2026): Founding Partner economics.**

| Firm | Rationale |
|---|---|
| Accordion | Highly alliance-receptive. Charlesbank and Motive ownership reward visible new alliances. The Merilytics-led Data and Analytics practice and the ToneyKorf-led healthcare turnaround team create a credible PE-rollup-and-healthcare narrative. |
| West Monroe | Largest M&A practice in the set (approximately 500 deals per year). Mizu Databricks Accelerator demonstrates comfort with co-branded data accelerators. Named SVP of Global Alliances is a stable entry path. |
| Nordic Global | Highest healthcare brand gravity in the set after Tegria. The 2024 to 2025 alliance cadence (ServiceNow, Clearsense, BeeKeeperAI, CLEAR) signals appetite for category partners. |

**Wave 2** (after the first KLAS or Forrester signal, ~$25M ARR or two named recognition events): Impact Advisors, Chartis, Crosslake Technologies, Cherry Bekaert; PwC and KPMG delivery channels. Strong practice depth; will join once a Wave 1 reference exists and the platform's ecosystem has visibly expanded.

**Wave 3** (2027 onward): Tegria, FTI Consulting, CereCore. Joining at a later stage due to firm-specific timing (post-acquisition transition, alliance posture, parent-firm structure).

## D. Vertical Context

The accelerator targets six PE-bolt-on verticals: **MSO consolidation, dental DSO, behavioral health, ambulatory surgery, RCM rollups, payer integration**.

**Why each is hot.** System fragmentation is structural. A typical 10-practice MSO platform runs across 4 to 6 EHR systems (Epic, athenahealth, eClinicalWorks, NextGen, Greenway, AdvancedMD), 2 to 3 practice-management systems, 2 to 3 RCM platforms, and 1 to 2 patient-engagement layers. The ninth bolt-on routinely adds a tenth EHR variant. HIPAA, the 21st Century Cures Act, information-blocking rules, state-specific data-sharing constraints, and payer-specific data-exchange requirements compound the burden. Typical PE hold is 4 to 6 years; roughly 30 percent of US PE portfolio companies are now held seven or more years. The integration tax compounds against a clock the consulting firm does not control.

**Typical PE sponsors.** Mid-market PE (~$100M to $1B in committed capital), infrastructure PE, and strategic acquirers. The consulting firm already maintains those sponsor relationships; the lead path is firm-internal, not direct-to-sponsor.

**Lead proof-point: Epic-to-athena payer-mix reconciliation.** A PE sponsor wants payer mix comparable across multiple practices. Epic identifies payer at encounter level via `PAT_ENC.PRIMARY_PAYOR_ID`, joined to `CLARITY_EPM.PAYOR_NAME` and `BENEFIT_PLAN`. athenahealth identifies payer at appointment level via `appointment.insurancepackageid`, joined to `insurancepackage.payerid` and `payer.name`. The Foundry's healthcare reference template normalizes both onto a canonical `payer_mix(encounter_id, primary_payer, plan, product, financial_class, payer_segment)` model with confidence-scored mappings and human review on ambiguous cases (Medicare Advantage plans crosswalking to commercial vs. government segment). A unified payer-mix dashboard across eight practices is a Day 100 deliverable on the platform; the same dashboard on the ninth bolt-on is a Day 500 deliverable under conventional methodology, a 5x compression on time-to-insight.

## E. Pilot Mechanics and Term-Sheet Outline

**Volume target.** Three to five Design Partners across different consulting firms in 2026, each deployed on a different PE bolt-on engagement. **No exclusivity in either direction.**

**Structure.** 90-day Design Partner pilot on a single PE bolt-on engagement. Single engagement, mutually opt-in continuation, Design Partner discount on the first engagement.

**What MTN brings.**

- Productized data fabric with healthcare schema templates covering provider, NPI, patient, encounter, charge, claim, payer mix, RVU, contract terms, RCM KPIs across major EHR and PM systems.
- Multi-tenant, configuration-light platform deployment with a persistent post-Day-100 data plane that survives engagement demobilization.
- Confidence-scored mappings with human-in-the-loop review, immutable audit log, HL7 v2 and FHIR R4 coverage at GA.
- Self-service licensability decoupled from any partner-led engagement; the partner controls the customer relationship.
- Direct MTN engineering support during the pilot, a named engineer paired with the partner team for the duration, not arms-length tier-one support.

**What the partner brings.** Healthcare M&A methodology, KLAS-rated implementation experience, named PE sponsor relationships, vertical credibility. A co-developed accelerator with partner-owned methodology and MTN-owned platform extension.

**IP ownership model (contract-binding).**

- The partner owns the methodology, business-logic templates, and configuration assets.
- MTN owns the platform-native artifacts.
- The partner can resell its accelerator only on top of MTN licenses.
- MTN does not develop competing methodology assets in the partner's named verticals.
- This is the same split that protected Deloitte's CareConnect and Member Connect investments inside the MuleSoft ecosystem.

**Scope boundaries.** One named engagement covering one PE bolt-on acquisition. The engagement lives inside the partner's existing engagement structure; MTN provides engineering support and a discounted platform license for the pilot phase. The Design Partner agreement covers the platform license discount, the engineering support arrangement, IP ownership during the pilot, and reference rights. Draft term sheet covers: services margins, named-account rights, MDF, certification track design, IP ownership.

**Pricing flexibility.** The Founding Partner program supports T&M, fixed-fee, and outcome-based pricing on the partner side. A vendor that compresses billable hours is structurally threatening to a utilization-bonus practice unless paired with an explicit alternative pricing path. The platform license is the Foundry's revenue line; the partner's revenue line is whichever pricing motion fits the deal.

**What the pilot produces.**

- A unified payer-mix and KPI dashboard across the bolt-ons in scope, refreshed weekly, signed off by the PE sponsor's deal team.
- A documented canonical schema model for the EHR and PM systems used in the engagement.
- An audit log and provenance record covering every transform applied.
- A co-authored case study, drafted with the partner, ready to use in future PE-sponsor pitches.
- A clear yes-or-no decision from the partner firm about deploying the Foundry on a subsequent bolt-on.

**After the pilot.** Mutually opt-in. If the partner firm wants to continue, both sides have a real conversation: license terms, support model, IP ownership, account scoping, with the pilot's actual experience as input. If the partner ends the relationship, they keep the canonical schema model and operational artifacts the team built; MTN keeps the product feedback that shapes v1.0.

## F. Visual Assets

**Compounding curve (`fig_compounding_curve`).** Two-line chart: conventional integration flat at approximately 90 days per bolt-on; MTN Foundry declines from approximately 45 days on engagement one toward a 14-day asymptote by engagement five. Annotations call out the engagement-1 compression and the compounding margin between the curves. Two layouts are produced from one script: a full annotated layout for the body figure and a simplified narrow layout for cover use. Canonical source path: `papers/healthcare-pe-alliance-briefing/figures/fig_compounding_curve.py`. Embedded verbatim below for self-contained rebuild:

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
# acquisition 5 as cross-engagement reuse compounds. Two effects shown in one
# curve: the immediate first-engagement compression (45 vs. 90) and the
# subsequent compounding from acquisition 2 onward.
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


def _draw_curves(ax, simplified=False):
    """Draw the two curves on the given axis."""
    # Shaded delta between curves (only in full layout)
    if not simplified:
        ax.fill_between(BOLTONS, FOUNDRY, CONVENTIONAL,
                        color=DELTA_FILL, alpha=0.13, zorder=1,
                        label='_nolegend_')

    # Conventional line
    ax.plot(BOLTONS, CONVENTIONAL, color=CONV_COLOR,
            linewidth=2.4 if not simplified else 1.8,
            label='Conventional integration',
            zorder=3, solid_capstyle='round')

    # Foundry line
    ax.plot(BOLTONS, FOUNDRY, color=FOUNDRY_COLOR,
            linewidth=2.6 if not simplified else 2.0,
            label='MTN Foundry',
            zorder=3, solid_capstyle='round',
            marker='o' if not simplified else None,
            markersize=4, markeredgecolor='white', markeredgewidth=0.8)

    ax.set_xlim(0.6, N_BOLTONS + 0.4)
    ax.set_ylim(0, 105)
    ax.set_xticks(range(1, N_BOLTONS + 1))


def _generate_full(output_path):
    """Full annotated layout for Section 03 body figure."""
    setup_style()

    fig, ax = plt.subplots(figsize=(FULL_WIDTH, 3.6))
    _draw_curves(ax, simplified=False)

    # --- Inline labels at the right end of each line ---
    ax.text(N_BOLTONS + 0.15, CONVENTIONAL[-1],
            f'  {int(CONVENTIONAL[-1])} days',
            va='center', ha='left', fontsize=13.0,
            color=CONV_COLOR, fontweight='bold')
    ax.text(N_BOLTONS + 0.15, FOUNDRY[-1],
            f'  ~{int(round(FOUNDRY[-1]))} days',
            va='center', ha='left', fontsize=13.0,
            color=FOUNDRY_COLOR, fontweight='bold')

    # --- Engagement-one callout: the immediate compression ---
    ax.annotate(f'Engagement 1\n~{int(round(FOUNDRY[0]))} days',
                xy=(BOLTONS[0], FOUNDRY[0]),
                xytext=(BOLTONS[0] + 0.4, FOUNDRY[0] + 14),
                fontsize=11.8, color=FOUNDRY_COLOR, style='italic',
                ha='left', va='bottom',
                arrowprops=dict(arrowstyle='-',
                                color=FOUNDRY_COLOR, lw=0.7,
                                alpha=0.8))

    # --- Curve identifications above the lines ---
    ax.text(5.0, CONVENTIONAL[4] + 4.5,
            'Conventional integration',
            va='bottom', ha='center', fontsize=13.0,
            color=CONV_COLOR, fontweight='bold')
    ax.text(6.5, FOUNDRY[5] - 7,
            'MTN Foundry',
            va='top', ha='left', fontsize=13.0,
            color=FOUNDRY_COLOR, fontweight='bold')

    # --- Compounding margin annotation (positioned away from engagement-1 callout) ---
    midpoint_x = 8.0
    margin_top = float(CONVENTIONAL[int(midpoint_x) - 1])
    margin_bottom = float(FOUNDRY[int(midpoint_x) - 1])
    midpoint_y = (margin_top + margin_bottom) / 2
    ax.annotate('compounding margin',
                xy=(midpoint_x, midpoint_y),
                xytext=(midpoint_x - 1.5, midpoint_y + 12),
                fontsize=12.0, color=FOUNDRY_COLOR, style='italic',
                ha='center',
                arrowprops=dict(arrowstyle='-',
                                color=FOUNDRY_COLOR, lw=0.7,
                                alpha=0.8))

    # --- Axes ---
    ax.set_xlabel('Bolt-on number', fontsize=13.4, color=LABEL_COLOR)
    ax.set_ylabel('Days to integrated, reportable data',
                  fontsize=13.4, color=LABEL_COLOR)
    ax.tick_params(axis='both', labelsize=12.0, colors=SUB_COLOR)
    for side in ('left', 'bottom'):
        ax.spines[side].set_color(AXIS_LINE)

    fig.savefig(output_path, format='svg')
    plt.close(fig)
    print(f'  Generated: {output_path}')


def _generate_simplified(output_path):
    """Simplified narrow layout for the cover page."""
    setup_style()

    fig, ax = plt.subplots(figsize=(COLUMN_WIDTH * 1.4, 1.8))
    _draw_curves(ax, simplified=True)

    # --- Minimal axis labeling ---
    ax.set_xlabel('Bolt-on number', fontsize=8.4, color=SUB_COLOR)
    ax.set_ylabel('Days', fontsize=8.4, color=SUB_COLOR)
    ax.tick_params(axis='both', labelsize=7.6, colors=SUB_COLOR)
    ax.set_xticks([1, 5, 10])  # only bookend ticks for compactness
    ax.set_yticks([0, 30, 60, 90])

    # Inline labels for the two endpoints (no full legend)
    ax.text(N_BOLTONS, CONVENTIONAL[-1] + 4,
            'Conventional', va='bottom', ha='right',
            fontsize=8.0, color=CONV_COLOR, fontweight='bold')
    ax.text(N_BOLTONS, FOUNDRY[-1] - 4,
            'Foundry', va='top', ha='right',
            fontsize=8.0, color=FOUNDRY_COLOR, fontweight='bold')

    for side in ('left', 'bottom'):
        ax.spines[side].set_color(AXIS_LINE)

    fig.savefig(output_path, format='svg')
    plt.close(fig)
    print(f'  Generated: {output_path}')


def generate(output_path):
    """Generate both layouts. The output_path argument names the full layout;
    the simplified layout is placed alongside with a `_simplified` suffix."""
    _generate_full(output_path)

    base, ext = os.path.splitext(output_path)
    simplified_path = f'{base}_simplified{ext}'
    _generate_simplified(simplified_path)


if __name__ == '__main__':
    out = os.path.join(os.path.dirname(__file__), '..', 'docs', 'images',
                       'fig_compounding_curve.svg')
    generate(out)
```

**Accelerator quadrant (`fig_accelerator_quadrant`).** A 2x2 quadrant scatter showing the five most prominent in-house Big 4 and Accenture M&A integration accelerators clustered in the lower-left half of the plane, and an empty upper-right quadrant labeled "The wedge" where MTN Data Foundry sits. The visual story: the productized + deep-data category is structurally available to a Founding Partner who builds on top of MTN. Canonical source path: `papers/healthcare-pe-alliance-briefing/figures/fig_accelerator_quadrant.py`. Embedded verbatim below:

```python
"""Figure: Accelerator Positioning, Data Integration Depth vs. Productization.

A 2x2 quadrant scatter showing the five most prominent in-house Big 4 and
Accenture M&A integration accelerators clustered in the lower-left half of
the plane, and an empty upper-right quadrant labeled 'The wedge' where MTN
Data Foundry sits. The visual story: the productized + deep-data category
is structurally available to a Founding Partner who builds on top of MTN.
"""

import os
import numpy as np
import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle
from style import setup_style, FULL_WIDTH, MAINCOLOR


# --- Marker positions (x, y, label) -----------------------------------------
# Axes: x = methodology-only (0) -> proprietary data plane (1)
#       y = engagement-bound (0) -> multi-tenant SaaS (1)
ACCELERATORS = [
    (0.30, 0.62, 'Deloitte\nM&A Central'),
    (0.55, 0.70, 'Deloitte\nConvergeHEALTH'),
    (0.32, 0.65, 'EY Capital Edge'),
    (0.40, 0.72, 'PwC Junction\n+ Harvey'),
    (0.50, 0.40, 'KPMG Powered\n+ Velocity'),
    (0.55, 0.45, 'Accenture\nmyConcerto'),
]
MTN_POS = (0.85, 0.85)

# --- Colors -----------------------------------------------------------------
WEDGE_FILL = '#657EE2'     # brand blue, used at low alpha for the empty quadrant
WEDGE_LABEL = '#3F4F9E'    # darker blue for the wedge label
MARKER_GRAY = '#4D4D4D'    # neutral marker color for the Big 4/Accenture set
MTN_COLOR = MAINCOLOR      # red marker for MTN
LABEL_COLOR = '#2A2A2A'
SUB_COLOR = '#6A6A6A'
AXIS_LINE = '#B4B1B1'


def generate(output_path):
    setup_style()

    fig, ax = plt.subplots(figsize=(FULL_WIDTH, 4.4))

    # --- Wedge shading: upper-right quadrant ---
    ax.add_patch(Rectangle(
        (0.5, 0.5), 0.5, 0.5,
        facecolor=WEDGE_FILL, alpha=0.13, edgecolor='none', zorder=1))
    # Subtle diagonal hint at the wedge label
    ax.text(0.78, 0.93, 'The wedge',
            ha='center', va='center', fontsize=11.5,
            color=WEDGE_LABEL, fontweight='bold', zorder=4)
    ax.text(0.78, 0.895, '(Productized + Deep Data)',
            ha='center', va='center', fontsize=8.4,
            color=WEDGE_LABEL, style='italic', zorder=4)

    # --- Quadrant divider lines ---
    ax.axhline(0.5, color=AXIS_LINE, linewidth=0.8, zorder=2)
    ax.axvline(0.5, color=AXIS_LINE, linewidth=0.8, zorder=2)

    # --- Big 4 / Accenture markers ---
    for x, y, label in ACCELERATORS:
        ax.scatter(x, y, s=42, color=MARKER_GRAY,
                   edgecolor='white', linewidth=0.6, zorder=4)
        # Place label slightly offset up-right; tweak per-marker if needed
        ax.text(x + 0.018, y + 0.018, label,
                ha='left', va='bottom', fontsize=8.2,
                color=LABEL_COLOR, linespacing=1.15, zorder=5)

    # --- MTN marker ---
    mx, my = MTN_POS
    ax.scatter(mx, my, s=110, color=MTN_COLOR,
               edgecolor='white', linewidth=1.0, zorder=6,
               marker='*')
    ax.text(mx - 0.02, my - 0.025, 'MTN Data Foundry',
            ha='right', va='top', fontsize=9.0,
            color=MTN_COLOR, fontweight='bold', zorder=6)

    # --- Axis labels and ticks ---
    ax.set_xlim(0, 1)
    ax.set_ylim(0, 1)
    ax.set_xticks([0.0, 0.5, 1.0])
    ax.set_yticks([0.0, 0.5, 1.0])
    ax.set_xticklabels(['Methodology only', '', 'Proprietary data plane'],
                       fontsize=8.6, color=SUB_COLOR)
    ax.set_yticklabels(['Engagement-bound', '', 'Persistent platform'],
                       fontsize=8.6, color=SUB_COLOR, rotation=90, va='center')
    ax.set_xlabel('Data integration depth', fontsize=9.6, color=LABEL_COLOR)
    ax.set_ylabel('Productization', fontsize=9.6, color=LABEL_COLOR)

    # --- Quadrant background labels (corners) ---
    ax.text(0.02, 0.98, 'Productized,\nshallow data',
            ha='left', va='top', fontsize=7.6, color=SUB_COLOR,
            style='italic', linespacing=1.2)
    ax.text(0.98, 0.02, 'Deep data,\nproject-bound',
            ha='right', va='bottom', fontsize=7.6, color=SUB_COLOR,
            style='italic', linespacing=1.2)
    ax.text(0.02, 0.02, 'Methodology +\nshallow data',
            ha='left', va='bottom', fontsize=7.6, color=SUB_COLOR,
            style='italic', linespacing=1.2)

    # --- Grid off (we use quadrant lines instead) ---
    ax.grid(False)

    # Spine color
    for side in ('top', 'right', 'left', 'bottom'):
        ax.spines[side].set_visible(side in ('left', 'bottom'))
        if side in ('left', 'bottom'):
            ax.spines[side].set_color(AXIS_LINE)

    # --- Footnote ---
    fig.text(0.01, -0.02,
             'Position estimates from public product documentation '
             '(2024 to 2026). Axes reflect data integration depth and '
             'whether the platform persists across engagements.',
             fontsize=6.6, color=SUB_COLOR, style='italic', ha='left')

    fig.savefig(output_path, format='svg')
    plt.close(fig)
    print(f'  Generated: {output_path}')


if __name__ == '__main__':
    out = os.path.join(os.path.dirname(__file__), '..', 'docs', 'images',
                       'fig_accelerator_quadrant.svg')
    generate(out)
```

**Generated artifacts.** SVG and PDF outputs land in `papers/healthcare-pe-alliance-briefing/docs/images/` and are gitignored; they are regenerated by `./scripts/compile-pdf.sh healthcare-pe-alliance-briefing`. Microsite use should re-export from the Python source rather than copy a stale PDF.

**Header image.** `papers/healthcare-pe-alliance-briefing/docs/images/aconcagua_side.jpg` (mountain landscape, light banner). Pair with `latex/assets/MTN_ekg.pdf` (dark logo).

**Team headshots.** `papers/healthcare-pe-alliance-briefing/docs/images/team/`:

- `pettine_headshot.jpg` (Warren Pettine)
- `Matthias_Christenson.jpeg` (Matthias Christenson)
- `Brian_Locke.jpg` (Brian Locke)
- `samuel_wecker.jpg` (Samuel Wecker)

## G. Voice, Style, and Claim Discipline

**Color semantics.**

- `#AC1F2D` (brand red): problems, costs, conventional approach, brand chrome.
- `#4A5FCF` and `#657EE2` (brand blues): solutions, gains, Foundry performance.
- `#4D4D4D` (dark gray): conventional comparator in figures.
- Reds and blues are not interchangeable. Conventional approach is gray or red; Foundry is always blue.

**Schema-and-concept boundary.** The Foundry operates on schema metadata only. Avoid language that implies the platform touches patient or financial data values: "format normalization," "M/F reconciliation," "clean the values," and "ICD-9-to-ICD-10 crosswalks applied" are off-limits. The crosswalk *table* is metadata; *applying* it is value-level work the firm owns and runs in the client's environment. Refer to value-level normalization as "a separately deployable module."

**Pronoun discipline.** "Your team's" (singular firm), not "your teams'." Hold the "your" perspective throughout the body. The senior consultants are *your team's* consultants, not "their" consultants.

**No em dashes.** Use commas, semicolons, parentheses, or sentence breaks. (Project rule, applied across all white papers.)

**Claim discipline.**

- Defensible: "Schema discovery and mapping that conventionally consumes 6 to 8 weeks compresses to 1 to 2 weeks during the pilot."
- Avoid: "An analyst reviews and approves a typical dataset in minutes rather than days." (Unsubstantiated.)
- Avoid: "Already shipping for Epic Clarity and athenahealth Practice Management." (Not currently true.)
- Defensible: "Pilot benchmarks suggest a senior consultant who today delivers 4 to 6 PE bolt-on integrations per year can deliver materially more on a productized platform; we will commit to specific targets jointly with our design partner based on engagement scope."

**IP-ownership pre-answer.** Do not let visitors leave the site without seeing this sentence: "Your firm owns the methodology, conventions, and templates you bring or build during the pilot. MTN owns the platform and the cross-customer learnings derived from how the platform performs across deployments." This is the contract-shaped statement that defuses the most common objection.

## H. Source Materials

For deeper context behind any section above, consult these in-repo memos:

| File | Use for |
|---|---|
| `info_docs/integration_consultants/integration_consultants_personas.md` | Full persona detail, including secondary roles not addressed in the body. |
| `info_docs/integration_consultants/wave_outreach_map.md` | Firm targeting and timing logic. |
| `info_docs/integration_consultants/healthcare_pe_alliance_white_paper_plan.md` | Pilot mechanics, term-sheet items, IP ownership language. |
| `info_docs/integration_consultants/integration_consulting_white_paper_memo.md` | Vertical positioning and proof-point research. |
| `design_docs/healthcare-pe-alliance_critique.md` | Reviewer critique applied to the body; reflects current claim discipline. |
| `papers/healthcare-pe-alliance-briefing/` | Source markdown, LaTeX, figures, and config for the printed briefing. |

For the architecture and compliance posture (referenced from "What We Are Asking For"), the planned companion document is the *MTN Data Foundry Architecture and Compliance Brief*; that document is not yet drafted in this repo.
