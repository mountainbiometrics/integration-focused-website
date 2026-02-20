# B2B PE Microsite - Complete Content Reference

This document contains all material from the B2B PE white papers (Executive Edition and Technical Edition) for use in designing and building the B2B PE microsite.

---

## Paper 1: Executive Edition

**Title:** CUT THE INTEGRATION TAX
**Subtitle:** What Compounding Integration Costs Are Doing to Your Rollup Returns
**Edition:** EXECUTIVE EDITION
**Document Number:** MTN-WP-002-EXEC-v0
**Company:** MTN (www.themtn.ai)
**Brand Color:** #AC1F2D

---

### Executive Summary

Private equity enters 2026 with over one trillion dollars in dry powder targeting fragmented B2B services markets. Insurance brokerage, managed IT, wealth management, field services, and accounting rollups are accelerating. But the gap between the pace of acquisition and the pace of data integration is quietly burning returns.

Each acquisition adds new systems, new data formats, and new integration burden. The conventional approach gets more expensive with every deal, not less. At fifty active integrations, maintenance consumes the team. At two hundred, it consumes the budget. Nearly seventy percent of mergers fail to achieve expected revenue synergies, and the integration approach most platforms use is a primary reason.

We introduce a platform that compresses integration timelines from months to weeks with a team of three to five instead of fifteen to twenty-five, and keeps maintenance flat as the portfolio grows. Compressing integration from twelve months to one month recovers approximately **70 basis points of equity IRR**. Annual maintenance drops from over **$500,000 to under $100,000**. Integration becomes a compounding asset instead of a recurring cost.

---

### The Integration Tax (Executive Edition)

Your platform has closed eight acquisitions in two years. Each agency runs a different management system: Applied Epic at one site, Vertafore at three others, HawkSoft at two, and two more on legacy systems that predate modern interfaces. The CFO needs a consolidated book-of-business report for the board. It does not exist. Commission data is stored in five formats. Customer records use different identifier schemes. The ninth deal is in letter of intent, and the buyer's diligence team will ask for integrated KPIs the platform cannot deliver.

An MSP platform tells a similar story. Twelve firms rolled up across three states, each running its own professional services, monitoring, and billing stack. The operating partner wants utilization rates by region. No one can produce the number without two weeks of manual reconciliation.

This is the default experience of B2B consolidation today. The gap between the pace of acquisition and the pace of data integration is a measurable drag on returns: an integration tax that compounds with every deal.

#### The Consolidation Wave

The pressure is real and growing. US private equity currently holds nearly 12,900 portfolio companies, with thirty percent held seven or more years and another thirty-seven percent held four to six years. Half of respondents in a recent PitchBook survey identified exiting portfolio companies as their primary focus over the next six months. At the same time, platform buyouts are expected to re-accelerate, enabled by over one trillion dollars in dry powder.

The sectors absorbing this capital are fragmented B2B markets where the rollup thesis is dominant: insurance brokerage (849 announced M&A transactions in 2024), managed IT services (71 PE transactions and 104 strategic rollups in a single quarter), wealth management (a record 322 RIA deals), and field services (55 PE-backed HVAC deals, a seventy-two percent year-over-year increase).

The economic logic of every one of these rollups depends on integration speed. Every month of delayed integration is a month of synergy runway lost.

#### What the Visibility Gap Costs

The visibility gap is the period between close and the first date you can generate reconciled KPIs across the combined entity: revenue by segment, margin by service line, customer retention, and normalized EBITDA.

During this gap, specific synergy levers are disabled:

- **Pricing discipline** requires margin-by-service-line data across the portfolio. Without it, unprofitable contracts renew unchallenged.
- **Cross-sell targeting** requires a unified customer view. Without it, the sales team cannot identify which clients of Agency A also need products from Agency B.
- **Vendor rationalization** requires consolidated spend data. Without it, three agencies pay three different rates for the same carrier or software license.
- **Labor optimization** requires utilization data across sites. Without it, overstaffing at one location coexists with understaffing at another.
- **Board reporting** requires reconciled financials. Without it, the CFO's board deck is assembled by hand from incompatible exports.

Finance and operations teams at portfolio companies spend roughly half their time gathering and reconciling data rather than analyzing it. This is time that produces no returns.

#### Why It Gets Worse with Every Acquisition

Every acquisition adds new systems. The conventional approach builds a custom connection for each one. That works at three acquisitions. At eight, the integration team spends most of its time maintaining what already exists. At twenty, the annual maintenance budget exceeds the original project cost.

The reason is structural. When vendor systems update (and they update constantly), every integration connected to that system can break. A platform with eight acquisitions running four different software vendors is exposed to four independent update schedules, each one capable of breaking integrations with every connected system. The more systems you have, the faster costs spiral.

> **FIGURE: Maintenance Burden Growth (Executive Edition)**
> A chart showing two curves indexed to a baseline. Conventional integration maintenance compounds steeply as portfolio size grows (~6x at 500 integrations). Data Foundry / shared-layer approach stays under 2x. Caption: "As portfolio size grows, conventional integration maintenance compounds. Each new system increases the burden on every existing integration. A shared-layer approach keeps maintenance growth nearly flat. Shaded regions indicate ranges based on portfolio complexity."

Nearly seventy percent of mergers fail to achieve expected revenue synergies. Firms that invest in modern data architecture outperform their peers by fifteen to twenty percent in portfolio company value creation. The gap between these two outcomes is largely an integration gap.

#### The Hold Period Problem

Thirty percent of PE portfolio companies are now held seven or more years. Another thirty-seven percent are held four to six years. The longer you hold, the more the integration tax compounds. A platform paying $400,000 to $800,000 per year in maintenance at fifty sources will spend $2.5 to $5 million over a six-year hold, just to keep existing integrations running. That is before adding a single new acquisition.

Large-scale IT projects run an average of forty-five percent over budget while delivering fifty-six percent less value than predicted. One in six becomes a severe overrun exceeding two hundred percent of the original estimate.

Waiting is not a zero-cost option. Every month without consolidated visibility has a concrete cost in unrealized synergies, and the conventional integration approach carries known project risk on top of it.

> **The question for any platform operator is straightforward: at your current rate of acquisition, when does the maintenance cost of your integration approach exceed the capacity of your team?** For most growing rollups, the answer is sooner than expected.

---

### A Different Approach (Executive Edition)

#### What It Does

MTN's Data Foundry platform takes a fundamentally different approach. Rather than building a custom connection between every system and every other system, the platform maps each source to a single shared layer. Adding the fiftieth source does not require touching sources one through forty-nine.

The system proposes data mappings automatically for human review and approval. An analyst, not a senior engineer, can review and approve a typical integration in five to fifteen minutes. When vendor systems change, the platform detects the change and queues the update for review. This is what keeps maintenance flat regardless of portfolio size.

In proof-of-concept testing across sixty data formats spanning the types found in B2B rollups, the system achieves over ninety-nine percent accuracy. Anything the system is not confident about is flagged for human review rather than passed through silently. Nothing goes live without explicit sign-off.

The core insight: each new acquisition should make the next one faster, not harder. The eighth agency joining the platform reuses what the first seven already established. Integration becomes a compounding asset -- not a recurring cost.

#### The Comparison

Your current approach requires fifteen to twenty-five people over eight to ten weeks per integration batch. Data Foundry does it with three to five people in two to three weeks.

At fifty active integrations, the conventional approach requires dedicated engineers just for maintenance. Data Foundry requires one part-time reviewer handling a few hours of work per week.

At scale, the divergence is dramatic. A typical enterprise integration project at fifty sources runs $1.5 to $2.5 million with a team of fifteen to twenty-five over eight to ten weeks. The platform compresses both cost and timeline, not by cutting corners, but by eliminating the structural redundancy that makes conventional integration expensive in the first place.

#### IRR Sensitivity to Integration Speed

The financial impact of integration speed is directly measurable in PE return terms. An illustrative model assuming a platform plus ten add-ons over a five-year hold (add-ons at 6x, exit at 12x, with cost synergies of ten percent of add-on EBITDA ramping over six months and three percent annual growth post-integration) shows:

Compressing integration from twelve months to one month recovers approximately **70 basis points of equity IRR**. The effect grows as add-on count increases, as acquisition cadence accelerates, and as the synergy mix becomes more revenue-dependent.

The effect also grows when exit multiples are sensitive to integration quality. A collection of logos under a holding company trades at a discount. A genuinely integrated platform earns multiple expansion. Even a 0.5x to 1.0x multiple differential on exit EBITDA can dominate the total return impact.

#### Exit Readiness

At exit, buyers pay more for genuinely integrated platforms than for a portfolio of companies that happen to share an owner. Practitioner commentary frames this directly: "real integration in buy-and-builds" avoids the discount that comes with superficial unification, while genuinely integrated platforms command premium multiples.

Firms that invest in modern data architecture outperform peers by fifteen to twenty percent in portfolio company value creation. Integration quality is not a back-office concern. It is exit defense.

---

### Next Steps (Executive Edition)

#### The Compounding Advantage

The pattern is clear. Private equity capital is flowing into fragmented B2B services at an accelerating pace, with platform buyout share expected to rise above twenty-five percent in 2026 and over one trillion dollars in dry powder seeking deployment. Each add-on acquisition brings new systems, new data structures, and new integration burden.

The conventional integration approach carries a structural limitation: its costs grow faster than your portfolio. Each acquisition makes every existing integration harder to maintain. At the scale most PE-backed platforms are targeting, this becomes the binding constraint on growth.

The alternative is a platform where each acquisition makes the next one faster, not harder. Where maintenance stays flat whether you have fifty sources or five hundred. Where the eighth agency reuses what the first seven established.

#### Integration Complexity Assessment

We offer an integration complexity assessment: a focused two-week analysis that maps your current data landscape, identifies the specific visibility gaps across your portfolio, and estimates the cost of delayed integration at your current acquisition pace.

Whether you are evaluating a platform acquisition, midway through a multi-site integration, or planning for the next phase of add-on growth, the core question is the same: how many active data sources will you have in eighteen months, and does your current integration approach scale to that number?

---

## Paper 2: Technical Edition

**Title:** CUT THE INTEGRATION TAX
**Subtitle:** Data Integration Is the Hidden Drag on B2B Rollup Returns
**Edition:** TECHNICAL EDITION
**Document Number:** MTN-WP-002-v0

---

### Executive Summary (Technical Edition)

Private equity enters 2026 fueled by over one trillion dollars in dry powder. The insurance brokerage, managed IT, wealth management, field services, and accounting sectors absorbing this capital share a common structural challenge: each acquisition adds new systems, new data formats, and new integration burden, and every month without unified visibility is a month of synergy runway lost.

Both traditional engineering and AI-generated scripting produce maintenance costs that grow quadratically with portfolio size, eventually consuming the integration team's entire capacity. Large IT projects run an average of 45% over budget while delivering 56% less value than predicted, and nearly 70% of mergers fail to achieve expected revenue synergies.

A concept-based architecture changes the cost curve by mapping every source to a shared semantic layer rather than building pairwise integrations. In benchmark testing across 60 structural format variants, this approach achieves 99.0% mapping accuracy and compresses typical integration timelines from months to weeks. **Maintenance remains roughly constant regardless of portfolio size.** An illustrative IRR model shows that compressing integration from twelve months to one month improves equity IRR by approximately 70 to 90 basis points -- an effect that grows with add-on count and synergy mix.

---

### The Integration Tax (Technical Edition)

A PE-backed insurance brokerage platform closes on its eighth acquisition in two years. Each agency arrived with its own management system: Applied Epic at one site, Vertafore at three others, HawkSoft at two, and two more running legacy systems that predate modern APIs. The CFO needs a consolidated book-of-business report for the board. It does not exist. Commission data is stored in five formats. Customer records use different identifier schemes. Policy structures differ by carrier, by agency, and by AMS vendor. The integration team, now on its third consulting engagement, is still reconciling the fifth acquisition. Meanwhile, the ninth deal is in letter of intent, and the buyer's diligence team will ask for integrated KPIs the platform cannot deliver.

#### The Consolidation Math

US private equity enters 2026 under unusually high pressure to demonstrate realized operational improvements. The inventory of PE-backed companies stands at nearly 12,900, with 30% held seven or more years and another 37% held four to six years. Half of respondents in a recent PitchBook survey identified exiting portfolio companies as their primary focus. Platform buyouts are expected to re-accelerate: LBO activity was 21.6% of US PE deal activity through October 2025, and PitchBook's 2026 outlook calls for platform LBO share to increase to 25% or higher, enabled by over one trillion dollars of dry powder.

The sectors absorbing this capital are fragmented B2B services markets:

- **Insurance brokerage:** 849 announced M&A transactions in 2024, with private-capital-backed buyers comprising the majority.
- **Managed IT services:** 71 PE transactions and 104 strategic rollups in Q1 2024 alone.
- **Wealth management:** A record 322 RIA M&A transactions.
- **Field services:** 55 PE-backed HVAC deals in 2024 (a 72% year-over-year increase), plus 466 specialty construction deals across tracked subcategories.
- **Accounting:** Over $500 million in planned technology-enabled rollup investments by a single platform.

The economic logic of every one of these rollups depends on integration speed. Top-performing PE firms target operational unification within the first 100 days of close, because every month of delayed integration is a month of unrealized synergies.

#### The Visibility Gap

The "visibility gap" is the period between close and the first date when the sponsor and management team can generate reconciled KPIs across the combined entity.

Each acquired company arrives with its own operational stack:

- Insurance agencies average 5.7 to 11.9 technology platforms depending on size, and while 93% use an agency management system, those systems span multiple vendors with materially different data models.
- MSPs run layered tool stacks (PSA, RMM, ticketing, security, billing) customized per company and subject to vendor-driven platform changes.
- RIAs are increasingly multi-custodial, multiplying the data normalization burden for portfolio reporting, trading, and compliance.
- Field service companies mix dispatch, work order, inventory, payroll, and local accounting systems, often with no two acquisitions running the same stack.

During the visibility gap, specific synergy levers are disabled:

- **Pricing discipline** requires knowing margin by service line across the portfolio.
- **Cross-sell targeting** requires a unified customer view.
- **Vendor rationalization** requires consolidated spend data.
- **Labor optimization** requires utilization data across sites.
- **CFO-grade reporting** requires reconciled financials.

Finance and operations teams at portfolio companies spend roughly half their time gathering and reconciling data rather than analyzing it. Practitioners describe repeated situations where founder-led platforms with $50 million or more in revenue still operate on basic accounting tools and handwritten AP logs, requiring chart-of-accounts standardization and data normalization before synergies can even be modeled.

#### Why Current Approaches Fail at Scale

**Schema Drift Is a Certainty.** Vendors version their APIs, deprecate older versions, and regularly change schemas:

- **QuickBooks Online:** Intuit formally discontinued support for minor API versions 1 through 74.
- **Salesforce:** Maintains a defined API retirement policy, with planned retirements of legacy versions on a regular schedule.
- **NetSuite:** Release notes are explicitly subject to weekly changes, and Oracle provides schema diff tools between endpoint versions.
- **HubSpot:** Defines "breaking changes" and aims to provide 90 days notice before making them.

**Traditional Engineering.** At fifty source types, the initial project cost runs $1.5 to $2.5 million with a team of fifteen to twenty-five people over eight to ten weeks. The deeper problem is maintenance. At fifty active integrations, a platform can expect two to five variation events per week. At two hundred integrations, the maintenance load demands five to ten dedicated engineers, and costs compound quadratically.

The track record: Large IT projects run an average of 45% over budget while delivering 56% less value than predicted. Seventeen percent become "black swans" with cost overruns exceeding 200%.

**AI-Generated Scripts.** Initial per-integration cost drops to $135 to $540. But each integration produces a bespoke script with no shared architecture. The maintenance cost at scale actually exceeds traditional engineering because the generated code is unfamiliar, inconsistent, and difficult to modify reliably.

**The Core Issue.** The **shape of the maintenance curve** is the problem. Both traditional and AI-scripted approaches produce maintenance costs that grow quadratically with portfolio size.

> **FIGURE: Annual Maintenance Hours (Technical Edition)**
> A two-panel chart. Top panel shows annual maintenance hours for Traditional Engineering (dark gray, quadratic growth to ~53,000 hrs at 500 integrations) and LLM-Generated Scripts (warm orange, starts cheaper but crosses above Traditional at ~200 integrations, reaching ~69,000 hrs at 500). A dotted vertical line marks "LLM exceeds traditional" crossover point. Bottom panel shows Data Foundry on its own scale (0-100 hrs/yr), staying nearly flat at 23-42 hours/year. Shaded bands show min-max ranges. X-axis: Number of Active Integrations. Caption: "Annual maintenance hours by number of active integrations. Traditional and LLM hours are derived from labor costs at a $65/hr fully-loaded rate; Data Foundry hours are derived from documented variation-event rates (events/week x review minutes). LLM-generated scripts start cheaper but exceed traditional engineering beyond ~200 integrations because each bespoke script must be touched individually for any cross-cutting change. Shaded regions indicate ranges."

Nearly 70% of observed mergers fail to achieve expected revenue synergies, and firms that invest in modern data architecture outperform peers by 15 to 20 percent in portfolio company value creation.

> **The question for any platform operator is straightforward: at your current rate of acquisition, when does the maintenance curve cross the line where integration overhead exceeds the operational capacity of your team?** For most growing rollups, the answer is sooner than expected.

---

### A Compounding Integration Capability (Technical Edition)

#### What a Solution Must Do

1. Adapt to each source system's unique data model without requiring months of manual field-by-field mapping.
2. Learn and reuse concept knowledge across acquisitions. Mapping "customer," "contract," and "invoice" for one AMS should reduce effort for the next one, not reset to zero.
3. Deliver usable integrated data in weeks, not quarters.
4. Maintenance cost must remain roughly constant as the number of active integrations grows.
5. Survive vendor schema drift without reimplementation.

#### Introducing MTN Data Foundry

The MTN Data Foundry is built on a concept-based architecture. Rather than building pairwise mappings between every source system and every target system, Foundry maps every source to a shared concept layer. Each concept represents a standardized business object: "Customer.AccountID," "Contract.EffectiveDate," "Invoice.LineAmount," "Employee.Role," and so on.

> **FIGURE: Concept-Based Architecture Diagram (Full-Width)**
> A two-panel comparison. Left panel ("Pairwise Mapping"): Multiple source systems with crossing arrows to multiple target systems, creating a visual "mess" of n x m crossing arrows. Right panel ("Concept-Based Architecture"): The same sources feed into a central red "Concept Layer" box, which outputs to grouped targets, with only n + m clean mappings. Caption: "Pairwise mapping (left) produces n x m connections that grow combinatorially. Concept-based architecture (right) reduces this to n + m mappings through a shared semantic layer."

The compounding advantage emerges over successive acquisitions. Once "customer," "contract," "invoice," and "employee" are mapped for one AMS, the next acquired agency reuses the concept layer and maps only the fields or structures unique to its particular system configuration.

The platform operates through four integrated capabilities:

**Schema Discovery.** When a new data source is loaded, Data Foundry presents its structure visually: field names, data types, sample values, and structural patterns.

**AI Concept Mapping.** The system automatically proposes mappings between source fields and target concepts. In benchmark testing across 60 structural format variants, the system achieves 99.0% mapping accuracy at an average cost of $3.30 per mapping.

**Deterministic Validation.** Every mapping is verified through structural coverage checking before activation. The system refuses to process data it cannot validate -- unmapped fields trigger rejection, not silent passthrough.

**Drift Detection and Governance.** When a source system changes, the platform detects this deviation automatically and queues it for review. At two hundred active sources, the total review burden is less than one hour per week.

#### Canonical Concepts Across B2B Verticals

The same ten concepts appear in different forms across B2B verticals:

| Concept | Insurance | MSP | RIA | Field Services | Accounting |
| --- | --- | --- | --- | --- | --- |
| Party | Insured, agent, carrier | Client contact, vendor | Client, beneficiary | Customer, tenant | Client, partner |
| Account | Agency account | Client organization | Household, account | Service location | Engagement client |
| Contract | Policy, binder | Service agreement, SLA | Advisory agreement | Service contract, warranty | Engagement letter |
| Product/Service | Coverage line, endorsement | Managed service tier | Investment product, model | Service type, trade | Service offering |
| Order/Ticket | Submission, quote | Service ticket, project | Trade order, rebalance | Work order, dispatch | Task, deliverable |
| Invoice/Payment | Commission statement | Monthly billing, T&M invoice | Fee schedule, custodian stmt | Job invoice, parts billing | Time & billing entry |
| Employee | Producer, CSR | Engineer, dispatcher | Advisor, planner | Technician, foreman | Staff, preparer |
| Location/Asset | Agency branch | Client site, endpoint | Office, custodian | Property, equipment | Office, system |
| Document | ACORD form, certificate | SOW, compliance report | IPS, ADV filing | Permit, inspection | Tax return, workpaper |
| Event Timeline | Renewal, claim, endorsement | Incident, resolution, SLA breach | Review, rebalance, billing | Dispatch, completion, callback | Filing deadline, review cycle |

#### Benchmarked Performance

| Benchmarked Source Type | B2B Rollup Equivalent |
| --- | --- |
| Mobile devices | Workforce telemetry -- GPS trackers, technician apps, field rep geolocation |
| Industrial monitors | RMM agents (MSPs), fleet telematics, building-management sensors (HVAC) |
| IoT gateways | Branch network appliances, building-automation controllers, warehouse hubs |
| Standardized formats | EDI X12, ACORD XML/AL3 (insurance), OFX/BAI2 (banking), NACHA (payroll) |
| Multi-domain platforms | ERP/CRM/PSA suites -- QuickBooks, NetSuite, Salesforce, ConnectWise, Applied Epic |

| Structural Variant | B2B Data That Looks Like This |
| --- | --- |
| Flat (CSV/delimited) | Customer rosters, rate cards, commission schedules, AR/AP aging exports |
| Nested (hierarchical) | CRM opportunities, policy structures, portfolio account hierarchies, work-order trees |
| Entity-attribute-value | Custom CRM fields per acquired company, configurable ticket attributes |
| Columnar batch | Commission runs, financial close packages, payroll batches, custodian files |
| Pipe-delimited | ACORD AL3, legacy EDI, mainframe GL extracts, bank lockbox files |
| Wide/sparse-column | Multi-LOB submissions, MSP reports with varying column sets per service type |

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

> **FIGURE: Initial Project Cost Comparison (Technical Edition)**
> A grouped bar chart comparing initial project cost across three portfolio scales (50, 200, 500+ sources) and three approaches (Traditional Engineering in dark gray, LLM-Generated Scripts in warm orange, MTN Data Foundry in brand red). Traditional costs range from $1.5-2.5M (50 sources) to $8-20M (500+ sources). LLM ranges from $500K-900K to $3-7M. Data Foundry achieves ~85-95% reduction. Error bars show min-max ranges. Caption: "Initial project cost by portfolio scale and integration approach. Data Foundry costs remain sub-linear due to concept reuse across sources."

#### IRR Sensitivity to Integration Speed

| Months to Unified Visibility | Equity IRR |
| --- | --- |
| 1 month | ~23.1% |
| 6 months | ~22.8% |
| 12 months | ~22.4% |
| 18 months | ~22.0% |
| 24 months | ~21.6% |

Moving from twelve months to one month improves equity IRR by roughly 70 to 90 basis points. The effect grows as add-on count increases, as acquisition cadence accelerates, and as the synergy mix becomes more revenue-dependent.

Practitioner commentary: "real integration in buy-and-builds" is what avoids "three logos under a holdco," where incomplete integration can trade at a discount while genuinely integrated platforms earn multiple expansion. Even a 0.5x to 1.0x multiple differential on exit EBITDA can dominate the IRR delta.

---

### Conclusion (Technical Edition)

#### The Compounding Advantage

The pattern is clear. Private equity capital is flowing into fragmented B2B services at an accelerating pace, with platform LBO share expected to rise above 25% in 2026 and over one trillion dollars in dry powder seeking deployment.

The core risk is not technical complexity. It is time. When commission data lives in five formats, when customer records use different identifier schemes, when the CFO's board presentation depends on spreadsheets assembled by hand, the hold period is running but synergy capture is not. That gap is the integration tax, and it compounds with every deal.

Current integration approaches share a structural limitation: their maintenance costs grow quadratically with portfolio size. A concept-based architecture offers a fundamentally different trajectory. By mapping every source to a shared concept layer, the marginal cost of adding new sources remains roughly constant. Each acquisition makes the next one faster, not harder.

#### Next Steps

We offer an integration complexity assessment: a focused analysis that maps your current data landscape, identifies the specific visibility gaps across your portfolio, and estimates the cost of delayed integration at your current acquisition pace.

---

## Technical Leadership (Shared Across Both Papers)

**Warren Pettine, MD, Co-Founder and CEO.** Assistant Professor at the University of Utah where he leads the Medical Machine Intelligence (M2Int) Lab. Trained in machine learning research at Harvard, Stanford, NYU, and Yale. Leads the research and product teams.

**Matthias Christenson, PhD, AI Architect.** Investigator with the M2Int Lab. PhD and postdoctoral research at Columbia University in computational ML, with prior industry experience as a Deep Learning Research Engineer at DeepLife training foundational models on genomic and biometric data. Leads MTN's technical architecture design and data model development.

**Contact:**
Warren Pettine, MD, CEO of MTN
warren@themtn.ai
https://www.themtn.ai

---

## Image Assets

Team headshots (available in papers/b2b-exec-pe/docs/images/team/ and papers/b2b-rollup-pe/docs/images/team/):
- pettine_headshot.jpg (Warren Pettine)
- Matthias_Christenson.jpeg (Matthias Christenson)
- Brian_Locke.jpg (Brian Locke) -- only in rollup-pe edition

Background/branding images:
- MTN_ekg_white.svg (MTN logo - white variant)
- MTN_ekg.svg (MTN logo - standard)

## Brand Styling

- **Primary color:** #AC1F2D (Mountain Biometrics brand red)
- **Traditional/gray:** #4A4A4A
- **LLM orange:** #D4793A
- **Data Foundry (hero color):** #AC1F2D
- **Font:** Helvetica (fallback: Liberation Sans, DejaVu Sans)
- **Layout:** Two-column
