'use client';

import { useRef } from 'react';
import { useScrollProgress, remap } from '@/hooks/useScrollProgress';

interface JourneyEvent {
  day: number;
  title: string[];
  sub: string[];
  above: boolean;
  monthLabel: string;
}

const CARE_END_DAY = 270;
const REPORTING_DAY = 360;
const TAIL_DAY = REPORTING_DAY + 90;
const X_START = -10;
const X_END = TAIL_DAY + 26;

const EVENTS: readonly JourneyEvent[] = [
  {
    day: 0,
    title: ['FQHC primary care'],
    sub: ['A1c 9.2% logged to', 'local flowsheet field'],
    above: true,
    monthLabel: 'Day 0',
  },
  {
    day: 60,
    title: ['Community pharmacy'],
    sub: ['30-day refill gap', 'in dispensing record'],
    above: false,
    monthLabel: 'Month 2',
  },
  {
    day: 150,
    title: ['Community mental', 'health'],
    sub: ['PHQ-9 narrative,', 'no instrument score'],
    above: true,
    monthLabel: 'Month 5',
  },
  {
    day: 270,
    title: ['Critical Access', 'Hospital ED'],
    sub: ['Discharge summary,', 'local diagnosis codes'],
    above: false,
    monthLabel: 'Month 9',
  },
];

const VB_W = 1200;
const VB_H = 380;
const PAD_X = 60;
const Y_AXIS = 190;
const FIG_TO_SVG_Y = VB_H / 1.3;
const TITLE_LH = 18;
const SUB_LH = 16;

const CARE_LINE = '#7D7D7D';
const TAIL_LINE = '#E46470';
const TICK_COLOR = '#5A5A5A';
const LABEL_COLOR = '#2A2A2A';
const SUB_COLOR = '#707070';

function dayToX(day: number) {
  return PAD_X + ((day - X_START) / (X_END - X_START)) * (VB_W - 2 * PAD_X);
}

function figYToSvgY(figY: number) {
  return Y_AXIS - figY * FIG_TO_SVG_Y;
}

export default function RhtpPatientJourney() {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useScrollProgress(sectionRef, { startVh: 0.55, endVh: -0.15 });

  const eventReveal = EVENTS.map((_, i) => {
    const start = 0.05 + i * 0.10;
    return remap(progress, start, start + 0.18);
  });
  const gapReveal = remap(progress, 0.50, 0.68);
  const tailReveal = remap(progress, 0.68, 0.85);
  const outcomeReveal = remap(progress, 0.78, 0.95);

  const tickT = figYToSvgY(0.05);
  const tickB = figYToSvgY(-0.05);

  const careX0 = dayToX(0);
  const careX1 = dayToX(CARE_END_DAY);
  const repX = dayToX(REPORTING_DAY);
  const tailX = dayToX(TAIL_DAY);

  const careToRepMidX = dayToX((CARE_END_DAY + REPORTING_DAY) / 2);
  const tailMidX = dayToX((REPORTING_DAY + TAIL_DAY) / 2);
  const careLineOpacity = Math.max(...eventReveal);

  return (
    <section
      ref={sectionRef}
      className="bg-white pt-0 pb-20 md:pb-28 lg:pb-32"
      aria-label="One patient, four independent rural facilities, one year"
    >
      <div className="container-site max-w-5xl mx-auto">
        <h3 className="text-base md:text-lg font-semibold text-[var(--ms-heading)] text-center mb-6 md:mb-10 leading-snug max-w-2xl mx-auto">
          One patient. Four independent rural facilities. One year. Measure not&nbsp;counted.
        </h3>

        {/* Desktop: horizontal SVG timeline */}
        <div className="hidden md:block">
          <svg
            viewBox={`0 0 ${VB_W} ${VB_H}`}
            className="w-full h-auto"
            role="img"
            aria-label="Timeline showing four rural-care events over nine months, followed by a reporting-assembly gap and a measure-not-counted outcome"
          >
            <line
              x1={careX0}
              y1={Y_AXIS}
              x2={careX1}
              y2={Y_AXIS}
              stroke={CARE_LINE}
              strokeWidth={3}
              strokeLinecap="round"
              opacity={careLineOpacity}
            />
            <line
              x1={careX1}
              y1={Y_AXIS}
              x2={repX}
              y2={Y_AXIS}
              stroke="var(--ms-primary)"
              strokeWidth={4.5}
              strokeLinecap="round"
              opacity={gapReveal}
            />
            <line
              x1={repX}
              y1={Y_AXIS}
              x2={tailX}
              y2={Y_AXIS}
              stroke={TAIL_LINE}
              strokeWidth={4}
              strokeLinecap="butt"
              strokeDasharray="7 5"
              opacity={tailReveal}
            />

            <line
              x1={repX}
              y1={figYToSvgY(0.04)}
              x2={repX}
              y2={figYToSvgY(-0.04)}
              stroke="var(--ms-primary)"
              strokeWidth={2}
              strokeLinecap="round"
              opacity={gapReveal}
            />
            <text
              x={repX}
              y={figYToSvgY(-0.07)}
              textAnchor="middle"
              dominantBaseline="hanging"
              fill="var(--ms-primary)"
              fontSize={13}
              fontWeight={600}
              opacity={gapReveal}
            >
              Reporting cycle
            </text>

            <text
              x={careToRepMidX}
              y={figYToSvgY(0.08)}
              textAnchor="middle"
              dominantBaseline="text-after-edge"
              fill="var(--ms-primary)"
              fontSize={13}
              fontStyle="italic"
              opacity={gapReveal}
            >
              reporting assembly
            </text>
            <text
              x={tailMidX}
              y={figYToSvgY(0.08)}
              textAnchor="middle"
              dominantBaseline="text-after-edge"
              fill={TAIL_LINE}
              fontSize={13}
              fontStyle="italic"
              opacity={tailReveal}
            >
              no semantic match
            </text>

            {EVENTS.map((ev, i) => {
              const x = dayToX(ev.day);
              const t = eventReveal[i];
              const titleAnchor = figYToSvgY(ev.above ? 0.10 : -0.10);
              const subAnchor = figYToSvgY(ev.above ? 0.28 : -0.28);
              const titleStartY = ev.above ? titleAnchor - (ev.title.length - 1) * TITLE_LH : titleAnchor;
              const subStartY = ev.above ? subAnchor - (ev.sub.length - 1) * SUB_LH : subAnchor;
              const baseline = ev.above ? 'text-after-edge' : 'hanging';
              const dayY = figYToSvgY(ev.above ? -0.05 : 0.05);
              const dayBaseline = ev.above ? 'hanging' : 'text-after-edge';

              return (
                <g key={ev.day} opacity={t}>
                  <line
                    x1={x}
                    y1={tickT}
                    x2={x}
                    y2={tickB}
                    stroke={TICK_COLOR}
                    strokeWidth={1.4}
                    strokeLinecap="round"
                  />
                  <text
                    x={x}
                    y={titleStartY}
                    textAnchor="middle"
                    dominantBaseline={baseline}
                    fill={LABEL_COLOR}
                    fontSize={15}
                    fontWeight={700}
                  >
                    {ev.title.map((line, li) => (
                      <tspan key={li} x={x} dy={li === 0 ? 0 : TITLE_LH}>
                        {line}
                      </tspan>
                    ))}
                  </text>
                  <text
                    x={x}
                    y={subStartY}
                    textAnchor="middle"
                    dominantBaseline={baseline}
                    fill={SUB_COLOR}
                    fontSize={12}
                    fontStyle="italic"
                  >
                    {ev.sub.map((line, li) => (
                      <tspan key={li} x={x} dy={li === 0 ? 0 : SUB_LH}>
                        {line}
                      </tspan>
                    ))}
                  </text>
                  <text
                    x={x}
                    y={dayY}
                    textAnchor="middle"
                    dominantBaseline={dayBaseline}
                    fill="#9A9A9A"
                    fontSize={10}
                  >
                    {ev.monthLabel}
                  </text>
                </g>
              );
            })}

            <g opacity={outcomeReveal}>
              <line
                x1={tailX}
                y1={figYToSvgY(0.05)}
                x2={tailX}
                y2={figYToSvgY(-0.05)}
                stroke={TAIL_LINE}
                strokeWidth={2}
                strokeLinecap="round"
              />
              <text
                x={tailX}
                y={figYToSvgY(-0.10)}
                textAnchor="middle"
                dominantBaseline="hanging"
                fill={LABEL_COLOR}
                fontSize={15}
                fontWeight={700}
              >
                Measure not counted
              </text>
              <text
                x={tailX}
                y={figYToSvgY(-0.28)}
                textAnchor="middle"
                dominantBaseline="hanging"
                fill={SUB_COLOR}
                fontSize={12}
                fontStyle="italic"
              >
                <tspan x={tailX}>UDS / eCQM numerator miss:</tspan>
                <tspan x={tailX} dy={SUB_LH}>LOINC 4548-4 absent,</tspan>
                <tspan x={tailX} dy={SUB_LH}>PHQ-9 score absent</tspan>
              </text>
            </g>
          </svg>
        </div>

        {/* Mobile: vertical timeline */}
        <ol className="md:hidden relative border-l-2 border-[var(--ms-border)] pl-5 space-y-7 ml-2">
          {EVENTS.map((ev, i) => {
            const t = eventReveal[i];
            return (
              <li
                key={ev.day}
                className="relative"
                style={{ opacity: t, transform: `translateY(${(1 - t) * 12}px)` }}
              >
                <span
                  className="absolute -left-[26px] top-1.5 w-3 h-3 rounded-full"
                  style={{ backgroundColor: TICK_COLOR }}
                  aria-hidden="true"
                />
                <p className="text-[10px] uppercase tracking-[0.16em] text-[var(--ms-muted)] mb-1">
                  {ev.monthLabel}
                </p>
                <p className="text-sm font-bold text-[var(--ms-heading)] leading-tight">
                  {ev.title.join(' ')}
                </p>
                <p className="text-xs italic text-[var(--ms-body-light)] mt-1 leading-snug">
                  {ev.sub.join(' ')}
                </p>
              </li>
            );
          })}
          <li className="relative" style={{ opacity: gapReveal }}>
            <span
              className="absolute -left-[26px] top-1.5 w-3 h-3 rounded-full"
              style={{ backgroundColor: 'var(--ms-primary)' }}
              aria-hidden="true"
            />
            <p
              className="text-[10px] uppercase tracking-[0.16em] mb-1"
              style={{ color: 'var(--ms-primary)' }}
            >
              Month 12 · Reporting cycle
            </p>
            <p className="text-sm font-bold text-[var(--ms-heading)] leading-tight">
              Reporting assembly
            </p>
          </li>
          <li className="relative" style={{ opacity: outcomeReveal }}>
            <span
              className="absolute -left-[26px] top-1.5 w-3 h-3 rounded-full"
              style={{ backgroundColor: TAIL_LINE }}
              aria-hidden="true"
            />
            <p
              className="text-[10px] uppercase tracking-[0.16em] mb-1"
              style={{ color: TAIL_LINE }}
            >
              No semantic match
            </p>
            <p className="text-sm font-bold text-[var(--ms-heading)] leading-tight">
              Measure not counted
            </p>
            <p className="text-xs italic text-[var(--ms-body-light)] mt-1 leading-snug">
              UDS / eCQM numerator miss: LOINC 4548-4 absent, PHQ-9 score absent.
            </p>
          </li>
        </ol>

        <p
          className="text-base md:text-lg text-[var(--ms-heading)] italic text-center mt-8 md:mt-12 max-w-2xl mx-auto leading-snug"
          style={{ opacity: outcomeReveal }}
        >
          The record moved through the HIE. The meaning did not travel with&nbsp;it.
        </p>
      </div>
    </section>
  );
}
