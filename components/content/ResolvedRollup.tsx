/* The worked example: five acquisitions on five systems, resolved through one
   map into one answer. The last row is the point: we never touch the data. */

const PRACTICES = [
  { name: 'Practice A', system: 'Open Dental' },
  { name: 'Practice B', system: 'Dentrix' },
  { name: 'Practice C', system: 'Eaglesoft' },
  { name: 'Practice D', system: 'Curve' },
  { name: 'Practice E', system: 'spreadsheets' },
];

const PATH = [
  { step: '5', label: 'queries generated' },
  { step: '1', label: 'union query' },
  { step: '1', label: 'trusted answer' },
];

export default function ResolvedRollup() {
  return (
    <div
      className="rounded-2xl bg-white border border-[var(--ms-border)] p-6 md:p-8"
      style={{ boxShadow: 'var(--ms-shadow-card-sm)' }}
    >
      <div className="text-xs uppercase tracking-wide font-semibold text-[var(--ms-body-light)] mb-4">
        Five acquisitions, each a different system
      </div>

      <div className="flex flex-wrap gap-2 mb-7">
        {PRACTICES.map((p) => (
          <div
            key={p.name}
            className="rounded-xl border border-[var(--ms-border)] bg-[var(--ms-surface)] px-4 py-2.5"
          >
            <div className="text-sm font-semibold text-[var(--ms-heading)]">{p.name}</div>
            <div className="text-xs text-[var(--ms-body-light)] mt-0.5">{p.system}</div>
          </div>
        ))}
      </div>

      <div className="rounded-xl border-l-[3px] border-l-[var(--ms-primary)] border-y border-r border-[var(--ms-border)] px-5 py-4 mb-7">
        <div className="font-display text-[var(--ms-heading)] text-lg">MTN FieldMap</div>
        <p className="text-base text-[var(--ms-body)] mt-1">
          One canonical map, so “production” means the same thing across all five.
        </p>
      </div>

      <div className="text-xs uppercase tracking-wide font-semibold text-[var(--ms-body-light)] mb-3">
        The question
      </div>
      <p className="text-lg md:text-xl font-display text-[var(--ms-heading)] leading-snug mb-6">
        “What was production across all my practices?”
      </p>

      <div className="flex flex-wrap items-center gap-x-3 gap-y-3">
        {PATH.map((p, i) => (
          <div key={p.label} className="flex items-center gap-3">
            <div className="rounded-xl bg-[var(--ms-surface)] border border-[var(--ms-border)] px-4 py-3">
              <span className="font-display text-2xl text-[var(--ms-accent)] leading-none mr-2">
                {p.step}
              </span>
              <span className="text-base text-[var(--ms-heading)]">{p.label}</span>
            </div>
            {i < PATH.length - 1 && (
              <svg
                className="w-4 h-4 shrink-0 text-[var(--ms-muted)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            )}
          </div>
        ))}
      </div>

      <p className="text-base text-[var(--ms-body)] mt-7 pt-5 border-t border-[var(--ms-border)]">
        FieldMap gives the guide, the agent writes the queries, your database runs
        them. <strong className="font-semibold text-[var(--ms-heading)]">We never touch your data.</strong>
      </p>
    </div>
  );
}
