'use client';

import { useRef } from 'react';
import { useScrollProgress, remap } from './useScrollProgress';

const SOURCE_TYPES = ['EHRs', 'Claims', 'Prior Auth', 'Payer-to-Payer', 'TEFCA / QHINs', 'UM Platforms'];
const SOURCE_COLORS = ['#B4B1B1', '#D4793A', '#7D7D7D', '#AC1F2D', '#9E9E9E', '#657EE2'];

/* Deterministic dot sizes (avoids hydration mismatch from Math.random) */
const DOT_SIZES = [8, 6, 10, 7, 9, 6, 8, 10, 7, 6, 9, 8, 7, 10, 6, 8, 9, 7];

const SYSTEM_OUTPUTS = ['RAF Engine', 'Stars Measures', 'PA Auto-Adjudication', 'Analytics'];

export default function FoundryDiagram() {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useScrollProgress(sectionRef, { startVh: 0.9, endVh: 0.1 });

  const foundryAppear = remap(progress, 0, 0.15);
  const clinicsSlide = remap(progress, 0.1, 0.3);
  const arrowDraw = remap(progress, 0.25, 0.45);
  const systemsSlide = remap(progress, 0.35, 0.55);
  const copyFade1 = remap(progress, 0.5, 0.6);
  const copyFade2 = remap(progress, 0.6, 0.7);
  const copyFade3 = remap(progress, 0.7, 0.8);

  return (
    <section ref={sectionRef} id="architecture" className="py-16 md:py-24 bg-white">
      <div className="container-site max-w-4xl mx-auto">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-3 bg-[rgba(101,126,226,0.10)] text-[#657EE2]">
          The Architecture
        </span>
        <h2 className="text-xl md:text-2xl font-bold text-[#4D4D4D] mb-10 md:mb-14">
          One layer between your sources and your&nbsp;systems.
        </h2>

        {/* ─── Three-box diagram ─── */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-0 mb-10 md:mb-14">

          {/* Clinics & Sources */}
          <div
            className="flex-1 bg-[#FAFAFA] rounded-2xl p-5 border border-[#ECECEC] min-w-0"
            style={{
              opacity: clinicsSlide,
              transform: `translateY(${(1 - clinicsSlide) * -20}px)`,
            }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-wider text-[#7D7D7D] mb-3">
              Clinics &amp; Sources
            </p>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {DOT_SIZES.map((size, i) => (
                <div
                  key={i}
                  className="rounded-full flex-shrink-0"
                  style={{
                    width: size,
                    height: size,
                    backgroundColor: SOURCE_COLORS[i % SOURCE_COLORS.length],
                  }}
                />
              ))}
            </div>
            <div className="flex flex-wrap gap-x-3 gap-y-1">
              {SOURCE_TYPES.map((t) => (
                <span key={t} className="text-[11px] text-[#7D7D7D]">{t}</span>
              ))}
            </div>
          </div>

          {/* Arrow 1 */}
          <Arrow progress={arrowDraw} color="#B4B1B1" />

          {/* MTN Data Foundry */}
          <div
            className="flex-1 bg-white rounded-2xl p-5 border-2 border-[#AC1F2D] shadow-sm relative min-w-0"
            style={{
              opacity: foundryAppear,
              transform: `scale(${0.92 + foundryAppear * 0.08})`,
            }}
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-[#AC1F2D] rounded-l-2xl" />
            <p className="text-[11px] font-semibold uppercase tracking-wider text-[#AC1F2D] mb-2">
              MTN Data Foundry
            </p>
            <p className="text-sm text-[#7D7D7D] mb-3 leading-snug">
              Detects format. Maps to shared layer. Routes uncertainty to human&nbsp;review.
            </p>
            <div className="flex gap-2">
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-[rgba(101,126,226,0.12)] text-[#657EE2]">
                98% ✓
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-[rgba(239,83,80,0.12)] text-[#EF5350]">
                62% ⚑
              </span>
            </div>
          </div>

          {/* Arrow 2 */}
          <Arrow progress={arrowDraw} color="#657EE2" />

          {/* Your Systems */}
          <div
            className="flex-1 bg-[#FAFAFA] rounded-2xl p-5 border border-[#ECECEC] min-w-0"
            style={{
              opacity: systemsSlide,
              transform: `translateY(${(1 - systemsSlide) * 20}px)`,
            }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-wider text-[#7D7D7D] mb-3">
              Your Systems
            </p>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-[#657EE2] flex-shrink-0" />
              ))}
            </div>
            <div className="flex flex-wrap gap-x-3 gap-y-1">
              {SYSTEM_OUTPUTS.map((s) => (
                <span key={s} className="text-[11px] text-[#7D7D7D]">{s}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Copy blocks (fade in as user scrolls) */}
        <div className="space-y-4 max-w-2xl mx-auto">
          <p
            className="text-sm md:text-base text-[#7D7D7D] leading-relaxed"
            style={{ opacity: copyFade1, transform: `translateY(${(1 - copyFade1) * 8}px)` }}
          >
            When a new clinic connects, the Foundry detects how they send data.
            No upfront definitions. No months of mapping.
          </p>
          <p
            className="text-sm md:text-base text-[#7D7D7D] leading-relaxed"
            style={{ opacity: copyFade2, transform: `translateY(${(1 - copyFade2) * 8}px)` }}
          >
            It translates everything into a consistent layer your systems already
            understand. When it&rsquo;s confident, it applies the mapping
            automatically. When it&rsquo;s not sure, it routes it to a&nbsp;human.
          </p>
          <p
            className="text-sm md:text-base text-[#4D4D4D] font-medium leading-relaxed"
            style={{ opacity: copyFade3, transform: `translateY(${(1 - copyFade3) * 8}px)` }}
          >
            Adding provider connection two hundred does not require touching
            connections one through one hundred ninety-nine.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── Arrow (vertical on mobile, horizontal on desktop) ─── */

function Arrow({ progress, color }: { progress: number; color: string }) {
  return (
    <div className="flex items-center justify-center py-1 md:py-0 md:px-2 md:w-10">
      {/* Vertical arrow (mobile) */}
      <svg
        className="w-6 h-6 md:hidden"
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M12 5v14M5 12l7 7 7-7"
          strokeDasharray="40"
          strokeDashoffset={40 * (1 - progress)}
        />
      </svg>
      {/* Horizontal arrow (desktop) */}
      <svg
        className="hidden md:block w-8 h-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M5 12h14M12 5l7 7-7 7"
          strokeDasharray="40"
          strokeDashoffset={40 * (1 - progress)}
        />
      </svg>
    </div>
  );
}
