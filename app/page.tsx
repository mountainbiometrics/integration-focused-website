import Hero from '@/components/content/Hero';
import SectionHeader from '@/components/content/SectionHeader';
import ProblemBullets from '@/components/content/ProblemBullets';
import OutcomeBullets from '@/components/content/OutcomeBullets';
import BeforeAfter from '@/components/comparison/BeforeAfter';
import ThreeStepFlow from '@/components/comparison/ThreeStepFlow';
import PrimaryCTABanner from '@/components/cta/PrimaryCTABanner';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        headline="End data blackout periods during consolidation and system change"
        subheadline="Keep reporting, revenue visibility, and operations live while underlying systems are being integrated. New systems onboarded in days to weeks, not months."
        ctaText="Talk Through Your Next Integration"
        ctaHref="/contact"
        variant="homepage"
      />

      {/* Problem Section */}
      <section className="section-spacing bg-[rgba(196,69,79,0.04)]">
        <div className="container-site">
          <div className="max-w-3xl mx-auto">
            <SectionHeader
              headline="Every acquisition creates a data blackout period"
              subheadline="During that blackout, critical business functions break down."
            />
            <ProblemBullets
              framing="When systems change, the same pattern repeats:"
              bullets={[
                "Executives lose reporting visibility for months after close",
                "Critical items slip through the cracks across fragmented systems",
                "Data teams scramble to patch pipelines that break repeatedly",
                "Operational decisions get delayed waiting for reliable data",
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
                  'Months of broken reporting after acquisitions',
                  'Manual reconciliation across fragmented systems',
                  'Pipelines break when schemas change',
                  'Revenue leakage during transitions',
                ],
              }}
              after={{
                title: 'With MTN Data Foundry',
                items: [
                  'Visibility stays live during system transitions',
                  'New systems integrated in days to weeks',
                  'Pipelines adapt automatically as data evolves',
                  'Operations continue without disruption',
                ],
              }}
              variant="withIcons"
            />

            <div className="mt-16">
              <OutcomeBullets
                headline="What changes for your organization"
                bullets={[
                  "Reporting continuity from day one of any acquisition",
                  "Less manual work and lower integration maintenance",
                  "Faster time to operational visibility",
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
              steps={[
                {
                  number: 1,
                  title: 'Ingest from any system',
                  description:
                    'Connect data from EHRs, billing systems, and vendors without custom development for each source.',
                },
                {
                  number: 2,
                  title: 'Map to a shared layer',
                  description:
                    'Data is automatically mapped to consistent concepts, with human oversight for uncertain cases.',
                },
                {
                  number: 3,
                  title: 'Adapt as schemas evolve',
                  description:
                    'When source systems change, mappings update automatically. No more broken pipelines.',
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
