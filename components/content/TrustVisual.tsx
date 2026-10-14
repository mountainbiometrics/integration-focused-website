'use client';

import { useRef } from 'react';
import { Lock } from 'lucide-react';
import { useScrollProgress, remap } from '@/hooks/useScrollProgress';

/* Trust, drawn: a claims table whose column names are readable and whose
   rows are not. A scan passes over the header only, then the mapping it
   produced appears with its evidence. Values echo the homepage demo. */

const COLUMNS = ['site_id', 'deny_flag', 'adj_date'];

/* Placeholder row values. They render blurred, so they only need to look
   like plausible data at a glance. */
const ROWS = [
  ['OGD-02', '1', '2026-10-14'],
  ['BOI-01', '0', '2026-10-09'],
  ['PRV-03', '1', '2026-10-21'],
  ['RNO-01', '0', '2026-10-02'],
];

export default function TrustVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const progress = useScrollProgress(ref, { startVh: 0.9, endVh: 0.6 });

  const scan = remap(progress, 0.05, 0.5);
  const headerLit = remap(progress, 0.1, 0.45);
  const mapping = remap(progress, 0.5, 0.75);

  return (
    <div
      ref={ref}
      role="img"
      aria-label="A claims table: MTN Guide reads the column names, while every row of data stays blurred and locked. It produces a mapping, deny_flag to Denied claim, with its evidence."
    >
      <div className="relative rounded-lg border border-[var(--ms-border)] bg-white overflow-hidden text-[11px] font-mono">
        {/* header: what Guide reads */}
        <div
          className="relative grid grid-cols-3 border-b-2 transition-colors"
          style={{
            borderColor: headerLit > 0.5 ? 'var(--ms-primary)' : 'var(--ms-border)',
            backgroundColor: `rgba(74,111,165,${0.1 * headerLit})`,
          }}
        >
          {COLUMNS.map((c) => (
            <div key={c} className="px-2.5 py-2 font-semibold text-[var(--ms-heading)]">
              {c}
            </div>
          ))}
          {/* scan line, header only */}
          <div
            className="absolute top-0 bottom-0 w-[2px] bg-[var(--ms-primary)]"
            style={{ left: `${scan * 100}%`, opacity: scan > 0 && scan < 1 ? 1 : 0 }}
          />
        </div>

        {/* rows: what Guide never touches */}
        <div className="relative">
          <div className="select-none" style={{ filter: 'blur(4px)' }} aria-hidden="true">
            {ROWS.map((r, i) => (
              <div key={i} className="grid grid-cols-3 border-b border-[var(--ms-border)] last:border-b-0">
                {r.map((v, j) => (
                  <div key={j} className="px-2.5 py-1.5 text-[var(--ms-body)]">
                    {v}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 border border-[var(--ms-border)] px-2.5 py-1 font-sans text-[11px] font-medium text-[var(--ms-body)]">
              <Lock className="w-3 h-3" strokeWidth={2.25} />
              Records never read
            </span>
          </div>
        </div>
      </div>

      {/* the resulting FieldMap entry */}
      <div
        className="mt-3 rounded-lg border border-[var(--ms-primary)] bg-[rgba(74,111,165,0.05)] px-3 py-2 text-[12px] leading-snug"
        style={{ opacity: mapping, transform: `translateY(${(1 - mapping) * 6}px)` }}
      >
        <span className="font-mono text-[var(--ms-heading)]">deny_flag</span>
        <span className="text-[var(--ms-muted)]"> → </span>
        <span className="font-semibold text-[var(--ms-heading)]">Denied claim</span>
        <div className="text-[11px] text-[var(--ms-primary)] mt-0.5">evidence: athenaOne data dictionary</div>
      </div>
    </div>
  );
}
