'use client';

import { useRef } from 'react';
import { useScrollProgress, remap } from './useScrollProgress';

const SOURCE_TYPES = ['EHRs', 'Claims', 'Prior Auth', 'Payer-to-Payer', 'TEFCA / QHINs', 'UM Platforms'];
const SOURCE_COLORS = ['#9A9AAA', '#D4793A', '#6B6B7B', '#AC1F2D', '#9A9AAA', '#5A6FD1'];

/* Deterministic dot sizes (avoids hydration mismatch from Math.random) */
const DOT_SIZES = [8, 6, 10, 7, 9, 6, 8, 10, 7, 6, 9, 8, 7, 10, 6, 8, 9, 7];

const SYSTEM_OUTPUTS = ['RAF Engine', 'Stars Measures', 'PA Auto-Adjudication', 'Analytics'];

export default function FoundryDiagram() {
  const sectionRef = useRef<HTMLElement>(null);
  // Large range so each animation plays over ~150-200 px of scrolling
  const progress = useScrollProgress(sectionRef, { startVh: 0.45, endVh: -0.35 });

  // Box entrance animations — wide ranges for smooth, visible fades
  const foundryAppear = remap(progress, 0, 0.28);
  const clinicsSlide = remap(progress, 0.10, 0.36);
  const arrowDraw = remap(progress, 0.34, 0.56);
  const systemsSlide = remap(progress, 0.46, 0.68);

  // Source labels fade in after dots
  const sourceLabels = remap(progress, 0.42, 0.54);

  // System labels fade in after blue dots
  const systemLabels = remap(progress, 0.68, 0.80);

  // Takeaway line
  const copyFade1 = remap(progress, 0.82, 0.94);

  return (
    <section ref={sectionRef} id="architecture" className="py-20 md:py-28 lg:py-32 bg-white">
      <div className="container-site max-w-5xl mx-auto">
        <span className="inline-block px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.12em] mb-4 border bg-[rgba(90,111,209,0.05)] border-[rgba(90,111,209,0.12)] text-[var(--ms-blue)]">
          The fix
        </span>
        <h2 className="font-display text-[1.5rem] md:text-[2rem] leading-[1.12] text-[var(--ms-heading)] mb-10 md:mb-14">
          One layer. Every source. Every&nbsp;system.
        </h2>

        {/* ─── Three-box diagram ─── */}
        <div className="flex flex-col md:flex-row items-stretch gap-3 md:gap-0 mb-10 md:mb-14">

          {/* Clinics & Sources */}
          <div
            className="flex-1 rounded-2xl p-5 border min-w-0"
            style={{
              opacity: clinicsSlide,
              transform: `translateY(${(1 - clinicsSlide) * -20}px)`,
              backgroundColor: 'var(--ms-surface)',
              borderColor: 'var(--ms-border)',
            }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-wider text-[var(--ms-body)] mb-3">
              Clinics &amp; Sources
            </p>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {DOT_SIZES.map((size, i) => {
                const dotAnim = remap(progress, 0.22 + i * 0.015, 0.40 + i * 0.015);
                return (
                  <div
                    key={i}
                    className="rounded-full flex-shrink-0"
                    style={{
                      width: size,
                      height: size,
                      backgroundColor: SOURCE_COLORS[i % SOURCE_COLORS.length],
                      opacity: dotAnim,
                      transform: `scale(${0.3 + dotAnim * 0.7})`,
                    }}
                  />
                );
              })}
            </div>
            <div
              className="flex flex-wrap gap-x-3 gap-y-1"
              style={{ opacity: sourceLabels }}
            >
              {SOURCE_TYPES.map((t) => (
                <span key={t} className="text-[11px] text-[var(--ms-body-light)]">{t}</span>
              ))}
            </div>
          </div>

          {/* Arrow 1 */}
          <Arrow progress={arrowDraw} color="var(--ms-muted)" />

          {/* MTN Data Foundry */}
          <div
            className="flex-1 bg-white rounded-2xl p-5 border-2 border-[#AC1F2D] relative min-w-0 overflow-hidden"
            style={{
              opacity: foundryAppear,
              transform: `scale(${0.92 + foundryAppear * 0.08})`,
              boxShadow: 'var(--ms-shadow-card)',
            }}
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-[#AC1F2D] rounded-l-2xl" />
            <p className="text-[11px] font-semibold uppercase tracking-wider text-[#AC1F2D]">
              MTN Data Foundry
            </p>
          </div>

          {/* Arrow 2 */}
          <Arrow progress={arrowDraw} color="var(--ms-blue)" />

          {/* Your Systems */}
          <div
            className="flex-1 rounded-2xl p-5 border min-w-0"
            style={{
              opacity: systemsSlide,
              transform: `translateY(${(1 - systemsSlide) * 20}px)`,
              backgroundColor: 'var(--ms-surface)',
              borderColor: 'var(--ms-border)',
            }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-wider text-[var(--ms-body)] mb-3">
              Your Systems
            </p>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {Array.from({ length: 12 }).map((_, i) => {
                const dotAnim = remap(progress, 0.56 + i * 0.015, 0.70 + i * 0.015);
                return (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{
                      opacity: dotAnim,
                      transform: `scale(${0.3 + dotAnim * 0.7})`,
                      backgroundColor: 'var(--ms-blue)',
                    }}
                  />
                );
              })}
            </div>
            <div
              className="flex flex-wrap gap-x-3 gap-y-1"
              style={{ opacity: systemLabels }}
            >
              {SYSTEM_OUTPUTS.map((s) => (
                <span key={s} className="text-[11px] text-[var(--ms-body-light)]">{s}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Single takeaway */}
        <p
          className="text-sm md:text-base text-[var(--ms-heading)] font-medium leading-relaxed max-w-2xl mx-auto text-center mt-2"
          style={{ opacity: copyFade1, transform: `translateY(${(1 - copyFade1) * 8}px)` }}
        >
          Connection two hundred doesn&rsquo;t break connection&nbsp;one.
        </p>
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
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ stroke: color }}
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
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ stroke: color }}
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
