/**
 * WeakestLinkDiagram — what an answer actually rests on.
 *
 * An answer names the complete set of assertions behind it, each carrying its
 * own confidence and the provenance of whatever wrote it. The answer inherits
 * the weakest of them, and that weakest assertion is what becomes the review
 * queue — which is the whole argument of the section in one figure.
 *
 * Built as markup rather than SVG: this is a list, so real text stays
 * selectable, scales with the reader's type size, and needs no horizontal
 * scroll on a phone. Provenance glyphs use the same vocabulary as
 * ConceptMapDiagram — diamond for a person, square for a rule, circle for a
 * model.
 */

type Provenance = 'person' | 'rule' | 'model';

interface Assertion {
  label: string;
  by: Provenance;
  /** 0–1, or null where the derivation is certain by construction. */
  confidence: number | null;
  weakest?: boolean;
}

const ASSERTIONS: Assertion[] = [
  { label: 'patient_id maps across all five systems', by: 'person', confidence: 0.98 },
  { label: 'production = sum(billed_amount)', by: 'rule', confidence: null },
  { label: '“adjustment” as defined in Practice C', by: 'model', confidence: 0.41, weakest: true },
  { label: 'location_id mapped from site_code, Practice E', by: 'model', confidence: 0.62 },
];

function Glyph({ by, accent }: { by: Provenance; accent?: boolean }) {
  const stroke = accent ? 'var(--ms-accent)' : 'var(--ms-primary)';
  const common = { fill: 'white', stroke, strokeWidth: 1.6 };
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true" className="flex-shrink-0">
      {by === 'model' && <circle cx="7" cy="7" r="5.5" {...common} />}
      {by === 'rule' && <rect x="1.5" y="1.5" width="11" height="11" rx="2.5" {...common} />}
      {by === 'person' && (
        <rect x="2.6" y="2.6" width="8.8" height="8.8" rx="2" transform="rotate(45 7 7)" {...common} />
      )}
    </svg>
  );
}

function ConfidenceBar({ value, accent }: { value: number; accent?: boolean }) {
  return (
    <div
      className="h-2 flex-1 rounded-full bg-[var(--ms-border)] overflow-hidden"
      aria-hidden="true"
    >
      <div
        className="h-full rounded-full"
        style={{
          width: `${Math.round(value * 100)}%`,
          backgroundColor: accent ? 'var(--ms-accent)' : 'var(--ms-primary)',
          opacity: accent ? 0.85 : 0.55,
        }}
      />
    </div>
  );
}

export default function WeakestLinkDiagram() {
  return (
    <figure className="rounded-lg bg-white border border-[var(--ms-border)] p-5 md:p-6 m-0">
      <figcaption className="pb-4 border-b border-[var(--ms-border)]">
        <span className="block text-xs font-semibold uppercase tracking-wide text-[var(--ms-body-light)]">
          The answer
        </span>
        <span className="block mt-1.5 font-display text-lg text-[var(--ms-heading)]">
          “What was production across all five practices?”
        </span>
      </figcaption>

      <ul className="divide-y divide-[var(--ms-border)]">
        {ASSERTIONS.map((a) => (
          <li
            key={a.label}
            className={`flex flex-col gap-2 py-3.5 sm:flex-row sm:items-center sm:gap-5 ${
              a.weakest ? '-mx-2 px-2 rounded bg-[var(--ms-accent)]/[0.04]' : ''
            }`}
          >
            <div className="flex items-center gap-2.5 min-w-0 sm:flex-1">
              <Glyph by={a.by} accent={a.weakest} />
              <span
                className={`text-base leading-snug ${
                  a.weakest
                    ? 'text-[var(--ms-heading)] font-medium'
                    : 'text-[var(--ms-body)]'
                }`}
              >
                {a.label}
              </span>
            </div>

            <div className="flex items-center gap-3 sm:w-[210px] sm:flex-shrink-0">
              {a.confidence === null ? (
                <>
                  {/* Full and solid: certain by construction outranks any measured score */}
                  <div
                    className="h-2 flex-1 rounded-full bg-[var(--ms-border)] overflow-hidden"
                    aria-hidden="true"
                  >
                    <div
                      className="h-full w-full rounded-full"
                      style={{ backgroundColor: 'var(--ms-primary)', opacity: 0.75 }}
                    />
                  </div>
                  <span className="text-sm text-[var(--ms-body)] w-[4.5rem] text-right">
                    certain
                  </span>
                </>
              ) : (
                <>
                  <ConfidenceBar value={a.confidence} accent={a.weakest} />
                  <span
                    className={`text-sm tabular-nums w-[4.5rem] text-right ${
                      a.weakest
                        ? 'text-[var(--ms-accent)] font-semibold'
                        : 'text-[var(--ms-body)]'
                    }`}
                  >
                    {a.confidence.toFixed(2)}
                    {a.weakest && (
                      <span className="hidden sm:inline"> ◄</span>
                    )}
                  </span>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-5 pt-4 border-t border-[var(--ms-border)] space-y-2">
        <p className="text-base text-[var(--ms-heading)] leading-relaxed">
          The answer inherits{' '}
          <strong className="font-semibold text-[var(--ms-accent)]">0.41</strong>, the
          weakest assertion it rests on, not the average of the four.
        </p>
        <p className="text-base text-[var(--ms-body)] leading-relaxed">
          That one assertion becomes the review queue: <em>what does “adjustment” mean
          in Practice C?</em> Answer it, and the whole conclusion moves.
        </p>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[var(--ms-body)]">
        <span className="inline-flex items-center gap-2">
          <Glyph by="person" /> person
        </span>
        <span className="inline-flex items-center gap-2">
          <Glyph by="rule" /> rule
        </span>
        <span className="inline-flex items-center gap-2">
          <Glyph by="model" /> model
        </span>
        <span className="text-[var(--ms-body-light)]">
          Deterministic derivations are certain by construction, and say so.
        </span>
      </div>
    </figure>
  );
}
