import Link from 'next/link';
import Hero from '@/components/content/Hero';
import SectionHeader from '@/components/content/SectionHeader';
import ProblemBullets from '@/components/content/ProblemBullets';
import BeforeAfter from '@/components/comparison/BeforeAfter';
import TimelineShuffle from '@/components/comparison/TimelineShuffle';
import AnimatedThreeStepFlow from '@/components/animation/AnimatedThreeStepFlow';
import ScrollReveal from '@/components/animation/ScrollReveal';
import PrimaryCTABanner from '@/components/cta/PrimaryCTABanner';
import { Clock, Layers, HelpCircle, GitBranch } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        headline="Time to trust your data"
        subheadline="MTN Guide maps your data and provides the trusted context you need, when you need it."
        ctaText="Start a Conversation"
        ctaHref="/contact"
        variant="homepage"
      />

      {/* Problem Section */}
      <section className="section-spacing bg-[var(--ms-surface-warm)]">
        <div className="container-site">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <SectionHeader
                headline="The blocker isn’t the model"
                subheadline="AI stalls upstream, on questions nobody can answer about the data itself."
              />
            </ScrollReveal>
            <ScrollReveal stagger={0.15} distance={20}>
              <ProblemBullets
                variant="visual"
                iconBullets={[
                  { icon: Layers, label: 'The same concept, named differently in every system.' },
                  { icon: Clock, label: 'Timestamps that record when someone typed, not when it happened.' },
                  { icon: GitBranch, label: 'A schema change that quietly breaks a report nobody re-checks.' },
                  { icon: HelpCircle, label: 'Answers no one can trace back to a source.' },
                ]}
              />
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
                headline="A true timeline of events is built"
                subheadline="And building it is the part everyone underestimates."
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
                  That is the work MTN Guide does.
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
                subheadline="An agentic data engineer that builds the map, then keeps it current."
                align="center"
              />
            </ScrollReveal>

            <AnimatedThreeStepFlow
              steps={[
                {
                  number: 1,
                  title: 'Read',
                  description: 'Schemas, docs, and API definitions — not your records',
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

      {/* Outcome Section */}
      <section className="section-spacing">
        <div className="container-site">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <SectionHeader
                headline="What changes"
                subheadline="The map is the asset. It is yours, and it stays current."
                variant="emphasis"
              />
            </ScrollReveal>

            <ScrollReveal stagger={0.15} distance={20}>
              <BeforeAfter
                before={{
                  title: 'Integration as a project',
                  items: [
                    'Months of manual mapping',
                    'Knowledge in one person’s head',
                    'Every schema change reopens the work',
                    'AI pilots stall on data',
                  ],
                }}
                after={{
                  title: 'With MTN Guide',
                  items: [
                    'A map built from schemas, in days',
                    'Evidence recorded under every claim',
                    'Change contained to one connection',
                    'Data your models can actually use',
                  ],
                }}
                variant="withIcons"
                compact
              />
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Schema-first',
                  body: 'Work begins from schemas, documentation, and API definitions. No PHI required to start, and no records leave your systems.',
                },
                {
                  title: 'Evidence-backed',
                  body: 'Every claim in the map records what it rests on — including a person’s confirmation, which counts as evidence in its own right.',
                },
                {
                  title: 'Honest about gaps',
                  body: 'When the map cannot answer, it says so and names what is missing. A refusal is a complete answer, not a failure.',
                },
                {
                  title: 'Out of the data path',
                  body: 'Guide tells you where to look. Running the query stays with you, on your infrastructure, under your controls.',
                },
              ].map((card, i) => (
                <ScrollReveal key={card.title} stagger={i * 0.1} distance={20}>
                  <div
                    className="h-full p-6 rounded-2xl bg-white border-l-[3px] border-l-[var(--ms-accent)] text-left"
                    style={{ boxShadow: 'var(--ms-shadow-card-sm)' }}
                  >
                    <div className="font-display text-[var(--ms-accent)] text-lg mb-2">
                      {card.title}
                    </div>
                    <p className="text-[var(--ms-body)] text-base leading-relaxed">
                      {card.body}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Credibility */}
      <section className="section-spacing">
        <div className="container-site">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <div
                className="p-8 rounded-2xl bg-white border-l-[3px] border-l-[var(--ms-accent)]"
                style={{ boxShadow: 'var(--ms-shadow-card-sm)' }}
              >
                <div className="text-xs uppercase tracking-wide text-[var(--ms-accent)] font-semibold mb-3">
                  NIH SBIR Fast-Track
                </div>
                <p className="text-lg text-[var(--ms-body)] leading-relaxed">
                  MTN — Medical Timeseries Networks — holds a Small Business
                  Innovation Research Fast-Track award from the National Library of
                  Medicine, supporting research on making fragmented clinical and
                  physiological data usable for AI. The team is led by a
                  physician-researcher, with published work in Nature journals,
                  PNAS, and PLoS Computational Biology.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Primary CTA Section */}
      <PrimaryCTABanner
        headline="Send us one representative schema"
        description="We’ll show you what the map finds in it — and, just as usefully, what it can’t tell you without asking."
        ctaText="Start a Conversation"
        ctaHref="/contact"
      />
    </>
  );
}
