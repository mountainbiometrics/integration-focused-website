'use client';

import { useRef } from 'react';
import { useScrollProgress, remap } from './useScrollProgress';

export default function AccelerationRows() {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useScrollProgress(sectionRef, { startVh: 0.50, endVh: -0.35 });

  const row1 = remap(progress, 0, 0.70);
  const row2 = remap(progress, 0.50, 0.8);
  const row3 = remap(progress, 0.70, 1.0);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 lg:py-32" style={{ backgroundColor: 'var(--ms-surface)' }}>
      <div className="container-site max-w-4xl mx-auto">
        <span className="inline-block px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.12em] mb-4 border bg-[rgba(90,111,209,0.05)] border-[rgba(90,111,209,0.12)] text-[var(--ms-blue)]">
          What changes
        </span>
        <h2 className="font-display text-[1.5rem] md:text-[2rem] leading-[1.12] text-[var(--ms-heading)] mb-10 md:mb-14">
          Three things get faster. Permanently.
        </h2>

        <div className="space-y-5 md:space-y-7">
          <TimelineRow progress={row1} />
          <TeamRow progress={row2} />
          <MaintenanceRow progress={row3} />
        </div>
      </div>
    </section>
  );
}

/* ─── Row 1: Timeline Compression ─── */

function TimelineRow({ progress }: { progress: number }) {
  const cardEntrance = remap(progress, 0, 0.24);

  const anim = remap(progress, 0.10, 0.66);
  const barWidth = 100 - anim * 78; // 100% → 22%
  const isCompressed = anim > 0.5;
  const color = isCompressed ? 'var(--ms-blue)' : 'var(--ms-muted)';

  const beforeLabelOpacity = 1 - remap(anim, 0.35, 0.55);
  const afterLabelOpacity = remap(anim, 0.45, 0.65);

  // Bar bounce at end of compression
  const bounceRaw = remap(progress, 0.68, 0.78);
  let barScaleY: number;
  if (bounceRaw < 0.5) {
    barScaleY = 1 + (bounceRaw / 0.5) * 0.06;
  } else {
    barScaleY = 1.06 - ((bounceRaw - 0.5) / 0.5) * 0.06;
  }

  return (
    <div
      className="bg-white rounded-2xl p-6 md:p-8"
      style={{
        opacity: cardEntrance,
        transform: `translateY(${(1 - cardEntrance) * 24}px)`,
        boxShadow: 'var(--ms-shadow-card-sm)',
      }}
    >
      <div className="mb-5 h-16 flex items-center justify-center">
        <div className="relative w-full flex justify-center">
          <div
            className="h-10 rounded-lg relative min-w-[140px]"
            style={{
              width: `${barWidth}%`,
              backgroundColor: color,
              transform: `scaleY(${barScaleY})`,
              transformOrigin: 'center bottom',
            }}
          >
            {/* Month labels (fade out) */}
            <div
              className="absolute inset-0 flex items-center justify-between px-2 sm:px-3"
              style={{ opacity: beforeLabelOpacity }}
            >
              {Array.from({ length: 36 }, (_, i) => i + 1)
                .filter((m) => [1, 6, 12, 18, 24, 36].includes(m))
                .map((m) => (
                  <span key={m} className="text-white text-[9px] sm:text-[11px] font-medium whitespace-nowrap">
                    {m}mo
                  </span>
                ))}
            </div>

            {/* Week labels (fade in) */}
            <div
              className="absolute inset-0 flex items-center justify-between px-2 sm:px-3"
              style={{ opacity: afterLabelOpacity }}
            >
              {['W1', 'W2', 'W3'].map((w) => (
                <span key={w} className="text-white text-[9px] sm:text-[11px] font-medium">{w}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className="text-sm md:text-base font-semibold text-[var(--ms-heading)] text-center">
        Weeks, not years.
      </p>
      <p className="text-xs text-[var(--ms-blue)] mt-1 text-center" style={{ opacity: cardEntrance }}>
        Per acquisition. Every time.
      </p>
    </div>
  );
}

/* ─── Row 2: Team Compression ─── */

function TeamRow({ progress }: { progress: number }) {
  const cardEntrance = remap(progress, 0, 0.30);
  const fadeAnim = remap(progress, 0.28, 0.82);

  // 20 person icons → 5 remain
  const totalPeople = 20;
  const keepCount = 5;

  return (
    <div
      className="bg-white rounded-2xl p-6 md:p-8"
      style={{
        opacity: cardEntrance,
        transform: `translateY(${(1 - cardEntrance) * 24}px)`,
        boxShadow: 'var(--ms-shadow-card-sm)',
      }}
    >
      <div className="mb-5 flex items-center justify-center">
        <div className="grid grid-cols-10 gap-1.5 sm:gap-2">
          {Array.from({ length: totalPeople }, (_, i) => {
            const isKeeper = i < keepCount;
            const personOpacity = isKeeper ? 1 : 1 - fadeAnim;
            const personColor = isKeeper && fadeAnim > 0.5 ? 'var(--ms-blue)' : 'var(--ms-muted)';
            return (
              <svg key={i} width="20" height="24" viewBox="0 0 20 24" style={{ opacity: personOpacity }}>
                <circle cx="10" cy="7" r="4" fill={personColor} />
                <path d="M2 22c0-4.4 3.6-8 8-8s8 3.6 8 8" fill={personColor} />
              </svg>
            );
          })}
        </div>
      </div>

      <p className="text-sm md:text-base font-semibold text-[var(--ms-heading)] text-center">
        A handful, not a department.
      </p>
      <p className="text-xs text-[var(--ms-blue)] mt-1 text-center" style={{ opacity: cardEntrance }}>
        3&ndash;5 people instead of 15&ndash;25. Same output.
      </p>
    </div>
  );
}

/* ─── Row 3: Flat Maintenance Curve ─── */

function MaintenanceRow({ progress }: { progress: number }) {
  const cardEntrance = remap(progress, 0, 0.22);
  const lineAnim = remap(progress, 0.15, 0.75);

  // Conventional line curves up quadratically, turns red
  // Foundry line stays flat, blue
  const svgWidth = 280;
  const svgHeight = 80;
  const xStart = 20;
  const xEnd = 260;
  const yBottom = 70;
  const yTop = 12;

  // How far along x-axis the lines have drawn
  const drawX = xStart + lineAnim * (xEnd - xStart);

  // Conventional: quadratic upward curve
  const conventionalPoints: string[] = [];
  const foundryPoints: string[] = [];
  const steps = 40;
  for (let s = 0; s <= steps; s++) {
    const t = s / steps;
    const x = xStart + t * (xEnd - xStart);
    if (x > drawX) break;
    // Conventional: quadratic curve from bottom to top
    const yConv = yBottom - (t * t) * (yBottom - yTop);
    conventionalPoints.push(`${x},${yConv}`);
    // Foundry: starts at same point, rises gently then flattens
    const yFlat = yBottom - t * 8;
    foundryPoints.push(`${x},${yFlat}`);
  }

  const convPath = conventionalPoints.length > 1
    ? `M${conventionalPoints.join(' L')}`
    : '';
  const flatPath = foundryPoints.length > 1
    ? `M${foundryPoints.join(' L')}`
    : '';

  const convColor = lineAnim > 0.5 ? '#EF5350' : 'var(--ms-muted)';

  return (
    <div
      className="bg-white rounded-2xl p-6 md:p-8"
      style={{
        opacity: cardEntrance,
        transform: `translateY(${(1 - cardEntrance) * 24}px)`,
        boxShadow: 'var(--ms-shadow-card-sm)',
      }}
    >
      <div className="mb-5 flex items-center justify-center">
        <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full max-w-[300px] h-auto">
          {/* Axis labels */}
          <text x={xStart} y={svgHeight - 2} fill="var(--ms-muted)" fontSize="8" textAnchor="start">Clinics</text>
          <text x={xEnd} y={svgHeight - 2} fill="var(--ms-muted)" fontSize="8" textAnchor="end">50+</text>

          {/* Conventional line */}
          {convPath && (
            <path
              d={convPath}
              fill="none"
              stroke={convColor}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}

          {/* Foundry line */}
          {flatPath && (
            <path
              d={flatPath}
              fill="none"
              stroke="var(--ms-blue)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}

          {/* Legend */}
          {lineAnim > 0.6 && (
            <>
              <line x1={xStart} y1={yTop + 6} x2={xStart + 18} y2={yTop + 6} stroke={convColor} strokeWidth="2" />
              <text x={xStart + 22} y={yTop + 10} fill={convColor} fontSize="8">Conventional</text>
              <line x1={xStart} y1={yTop + 18} x2={xStart + 18} y2={yTop + 18} stroke="var(--ms-blue)" strokeWidth="2" />
              <text x={xStart + 22} y={yTop + 22} fill="var(--ms-blue)" fontSize="8">Foundry</text>
            </>
          )}
        </svg>
      </div>

      <p className="text-sm md:text-base font-semibold text-[var(--ms-heading)] text-center">
        Costs don&rsquo;t compound.
      </p>
      <p className="text-xs text-[var(--ms-blue)] mt-1 text-center" style={{ opacity: cardEntrance }}>
        &lt;1 hr/week at 200+ connections
      </p>
    </div>
  );
}
