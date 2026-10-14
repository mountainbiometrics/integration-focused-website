import { Clock, ShieldCheck } from 'lucide-react';
import TrustVisual from '@/components/content/TrustVisual';
import TimeVisual from '@/components/content/TimeVisual';

/* The two differentiators from the message map, side by side. Trust carries
   the record-free read; Time carries the event/recorded distinction. */

const DIFFERENTIATORS = [
  {
    icon: ShieldCheck,
    label: 'Trust',
    title: 'Map the meaning without exposing the records',
    body: 'MTN Guide reads schemas and docs, not your records. Every mapping shows its evidence.',
    Visual: TrustVisual,
  },
  {
    icon: Clock,
    label: 'Time',
    title: 'Meaning and time, preserved',
    body: 'Data arrives late. An AI that doesn’t know when reports good news that isn’t real.',
    Visual: TimeVisual,
  },
];

export default function TrustAndTime() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {DIFFERENTIATORS.map(({ icon: Icon, label, title, body, Visual }) => (
        <div
          key={label}
          className="h-full flex flex-col rounded-2xl bg-white border-l-[3px] border-l-[var(--ms-accent)] p-6 md:p-8"
          style={{ boxShadow: 'var(--ms-shadow-card-sm)' }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-[rgba(172,31,45,0.08)] flex items-center justify-center shrink-0">
              <Icon className="w-6 h-6 text-[var(--ms-accent)]" strokeWidth={1.5} />
            </div>
            <span className="text-xs uppercase tracking-wide font-semibold text-[var(--ms-accent)]">
              {label}
            </span>
          </div>
          <div className="font-display text-[var(--ms-heading)] text-xl md:text-2xl mb-3 leading-tight">
            {title}
          </div>
          <p className="text-base text-[var(--ms-body)] leading-relaxed mb-5">{body}</p>
          <div className="mt-auto">
            <Visual />
          </div>
        </div>
      ))}
    </div>
  );
}
