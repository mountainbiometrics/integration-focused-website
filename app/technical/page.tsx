import type { Metadata } from 'next';
import Hero from '@/components/content/Hero';
import SectionHeader from '@/components/content/SectionHeader';
import TechnicalSection from '@/components/technical/TechnicalSection';
import PrimaryCTABanner from '@/components/cta/PrimaryCTABanner';

export const metadata: Metadata = {
  title: 'Technical Overview | Mountain Biometrics',
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
        subheadline="How MTN Data Foundry works under the hood. Built for engineers who need to understand system behavior before recommending adoption."
        ctaText="Schedule a Technical Session"
        ctaHref="/contact"
        variant="internal"
      />

      {/* Architecture Overview */}
      <section className="section-spacing bg-[var(--color-neutral-lighter)]/30">
        <div className="container-site">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              headline="Architecture overview"
              subheadline="Where the Foundry sits in your data infrastructure."
            />
            {/* Medallion Architecture Diagram - Visual */}
            <div className="mb-8 p-6 md:p-8 rounded-lg bg-white border border-[var(--color-neutral-lighter)]">
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
                  <div className="font-semibold text-[var(--color-neutral-dark)] text-lg">
                    Source Systems
                  </div>
                  <div className="text-sm text-[var(--color-neutral-mid)]">
                    Raw data as-is
                  </div>
                </div>

                {/* Arrow 1 - Desktop */}
                <div className="hidden md:flex items-center text-[var(--color-neutral-light)]">
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
                <div className="md:hidden text-[var(--color-neutral-light)]">
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
                <div className="flex flex-col items-center text-center p-6 min-w-[180px] rounded-xl bg-[rgba(74,111,165,0.1)] border-2 border-[var(--color-cta-blue)]/40">
                  {/* Gear/cog icon */}
                  <div className="w-16 h-16 mb-3 text-[var(--color-cta-blue)]">
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
                  <div className="text-xs uppercase tracking-wide text-[var(--color-cta-blue)] font-semibold mb-1">
                    Bronze → Silver
                  </div>
                  <div className="font-semibold text-[var(--color-neutral-dark)] text-lg">
                    MTN Data Foundry
                  </div>
                  <div className="text-sm text-[var(--color-neutral-mid)]">
                    Adaptive transition layer
                  </div>
                </div>

                {/* Arrow 2 - Desktop */}
                <div className="hidden md:flex items-center text-[var(--color-neutral-light)]">
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
                <div className="md:hidden text-[var(--color-neutral-light)]">
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
                  <div className="font-semibold text-[var(--color-neutral-dark)] text-lg">
                    Your Platform
                  </div>
                  <div className="text-sm text-[var(--color-neutral-mid)]">
                    Business-ready
                  </div>
                </div>
              </div>
            </div>

            <div className="prose prose-gray max-w-none">
              <p className="text-[var(--color-neutral-dark)] leading-relaxed mb-6">
                In a medallion architecture, the bronze-to-silver transition—where
                schemas are normalized and fields mapped—is traditionally the most
                fragile point. MTN Data Foundry operates at this boundary,
                automatically detecting structure, mapping to a canonical layer,
                and adapting when source schemas change.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 rounded-lg bg-white border border-[var(--color-neutral-lighter)]">
                  <h4 className="font-semibold text-[var(--color-neutral-dark)] mb-2">
                    What it does
                  </h4>
                  <ul className="space-y-2 text-sm text-[var(--color-neutral-mid)]">
                    <li>• Ingests bronze-layer data from any source</li>
                    <li>• Maps to silver-layer semantic definitions</li>
                    <li>• Adapts when source schemas change</li>
                    <li>• Outputs governed, consistent data downstream</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg bg-white border border-[var(--color-neutral-lighter)]">
                  <h4 className="font-semibold text-[var(--color-neutral-dark)] mb-2">
                    What it does not do
                  </h4>
                  <ul className="space-y-2 text-sm text-[var(--color-neutral-mid)]">
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

      {/* Ingestion Section */}
      <section className="section-spacing">
        <div className="container-site">
          <div className="max-w-3xl mx-auto">
            <TechnicalSection {...ingestionDetails} />
          </div>
        </div>
      </section>

      {/* Mapping Section */}
      <section className="section-spacing bg-[var(--color-neutral-lighter)]/30">
        <div className="container-site">
          <div className="max-w-3xl mx-auto">
            <TechnicalSection {...mappingDetails} />

            {/* Governance detail box */}
            <div className="mt-8 p-6 rounded-lg bg-white border border-[var(--color-neutral-lighter)]">
              <h4 className="font-semibold text-[var(--color-neutral-dark)] mb-3">
                Governance model
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-medium text-[var(--color-neutral-dark)] mb-1">
                    Confidence thresholds
                  </div>
                  <p className="text-[var(--color-neutral-mid)]">
                    Configurable thresholds control automation vs. human review
                  </p>
                </div>
                <div>
                  <div className="font-medium text-[var(--color-neutral-dark)] mb-1">
                    Audit logging
                  </div>
                  <p className="text-[var(--color-neutral-mid)]">
                    Every decision is logged for compliance and debugging
                  </p>
                </div>
                <div>
                  <div className="font-medium text-[var(--color-neutral-dark)] mb-1">
                    Version control
                  </div>
                  <p className="text-[var(--color-neutral-mid)]">
                    Mappings are versioned; rollback is always available
                  </p>
                </div>
                <div>
                  <div className="font-medium text-[var(--color-neutral-dark)] mb-1">
                    Forward-only changes
                  </div>
                  <p className="text-[var(--color-neutral-mid)]">
                    Historical data stays stable unless explicit reprocessing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Change Detection Section */}
      <section className="section-spacing">
        <div className="container-site">
          <div className="max-w-3xl mx-auto">
            <TechnicalSection {...changeDetails} />
          </div>
        </div>
      </section>

      {/* Monitoring Section */}
      <section className="section-spacing bg-[var(--color-neutral-lighter)]/30">
        <div className="container-site">
          <div className="max-w-3xl mx-auto">
            <TechnicalSection {...monitoringDetails} />
          </div>
        </div>
      </section>

      {/* Deployment and Integration */}
      <section className="section-spacing">
        <div className="container-site">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              headline="Deployment options"
              subheadline="Flexible deployment to fit your security and infrastructure requirements."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg border border-[var(--color-neutral-lighter)]">
                <h3 className="font-semibold text-[var(--color-neutral-dark)] mb-3">
                  Cloud-hosted
                </h3>
                <p className="text-sm text-[var(--color-neutral-mid)] mb-4">
                  Managed deployment in your preferred cloud environment with
                  SOC 2 compliance and BAA support.
                </p>
                <ul className="space-y-2 text-sm text-[var(--color-neutral-mid)]">
                  <li>• AWS, Azure, or GCP</li>
                  <li>• Single-tenant isolation</li>
                  <li>• Managed updates and monitoring</li>
                </ul>
              </div>
              <div className="p-6 rounded-lg border border-[var(--color-neutral-lighter)]">
                <h3 className="font-semibold text-[var(--color-neutral-dark)] mb-3">
                  On-premises
                </h3>
                <p className="text-sm text-[var(--color-neutral-mid)] mb-4">
                  Deploy within your existing infrastructure for complete data
                  control and air-gapped environments.
                </p>
                <ul className="space-y-2 text-sm text-[var(--color-neutral-mid)]">
                  <li>• Kubernetes or VM deployment</li>
                  <li>• No external data transmission</li>
                  <li>• Your security policies apply</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Primary CTA */}
      <PrimaryCTABanner
        headline="Ready to discuss architecture?"
        description="We'll walk through how this fits your specific stack and answer technical questions in detail."
        ctaText="Schedule a Technical Session"
        ctaHref="/contact"
        variant="technical"
      />
    </>
  );
}
