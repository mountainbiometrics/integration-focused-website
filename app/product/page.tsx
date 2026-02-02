import type { Metadata } from 'next';
import Hero from '@/components/content/Hero';
import SectionHeader from '@/components/content/SectionHeader';
import OutcomeBullets from '@/components/content/OutcomeBullets';
import PrimaryCTABanner from '@/components/cta/PrimaryCTABanner';

export const metadata: Metadata = {
  title: 'Product | MTN',
  description:
    'MTN Data Foundry eliminates blackout periods during acquisitions and system changes. Learn how it works.',
};

const selfOrganizingBehaviors = [
  'Automatically recognizes new data structures when systems are connected',
  'Suggests mappings based on field values, naming patterns, and healthcare standards',
  'Routes low-confidence cases for human review instead of guessing',
];

const selfHealingScenarios = [
  {
    title: 'New fields added',
    description:
      'When sources add new data elements, the Foundry detects them automatically and suggests mappings based on similar fields it has seen before.',
    icon: (
      <svg className="w-6 h-6 text-[var(--color-cta-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Field names change',
    description:
      'Renamed fields are detected through value pattern matching, not just column headers. High-confidence matches apply automatically.',
    icon: (
      <svg className="w-6 h-6 text-[var(--color-cta-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
  },
  {
    title: 'Data types shift',
    description:
      'When vendors change data formats, the Foundry identifies the change and adjusts transformations without manual intervention.',
    icon: (
      <svg className="w-6 h-6 text-[var(--color-cta-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: 'Payload structure evolves',
    description:
      'Even significant structural changes are handled gracefully. The system presents a clear diff and applies updates with full audit logging.',
    icon: (
      <svg className="w-6 h-6 text-[var(--color-cta-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
];

export default function ProductPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        headline="Adaptive integration that stays live"
        subheadline="MTN Data Foundry adapts as systems change. No more broken pipelines, no more integration restarts, no more months of catch-up."
        ctaText="See How It Works"
        ctaHref="/contact"
        variant="internal"
      />

      {/* Product Overview */}
      <section className="section-spacing bg-[var(--color-neutral-lighter)]/30">
        <div className="container-site">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-neutral-dark)] mb-6">
              What MTN Data Foundry does
            </h2>
            <p className="text-lg text-[var(--color-neutral-mid)] leading-relaxed mb-8">
              The Foundry sits between your source systems and downstream tools,
              creating a consistent data layer that adapts automatically. It does
              not replace your warehouse, BI tools, or existing analytics
              infrastructure. It makes them resilient to change.
            </p>

            <OutcomeBullets
              bullets={[
                'Continuous visibility during acquisitions and system migrations',
                'Reduced integration maintenance burden over time',
                'Faster onboarding of new systems without custom development',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Self-Organizing Integration */}
      <section className="section-spacing">
        <div className="container-site">
          <SectionHeader
            headline="Self-organizing integration"
            subheadline="New systems come online quickly because the Foundry learns from existing mappings."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {selfOrganizingBehaviors.map((behavior, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border border-[var(--color-neutral-lighter)] bg-white"
              >
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[rgba(74,111,165,0.12)] flex items-center justify-center">
                    <span className="text-[var(--color-cta-blue)] font-semibold text-sm">
                      {index + 1}
                    </span>
                  </span>
                  <p className="text-[var(--color-neutral-dark)] leading-relaxed">
                    {behavior}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Self-Healing Pipelines */}
      <section className="section-spacing bg-[var(--color-neutral-lighter)]/30">
        <div className="container-site">
          <SectionHeader
            headline="Self-healing pipelines"
            subheadline="When source systems change, the Foundry adapts instead of breaking."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {selfHealingScenarios.map((scenario, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border border-[var(--color-neutral-lighter)] bg-white"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[rgba(74,111,165,0.1)] flex items-center justify-center">
                    {scenario.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--color-neutral-dark)] text-lg mb-2">
                      {scenario.title}
                    </h3>
                    <p className="text-[var(--color-neutral-mid)] leading-relaxed">
                      {scenario.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-lg bg-white border border-[var(--color-neutral-lighter)]">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[rgba(74,111,165,0.12)] flex items-center justify-center">
                <svg className="w-5 h-5 text-[var(--color-cta-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-[var(--color-neutral-dark)] mb-2">
                  No retroactive changes
                </h4>
                <p className="text-[var(--color-neutral-mid)]">
                  Historical data remains stable. Schema changes apply forward only,
                  unless you explicitly choose to reprocess. This preserves audit
                  trails and ensures downstream reports stay consistent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Continuous Monitoring */}
      <section className="section-spacing">
        <div className="container-site">
          <SectionHeader
            headline="Continuous monitoring"
            subheadline="Early warning before downstream tools break."
          />

          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-[var(--color-neutral-mid)] leading-relaxed mb-8">
              The Foundry monitors data transmission and structure continuously.
              Instead of discovering problems when reports fail or dashboards go
              blank, you get alerts before downstream impact occurs.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center p-6">
                <div className="text-[var(--color-cta-blue)] font-semibold text-lg mb-2">
                  Transmission health
                </div>
                <p className="text-sm text-[var(--color-neutral-mid)]">
                  Know when sources stop sending or change patterns
                </p>
              </div>
              <div className="text-center p-6">
                <div className="text-[var(--color-cta-blue)] font-semibold text-lg mb-2">
                  Schema drift
                </div>
                <p className="text-sm text-[var(--color-neutral-mid)]">
                  Detect structural changes before they cause failures
                </p>
              </div>
              <div className="text-center p-6">
                <div className="text-[var(--color-cta-blue)] font-semibold text-lg mb-2">
                  Quality alerts
                </div>
                <p className="text-sm text-[var(--color-neutral-mid)]">
                  Flag anomalies in data values and completeness
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Primary CTA */}
      <PrimaryCTABanner
        headline="See how this fits your stack"
        description="We'll walk through your current systems and show how the Foundry would integrate."
        ctaText="See How It Fits Your Stack"
        ctaHref="/contact"
      />
    </>
  );
}
