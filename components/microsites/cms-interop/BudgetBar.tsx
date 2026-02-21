'use client';

import { useRef } from 'react';
import { useScrollProgress, remap } from './useScrollProgress';

const STAT_CARDS = [
  { value: '$1.55B', label: 'spent industry-wide \u2014 and counting' },
  { value: '6.9M hrs', label: 'of engineer time in year one alone' },
  { value: 'Jan 2027', label: 'the deadline that doesn\u2019t move' },
];

export default function BudgetBar() {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useScrollProgress(sectionRef, { startVh: 0.50, endVh: -0.30 });

  // Entrance animations
  const badgeFade = remap(progress, 0, 0.2);
  const headingFade = remap(progress, 0.1, 0.3);
  const counterFade = remap(progress, 0.20, 0.4);

  // Counter bounce: scale goes 0.6 → 1.06 → 1.0
  const counterRaw = remap(progress, 0.10, 0.22);
  let counterScale: number;
  if (counterRaw < 0.85) {
    // 0.6 → 1.06
    counterScale = 0.6 + (counterRaw / 0.85) * 0.46;
  } else {
    // 1.06 → 1.0
    counterScale = 1.06 - ((counterRaw - 0.85) / 0.15) * 0.06;
  }

  // Bar phases (shifted later)
  const buildFill = remap(progress, 0.18, 0.38);
  const maintainFill = remap(progress, 0.34, 0.58);
  const overflow = remap(progress, 0.55, 0.72);

  const counterValue = Math.round(maintainFill * 57);
  const showDivider = buildFill > 0.8;

  // Counter glow
  const glowIntensity = remap(progress, 0.56, 0.70);
  const glowShadow = glowIntensity > 0
    ? `0 0 ${8 + glowIntensity * 16}px rgba(172,31,45,${0.3 * glowIntensity}), 0 0 ${2 + glowIntensity * 6}px rgba(172,31,45,${0.2 * glowIntensity})`
    : 'none';

  // Per-card stagger
  const card0 = remap(progress, 0.68, 0.78);
  const card1 = remap(progress, 0.74, 0.84);
  const card2 = remap(progress, 0.80, 0.90);
  const cardAnimations = [card0, card1, card2];

  return (
    <section ref={sectionRef} className="py-20 md:py-28 lg:py-32" style={{ backgroundColor: 'var(--ms-surface-warm)' }}>
      <div className="container-site max-w-4xl mx-auto">
        {/* Badge */}
        <span
          className="inline-block px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.12em] mb-4 border bg-[rgba(172,31,45,0.05)] border-[rgba(172,31,45,0.12)] text-[#AC1F2D]"
          style={{
            opacity: badgeFade,
            transform: `translateY(${(1 - badgeFade) * 12}px)`,
          }}
        >
          Where the money goes
        </span>

        <h2
          className="font-display text-[1.5rem] md:text-[2rem] leading-[1.12] text-[var(--ms-heading)] mb-10 md:mb-14"
          style={{
            opacity: headingFade,
            transform: `translateY(${(1 - headingFade) * 16}px)`,
          }}
        >
          You already built it. You&rsquo;re still paying for&nbsp;it.
        </h2>

        {/* Counter */}
        <div className="text-center mb-6">
          <span
            className="inline-block text-6xl md:text-8xl font-bold text-[#AC1F2D] tabular-nums leading-none"
            style={{
              opacity: counterFade,
              transform: `scale(${counterScale})`,
              textShadow: glowShadow,
            }}
          >
            {counterValue}%
          </span>
          <p
            className="text-sm text-[var(--ms-body)] mt-2"
            style={{ opacity: counterFade }}
          >
            spent after you flip the switch
          </p>
        </div>

        {/* Budget bar */}
        <div className="relative">
          {/* Go-live label (outside overflow-hidden track so it isn't clipped) */}
          <div
            className="absolute -top-6 z-10 transition-opacity duration-300"
            style={{ left: '43%', opacity: showDivider ? 1 : 0 }}
          >
            <span className="absolute left-1/2 -translate-x-1/2 text-[10px] text-[var(--ms-body)] whitespace-nowrap font-medium">
              Go-live
            </span>
          </div>

          <div className="relative h-12 md:h-16 bg-[#F0F0F0] rounded-lg overflow-hidden">
            {/* Build segment */}
            <div
              className="absolute top-0 left-0 h-full bg-[var(--ms-muted)] rounded-l-lg"
              style={{ width: `${buildFill * 43}%` }}
            />

            {/* Go-live divider line */}
            <div
              className="absolute top-0 h-full w-0.5 bg-[var(--ms-heading)] z-10 transition-opacity duration-300"
              style={{ left: '43%', opacity: showDivider ? 1 : 0 }}
            />

            {/* Maintain segment (overflow clipped by track) */}
            <div
              className="absolute top-0 h-full bg-[#AC1F2D] rounded-r-lg"
              style={{
                left: '43%',
                width: `${maintainFill * 57 + overflow * 20}%`,
              }}
            />
          </div>
        </div>

        {/* Bar labels */}
        <div className="flex justify-between mt-3 text-xs text-[var(--ms-body)]">
          <span>Build (43%)</span>
          <span className="text-[#AC1F2D] font-semibold">Maintain (57%+)</span>
        </div>

        {/* Stat cards — staggered entrance */}
        <div className="grid grid-cols-3 gap-3 sm:gap-5 mt-10">
          {STAT_CARDS.map(({ value, label }, i) => (
            <div
              key={value}
              className="bg-white rounded-2xl p-4 sm:p-5 md:p-6 text-center"
              style={{
                opacity: cardAnimations[i],
                transform: `translateY(${(1 - cardAnimations[i]) * 18}px)`,
                boxShadow: 'var(--ms-shadow-card)',
              }}
            >
              <p className="text-base sm:text-xl font-bold text-[#AC1F2D]">{value}</p>
              <p className="text-[10px] sm:text-xs text-[var(--ms-body)] mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
