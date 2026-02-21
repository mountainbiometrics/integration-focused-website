import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/content/Hero';
import PrimaryCTABanner from '@/components/cta/PrimaryCTABanner';

export const metadata: Metadata = {
  title: 'Use Cases | MTN',
  description:
    'Deep dives into the scenarios where MTN Data Foundry changes the math — healthcare rollups, B2B platforms, and CMS interoperability.',
};

const micrositeCards = [
  {
    badge: 'Healthcare rollups',
    headline: 'Five clinics. Five systems. No answers.',
    stat: '$200K–$500K/mo',
    description:
      'How faster integration changes the fund math for PE-backed healthcare platforms.',
    href: '/m/healthcare-pe',
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
    badge: 'Payer compliance',
    headline: 'You spent 18 months building the pipe. Nothing flows clean.',
    stat: '57%',
    description:
      'Turning CMS interoperability mandates from a compliance cost into a competitive advantage.',
    href: '/m/cms-interop',
  },
];

export default function UseCasesPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        headline="Where this makes a difference"
        subheadline="Deep dives into the scenarios where MTN Data Foundry changes the math."
        variant="internal"
        ctaText=""
        ctaHref=""
      />

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
