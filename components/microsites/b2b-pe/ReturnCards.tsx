'use client';

import { useRef } from 'react';
import { useScrollProgress, remap } from './useScrollProgress';

const CARDS = [
  {
    label: 'IRR Recovery',
    stat: '~70 bps',
    detail:
      'Per month of integration compressed — the difference between "met plan" and "exceeded plan."',
  },
  {
    label: 'Hold Period Savings',
    stat: '$2.5\u20135M',
    detail:
      'Maintenance you won\u2019t pay over a six-year hold. Flat curve vs. compounding cost.',
  },
  {
    label: 'Exit Multiple',
    stat: '+1.0x',
    detail:
      'The spread between holdco discount and integrated platform premium. Buyers pay more for clean data.',
  },
] as const;

export default function ReturnCards() {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useScrollProgress(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 lg:py-32"
      style={{ background: 'linear-gradient(180deg, white, var(--ms-surface-warm))' }}
    >
      <div className="container-site max-w-4xl mx-auto">
        <span className="inline-block px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.12em] mb-4 border bg-[rgba(74,111,165,0.05)] border-[rgba(74,111,165,0.12)] text-[#4A6FA5]">
          The returns
        </span>
        <h2 className="font-display text-[1.5rem] md:text-[2rem] leading-[1.12] text-[var(--ms-heading)] mb-10 md:mb-14">
          What faster integration does to your fund&nbsp;math.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {CARDS.map((card, i) => {
            const cardProgress = remap(progress, 0.05 + i * 0.12, 0.30 + i * 0.12);
            return (
              <div
                key={card.label}
                className="bg-white rounded-2xl p-6 md:p-8 border-l-[3px] border-l-[#4A6FA5]"
                style={{
                  opacity: cardProgress,
                  transform: `translateY(${(1 - cardProgress) * 12}px)`,
                  boxShadow: 'var(--ms-shadow-card)',
                }}
              >
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--ms-body-light)]">
                  {card.label}
                </span>
                <p className="text-2xl md:text-3xl font-bold text-[#4A6FA5] mt-2">
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
