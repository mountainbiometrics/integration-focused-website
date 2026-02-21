import Hero from '@/components/content/Hero';
import SectionHeader from '@/components/content/SectionHeader';
import ProblemBullets from '@/components/content/ProblemBullets';
import OutcomeBullets from '@/components/content/OutcomeBullets';
import BeforeAfter from '@/components/comparison/BeforeAfter';
import AnimatedThreeStepFlow from '@/components/animation/AnimatedThreeStepFlow';
import ScrollReveal from '@/components/animation/ScrollReveal';
import PrimaryCTABanner from '@/components/cta/PrimaryCTABanner';
import { TrendingDown, Layers, Unplug, Clock, Activity, Zap, Shield } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        headline="Close the visibility gap"
        subheadline="New systems online in days · Flat maintenance demands"
        ctaText="Talk Through Your Next Integration"
        ctaHref="/contact"
        variant="homepage"
      />

      {/* Problem Section */}
      <section className="section-spacing bg-[var(--ms-surface-warm)]">
        <div className="container-site">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <SectionHeader
                headline="Every acquisition or expansion creates a data visibility gap"
                subheadline="When systems change, the same pattern repeats."
              />
            </ScrollReveal>
            <ScrollReveal stagger={0.15} distance={20}>
              <ProblemBullets
                variant="visual"
                iconBullets={[
                  { icon: TrendingDown, label: 'Lost visibility' },
                  { icon: Layers, label: 'Fragmented systems' },
                  { icon: Unplug, label: 'Stalled pipelines' },
                  { icon: Clock, label: 'Delayed decisions' },
                ]}
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Outcome Section */}
      <section className="section-spacing">
        <div className="container-site">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <SectionHeader
                headline="Integration without a gap"
                subheadline="Visibility and operations continue while systems evolve underneath."
                variant="emphasis"
              />
            </ScrollReveal>

            <ScrollReveal stagger={0.15} distance={20}>
              <BeforeAfter
                before={{
                  title: 'Traditional Integration',
                  items: [
                    'Delayed reporting',
                    'Manual reconciliation',
                    'Stalled pipelines',
                    'Revenue at risk',
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
            </ScrollReveal>

            <div className="mt-16 max-w-4xl mx-auto">
              <ScrollReveal stagger={0.1}>
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
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-spacing bg-[var(--ms-surface)]">
        <div className="container-site">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <SectionHeader
                headline="How it works"
                subheadline="A integration layer framework that minimizes visibility disruption."
                align="center"
              />
            </ScrollReveal>

            <AnimatedThreeStepFlow
              steps={[
                {
                  number: 1,
                  title: 'Ingest',
                  description: 'Connect any data source',
                  icon: 'Database',
                },
                {
                  number: 2,
                  title: 'Map',
                  description: 'Auto-map to shared concepts',
                  icon: 'GitMerge',
                },
                {
                  number: 3,
                  title: 'Adapt',
                  description: 'Schemas evolve, pipelines adapt',
                  icon: 'RefreshCw',
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Credibility Section */}
      <section className="section-spacing">
        <div className="container-site">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="font-display leading-[1.12] text-[var(--ms-heading)] text-2xl md:text-3xl mb-8">
                Built for healthcare data integration
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ScrollReveal stagger={0} distance={20}>
                <div
                  className="p-6 rounded-2xl bg-white border-l-[3px] border-l-[var(--ms-accent)]"
                  style={{ boxShadow: 'var(--ms-shadow-card-sm)' }}
                >
                  <div className="font-display text-[var(--ms-accent)] text-lg mb-2">
                    Enterprise-grade
                  </div>
                  <p className="text-[var(--ms-body)] text-base">
                    Full audit logging, versioned mappings, and governance controls
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal stagger={0.1} distance={20}>
                <div
                  className="p-6 rounded-2xl bg-white border-l-[3px] border-l-[var(--ms-accent)]"
                  style={{ boxShadow: 'var(--ms-shadow-card-sm)' }}
                >
                  <div className="font-display text-[var(--ms-accent)] text-lg mb-2">
                    Human-in-the-loop
                  </div>
                  <p className="text-[var(--ms-body)] text-base">
                    Uncertain mappings routed for review. Your team stays in control.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal stagger={0.2} distance={20}>
                <div
                  className="p-6 rounded-2xl bg-white border-l-[3px] border-l-[var(--ms-accent)]"
                  style={{ boxShadow: 'var(--ms-shadow-card-sm)' }}
                >
                  <div className="font-display text-[var(--ms-accent)] text-lg mb-2">
                    Non-disruptive
                  </div>
                  <p className="text-[var(--ms-body)] text-base">
                    Works alongside your existing warehouse and BI tools
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal stagger={0.3} distance={20}>
                <div
                  className="p-6 rounded-2xl bg-white border-l-[3px] border-l-[var(--ms-accent)]"
                  style={{ boxShadow: 'var(--ms-shadow-card-sm)' }}
                >
                  <div className="font-display text-[var(--ms-accent)] text-lg mb-2">
                    Security
                  </div>
                  <p className="text-[var(--ms-body)] text-base">
                    SOC 2-aligned controls, end-to-end encryption, and role-based access
                  </p>
                </div>
              </ScrollReveal>
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
