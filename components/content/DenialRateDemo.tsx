'use client';

import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { Check, Clock, Database, Loader2, Plug, RotateCcw, UserCheck } from 'lucide-react';

/* A simplified side-by-side demo: the same request to an AI agent, with and
   without MTN Guide. The left side fails quietly and confidently; the red
   annotations sit outside its window, as a reviewer's marks rather than part
   of the simulated UI. Plays once when scrolled into view, with a replay.

   Adapted (much simplified) from the Guide Workbench cardboard demo. */

/* Annotation red, deliberately distinct from the brand accent so failure
   marks never read as CTAs. */
const FLAG = '#D92D20';

const PROMPT = 'Chart our monthly denial rate for each clinic.';

/* Timeline, in ms from start. A block is visible once t >= at; a tool block
   resolves at `done`. */
const T = {
  promptDone: 900,
  leftSearch: 1300,
  leftSearchDone: 2000,
  leftChart: 2500,
  leftConclusion: 3400,
  rightConcept: 1300,
  rightConceptDone: 2500,
  rightReview: 3000,
  rightApproved: 4400,
  rightChart: 4900,
  rightFooter: 5700,
  flag1: 6300,
  flag2: 6900,
  flag3: 7500,
  end: 7600,
};

const TICK = 100;

interface Bar {
  site: string;
  value: number;
}

/* Left: September by service month, athena flags counted as denials. */
const LEFT_BARS: Bar[] = [
  { site: 'Boise', value: 4.1 },
  { site: 'Denver', value: 3.8 },
  { site: 'Ogden', value: 11.2 },
  { site: 'Provo', value: 10.6 },
  { site: 'Reno', value: 4.4 },
];

/* Right: August, final denials only, by remit date. */
const RIGHT_BARS: Bar[] = [
  { site: 'Boise', value: 8.2 },
  { site: 'Denver', value: 7.6 },
  { site: 'Ogden', value: 7.9 },
  { site: 'Provo', value: 7.1 },
  { site: 'Reno', value: 8.8 },
];

type Confidence = { kind: 'high' } | { kind: 'review'; score: string };

const CONCEPTS: { concept: string; route: string; confidence: Confidence }[] = [
  { concept: 'Site', route: 'dept.site_id · practice_id', confidence: { kind: 'high' } },
  { concept: 'Denial date', route: 'remit_835.adj_date', confidence: { kind: 'high' } },
  { concept: 'Denied claim', route: 'athena.deny_flag', confidence: { kind: 'review', score: '0.74' } },
];

const FLAGS = [
  { n: 1, at: T.flag1, title: 'Two meanings of “denied”', body: 'One system counts claims later paid on resubmission.' },
  { n: 2, at: T.flag2, title: 'September isn’t over', body: 'Denials arrive 30–45 days late, so it looks clean.' },
  { n: 3, at: T.flag3, title: 'Wrong, and confident', body: 'Every site is really 7–9%.' },
];

/* ---------- small building blocks ---------- */

function Reveal({ show, children }: { show: boolean; children: ReactNode }) {
  return (
    <div
      className="transition-all duration-500 ease-out"
      style={{
        opacity: show ? 1 : 0,
        transform: show ? 'none' : 'translateY(8px)',
        display: show ? undefined : 'none',
      }}
    >
      {children}
    </div>
  );
}

function Label({ children, guide = false }: { children: ReactNode; guide?: boolean }) {
  return (
    <div
      className={`text-[10px] uppercase tracking-wider font-semibold mb-1.5 ${
        guide ? 'text-[var(--ms-primary)]' : 'text-[var(--ms-body-light)]'
      }`}
    >
      {children}
    </div>
  );
}

function ToolBlock({
  name,
  args,
  done,
  guide = false,
  children,
}: {
  name: string;
  args: string;
  done: boolean;
  guide?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="rounded-md border border-[var(--ms-border)] bg-white overflow-hidden">
      <div className="flex items-center gap-2 px-3 py-1.5 bg-[var(--ms-surface)] border-b border-[var(--ms-border)] font-mono text-[11px]">
        {done ? (
          <Check className="w-3.5 h-3.5 text-[var(--ms-primary)] shrink-0" strokeWidth={2.5} />
        ) : (
          <Loader2 className="w-3.5 h-3.5 text-[var(--ms-muted)] animate-spin shrink-0" />
        )}
        <span className={guide ? 'text-[var(--ms-primary)] font-semibold' : 'text-[var(--ms-heading)] font-semibold'}>
          {name}
        </span>
        <span className="text-[var(--ms-muted)] truncate">{args}</span>
      </div>
      {done && <div className="px-3 py-2 text-[12px] leading-relaxed">{children}</div>}
    </div>
  );
}

function BarChart({
  title,
  bars,
  max,
  color,
  note,
}: {
  title: string;
  bars: Bar[];
  max: number;
  color: string;
  note?: string;
}) {
  return (
    <div className="rounded-md border border-[var(--ms-border)] bg-white px-3 py-3">
      <div className="text-[12px] font-semibold text-[var(--ms-heading)] mb-2.5">{title}</div>
      <div className="space-y-1.5">
        {bars.map((b) => (
          <div key={b.site} className="flex items-center gap-2 text-[11px]">
            <span className="w-12 shrink-0 text-[var(--ms-body)]">{b.site}</span>
            <div className="flex-1 h-3.5 rounded-sm bg-[var(--ms-surface)]">
              <div
                className="h-full rounded-sm transition-[width] duration-700 ease-out"
                style={{ width: `${(b.value / max) * 100}%`, backgroundColor: color }}
              />
            </div>
            <span className="w-9 text-right tabular-nums text-[var(--ms-heading)]">{b.value.toFixed(1)}%</span>
          </div>
        ))}
      </div>
      {note && <div className="mt-2.5 text-[11px] text-[var(--ms-body-light)] leading-snug">{note}</div>}
    </div>
  );
}

function ConfidenceChip({ c }: { c: Confidence }) {
  if (c.kind === 'high') {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-[rgba(74,111,165,0.10)] text-[var(--ms-primary)] text-[10px] font-semibold px-2 py-0.5 whitespace-nowrap">
        <Check className="w-3 h-3" strokeWidth={2.5} />
        High
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-dashed border-[#C5891F] text-[#9A6A12] text-[10px] font-semibold px-2 py-0.5 whitespace-nowrap">
      <Clock className="w-3 h-3" strokeWidth={2.5} />
      Review {c.score}
    </span>
  );
}

function ReviewCard({ approved }: { approved: boolean }) {
  return (
    <div
      className={`rounded-md border px-3 py-2.5 transition-colors duration-500 ${
        approved ? 'border-[var(--ms-primary)] bg-[rgba(74,111,165,0.05)]' : 'border-dashed border-[#C5891F] bg-[rgba(197,137,31,0.06)]'
      }`}
    >
      <div className="text-[10px] uppercase tracking-wider font-semibold mb-1" style={{ color: approved ? 'var(--ms-primary)' : '#9A6A12' }}>
        {approved ? 'Reviewed' : 'Needs your review'}
      </div>
      <div className="text-[13px] text-[var(--ms-heading)] leading-snug">
        Don’t count denials later paid on resubmission?
      </div>
      <div className="mt-2 flex items-center gap-2">
        {approved ? (
          <span className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[var(--ms-primary)]">
            <UserCheck className="w-4 h-4" />
            Approved by analyst
          </span>
        ) : (
          <>
            <span className="rounded-md bg-[var(--ms-heading)] text-white text-[11px] font-medium px-2.5 py-1">Approve</span>
            <span className="rounded-md border border-[var(--ms-border)] text-[var(--ms-body)] text-[11px] font-medium px-2.5 py-1">Override</span>
          </>
        )}
      </div>
    </div>
  );
}

/* Wraps a block on the left with an outside-the-window reviewer mark: a red
   outline on the block and a numbered badge hanging off the window edge. */
function Flagged({ n, on, children }: { n: number; on: boolean; children: ReactNode }) {
  return (
    <div className="relative">
      {children}
      <div
        className="pointer-events-none absolute -inset-1.5 rounded-lg border-2 transition-opacity duration-300"
        style={{ borderColor: FLAG, opacity: on ? 1 : 0 }}
      />
      <div
        className="pointer-events-none absolute top-1/2 -translate-y-1/2 -left-[46px] flex items-center transition-opacity duration-300"
        style={{ opacity: on ? 1 : 0 }}
        aria-hidden="true"
      >
        <span
          className="w-6 h-6 rounded-full text-white text-xs font-bold flex items-center justify-center"
          style={{ backgroundColor: FLAG }}
        >
          {n}
        </span>
        <span className="w-[16px] h-[2px]" style={{ backgroundColor: FLAG }} />
      </div>
    </div>
  );
}

function Window({
  guide,
  t,
  children,
}: {
  guide: boolean;
  t: number;
  children: ReactNode;
}) {
  const typed = Math.min(PROMPT.length, Math.floor((t / T.promptDone) * PROMPT.length));
  return (
    <div
      className={`rounded-xl bg-white flex flex-col ${guide ? 'border-2 border-[var(--ms-primary)]' : 'border border-[var(--ms-border)]'}`}
      style={{ boxShadow: 'var(--ms-shadow-card-sm)' }}
    >
      <div className="flex items-center justify-between gap-3 px-4 h-11 border-b border-[var(--ms-border)]">
        <div className="text-sm">
          <span className="font-semibold text-[var(--ms-heading)]">AI agent</span>
          <span className="text-[var(--ms-body-light)]"> · {guide ? 'with MTN Guide' : 'raw database access'}</span>
        </div>
        <span
          className={`inline-flex items-center gap-1.5 text-[11px] font-medium rounded-full px-2.5 py-0.5 ${
            guide ? 'bg-[rgba(74,111,165,0.10)] text-[var(--ms-primary)]' : 'bg-[var(--ms-surface)] text-[var(--ms-body)]'
          }`}
        >
          {guide ? <Plug className="w-3 h-3" /> : <Database className="w-3 h-3" />}
          {guide ? 'MTN Guide · MCP' : 'claims warehouse'}
        </span>
      </div>
      <div className="p-4 space-y-4 text-[13px] text-[var(--ms-body)] leading-relaxed">
        <div>
          <Label>Analyst</Label>
          <div className="rounded-lg bg-[var(--ms-surface)] border border-[var(--ms-border)] px-3 py-2 text-[var(--ms-heading)] min-h-[2.75rem]">
            {PROMPT.slice(0, typed)}
            {typed < PROMPT.length && <span className="inline-block w-[2px] h-3.5 bg-[var(--ms-heading)] align-middle ml-px animate-pulse" />}
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}

/* ---------- the demo ---------- */

export default function DenialRateDemo() {
  const rootRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [t, setT] = useState(-1);

  const play = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setT(T.end);
      return;
    }
    setT(0);
    timerRef.current = setInterval(() => {
      setT((prev) => {
        const next = prev + TICK;
        if (next >= T.end && timerRef.current) {
          clearInterval(timerRef.current);
          timerRef.current = null;
        }
        return Math.min(next, T.end);
      });
    }, TICK);
  }, []);

  /* Start the first time the demo is mostly in view. */
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          play();
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [play]);

  const at = (ms: number) => t >= ms;

  return (
    <div ref={rootRef}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-start">
        {/* Without MTN */}
        <div className="pl-10 md:pl-12">
          <div className="text-xs uppercase tracking-wide font-semibold text-[var(--ms-body-light)] mb-3">
            Without MTN
          </div>
          <Window guide={false} t={Math.max(t, 0)}>
            <Reveal show={at(T.leftSearch)}>
              <Label>Agent</Label>
              <Flagged n={1} on={at(T.flag1)}>
                <ToolBlock name="search_columns" args={'("denied")'} done={at(T.leftSearchDone)}>
                  <span className="font-mono text-[11px]">
                    epic.status = &apos;DENIED&apos;
                    <br />
                    athena.deny_flag = 1
                  </span>
                </ToolBlock>
              </Flagged>
            </Reveal>
            <Reveal show={at(T.leftChart)}>
              <Flagged n={2} on={at(T.flag2)}>
                <BarChart title="Denial rate · September" bars={LEFT_BARS} max={12} color="#9A9AAA" />
              </Flagged>
            </Reveal>
            <Reveal show={at(T.leftConclusion)}>
              <Flagged n={3} on={at(T.flag3)}>
                <p className="m-0 text-[13px] text-[var(--ms-heading)]">
                  Ogden and Provo are 3× higher than the rest. Scheduled monthly.
                </p>
              </Flagged>
            </Reveal>
          </Window>

          {/* Reviewer notes, outside the simulated UI */}
          <ol className="list-none p-0 mt-5 space-y-3">
            {FLAGS.map((f) => (
              <li
                key={f.n}
                className="flex gap-3 transition-opacity duration-300"
                style={{ opacity: at(f.at) ? 1 : 0 }}
                aria-hidden={!at(f.at)}
              >
                <span
                  className="w-6 h-6 shrink-0 rounded-full text-white text-xs font-bold flex items-center justify-center mt-0.5"
                  style={{ backgroundColor: FLAG }}
                >
                  {f.n}
                </span>
                <div className="text-sm leading-snug">
                  <span className="font-semibold" style={{ color: FLAG }}>
                    {f.title}.
                  </span>{' '}
                  <span className="text-[var(--ms-body)]">{f.body}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* With MTN Guide */}
        <div className="pl-10 md:pl-12 lg:pl-0">
          <div className="text-xs uppercase tracking-wide font-semibold text-[var(--ms-primary)] mb-3">
            With MTN Guide
          </div>
          <Window guide t={Math.max(t, 0)}>
            <Reveal show={at(T.rightConcept)}>
              <Label guide>Agent · MTN Guide</Label>
              <ToolBlock guide name="find_concept" args={'("denial rate")'} done={at(T.rightConceptDone)}>
                <div className="space-y-1.5">
                  {CONCEPTS.map((c) => (
                    <div key={c.concept} className="flex items-center justify-between gap-2">
                      <div className="min-w-0">
                        <span className="font-semibold text-[var(--ms-heading)]">{c.concept}</span>
                        <span className="font-mono text-[10.5px] text-[var(--ms-body-light)] ml-2">{c.route}</span>
                      </div>
                      <ConfidenceChip c={c.confidence} />
                    </div>
                  ))}
                </div>
              </ToolBlock>
            </Reveal>
            <Reveal show={at(T.rightReview)}>
              <ReviewCard approved={at(T.rightApproved)} />
            </Reveal>
            <Reveal show={at(T.rightChart)}>
              <BarChart
                title="Denial rate · August (final)"
                bars={RIGHT_BARS}
                max={12}
                color="var(--ms-primary)"
                note="September marked preliminary until denials finish arriving."
              />
            </Reveal>
            <Reveal show={at(T.rightFooter)}>
              <p className="m-0 text-[13px] text-[var(--ms-heading)]">
                All sites 7–9%. Decision saved to FieldMap for next month.
              </p>
            </Reveal>
          </Window>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <button
          type="button"
          onClick={play}
          className="inline-flex items-center gap-2 text-sm font-medium text-[var(--ms-body)] hover:text-[var(--ms-heading)] transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          Replay
        </button>
      </div>
    </div>
  );
}
