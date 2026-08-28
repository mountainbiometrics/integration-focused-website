import type { Metadata } from 'next';
import Hero from '@/components/content/Hero';
import SectionHeader from '@/components/content/SectionHeader';
import TechnicalSection from '@/components/technical/TechnicalSection';
import EvidenceInputs from '@/components/technical/EvidenceInputs';
import ConceptMapDiagram from '@/components/technical/ConceptMapDiagram';
import LayerStackDiagram from '@/components/technical/LayerStackDiagram';
import WeakestLinkDiagram from '@/components/technical/WeakestLinkDiagram';
import IntegrationSurface from '@/components/technical/IntegrationSurface';
import PrimaryCTABanner from '@/components/cta/PrimaryCTABanner';

export const metadata: Metadata = {
  title: 'Technical Overview | MTN',
  description:
    'How MTN Guide works: an evidence-backed semantic map maintained outside the data path, with a deterministic answering engine and explicit refusal.',
};

const evidenceDetails = {
  title: 'What Guide reads',
  description:
    'Guide builds MTN FieldMap from descriptions of your systems rather than from their contents. Schema-level evidence is enough to begin, which is what lets an engagement start before a data agreement is in place.',
  behaviors: [],
};

const mapDetails = {
  title: 'MTN FieldMap',
  description:
    'Concepts and the relationships between them, assembled from assertions. Every one records what it rests on.',
  behaviors: [],
};

const layerDetails = {
  title: 'Layers and change containment',
  description: 'Each source is a layer, and layers compose recursively.',
  behaviors: [],
};

const ANSWER_STAGES = [
  {
    stage: 'Interpret',
    actor: 'Model',
    detail:
      'A question becomes one or more goals from a closed, enumerated catalog. Selection from a fixed set, never free-form query generation.',
  },
  {
    stage: 'Ground',
    actor: 'Engine',
    detail:
      'Terms resolve to identities in the FieldMap: resolved, ambiguous-with-candidates, or unknown. Never a silent best guess.',
  },
  {
    stage: 'Assess',
    actor: 'Engine',
    detail:
      'Before anything executes, the engine decides whether the map can support the question, and names what is missing if it cannot.',
  },
  {
    stage: 'Execute',
    actor: 'Engine',
    detail:
      'A fixed plan per goal type produces a structured answer and the assertions it was computed from.',
  },
  {
    stage: 'Narrate',
    actor: 'Model',
    detail:
      'The model renders the structured answer into prose. It adds nothing, including nothing about gaps it was not shown.',
  },
  {
    stage: 'Deliver',
    actor: 'Log',
    detail:
      'Goal, answer, and narration are logged together, so any answer can be replayed and disputed mechanically.',
  },
];

export default function TechnicalPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        headline="Technical overview"
        subheadline="MTN FieldMap: a map of what your data means, maintained outside your data path, honest about what it does not know."
        ctaText="Schedule a Technical Session"
        ctaHref="/contact"
        variant="internal"
      />

      {/* Architecture Overview */}
      <section className="section-spacing bg-[var(--ms-border)]/30">
        <div className="container-site">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              headline="Where Guide sits"
              subheadline="Above the data path, not inside it. Your records never route through MTN."
            />

            <div className="mb-8 p-6 md:p-8 rounded-lg bg-white border border-[var(--ms-border)]">
              {/* Portrait for phones: the chain runs down, and the data path
                  bypasses Guide on a rail rather than sitting below it. */}
              <svg
                viewBox="0 0 340 372"
                className="w-full max-w-[360px] mx-auto h-auto md:hidden"
                role="img"
                aria-label="Diagram: MTN Guide reads schemas, documentation, and anonymized payloads from source systems and returns routes and mappings to your pipeline. Data itself flows directly from sources to your warehouse without passing through MTN."
              >
                <rect x="15" y="16" width="215" height="56" rx="10" fill="white" stroke="var(--ms-border)" strokeWidth="1.5" />
                <text x="122" y="42" textAnchor="middle" fontSize="14" fontWeight="600" fill="var(--ms-heading)">
                  Your sources
                </text>
                <text x="122" y="60" textAnchor="middle" fontSize="11" fill="var(--ms-body)">
                  EHRs, claims, devices
                </text>

                <path d="M 122 72 L 122 142" stroke="var(--ms-primary)" strokeWidth="1.5" strokeDasharray="5 4" fill="none" />
                <path d="M 122 148 l -4 -8 l 8 0 z" fill="var(--ms-primary)" />
                <text x="134" y="101" fontSize="10.5" fill="var(--ms-primary)">schemas, docs,</text>
                <text x="134" y="115" fontSize="10.5" fill="var(--ms-primary)">anonymized payloads</text>

                <rect x="15" y="148" width="215" height="60" rx="12" fill="rgba(74,111,165,0.10)" stroke="var(--ms-primary)" strokeWidth="2" />
                <text x="122" y="174" textAnchor="middle" fontSize="15" fontWeight="600" fill="var(--ms-heading)">
                  MTN Guide
                </text>
                <text x="122" y="193" textAnchor="middle" fontSize="10.5" fill="var(--ms-body)">
                  the map — concepts, evidence
                </text>

                <path d="M 122 208 L 122 278" stroke="var(--ms-primary)" strokeWidth="1.5" strokeDasharray="5 4" fill="none" />
                <path d="M 122 284 l -4 -8 l 8 0 z" fill="var(--ms-primary)" />
                <text x="134" y="237" fontSize="10.5" fill="var(--ms-primary)">routes and mappings,</text>
                <text x="134" y="251" fontSize="10.5" fill="var(--ms-primary)">not results</text>

                <rect x="15" y="284" width="215" height="56" rx="10" fill="white" stroke="var(--ms-border)" strokeWidth="1.5" />
                <text x="122" y="310" textAnchor="middle" fontSize="14" fontWeight="600" fill="var(--ms-heading)">
                  Your stack
                </text>
                <text x="122" y="328" textAnchor="middle" fontSize="11" fill="var(--ms-body)">
                  warehouse, BI, models
                </text>

                {/* The data path bypasses Guide entirely */}
                <path d="M 230 44 L 290 44 L 290 312 L 238 312" stroke="var(--ms-accent)" strokeWidth="2.5" fill="none" />
                <path d="M 230 312 l 9 -5 l 0 10 z" fill="var(--ms-accent)" />
                <text
                  x="306"
                  y="178"
                  fontSize="11"
                  fontWeight="600"
                  fill="var(--ms-accent)"
                  textAnchor="middle"
                  transform="rotate(90 306 178)"
                >
                  your data, never through MTN
                </text>
              </svg>

              {/* Landscape from md up */}
              <svg
                viewBox="0 0 640 260"
                className="w-full h-auto hidden md:block"
                role="img"
                aria-label="Diagram: MTN Guide reads schemas, documentation, and anonymized payloads from source systems and returns routes and mappings to your pipeline. Data itself flows directly from sources to your warehouse without passing through MTN."
              >
                {/* Guide box — top */}
                <rect
                  x="215"
                  y="10"
                  width="210"
                  height="66"
                  rx="12"
                  fill="rgba(74,111,165,0.10)"
                  stroke="var(--ms-primary)"
                  strokeWidth="2"
                />
                <text
                  x="320"
                  y="38"
                  textAnchor="middle"
                  fontSize="15"
                  fontWeight="600"
                  fill="var(--ms-heading)"
                >
                  MTN Guide
                </text>
                <text
                  x="320"
                  y="58"
                  textAnchor="middle"
                  fontSize="12"
                  fill="var(--ms-body)"
                >
                  maintains MTN FieldMap
                </text>

                {/* Up arrow: reads schemas */}
                <path
                  d="M 120 168 L 120 100 L 235 100 L 235 78"
                  stroke="var(--ms-primary)"
                  strokeWidth="1.5"
                  strokeDasharray="5 4"
                  fill="none"
                />
                <path d="M 235 78 l -4 8 l 8 0 z" fill="var(--ms-primary)" />
                <text x="128" y="120" fontSize="11" fill="var(--ms-primary)">
                  schemas, docs, anonymized payloads
                </text>

                {/* Down arrow: returns routes */}
                <path
                  d="M 405 78 L 405 100 L 520 100 L 520 166"
                  stroke="var(--ms-primary)"
                  strokeWidth="1.5"
                  strokeDasharray="5 4"
                  fill="none"
                />
                <path d="M 520 172 l -4 -8 l 8 0 z" fill="var(--ms-primary)" />
                <text x="414" y="120" fontSize="11" fill="var(--ms-primary)">
                  routes and mappings, not results
                </text>

                {/* Sources */}
                <rect
                  x="40"
                  y="170"
                  width="160"
                  height="62"
                  rx="10"
                  fill="white"
                  stroke="var(--ms-border)"
                  strokeWidth="1.5"
                />
                <text
                  x="120"
                  y="196"
                  textAnchor="middle"
                  fontSize="14"
                  fontWeight="600"
                  fill="var(--ms-heading)"
                >
                  Your sources
                </text>
                <text
                  x="120"
                  y="215"
                  textAnchor="middle"
                  fontSize="11"
                  fill="var(--ms-body)"
                >
                  EHRs, claims, devices
                </text>

                {/* Warehouse */}
                <rect
                  x="440"
                  y="170"
                  width="160"
                  height="62"
                  rx="10"
                  fill="white"
                  stroke="var(--ms-border)"
                  strokeWidth="1.5"
                />
                <text
                  x="520"
                  y="196"
                  textAnchor="middle"
                  fontSize="14"
                  fontWeight="600"
                  fill="var(--ms-heading)"
                >
                  Your stack
                </text>
                <text
                  x="520"
                  y="215"
                  textAnchor="middle"
                  fontSize="11"
                  fill="var(--ms-body)"
                >
                  warehouse, BI, models
                </text>

                {/* Data path — solid, direct */}
                <path
                  d="M 200 201 L 432 201"
                  stroke="var(--ms-accent)"
                  strokeWidth="2.5"
                  fill="none"
                />
                <path d="M 440 201 l -9 -5 l 0 10 z" fill="var(--ms-accent)" />
                <text
                  x="316"
                  y="192"
                  textAnchor="middle"
                  fontSize="11"
                  fontWeight="600"
                  fill="var(--ms-accent)"
                >
                  your data
                </text>
                <text
                  x="316"
                  y="252"
                  textAnchor="middle"
                  fontSize="11"
                  fill="var(--ms-body-light)"
                >
                  Records move on your infrastructure. Guide never touches them.
                </text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* The answering loop */}
      <section className="section-spacing">
        <div className="container-site">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              headline="How a question is answered"
              subheadline="A language model appears at exactly two points. Everything between them is deterministic."
            />

            <div className="mt-8 rounded-lg bg-white border border-[var(--ms-border)] overflow-hidden">
              {ANSWER_STAGES.map((s, i) => (
                <div
                  key={s.stage}
                  className={`grid grid-cols-1 md:grid-cols-[130px_90px_minmax(0,1fr)] gap-x-5 gap-y-1 p-5 md:p-6 ${
                    i > 0 ? 'border-t border-[var(--ms-border)]' : ''
                  }`}
                >
                  <div className="font-display font-semibold text-[var(--ms-heading)] text-lg">
                    {s.stage}
                  </div>
                  <div>
                    <span
                      className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wide uppercase ${
                        s.actor === 'Model'
                          ? 'bg-[var(--ms-accent)]/10 text-[var(--ms-accent)]'
                          : 'bg-[var(--ms-border)] text-[var(--ms-body)]'
                      }`}
                    >
                      {s.actor}
                    </span>
                  </div>
                  <p className="text-base text-[var(--ms-body)] leading-relaxed">
                    {s.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Evidence / ingestion */}
      <section className="section-spacing bg-[var(--ms-border)]/30">
        <div className="container-site">
          <div className="max-w-4xl mx-auto">
            <TechnicalSection
              {...evidenceDetails}
              graphic={<EvidenceInputs />}
            />
          </div>
        </div>
      </section>

      {/* MTN FieldMap */}
      <section className="section-spacing">
        <div className="container-site">
          <div className="max-w-4xl mx-auto">
            <TechnicalSection {...mapDetails} graphic={<ConceptMapDiagram />} />
          </div>
        </div>
      </section>

      {/* Layers */}
      <section className="section-spacing bg-[var(--ms-border)]/30">
        <div className="container-site">
          <div className="max-w-4xl mx-auto">
            <TechnicalSection
              {...layerDetails}
              graphic={<LayerStackDiagram />}
            />
          </div>
        </div>
      </section>

      {/* Uncertainty and review */}
      <section className="section-spacing">
        <div className="container-site">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              headline="Uncertainty and human review"
              subheadline="An answer is only as good as the weakest assertion underneath it."
            />

            <div className="mt-8">
              <WeakestLinkDiagram />
            </div>

            <div className="mt-6 p-6 rounded-lg bg-white border border-[var(--ms-border)]">
              <h3 className="font-display text-[var(--ms-heading)] mb-3">
                Calibrated confidence and guided review
              </h3>
              <p className="text-base text-[var(--ms-body)] leading-relaxed">
                Trust levels are validated against outcomes rather than asserted
                by the model that produced them, and guided elicitation ranks
                which questions are worth a person’s attention. Where the
                evidence does not support a score, the engine declines to invent
                one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security posture */}
      <section className="section-spacing bg-[var(--ms-border)]/30">
        <div className="container-site">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              headline="Security and regulatory posture"
              subheadline="The strongest control is architectural: the sensitive data mostly isn’t there."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg bg-white border border-[var(--ms-border)]">
                <h3 className="font-display text-[var(--ms-heading)] mb-3">
                  Schema-first by default
                </h3>
                <p className="text-base text-[var(--ms-body)] leading-relaxed">
                  Schemas, documentation, and synthetic examples are enough to
                  begin, with no PHI and no production access. That materially shortens
                  security review, and it is a design property rather than a
                  configuration option.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-white border border-[var(--ms-border)]">
                <h3 className="font-display text-[var(--ms-heading)] mb-3">
                  When deeper access is warranted
                </h3>
                <p className="text-base text-[var(--ms-body)] leading-relaxed">
                  Some work needs more than schemas: value-level disambiguation,
                  or drift detection against live data. That is a
                  separate, explicit step taken under a BAA, scoped to the
                  specific need, and never a precondition for getting started.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-white border border-[var(--ms-border)]">
                <h3 className="font-display text-[var(--ms-heading)] mb-3">
                  Audit and traceability
                </h3>
                <p className="text-base text-[var(--ms-body)] leading-relaxed">
                  Traceability is how the map is built, not a logging layer
                  added around it.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-white border border-[var(--ms-border)]">
                <h3 className="font-display text-[var(--ms-heading)] mb-3">
                  Model independence
                </h3>
                <p className="text-base text-[var(--ms-body)] leading-relaxed">
                  Guide is not tied to one model vendor. Providers are
                  configured per deployment, so model choice follows your
                  procurement and data agreements rather than dictating them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration surface */}
      <section className="section-spacing">
        <div className="container-site">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              headline="Integration surface"
              subheadline="If you are an engineer or SI technical lead, here is what you get to build against."
            />
            <div className="mt-8">
              <IntegrationSurface />
            </div>
          </div>
        </div>
      </section>

      {/* Primary CTA */}
      <PrimaryCTABanner
        headline="Ready to discuss architecture?"
        description="We'll walk through how this fits your stack, what a bounded evaluation looks like, and where the boundaries of the system actually are."
        ctaText="Schedule a Technical Session"
        ctaHref="/contact"
        variant="technical"
      />
    </>
  );
}
