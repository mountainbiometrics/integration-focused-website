import type { Metadata } from 'next';
import Hero from '@/components/content/Hero';
import PrimaryCTABanner from '@/components/cta/PrimaryCTABanner';
import FounderCard from '@/components/content/FounderCard';
import PeerReviewedValidation from '@/components/content/PeerReviewedValidation';
import TheShift from '@/components/content/TheShift';

export const metadata: Metadata = {
  title: 'About | MTN',
  description:
    'MTN (Medical Timeseries Networks) set out to find patterns in clinical data over time, and hit a wall upstream. MTN Guide is what we built to get past it.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        headline="We started on the other end of this problem"
        subheadline="MTN stands for “Medical Timeseries Networks”. We build the MTN Guide to solve our own data engineering problems."
        variant="internal"
        ctaText=""
        ctaHref=""
      />

      {/* The wall */}
      <section className="section-spacing bg-[var(--ms-surface)]">
        <div className="container-site">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display leading-[1.12] text-[var(--ms-heading)] text-2xl md:text-3xl mb-6">
              The wall we hit
            </h2>
            <div className="prose prose-gray max-w-none space-y-4">
              <p className="text-lg text-[var(--ms-body)] leading-relaxed">
                We came to this from computational neuroscience and clinical
                medicine, working on models that find patterns in physiological
                and clinical data as they unfold over time. We built the
                pipelines, the wearable integrations, the dashboards.
              </p>
              <p className="text-lg text-[var(--ms-body)] leading-relaxed">
                And we kept losing the same months to the same work. Not to the
                models, but to figuring out what the data meant. Which of five
                timestamp columns marked when the encounter actually happened.
                Whether this system’s visit was the same thing as that system’s
                encounter. Why a report broke after a vendor update that changed
                three field names.
              </p>
              <p className="text-lg text-[var(--ms-body)] leading-relaxed">
                Our ML scientists were doing data archaeology. Every new project
                started the work over. And every answer lived in one engineer’s
                head until they left.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we built */}
      <section className="section-spacing">
        <div className="container-site">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display leading-[1.12] text-[var(--ms-heading)] text-2xl md:text-3xl mb-6">
              So we built the layer underneath
            </h2>
            <div className="prose prose-gray max-w-none space-y-4">
              <p className="text-lg text-[var(--ms-body)] leading-relaxed">
                MTN Guide is an agentic data engineer. It reads schemas,
                documentation, and API definitions, and builds MTN FieldMap: an
                evidence-backed map of what an organization’s data means, then
                maintains that map as systems change. It is the thing we needed before we could do
                any of the work we actually set out to do.
              </p>
              <p className="text-lg text-[var(--ms-body)] leading-relaxed">
                Two convictions shaped it. The first is that a map has to be
                honest about its own uncertainty: a confident wrong answer is
                worse than no answer, so Guide records the evidence under every
                claim and refuses plainly when the evidence isn’t there. The
                second is that you cannot merge your way out of this. Two
                departments genuinely disagree about what a customer is, and a
                single unified model just hides the disagreement. So we map
                instead, recording where systems agree, where they overlap, and
                under what conditions.
              </p>
              <p className="text-lg text-[var(--ms-body)] leading-relaxed">
                It turned out this was not our problem. It was everyone’s.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div
                className="p-6 rounded-2xl bg-white"
                style={{ boxShadow: 'var(--ms-shadow-card-sm)' }}
              >
                <h3 className="font-display text-[var(--ms-heading)] mb-2">
                  Built for the messy case
                </h3>
                <p className="text-base text-[var(--ms-body)]">
                  Partial, inconsistent, and drifting data isn’t an edge case we
                  handle. It’s the condition the product assumes, and the reason
                  it exists.
                </p>
              </div>
              <div
                className="p-6 rounded-2xl bg-white"
                style={{ boxShadow: 'var(--ms-shadow-card-sm)' }}
              >
                <h3 className="font-display text-[var(--ms-heading)] mb-2">
                  Built for High-Trust
                </h3>
                <p className="text-base text-[var(--ms-body)]">
                  The map is built from how your systems are shaped, so the
                  sensitive part never has to move. Security review gets a lot
                  shorter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why now */}
      <section className="section-spacing bg-[var(--ms-surface)]">
        <div className="container-site">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display leading-[1.12] text-[var(--ms-heading)] text-2xl md:text-3xl mb-6">
              Why now
            </h2>
            <div className="space-y-4 mb-10">
              <p className="text-lg text-[var(--ms-body)] leading-relaxed">
                For decades, understanding a data estate required expensive
                humans reading it one system at a time. That was affordable for
                large enterprises and out of reach for everyone else. In late
                2025 coding agents became trustworthy enough to do the reading,
                and the economics inverted.
              </p>
              <p className="text-lg text-[var(--ms-body)] leading-relaxed">
                The urgency arrived at the same moment. Messy data used to be a
                hindrance that slowed a company down. Handed to an unchecked
                agent, it now lies with confidence.
              </p>
            </div>

            <TheShift />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-spacing">
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
                bio="Over twelve years building and scaling production software, including as a founding engineer at a startup that grew to a billion-dollar platform. Specializes in unifying disparate systems and data sources at scale. Leads core platform development for MTN Guide."
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
      <section className="section-spacing bg-[var(--ms-surface-warm)]">
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

      {/* Peer-reviewed validation */}
      <section className="section-spacing">
        <div className="container-site">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display leading-[1.12] text-[var(--ms-heading)] text-2xl md:text-3xl mb-6">
              Peer-reviewed validation
            </h2>
            <div className="space-y-4 mb-10">
              <p className="text-lg text-[var(--ms-body)] leading-relaxed">
                Most of what MTN has built was paid for by research funding we had
                to win in open competition. Getting that funding meant passing
                peer review: independent scientists, physicians, and engineers
                with no connection to the company take the technical approach apart and judge whether it will actually work. It is
                designed to be hard to pass, and most applications don’t.
              </p>
              <p className="text-lg text-[var(--ms-body)] leading-relaxed">
                MTN has been through it three times, in front of three different
                panels.
              </p>
            </div>

            <PeerReviewedValidation />

            <p className="text-base text-[var(--ms-body-light)] leading-relaxed mt-8">
              We are grateful to the Nucleus Institute, whose UTIF grant and SBIR
              application support helped make the NIH award possible. Federal
              funding supports this research; it is not an endorsement of MTN or
              its products by NIH, NIA, or the U.S. Army.
            </p>
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
                Healthcare generates an extraordinary record of what happens to
                people over time, and most of it goes unused because nobody can
                say with confidence what it means. MTN exists to close that gap:
                to make fragmented, irregular, sequential data usable, without
                asking organizations to hand over the data itself or pretend to a
                certainty they don’t have.
              </p>
              <p className="text-lg text-[var(--ms-body)] leading-relaxed">
                We’re building the layer that makes the rest possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Primary CTA */}
      <PrimaryCTABanner
        headline="Want to learn more?"
        description="Whether you're deploying clinical AI, integrating after an acquisition, or just trying to find out what your own data means, we'd like to hear from you."
        ctaText="Start a Conversation"
        ctaHref="/contact"
      />
    </>
  );
}
