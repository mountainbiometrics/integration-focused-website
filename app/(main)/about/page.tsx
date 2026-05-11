import type { Metadata } from 'next';
import Hero from '@/components/content/Hero';
import PrimaryCTABanner from '@/components/cta/PrimaryCTABanner';
import FounderCard from '@/components/content/FounderCard';

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
        subheadline="We built the Foundry to make our own AI deployments work. Then we realized everyone deploying AI or general analytics has that same problem."
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
              <p className="text-lg text-[var(--ms-body)] leading-relaxed">
                We weren&apos;t the first to hit it. We won&apos;t be the last.
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
                The same technology works wherever fragmented data systems need
                to operate as one.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div
                className="p-6 rounded-2xl bg-white"
                style={{ boxShadow: 'var(--ms-shadow-card-sm)' }}
              >
                <h3 className="font-display text-[var(--ms-heading)] mb-2">
                  Built for operators
                </h3>
                <p className="text-base text-[var(--ms-body)]">
                  Designed for people who need visibility now, not perfect data
                  eventually.
                </p>
              </div>
              <div
                className="p-6 rounded-2xl bg-white"
                style={{ boxShadow: 'var(--ms-shadow-card-sm)' }}
              >
                <h3 className="font-display text-[var(--ms-heading)] mb-2">
                  Built for governance
                </h3>
                <p className="text-base text-[var(--ms-body)]">
                  Healthcare requires audit trails, human oversight, and
                  deterministic behavior. The Foundry was designed to satisfy
                  compliance requirements, not work around them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why now */}
      <section className="section-spacing bg-[var(--ms-surface)]">
        <div className="container-site">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display leading-[1.12] text-[var(--ms-heading)] text-2xl md:text-3xl mb-6">
              Why now
            </h2>
            <p className="text-lg text-[var(--ms-body)] leading-relaxed">
              When we hit the wall, we hit it alone. That&apos;s no longer true.
              Every AI deployment eventually discovers what we discovered: deployments
              fail on data, not on models. The Foundry is the layer that lets it work.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-spacing bg-[var(--ms-surface-warm)]">
        <div className="container-site">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-display leading-[1.12] text-[var(--ms-heading)] text-2xl md:text-3xl mb-6">
              Technical leadership
            </h2>
            <p className="text-lg text-[var(--ms-body)] leading-relaxed mb-10">
              An unusual combination: ML scientists who understand deployment
              constraints, physicians who understand data infrastructure, and engineers
              who turn it into product. Our work has been published in Nature
              journals, PNAS, JMIR, Chest, PLoS Computational Biology, The Royal
              Society, and other leading venues.
            </p>

            <div className="space-y-8">
              <FounderCard
                name="Warren Pettine, MD"
                title="Co-Founder & CEO"
                imagePath="/images/team/pettine_headshot.jpg"
                linkedInUrl="https://www.linkedin.com/in/warren-pettine/"
                bio="A machine learning scientist and software builder who has wrestled the data engineering problem for 17 years. Trained in medicine at Colorado and computational neuroscience at Harvard, Stanford, NYU, and Yale. He co-founded MTN in 2023 to address the under-utilization of data in healthcare. Separately, he leads the Medical Machine Intelligence (M²Int) Lab at the University of Utah, an academic research group developing AI for clinical applications. Prior service in U.S. and Colorado health policy, and on the University of Utah IRB, shapes MTN's governance posture."
              />

              <FounderCard
                name="Samuel Wecker"
                title="Lead Systems Engineer"
                imagePath="/images/team/samuel_wecker.jpg"
                linkedInUrl="https://www.linkedin.com/in/samuel-wecker/"
                bio="Over twelve years building and scaling production software, including as a founding engineer at a startup that grew to a billion-dollar platform. Specializes in unifying disparate systems and data sources at scale. Leads Data Foundry's core platform development."
              />

              {/* <FounderCard
                name="Brian Locke, MD, MSCI"
                title="Clinical AI Lead"
                imagePath="/images/team/Brian_Locke.jpg"
                linkedInUrl="https://www.linkedin.com/in/brian-locke-464457155/"
                bio="Active ICU physician and Assistant Professor at Intermountain Healthcare, with firsthand understanding of clinical workflows across academic medical centers and integrated delivery networks. Investigator with the M²Int Lab. Provides methodological rigor for the clinical and operational implications of MTN's technology."
              /> */}

              <FounderCard
                name="Matthias Christenson, PhD"
                title="Enterprise AI Advisor"
                imagePath="/images/team/Matthias_Christenson.jpeg"
                linkedInUrl="https://www.linkedin.com/in/neuralsignal/"
                bio="Head of Medical Data & AI at Sanoptis, one of the largest ophthalmology networks in Europe. PhD and postdoctoral research at Columbia University in computational ML. Previously a Deep Learning Research Engineer at DeepLife, training foundational models on genomic and biometric data. Investigator with the M²Int Lab. Aligns MTN's products with the integration and scalability needs of M&A-driven enterprises."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="section-spacing">
        <div className="container-site">
          <div className="max-w-3xl mx-auto">
            <div
              className="p-6 rounded-2xl bg-white border-l-[3px] border-l-[var(--ms-accent)]"
              style={{ boxShadow: 'var(--ms-shadow-card-sm)' }}
            >
              <p className="text-[var(--ms-body)] italic">
                &ldquo;We were tired of spending more time on data plumbing than
                on actual science. So we built a system that could handle the
                integration complexity for us. Turns out, that system is exactly
                what a lot of other organizations need.&rdquo;
              </p>
              <p className="text-[var(--ms-body)] text-sm mt-4">
                — Warren Pettine, Co-Founder &amp; CEO
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our mission */}
      <section className="section-spacing bg-[var(--ms-surface)]">
        <div className="container-site">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display leading-[1.12] text-[var(--ms-heading)] text-2xl md:text-3xl mb-6">
              Our mission
            </h2>
            <div className="space-y-4">
              <p className="text-lg text-[var(--ms-body)] leading-relaxed">
                MTN is dedicated to improving the financial sustainability of
                the healthcare system by making fragmented data systems
                operable. The Data Foundry replaces months of manual data
                engineering with software that learns, harmonizes, and adapts.
                Each new data source is easier to use than the last. We make
                organizations more nimble, responsive, and adaptive, reducing
                operational overhead, raising provider satisfaction, and
                improving patient outcomes.
              </p>
              <p className="text-lg text-[var(--ms-body)] leading-relaxed">
                We&apos;re building the connective tissue of modern healthcare.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Primary CTA */}
      <PrimaryCTABanner
        headline="Want to learn more?"
        description="Whether you're operating a portfolio, deploying AI, or trying to make integration work in a roll-up, we'd like to hear from you."
        ctaText="Learn More About Our Approach"
        ctaHref="/contact"
      />
    </>
  );
}
