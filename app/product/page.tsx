import type { Metadata } from 'next';
import Hero from '@/components/content/Hero';
import SectionHeader from '@/components/content/SectionHeader';
import OutcomeBullets from '@/components/content/OutcomeBullets';
import PrimaryCTABanner from '@/components/cta/PrimaryCTABanner';

export const metadata: Metadata = {
  title: 'Product | Mountain Biometrics',
  description:
    'MTN Data Foundry eliminates blackout periods during acquisitions and system changes. Learn how it works.',
};

const selfOrganizingBehaviors = [
  'Automatically recognizes new data structures when systems are connected',
  'Suggests mappings based on field values, naming patterns, and healthcare standards',
  'Reuses prior mappings when similar schemas appear across systems',
  'Routes low-confidence cases for human review instead of guessing',
];

const selfHealingScenarios = [
  {
    title: 'New fields added',
    description:
      'New fields are detected and either auto-mapped or flagged for review. Existing mappings remain stable.',
  },
  {
    title: 'Field names change',
    description:
      'Name changes are detected through value analysis. Mappings update without manual reconfiguration.',
  },
  {
    title: 'Data types shift',
    description:
      'Type changes are handled gracefully with appropriate conversions or explicit alerts.',
  },
  {
    title: 'Payload structure evolves',
    description:
      'Structural changes trigger re-evaluation. Historical data stays consistent while new data adapts.',
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {selfHealingScenarios.map((scenario, index) => (
              <div key={index} className="space-y-3">
                <h3 className="font-semibold text-[var(--color-neutral-dark)] text-lg">
                  {scenario.title}
                </h3>
                <p className="text-[var(--color-neutral-mid)] leading-relaxed">
                  {scenario.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-lg bg-white border border-[var(--color-neutral-lighter)]">
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
        ctaText="Start a Conversation"
        ctaHref="/contact"
      />
    </>
  );
}
