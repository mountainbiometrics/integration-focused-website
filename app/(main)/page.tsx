import Link from 'next/link';
import Hero from '@/components/content/Hero';
import SectionHeader from '@/components/content/SectionHeader';
import TimelineShuffle from '@/components/comparison/TimelineShuffle';
import TrustPillars from '@/components/content/TrustPillars';
import FiveSystemsFiveAnswers, { HEALTHCARE_HEADCOUNT } from '@/components/content/FiveSystemsFiveAnswers';
import TheShift from '@/components/content/TheShift';
import MountainTiers from '@/components/content/MountainTiers';
import OfferStages from '@/components/content/OfferStages';
import AnimatedThreeStepFlow from '@/components/animation/AnimatedThreeStepFlow';
import ScrollReveal from '@/components/animation/ScrollReveal';
import PrimaryCTABanner from '@/components/cta/PrimaryCTABanner';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        headline="It’s time to trust your data"
        subheadline="MTN Guide maps your data and provides the trusted context you need, when you need it."
        ctaText="Start a Conversation"
        ctaHref="/contact"
        variant="homepage"
      />

      {/* The stakes */}
      <section className="section-spacing bg-[var(--ms-surface-warm)]">
        <div className="container-site">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <SectionHeader
                headline="Messy data used to slow you down"
                subheadline="Now, with unchecked AI, it lies with confidence."
              />
            </ScrollReveal>
            <ScrollReveal stagger={0.1} distance={20}>
              <div className="mt-8">
                <FiveSystemsFiveAnswers
                  question="What was our Q3 headcount?"
                  rows={HEALTHCARE_HEADCOUNT}
                />
              </div>
            </ScrollReveal>
            <ScrollReveal stagger={0.2} distance={20}>
              <p className="text-lg text-[var(--ms-body)] leading-relaxed mt-8">
                An agent asked this question will pick one and tell you with total
                confidence. You cannot build AI on data you cannot trust.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why now */}
      <section className="section-spacing">
        <div className="container-site">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <SectionHeader
                headline="Understanding your data used to require expensive humans"
                subheadline="In late 2025, that ended."
                align="center"
              />
            </ScrollReveal>
            <ScrollReveal stagger={0.1} distance={20}>
              <div className="mt-10">
                <TheShift />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* The mountain */}
      <section className="section-spacing bg-[var(--ms-surface)]">
        <div className="container-site">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <SectionHeader
                headline="Three tiers, one MTN"
                subheadline="Trusted data at the base, the real AI business at the top."
                align="center"
              />
            </ScrollReveal>
            <ScrollReveal stagger={0.1} distance={20}>
              <div className="mt-10">
                <MountainTiers />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* The sequential-data bridge */}
      <section className="section-spacing">
        <div className="container-site">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <SectionHeader
                headline="Order matters, and the summit runs on it"
                subheadline="Revenue and quality depend on a true timeline. Building one is the part everyone underestimates."
              />
            </ScrollReveal>
            <ScrollReveal stagger={0.1} distance={20}>
              <div className="mb-10">
                <TimelineShuffle />
              </div>
            </ScrollReveal>
            <ScrollReveal stagger={0.15} distance={20}>
              <div className="space-y-5">
                <p className="text-lg text-[var(--ms-heading)] leading-relaxed font-medium">
                  Sequence models learn from order. They only become viable once
                  the foundation underneath them is clean and consistent. That is
                  the work MTN Guide does first.
                </p>
                <Link
                  href="/sequential-data"
                  className="inline-flex items-center gap-1 text-[var(--ms-accent)] font-medium no-underline hover:gap-2 transition-all"
                >
                  Why sequential data is different
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
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
                headline="How MTN Guide works"
                subheadline="An agentic data engineer that builds MTN FieldMap, then keeps it current."
                align="center"
              />
            </ScrollReveal>

            <AnimatedThreeStepFlow
              steps={[
                {
                  number: 1,
                  title: 'Read',
                  description: 'Schemas, docs, and API definitions, not your records',
                  icon: 'Database',
                },
                {
                  number: 2,
                  title: 'Map',
                  description: 'Fields to concepts, with the evidence behind each claim',
                  icon: 'GitMerge',
                },
                {
                  number: 3,
                  title: 'Maintain',
                  description: 'A source changes, and only that connection is re-checked',
                  icon: 'RefreshCw',
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* The offer */}
      <section className="section-spacing">
        <div className="container-site">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <SectionHeader
                headline="A different deal"
                subheadline="Fixed scope and a named engineer, instead of an open-ended program."
                align="center"
              />
            </ScrollReveal>
            <ScrollReveal stagger={0.1} distance={20}>
              <div className="mt-10">
                <OfferStages />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section-spacing bg-[var(--ms-surface-warm)]">
        <div className="container-site">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="font-display leading-[1.12] text-[var(--ms-heading)] text-2xl md:text-3xl mb-4">
                Built to be trusted with regulated data
              </h2>
              <p className="text-[var(--ms-body)] max-w-2xl mx-auto mb-10">
                A map is only useful if you can check it. Ours is designed to be
                checked.
              </p>
            </ScrollReveal>
            <ScrollReveal stagger={0.1} distance={20}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <TrustPillars />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Primary CTA Section */}
      <PrimaryCTABanner
        headline="Send us one representative schema"
        description="We’ll show you what the FieldMap finds in it. Just as usefully, we’ll show you what it can’t tell you without asking."
        ctaText="Start a Conversation"
        ctaHref="/contact"
      />
    </>
  );
}
