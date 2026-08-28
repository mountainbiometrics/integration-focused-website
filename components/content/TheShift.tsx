/* Why now: understanding data used to require expensive humans, and then it
   didn't. The turn is the point, so it gets the accent. */

const ERAS = [
  {
    span: '1985 – 2025',
    title: 'Read by humans',
    body: 'Understanding a data estate meant hiring people to read it, one system at a time. Only large enterprises could afford the climb.',
    tone: 'muted' as const,
  },
  {
    span: 'Late 2025',
    title: 'Coding agents became trustworthy',
    body: 'Machines got good enough to read structure and hold their reasoning to evidence.',
    tone: 'accent' as const,
  },
  {
    span: '2026 →',
    title: 'Read by machines',
    body: 'The read now takes hours instead of quarters, which puts a trusted foundation within reach of operators who were priced out of one.',
    tone: 'primary' as const,
  },
];

export default function TheShift() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {ERAS.map((e) => {
        const color =
          e.tone === 'accent'
            ? 'var(--ms-accent)'
            : e.tone === 'primary'
              ? 'var(--ms-primary)'
              : 'var(--ms-muted)';
        return (
          <div
            key={e.span}
            className="h-full flex flex-col rounded-2xl bg-white border border-[var(--ms-border)] p-6"
            style={{ boxShadow: 'var(--ms-shadow-card-sm)' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="h-2.5 w-2.5 rounded-full shrink-0" style={{ backgroundColor: color }} />
              <span
                className="text-xs uppercase tracking-wide font-semibold tabular-nums"
                style={{ color }}
              >
                {e.span}
              </span>
            </div>
            <div className="font-display text-[var(--ms-heading)] text-xl mb-2 leading-tight">
              {e.title}
            </div>
            <p className="text-base text-[var(--ms-body)] leading-relaxed">{e.body}</p>
          </div>
        );
      })}
    </div>
  );
}
