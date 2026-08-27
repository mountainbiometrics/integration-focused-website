'use client';

import { useRef } from 'react';
import { Search, Zap, Bot, User, ArrowDown } from 'lucide-react';
import { useScrollProgress, remap } from '@/hooks/useScrollProgress';

/* Deterministic sample data — no randomness, so server and client render identically. */

/* A signal with shape: a climb to a peak, a fall, a secondary bump, then settling. */
const MEASURED = [
  58, 60, 57, 59, 54, 50, 47, 43, 40, 35, 31, 27, 24, 22, 21, 23, 26, 31, 36, 40,
  44, 48, 52, 54, 51, 49, 45, 41, 38, 35, 33, 36, 39, 43, 47, 51, 55, 53, 57, 56,
];
const MEASURED_X = (i: number) => 8 + i * 6.6;

/* A marked point process: irregular in time AND varying in magnitude. */
const EVENT_TICKS = [
  { x: 20, top: 54 },
  { x: 52, top: 32 },
  { x: 70, top: 64 },
  { x: 112, top: 26 },
  { x: 140, top: 48 },
  { x: 186, top: 70 },
  { x: 214, top: 36 },
  { x: 256, top: 58 },
];

/* Combined panel: a steady rhythm, then the same rhythm at a new level. */
const COMBINED = [
  44, 41, 39, 40, 44, 48, 52, 54, 53, 49, 45, 41, 38, 37, 40, 44, 49, 52, 54, 51, 47, 43,
  86, 90, 93, 92, 88, 84, 81, 79, 80, 84, 88, 91, 93, 90, 86, 82, 80, 83,
];
const COMBINED_X = (i: number) => 20 + i * 13.5;
const EVENT_A = COMBINED_X(8);
const EVENT_B = COMBINED_X(22);

/* Merged layout offset, plus how far each lane is pulled apart at rest. */
const MERGE_BASE = 23;
const SERIES_SPREAD = -32;
const EVENTS_SPREAD = 48;

/** smoothstep — takes the mechanical feel off a linear scrub */
const ease = (t: number) => t * t * (3 - 2 * t);

function PanelLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-xs uppercase tracking-wide font-semibold text-[var(--ms-body-light)] mb-3">
      {children}
    </div>
  );
}

function EventMarker({ x, muted = false }: { x: number; muted?: boolean }) {
  const color = muted ? 'var(--ms-muted)' : 'var(--ms-accent)';
  return (
    <g>
      <line x1={x} y1={28} x2={x} y2={110} stroke={color} strokeWidth="1.5" strokeDasharray="3 3" />
      <circle cx={x} cy={28} r="4.5" fill={muted ? 'white' : color} stroke={color} strokeWidth="1.5" />
    </g>
  );
}

export default function SequenceTypes() {
  /* Each panel scrubs against its own position, so nothing finishes before it
     is actually on screen. Panel C is tall and its payoff sits at the bottom,
     so its range runs past the top of the viewport (negative endVh). */
  const refA = useRef<HTMLDivElement>(null);
  const refB = useRef<HTMLDivElement>(null);
  const refC = useRef<HTMLDivElement>(null);
  const pA = useScrollProgress(refA, { startVh: 0.85, endVh: 0.2 });
  const pB = useScrollProgress(refB, { startVh: 0.85, endVh: 0.2 });
  const pC = useScrollProgress(refC, { startVh: 0.92, endVh: -0.4 });

  /* Panel A — the trace draws left to right; the clip edge and the leading
     dot are both derived from the same x so they stay locked together. */
  const draw = ease(remap(pA, 0.08, 0.92));
  const traceX0 = MEASURED_X(0);
  const traceX1 = MEASURED_X(MEASURED.length - 1);
  const edgeX = traceX0 + (traceX1 - traceX0) * draw;
  const edgeF = draw * (MEASURED.length - 1);
  const edgeI = Math.floor(edgeF);
  const edgeY =
    MEASURED[edgeI] +
    (MEASURED[Math.min(MEASURED.length - 1, edgeI + 1)] - MEASURED[edgeI]) * (edgeF - edgeI);

  /* Panel C — lanes apart, then joined, then the causal reading appears */
  const fadeC = remap(pC, 0, 0.12);
  const merge = ease(remap(pC, 0.14, 0.62));
  const reveal = remap(pC, 0.68, 0.94);

  const seriesShift = MERGE_BASE + SERIES_SPREAD * (1 - merge);
  const eventsShift = MERGE_BASE + EVENTS_SPREAD * (1 - merge);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Panel A — continuous measurement */}
      <div
        ref={refA}
        className="p-6 rounded-2xl bg-white border-l-[3px] border-l-[var(--ms-primary)]"
        style={{ boxShadow: 'var(--ms-shadow-card-sm)' }}
      >
        <PanelLabel>Measured continuously</PanelLabel>
        <svg viewBox="0 0 280 100" className="w-full h-auto" role="img" aria-label="A densely sampled signal rising to a peak, falling away, bumping again, and settling">
          <defs>
            <clipPath id="seq-trace-reveal">
              <rect x="0" y="0" width={edgeX} height="100" />
            </clipPath>
          </defs>
          <line x1="0" y1="88" x2="280" y2="88" stroke="var(--ms-border)" strokeWidth="1" />
          <g clipPath="url(#seq-trace-reveal)">
            <polygon
              points={`${MEASURED_X(0)},88 ${MEASURED.map((y, i) => `${MEASURED_X(i)},${y}`).join(' ')} ${MEASURED_X(MEASURED.length - 1)},88`}
              fill="var(--ms-primary)"
              fillOpacity="0.10"
            />
            <polyline
              points={MEASURED.map((y, i) => `${MEASURED_X(i)},${y}`).join(' ')}
              fill="none"
              stroke="var(--ms-primary)"
              strokeWidth="2"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          </g>
          {/* leading edge of the trace */}
          {draw > 0.01 && draw < 0.995 && (
            <circle cx={edgeX} cy={edgeY} r="3.5" fill="var(--ms-primary)" />
          )}
        </svg>
        <div className="font-display text-[var(--ms-heading)] text-xl mt-4">Time series</div>
        <p className="text-[var(--ms-body-light)] text-sm mt-1">
          Steady samples. Heart rate, vibration, price, load.
        </p>
      </div>

      {/* Panel B — irregular events, rising from the axis */}
      <div
        ref={refB}
        className="p-6 rounded-2xl bg-white border-l-[3px] border-l-[var(--ms-accent)]"
        style={{ boxShadow: 'var(--ms-shadow-card-sm)' }}
      >
        <PanelLabel>Recorded when something happens</PanelLabel>
        <svg viewBox="0 0 280 100" className="w-full h-auto" role="img" aria-label="Events at irregular intervals, each drawn at a different height to show that events also differ in magnitude">
          <line x1="0" y1="88" x2="280" y2="88" stroke="var(--ms-border)" strokeWidth="1" />
          {EVENT_TICKS.map((e, i) => {
            const grow = ease(remap(pB, 0.08 + i * 0.055, 0.55 + i * 0.055));
            const top = 88 - (88 - e.top) * grow;
            return (
              <g key={e.x} opacity={grow > 0 ? 1 : 0}>
                <line
                  x1={e.x}
                  y1="88"
                  x2={e.x}
                  y2={top + 4}
                  stroke="var(--ms-accent)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx={e.x} cy={top} r={4.5 * grow} fill="var(--ms-accent)" />
              </g>
            );
          })}
        </svg>
        <div className="font-display text-[var(--ms-heading)] text-xl mt-4">Point process</div>
        <p className="text-[var(--ms-body-light)] text-sm mt-1">
          Irregular events. A visit, a repair, a trade, a plan change.
        </p>
      </div>

      {/* Panel C — two lanes that come together */}
      <div
        ref={refC}
        className="md:col-span-2 p-6 md:p-8 rounded-2xl bg-white border border-[var(--ms-border)] overflow-x-auto"
        style={{ boxShadow: 'var(--ms-shadow-card-sm)' }}
      >
        <PanelLabel>Together</PanelLabel>
        <svg
          viewBox="0 0 580 195"
          className="w-full min-w-[480px] h-auto"
          role="img"
          aria-label="The measured signal and the recorded events begin as two separate tracks, then move together into one view. Once aligned, the signal level is seen to shift after the second event and not the first."
          style={{ opacity: fadeC }}
        >
          {/* lane captions, only while apart */}
          <g opacity={1 - merge}>
            <text x="2" y="16" fontSize="11" fontWeight="600" fill="var(--ms-primary)">
              measurements
            </text>
            <text x="2" y="95" fontSize="11" fontWeight="600" fill="var(--ms-accent)">
              events
            </text>
          </g>

          {/* the region after the event that mattered */}
          <rect
            x={EVENT_B}
            y="45"
            width={580 - EVENT_B}
            height="88"
            fill="var(--ms-surface)"
            opacity={reveal}
          />

          {/* events lane — its baseline becomes the shared axis once merged */}
          <g transform={`translate(0, ${eventsShift})`}>
            <line x1="0" y1="110" x2="580" y2="110" stroke="var(--ms-border)" strokeWidth="1" />
            <EventMarker x={EVENT_A} muted />
            <EventMarker x={EVENT_B} />
            <text x={EVENT_A} y="14" fontSize="11" textAnchor="middle" fill="var(--ms-muted)">
              event 1
            </text>
            <text x={EVENT_B} y="14" fontSize="11" textAnchor="middle" fill="var(--ms-accent)">
              event 2
            </text>
          </g>

          {/* measurement lane */}
          <g transform={`translate(0, ${seriesShift})`}>
            <line
              x1="0"
              y1="100"
              x2="580"
              y2="100"
              stroke="var(--ms-border)"
              strokeWidth="1"
              opacity={1 - merge}
            />
            <polyline
              points={COMBINED.map((y, i) => `${COMBINED_X(i)},${y}`).join(' ')}
              fill="none"
              stroke="var(--ms-primary)"
              strokeWidth="2"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          </g>

          {/* the reading, once the two are aligned */}
          <g opacity={reveal}>
            <text x={EVENT_A} y="150" fontSize="11" textAnchor="middle" fill="var(--ms-muted)">
              nothing moves
            </text>
            <text x={EVENT_B + 12} y="150" fontSize="11" fill="var(--ms-accent)">
              everything moves
            </text>
          </g>
        </svg>

        {/* together → why → act */}
        <p className="text-lg text-[var(--ms-heading)] mt-6 text-center max-w-xl mx-auto">
          Apart, each one is just a record.{' '}
          <strong className="font-semibold">Together, they explain &ldquo;why.&rdquo;</strong>
        </p>

        <div
          className="mt-6 max-w-lg mx-auto"
          style={{
            opacity: reveal,
            transform: `translateY(${(1 - reveal) * 12}px)`,
          }}
        >
          <div className="rounded-xl border border-[var(--ms-border)] bg-[var(--ms-surface)] p-5">
            <div className="flex items-start gap-3">
              <Search className="w-5 h-5 flex-shrink-0 mt-0.5 text-[var(--ms-primary)]" strokeWidth={1.75} />
              <div>
                <div className="text-xs uppercase tracking-wide font-semibold text-[var(--ms-body-light)] mb-1">
                  The why
                </div>
                <p className="text-base text-[var(--ms-heading)] leading-relaxed">
                  Event 2 changed things. Event 1 didn&rsquo;t.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center py-2" aria-hidden="true">
            <ArrowDown className="w-5 h-5 text-[var(--ms-muted)]" strokeWidth={2} />
          </div>

          <div className="rounded-xl border-l-[3px] border-l-[var(--ms-accent)] border-y border-r border-[var(--ms-border)] bg-white p-5">
            <div className="flex items-start gap-3">
              <Zap className="w-5 h-5 flex-shrink-0 mt-0.5 text-[var(--ms-accent)]" strokeWidth={1.75} />
              <div className="w-full">
                <div className="text-xs uppercase tracking-wide font-semibold text-[var(--ms-body-light)] mb-1">
                  Something to act on
                </div>
                <p className="text-base text-[var(--ms-heading)] leading-relaxed">
                  Do more of what worked. Stop what didn&rsquo;t.
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[var(--ms-surface)] border border-[var(--ms-border)] text-xs text-[var(--ms-body)]">
                    <Bot className="w-3.5 h-3.5" strokeWidth={1.75} />
                    an agent
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[var(--ms-surface)] border border-[var(--ms-border)] text-xs text-[var(--ms-body)]">
                    <User className="w-3.5 h-3.5" strokeWidth={1.75} />
                    or your team
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
