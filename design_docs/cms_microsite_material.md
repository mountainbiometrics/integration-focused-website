# CMS Microsite - Complete Content Reference

This document contains all material from the CMS white papers (Executive Edition and Technical Edition) for use in designing and building the CMS microsite.

---

## Paper 1: Executive Edition

**Title:** COMPLIANCE TO CAPABILITY
**Subtitle:** Why Your CMS Interoperability Spend Is Not Producing Returns Yet
**Edition:** EXECUTIVE EDITION
**Document Number:** MTN-WP-003-EXEC-v0
**Company:** MTN (www.themtn.ai)
**Brand Color:** #AC1F2D

---

### Executive Summary

CMS interoperability mandates require Medicare Advantage plans to build FHIR APIs for provider access, payer-to-payer exchange, and electronic prior authorization, at an estimated industry cost of $1.55 billion over ten years. Compliance deadlines begin January 2026 for operational provisions and January 2027 for API requirements. The infrastructure is being built. The money is being spent.

But compliance is not capability. Data is flowing through the new APIs. It is not usable. Star Ratings still depend on manual chart chase. Risk adjustment diagnoses do not survive normalization. Prior authorization submissions arrive in formats too inconsistent for auto-adjudication. Plans are paying for connectivity without getting capability, and four revenue pools are at risk: Star Ratings bonuses worth hundreds of millions annually, risk adjustment integrity worth millions in per-member-per-month revenue, PA automation at seventy times lower cost per transaction, and membership retention worth tens to hundreds of millions per point of churn reduced.

We introduce a platform that makes provider data computable for Stars, risk adjustment, and PA in weeks instead of quarters, with maintenance that stays flat as the provider network grows. At two hundred active provider connections, the total maintenance review burden remains under **one hour per week** with **over 99% mapping accuracy** in proof-of-concept testing. Compliance spend becomes revenue infrastructure.

---

### The Compliance Trap

Your plan has spent eighteen months and significant budget building Provider Access APIs to comply with CMS-0057-F. The APIs are live. Data is flowing from hundreds of network providers. But the quality team still cannot compute Star measures without manual chart chase. The risk adjustment team is finding that diagnoses arriving through the new API do not survive normalization. The prior authorization team built an electronic intake channel, but auto-adjudication rates remain in single digits. The CIO reports to the board that the compliance project is on track. The CFO cannot see the ROI.

This is the default experience of CMS interoperability compliance today. The gap between having data and being able to use it is the single greatest underappreciated risk facing plans under these mandates.

#### The Compliance Spend

CMS mandates FHIR APIs for all Medicare Advantage plans by January 2027. The industry is spending an estimated $1.55 billion over ten years to comply, with 6.9 million burden hours in year one alone.

CMS projects over $15.8 billion in savings from these rules. But those savings are for providers: reduced paperwork, faster prior authorization responses, fewer fax-based workflows. Payer value is not guaranteed by the mandate. Your plan captures value only if the data flowing through your new APIs is actually usable for the decisions that drive plan economics.

You are already paying for connectivity. The question is whether you also get capability.

#### Four Revenue Pools at Risk

Connected data that is not computable puts four revenue pools at risk.

**Star Ratings.** Moving from 3.5 to 4 stars increases a plan's rebate percentage by approximately five percentage points, worth hundreds of millions in annual bonus revenue for large plans. But most Star measure failures are not clinical failures. They are data availability failures. When clinical data arrives in formats your quality systems cannot interpret, the team falls back to manual chart chase.

**Risk adjustment.** Small improvements in risk adjustment accuracy translate to millions in per-member-per-month revenue across MA populations. When a diagnosis arrives in a format that does not map to the right category, the condition drops silently from the risk calculation. This is not about aggressive coding. It is about preventing information loss.

**Prior authorization.** Plan cost for a manual PA transaction averages $3.52, compared to $0.05 for a fully electronic transaction. CMS-0057-F builds the API infrastructure that can convert portal and fax workflows into structured transactions. But auto-adjudication requires consistent data. Without it, the "electronic" PA is still a document dump, and every transaction enters the manual queue at seventy times the cost.

**Membership retention.** Better payer-to-payer data exchange reduces the blind spot period for new members, when pricing assumptions are uncertain, risk scores lag, and care gaps are invisible. A one percentage point reduction in churn for a mid-size MA plan can preserve tens to hundreds of millions in annual premium revenue.

#### Why It Gets Worse at Scale

The problem is not building APIs. The real problem is that data arriving in standard formats does not retain consistent meaning across systems. Standards do not guarantee meaning. The same diagnosis can arrive in dozens of different formats, and patient match rates between organizations can be as low as fifty percent. In one national survey, thirty-eight percent of providers reported an adverse event within two years due to patient record mismatches.

Traditional integration approaches handle this through manual engineering: skilled teams analyze each provider's data, write custom mapping logic, and maintain it over time. That works at five provider connections. At fifty, the maintenance team spends all its capacity keeping what already exists running. At two hundred, you need five to ten dedicated engineers, and the cost has grown faster than the network. Every new provider connection makes all existing ones more expensive to maintain.

> **FIGURE: Maintenance Burden Growth (Executive Edition)**
> A chart showing two curves: Conventional integration maintenance (growing steeply, reaching ~6x at 500 integrations) vs. Data Foundry / shared-layer approach (staying under 2x). Caption: "As the number of provider connections grows, conventional integration maintenance compounds. Each new connection increases the burden on every existing integration. A shared-layer approach keeps maintenance growth nearly flat. Shaded regions indicate ranges based on network complexity." This is an indexed/relative chart (not absolute hours) designed for executive audiences.

Large-scale IT projects run an average of forty-five percent over budget while delivering fifty-six percent less value than predicted. More than half of total integration cost accrues after go-live, in ongoing maintenance. The conventional integration approach carries known project risk on top of deadline risk, and the January 2027 deadline will not wait.

> **Every month of delay between compliance and capability is a month of Star data you cannot compute, risk adjustment revenue you cannot capture, and PA transactions stuck in manual queues.**

---

### Compliance Becomes Revenue Infrastructure

#### What It Does

MTN's Data Foundry platform takes a fundamentally different approach. Rather than building a custom connection between every provider's data format and every downstream system, the platform maps each source to a single shared layer. Adding provider connection two hundred does not require touching connections one through one hundred ninety-nine.

The system automatically proposes data mappings for human review and approval. An analyst, not a senior engineer, can review and approve a typical provider integration in five to fifteen minutes. When provider systems change, the platform detects the change and queues the update for review. This is what keeps maintenance flat regardless of network size.

In proof-of-concept testing across sixty data formats spanning the structural diversity found in payer networks, the system achieves over ninety-nine percent mapping accuracy. Anything the system is not confident about is flagged for human review rather than passed through silently. Nothing goes live without explicit sign-off.

The core insight: each new provider integration should make the next one faster, not harder. The two hundredth provider connection reuses what the first fifty already established. Compliance spend becomes revenue infrastructure.

#### The Comparison

At fifty active provider integrations, the conventional approach requires a dedicated engineering team just for maintenance. Data Foundry requires one part-time reviewer.

At two hundred provider connections, where the conventional approach demands five to ten dedicated engineers and the maintenance burden has grown with every connection added, Data Foundry's review burden remains under one hour per week.

When provider systems update, change code sets, or modify their data structures, the conventional approach requires engineering investigation, diagnosis, fix, test, and deployment. Data Foundry detects the deviation automatically and queues a proposed fix for analyst review in minutes.

The conventional approach gets more expensive with every provider connection. Data Foundry stays flat.

#### The Revenue Case

The $1.55 billion in industry compliance cost is already being spent. Plans that treat interoperability as an IT compliance project will see costs. Plans that treat it as revenue infrastructure will see returns across four revenue pools.

**Star Ratings.** Most Star measure failures are not clinical. They are data availability failures. When clinical data is computable, quality measures compute. Chart chase becomes the exception, not the default. For large plans, the difference between 3.5 and 4 stars is approximately five percentage points of rebate, worth hundreds of millions in annual bonus revenue.

**Risk adjustment.** A diagnosis that fails to map is revenue that silently disappears. Data Foundry prevents information loss at the schema level by ensuring that clinical history is computable on the day a member enrolls or a provider connects. Small improvements in risk adjustment accuracy translate to millions in per-member-per-month revenue.

**Prior authorization.** CMS built the highway. The question is whether your data is clean enough for auto-adjudication, or whether every electronic PA still enters the manual queue at $3.52 per transaction instead of $0.05. Data Foundry enables the structured intake that makes auto-adjudication possible at scale.

**Membership retention.** Better payer-to-payer data exchange means faster time to a computable member record. Pricing assumptions stabilize. Risk scores land sooner. Care gaps become visible. A one percentage point reduction in churn preserves tens to hundreds of millions in annual premium revenue.

#### The Compliance ROI Question

How much of your compliance spend has translated into Star improvement? If the answer is "we do not know yet," the data is connected but not computable.

CMS projects billions in savings for providers. Your plan captures value only if the data is computable. Provider savings from reduced paperwork do not automatically translate to payer savings from better data.

Compliance without capability is a cost center. Only plans that convert connected data into computable data capture revenue upside. The $1.55 billion is being spent regardless. The question is whether it produces compliance only, or compliance plus capability.

---

### Next Steps (Executive Edition)

#### The Capability Imperative

CMS-0057-F will connect payer systems to provider data at unprecedented scale. The compliance infrastructure is being built across the industry. The question that remains is whether the data flowing through those APIs will be usable for the decisions that determine plan economics: risk adjustment, quality measurement, and prior authorization automation.

The conventional integration approach has a structural limitation: its costs grow faster than your provider network. Every new connection makes every existing one harder to maintain. At the scale of a large MA plan's provider network, the integration team eventually spends its entire capacity on maintaining what already exists, with no bandwidth left for new capability.

The alternative is a platform where each provider integration makes the next one faster. Where maintenance stays flat whether you have fifty connections or five hundred. Where compliance spend produces revenue, not just regulatory checkboxes.

#### Computable Clinical Data Rate Assessment

We propose a single metric to evaluate the effectiveness of any payer data integration approach: the Computable Clinical Data Rate, the percentage of inbound clinical and claims data immediately usable for risk adjustment, quality measurement, or PA decisions without manual intervention.

We offer a Computable Clinical Data Rate Assessment: a focused analysis that measures your current CCDR across your provider network, identifies the specific gaps reducing Stars, risk adjustment, and PA performance, and quantifies the revenue impact of closing those gaps.

Whether you are mid-compliance build, post-go-live and finding the data is not usable, or planning for the January 2027 API deadlines, the core question is the same: what percentage of the data flowing through your new APIs is actually computable?

---

## Paper 2: Technical Edition

**Title:** COMPLIANCE TO CAPABILITY
**Subtitle:** CMS Interoperability Mandates Require More Than APIs
**Edition:** TECHNICAL EDITION
**Document Number:** MTN-WP-003-v0

---

### Executive Summary (Technical Edition)

The CMS Interoperability and Prior Authorization Final Rule (CMS-0057-F) represents the most ambitious interoperability mandate in U.S. healthcare history. It requires Medicare Advantage organizations, Medicaid managed care plans, and qualified health plan issuers to build FHIR APIs for provider access, payer-to-payer exchange, and electronic prior authorization. This has an estimated industry cost of $1.55 billion over ten years and 6.9 million burden hours in year one alone. Compliance deadlines begin January 2026 for operational provisions and January 2027 for API requirements.

But compliance is not capability. The mandates solve data transport. They do not solve data semantics. Data arriving through Provider Access APIs, payer-to-payer exchange, and PA submissions will flow in nominally standard formats, but will not retain consistent meaning across systems. Only 59% of SNOMED CT concepts map directly to ICD-11 equivalents. Patient match rates between organizations can be as low as 50%. The result: plans will build the compliance infrastructure but still be unable to compute quality measures for Star Ratings, capture risk adjustment revenue accurately, or auto-adjudicate prior authorizations at the CAQH benchmark of $0.05 per electronic transaction versus $3.52 per manual transaction.

The structural problem is familiar. Both manual mapping and integration-engine approaches produce maintenance costs that grow quadratically with the number of provider connections. A concept-based architecture that maps every source to a shared semantic layer keeps maintenance roughly constant as the provider network grows. In benchmark testing across 60 structural format variants spanning the data types payers ingest, this approach achieves 99.0% mapping accuracy at $3.30 per field mapping, compressing typical integration timelines from months to minutes per source.

---

### The Compliance-to-Capability Gap

A large Medicare Advantage plan has spent eighteen months and significant budget building its Provider Access API to comply with CMS-0057-F. The API is live. Data is flowing from hundreds of network providers. But the quality team still cannot compute Star measures without manual chart chase. The risk adjustment team is finding that diagnoses arriving through the new API do not survive normalization. Conditions coded in provider-local conventions do not map cleanly to HCC categories. The prior authorization team built an electronic intake channel, but submissions arrive in formats so inconsistent that auto-adjudication rates remain in single digits. The CIO is reporting to the board that the compliance project is on track. The CDO knows the data is connected but not computable.

The gap this scenario exposes between the presence of data and the usability of data is the single greatest underappreciated risk facing payers under these mandates.

#### The Mandate Wave

CMS is using interoperability rules to industrialize payer workflows around member access, provider access, payer-to-payer exchange, and electronic prior authorization, largely via HL7 FHIR APIs with required operational timeframes and reporting.

Two rules define the current mandate. The 2020 Interoperability and Patient Access Final Rule (CMS-9115-F) established the baseline, requiring impacted payers to implement FHIR Patient Access APIs and related data access policies. The 2024 Interoperability and Prior Authorization Final Rule (CMS-0057-F) extends this significantly, adding a Provider Access API, Payer-to-Payer API, Prior Authorization API, PA status in the Patient Access API, and operational PA requirements with mandatory reporting.

The compliance deadlines create a compressed execution window. Operational provisions, including PA process requirements and reporting, begin January 1, 2026. Most API build requirements are due around January 1, 2027. The impacted payers include Medicare Advantage organizations, Medicaid and CHIP fee-for-service agencies, Medicaid and CHIP managed care plans, and certain qualified health plan issuers on the federal exchange.

The industry-wide cost is substantial. CMS's regulatory impact analysis estimates approximately $1.55 billion in total compliance cost over ten years across impacted payers, with first-year burden of about 6.9 million hours. Medicare Advantage remaining costs alone total roughly $311.8 million under the 2020 rule's primary estimate. TEFCA, the parallel "network-of-networks" framework, creates additional connectivity pathways under common governance. Globally, 78% of countries now have data exchange regulations, and 73% of those include FHIR in their mandate.

CMS's quantified "savings" in the 2024 rule are primarily provider paperwork savings, approximately $15.8 billion over ten years for physician practices, not payer savings. CMS explicitly treats these as illustrative and excludes them from the monetized accounting tables. The payer side of the ledger is dominated by build and compliance costs. **Payers recapture value only if data quality, identity matching, and workflow penetration are solved.**

#### Connected but Not Computable

The problem is not building APIs. The real problem is semantic interoperability: data that flows in standard formats but does not retain consistent meaning or utility across systems.

Syntactic interoperability, getting data to move in standard message formats, is largely achievable with current technology. However, semantic interoperability, ensuring that shared data means the same thing on both sides, remains elusive. Two systems can be 100% HL7 or FHIR compliant and still fail to interoperate due to optionality, local extensions, and implementation variability.

The evidence is specific:

- A JAMIA pilot study mapping between SNOMED CT and ICD-11 found only **59% direct equivalents**. The remainder required post-coordination or had no match, with challenges including non-synonymous synonyms, granularity mismatches, and composite concepts.
- Patient match rates between organizations can be as low as **50%**, even when both run the same EHR system. The average duplicate record rate within organizations is **18%**.
- In one national survey, **38% of U.S. providers reported an adverse event within two years** due to patient record mismatches.

For a Medicare Advantage plan, these numbers have direct revenue consequences.

**Risk adjustment.** A provider sends a FHIR Condition resource with a SNOMED code for diabetes. The plan's risk adjustment system needs an ICD-10 HCC category. If the mapping does not exist or is imprecise, the condition silently drops from the RAF calculation. Multiply this by thousands of conditions across hundreds of providers, and poor schema destroys risk-adjusted revenue without anyone knowing what was lost. Small improvements in RAF accuracy translate to millions in per-member-per-month revenue.

**Quality measures.** Star Ratings determine quality bonus payments and rebate percentages. Moving from 3.5 to 4 stars can increase a plan's rebate percentage by approximately five percentage points, worth hundreds of millions for large plans. But most Star measure failures are not clinical. They are data availability failures: value set misalignment, timestamp ambiguity, provenance confusion, and encounter normalization errors.

**Prior authorization.** CAQH reports plan cost of approximately $3.52 per manual prior authorization transaction versus $0.05 per electronic transaction. CMS-0057-F mandates the API plumbing that can convert portal and fax workflows into structured transactions. But auto-adjudication requires consistent schema, predictable documentation fields, and normalized clinical elements.

The pattern is consistent: organizations overinvest in interface engines and API infrastructure while underinvesting in terminology services and mapping maintenance, leading to connected systems that do not speak the same language.

#### Why Current Approaches Break at Scale

Integration engines, Rhapsody, MuleSoft, Mirth, and their equivalents, solve transport and connectivity. They get data from point A to point B in standard formats. They are necessary infrastructure. But they were designed for a problem that is now largely solved: moving messages between systems. They were not designed for the harder problem that CMS mandates now expose: ensuring that the data retains consistent meaning after it arrives.

**Traditional human engineering** has been the default approach for the semantic layer. Skilled engineers analyze source schemas, write mapping logic, build transformation pipelines, and test them against production data. Each provider interface carries substantial upfront cost, and large health systems routinely maintain hundreds of custom interfaces.

The problem compounds with provider network scale. Two installations of the same Epic instance can produce structurally different FHIR bundles because of local customization, extensions, and coding conventions. Code sets change annually. Vendor versions update. Benefit designs evolve. At fifty active integrations, a plan can expect multiple variation events per week. By two hundred integrations, the maintenance load alone demands five to ten dedicated engineers, and the cost compounds quadratically.

**AI-generated integration scripts** (using large language models to write transformation code) appear on the surface to solve the cost problem. Initial per-integration cost drops significantly. But each integration produces a bespoke script with no shared architecture. At five hundred provider connections, the "codebase" is five hundred unrelated scripts. Any code set update, new CMS compliance requirement, or cross-cutting change to terminology mappings requires touching all of them. The maintenance cost at scale actually exceeds traditional engineering. In a payer context, the consequences of silent errors are severe: a plausible but incorrect SNOMED-to-HCC mapping passes validation but erodes RAF revenue; a subtly wrong LOINC mapping makes a lab result invisible to quality measure computation.

The core issue is the **shape of the maintenance curve**. Both traditional and AI-scripted approaches produce maintenance costs that grow quadratically with the number of active integrations. At the scale of a large MA plan onboarding hundreds of network providers under CMS mandate deadlines, the integration team becomes entirely consumed by maintaining what already exists.

The track record reinforces the structural concern. Large-scale IT projects run an average of 45% over budget while delivering 56% less value than predicted. Annual maintenance typically consumes a significant fraction of the initial integration investment, and more than half of total ownership cost accrues after go-live.

> **FIGURE: Annual Maintenance Hours (Technical Edition)**
> A two-panel chart. Top panel shows annual maintenance hours for Manual Mapping (dark gray, quadratic growth to ~53,000 hrs at 500 integrations) and Integration Engine + Manual Semantic Layer (warm orange, crosses above Manual Mapping at ~200 integrations, reaching ~69,000 hrs). Bottom panel shows Data Foundry on its own scale (0-100 hrs/yr), staying nearly flat at 23-42 hours/year regardless of provider count. Shaded bands show min-max ranges. X-axis: Number of Provider Integrations (0-500). Caption: "Annual maintenance hours by number of active provider integrations. Shaded regions indicate ranges."

> **The question for any plan operator is straightforward: as your provider network grows with membership, when does the maintenance curve cross the line where integration overhead exceeds the capacity of your data team?** For most large MA plans building out CMS-mandated APIs, the answer is sooner than expected.

---

### An Architectural Approach (Technical Edition)

#### What a Solution Must Do

1. The solution must adapt to each provider's unique data model without requiring months of manual field-by-field mapping. Every provider's FHIR implementation is customized. Two installations of the same EHR can produce structurally different bundles.
2. It must learn the relationships between disparate data structures rather than relying on rules written by engineers. The mapping logic needs to be transparent, auditable, and correctable by domain experts who are not software engineers.
3. It must deliver computable data in weeks, not quarters. The 2026 to 2027 compliance window does not accommodate eighteen-month integration timelines.
4. The maintenance cost must remain roughly constant as the number of provider connections grows. This is the critical requirement.
5. The solution must make its accuracy trade-offs explicit. In payer operations, silent data errors carry direct revenue consequences.

#### Introducing the MTN Data Foundry

The MTN Data Foundry is built on a concept-based architecture. Rather than building pairwise mappings between every provider's data format and every downstream payer system (risk adjustment, quality measurement, PA rules engines, analytics), Data Foundry maps every source to a shared concept layer. Each concept represents a standardized data element: "Condition.ICD10Code," "Observation.LOINCCode," "Encounter.Type," "Medication.RxNormCode," and so on. When a new provider's data arrives, its fields are mapped to this existing concept vocabulary, not to every downstream consumer. Adding a new provider integration does not require touching any existing integration. The concept layer acts as a universal translator.

> **FIGURE: Concept-Based Architecture Diagram (Full-Width)**
> A two-panel comparison diagram. Left panel ("Pairwise Mapping"): 6 provider data sources (Provider A FHIR, Provider B FHIR, Payer-to-Payer, PA Submissions, Claims EDI, Lab Feeds) each with arrows crossing to 4 payer target systems (RAF Engine, Stars Measures, PA Auto-Adjudication, Analytics), creating a visual "mess" of n x m crossing arrows. Right panel ("Concept-Based Architecture"): The same 6 sources feed into a central red "Concept Layer" box, which outputs to grouped targets (RAF/Stars Computation and PA Auto-Adjudication), with only n + m clean mappings. Caption: "Pairwise mapping (left) produces n x m connections that grow combinatorially. Concept-based architecture (right) reduces this to n + m mappings through a shared semantic layer."

The platform operates through five integrated capabilities:

**Schema Visualization.** When data arrives from a new network provider's FHIR API, Data Foundry presents its structure visually, allowing analysts to see field names, data types, and sample values alongside the existing concept vocabulary.

**Self-Organizing Concept Maps.** Using the schema metadata and sample data, the system automatically proposes mappings between the provider's fields and target concepts. It identifies obvious matches (SNOMED conditions to ICD-10 HCC categories), detects format differences (date formats, coding system variants), and flags ambiguous cases for human review.

**Approval Dashboard.** Every AI-proposed mapping is presented for human review before activation. The dashboard shows confidence scores, sample data values, and suggested transformations. An analyst, not a senior engineer, can review and approve a typical provider integration in five to fifteen minutes. Nothing goes live without explicit human sign-off.

**Rehydration.** Once mappings are approved, the system materializes the unified dataset. Source data is transformed according to the approved mappings and loaded into a common output format. This is the step where clinical data from hundreds of providers becomes a single computable dataset for risk adjustment calculation, quality measure computation, and PA auto-adjudication.

**Self-Healing Maintenance.** When a provider's EHR updates, a code set changes, or an unfamiliar value appears, the platform detects the deviation automatically and queues it for review. At two hundred or more active provider connections generating variation events weekly, the total review burden remains less than one hour per week.

#### How Benchmarked Data Maps to Payer Operations

Data Foundry has been evaluated across 11 structurally diverse data sources and 60 format variants, spanning flat files, nested hierarchies, entity-attribute-value structures, columnar batches, pipe-delimited feeds, and wide sparse-column layouts.

**Benchmarked Source Type to Payer Integration Equivalent:**

| Benchmarked Source Type | Payer Integration Equivalent |
| --- | --- |
| Wearable devices | RPM feeds: CGMs, BP cuffs, pulse oximeters via Provider Access API or direct integrations |
| Industrial monitors | Clinical device streams: bedside vitals, lab instruments, imaging equipment (proprietary formats per vendor) |
| IoT gateways | Health system middleware aggregating clinical data before FHIR API transmission |
| Standardized interchange formats | FHIR R4 bundles (Provider Access, P2P, PA APIs), X12 EDI (837/835/270/271), C-CDA, HL7 v2 |
| Multi-domain platforms | EHR/PM suites (Epic, Cerner, Athenahealth, eCW, NextGen) -- each with proprietary data models |

**Benchmarked Structural Variant to Payer Data Equivalent:**

| Benchmarked Structural Variant | Payer Data That Looks Like This |
| --- | --- |
| Flat (CSV/delimited) | Eligibility rosters, capitation files, provider directories, HEDIS flat files, pharmacy crosswalks |
| Nested (hierarchical/JSON) | FHIR bundles (Patient -> Conditions -> Meds -> Obs), P2P exchange, PA structures |
| Entity-attribute-value | Quality measures (one row per measure per member), lab results by LOINC, HCC capture tables |
| Columnar batch | 835 remittance, batch 837 claims, encounter submissions, PA decision batches, capitation reconciliation |
| Pipe-delimited | HL7 v2 feeds (ADT, labs, observations), pharmacy dispense feeds, immunization registry submissions |
| Wide/sparse-column | Multi-specialty encounter forms, CAHPS surveys, SDOH screenings, risk assessment questionnaires |

Every provider connection adds three to five of these structural variants simultaneously.

#### Performance Results

| Metric | Result |
| --- | --- |
| **Mapping Accuracy** | 99.0% |
| **Format Consistency** | 100.0% |
| **Record Capture Rate** | 96.2% |
| **Average Mapping Time** | 442 seconds |
| **Average Cost per Mapping** | $3.30 |
| **Total Field Mappings Evaluated** | 480 |

#### The Economics

**Star Ratings.** Moving from 3.5 to 4 stars increases rebate percentage by approximately five percentage points. For large MA plans, this translates to hundreds of millions in annual bonus revenue.

**Risk adjustment.** Accurate risk adjustment means premiums align with actual member acuity. Small improvements in RAF capture accuracy translate to millions in PMPM revenue.

**Prior authorization.** $3.52 per manual PA transaction versus $0.05 per electronic transaction. Data Foundry enables the structured intake that makes auto-adjudication possible at scale.

**Membership retention.** A one percentage point reduction in churn for a mid-size MA plan can preserve tens to hundreds of millions in annual premium revenue. CMS frames payer-to-payer exchange as preventing loss of critical information when patients change plans.

> **FIGURE: Initial Project Cost Comparison (Technical Edition)**
> A grouped bar chart comparing initial project cost across three provider network scales (50, 200, 500+ Providers) and three approaches (Manual Mapping in dark gray, Integration Engine + Manual Semantic Layer in warm orange, MTN Data Foundry in brand red). Traditional costs range from $2M (50 providers) to $14M (500+ providers). Integration Engine ranges from $700K to $5M. Data Foundry ranges from $250K to $600K (~90% reduction vs traditional). Error bars show min-max ranges. Caption: "Initial project cost by provider network scale and integration approach. Data Foundry costs remain sub-linear due to concept reuse across sources."

With Data Foundry's concept-based architecture, fifty integrations require one part-time reviewer. At two hundred provider connections, Data Foundry's review burden remains under one hour per week. The per-field mapping cost of $3.30 compares to interface-level costs that run into the tens of thousands.

The $1.55 billion industry compliance cost is already being spent. Plans that treat interoperability as an IT compliance project will see costs. Plans that treat it as revenue infrastructure will see Star bonuses, RAF integrity, and PA efficiency.

---

### Conclusion (Technical Edition)

#### The Capability Imperative

CMS-0057-F will connect payer systems to provider data at unprecedented scale. The compliance infrastructure is being built across the industry at a projected cost of $1.55 billion over ten years.

Semantic interoperability does not come free with syntactic compliance. APIs solve transport. Without automated semantic reconciliation, payers will have connected systems that do not speak the same language. The maintenance burden of manual mapping grows quadratically with provider network size. At the scale of a large MA plan's provider network, the integration team eventually spends its entire capacity on maintaining what already exists, with no bandwidth left for new capability.

A concept-based architecture offers a fundamentally different cost curve. By mapping every provider's data to a shared concept layer rather than building pairwise integrations, the marginal cost of adding new provider connections remains roughly constant. Self-healing maintenance keeps the ongoing burden flat.

We propose a single metric: the **Computable Clinical Data Rate**, defined as the percent of inbound clinical and claims data immediately usable for risk, quality, or authorization decisions without manual intervention.

#### Next Steps

We offer a Computable Clinical Data Rate Assessment: a focused analysis that measures the current CCDR across your provider network, identifies the specific semantic gaps reducing Stars, RAF, and PA performance, and quantifies the revenue impact of closing those gaps.

---

## Technical Leadership (Shared Across Both Papers)

**Warren Pettine, MD, Co-Founder and CEO.** Assistant Professor at the University of Utah where he leads the Medical Machine Intelligence (M2Int) Lab. Trained in machine learning research at Harvard, Stanford, NYU, and Yale. Prior health policy experience in the U.S. Congress and service on the University of Utah Institutional Review Board ground MTN's approach in policy and regulatory expertise.

**Matthias Christenson, PhD, AI Architect.** Investigator with the M2Int Lab. PhD and postdoctoral research at Columbia University in computational ML, with prior industry experience as a Deep Learning Research Engineer at DeepLife training foundational models on genomic and biometric data. Leads MTN's technical architecture design and data model development.

**Brian Locke, MD, MSCI, Clinical AI Lead.** Investigator with the M2Int Lab. Active ICU physician and Assistant Professor at Intermountain Healthcare, bringing firsthand understanding of clinical workflows across academic medical centers and integrated delivery networks. Provides the methodological rigor for the clinical and operational implications of MTN's technology.

**Contact:**
Warren Pettine, MD, CEO of MTN
warren@themtn.ai
https://www.themtn.ai

---

## Image Assets

Team headshots (available in papers/cms-exec-payer/docs/images/team/ and papers/cms-interop-payer/docs/images/team/):
- pettine_headshot.jpg (Warren Pettine)
- Matthias_Christenson.jpeg (Matthias Christenson)
- Brian_Locke.jpg (Brian Locke)

Background/branding images (in papers/cms-interop-payer/docs/images/):
- aconcagua_side.jpg (mountain landscape)
- ladakh_hidden.jpg (mountain landscape)
- MTN_ekg_white.svg (MTN logo - white variant)
- MTN_ekg.svg (MTN logo - standard)

Shared brand assets (in latex/assets/):
- Logo and header background images

## Brand Styling

- **Primary color:** #AC1F2D (Mountain Biometrics brand red)
- **Traditional/gray:** #4A4A4A
- **Integration Engine/LLM orange:** #D4793A
- **Data Foundry (hero color):** #AC1F2D
- **Font:** Helvetica (fallback: Liberation Sans, DejaVu Sans)
- **Layout:** Two-column