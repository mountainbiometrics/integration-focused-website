import type { Metadata } from 'next';
import Hero from '@/components/content/Hero';
import SectionHeader from '@/components/content/SectionHeader';
import TechnicalSection from '@/components/technical/TechnicalSection';
import PrimaryCTABanner from '@/components/cta/PrimaryCTABanner';

export const metadata: Metadata = {
  title: 'Technical Overview | MTN',
  description:
    'Technical architecture and implementation details for data engineers and IT teams evaluating MTN Data Foundry.',
};

const ingestionDetails = {
  title: 'Ingestion and schema detection',
  description:
    'MTN Data Foundry ingests data from heterogeneous sources without requiring upfront schema definitions. Incoming payloads are fingerprinted to identify structure and detect changes.',
  behaviors: [
    'Supports JSON, HL7, X12, CSV, and structured database connections',
    'Schema signatures are computed from payload structure, not just field names',
    'New schema versions trigger mapping workflows automatically',
    'Malformed payloads are quarantined with detailed error context',
  ],
};

const mappingDetails = {
  title: 'Semantic mapping and governance',
  description:
    'Data is mapped to a canonical concept layer that represents healthcare entities consistently across sources. Mapping decisions are governed by confidence thresholds and human approval.',
  behaviors: [
    'Mappings are suggested based on field values, patterns, and healthcare standards',
    'Confidence scores determine whether mappings auto-apply or require review',
    'Human-in-the-loop workflows route uncertain cases to domain experts',
    'Mapping versions are immutable; changes create new versions',
  ],
};

const changeDetails = {
  title: 'Change detection and self-healing',
  description:
    'When source schemas change, the Foundry detects the change, evaluates impact, and either adapts automatically or routes for review. Historical data remains stable.',
  behaviors: [
    'Schema changes detected through payload fingerprinting',
    'High-confidence changes apply automatically with audit logging',
    'Low-confidence changes pause and notify for human decision',
    'Historical data is never retroactively remapped unless explicitly requested',
  ],
};

const monitoringDetails = {
  title: 'Monitoring and resilience',
  description:
    'Continuous monitoring of data transmission, structure, and quality. Problems are surfaced before they impact downstream systems.',
  behaviors: [
    'Transmission health monitoring tracks source connectivity and data flow',
    'Alerting triggers on schema drift, volume anomalies, and quality degradation',
    'Downstream systems are protected from bad data through validation gates',
    'Full observability through structured logs and metrics export',
  ],
};

export default function TechnicalPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        headline="Technical architecture"
        subheadline="Live in days. Flat through every add-on. Ready for what you deploy next."
        ctaText="Schedule a Technical Session"
        ctaHref="/contact"
        variant="internal"
      />

      {/* Architecture Overview */}
      <section className="section-spacing bg-[var(--ms-border)]/30">
        <div className="container-site">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              headline="Architecture overview"
              subheadline="Where the Foundry sits in your data infrastructure."
            />
            {/* Medallion Architecture Diagram - Visual */}
            <div className="mb-8 p-6 md:p-8 rounded-lg bg-white border border-[var(--ms-border)]">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
                {/* Bronze - Source Systems */}
                <div className="flex flex-col items-center text-center p-4 min-w-[140px]">
                  {/* Database stack icon */}
                  <div className="w-16 h-16 mb-3 text-amber-600">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <ellipse cx="12" cy="6" rx="8" ry="3" />
                      <path d="M4 6v4c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
                      <path d="M4 10v4c0 1.66 3.58 3 8 3s8-1.34 8-3v-4" />
                      <path d="M4 14v4c0 1.66 3.58 3 8 3s8-1.34 8-3v-4" />
                    </svg>
                  </div>
                  <div className="text-xs uppercase tracking-wide text-amber-600 font-semibold mb-1">
                    Bronze
                  </div>
                  <div className="font-display font-semibold text-[var(--ms-heading)] text-lg">
                    Source Systems
                  </div>
                  <div className="text-sm text-[var(--ms-body)]">
                    Raw data as-is
                  </div>
                </div>

                {/* Arrow 1 - Desktop */}
                <div className="hidden md:flex items-center text-[var(--ms-muted)]">
                  <svg
                    className="w-12 h-8"
                    viewBox="0 0 48 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M0 12h40M34 6l8 6-8 6" />
                  </svg>
                </div>
                {/* Arrow 1 - Mobile */}
                <div className="md:hidden text-[var(--ms-muted)]">
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 5v14M5 12l7 7 7-7" />
                  </svg>
                </div>

                {/* Foundry - Center, highlighted */}
                <div className="flex flex-col items-center text-center p-6 min-w-[180px] rounded-xl bg-[rgba(74,111,165,0.1)] border-2 border-[var(--ms-primary)]/40">
                  {/* Gear/cog icon */}
                  <div className="w-16 h-16 mb-3 text-[var(--ms-primary)]">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <circle cx="12" cy="12" r="3" />
                      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
                    </svg>
                  </div>
                  <div className="text-xs uppercase tracking-wide text-[var(--ms-primary)] font-semibold mb-1">
                    Bronze → Silver
                  </div>
                  <div className="font-display font-semibold text-[var(--ms-heading)] text-lg">
                    MTN Data Foundry
                  </div>
                  <div className="text-sm text-[var(--ms-body)]">
                    Adaptive transition layer
                  </div>
                </div>

                {/* Arrow 2 - Desktop */}
                <div className="hidden md:flex items-center text-[var(--ms-muted)]">
                  <svg
                    className="w-12 h-8"
                    viewBox="0 0 48 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M0 12h40M34 6l8 6-8 6" />
                  </svg>
                </div>
                {/* Arrow 2 - Mobile */}
                <div className="md:hidden text-[var(--ms-muted)]">
                  <svg
                    className="w-8 h-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 5v14M5 12l7 7 7-7" />
                  </svg>
                </div>

                {/* Silver/Gold - Downstream */}
                <div className="flex flex-col items-center text-center p-4 min-w-[140px]">
                  {/* Chart/bar icon */}
                  <div className="w-16 h-16 mb-3 text-yellow-600">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M18 20V10M12 20V4M6 20v-6" />
                    </svg>
                  </div>
                  <div className="text-xs uppercase tracking-wide text-yellow-600 font-semibold mb-1">
                    Silver / Gold
                  </div>
                  <div className="font-display font-semibold text-[var(--ms-heading)] text-lg">
                    Your Platform
                  </div>
                  <div className="text-sm text-[var(--ms-body)]">
                    Business-ready
                  </div>
                  <div className="text-xs text-[var(--ms-muted)] mt-1 italic">
                    feeds reporting, AI, and agents alike
                  </div>
                </div>
              </div>
            </div>

            <div className="prose prose-gray max-w-none">
              <p className="text-[var(--ms-heading)] leading-relaxed mb-4">
                MTN Data Foundry is an adaptive transition layer. It detects schemas automatically,
                maps them to canonical concepts with confidence-based governance, and self-heals
                when sources change.
              </p>
              <p className="text-[var(--ms-heading)] leading-relaxed mb-4">
                Whether you use medallion architecture, data mesh, or your own layered approach,
                the transition from raw source data to governed, consistent output is traditionally
                the most fragile point. MTN Data Foundry operates at this boundary—automatically
                detecting structure, mapping to a canonical layer, and adapting when source schemas change.
              </p>
              <p className="text-[var(--ms-body)] text-base mb-6">
                Medallion terminology provides a familiar reference point. The Foundry itself is
                architecture-agnostic and works with any pipeline that requires resilient schema mapping.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 rounded-lg bg-white border border-[var(--ms-border)]">
                  <h4 className="font-display text-[var(--ms-heading)] mb-2">
                    What it does
                  </h4>
                  <ul className="space-y-2 text-base text-[var(--ms-body)]">
                    <li>• Ingests bronze-layer data from any source</li>
                    <li>• Maps to silver-layer semantic definitions</li>
                    <li>• Adapts when source schemas change</li>
                    <li>• Outputs governed, consistent data downstream</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg bg-white border border-[var(--ms-border)]">
                  <h4 className="font-display text-[var(--ms-heading)] mb-2">
                    What it does not do
                  </h4>
                  <ul className="space-y-2 text-base text-[var(--ms-body)]">
                    <li>• Replace your silver or gold layers</li>
                    <li>• Compete with your warehouse or BI tools</li>
                    <li>• Require changes to source systems</li>
                    <li>• Store data long-term (it&apos;s a transition layer)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How the Foundry delivers */}
      <section className="section-spacing">
        <div className="container-site">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              headline="How the Foundry delivers."
              subheadline="Three promises, mapped to the architecture below."
            />
            <div className="p-6 rounded-lg bg-white border border-[var(--ms-border)]">
              <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-x-6 gap-y-4 md:gap-y-5">
                <div className="font-display font-semibold text-[var(--ms-heading)] text-lg">
                  Live in days
                </div>
                <p className="text-base text-[var(--ms-body)] leading-relaxed">
                  Schema detection, payload fingerprinting, suggested mappings with confidence scoring.
                </p>
                <div className="hidden md:block md:col-span-2 border-t border-[var(--ms-border)]" />
                <div className="font-display font-semibold text-[var(--ms-heading)] text-lg">
                  Flat through every add-on
                </div>
                <p className="text-base text-[var(--ms-body)] leading-relaxed">
                  Self-healing on schema changes, immutable mapping versions, forward-only adaptation.
                </p>
                <div className="hidden md:block md:col-span-2 border-t border-[var(--ms-border)]" />
                <div className="font-display font-semibold text-[var(--ms-heading)] text-lg">
                  Ready for what you deploy next
                </div>
                <p className="text-base text-[var(--ms-body)] leading-relaxed">
                  Canonical concept layer, model-agnostic outputs, BAA-aware lineage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ingestion Section */}
      <section className="section-spacing bg-[var(--ms-border)]/30">
        <div className="container-site">
          <div className="max-w-3xl mx-auto">
            <TechnicalSection {...ingestionDetails} />
            <p className="text-[var(--ms-body)] leading-relaxed mt-4">
              Output endpoints respect downstream contracts: SQL, REST, event streams, and dbt-compatible models.
            </p>
          </div>
        </div>
      </section>

      {/* Mapping Section */}
      <section className="section-spacing">
        <div className="container-site">
          <div className="max-w-3xl mx-auto">
            <TechnicalSection
              {...mappingDetails}
              intro={
                <p className="text-[var(--ms-body)] leading-relaxed">
                  A canonical concept is a stable, healthcare-aware definition: <em>patient</em>, <em>encounter</em>, <em>claim</em>, <em>medication</em>, <em>schedule</em>, <em>provider</em>. Each concept has a target schema, vocabulary bindings (SNOMED CT, ICD-10, LOINC, RxNorm, CPT, NPI), and identity-resolution rules. The Foundry annotates source schemas first; canonical definitions emerge from the patterns across annotated sources, or anchor to an external target like FHIR, USCDI, or OMOP when one applies. The canonical layer grows with the portfolio: new concepts can be added, and existing concepts can be refined without breaking downstream consumers.
                </p>
              }
            />

            {/* Governance detail box */}
            <div className="mt-8 p-6 rounded-lg bg-white border border-[var(--ms-border)]">
              <h4 className="font-display text-[var(--ms-heading)] mb-3">
                Governance model
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div className="font-display font-semibold text-lg text-[var(--ms-heading)] mb-1">
                    Confidence thresholds
                  </div>
                  <p className="text-base text-[var(--ms-body)]">
                    Configurable thresholds control automation vs. human review
                  </p>
                </div>
                <div>
                  <div className="font-display font-semibold text-lg text-[var(--ms-heading)] mb-1">
                    Audit logging
                  </div>
                  <p className="text-base text-[var(--ms-body)]">
                    Every decision is logged for compliance and debugging
                  </p>
                </div>
                <div>
                  <div className="font-display font-semibold text-lg text-[var(--ms-heading)] mb-1">
                    Version control
                  </div>
                  <p className="text-base text-[var(--ms-body)]">
                    Mappings are versioned; rollback is always available
                  </p>
                </div>
                <div>
                  <div className="font-display font-semibold text-lg text-[var(--ms-heading)] mb-1">
                    Forward-only changes
                  </div>
                  <p className="text-base text-[var(--ms-body)]">
                    Backward compatibility guaranteed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Change Detection Section */}
      <section className="section-spacing bg-[var(--ms-border)]/30">
        <div className="container-site">
          <div className="max-w-3xl mx-auto">
            <TechnicalSection {...changeDetails} />
          </div>
        </div>
      </section>

      {/* Model-agnostic by design */}
      <section className="section-spacing">
        <div className="container-site">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              <h3 className="font-display text-xl text-[var(--ms-heading)]">
                Model-agnostic by design
              </h3>
              <p className="text-[var(--ms-body)] leading-relaxed">
                Whatever you deploy next, it reads from the same canonical layer.
              </p>
              <ul className="space-y-3 mt-4">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2 bg-[var(--ms-body)]" />
                  <span className="text-[var(--ms-heading)] text-base leading-relaxed">
                    <strong className="font-semibold">Models you deploy:</strong> Claude, GPT, Gemini, open-weight models, fine-tuned models, your own. Same data, no per-vendor pipeline.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2 bg-[var(--ms-body)]" />
                  <span className="text-[var(--ms-heading)] text-base leading-relaxed">
                    <strong className="font-semibold">Retrieval-friendly:</strong> canonical concepts are vector-embedding-ready and integrate with existing vector stores.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2 bg-[var(--ms-body)]" />
                  <span className="text-[var(--ms-heading)] text-base leading-relaxed">
                    <strong className="font-semibold">Tool-friendly:</strong> outputs structured data that downstream agents can call as tools without re-mapping.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2 bg-[var(--ms-body)]" />
                  <span className="text-[var(--ms-heading)] text-base leading-relaxed">
                    <strong className="font-semibold">BAA-aware:</strong> every model query lands inside the compliance perimeter; vendor BAAs flow through subprocessor relationships.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2 bg-[var(--ms-body)]" />
                  <span className="text-[var(--ms-heading)] text-base leading-relaxed">
                    <strong className="font-semibold">Auditable:</strong> every model interaction is logged at the canonical layer, not at each vendor.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Monitoring Section */}
      <section className="section-spacing bg-[var(--ms-border)]/30">
        <div className="container-site">
          <div className="max-w-3xl mx-auto">
            <TechnicalSection {...monitoringDetails} />
          </div>
        </div>
      </section>

      {/* Compliance and security */}
      <section className="section-spacing">
        <div className="container-site">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              headline="Compliance and security."
              subheadline="Designed for healthcare's regulatory perimeter, not retrofitted onto a generic platform."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg bg-white border border-[var(--ms-border)]">
                <h3 className="font-display text-[var(--ms-heading)] mb-3">
                  HIPAA and the BAA chain
                </h3>
                <p className="text-base text-[var(--ms-body)] leading-relaxed">
                  <strong className="font-semibold text-[var(--ms-heading)]">BAA-ready by default.</strong> The BAA chain extends through subprocessors, infrastructure providers, and model vendors, so PHI flowing into and out of the Foundry stays under one continuous chain of liability. Documentation artifacts align with HHS OCR audit expectations. Minimum-necessary access is enforced at the canonical layer, not bolted on at output.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-white border border-[var(--ms-border)]">
                <h3 className="font-display text-[var(--ms-heading)] mb-3">
                  42 CFR Part 2 and redisclosure
                </h3>
                <p className="text-base text-[var(--ms-body)] leading-relaxed">
                  Substance-use-disorder data is tagged at ingestion and tracked through every downstream consumer. Redisclosure restrictions are encoded in the lineage layer; a query that would violate Part 2 returns an error, not the data. Consent metadata travels with the record, not in a separate consent system.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-white border border-[var(--ms-border)]">
                <h3 className="font-display text-[var(--ms-heading)] mb-3">
                  State and federal regimes
                </h3>
                <p className="text-base text-[var(--ms-body)] leading-relaxed">
                  Aligned controls for California (CCPA, CPRA, CMIA, AB-3129), Washington (My Health My Data Act), Texas (Texas Data Privacy and Security Act), and the multi-state landscape (Colorado, Connecticut, Virginia, and others as they take effect). ONC information-blocking interfaces are respected; 21st Century Cures Act data-exchange requirements are supported out of the box. New regimes update at the canonical layer, not every pipeline.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-white border border-[var(--ms-border)]">
                <h3 className="font-display text-[var(--ms-heading)] mb-3">
                  Controls and audit
                </h3>
                <p className="text-base text-[var(--ms-body)] leading-relaxed">
                  <strong className="font-semibold text-[var(--ms-heading)]">SOC 2 Type II aligned controls.</strong> End-to-end encryption (TLS 1.3 in transit, AES-256 at rest). Role-based access with purpose-of-use metadata on every query. Comprehensive audit logging covers every mapping change, query, and model interaction, with retention tunable per regulation. Customer-managed keys available on cloud and on-premises deployments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment and Integration */}
      <section className="section-spacing bg-[var(--ms-border)]/30">
        <div className="container-site">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              headline="Deployment options"
              subheadline="Flexible deployment to fit your security and infrastructure requirements."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg bg-white border border-[var(--ms-border)]">
                <h3 className="font-display text-[var(--ms-heading)] mb-3">
                  Cloud-hosted
                </h3>
                <p className="text-base text-[var(--ms-body)] mb-4">
                  Managed deployment in your preferred cloud environment with
                  SOC 2 compliance and BAA support. BAA executed at deployment;
                  no separate negotiation per model vendor.
                </p>
                <ul className="space-y-2 text-base text-[var(--ms-body)]">
                  <li>• AWS, Azure, or GCP</li>
                  <li>• Single-tenant isolation</li>
                  <li>• Managed updates and monitoring</li>
                </ul>
              </div>
              <div className="p-6 rounded-lg bg-white border border-[var(--ms-border)]">
                <h3 className="font-display text-[var(--ms-heading)] mb-3">
                  On-premises
                </h3>
                <p className="text-base text-[var(--ms-body)] mb-4">
                  Deploy within your existing infrastructure for complete data
                  control and air-gapped environments. Fully air-gapped operation;
                  no model traffic leaves your VPC unless you configure it to.
                </p>
                <ul className="space-y-2 text-base text-[var(--ms-body)]">
                  <li>• Kubernetes or VM deployment</li>
                  <li>• No external data transmission</li>
                  <li>• Your security policies apply</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For deployment partners */}
      <section className="section-spacing">
        <div className="container-site">
          <div className="max-w-3xl mx-auto">
            <SectionHeader
              headline="For deployment partners."
              subheadline="If you're a forward-deployed engineer or SI technical lead, here's what's exposed."
            />
            <ul className="space-y-3 mt-4">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2 bg-[var(--ms-body)]" />
                <span className="text-[var(--ms-heading)] text-base leading-relaxed">
                  API documentation and OpenAPI specs
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2 bg-[var(--ms-body)]" />
                <span className="text-[var(--ms-heading)] text-base leading-relaxed">
                  Sandbox environments for pre-engagement schema introspection
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2 bg-[var(--ms-body)]" />
                <span className="text-[var(--ms-heading)] text-base leading-relaxed">
                  Mapping export, replay, and review endpoints
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2 bg-[var(--ms-body)]" />
                <span className="text-[var(--ms-heading)] text-base leading-relaxed">
                  Subprocessor BAA inheritance
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2 bg-[var(--ms-body)]" />
                <span className="text-[var(--ms-heading)] text-base leading-relaxed">
                  White-label deployment available
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Primary CTA */}
      <PrimaryCTABanner
        headline="Ready to discuss architecture?"
        description="We'll walk through how this fits your stack, your deployment plans, and your security review process, and answer technical questions in detail."
        ctaText="Schedule a Technical Session"
        ctaHref="/contact"
        variant="technical"
      />
    </>
  );
}
