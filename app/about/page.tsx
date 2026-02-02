import type { Metadata } from 'next';
import Hero from '@/components/content/Hero';
import PrimaryCTABanner from '@/components/cta/PrimaryCTABanner';

export const metadata: Metadata = {
  title: 'About | MTN',
  description:
    'We built MTN Data Foundry to solve our own integration challenges. A team of neuroscientists, ML scientists, and engineers sharing what we built.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        headline="Why we built the MTN Data Foundry"
        subheadline="We built the Foundry to solve our own integration challenges. Then we realized it could help everyone else facing the same problem."
        variant="internal"
        ctaText=""
        ctaHref=""
      />

      {/* The Problem We Lived */}
      <section className="section-spacing bg-[var(--color-neutral-lighter)]/30">
        <div className="container-site">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-neutral-dark)] mb-6">
              The problem we kept hitting
            </h2>
            <div className="prose prose-gray max-w-none space-y-4">
              <p className="text-lg text-[var(--color-neutral-mid)] leading-relaxed">
                Medical Timeseries Networks was building our own
                AI-powered solutions across healthcare sites.
                Deployments hit the same wall: different EHRs, different
                schemas, IOT devices, and broken pipelines with each vendor update. Our
                ML scientists and engineers wanted to avoid debugging data
                transformations and focus on advancing medicine.
              </p>
              <p className="text-lg text-[var(--color-neutral-mid)] leading-relaxed">
                The problem wasn&apos;t unique to us. Traditional integration
                approaches assume stability, but healthcare data environments
                are anything but stable. We needed infrastructure that
                expected change instead of breaking from it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Exists */}
      <section className="section-spacing">
        <div className="container-site">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-neutral-dark)] mb-6">
              What we built for ourselves
            </h2>
            <div className="prose prose-gray max-w-none space-y-4">
              <p className="text-lg text-[var(--color-neutral-mid)] leading-relaxed">
                So we built our own solution. Our team of ML
                scientists, physicians and software engineers developed an AI-powered
                integration layer that could detect schemas automatically, learn
                from previous mappings, and adapt when sources changed.
              </p>
              <p className="text-lg text-[var(--color-neutral-mid)] leading-relaxed">
                The more we used it, the more we realized every healthcare
                organization facing consolidation or multi-site scaling was
                hitting the same walls. That&apos;s why we&apos;re offering it
                as a standalone product. The same technology built to
                accelerated our deployments can help others eliminate their data
                blackout periods.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg border border-[var(--color-neutral-lighter)]">
                <h3 className="font-semibold text-[var(--color-neutral-dark)] mb-2">
                  Built for operators
                </h3>
                <p className="text-sm text-[var(--color-neutral-mid)]">
                  The Foundry is designed for people who need visibility now,
                  not perfect data eventually. It prioritizes operational
                  continuity over architectural elegance.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-[var(--color-neutral-lighter)]">
                <h3 className="font-semibold text-[var(--color-neutral-dark)] mb-2">
                  Built for governance
                </h3>
                <p className="text-sm text-[var(--color-neutral-mid)]">
                  Healthcare requires audit trails, human oversight, and
                  deterministic behavior. The Foundry is designed to satisfy
                  compliance requirements, not work around them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-spacing bg-[var(--color-neutral-lighter)]/30">
        <div className="container-site">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-neutral-dark)] mb-6">
              The team
            </h2>
            <p className="text-lg text-[var(--color-neutral-mid)] leading-relaxed mb-8">
              We&apos;re an unusual combination: ML scientists who understand
              complex health data, physicians who understand data infrastructure, and software engineers who productized it. We built
              this technology because we needed it ourselves. We&apos;re
              now making it available to others facing the same challenges.
            </p>

            <div className="p-6 rounded-lg bg-white border border-[var(--color-neutral-lighter)]">
              <p className="text-[var(--color-neutral-mid)] italic">
                &ldquo;We were tired of spending more time on data plumbing than
                on actual science. So we built a system that could handle the
                integration complexity for us. Turns out, that system is exactly
                what a lot of other healthcare organizations need.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Primary CTA */}
      <PrimaryCTABanner
        headline="Want to learn more?"
        description="We're happy to discuss MTN Data Foundry, our approach, or your specific challenges."
        ctaText="Learn More About Our Approach"
        ctaHref="/contact"
      />
    </>
  );
}
