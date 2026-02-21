'use client';

import { useRef } from 'react';
import { useScrollProgress, remap } from './useScrollProgress';

const DENIAL_CARDS = [
  { clinic: 'Clinic A', encoding: 'CO-4', subtext: 'CARC code' },
  { clinic: 'Clinic B', encoding: '"Patient not eligible per plan"', subtext: 'Free text' },
  { clinic: 'Clinic C', encoding: '412', subtext: 'Numeric code' },
  { clinic: 'Clinic D', encoding: '"See attached EOB"', subtext: 'Note field' },
  { clinic: 'Clinic E', encoding: 'DENIED', subtext: 'Binary flag' },
] as const;

export default function ChaosGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useScrollProgress(sectionRef, { startVh: 0.50, endVh: -0.30 });

  // Phase 1 (0–0.30): Five cards stagger in
  // Phase 2 (0.25–0.55): Cards dim red, cost counter animates
  // Phase 3 (0.55–0.75): Bracket with "?" spans all cards
  // Phase 4 (0.75–0.90): Closing line fades in

  const badgeFade = remap(progress, 0, 0.12);
  const headingFade = remap(progress, 0.05, 0.20);

  // Cost counter: $200K → $500K
  const costAnim = remap(progress, 0.25, 0.55);
  const costValue = Math.round(200 + costAnim * 300);
  const costFade = remap(progress, 0.22, 0.35);

  // Bracket
  const bracketFade = remap(progress, 0.55, 0.72);

  // Closing line
  const closingFade = remap(progress, 0.75, 0.90);

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
          The problem
        </span>

        <h2
          className="font-display text-[1.5rem] md:text-[2rem] leading-[1.12] text-[var(--ms-heading)] mb-10 md:mb-14"
          style={{
            opacity: headingFade,
            transform: `translateY(${(1 - headingFade) * 16}px)`,
          }}
        >
          Your CFO asked for a denial report. This is what came&nbsp;back.
        </h2>

        {/* Denial cards grid */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
            {DENIAL_CARDS.map((card, i) => {
              // Stagger entrance
              const cardIn = remap(progress, 0.05 + i * 0.04, 0.20 + i * 0.04);
              // Red tint phase
              const redTint = remap(progress, 0.28 + i * 0.03, 0.45 + i * 0.03);
              const bgColor = redTint > 0
                ? `rgba(172,31,45,${0.04 + redTint * 0.08})`
                : 'white';
              const borderColor = redTint > 0
                ? `rgba(172,31,45,${0.15 + redTint * 0.25})`
                : 'var(--ms-border)';

              return (
                <div
                  key={card.clinic}
                  className="rounded-xl p-4 text-center border"
                  style={{
                    opacity: cardIn,
                    transform: `translateY(${(1 - cardIn) * 16}px)`,
                    backgroundColor: bgColor,
                    borderColor,
                    boxShadow: 'var(--ms-shadow-card-sm)',
                  }}
                >
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--ms-body-light)] mb-2">
                    {card.clinic}
                  </p>
                  <p className="text-sm md:text-base font-bold text-[var(--ms-heading)] font-mono leading-tight min-h-[2.5rem] flex items-center justify-center">
                    {card.encoding}
                  </p>
                  <p className="text-[10px] text-[var(--ms-muted)] mt-1.5">{card.subtext}</p>
                </div>
              );
            })}
          </div>

          {/* Cost counter */}
          <div
            className="text-center mt-8"
            style={{ opacity: costFade }}
          >
            <span className="text-3xl md:text-5xl font-bold text-[#AC1F2D] tabular-nums">
              ${costValue}K
            </span>
            <span className="text-lg md:text-xl text-[#AC1F2D] font-medium">/mo</span>
            <p className="text-sm text-[var(--ms-body)] mt-1">
              leaking across the portfolio
            </p>
          </div>

          {/* Bracket with "?" */}
          <div
            className="flex items-center justify-center mt-6 gap-2"
            style={{
              opacity: bracketFade,
              transform: `translateY(${(1 - bracketFade) * 8}px)`,
            }}
          >
            <svg viewBox="0 0 400 40" className="w-full max-w-[400px] h-auto">
              {/* Left bracket arm */}
              <path
                d="M20 8 L20 20 L200 20"
                fill="none"
                stroke="#AC1F2D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity={0.5}
              />
              {/* Right bracket arm */}
              <path
                d="M380 8 L380 20 L200 20"
                fill="none"
                stroke="#AC1F2D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity={0.5}
              />
              {/* Question mark */}
              <text x="200" y="36" textAnchor="middle" fill="#AC1F2D" fontSize="16" fontWeight="bold">?</text>
            </svg>
          </div>
        </div>

        {/* Closing line */}
        <p
          className="text-base md:text-lg font-semibold text-[var(--ms-heading)] text-center mt-8"
          style={{
            opacity: closingFade,
            transform: `translateY(${(1 - closingFade) * 8}px)`,
          }}
        >
          Same denial. Five translations. Zero&nbsp;clarity.
        </p>
      </div>
    </section>
  );
}
