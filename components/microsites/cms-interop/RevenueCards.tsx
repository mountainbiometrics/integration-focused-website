'use client';

import { useRef } from 'react';
import { useScrollProgress, remap } from './useScrollProgress';

const CARDS = [
  {
    label: 'Star Ratings',
    stat: '~5 pp',
    detail: 'rebate increase from 3.5 → 4 stars',
    subtext:
      'Most Star measure failures are not clinical. They are data availability failures.',
  },
  {
    label: 'Risk Adjustment',
    stat: 'Millions',
    detail: 'in PMPM revenue from accurate RAF capture',
    subtext:
      'A diagnosis that fails to map is revenue that silently disappears.',
  },
  {
    label: 'Prior Auth',
    stat: '$3.52 → $0.05',
    detail: 'per transaction — manual vs. electronic',
    subtext:
      'CMS built the highway. The question is whether your data is clean enough for auto-adjudication.',
  },
  {
    label: 'Retention',
    stat: '1 pt churn',
    detail: 'reduced = tens to hundreds of millions preserved',
    subtext:
      'Better payer-to-payer exchange eliminates the blind spot for new members.',
  },
] as const;

export default function RevenueCards() {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useScrollProgress(sectionRef);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-white">
      <div className="container-site max-w-3xl mx-auto">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-3 bg-[rgba(172,31,45,0.10)] text-[#AC1F2D]">
          The Revenue Case
        </span>
        <h2 className="text-xl md:text-2xl font-bold text-[#4D4D4D] mb-8">
          Four revenue pools. One capability&nbsp;gap.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {CARDS.map((card, i) => {
            const cardProgress = remap(progress, 0.05 + i * 0.1, 0.25 + i * 0.1);
            return (
              <div
                key={card.label}
                className="bg-white rounded-lg p-5 border border-[#ECECEC] border-t-[3px] border-t-[#AC1F2D]"
                style={{
                  opacity: cardProgress,
                  transform: `translateY(${(1 - cardProgress) * 12}px)`,
                }}
              >
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#7D7D7D]">
                  {card.label}
                </span>
                <p className="text-2xl md:text-3xl font-bold text-[#AC1F2D] mt-2">
                  {card.stat}
                </p>
                <p className="text-sm text-[#4D4D4D] mt-1 font-medium">{card.detail}</p>
                <p className="text-xs text-[#7D7D7D] mt-2 leading-relaxed">{card.subtext}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
