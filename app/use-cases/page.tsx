import type { Metadata } from 'next';
import Hero from '@/components/content/Hero';
import SectionHeader from '@/components/content/SectionHeader';
import UseCaseNarrative from '@/components/use-case/UseCaseNarrative';
import PrimaryCTABanner from '@/components/cta/PrimaryCTABanner';

export const metadata: Metadata = {
  title: 'Use Cases | Mountain Biometrics',
  description:
    'See how MTN Data Foundry solves real problems during acquisitions, rollups, revenue cycle management, and digital health scaling.',
};

const acquisitionNarrative = {
  before: {
    title: 'The typical post-close chaos',
    description:
      'After an acquisition closes, the data integration work begins. Teams scramble to connect systems while operations continue.',
    points: [
      'Executives have no consolidated reporting for 3-6 months',
      'Data engineering starts building custom pipelines under time pressure',
      'Operational decisions wait for data that may never arrive cleanly',
    ],
  },
  during: {
    title: 'How MTN Data Foundry changes the transition',
    description:
      'With the Foundry, visibility starts within days of connecting systems. No waiting for perfect schema alignment.',
    points: [
      'Raw data from acquired systems connects immediately',
      'Mappings are suggested automatically based on prior integrations',
      'Reporting starts flowing while edge cases are still being refined',
    ],
  },
  after: {
    title: 'The steady state',
    description:
      'Once integrated, the Foundry maintains visibility as both systems continue to evolve. No more catch-up work.',
    points: [
      'Consolidated reporting across all entities',
      'Schema changes handled automatically going forward',
      'Foundation ready for the next acquisition',
    ],
  },
};

const rcmNarrative = {
  before: {
    title: 'Fragmented denial management',
    description:
      'When billing systems, clearinghouses, and payer portals don\'t talk to each other, revenue slips through the cracks.',
    points: [
      'Denial queues exist in multiple systems with no unified view',
      'Aging denials get missed because they live in different silos',
      'Leadership gets delayed reports built from inconsistent data',
    ],
  },
  during: {
    title: 'Unified visibility without system replacement',
    description:
      'The Foundry creates a consistent view across systems without requiring anyone to change their workflows or tools.',
    points: [
      'Denial data flows from all sources into a unified layer',
      'Staff work from a single prioritized queue',
      'No retraining required for operational staff',
    ],
  },
  after: {
    title: 'Operational clarity',
    description:
      'Revenue cycle teams work from complete information. Leadership gets reliable metrics. Nothing falls through the cracks.',
    points: [
      'Real-time visibility into denial aging across all payers',
      'Reduced time on manual reconciliation',
      'Consistent metrics for performance tracking',
    ],
  },
};

const digitalHealthNarrative = {
  before: {
    title: 'The scaling bottleneck',
    description:
      'As digital health companies grow, each new customer or device type creates integration overhead.',
    points: [
      'Every new customer requires custom data mapping work',
      'Device vendors change data formats without warning',
      'Scaling means multiplying integration complexity',
    ],
  },
  during: {
    title: 'How MTN Data Foundry accelerates onboarding',
    description:
      'The Foundry learns from each integration, making subsequent onboarding faster.',
    points: [
      'New data sources connect with minimal custom development',
      'Schema changes from device vendors handled automatically',
      'Engineering focuses on product, not data plumbing',
    ],
  },
  after: {
    title: 'Scalable data infrastructure',
    description:
      'A foundation that grows with your customer base instead of against it.',
    points: [
      'Faster time-to-value for new customer deployments',
      'Consistent data quality across all sources',
      'Engineering bandwidth freed for innovation',
    ],
  },
};

export default function UseCasesPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        headline="Where this makes a difference"
        subheadline="Real operational moments where MTN Data Foundry prevents data blackouts and keeps teams productive."
        ctaText="Discuss Your Scenario"
        ctaHref="/contact"
        variant="internal"
      />

      {/* Use Case 1: Acquisitions */}
      <section className="section-spacing">
        <div className="container-site">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              headline="Acquisitions rollups, and scaling"
              subheadline="Eliminate the months-long visibility gap after every system integration."
              variant="emphasis"
            />
            <UseCaseNarrative {...acquisitionNarrative} />
          </div>
        </div>
      </section>

      {/* Use Case 2: RCM */}
      <section className="section-spacing bg-[var(--color-neutral-lighter)]/30">
        <div className="container-site">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              headline="Revenue cycle and denial visibility"
              subheadline="Stop losing revenue to fragmented systems and manual reconciliation."
              variant="emphasis"
            />
            <UseCaseNarrative {...rcmNarrative} />
          </div>
        </div>
      </section>

      {/* Use Case 3: Digital Health Scaling */}
      <section className="section-spacing">
        <div className="container-site">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              headline="Digital health and RPM scaling"
              subheadline="Onboard new customers and data sources without rebuilding integrations."
              variant="emphasis"
            />
            <UseCaseNarrative {...digitalHealthNarrative} />
          </div>
        </div>
      </section>

      {/* Additional context */}
      <section className="section-spacing bg-[var(--color-neutral-lighter)]/30">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-neutral-dark)] mb-6">
              These are starting points
            </h2>
            <p className="text-lg text-[var(--color-neutral-mid)] leading-relaxed mb-8">
              The Foundry adapts to your specific scenario. Whether you&apos;re
              managing a single transition or building infrastructure for ongoing
              consolidation, we&apos;ll design an approach that fits your
              operational reality.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
              <div className="p-6 rounded-lg bg-white border border-[var(--color-neutral-lighter)]">
                <h3 className="font-semibold text-[var(--color-neutral-dark)] mb-2">
                  Multi-clinic consolidation
                </h3>
                <p className="text-sm text-[var(--color-neutral-mid)]">
                  Bringing together multiple locations with different systems and
                  workflows
                </p>
              </div>
              <div className="p-6 rounded-lg bg-white border border-[var(--color-neutral-lighter)]">
                <h3 className="font-semibold text-[var(--color-neutral-dark)] mb-2">
                  Vendor transitions
                </h3>
                <p className="text-sm text-[var(--color-neutral-mid)]">
                  Switching billing vendors, clearinghouses, or analytics
                  platforms without losing continuity
                </p>
              </div>
              <div className="p-6 rounded-lg bg-white border border-[var(--color-neutral-lighter)]">
                <h3 className="font-semibold text-[var(--color-neutral-dark)] mb-2">
                  Reporting standardization
                </h3>
                <p className="text-sm text-[var(--color-neutral-mid)]">
                  Creating consistent metrics across heterogeneous systems and
                  entities
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Primary CTA */}
      <PrimaryCTABanner
        headline="What's your integration scenario?"
        description="We'll walk through your specific situation and show how the Foundry would fit."
        ctaText="Discuss Your Integration"
        ctaHref="/contact"
      />
    </>
  );
}
