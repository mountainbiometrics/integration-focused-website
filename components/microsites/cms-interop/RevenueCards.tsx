'use client';

import { useRef } from 'react';
import { useScrollProgress, remap } from './useScrollProgress';

const CARDS = [
  {
    label: 'Star Ratings & Retention',
    stat: '~5 points',
    detail:
      'The jump from 3.5 to 4 stars. Worth hundreds of millions in rebates \u2014 and every member you keep.',
  },
  {
    label: 'Risk Adjustment',
    stat: 'Millions',
    detail:
      'A diagnosis that fails to map is revenue that quietly disappears. Every month.',
  },
  {
    label: 'Prior Auth',
    stat: '$3.52 \u2192 $0.05',
    detail:
      'Per transaction. That\u2019s the difference between a person and a wire.',
  },
] as const;

export default function RevenueCards() {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useScrollProgress(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 lg:py-32"
      style={{ background: 'linear-gradient(180deg, white, var(--ms-surface-warm))' }}
    >
      <div className="container-site max-w-4xl mx-auto">
        <span className="inline-block px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.12em] mb-4 border bg-[rgba(172,31,45,0.05)] border-[rgba(172,31,45,0.12)] text-[#AC1F2D]">
          The money
        </span>
        <h2 className="font-display text-[1.5rem] md:text-[2rem] leading-[1.12] text-[var(--ms-heading)] mb-10 md:mb-14">
          Three revenue pools you&rsquo;re leaving&nbsp;dry.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {CARDS.map((card, i) => {
            const cardProgress = remap(progress, 0.05 + i * 0.12, 0.30 + i * 0.12);
            return (
              <div
                key={card.label}
                className="bg-white rounded-2xl p-6 md:p-8 border-l-[3px] border-l-[#AC1F2D]"
                style={{
                  opacity: cardProgress,
                  transform: `translateY(${(1 - cardProgress) * 12}px)`,
                  boxShadow: 'var(--ms-shadow-card)',
                }}
              >
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--ms-body-light)]">
                  {card.label}
                </span>
                <p className="text-2xl md:text-3xl font-bold text-[#AC1F2D] mt-2">
                  {card.stat}
                </p>
                <p className="text-sm text-[var(--ms-heading)] mt-1 font-medium">{card.detail}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
