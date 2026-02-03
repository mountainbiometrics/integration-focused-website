import Hero from '@/components/content/Hero';
import SectionHeader from '@/components/content/SectionHeader';
import ProblemBullets from '@/components/content/ProblemBullets';
import OutcomeBullets from '@/components/content/OutcomeBullets';
import BeforeAfter from '@/components/comparison/BeforeAfter';
import ThreeStepFlow from '@/components/comparison/ThreeStepFlow';
import PrimaryCTABanner from '@/components/cta/PrimaryCTABanner';
import { TrendingDown, Layers, Unplug, Clock, Database, GitMerge, RefreshCw, Activity, Zap, Shield } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        headline="End data blackout periods during acquisitions, vendor transitions, and scaling"
        subheadline="Keep reporting, revenue visibility, and operations live while underlying systems are being integrated. New systems onboarded in days to weeks, not months."
        ctaText="Talk Through Your Next Integration"
        ctaHref="/contact"
        variant="homepage"
      />

      {/* Uses Include Section */}
      <section className="section-spacing">
        <div className="container-site">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-lg font-medium text-[var(--color-neutral-mid)] text-center mb-8">
              Transform
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-lg border border-[var(--color-neutral-lighter)] bg-white text-center">
                <div className="font-semibold text-[var(--color-neutral-dark)] mb-2">
                  Acquisitions & rollups
                </div>
                <p className="text-sm text-[var(--color-neutral-mid)]">
                  Keep consolidated reporting live
                </p>
              </div>
              <div className="p-6 rounded-lg border border-[var(--color-neutral-lighter)] bg-white text-center">
                <div className="font-semibold text-[var(--color-neutral-dark)] mb-2">
                  Revenue cycle visibility
                </div>
                <p className="text-sm text-[var(--color-neutral-mid)]">
                  Unify denial signals across systems
                </p>
              </div>
              <div className="p-6 rounded-lg border border-[var(--color-neutral-lighter)] bg-white text-center">
                <div className="font-semibold text-[var(--color-neutral-dark)] mb-2">
                  Digital health scaling
                </div>
                <p className="text-sm text-[var(--color-neutral-mid)]">
                  Onboard new data sources without custom mapping
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section-spacing bg-[rgba(196,69,79,0.04)]">
        <div className="container-site">
          <div className="max-w-3xl mx-auto">
            <SectionHeader
              headline="Every acquisition or expansion creates a data blackout period"
              subheadline="When systems change, the same pattern repeats."
            />
            <ProblemBullets
              variant="visual"
              iconBullets={[
                { icon: TrendingDown, label: 'Lost visibility' },
                { icon: Layers, label: 'Fragmented systems' },
                { icon: Unplug, label: 'Broken pipelines' },
                { icon: Clock, label: 'Delayed decisions' },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Outcome Section */}
      <section className="section-spacing">
        <div className="container-site">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              headline="Integration without the blackout"
              subheadline="Visibility and operations continue while systems evolve underneath."
              variant="emphasis"
            />

            <BeforeAfter
              before={{
                title: 'Traditional Integration',
                items: [
                  'Broken reporting',
                  'Manual reconciliation',
                  'Fragile pipelines',
                  'Revenue leakage',
                ],
              }}
              after={{
                title: 'With MTN Data Foundry',
                items: [
                  'Live visibility',
                  'Fast integration',
                  'Auto-adapting',
                  'Zero disruption',
                ],
              }}
              variant="withIcons"
              compact
            />

            <div className="mt-16 max-w-4xl mx-auto">
              <OutcomeBullets
                headline="What changes for your organization"
                variant="metricCards"
                align="center"
                metricCards={[
                  { icon: Activity, metric: 'Day One', label: 'Visibility' },
                  { icon: Zap, metric: 'Days to Weeks', label: 'Integration' },
                  { icon: Shield, metric: 'Zero', label: 'Disruption' },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-spacing bg-[var(--color-neutral-lighter)]/30">
        <div className="container-site">
          <div className="max-w-5xl mx-auto">
            <SectionHeader
              headline="How it works"
              subheadline="A shared semantic layer that adapts as your systems change."
              align="center"
            />

            <ThreeStepFlow
              variant="iconForward"
              steps={[
                {
                  number: 1,
                  title: 'Ingest',
                  description: 'Connect any data source',
                  icon: Database,
                },
                {
                  number: 2,
                  title: 'Map',
                  description: 'Auto-map to shared concepts',
                  icon: GitMerge,
                },
                {
                  number: 3,
                  title: 'Adapt',
                  description: 'Schemas evolve, pipelines don\'t break',
                  icon: RefreshCw,
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Credibility Section */}
      <section className="section-spacing">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-neutral-dark)] mb-8">
              Built for healthcare data integration
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6">
                <div className="text-[var(--color-cta-blue)] font-semibold text-lg mb-2">
                  Enterprise-grade
                </div>
                <p className="text-[var(--color-neutral-mid)] text-sm">
                  Full audit logging, versioned mappings, and governance controls
                </p>
              </div>
              <div className="p-6">
                <div className="text-[var(--color-cta-blue)] font-semibold text-lg mb-2">
                  Human-in-the-loop
                </div>
                <p className="text-[var(--color-neutral-mid)] text-sm">
                  Uncertain mappings routed for review. Your team stays in control.
                </p>
              </div>
              <div className="p-6">
                <div className="text-[var(--color-cta-blue)] font-semibold text-lg mb-2">
                  Non-disruptive
                </div>
                <p className="text-[var(--color-neutral-mid)] text-sm">
                  Works alongside your existing warehouse and BI tools
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Primary CTA Section */}
      <PrimaryCTABanner
        headline="Ready to discuss your next integration?"
        description="We'll walk through your specific scenario and show how visibility can stay live during your transition."
        ctaText="Talk Through Your Scenario"
        ctaHref="/contact"
      />
    </>
  );
}
