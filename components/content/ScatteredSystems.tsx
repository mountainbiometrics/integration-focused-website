'use client';

import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import Image from 'next/image';
import { AlertTriangle, Bot, Check, LayoutDashboard, type LucideIcon } from 'lucide-react';
import { remap } from '@/hooks/useScrollProgress';

/* Fragmentation, for the business reader. Six familiar systems each name the
   same thing differently, and the tools downstream (a dashboard, an agent)
   each pull from whichever few systems someone wired up, at varying strength.
   The stage loops between two states while on screen:
     Today    - tiles askew, hand-built links between systems, and consumers
                fed by a partial, uneven set of direct pulls.
     With MTN - systems squared up in a column. Consumers still pull data
                straight from the sources (solid), now the right ones, evenly.
                MTN FieldMap sits off the data path and only guides (dashed):
                it reads metadata from the systems and tells consumers where
                to look.
   All positions are % of the stage. Wide screens flow left to right; phones
   run the same picture top to bottom, with lighter tiles. */

interface Pt {
  x: number;
  y: number;
}

interface System {
  name: string;
  initials: string;
  term: string;
  tint: string;
}

const SYSTEMS: System[] = [
  { name: 'Salesforce', initials: 'SF', term: 'Account', tint: '#4A6FA5' },
  { name: 'NetSuite', initials: 'NS', term: 'Customer', tint: '#5B7F6E' },
  { name: 'HubSpot', initials: 'HS', term: 'Company', tint: '#B0704A' },
  { name: 'Snowflake', initials: 'SN', term: 'dim_client', tint: '#4F8AA8' },
  { name: 'Zendesk', initials: 'ZD', term: 'Organization', tint: '#6E6A9E' },
  { name: 'QuickBooks', initials: 'QB', term: 'Customer:Job', tint: '#7A8A4E' },
];

interface Consumer {
  name: string;
  /** shorter label for phones */
  short: string;
  icon: LucideIcon;
  /** today's direct pulls: [system index, line weight in px] */
  pulls: [number, number][];
  /** with MTN: the right sources, pulled directly, evenly */
  guided: number[];
}

const CONSUMERS: Consumer[] = [
  { name: 'Revenue dashboard', short: 'Dashboard', icon: LayoutDashboard, pulls: [[3, 4.5], [2, 2.25], [0, 1]], guided: [0, 1, 5, 3] },
  { name: 'Support agent', short: 'AI agent', icon: Bot, pulls: [[2, 4], [1, 1], [4, 1.5]], guided: [3, 2, 4] },
];

/* Today's hand-built links between systems. */
const LINKS: [number, number][] = [
  [0, 3],
  [1, 4],
  [2, 5],
  [0, 2],
  [1, 5],
  [3, 4],
  [0, 5],
];

const TILT = [-4, 3, -2.5, 4, 2.5, -3];

interface Layout {
  today: Pt[];
  /** with MTN: systems squared up in a column */
  after: Pt[];
  hub: Pt;
  consumers: Pt[];
}

/* Top-to-bottom order of the column, chosen so each consumer's sources are
   contiguous and its data lines never cross the other's. */
const COLUMN_ORDER = [0, 1, 5, 3, 2, 4];

function column(x: number, top: number, gap: number): Pt[] {
  const pts: Pt[] = [];
  COLUMN_ORDER.forEach((sys, row) => {
    pts[sys] = { x, y: top + row * gap };
  });
  return pts;
}

/* Desktop: systems left, consumers right, MTN FieldMap above the data path. */
const WIDE: Layout = {
  today: [
    { x: 15, y: 18 },
    { x: 50, y: 12 },
    { x: 60, y: 56 },
    { x: 33, y: 86 },
    { x: 11, y: 62 },
    { x: 40, y: 42 },
  ],
  after: column(16, 13, 15),
  hub: { x: 52, y: 13 },
  consumers: [
    { x: 84, y: 36 },
    { x: 84, y: 74 },
  ],
};

/* Phones: the same picture turned on its side. Systems in a 3x2 grid at the
   top, consumers at the bottom, MTN FieldMap in the clear gap between their
   data lines. Grid order keeps each consumer's sources on its own side. */
const COMPACT: Layout = {
  today: [
    { x: 25, y: 9 },
    { x: 71, y: 14 },
    { x: 77, y: 42 },
    { x: 35, y: 51 },
    { x: 20, y: 31 },
    { x: 58, y: 29 },
  ],
  after: [
    { x: 17, y: 10 }, // Salesforce
    { x: 50, y: 10 }, // NetSuite
    { x: 83, y: 23 }, // HubSpot
    { x: 50, y: 23 }, // Snowflake
    { x: 83, y: 10 }, // Zendesk
    { x: 17, y: 23 }, // QuickBooks
  ],
  hub: { x: 50, y: 64 },
  consumers: [
    { x: 22, y: 88 },
    { x: 78, y: 88 },
  ],
};

/* One loop: hold today, resolve, hold MTN, reverse. */
const HOLD_TODAY = 2600;
const RESOLVE = 1700;
const HOLD_MTN = 3400;
const CYCLE = HOLD_TODAY + RESOLVE + HOLD_MTN + RESOLVE;

const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

/** 0 = today, 1 = with MTN, for a time within the cycle. */
function stateAt(ms: number) {
  const c = ms % CYCLE;
  if (c < HOLD_TODAY) return 0;
  if (c < HOLD_TODAY + RESOLVE) return ease((c - HOLD_TODAY) / RESOLVE);
  if (c < HOLD_TODAY + RESOLVE + HOLD_MTN) return 1;
  return 1 - ease((c - HOLD_TODAY - RESOLVE - HOLD_MTN) / RESOLVE);
}

function curve(a: Pt, b: Pt, bend: number) {
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2;
  return `M ${a.x} ${a.y} Q ${mx - (b.y - a.y) * bend} ${my + (b.x - a.x) * bend} ${b.x} ${b.y}`;
}

const lerp = (a: Pt, b: Pt, t: number): Pt => ({ x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t });

/* Phone layout below the sm breakpoint, read without a setState-in-effect. */
const COMPACT_QUERY = '(max-width: 639px)';
function subscribeCompact(cb: () => void) {
  const mq = window.matchMedia(COMPACT_QUERY);
  mq.addEventListener('change', cb);
  return () => mq.removeEventListener('change', cb);
}
const useCompact = () =>
  useSyncExternalStore(
    subscribeCompact,
    () => window.matchMedia(COMPACT_QUERY).matches,
    () => false,
  );

export default function ScatteredSystems() {
  const stageRef = useRef<HTMLDivElement>(null);
  const [p, setP] = useState(0);
  const layout = useCompact() ? COMPACT : WIDE;

  /* Loop while on screen; pause (keeping the clock) when scrolled away. */
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const id = requestAnimationFrame(() => setP(1));
      return () => cancelAnimationFrame(id);
    }

    let frame: number | null = null;
    let elapsed = 0;
    let last = 0;

    const tick = (now: number) => {
      elapsed += now - last;
      last = now;
      setP(stateAt(elapsed));
      frame = requestAnimationFrame(tick);
    };
    const start = () => {
      if (frame !== null) return;
      frame = requestAnimationFrame((now) => {
        last = now;
        tick(now);
      });
    };
    const stop = () => {
      if (frame !== null) cancelAnimationFrame(frame);
      frame = null;
    };

    const io = new IntersectionObserver((entries) => (entries[0].isIntersecting ? start() : stop()), {
      threshold: 0.5,
    });
    io.observe(el);
    return () => {
      io.disconnect();
      stop();
    };
  }, []);

  const tangle = 1 - remap(p, 0, 0.5);
  const guided = remap(p, 0.45, 1);
  const hub = remap(p, 0.3, 0.9);
  const resolved = p > 0.5;

  const pos = SYSTEMS.map((_, i) => lerp(layout.today[i], layout.after[i], p));
  const rot = TILT.map((r) => r * (1 - p));
  const out = layout.consumers;

  return (
    <div>
      {/* state indicator */}
      <div className="flex justify-center mb-5" aria-hidden="true">
        <div className="relative inline-grid grid-cols-2 rounded-full bg-[var(--ms-surface)] border border-[var(--ms-border)] p-1 text-sm font-medium">
          <span
            className="absolute top-1 bottom-1 left-1 w-[calc(50%_-_4px)] rounded-full bg-white transition-transform duration-500 ease-out"
            style={{
              transform: resolved ? 'translateX(100%)' : 'none',
              boxShadow: 'var(--ms-shadow-card-sm)',
            }}
          />
          <span
            className={`relative z-10 px-5 py-1.5 text-center transition-colors duration-500 ${
              resolved ? 'text-[var(--ms-muted)]' : 'text-[var(--ms-heading)]'
            }`}
          >
            Today
          </span>
          <span
            className={`relative z-10 px-5 py-1.5 text-center transition-colors duration-500 ${
              resolved ? 'text-[var(--ms-primary)]' : 'text-[var(--ms-muted)]'
            }`}
          >
            With MTN
          </span>
        </div>
      </div>

      <div
        ref={stageRef}
        className="relative w-full aspect-[3/4] sm:aspect-[4/3] md:aspect-[16/9] rounded-2xl border border-[var(--ms-border)] overflow-hidden"
        style={{
          backgroundColor: 'var(--ms-surface)',
          backgroundImage: 'radial-gradient(rgba(26,26,46,0.07) 1px, transparent 1px)',
          backgroundSize: '18px 18px',
        }}
        role="img"
        aria-label="Six systems, Salesforce, NetSuite, HubSpot, Snowflake, Zendesk and QuickBooks, each call a customer something different. Today a revenue dashboard and a support agent each pull directly from a few of them, unevenly, and see only part of the picture. With MTN, MTN FieldMap reads each system's metadata and guides the dashboard and the agent to the right sources. They still pull data directly from those systems, never through MTN."
      >
        {/* connectors */}
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full" aria-hidden="true">
          {/* today: hand-built links between systems */}
          {LINKS.map(([a, b], i) => (
            <path
              key={`l${i}`}
              d={curve(pos[a], pos[b], i % 2 ? 0.22 : -0.22)}
              fill="none"
              stroke="#8A8A9A"
              strokeWidth={1}
              strokeOpacity={0.5}
              vectorEffect="non-scaling-stroke"
              opacity={tangle}
            />
          ))}
          {/* today: consumers pulling directly, unevenly */}
          {CONSUMERS.map((c, ci) =>
            c.pulls.map(([s, w], k) => (
              <path
                key={`p${ci}-${k}`}
                d={curve(pos[s], out[ci], (k % 2 ? 0.18 : -0.14) * (ci ? -1 : 1))}
                fill="none"
                stroke="#4A4A5A"
                strokeWidth={w}
                strokeOpacity={0.5}
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
                opacity={tangle}
              />
            )),
          )}
          {/* with MTN: data still comes straight from the sources, now the right ones */}
          {CONSUMERS.map((c, ci) =>
            c.guided.map((sys) => (
              <line
                key={`d${ci}-${sys}`}
                x1={pos[sys].x}
                y1={pos[sys].y}
                x2={out[ci].x}
                y2={out[ci].y}
                stroke="#4A4A5A"
                strokeWidth={2}
                strokeOpacity={0.55}
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
                opacity={guided}
              />
            )),
          )}
          {/* with MTN: guidance only. Reads metadata from each system... */}
          {pos.map((q, i) => (
            <line
              key={`m${i}`}
              x1={layout.hub.x}
              y1={layout.hub.y}
              x2={q.x}
              y2={q.y}
              stroke="var(--ms-primary)"
              strokeWidth={1}
              strokeOpacity={0.45}
              strokeDasharray="2 4"
              vectorEffect="non-scaling-stroke"
              opacity={guided}
            />
          ))}
          {/* ...and tells each consumer where to look */}
          {out.map((c, i) => (
            <line
              key={`g${i}`}
              x1={layout.hub.x}
              y1={layout.hub.y}
              x2={c.x}
              y2={c.y}
              stroke="var(--ms-primary)"
              strokeWidth={2}
              strokeDasharray="6 5"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              opacity={guided}
            />
          ))}
        </svg>

        {/* hub */}
        <div
          className="absolute w-[84px] sm:w-[150px] md:w-[176px] rounded-xl bg-white border border-[var(--ms-primary)] px-1.5 py-2 sm:px-2.5 sm:py-2.5 md:px-4 md:py-3.5 text-center"
          style={{
            left: `${layout.hub.x}%`,
            top: `${layout.hub.y}%`,
            opacity: hub,
            transform: `translate(-50%, -50%) scale(${0.9 + 0.1 * hub})`,
            boxShadow: '0 0 0 6px rgba(74,111,165,0.08), var(--ms-shadow-card)',
          }}
          aria-hidden="true"
        >
          <div className="flex items-center justify-center gap-1.5">
            <Image src="/images/MTN_ekg.svg" alt="" width={16} height={16} className="hidden sm:block h-3.5 w-auto" />
            <span className="text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-wider font-semibold text-[var(--ms-primary)]">
              MTN FieldMap
            </span>
          </div>
          <div className="font-display text-base sm:text-lg md:text-2xl text-[var(--ms-heading)] leading-tight mt-0.5 sm:mt-1">Customer</div>
          <div className="hidden sm:block text-[9.5px] md:text-[11px] text-[var(--ms-body-light)] mt-0.5">where each source keeps it</div>
        </div>

        {/* systems */}
        {SYSTEMS.map((s, i) => (
          <div
            key={s.name}
            aria-hidden="true"
            className="absolute w-[100px] sm:w-[150px] md:w-[172px] rounded-lg sm:rounded-xl bg-white border px-1 py-1.5 sm:px-2.5 sm:py-2.5 flex items-center gap-1 sm:gap-2.5"
            style={{
              left: `${pos[i].x}%`,
              top: `${pos[i].y}%`,
              transform: `translate(-50%, -50%) rotate(${rot[i]}deg)`,
              borderColor: resolved ? 'rgba(74,111,165,0.45)' : 'var(--ms-border)',
              boxShadow: 'var(--ms-shadow-card-sm)',
              transition: 'border-color 400ms ease',
            }}
          >
            <span
              className="shrink-0 w-4 h-4 sm:w-8 sm:h-8 rounded sm:rounded-lg flex items-center justify-center text-[6.5px] sm:text-[11px] font-bold text-white sm:tracking-wide"
              style={{ backgroundColor: s.tint }}
            >
              {s.initials}
            </span>
            <div className="min-w-0 text-left">
              <div className="hidden sm:block text-[13px] font-semibold text-[var(--ms-heading)] leading-tight truncate">
                {s.name}
              </div>
              <div className="flex items-center gap-1 font-mono text-[9px] sm:text-[11px] text-[var(--ms-heading)] sm:text-[var(--ms-body-light)] leading-tight sm:mt-0.5">
                {resolved && <Check className="hidden sm:block w-3 h-3 shrink-0 text-[var(--ms-primary)]" strokeWidth={2.5} />}
                <span className="truncate">{s.term}</span>
              </div>
            </div>
          </div>
        ))}

        {/* consumers */}
        {CONSUMERS.map((c, i) => {
          const Icon = c.icon;
          return (
            <div
              key={c.name}
              aria-hidden="true"
              className="absolute w-[124px] sm:w-[164px] md:w-[188px] rounded-xl bg-white border-2 px-2.5 py-2 sm:px-3 sm:py-2.5"
              style={{
                left: `${out[i].x}%`,
                top: `${out[i].y}%`,
                transform: 'translate(-50%, -50%)',
                borderColor: resolved ? 'var(--ms-primary)' : 'var(--ms-border)',
                boxShadow: 'var(--ms-shadow-card)',
                transition: 'border-color 400ms ease',
              }}
            >
              <div className="flex items-center gap-2">
                <Icon className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 text-[var(--ms-heading)]" strokeWidth={1.75} />
                <span className="text-[12px] sm:text-[13px] font-semibold text-[var(--ms-heading)] leading-tight">
                  <span className="sm:hidden">{c.short}</span>
                  <span className="hidden sm:inline">{c.name}</span>
                </span>
              </div>
              <div
                className="mt-1.5 flex items-center gap-1 text-[9.5px] sm:text-[11px] font-medium leading-tight"
                style={{ color: resolved ? 'var(--ms-primary)' : '#9A6A12' }}
              >
                {resolved ? (
                  <Check className="w-3 h-3 shrink-0" strokeWidth={2.5} />
                ) : (
                  <AlertTriangle className="w-3 h-3 shrink-0" strokeWidth={2.25} />
                )}
                <span className="sm:hidden">{resolved ? 'Guided' : `${c.pulls.length} of 6 sources`}</span>
                <span className="hidden sm:inline">
                  {resolved ? `Guided · ${c.guided.length} right sources` : `Partial · ${c.pulls.length} of 6 sources`}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* legend */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs md:text-sm text-[var(--ms-body)]" aria-hidden="true">
        <span className="inline-flex items-center gap-2">
          <svg width="28" height="6" viewBox="0 0 28 6">
            <line x1="1" y1="3" x2="27" y2="3" stroke="#4A4A5A" strokeOpacity="0.55" strokeWidth="2" strokeLinecap="round" />
          </svg>
          Data, pulled straight from the source
        </span>
        <span className="inline-flex items-center gap-2">
          <svg width="28" height="6" viewBox="0 0 28 6">
            <line x1="1" y1="3" x2="27" y2="3" stroke="var(--ms-primary)" strokeWidth="2" strokeDasharray="6 5" strokeLinecap="round" />
          </svg>
          MTN guidance: where to look, from metadata only
        </span>
      </div>
    </div>
  );
}
