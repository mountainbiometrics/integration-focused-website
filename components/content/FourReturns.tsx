import { Gauge, PiggyBank, Plug, TrendingUp } from 'lucide-react';

/* The four returns on AI investment from the message map. Deliberately no
   figures: each line says what changes, not by how much. */

const RETURNS = [
  {
    icon: TrendingUp,
    title: 'Faster paths to revenue',
    line: 'Find the information behind a new service, price, or model without months of reconciliation first.',
  },
  {
    icon: Gauge,
    title: 'Faster, better-informed decisions',
    line: 'Act on one answer with its evidence attached, instead of waiting on conflicting reports.',
  },
  {
    icon: PiggyBank,
    title: 'Better expense management',
    line: 'Less time on manual mapping, and on the maintenance that follows every system change.',
  },
  {
    icon: Plug,
    title: 'Simpler integrations',
    line: 'Each new system is mapped against what FieldMap already holds, so it costs less than the last.',
  },
];

export default function FourReturns() {
  return (
    <>
      {RETURNS.map(({ icon: Icon, title, line }) => (
        <div
          key={title}
          className="h-full p-6 rounded-2xl bg-white border border-[var(--ms-border)] text-left"
          style={{ boxShadow: 'var(--ms-shadow-card-sm)' }}
        >
          <div className="w-12 h-12 rounded-full bg-[rgba(74,111,165,0.12)] flex items-center justify-center mb-4">
            <Icon className="w-6 h-6 text-[var(--ms-primary)]" strokeWidth={1.5} />
          </div>
          <div className="font-display text-[var(--ms-heading)] text-xl mb-2 leading-tight">{title}</div>
          <p className="text-[var(--ms-body)] text-base leading-relaxed">{line}</p>
        </div>
      ))}
    </>
  );
}
