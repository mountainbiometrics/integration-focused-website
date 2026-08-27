import type { Metadata } from 'next';
import Hero from '@/components/content/Hero';
import SectionHeader from '@/components/content/SectionHeader';
import ScrollReveal from '@/components/animation/ScrollReveal';
import PrimaryCTABanner from '@/components/cta/PrimaryCTABanner';
import SequenceTypes from '@/components/sequential/SequenceTypes';
import SemanticChecks from '@/components/sequential/SemanticChecks';
import SemanticMap from '@/components/sequential/SemanticMap';

export const metadata: Metadata = {
  title: 'Sequential Data | MTN',
  description:
    'The value in your data is in what happened, in what order. Getting there is a data engineering problem before it is a modeling problem — in healthcare and everywhere else.',
};

export default function SequentialDataPage() {
  return (
    <>
      <Hero
        headline="What happened, and in what order"
        subheadline="Nearly every question worth asking is a question about sequence. Answering it is a data engineering problem long before it is a modeling problem."
        ctaText="Talk Through Your Data"
        ctaHref="/contact"
        variant="internal"
      />

      {/* Two kinds of sequence — visual-led */}
      <section className="section-spacing">
        <div className="container-site">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <SectionHeader
                headline="Two kinds of sequence"
                subheadline="Every organization has both. They almost never live in the same system."
                align="center"
              />
            </ScrollReveal>

            <ScrollReveal stagger={0.1} distance={20}>
              <div className="mt-10">
                <SequenceTypes />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* The lag — the core visual argument */}
      <section className="section-spacing bg-[var(--ms-surface-warm)]">
        <div className="container-site">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <SectionHeader
                headline="A timestamp is not a time"
                subheadline="An entry can land in the record long after the event it describes."
                align="center"
              />
            </ScrollReveal>

            <ScrollReveal stagger={0.1} distance={20}>
              <div className="mt-10 p-6 md:p-8 rounded-2xl bg-white border border-[var(--ms-border)] overflow-x-auto">
                <svg
                  viewBox="0 0 640 210"
                  className="w-full min-w-[520px] h-auto"
                  role="img"
                  aria-label="Diagram showing events occurring at one set of times, and the same events being recorded later, with a variable lag between each pair"
                >
                  {/* Row A: what happened */}
                  <text x="0" y="44" fontSize="12" fontWeight="600" fill="var(--ms-heading)">
                    What happened
                  </text>
                  <line x1="0" y1="58" x2="640" y2="58" stroke="var(--ms-border)" strokeWidth="1" />
                  {[
                    { x: 92, label: 'issue starts' },
                    { x: 214, label: 'first contact' },
                    { x: 352, label: 'cause found' },
                    { x: 470, label: 'fix applied' },
                  ].map((e) => (
                    <g key={`a-${e.x}`}>
                      <circle cx={e.x} cy="58" r="6" fill="var(--ms-accent)" />
                      <text
                        x={e.x}
                        y="34"
                        fontSize="11"
                        textAnchor="middle"
                        fill="var(--ms-body)"
                      >
                        {e.label}
                      </text>
                    </g>
                  ))}

                  {/* Lag connectors */}
                  {[
                    { from: 92, to: 178 },
                    { from: 214, to: 262 },
                    { from: 352, to: 502 },
                    { from: 470, to: 545 },
                  ].map((l) => (
                    <path
                      key={`l-${l.from}`}
                      d={`M ${l.from} 64 L ${l.to} 142`}
                      stroke="var(--ms-muted)"
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                      fill="none"
                    />
                  ))}

                  {/* Row B: what the record says */}
                  <line x1="0" y1="148" x2="640" y2="148" stroke="var(--ms-border)" strokeWidth="1" />
                  {[178, 262, 502, 545].map((x) => (
                    <circle key={`b-${x}`} cx={x} cy="148" r="6" fill="var(--ms-primary)" />
                  ))}
                  <text x="0" y="180" fontSize="12" fontWeight="600" fill="var(--ms-heading)">
                    What the record says
                  </text>
                  <text x="0" y="199" fontSize="11" fill="var(--ms-body-light)">
                    Same events. Different order. Variable, unrecorded lag.
                  </text>
                </svg>
              </div>
            </ScrollReveal>

            <ScrollReveal stagger={0.2} distance={20}>
              <p className="text-lg text-[var(--ms-body)] leading-relaxed mt-8 max-w-2xl mx-auto text-center">
                The cause was found before the fix was applied. In the record, it
                appears after. Nothing in the schema marks the difference between
                when something happened and when someone entered it.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Three checks — visual-led */}
      <section className="section-spacing">
        <div className="container-site">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <SectionHeader
                headline="Three things to settle first"
                subheadline="None of them are modeling questions."
                align="center"
              />
            </ScrollReveal>

            <ScrollReveal stagger={0.1} distance={20}>
              <div className="mt-10">
                <SemanticChecks />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* The map */}
      <section className="section-spacing bg-[var(--ms-surface)]">
        <div className="container-site">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <SectionHeader
                headline="So we build the map first"
                subheadline="What each field means, which concept it carries, and where the evidence runs out."
                align="center"
              />
            </ScrollReveal>

            <ScrollReveal stagger={0.1} distance={20}>
              <div className="mt-10">
                <SemanticMap />
              </div>
            </ScrollReveal>

            <ScrollReveal stagger={0.2} distance={20}>
              <p className="text-lg text-[var(--ms-body)] leading-relaxed mt-8 max-w-2xl mx-auto text-center">
                MTN Guide builds this from your schemas, documentation, and API
                definitions — not from your records — and keeps it current as those
                systems change. A timeline is an artifact of this work, not
                something waiting in the data to be found.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* NIH context */}
      <section className="section-spacing bg-[var(--ms-surface-warm)]">
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
                <h2 className="font-display leading-[1.12] text-[var(--ms-heading)] text-2xl mb-4">
                  Proven where the data is hardest
                </h2>
                <p className="text-[var(--ms-body)] leading-relaxed mb-4">
                  Healthcare is the most demanding version of this problem — the
                  most fragmented systems, the most irregular events, the least
                  room for a confident wrong answer. MTN holds a Small Business
                  Innovation Research Fast-Track award from the National Library of
                  Medicine to build exactly this layer for clinical and
                  physiological data. What works there travels.
                </p>
                <p className="text-[var(--ms-body-light)] text-sm leading-relaxed">
                  NIH funding supports this research. It is not an endorsement of
                  MTN or its products.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <PrimaryCTABanner
        headline="Bring us one schema"
        description="Send a representative schema from a system you care about, and we will show you what the map finds — and what it cannot tell you without asking."
        ctaText="Start a Conversation"
        ctaHref="/contact"
      />
    </>
  );
}
