import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/content/Hero';
import PrimaryCTABanner from '@/components/cta/PrimaryCTABanner';
import SectionHeader from '@/components/content/SectionHeader';
import ScrollReveal from '@/components/animation/ScrollReveal';
import FiveSystemsFiveAnswers, { HEALTHCARE_HEADCOUNT, FINANCE_AUM } from '@/components/content/FiveSystemsFiveAnswers';
import ResolvedRollup from '@/components/content/ResolvedRollup';

export const metadata: Metadata = {
  title: 'Use Cases | MTN',
  description:
    'Deep dives into the scenarios where MTN Guide changes the math: healthcare platforms, payer interoperability, and multi-entity rollups.',
};

const micrositeCards = [
  {
    badge: 'Healthcare rollups',
    headline: 'Five clinics. Five systems. No answers.',
    stat: '$200K–$500K/mo',
    description:
      'How faster integration changes the fund math for healthcare platforms.',
    href: '/m/healthcare-pe',
  },
  {
    badge: 'Rural health programs',
    headline: 'The transport layer is solved. The semantic layer is not.',
    stat: 'Sept 30, 2027',
    description:
      'Hitting state RHTP F.2 milestones before the obligation deadline, through semantic normalization between your HIE and your analytics stack.',
    href: '/m/healthcare-state-rhtp',
  },
  {
    badge: 'Payer compliance',
    headline: 'You spent 18 months building the pipe. Nothing flows clean.',
    stat: '57%',
    description:
      'Turning CMS interoperability mandates from a compliance cost into a competitive advantage.',
    href: '/m/cms-interop',
  },
  {
    badge: 'Healthcare M&A practices',
    headline: 'Turn integration labor into compounding IP.',
    stat: '6\u20138 wk \u2192 1\u20132 wk',
    description:
      'How a productized accelerator turns integration labor on bolt-ons into firm IP that compounds across every engagement.',
    href: '/m/healthcare-ma-alliance',
  },
  {
    badge: 'AI transformation',
    headline: 'The models work. Your data doesn’t.',
    stat: '80%',
    description:
      'Why your portcos can’t ship AI, and the semantic data layer that finally lets them.',
    href: '/m/ai-transformation-pe',
  },
  {
    badge: 'B2B rollups',
    headline: 'Eight acquisitions in. Still no single source of truth.',
    stat: '70%',
    description:
      'Why compounding integration costs are quietly destroying rollup returns.',
    href: '/m/b2b-pe',
  },
  {
    badge: 'B2B SaaS M&A practices',
    headline: 'Your firm\u2019s accelerator. Faster every engagement.',
    stat: '12 artifacts in 5 deals',
    description:
      'How a productized accelerator captures the mappings, methodology, and canonical concepts your senior consultants build on B2B SaaS bolt-ons, then reuses them on every next deal.',
    href: '/m/b2b-saas-ma-alliance',
  },
];

export default function UseCasesPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        headline="One metric. Five systems. Five answers."
        subheadline="The same failure shows up in every industry that grew by acquisition. Here is what it costs, and what resolving it looks like."
        variant="internal"
        ctaText=""
        ctaHref=""
      />

      {/* The same failure, two industries */}
      <section className="section-spacing !pt-4 md:!pt-5 xl:!pt-7">
        <div className="container-site">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <SectionHeader
                headline="The same failure, two industries"
                subheadline="Different systems, different metric, identical problem: nothing says which answer is the one to report."
              />
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              <ScrollReveal stagger={0} distance={20}>
                <FiveSystemsFiveAnswers
                  compact
                  question="What was our Q3 headcount?"
                  rows={HEALTHCARE_HEADCOUNT}
                  footer="Healthcare. Pressure from sponsors, the board, and competitors already announcing."
                />
              </ScrollReveal>
              <ScrollReveal stagger={0.1} distance={20}>
                <FiveSystemsFiveAnswers
                  compact
                  question="What was Q3 AUM ($M)?"
                  rows={FINANCE_AUM}
                  spreadPrefix="$"
                  spreadSuffix="M"
                  footer="Finance. LPs asking for the data behind the answer, regulators expecting lineage."
                />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Worked example */}
      <section className="section-spacing bg-[var(--ms-surface)]">
        <div className="container-site">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <SectionHeader
                headline="A roll-up, resolved"
                subheadline="What it looks like when the map is in place."
              />
            </ScrollReveal>
            <ScrollReveal stagger={0.1} distance={20}>
              <div className="mt-10">
                <ResolvedRollup />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Deep dives */}
      <section className="section-spacing !pb-4">
        <div className="container-site">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <SectionHeader
                headline="Deep dives"
                subheadline="The scenarios worked through in detail, with the evidence behind them."
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Microsite Hub Cards */}
      <section className="section-spacing !pt-4 md:!pt-5 xl:!pt-7">
        <div className="container-site">
          <div className="max-w-4xl mx-auto flex flex-col gap-8">
            {micrositeCards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group block bg-white rounded-2xl border-l-[3px] border-l-[var(--ms-accent)] no-underline transition-all hover:-translate-y-1 shadow-card-hover"
              >
                <div className="p-8 md:p-10">
                  {/* Badge */}
                  <span className="inline-block px-3 py-1 rounded-full bg-[var(--ms-accent)]/10 text-[var(--ms-accent)] text-xs font-semibold tracking-wide uppercase mb-4">
                    {card.badge}
                  </span>

                  {/* Headline */}
                  <h3 className="font-display leading-[1.12] text-[var(--ms-heading)] text-xl md:text-2xl mb-3">
                    {card.headline}
                  </h3>

                  {/* Stat */}
                  <div className="text-2xl md:text-3xl font-bold text-[var(--ms-accent)] mb-3">
                    {card.stat}
                  </div>

                  {/* Description */}
                  <p className="text-[var(--ms-body)] leading-relaxed mb-4 max-w-2xl">
                    {card.description}
                  </p>

                  {/* Explore link */}
                  <span className="inline-flex items-center gap-1 text-[var(--ms-accent)] font-medium text-sm group-hover:gap-2 transition-all">
                    Explore
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Primary CTA */}
      <PrimaryCTABanner
        headline="Have a different scenario?"
        description="We'll walk through your specific situation."
        ctaText="Start a Conversation"
        ctaHref="/contact"
      />
    </>
  );
}
