import { Unlink } from 'lucide-react';

interface TimelineEvent {
  n: number;
  label: string;
  note?: string;
  /** horizontal nudge, in px — records land where they land, not in a tidy stack */
  offset?: number;
}

/* One identity per event: number + colour travel together, so both the split
   across systems and the reordering read at a glance. */
const EVENT_COLORS: Record<number, string> = {
  1: 'var(--ms-accent)',
  2: 'var(--ms-primary)',
  3: 'var(--ms-body-light)',
};

const HAPPENED: TimelineEvent[] = [
  { n: 1, label: 'Service delivered' },
  { n: 2, label: 'Claim submitted' },
  { n: 3, label: 'Claim denied' },
];

const SYSTEM_A: TimelineEvent[] = [
  { n: 1, label: 'Service delivered', note: 'coded 9 days later' },
];

const SYSTEM_B: TimelineEvent[] = [
  { n: 3, label: 'Claim denied', note: 'posted from the payer remit', offset: 0 },
  { n: 2, label: 'Claim submitted', note: 'backfilled from the clearinghouse', offset: 34 },
];

function Badge({ n }: { n: number }) {
  return (
    <span
      className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white text-sm font-semibold"
      style={{ backgroundColor: EVENT_COLORS[n] }}
      aria-hidden="true"
    >
      {n}
    </span>
  );
}

function EventPill({ e, faded = false }: { e: TimelineEvent; faded?: boolean }) {
  return (
    <div
      className={`flex items-center gap-3 rounded-xl border px-4 py-3 ${
        faded ? 'bg-[var(--ms-surface)] border-[var(--ms-border)]' : 'bg-white border-[var(--ms-border)]'
      }`}
      style={e.offset ? { marginLeft: e.offset } : undefined}
    >
      <Badge n={e.n} />
      <span className="whitespace-nowrap">
        <span className="block text-base text-[var(--ms-heading)] leading-tight">{e.label}</span>
        {e.note && (
          <span className="block text-xs text-[var(--ms-body-light)] mt-0.5">{e.note}</span>
        )}
      </span>
    </div>
  );
}

function Chevron() {
  return (
    <svg
      className="w-4 h-4 flex-shrink-0 text-[var(--ms-muted)]"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}

function SystemBox({ name, events }: { name: string; events: TimelineEvent[] }) {
  return (
    <div className="rounded-xl border border-dashed border-[var(--ms-border)] bg-[var(--ms-surface-warm)] p-4">
      <div className="text-xs font-semibold text-[var(--ms-body-light)] mb-3">{name}</div>
      <div className="flex flex-col items-start gap-2">
        {events.map((e) => (
          <EventPill key={`${name}-${e.n}`} e={e} faded />
        ))}
      </div>
    </div>
  );
}

export default function TimelineShuffle() {
  return (
    <figure className="m-0">
      <div
        className="rounded-2xl bg-white border border-[var(--ms-border)] p-6 md:p-8 overflow-x-auto"
        style={{ boxShadow: 'var(--ms-shadow-card-sm)' }}
      >
        {/* the truth: one sequence */}
        <div className="text-xs uppercase tracking-wide font-semibold text-[var(--ms-body-light)] mb-4">
          What happened
        </div>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-3">
          {HAPPENED.map((e, i) => (
            <div key={e.n} className="flex items-center gap-3">
              <EventPill e={e} />
              {i < HAPPENED.length - 1 && <Chevron />}
            </div>
          ))}
        </div>

        <div className="my-6 border-t border-dashed border-[var(--ms-border)]" />

        {/* the reality: split across systems, out of order, never joined */}
        <div className="text-xs uppercase tracking-wide font-semibold text-[var(--ms-body-light)] mb-4">
          What your systems show
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-0 items-stretch">
          <SystemBox name="Clinical record" events={SYSTEM_A} />

          <div className="flex md:flex-col items-center justify-center gap-3 md:px-5">
            <div className="hidden md:block w-px flex-1 border-l border-dashed border-[var(--ms-border)]" />
            <span className="inline-flex items-center gap-1.5 whitespace-nowrap text-xs text-[var(--ms-accent)]">
              <Unlink className="w-3.5 h-3.5" strokeWidth={2} aria-hidden="true" />
              no shared key
            </span>
            <div className="hidden md:block w-px flex-1 border-l border-dashed border-[var(--ms-border)]" />
          </div>

          <SystemBox name="Billing system" events={SYSTEM_B} />
        </div>
      </div>

      <figcaption className="text-center text-base text-[var(--ms-body)] mt-4">
        Same three events, split across two systems, and neither in the order
        things happened.{' '}
        <span className="text-[var(--ms-body-light)]">
          No one view has the whole story, and nothing says how to join them.
        </span>
      </figcaption>
    </figure>
  );
}
