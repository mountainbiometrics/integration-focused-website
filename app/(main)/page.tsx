import Hero from '@/components/content/Hero';
import SectionHeader from '@/components/content/SectionHeader';
import ProblemBullets from '@/components/content/ProblemBullets';
import BeforeAfter from '@/components/comparison/BeforeAfter';
import AnimatedThreeStepFlow from '@/components/animation/AnimatedThreeStepFlow';
import ScrollReveal from '@/components/animation/ScrollReveal';
import PrimaryCTABanner from '@/components/cta/PrimaryCTABanner';
import { Network, RotateCw, Calendar, StopCircle, Database, ShieldAlert, Construction } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        headline="Close the visibility gap"
        subheadline="Every site, live in days. Flat through every add-on. Ready for what you deploy next."
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
                headline="Today, portfolios runs blind"
                subheadline="Each acquisition imports the same problem."
              />
            </ScrollReveal>
            <ScrollReveal stagger={0.15} distance={20}>
              <ProblemBullets
                variant="visual"
                iconBullets={[
                  { icon: Network, label: 'Sixteen-plus disconnected systems.' },
                  { icon: RotateCw, label: 'A new schema with every add-on.' },
                  { icon: Calendar, label: 'Reports a quarter behind the business.' },
                  { icon: StopCircle, label: 'Pilots that stall before they touch real data.' },
                ]}
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Deployment Blockers Section */}
      <section className="section-spacing bg-[var(--ms-surface-warm)]">
        <div className="container-site">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <SectionHeader
                headline="The wall the deployment vehicles will hit"
                subheadline="Three AI deployment vehicles, all assuming a data layer that doesn't exist."
                align="center"
              />
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <ScrollReveal stagger={0} distance={20}>
                <div
                  className="p-6 rounded-2xl bg-white border-l-[3px] border-l-[var(--ms-accent)]"
                  style={{ boxShadow: 'var(--ms-shadow-card-sm)' }}
                >
                  <div className="w-12 h-12 rounded-full bg-[rgba(172,31,45,0.08)] flex items-center justify-center mb-4">
                    <Database className="w-6 h-6 text-[var(--ms-accent)]" strokeWidth={1.5} />
                  </div>
                  <div className="font-display text-[var(--ms-heading)] text-xl mb-3">
                    Schemas
                  </div>
                  <p className="text-[var(--ms-body)] text-base leading-relaxed">
                    Every acquisition adds another EHR or feed.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal stagger={0.1} distance={20}>
                <div
                  className="p-6 rounded-2xl bg-white border-l-[3px] border-l-[var(--ms-accent)]"
                  style={{ boxShadow: 'var(--ms-shadow-card-sm)' }}
                >
                  <div className="w-12 h-12 rounded-full bg-[rgba(172,31,45,0.08)] flex items-center justify-center mb-4">
                    <ShieldAlert className="w-6 h-6 text-[var(--ms-accent)]" strokeWidth={1.5} />
                  </div>
                  <div className="font-display text-[var(--ms-heading)] text-xl mb-3">
                    Compliance
                  </div>
                  <p className="text-[var(--ms-body)] text-base leading-relaxed">
                    BAA chains don&apos;t extend to the next add-on.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal stagger={0.2} distance={20}>
                <div
                  className="p-6 rounded-2xl bg-white border-l-[3px] border-l-[var(--ms-accent)]"
                  style={{ boxShadow: 'var(--ms-shadow-card-sm)' }}
                >
                  <div className="w-12 h-12 rounded-full bg-[rgba(172,31,45,0.08)] flex items-center justify-center mb-4">
                    <Construction className="w-6 h-6 text-[var(--ms-accent)]" strokeWidth={1.5} />
                  </div>
                  <div className="font-display text-[var(--ms-heading)] text-xl mb-3">
                    Integration debt
                  </div>
                  <p className="text-[var(--ms-body)] text-base leading-relaxed">
                    Pilots stall before production.
                  </p>
                </div>
              </ScrollReveal>
            </div>
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
                    'Flat maintenance',
                  ],
                }}
                variant="withIcons"
                compact
              />
            </ScrollReveal>

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
                Built for regulated data
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
