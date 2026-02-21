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
      <section className="section-spacing bg-[var(--ms-surface)]">
        <div className="container-site">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display leading-[1.12] text-[var(--ms-heading)] text-2xl md:text-3xl mb-6">
              The problem we kept hitting
            </h2>
            <div className="prose prose-gray max-w-none space-y-4">
              <p className="text-lg text-[var(--ms-body)] leading-relaxed">
                We were building our own
                AI-powered solutions across healthcare sites.
                Deployments hit the same wall: different EHRs, different
                schemas, IOT devices, and stalled pipelines with each vendor update. Our
                ML scientists and engineers wanted to avoid debugging data
                transformations and focus on actionable models.
              </p>
              <p className="text-lg text-[var(--ms-body)] leading-relaxed">
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
            <h2 className="font-display leading-[1.12] text-[var(--ms-heading)] text-2xl md:text-3xl mb-6">
              What we built for ourselves
            </h2>
            <div className="prose prose-gray max-w-none space-y-4">
              <p className="text-lg text-[var(--ms-body)] leading-relaxed">
                So we built our own solution. Our team of ML
                scientists, physicians and software engineers developed an AI-powered
                integration layer that could detect schemas automatically, learn
                from previous mappings, and adapt when sources changed.
              </p>
              <p className="text-lg text-[var(--ms-body)] leading-relaxed">
                The more we used it, the more we realized every healthcare
                organization facing consolidation or multi-site scaling was
                hitting the same walls. That&apos;s why we&apos;re offering it
                as a standalone product. The same technology built to
                accelerated our deployments can help others close their data
                visibility gaps.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div
                className="p-6 rounded-2xl bg-white"
                style={{ boxShadow: 'var(--ms-shadow-card-sm)' }}
              >
                <h3 className="font-display font-semibold text-[var(--ms-heading)] mb-2">
                  Built for operators
                </h3>
                <p className="text-base text-[var(--ms-body)]">
                  The Foundry is designed for people who need visibility now,
                  not perfect data eventually. It prioritizes operational
                  continuity over architectural elegance.
                </p>
              </div>
              <div
                className="p-6 rounded-2xl bg-white"
                style={{ boxShadow: 'var(--ms-shadow-card-sm)' }}
              >
                <h3 className="font-display font-semibold text-[var(--ms-heading)] mb-2">
                  Built for governance
                </h3>
                <p className="text-base text-[var(--ms-body)]">
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
      <section className="section-spacing bg-[var(--ms-surface-warm)]">
        <div className="container-site">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display leading-[1.12] text-[var(--ms-heading)] text-2xl md:text-3xl mb-6">
              The team
            </h2>
            <p className="text-lg text-[var(--ms-body)] leading-relaxed mb-8">
              We&apos;re an unusual combination: ML scientists who understand
              complex health data, physicians who understand data infrastructure, and software engineers who productized it. We built
              this technology because we needed it ourselves. We&apos;re
              now making it available to others facing the same challenges.
            </p>

            <div
              className="p-6 rounded-2xl bg-white border-l-[3px] border-l-[var(--ms-accent)]"
              style={{ boxShadow: 'var(--ms-shadow-card-sm)' }}
            >
              <p className="text-[var(--ms-body)] italic">
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
