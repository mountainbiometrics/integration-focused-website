'use client';

import { useRef } from 'react';
import { useScrollProgress, remap } from './useScrollProgress';

export default function TransformationRows() {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useScrollProgress(sectionRef, { startVh: 0.92, endVh: 0.05 });

  const row1 = remap(progress, 0, 0.35);
  const row2 = remap(progress, 0.3, 0.65);
  const row3 = remap(progress, 0.6, 0.95);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-[#FAFAFA]">
      <div className="container-site max-w-3xl mx-auto">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-3 bg-[rgba(101,126,226,0.10)] text-[#657EE2]">
          What Changes
        </span>
        <h2 className="text-xl md:text-2xl font-bold text-[#4D4D4D] mb-8 md:mb-10">
          Here&rsquo;s what actually changes.
        </h2>

        <div className="space-y-4 md:space-y-6">
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
  const barWidth = 100 - progress * 78; // 100% → 22%
  const isCompressed = progress > 0.5;
  const color = isCompressed ? '#657EE2' : '#B4B1B1';

  const beforeLabelOpacity = 1 - remap(progress, 0.35, 0.55);
  const afterLabelOpacity = remap(progress, 0.45, 0.65);

  return (
    <div className="bg-white rounded-xl p-5 md:p-6 border border-[#ECECEC]">
      <div className="mb-5 h-16 flex items-center">
        <div className="relative w-full">
          {/* Bar */}
          <div
            className="h-10 rounded-lg relative"
            style={{ width: `${barWidth}%`, backgroundColor: color }}
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

      <p className="text-sm md:text-base font-semibold text-[#4D4D4D]">
        New clinics come online in days, not months.
      </p>
      <p className="text-sm text-[#7D7D7D] mt-1 leading-relaxed">
        No custom development per source. No six-month onboarding project every
        time a provider network shifts.
      </p>
    </div>
  );
}

/* ─── Row 2: Self-Healing Connection ─── */

function SelfHealingRow({ progress }: { progress: number }) {
  const breakProgress = remap(progress, 0.15, 0.35);
  const holdBroken = remap(progress, 0.35, 0.55);
  const healProgress = remap(progress, 0.55, 0.85);

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

  const lineColor = isHealed ? '#657EE2' : isBroken ? '#EF5350' : '#B4B1B1';
  const nodeColor = isHealed ? '#657EE2' : isBroken ? '#EF5350' : '#4D4D4D';
  const showHealRing = healProgress > 0.8;

  return (
    <div className="bg-white rounded-xl p-5 md:p-6 border border-[#ECECEC]">
      <div className="mb-5 h-16 flex items-center justify-center">
        <svg viewBox="0 0 260 48" className="w-full max-w-[280px] h-auto">
          {/* Left node */}
          <circle cx="24" cy="24" r="12" fill={nodeColor} />
          {/* Right node */}
          <circle cx="236" cy="24" r="12" fill={nodeColor} />

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

          {/* Heal rings */}
          {showHealRing && (
            <>
              <circle cx="24" cy="24" r="18" fill="none" stroke="#4CAF50" strokeWidth="1.5" opacity={0.5} />
              <circle cx="236" cy="24" r="18" fill="none" stroke="#4CAF50" strokeWidth="1.5" opacity={0.5} />
            </>
          )}
        </svg>
      </div>

      <p className="text-sm md:text-base font-semibold text-[#4D4D4D]">
        Existing connections stop breaking.
      </p>
      <p className="text-sm text-[#7D7D7D] mt-1 leading-relaxed">
        When a source system updates&nbsp;&mdash; and they always update&nbsp;&mdash;
        the Foundry catches it and adapts. No ticket. No dev sprint.
      </p>
    </div>
  );
}

/* ─── Row 3: Audit Trail ─── */

const BAR_WIDTHS = [85, 75, 92, 80, 70, 95, 78]; // % of container

function AuditTrailRow({ progress }: { progress: number }) {
  return (
    <div className="bg-white rounded-xl p-5 md:p-6 border border-[#ECECEC]">
      <div className="mb-5 space-y-1.5">
        {BAR_WIDTHS.map((pct, i) => {
          const barIn = remap(progress, i * 0.1, i * 0.1 + 0.25);
          const checkIn = remap(progress, i * 0.1 + 0.15, i * 0.1 + 0.35);
          return (
            <div key={i} className="flex items-center gap-2">
              <div
                className="h-5 rounded bg-[#F5F5F5] border-l-2 border-l-[#657EE2]"
                style={{
                  width: `${barIn * pct}%`,
                  opacity: barIn,
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

      <p className="text-sm md:text-base font-semibold text-[#4D4D4D]">
        Your compliance posture is continuous, not periodic.
      </p>
      <p className="text-sm text-[#7D7D7D] mt-1 leading-relaxed">
        Every mapping decision is logged, scored, and auditable. Not because you
        prepared for an audit&nbsp;&mdash; because that&rsquo;s how the system works.
      </p>
    </div>
  );
}
