'use client';

import { useRef } from 'react';
import { useScrollProgress, remap } from '@/hooks/useScrollProgress';

export default function TransformationRows() {
  const sectionRef = useRef<HTMLElement>(null);
  // Large range so each row's animations play over substantial scroll distance
  const progress = useScrollProgress(sectionRef, { startVh: 0.50, endVh: -0.35 });

  // Wider row distribution for slower animations
  const row1 = remap(progress, 0, 0.70);
  const row2 = remap(progress, 0.50, 0.8);
  const row3 = remap(progress, 0.70, 1.0);

  return (
    <section ref={sectionRef} className="py-20 md:py-28 lg:py-32" style={{ backgroundColor: 'var(--ms-surface)' }}>
      <div className="container-site max-w-4xl mx-auto">
        <span className="inline-block px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.12em] mb-4 border bg-[rgba(90,111,209,0.05)] border-[rgba(90,111,209,0.12)] text-[var(--ms-blue)]">
          What actually changes
        </span>
        <h2 className="font-display text-[1.5rem] md:text-[2rem] leading-[1.12] text-[var(--ms-heading)] mb-10 md:mb-14">
          Three things get better. Immediately.
        </h2>

        <div className="space-y-5 md:space-y-7">
          <TimelineRow progress={row1} />
          <SelfHealingRow progress={row2} />
          <AuditTrailRow progress={row3} />
        </div>
      </div>
    </section>
  );
}

/* ─── Row 1: Timeline Compression ─── */

function TimelineRow({ progress }: { progress: number }) {
  // Card entrance — wide range for visible slide-up
  const cardEntrance = remap(progress, 0, 0.24);

  // Bar compression — starts early, completes by card-at-center-screen
  const anim = remap(progress, 0.10, 0.66);
  const barWidth = 100 - anim * 78; // 100% → 22%
  const isCompressed = anim > 0.5;
  const color = isCompressed ? 'var(--ms-blue)' : 'var(--ms-muted)';

  const beforeLabelOpacity = 1 - remap(anim, 0.35, 0.55);
  const afterLabelOpacity = remap(anim, 0.45, 0.65);

  // Bar bounce — lands just after compression completes
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
          {/* Bar */}
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
              {['Mo 1', 'Mo 2', 'Mo 3', 'Mo 4', 'Mo 5', 'Mo 6'].map((m) => (
                <span key={m} className="text-white text-[9px] sm:text-[11px] font-medium whitespace-nowrap">{m}</span>
              ))}
            </div>

            {/* Day labels (fade in) */}
            <div
              className="absolute inset-0 flex items-center justify-between px-2 sm:px-3"
              style={{ opacity: afterLabelOpacity }}
            >
              {['D1', 'D2', 'D3', 'D4', 'D5'].map((d) => (
                <span key={d} className="text-white text-[9px] sm:text-[11px] font-medium">{d}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className="text-sm md:text-base font-semibold text-[var(--ms-heading)] text-center">
        Days, not months.
      </p>
      <p className="text-xs text-[var(--ms-blue)] mt-1 text-center" style={{ opacity: cardEntrance }}>
        Benchmarked: 5&ndash;15 minutes per integration review
      </p>
    </div>
  );
}

/* ─── Row 2: Self-Healing Connection ─── */

function SelfHealingRow({ progress }: { progress: number }) {
  // Card entrance — wide range for visible slide-up
  const cardEntrance = remap(progress, 0, 0.30);

  const breakProgress = remap(progress, 0.25, 0.45);
  const holdBroken = remap(progress, 0.45, 0.58);
  const healProgress = remap(progress, 0.58, 0.85);

  const isBroken = breakProgress > 0 && healProgress < 1;
  const isHealed = healProgress >= 1;

  // Gap opens during break, holds, then closes during heal
  let gapWidth = 0;
  if (breakProgress > 0 && holdBroken < 1) {
    gapWidth = breakProgress * 44;
  } else if (holdBroken >= 1 && healProgress < 1) {
    gapWidth = 44;
  }
  if (healProgress > 0) {
    gapWidth = 44 * (1 - healProgress);
  }

  const lineColor = isHealed ? '#5A6FD1' : isBroken ? '#EF5350' : '#9A9AAA';
  const nodeColor = isHealed ? '#5A6FD1' : isBroken ? '#EF5350' : '#1A1A2E';

  // Node shake when broken
  const shakeOffset = isBroken && !isHealed
    ? Math.sin(progress * 200) * 2
    : 0;

  // Heal ring ripple: rings expand and fade
  const ringAnim = remap(progress, 0.82, 0.95);
  const showHealRing = ringAnim > 0;
  const ringRadius = 14 + ringAnim * 8;
  const ringOpacity = 0.6 * (1 - ringAnim * 0.4);

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
        <svg viewBox="0 0 260 48" className="w-full max-w-[280px] h-auto">
          {/* Left node (with shake) */}
          <g transform={`translate(${shakeOffset}, 0)`}>
            <circle cx="24" cy="24" r="12" fill={nodeColor} />
          </g>
          {/* Right node (with shake, opposite direction) */}
          <g transform={`translate(${-shakeOffset}, 0)`}>
            <circle cx="236" cy="24" r="12" fill={nodeColor} />
          </g>

          {/* Line left half */}
          <line
            x1="38" y1="24"
            x2={130 - gapWidth / 2} y2="24"
            stroke={lineColor}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Line right half */}
          <line
            x1={130 + gapWidth / 2} y1="24"
            x2="222" y2="24"
            stroke={lineColor}
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Break flash */}
          {isBroken && !isHealed && (
            <circle cx="130" cy="24" r="6" fill="#EF5350" opacity={0.4} />
          )}

          {/* Heal rings — expanding ripple */}
          {showHealRing && (
            <>
              <circle cx="24" cy="24" r={ringRadius} fill="none" stroke="#4CAF50" strokeWidth="1.5" opacity={ringOpacity} />
              <circle cx="236" cy="24" r={ringRadius} fill="none" stroke="#4CAF50" strokeWidth="1.5" opacity={ringOpacity} />
            </>
          )}
        </svg>
      </div>

      <p className="text-sm md:text-base font-semibold text-[var(--ms-heading)] text-center">
        Connections stop breaking.
      </p>
      <p className="text-xs text-[var(--ms-blue)] mt-1 text-center" style={{ opacity: cardEntrance }}>
        99% mapping accuracy across 60 format variants
      </p>
    </div>
  );
}

/* ─── Row 3: Audit Trail ─── */

const BAR_WIDTHS = [85, 75, 92, 80, 70, 95, 78]; // % of container

function AuditTrailRow({ progress }: { progress: number }) {
  // Card entrance — wide range for visible slide-up
  const cardEntrance = remap(progress, 0, 0.22);

  // Green sweep glow at end
  const sweepBase = remap(progress, 0.82, 0.97);

  return (
    <div
      className="bg-white rounded-2xl p-6 md:p-8"
      style={{
        opacity: cardEntrance,
        transform: `translateY(${(1 - cardEntrance) * 24}px)`,
        boxShadow: 'var(--ms-shadow-card-sm)',
      }}
    >
      <div className="mb-5 space-y-1.5">
        {BAR_WIDTHS.map((pct, i) => {
          const barIn = remap(progress, 0.08 + i * 0.07, 0.08 + i * 0.07 + 0.30);
          const checkIn = remap(progress, 0.08 + i * 0.07 + 0.18, 0.08 + i * 0.07 + 0.40);

          // Per-check green glow sweep (staggered left-to-right)
          const glowAnim = remap(sweepBase, i * 0.12, i * 0.12 + 0.4);
          const glowFilter = glowAnim > 0
            ? `drop-shadow(0 0 ${3 + glowAnim * 4}px rgba(76,175,80,${0.6 * glowAnim}))`
            : 'none';

          return (
            <div key={i} className="flex items-center gap-2">
              <div
                className="h-5 rounded border-l-2 border-l-[var(--ms-blue)]"
                style={{
                  width: `${barIn * pct}%`,
                  opacity: barIn,
                  backgroundColor: 'var(--ms-surface)',
                }}
              />
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                className="flex-shrink-0"
                style={{
                  opacity: checkIn,
                  transform: `scale(${0.5 + checkIn * 0.5})`,
                  filter: glowFilter,
                }}
              >
                <path
                  d="M3 7l3 3 5-5"
                  stroke="#4CAF50"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          );
        })}
      </div>

      <p className="text-sm md:text-base font-semibold text-[var(--ms-heading)]">
        Compliance that runs itself.
      </p>
      <p className="text-xs text-[var(--ms-blue)] mt-1" style={{ opacity: cardEntrance }}>
        &lt;1 hour/week at 200+ connections
      </p>
    </div>
  );
}
