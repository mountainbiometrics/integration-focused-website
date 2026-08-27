import type { Metadata } from 'next';
import Hero from '@/components/content/Hero';
import SectionHeader from '@/components/content/SectionHeader';
import TechnicalSection from '@/components/technical/TechnicalSection';
import PrimaryCTABanner from '@/components/cta/PrimaryCTABanner';

export const metadata: Metadata = {
  title: 'Technical Overview | MTN',
  description:
    'How MTN Guide works: an evidence-backed semantic map maintained outside the data path, with a deterministic answering engine and explicit refusal.',
};

const evidenceDetails = {
  title: 'What Guide reads',
  description:
    'Guide builds the map from descriptions of your systems rather than from their contents. Schema-level evidence is enough to begin, which is what lets an engagement start before a data agreement is in place.',
  behaviors: [
    'DDL, JSON Schema, OpenAPI specs, data dictionaries, and warehouse catalogs',
    'Prose documentation, integration guides, and vendor references',
    'Synthetic or anonymized example payloads where values clarify meaning',
    'Human answers to specific questions, recorded as evidence in their own right',
    'Each modality keeps an evidence shape faithful to the artifact it came from',
  ],
};

const mapDetails = {
  title: 'The map',
  description:
    'The map is a graph of concepts and the relationships between them, assembled from assertions. Every assertion records what it rests on, so any claim can be walked back to its source.',
  behaviors: [
    'A concept’s existence is itself an assertion, with evidence and an author',
    'Re-deriving a concept corroborates the existing one rather than duplicating it',
    'Competing claims coexist and stay visible; the map does not silently overwrite',
    'Provenance is derived from the writing action — deterministic rule, model, or person',
    'A person’s confirmation is first-class evidence, not a separate approval flag',
  ],
};

const layerDetails = {
  title: 'Layers and change containment',
  description:
    'Each source is a layer. Layers compose into higher layers, recursively, and a canonical model is just a composite layer. Correspondence between two systems is recorded in the layer above both of them.',
  behaviors: [
    'No fixed hierarchy — how many levels exist is your structural choice',
    'A schema change re-evaluates the connection it affects, not the whole estate',
    'A database schema and its API projection can be held apart rather than merged',
    'Correspondence carries the conditions it holds under, not a bare equals sign',
    'Conflicts surface when the map is queried, rather than in a separate batch job',
  ],
};

const ANSWER_STAGES = [
  {
    stage: 'Interpret',
    actor: 'Model',
    detail:
      'A question is translated into one or more goals from a closed, enumerated catalog. Selection from a fixed set, not free-form query generation.',
  },
  {
    stage: 'Ground',
    actor: 'Engine',
    detail:
      'Terms in the question resolve to identities in the map. The result is resolved, ambiguous-with-candidates, or unknown — never a silent best guess.',
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
      'A fixed plan per goal type produces a structured answer, together with the complete set of assertions it was computed from.',
  },
  {
    stage: 'Narrate',
    actor: 'Model',
    detail:
      'The structured answer is rendered into prose. The model adds nothing — including nothing about gaps it was not shown.',
  },
  {
    stage: 'Deliver',
    actor: 'Log',
    detail:
      'Goal, structured answer, and narration arrive together and are logged, so any answer can be replayed and disputed mechanically.',
  },
];

export default function TechnicalPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        headline="Technical overview"
        subheadline="A map of what your data means, maintained outside your data path, honest about what it does not know."
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

            <div className="mb-8 p-6 md:p-8 rounded-lg bg-white border border-[var(--ms-border)] overflow-x-auto">
              <svg
                viewBox="0 0 640 260"
                className="w-full min-w-[560px] h-auto"
                role="img"
                aria-label="Diagram: MTN Guide reads schemas and documentation from source systems and returns routes and mappings to your pipeline. Data itself flows directly from sources to your warehouse without passing through MTN."
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
                <text x="320" y="58" textAnchor="middle" fontSize="12" fill="var(--ms-body)">
                  The map — concepts, evidence, routes
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
                  schemas, docs, API specs
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
                  mappings, routes, gaps
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
                <text x="120" y="215" textAnchor="middle" fontSize="11" fill="var(--ms-body)">
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
                <text x="520" y="215" textAnchor="middle" fontSize="11" fill="var(--ms-body)">
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
                <text x="316" y="252" textAnchor="middle" fontSize="11" fill="var(--ms-body-light)">
                  Records move on your infrastructure. Guide never touches them.
                </text>
              </svg>
            </div>

            <p className="text-base text-[var(--ms-body)] leading-relaxed">
              This is the structural consequence of one decision: an answer from
              Guide is a <strong className="font-semibold text-[var(--ms-heading)]">route,
              not a result</strong>. Guide tells you which tables and fields carry
              the concept you asked about, and how to join them. Running that query
              stays with you — which means the map can be useful long before any
              agreement about data access exists, and stays outside the blast
              radius of your production pipeline.
            </p>
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

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-lg bg-white border border-[var(--ms-border)]">
                <h3 className="font-display text-[var(--ms-heading)] mb-3">
                  The model never states a fact
                </h3>
                <p className="text-base text-[var(--ms-body)] leading-relaxed">
                  It selects a goal and it renders a result. Every fact in an answer
                  came from an assertion a writer put in the map. Selection from a
                  governed vocabulary fails loudly and out of scope; free-form query
                  generation fails silently and plausibly.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-white border border-[var(--ms-border)]">
                <h3 className="font-display text-[var(--ms-heading)] mb-3">
                  Refusal is a complete answer
                </h3>
                <p className="text-base text-[var(--ms-body)] leading-relaxed">
                  “The map cannot answer this, and here is what is missing” is a
                  successful outcome, decided before execution by a per-goal
                  predicate. Those named gaps become the queue for what to map next.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-white border border-[var(--ms-border)]">
                <h3 className="font-display text-[var(--ms-heading)] mb-3">
                  Every answer is replayable
                </h3>
                <p className="text-base text-[var(--ms-body)] leading-relaxed">
                  Goal, structured answer, and prose are delivered together and
                  logged. “Why did it say that” is settled by inspection rather than
                  argument, and answers are recomputed against the current map
                  rather than cached and going stale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evidence / ingestion */}
      <section className="section-spacing bg-[var(--ms-border)]/30">
        <div className="container-site">
          <div className="max-w-3xl mx-auto">
            <TechnicalSection {...evidenceDetails} />
          </div>
        </div>
      </section>

      {/* The map */}
      <section className="section-spacing">
        <div className="container-site">
          <div className="max-w-3xl mx-auto">
            <TechnicalSection {...mapDetails} />
          </div>
        </div>
      </section>

      {/* Layers */}
      <section className="section-spacing bg-[var(--ms-border)]/30">
        <div className="container-site">
          <div className="max-w-3xl mx-auto">
            <TechnicalSection {...layerDetails} />
          </div>
        </div>
      </section>

      {/* Uncertainty and review */}
      <section className="section-spacing">
        <div className="container-site">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              headline="Uncertainty and human review"
              subheadline="Where we are precise about what exists today, because this is the part that matters most."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 rounded-lg bg-white border border-[var(--ms-border)]">
                <h3 className="font-display text-[var(--ms-heading)] mb-3">
                  Evidence behind every answer
                </h3>
                <p className="text-base text-[var(--ms-body)] leading-relaxed">
                  Each assertion carries a self-reported confidence from the writer
                  that made it, along with its evidence. Deterministic derivations
                  are certain by construction and say so. Answers name the complete
                  set of assertions behind them, so a reviewer can see exactly what
                  a conclusion rests on and where the weak link is.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-white border border-[var(--ms-border)]">
                <h3 className="font-display text-[var(--ms-heading)] mb-3">
                  Calibrated confidence and guided review
                </h3>
                <p className="text-base text-[var(--ms-body)] leading-relaxed">
                  Trust levels are validated against outcomes rather than asserted by
                  the model that produced them, and guided elicitation ranks which
                  questions are actually worth a person’s attention. Because the
                  inputs are calibrated, an aggregate confidence score means something
                  you can act on. Where the evidence does not support a score, the
                  engine still declines to invent one — a number that looks more
                  authoritative than it is remains the failure mode we design against.
                </p>
              </div>
            </div>
            <p className="text-base text-[var(--ms-body-light)] leading-relaxed mt-6">
              Engagements today are bounded and engineer-supported. A forward-deployed
              engineer configures access, model providers, and the review workflow, and
              works the ambiguous cases with your domain experts. The engineer does not
              hand-map every field — that is the part the system does.
            </p>
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
                  An engagement can begin with schemas, documentation, and synthetic
                  examples, with no PHI and no production access. Because answers are
                  routes rather than results, records do not flow through MTN in
                  normal operation. This materially shortens security review, and it
                  is a design property rather than a configuration option.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-white border border-[var(--ms-border)]">
                <h3 className="font-display text-[var(--ms-heading)] mb-3">
                  When deeper access is warranted
                </h3>
                <p className="text-base text-[var(--ms-body)] leading-relaxed">
                  Some work — value-level disambiguation, drift detection against
                  live data — needs more than schemas. That is a separate, explicit
                  step taken under a BAA, scoped to the specific need, and never a
                  precondition for getting started.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-white border border-[var(--ms-border)]">
                <h3 className="font-display text-[var(--ms-heading)] mb-3">
                  Audit and traceability
                </h3>
                <p className="text-base text-[var(--ms-body)] leading-relaxed">
                  Every write to the map is attributed to the action that produced
                  it — deterministic rule, model run, or named person — and every
                  answer is logged with the goal and structured result that produced
                  it. Traceability is how the map is built, not a logging layer added
                  around it.
                </p>
              </div>
              <div className="p-6 rounded-lg bg-white border border-[var(--ms-border)]">
                <h3 className="font-display text-[var(--ms-heading)] mb-3">
                  Model independence
                </h3>
                <p className="text-base text-[var(--ms-body)] leading-relaxed">
                  Guide is not tied to one model vendor. Providers are configured per
                  deployment, so model choice follows your procurement and data
                  agreements rather than dictating them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment */}
      <section className="section-spacing">
        <div className="container-site">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              headline="Deployment"
              subheadline="Shaped to your security and infrastructure requirements."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg bg-white border border-[var(--ms-border)]">
                <h3 className="font-display text-[var(--ms-heading)] mb-3">
                  Managed
                </h3>
                <p className="text-base text-[var(--ms-body)] mb-4">
                  Hosted deployment with single-tenant isolation, managed updates,
                  and a BAA where the engagement calls for one.
                </p>
                <ul className="space-y-2 text-base text-[var(--ms-body)]">
                  <li>• AWS, Azure, or GCP</li>
                  <li>• Single-tenant isolation</li>
                  <li>• Managed updates and monitoring</li>
                </ul>
              </div>
              <div className="p-6 rounded-lg bg-white border border-[var(--ms-border)]">
                <h3 className="font-display text-[var(--ms-heading)] mb-3">
                  In your environment
                </h3>
                <p className="text-base text-[var(--ms-body)] mb-4">
                  Deployed inside your infrastructure, with model providers pointed
                  wherever your policies require.
                </p>
                <ul className="space-y-2 text-base text-[var(--ms-body)]">
                  <li>• Kubernetes or VM deployment</li>
                  <li>• Your network boundary, your key management</li>
                  <li>• Your security policies apply</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration surface */}
      <section className="section-spacing bg-[var(--ms-border)]/30">
        <div className="container-site">
          <div className="max-w-3xl mx-auto">
            <SectionHeader
              headline="Integration surface"
              subheadline="If you are an engineer or SI technical lead, here is what you get to build against."
            />
            <ul className="space-y-3 mt-4">
              {[
                'One internal API, exposed as MCP tools and HTTP — machine and human callers get identical semantics',
                'Structured answer objects consumable directly, without the narration step, when your own agent is the reader',
                'Map export with the evidence and attribution behind every assertion',
                'The map is yours: mappings and transformation specifications you can implement in your own pipeline',
                'Sandbox environment for pre-engagement schema introspection',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2.5 bg-[var(--ms-body)]" />
                  <span className="text-[var(--ms-heading)] text-base leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
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
