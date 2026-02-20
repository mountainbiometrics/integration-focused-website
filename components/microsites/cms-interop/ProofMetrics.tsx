'use client';

import { useRef } from 'react';
import { useScrollProgress, remap } from './useScrollProgress';

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
  const contextIn = remap(progress, 0.3, 0.5);
  const comparisonIn = remap(progress, 0.45, 0.65);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-[#FAFAFA]">
      <div className="container-site max-w-3xl mx-auto">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-3 bg-[rgba(101,126,226,0.10)] text-[#657EE2]">
          The Proof
        </span>
        <h2 className="text-xl md:text-2xl font-bold text-[#4D4D4D] mb-8">
          Benchmarked across the structural diversity found in payer&nbsp;networks.
        </h2>

        {/* Metric cards */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-3"
          style={{ opacity: metricsIn, transform: `translateY(${(1 - metricsIn) * 10}px)` }}
        >
          {METRICS.map((m) => (
            <div
              key={m.label}
              className="bg-white rounded-lg p-4 text-center shadow-sm border-t-[3px] border-t-[#657EE2]"
            >
              <p className="text-xl md:text-2xl font-bold text-[#657EE2]">{m.value}</p>
              <p className="text-[10px] sm:text-xs text-[#7D7D7D] mt-1">{m.label}</p>
            </div>
          ))}
        </div>

        {/* Context */}
        <p
          className="text-sm text-[#7D7D7D] mt-6 leading-relaxed"
          style={{ opacity: contextIn }}
        >
          Evaluated across 60 format variants spanning flat files, nested
          hierarchies, entity-attribute-value structures, columnar batches,
          pipe-delimited feeds, and wide sparse-column layouts.
        </p>

        {/* Maintenance comparison */}
        <div
          className="mt-6 space-y-3"
          style={{ opacity: comparisonIn, transform: `translateY(${(1 - comparisonIn) * 8}px)` }}
        >
          <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-3 p-4 rounded-lg bg-white border border-[#ECECEC]">
            <span className="text-sm font-bold text-[#657EE2] whitespace-nowrap">
              50 integrations
            </span>
            <p className="text-sm text-[#7D7D7D]">
              Conventional requires a dedicated engineering team. Data Foundry
              requires one part-time reviewer.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-3 p-4 rounded-lg bg-white border border-[#ECECEC]">
            <span className="text-sm font-bold text-[#657EE2] whitespace-nowrap">
              200 integrations
            </span>
            <p className="text-sm text-[#7D7D7D]">
              Conventional demands 5–10 dedicated engineers. Data Foundry&rsquo;s
              review burden remains under one hour per week.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
