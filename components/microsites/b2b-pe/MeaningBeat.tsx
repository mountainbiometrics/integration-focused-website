'use client';

import { useRef } from 'react';
import { useScrollProgress, remap } from './useScrollProgress';

export default function MeaningBeat() {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useScrollProgress(sectionRef);

  const badgeFade = remap(progress, 0, 0.15);
  const headingFade = remap(progress, 0.08, 0.28);
  const bodyFade = remap(progress, 0.20, 0.45);
  const closerFade = remap(progress, 0.38, 0.60);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-36 lg:py-44 bg-white relative overflow-hidden"
    >
      {/* Subtle radial glow — steel blue */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 40%, rgba(74,111,165,0.05), transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="container-site max-w-2xl mx-auto text-center relative">
        <span
          className="inline-block px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.12em] mb-4 border bg-[rgba(74,111,165,0.05)] border-[rgba(74,111,165,0.12)] text-[#4A6FA5]"
          style={{
            opacity: badgeFade,
            transform: `translateY(${(1 - badgeFade) * 10}px)`,
          }}
        >
          Why it matters
        </span>

        <h2
          className="font-display text-[1.5rem] md:text-[2rem] leading-[1.12] text-[var(--ms-heading)] mb-6"
          style={{
            opacity: headingFade,
            transform: `translateY(${(1 - headingFade) * 12}px)`,
          }}
        >
          This isn&rsquo;t a back-office problem.
        </h2>

        <p
          className="text-base md:text-lg text-[var(--ms-body)] leading-relaxed mb-6"
          style={{
            opacity: bodyFade,
            transform: `translateY(${(1 - bodyFade) * 10}px)`,
          }}
        >
          Every month without integrated reporting, your operating partners are flying blind.
          Revenue leaks. Duplicate vendors survive. Cross-sell opportunities die in
          spreadsheets no one&nbsp;reconciles.
        </p>

        <p
          className="text-base md:text-lg font-semibold text-[var(--ms-heading)]"
          style={{
            opacity: closerFade,
            transform: `translateY(${(1 - closerFade) * 8}px)`,
          }}
        >
          Integration speed isn&rsquo;t operational efficiency.
          It&rsquo;s exit&nbsp;defense.
        </p>
      </div>
    </section>
  );
}
