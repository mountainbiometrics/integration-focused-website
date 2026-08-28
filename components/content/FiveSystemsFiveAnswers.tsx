/* The stakes, concretely: one question, five systems, five different answers. */

export interface AnswerRow {
  system: string;
  value: number;
}

interface Props {
  question: string;
  rows: AnswerRow[];
  /** wraps the spread figure, e.g. prefix "$" + suffix "M" renders "$354M apart" */
  spreadPrefix?: string;
  spreadSuffix?: string;
  footer?: string;
  compact?: boolean;
}

export const HEALTHCARE_HEADCOUNT: AnswerRow[] = [
  { system: 'Workday', value: 1428 },
  { system: 'MatrixCare', value: 1606 },
  { system: 'PointClickCare', value: 1571 },
  { system: 'NetSuite', value: 1689 },
  { system: 'Legacy DB', value: 1352 },
];

export const FINANCE_AUM: AnswerRow[] = [
  { system: 'Addepar', value: 2140 },
  { system: 'Fund admin', value: 2318 },
  { system: 'eFront', value: 2266 },
  { system: 'NetSuite', value: 2401 },
  { system: 'Legacy DB', value: 2047 },
];

export default function FiveSystemsFiveAnswers({
  question,
  rows,
  spreadPrefix = '',
  spreadSuffix = '',
  footer = 'Five systems, five answers, and nothing that says which one to report.',
  compact = false,
}: Props) {
  const low = Math.min(...rows.map((r) => r.value));
  const high = Math.max(...rows.map((r) => r.value));
  const spread = high - low;
  const pad = compact ? 'px-5 md:px-6' : 'px-6 md:px-8';

  return (
    <figure className="m-0 h-full">
      <div
        className="h-full flex flex-col rounded-2xl bg-white border border-[var(--ms-border)] overflow-hidden"
        style={{ boxShadow: 'var(--ms-shadow-card-sm)' }}
      >
        <div className={`${pad} pt-5 pb-4 border-b border-[var(--ms-border)]`}>
          <div className="text-xs uppercase tracking-wide font-semibold text-[var(--ms-body-light)] mb-2">
            One question
          </div>
          <p
            className={`font-display text-[var(--ms-heading)] leading-snug ${
              compact ? 'text-lg' : 'text-xl md:text-2xl'
            }`}
          >
            {question}
          </p>
        </div>

        <ul className="divide-y divide-[var(--ms-border)] flex-1">
          {rows.map((r) => {
            const pct = Math.round(30 + ((r.value - low) / spread) * 70);
            const extreme = r.value === low || r.value === high;
            return (
              <li key={r.system} className={`flex items-center gap-4 ${pad} py-3`}>
                <span
                  className={`shrink-0 text-[var(--ms-body)] ${
                    compact ? 'w-28 text-sm' : 'w-36 text-base'
                  }`}
                >
                  {r.system}
                </span>
                <span className="flex-1 hidden sm:block">
                  <span
                    className="block h-2 rounded-full"
                    style={{
                      width: `${pct}%`,
                      backgroundColor: extreme ? 'var(--ms-accent)' : 'var(--ms-primary)',
                      opacity: extreme ? 0.85 : 0.35,
                    }}
                  />
                </span>
                <span
                  className={`shrink-0 text-right font-semibold tabular-nums ${
                    compact ? 'w-16 text-base' : 'w-20 text-lg'
                  }`}
                  style={{ color: extreme ? 'var(--ms-accent)' : 'var(--ms-heading)' }}
                >
                  {r.value.toLocaleString()}
                </span>
              </li>
            );
          })}
        </ul>

        <div className={`${pad} py-4 bg-[var(--ms-surface)] border-t border-[var(--ms-border)]`}>
          <p className={`text-[var(--ms-heading)] ${compact ? 'text-sm' : 'text-base'}`}>
            <strong className="font-semibold text-[var(--ms-accent)]">
              {spreadPrefix}
              {spread.toLocaleString()}
              {spreadSuffix} apart
            </strong>{' '}
            {footer}
          </p>
        </div>
      </div>
    </figure>
  );
}
