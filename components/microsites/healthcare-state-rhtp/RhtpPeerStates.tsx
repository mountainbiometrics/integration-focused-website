'use client';

import { useRef } from 'react';
import { useScrollProgress, remap } from '@/hooks/useScrollProgress';

interface Tile {
  code: string;
  row: number;
  col: number;
  highlight?: boolean;
}

const STATE_GRID: readonly Tile[] = [
  { code: 'ME', row: 0, col: 11 },
  { code: 'VT', row: 1, col: 9 },
  { code: 'NH', row: 1, col: 10 },
  { code: 'WA', row: 2, col: 0 },
  { code: 'MT', row: 2, col: 2, highlight: true },
  { code: 'ND', row: 2, col: 3, highlight: true },
  { code: 'MN', row: 2, col: 4 },
  { code: 'WI', row: 2, col: 6 },
  { code: 'MI', row: 2, col: 8 },
  { code: 'NY', row: 2, col: 9 },
  { code: 'MA', row: 2, col: 10 },
  { code: 'OR', row: 3, col: 0 },
  { code: 'ID', row: 3, col: 1 },
  { code: 'WY', row: 3, col: 2 },
  { code: 'SD', row: 3, col: 3 },
  { code: 'IA', row: 3, col: 4 },
  { code: 'IL', row: 3, col: 5 },
  { code: 'IN', row: 3, col: 6, highlight: true },
  { code: 'OH', row: 3, col: 7 },
  { code: 'PA', row: 3, col: 8 },
  { code: 'NJ', row: 3, col: 9 },
  { code: 'CT', row: 3, col: 10 },
  { code: 'RI', row: 3, col: 11 },
  { code: 'NV', row: 4, col: 1 },
  { code: 'UT', row: 4, col: 2 },
  { code: 'CO', row: 4, col: 3 },
  { code: 'NE', row: 4, col: 4 },
  { code: 'MO', row: 4, col: 5, highlight: true },
  { code: 'KY', row: 4, col: 6 },
  { code: 'WV', row: 4, col: 7 },
  { code: 'VA', row: 4, col: 8 },
  { code: 'MD', row: 4, col: 9 },
  { code: 'DE', row: 4, col: 10 },
  { code: 'CA', row: 5, col: 0, highlight: true },
  { code: 'AZ', row: 5, col: 2 },
  { code: 'NM', row: 5, col: 3, highlight: true },
  { code: 'KS', row: 5, col: 4 },
  { code: 'AR', row: 5, col: 5 },
  { code: 'TN', row: 5, col: 6 },
  { code: 'NC', row: 5, col: 7 },
  { code: 'SC', row: 5, col: 8 },
  { code: 'OK', row: 6, col: 4, highlight: true },
  { code: 'LA', row: 6, col: 5 },
  { code: 'MS', row: 6, col: 6, highlight: true },
  { code: 'AL', row: 6, col: 7 },
  { code: 'GA', row: 6, col: 8 },
  { code: 'AK', row: 7, col: 0 },
  { code: 'TX', row: 7, col: 4 },
  { code: 'FL', row: 7, col: 8 },
  { code: 'HI', row: 7, col: 11 },
];

const HIGHLIGHTED = [
  { name: 'Montana',      allocation: '$233.5M' },
  { name: 'California',   allocation: '$233.6M' },
  { name: 'Oklahoma',     allocation: '$223.5M' },
  { name: 'Missouri',     allocation: '$216.3M' },
  { name: 'New Mexico',   allocation: '$211.5M' },
  { name: 'Indiana',      allocation: '$206.9M' },
  { name: 'Mississippi',  allocation: '$205.9M' },
  { name: 'North Dakota', allocation: '$198.9M' },
] as const;

const COLS = 12;
const ROWS = 8;
const TILE = 44;
const GAP = 4;
const VB_W = COLS * (TILE + GAP);
const VB_H = ROWS * (TILE + GAP);

export default function RhtpPeerStates() {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useScrollProgress(sectionRef);

  const mapEntrance = remap(progress, 0, 0.20);
  const highlightFade = remap(progress, 0.10, 0.40);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 lg:py-32"
      style={{ backgroundColor: 'var(--ms-surface)' }}
    >
      <div className="container-site max-w-4xl mx-auto">
        <span
          className="inline-block px-4 py-1.5 rounded-full text-[13px] font-semibold uppercase tracking-[0.12em] mb-4 border"
          style={{
            backgroundColor: 'rgba(172,31,45,0.05)',
            borderColor: 'rgba(172,31,45,0.12)',
            color: 'var(--ms-primary)',
          }}
        >
          Where the conversation is happening
        </span>
        <h2 className="font-display text-[1.5rem] md:text-[2rem] leading-[1.12] text-[var(--ms-heading)] mb-10 md:mb-14">
          Eight states are already building this.
        </h2>

        {/* US tile-grid map */}
        <div
          className="bg-white rounded-2xl p-5 md:p-8 mb-8"
          style={{
            boxShadow: 'var(--ms-shadow-card-sm)',
            opacity: mapEntrance,
            transform: `translateY(${(1 - mapEntrance) * 12}px)`,
          }}
        >
          <svg
            viewBox={`0 0 ${VB_W} ${VB_H}`}
            className="w-full h-auto"
            role="img"
            aria-label="US map showing eight states with public RHTP programs"
          >
            {STATE_GRID.map((s) => {
              const x = s.col * (TILE + GAP);
              const y = s.row * (TILE + GAP);
              const fill = s.highlight ? 'var(--ms-primary)' : '#E2E2EA';
              const textFill = s.highlight ? '#FFFFFF' : '#9A9AAA';
              const opacity = s.highlight ? highlightFade : 0.55;
              return (
                <g key={s.code} opacity={opacity}>
                  <rect
                    x={x}
                    y={y}
                    width={TILE}
                    height={TILE - 4}
                    rx={5}
                    fill={fill}
                  />
                  <text
                    x={x + TILE / 2}
                    y={y + (TILE - 4) / 2 + 1}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill={textFill}
                    fontSize={s.highlight ? 14 : 11}
                    fontWeight={s.highlight ? 700 : 500}
                    style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                  >
                    {s.code}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Compact legend */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-2 mb-6 md:mb-8 max-w-3xl mx-auto">
          {HIGHLIGHTED.map((s, i) => {
            const p = remap(progress, 0.20 + i * 0.03, 0.40 + i * 0.03);
            return (
              <div
                key={s.name}
                className="flex items-baseline gap-2"
                style={{
                  opacity: p,
                  transform: `translateY(${(1 - p) * 6}px)`,
                }}
              >
                <span className="text-sm font-semibold text-[var(--ms-heading)]">
                  {s.name}
                </span>
                <span className="text-sm tabular-nums text-[var(--ms-primary)] font-semibold">
                  {s.allocation}
                </span>
              </div>
            );
          })}
        </div>

        <p className="text-sm md:text-base text-[var(--ms-body)] text-center max-w-2xl mx-auto">
          Eight states.{' '}
          <span className="font-semibold text-[var(--ms-primary)] tabular-nums">$1.7B</span>{' '}
          in public RHTP plans naming the same&nbsp;gap.
        </p>
        <p className="text-xs text-[var(--ms-muted)] mt-2 text-center italic max-w-2xl mx-auto">
          Public allocations and program plans (FY2026 NOFO awards) &mdash; not vendor or
          MTN engagements.
        </p>
      </div>
    </section>
  );
}
