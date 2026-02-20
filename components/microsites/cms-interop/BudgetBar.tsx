'use client';

import { useRef } from 'react';
import { useScrollProgress, remap } from './useScrollProgress';

export default function BudgetBar() {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useScrollProgress(sectionRef);

  // Phase mapping (scroll-linked)
  const buildFill = remap(progress, 0, 0.25);
  const maintainFill = remap(progress, 0.2, 0.5);
  const overflow = remap(progress, 0.5, 0.8);
  const contentOpacity = remap(progress, 0.55, 0.7);

  const counterValue = Math.round(maintainFill * 57);
  const showDivider = buildFill > 0.8;

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-[rgba(196,69,79,0.04)]">
      <div className="container-site max-w-3xl mx-auto">
        {/* Badge */}
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-3 bg-[rgba(172,31,45,0.10)] text-[#AC1F2D]">
          The Problem
        </span>

        <h2 className="text-xl md:text-2xl font-bold text-[#4D4D4D] mb-8 md:mb-10">
          More than half of your budget is spent maintaining what you already&nbsp;built.
        </h2>

        {/* Counter */}
        <div className="text-center mb-6">
          <span className="text-6xl md:text-8xl font-bold text-[#AC1F2D] tabular-nums leading-none">
            {counterValue}%
          </span>
          <p className="text-sm text-[#7D7D7D] mt-2">
            of total integration cost accrues after go-live
          </p>
        </div>

        {/* Budget bar */}
        <div className="relative h-12 md:h-16 bg-[#F0F0F0] rounded-lg" style={{ overflow: 'visible' }}>
          {/* Build segment */}
          <div
            className="absolute top-0 left-0 h-full bg-[#B4B1B1] rounded-l-lg"
            style={{ width: `${buildFill * 43}%` }}
          />

          {/* Go-live divider */}
          <div
            className="absolute top-0 h-full w-0.5 bg-[#4D4D4D] z-10 transition-opacity duration-300"
            style={{ left: '43%', opacity: showDivider ? 1 : 0 }}
          >
            <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-[#7D7D7D] whitespace-nowrap font-medium">
              Go-live
            </span>
          </div>

          {/* Maintain segment (with overflow) */}
          <div
            className="absolute top-0 h-full bg-[#AC1F2D] rounded-r-lg"
            style={{
              left: '43%',
              width: `${maintainFill * 57 + overflow * 20}%`,
            }}
          />
        </div>

        {/* Bar labels */}
        <div className="flex justify-between mt-3 text-xs text-[#7D7D7D]">
          <span>Build (43%)</span>
          <span className="text-[#AC1F2D] font-semibold">Maintain (57%+)</span>
        </div>

        {/* Supporting content — fades in as user scrolls deeper */}
        <div style={{ opacity: contentOpacity }}>
          {/* Quote */}
          <div className="mt-10 space-y-4 text-sm md:text-base text-[#7D7D7D] leading-relaxed">
            <p>
              The $1.55&nbsp;billion CMS is requiring the industry to spend builds
              the connectivity. It does not build the capability. Only 59% of
              SNOMED&nbsp;CT concepts map directly to ICD-11 equivalents. Patient
              match rates between organizations can be as low as&nbsp;50%.
            </p>
            <p className="text-[#4D4D4D] font-medium border-l-[3px] border-l-[#AC1F2D] pl-4">
              Every month of delay between compliance and capability is a month
              of Star data you cannot compute, risk adjustment revenue you cannot
              capture, and PA transactions stuck in manual&nbsp;queues.
            </p>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-8">
            {[
              { value: '$1.55B', label: 'industry compliance cost' },
              { value: '6.9M hrs', label: 'first-year burden' },
              { value: 'Jan 2027', label: 'API deadline' },
            ].map(({ value, label }) => (
              <div
                key={value}
                className="bg-white rounded-lg p-3 sm:p-4 text-center shadow-sm border-t-[3px] border-t-[#AC1F2D]"
              >
                <p className="text-base sm:text-xl font-bold text-[#AC1F2D]">{value}</p>
                <p className="text-[10px] sm:text-xs text-[#7D7D7D] mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
