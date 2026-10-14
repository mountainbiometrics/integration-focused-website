'use client';

import { useRef } from 'react';
import { useScrollProgress, remap } from '@/hooks/useScrollProgress';

/* Time, drawn: the same monthly denial rate twice. Raw, the newest month
   dips because its denials haven't arrived, and the dip reads as good news.
   With MTN, that month isn't plotted as a value: it is held back as still
   arriving, and the headline comes from the last complete month. */

const MONTHS = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];
const RATES = [8.1, 7.8, 8.4, 8.0, 8.2, 3.9];

/* Annotation red, matching the homepage demo's reviewer marks. */
const FLAG = '#D92D20';

const W = 170;
const H = 112;
const PAD = { l: 8, r: 8, t: 14, b: 22 };
const MAX = 10;

const x = (i: number) => PAD.l + (i * (W - PAD.l - PAD.r)) / (MONTHS.length - 1);
const y = (v: number) => PAD.t + (1 - v / MAX) * (H - PAD.t - PAD.b);

const solidPath = RATES.slice(0, 5)
  .map((v, i) => `${i === 0 ? 'M' : 'L'} ${x(i)} ${y(v)}`)
  .join(' ');
const lastSeg = `M ${x(4)} ${y(RATES[4])} L ${x(5)} ${y(RATES[5])}`;

function Panel({
  title,
  guide,
  draw,
  mark,
}: {
  title: string;
  guide: boolean;
  draw: number;
  mark: number;
}) {
  const color = guide ? 'var(--ms-primary)' : '#9A9AAA';
  const colW = (W - PAD.l - PAD.r) / (MONTHS.length - 1);
  /* With MTN, September is not plotted as a value at all. */
  const points = guide ? RATES.slice(0, 5) : RATES;

  return (
    <div className="min-w-0">
      <div
        className={`text-[10px] uppercase tracking-wider font-semibold ${
          guide ? 'text-[var(--ms-primary)]' : 'text-[var(--ms-body-light)]'
        }`}
      >
        {title}
      </div>

      {/* what the AI concludes from each version */}
      <div className="min-h-[2.5rem] flex items-center text-[12.5px] leading-tight font-semibold" style={{ opacity: mark }}>
        {guide ? (
          <span className="text-[var(--ms-primary)]">AI: “Steady at 8%. Sep. still arriving.”</span>
        ) : (
          <span style={{ color: '#1E8E3E' }}>AI: “Denials fell 52%.”</span>
        )}
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto overflow-visible">
        {guide && (
          <defs>
            <pattern id="time-hatch" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="5" stroke="var(--ms-primary)" strokeWidth="1.5" strokeOpacity="0.35" />
            </pattern>
          </defs>
        )}

        {/* baseline */}
        <line x1={PAD.l} x2={W - PAD.r} y1={H - PAD.b} y2={H - PAD.b} stroke="var(--ms-border)" />

        {/* complete months */}
        <path
          d={solidPath}
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinejoin="round"
          pathLength={1}
          strokeDasharray="1"
          strokeDashoffset={1 - remap(draw, 0, 0.8)}
        />

        {/* raw: September plotted as if it were final */}
        {!guide && (
          <path d={lastSeg} fill="none" stroke={color} strokeWidth="2" style={{ opacity: remap(draw, 0.8, 1) }} />
        )}

        {points.map((v, i) => (
          <circle
            key={i}
            cx={x(i)}
            cy={y(v)}
            r={2.6}
            fill={color}
            style={{ opacity: remap(draw, (i / RATES.length) * 0.8, (i / RATES.length) * 0.8 + 0.15) }}
          />
        ))}

        {/* with MTN: September held back as incomplete */}
        {guide && (
          <g style={{ opacity: remap(draw, 0.8, 1) }}>
            <rect
              x={x(5) - colW / 2}
              y={PAD.t}
              width={colW / 2 + PAD.r}
              height={H - PAD.t - PAD.b}
              rx="3"
              fill="url(#time-hatch)"
              stroke="var(--ms-primary)"
              strokeOpacity="0.5"
              strokeDasharray="3 2"
            />
            <text
              x={x(5) - colW / 4 + PAD.r / 2}
              y={y(5)}
              textAnchor="middle"
              fontSize="7.5"
              fontWeight="700"
              fill="var(--ms-primary)"
            >
              <tspan x={x(5) - colW / 4 + PAD.r / 2} dy="0">still</tspan>
              <tspan x={x(5) - colW / 4 + PAD.r / 2} dy="9">arriving</tspan>
            </text>
          </g>
        )}

        {/* reviewer mark on the raw dip */}
        {!guide && (
          <g style={{ opacity: mark }}>
            <circle cx={x(5)} cy={y(RATES[5])} r={9} fill="none" stroke={FLAG} strokeWidth="2" />
          </g>
        )}

        {MONTHS.map((m, i) => (
          <text key={m} x={x(i)} y={H - 6} textAnchor="middle" fontSize="8" fill="var(--ms-body-light)">
            {m}
          </text>
        ))}
      </svg>
      <div className="min-h-[2.25rem] mt-1 text-[11px] leading-snug" style={{ opacity: mark }}>
        {guide ? (
          <span className="text-[var(--ms-body-light)]">Sep. reported when its denials are in.</span>
        ) : (
          <span className="font-semibold" style={{ color: FLAG }}>
            Not real: Sep. denials haven’t arrived yet.
          </span>
        )}
      </div>
    </div>
  );
}

export default function TimeVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const progress = useScrollProgress(ref, { startVh: 0.9, endVh: 0.6 });

  const draw = remap(progress, 0.0, 0.5);
  const mark = remap(progress, 0.5, 0.75);

  return (
    <div
      ref={ref}
      role="img"
      aria-label="Monthly denial rate, April to September. Raw, September drops to 3.9% and the AI reports that denials fell 52%, which isn't real: September's denials haven't arrived yet. With MTN, September is held back as still arriving, and the AI reports a steady 8%."
      className="grid grid-cols-2 gap-4 rounded-lg border border-[var(--ms-border)] bg-white px-3 pt-3 pb-1"
    >
      <Panel title="Raw" guide={false} draw={draw} mark={mark} />
      <Panel title="With MTN" guide draw={draw} mark={mark} />
    </div>
  );
}
