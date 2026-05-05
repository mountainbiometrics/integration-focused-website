'use client';

import { useRef } from 'react';
import { useScrollProgress, remap } from '@/hooks/useScrollProgress';

const ENGAGEMENT_CARDS = [
  { engagement: 'Engagement 1', field: 'Encounter.PrimaryPayer', subtext: '6 wk discovery' },
  { engagement: 'Engagement 2', field: 'Encounter.PrimaryPayer', subtext: '6 wk, rebuilt' },
  { engagement: 'Engagement 3', field: 'Encounter.PrimaryPayer', subtext: '6 wk, rebuilt' },
  { engagement: 'Engagement 4', field: 'Encounter.PrimaryPayer', subtext: '6 wk, rebuilt' },
  { engagement: 'Engagement 5', field: 'Encounter.PrimaryPayer', subtext: '6 wk, rebuilt' },
] as const;

export default function EngagementAmnesia() {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useScrollProgress(sectionRef, { startVh: 0.50, endVh: -0.30 });

  const badgeFade = remap(progress, 0, 0.12);
  const headingFade = remap(progress, 0.05, 0.20);

  const costAnim = remap(progress, 0.25, 0.55);
  const costValue = Math.round(costAnim * 30);
  const costFade = remap(progress, 0.22, 0.35);

  const bracketFade = remap(progress, 0.55, 0.72);

  const closingFade = remap(progress, 0.75, 0.90);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 lg:py-32"
      style={{ backgroundColor: 'var(--ms-surface-warm)' }}
    >
      <div className="container-site max-w-4xl mx-auto">
        <span
          className="inline-block px-4 py-1.5 rounded-full text-[13px] font-semibold uppercase tracking-[0.12em] mb-4 border bg-[rgba(172,31,45,0.05)] border-[rgba(172,31,45,0.12)] text-[#AC1F2D]"
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
          The same field. Mapped from scratch on every&nbsp;bolt-on.
        </h2>

        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
            {ENGAGEMENT_CARDS.map((card, i) => {
              const cardIn = remap(progress, 0.05 + i * 0.04, 0.20 + i * 0.04);
              const redTint = remap(progress, 0.28 + i * 0.03, 0.45 + i * 0.03);
              const bgColor = redTint > 0
                ? `rgba(172,31,45,${0.04 + redTint * 0.08})`
                : 'white';
              const borderColor = redTint > 0
                ? `rgba(172,31,45,${0.15 + redTint * 0.25})`
                : 'var(--ms-border)';

              return (
                <div
                  key={card.engagement}
                  className="rounded-xl p-4 text-center border"
                  style={{
                    opacity: cardIn,
                    transform: `translateY(${(1 - cardIn) * 16}px)`,
                    backgroundColor: bgColor,
                    borderColor,
                    boxShadow: 'var(--ms-shadow-card-sm)',
                  }}
                >
                  <p className="text-sm font-semibold uppercase tracking-wider text-[var(--ms-body-light)] mb-2">
                    {card.engagement}
                  </p>
                  <p className="text-xs md:text-sm font-bold text-[var(--ms-heading)] font-mono leading-tight min-h-[2.5rem] flex items-center justify-center [overflow-wrap:anywhere]">
                    {card.field.split('.').flatMap((part, idx) =>
                      idx === 0
                        ? [part]
                        : ['.', <wbr key={`wbr-${idx}`} />, part],
                    )}
                  </p>
                  <p className="text-sm text-[var(--ms-muted)] mt-1.5">{card.subtext}</p>
                </div>
              );
            })}
          </div>

          <div
            className="text-center mt-8"
            style={{ opacity: costFade }}
          >
            <span className="text-3xl md:text-5xl font-bold text-[#AC1F2D] tabular-nums">
              {costValue}
            </span>
            <span className="text-lg md:text-xl text-[#AC1F2D] font-medium ml-2">
              weeks of senior time
            </span>
            <p className="text-base text-[var(--ms-body)] mt-1">
              rebuilt across one platform&rsquo;s bolt-ons
            </p>
          </div>

          <div
            className="flex items-center justify-center mt-6 gap-2"
            style={{
              opacity: bracketFade,
              transform: `translateY(${(1 - bracketFade) * 8}px)`,
            }}
          >
            <svg viewBox="0 0 400 40" className="w-full max-w-[560px] h-auto">
              <path
                d="M20 8 L20 20 L160 20"
                fill="none"
                stroke="#AC1F2D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity={0.5}
              />
              <path
                d="M380 8 L380 20 L240 20"
                fill="none"
                stroke="#AC1F2D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity={0.5}
              />
              <text x="200" y="28" textAnchor="middle" fill="#AC1F2D" fontSize="14" fontWeight="bold">
                0 carryover
              </text>
            </svg>
          </div>
        </div>

        <p
          className="text-base md:text-lg font-semibold text-[var(--ms-heading)] text-center mt-8"
          style={{
            opacity: closingFade,
            transform: `translateY(${(1 - closingFade) * 8}px)`,
          }}
        >
          Five engagements. Five rediscoveries. Zero&nbsp;carryover.
        </p>
      </div>
    </section>
  );
}
