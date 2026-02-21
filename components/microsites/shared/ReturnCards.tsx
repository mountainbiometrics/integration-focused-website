'use client';

import { useRef } from 'react';
import { useScrollProgress, remap } from '@/hooks/useScrollProgress';

interface CardData {
  label: string;
  stat: string;
  detail: string;
}

interface ReturnCardsProps {
  heading?: string;
  cards: readonly CardData[];
  accentColor: string;
  accentRgb: string;
}

export default function ReturnCards({
  heading = 'What faster integration does to your fund\u00A0math.',
  cards,
  accentColor,
  accentRgb,
}: ReturnCardsProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useScrollProgress(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 lg:py-32"
      style={{ background: 'linear-gradient(180deg, white, var(--ms-surface-warm))' }}
    >
      <div className="container-site max-w-4xl mx-auto">
        <span
          className="inline-block px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.12em] mb-4 border"
          style={{
            backgroundColor: `rgba(${accentRgb},0.05)`,
            borderColor: `rgba(${accentRgb},0.12)`,
            color: accentColor,
          }}
        >
          The returns
        </span>
        <h2 className="font-display text-[1.5rem] md:text-[2rem] leading-[1.12] text-[var(--ms-heading)] mb-10 md:mb-14">
          {heading}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {cards.map((card, i) => {
            const cardProgress = remap(progress, 0.05 + i * 0.12, 0.30 + i * 0.12);
            return (
              <div
                key={card.label}
                className="bg-white rounded-2xl p-6 md:p-8"
                style={{
                  opacity: cardProgress,
                  transform: `translateY(${(1 - cardProgress) * 12}px)`,
                  boxShadow: 'var(--ms-shadow-card)',
                  borderLeft: `3px solid ${accentColor}`,
                }}
              >
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--ms-body-light)]">
                  {card.label}
                </span>
                <p className="text-2xl md:text-3xl font-bold mt-2" style={{ color: accentColor }}>
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
