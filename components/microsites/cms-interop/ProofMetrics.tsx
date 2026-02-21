'use client';

import { useRef } from 'react';
import { useScrollProgress, remap } from '@/hooks/useScrollProgress';

const METRICS = [
  { value: '99.0%', label: 'Mapping accuracy' },
  { value: '$3.30', label: 'Per field mapping cost' },
  { value: '<1 hr/wk', label: 'Maintenance at 200+ connections' },
  { value: '5–15 min', label: 'Per integration review' },
];

export default function ProofMetrics() {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useScrollProgress(sectionRef);

  const metricsIn = remap(progress, 0.05, 0.3);
  const comparisonIn = remap(progress, 0.3, 0.5);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 lg:py-32" style={{ backgroundColor: 'var(--ms-surface)' }}>
      <div className="container-site max-w-4xl mx-auto">
        <span className="inline-block px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.12em] mb-4 border bg-[rgba(90,111,209,0.05)] border-[rgba(90,111,209,0.12)] text-[var(--ms-blue)]">
          The Proof
        </span>
        <h2 className="font-display text-[1.5rem] md:text-[2rem] leading-[1.12] text-[var(--ms-heading)] mb-10 md:mb-14">
          Benchmarked across 60&nbsp;format variants.
        </h2>

        {/* Metric cards */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          style={{ opacity: metricsIn, transform: `translateY(${(1 - metricsIn) * 10}px)` }}
        >
          {METRICS.map((m) => (
            <div
              key={m.label}
              className="bg-white rounded-2xl p-5 text-center"
              style={{ boxShadow: 'var(--ms-shadow-card)' }}
            >
              <p className="text-xl md:text-2xl font-bold text-[var(--ms-blue)]">{m.value}</p>
              <p className="text-[10px] sm:text-xs text-[var(--ms-body)] mt-1">{m.label}</p>
            </div>
          ))}
        </div>

        {/* Maintenance comparison */}
        <div
          className="mt-6 space-y-3"
          style={{ opacity: comparisonIn, transform: `translateY(${(1 - comparisonIn) * 8}px)` }}
        >
          <div
            className="flex items-baseline gap-3 p-4 rounded-2xl bg-white"
            style={{
              boxShadow: 'var(--ms-shadow-card-sm)',
              borderLeft: '3px solid var(--ms-blue)',
            }}
          >
            <span className="text-sm font-bold text-[var(--ms-blue)] whitespace-nowrap">50 integrations</span>
            <span className="text-sm text-[var(--ms-body)]">Dedicated team → one part-time reviewer</span>
          </div>
          <div
            className="flex items-baseline gap-3 p-4 rounded-2xl bg-white"
            style={{
              boxShadow: 'var(--ms-shadow-card-sm)',
              borderLeft: '3px solid var(--ms-blue)',
            }}
          >
            <span className="text-sm font-bold text-[var(--ms-blue)] whitespace-nowrap">200 integrations</span>
            <span className="text-sm text-[var(--ms-body)]">5–10 engineers → &lt;1 hr/wk review</span>
          </div>
        </div>
      </div>
    </section>
  );
}
