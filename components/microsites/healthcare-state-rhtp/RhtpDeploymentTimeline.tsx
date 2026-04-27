'use client';

import { useRef } from 'react';
import { useScrollProgress, remap } from '@/hooks/useScrollProgress';

const TIMELINE_DAYS = 25;
const AXIS_MARKERS = [0, 5, 10, 15, 20, 25] as const;

interface Phase {
  number: string;
  title: string;
  duration: string;
  body: string;
  start: number;
  end: number;
  continuous: boolean;
}

const PHASES: readonly Phase[] = [
  {
    number: '01',
    title: 'Schema Ingestion',
    duration: 'Days 1–5',
    body: 'Schemas, data dictionaries, API documentation. No data migration. No PHI required.',
    start: 1,
    end: 5,
    continuous: false,
  },
  {
    number: '02',
    title: 'Automated Mapping',
    duration: 'Weeks 1–2',
    body: 'Concept mapping across facility sources and target reporting schemas. Confidence scoring flags what needs review.',
    start: 1,
    end: 14,
    continuous: false,
  },
  {
    number: '03',
    title: 'Targeted Review',
    duration: 'Weeks 2–3',
    body: 'State staff and clinical SMEs validate flagged mappings.',
    start: 8,
    end: 21,
    continuous: false,
  },
  {
    number: '04',
    title: 'Ongoing Maintenance',
    duration: 'Continuous',
    body: 'Schema drift detection and re-mapping as systems and reporting specifications evolve.',
    start: 8,
    end: 25,
    continuous: true,
  },
];

export default function RhtpDeploymentTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useScrollProgress(sectionRef, { startVh: 0.50, endVh: -0.20 });

  const phaseProgresses = [
    remap(progress, 0.05, 0.30),
    remap(progress, 0.20, 0.50),
    remap(progress, 0.40, 0.65),
    remap(progress, 0.55, 0.85),
  ];

  return (
    <section ref={sectionRef} className="py-20 md:py-28 lg:py-32 bg-white">
      <div className="container-site max-w-5xl mx-auto">
        <h2 className="font-display text-[1.5rem] md:text-[2rem] leading-[1.12] text-[var(--ms-heading)] mb-3">
          A practical deployment path.
        </h2>
        <p className="text-base md:text-lg text-[var(--ms-body)] mb-10 md:mb-14 max-w-2xl">
          Each new facility slots in against an established semantic layer instead of
          triggering a months-long fire&nbsp;drill.
        </p>

        {/* Day axis ruler (right gutter holds the ∞ marker) */}
        <div className="relative pr-12 md:pr-16 mb-3" aria-hidden="true">
          <div className="relative h-7">
            {AXIS_MARKERS.map((day) => (
              <div
                key={day}
                className="absolute top-0"
                style={{
                  left: `${(day / TIMELINE_DAYS) * 100}%`,
                  transform: 'translateX(-50%)',
                }}
              >
                <div className="w-px h-2.5 bg-[var(--ms-border)] mx-auto" />
                <div className="text-[10px] text-[var(--ms-muted)] mt-1 text-center whitespace-nowrap font-medium tabular-nums">
                  {day === 0 ? 'Day 0' : `D${day}`}
                </div>
              </div>
            ))}
          </div>
          <div className="absolute right-0 top-0 flex flex-col items-center">
            <div className="w-px h-2.5 bg-[var(--ms-border)]" />
            <span className="text-[10px] text-[var(--ms-muted)] mt-1 font-medium">∞</span>
          </div>
        </div>

        {/* Phase rows (Gantt) */}
        <div className="space-y-7 md:space-y-9">
          {PHASES.map((phase, i) => {
            const p = phaseProgresses[i];
            const startPct = (phase.start / TIMELINE_DAYS) * 100;
            const totalWidthPct = ((phase.end - phase.start) / TIMELINE_DAYS) * 100;
            const filledWidthPct = totalWidthPct * p;
            const titleColor = p > 0.4 ? 'var(--ms-heading)' : 'var(--ms-muted)';
            const arrowOpacity =
              phase.continuous && p > 0.7 ? remap(p, 0.7, 0.95) : 0;

            return (
              <div key={phase.number}>
                {/* Label row */}
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                  <span
                    className="text-[11px] font-semibold tracking-[0.18em] tabular-nums"
                    style={{
                      color: 'var(--ms-primary)',
                      opacity: 0.4 + p * 0.6,
                    }}
                  >
                    {phase.number}
                  </span>
                  <h3
                    className="text-base md:text-lg font-semibold leading-tight transition-colors"
                    style={{ color: titleColor }}
                  >
                    {phase.title}
                  </h3>
                  <span className="text-[11px] uppercase tracking-[0.12em] text-[var(--ms-body-light)]">
                    · {phase.duration}
                  </span>
                </div>

                {/* Bar track */}
                <div className="relative pr-12 md:pr-16">
                  <div className="relative h-6 rounded-md bg-[var(--ms-surface)] overflow-visible">
                    <div
                      className="absolute top-0 h-full rounded-md"
                      style={{
                        left: `${startPct}%`,
                        width: `${filledWidthPct}%`,
                        backgroundColor: 'var(--ms-primary)',
                        opacity: 0.55 + p * 0.45,
                      }}
                    />
                    {phase.continuous && (
                      <div
                        className="absolute top-1/2 -translate-y-1/2 flex items-center pointer-events-none"
                        style={{
                          left: `${startPct + filledWidthPct}%`,
                          opacity: arrowOpacity,
                        }}
                        aria-hidden="true"
                      >
                        <div
                          className="h-[2px] w-7"
                          style={{
                            background:
                              'linear-gradient(to right, var(--ms-primary), rgba(172,31,45,0))',
                          }}
                        />
                        <span
                          className="ml-1 text-sm font-semibold animate-pulse"
                          style={{ color: 'var(--ms-primary)' }}
                        >
                          →
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Body */}
                <p
                  className="text-sm md:text-base text-[var(--ms-body)] leading-relaxed mt-2 max-w-3xl"
                  style={{ opacity: 0.5 + p * 0.5 }}
                >
                  {phase.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
