'use client';

import { useRef } from 'react';
import { useScrollProgress, remap } from '@/hooks/useScrollProgress';

interface BreakRow {
  source: string;
  code: string;
  spec: string;
  fade: [number, number];
}

const ROWS: readonly BreakRow[] = [
  {
    source: 'A1c 9.2%, drawn 3/15',
    code: 'LOINC 4548-4',
    spec: 'UDS Table 7',
    fade: [0.05, 0.40],
  },
  {
    source: 'Narrative depression assessment',
    code: 'PHQ-9 ≥ 10 + follow-up',
    spec: 'eCQM CMS2v13',
    fade: [0.30, 0.65],
  },
];

export default function RhtpWhereItBreaks() {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useScrollProgress(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="bg-white pt-0 pb-20 md:pb-28 lg:pb-32"
      aria-label="Where the meaning fails to translate"
    >
      <div className="container-site max-w-3xl mx-auto">
        <div className="space-y-6 md:space-y-8">
          {ROWS.map((row) => {
            const p = remap(progress, row.fade[0], row.fade[1]);
            return (
              <div
                key={row.source}
                className="grid grid-cols-[1fr_auto_1fr] items-stretch gap-3 md:gap-5"
                style={{
                  opacity: p,
                  transform: `translateY(${(1 - p) * 16}px)`,
                }}
              >
                {/* Chart-note style source */}
                <div
                  className="rounded-lg p-4 md:p-5 flex flex-col justify-between"
                  style={{
                    backgroundColor: 'var(--ms-surface-warm)',
                    border: '1px solid var(--ms-border)',
                    boxShadow: 'var(--ms-shadow-card-sm)',
                  }}
                >
                  <p
                    className="text-sm md:text-base text-[var(--ms-heading)] italic leading-snug"
                    style={{ fontFamily: 'var(--font-body-serif), Georgia, serif' }}
                  >
                    &ldquo;{row.source}&rdquo;
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.14em] text-[var(--ms-muted)] mt-3">
                    Chart note
                  </p>
                </div>

                {/* Broken arrow */}
                <div
                  className="flex items-center justify-center px-1 md:px-2"
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 64 28"
                    className="w-12 md:w-16 h-7"
                    fill="none"
                    stroke="var(--ms-primary)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="2" y1="14" x2="22" y2="14" />
                    <line x1="42" y1="14" x2="58" y2="14" />
                    <polyline points="52,9 58,14 52,19" />
                    <line x1="28" y1="6" x2="36" y2="22" />
                    <line x1="28" y1="22" x2="36" y2="6" />
                  </svg>
                </div>

                {/* Required-spec code box */}
                <div
                  className="rounded-lg p-4 md:p-5 flex flex-col justify-between"
                  style={{
                    backgroundColor: '#1A1A2E',
                    boxShadow: 'var(--ms-shadow-card-sm)',
                  }}
                >
                  <p className="text-xs md:text-sm font-mono text-white tabular-nums break-all leading-snug">
                    {row.code}
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.14em] mt-3" style={{ color: '#A0A0B5' }}>
                    {row.spec} &middot; required
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-base md:text-lg text-[var(--ms-heading)] font-semibold text-center mt-10 md:mt-14">
          Care happened. The measure won&rsquo;t&nbsp;count.
        </p>
      </div>
    </section>
  );
}
