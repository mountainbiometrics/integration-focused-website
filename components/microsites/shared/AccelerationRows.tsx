'use client';

import { useRef } from 'react';
import { useScrollProgress, remap } from '@/hooks/useScrollProgress';

interface AccelerationRowsConfig {
  accentRgb: string;
  accentColor: string;
  heading: string;
  timeline: {
    barCompressionFactor: number;
    beforeLabels: string[];
    summary: string;
    detail: string;
  };
  team: {
    detail: string;
  };
  maintenance: {
    xAxisLabel: string;
    detail: string;
  };
}

export default function AccelerationRows({ config }: { config: AccelerationRowsConfig }) {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useScrollProgress(sectionRef, { startVh: 0.32, endVh: -0.50 });

  const row1 = remap(progress, 0, 0.70);
  const row2 = remap(progress, 0.50, 0.8);
  const row3 = remap(progress, 0.70, 1.0);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 lg:py-32" style={{ backgroundColor: 'var(--ms-surface)' }}>
      <div className="container-site max-w-4xl mx-auto">
        <span
          className="inline-block px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.12em] mb-4 border"
          style={{
            backgroundColor: `rgba(${config.accentRgb},0.05)`,
            borderColor: `rgba(${config.accentRgb},0.12)`,
            color: config.accentColor,
          }}
        >
          What changes
        </span>
        <h2 className="font-display text-[1.5rem] md:text-[2rem] leading-[1.12] text-[var(--ms-heading)] mb-10 md:mb-14">
          {config.heading}
        </h2>

        <div className="space-y-5 md:space-y-7">
          <TimelineRow progress={row1} config={config} />
          <TeamRow progress={row2} accentColor={config.accentColor} detail={config.team.detail} />
          <MaintenanceRow progress={row3} accentColor={config.accentColor} xAxisLabel={config.maintenance.xAxisLabel} detail={config.maintenance.detail} />
        </div>
      </div>
    </section>
  );
}

/* ─── Row 1: Timeline Compression ─── */

function TimelineRow({ progress, config }: { progress: number; config: AccelerationRowsConfig }) {
  const cardEntrance = remap(progress, 0, 0.24);

  const anim = remap(progress, 0.10, 0.66);
  const barWidth = 100 - anim * config.timeline.barCompressionFactor;
  const isCompressed = anim > 0.5;
  const color = isCompressed ? config.accentColor : 'var(--ms-muted)';

  const beforeLabelOpacity = 1 - remap(anim, 0.35, 0.55);
  const afterLabelOpacity = remap(anim, 0.45, 0.65);

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
            {/* Before labels (fade out) */}
            <div
              className="absolute inset-0 flex items-center justify-between px-2 sm:px-3"
              style={{ opacity: beforeLabelOpacity }}
            >
              {config.timeline.beforeLabels.map((w) => (
                <span key={w} className="text-white text-[9px] sm:text-[11px] font-medium whitespace-nowrap">
                  {w}
                </span>
              ))}
            </div>

            {/* After labels (fade in) */}
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
        {config.timeline.summary}
      </p>
      <p className="text-xs mt-1 text-center" style={{ color: config.accentColor, opacity: cardEntrance }}>
        {config.timeline.detail}
      </p>
    </div>
  );
}

/* ─── Row 2: Team Compression ─── */

function TeamRow({ progress, accentColor, detail }: { progress: number; accentColor: string; detail: string }) {
  const cardEntrance = remap(progress, 0, 0.30);
  const fadeAnim = remap(progress, 0.28, 0.82);

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
            const personColor = isKeeper && fadeAnim > 0.5 ? accentColor : 'var(--ms-muted)';
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
      <p className="text-xs mt-1 text-center" style={{ color: accentColor, opacity: cardEntrance }}>
        {detail}
      </p>
    </div>
  );
}

/* ─── Row 3: Flat Maintenance Curve ─── */

function MaintenanceRow({ progress, accentColor, xAxisLabel, detail }: { progress: number; accentColor: string; xAxisLabel: string; detail: string }) {
  const cardEntrance = remap(progress, 0, 0.22);
  const lineAnim = remap(progress, 0.15, 0.75);

  const svgWidth = 280;
  const svgHeight = 80;
  const xStart = 20;
  const xEnd = 260;
  const yBottom = 70;
  const yTop = 12;

  const drawX = xStart + lineAnim * (xEnd - xStart);

  const conventionalPoints: string[] = [];
  const foundryPoints: string[] = [];
  const steps = 40;
  for (let s = 0; s <= steps; s++) {
    const t = s / steps;
    const x = xStart + t * (xEnd - xStart);
    if (x > drawX) break;
    const yConv = yBottom - (t * t) * (yBottom - yTop);
    conventionalPoints.push(`${x},${yConv}`);
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
          <text x={xStart} y={svgHeight - 2} fill="var(--ms-muted)" fontSize="8" textAnchor="start">{xAxisLabel}</text>
          <text x={xEnd} y={svgHeight - 2} fill="var(--ms-muted)" fontSize="8" textAnchor="end">200+</text>
          <text x={4} y={yBottom - 2} fill="var(--ms-muted)" fontSize="7" textAnchor="start" transform="rotate(-90, 8, 55)">hrs/wk</text>

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
              stroke={accentColor}
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
              <line x1={xStart} y1={yTop + 18} x2={xStart + 18} y2={yTop + 18} stroke={accentColor} strokeWidth="2" />
              <text x={xStart + 22} y={yTop + 22} fill={accentColor} fontSize="8">Foundry</text>
            </>
          )}
        </svg>
      </div>

      <p className="text-sm md:text-base font-semibold text-[var(--ms-heading)] text-center">
        Maintenance stays flat.
      </p>
      <p className="text-xs mt-1 text-center" style={{ color: accentColor, opacity: cardEntrance }}>
        {detail}
      </p>
    </div>
  );
}
