import { FileCode2, Link2, MessageCircleQuestion, Signpost } from 'lucide-react';

/* Four trust claims. One icon each, matching the icon-in-circle pattern used
   elsewhere on the page. The claims are short enough not to need diagrams. */

const PILLARS = [
  {
    icon: FileCode2,
    title: 'Schema-first',
    line: 'We work from schemas and docs. No PHI to begin.',
  },
  {
    icon: Link2,
    title: 'Evidence-backed',
    line: 'Every claim names what it rests on, including a person’s answer.',
  },
  {
    icon: MessageCircleQuestion,
    title: 'Honest about gaps',
    line: 'When it can’t answer, it says so and names what is missing.',
  },
  {
    icon: Signpost,
    title: 'Out of the data path',
    line: 'Guide returns routes. Running the query stays with you.',
  },
];

export default function TrustPillars() {
  return (
    <>
      {PILLARS.map(({ icon: Icon, title, line }) => (
        <div
          key={title}
          className="h-full p-6 rounded-2xl bg-white border-l-[3px] border-l-[var(--ms-accent)] text-left"
          style={{ boxShadow: 'var(--ms-shadow-card-sm)' }}
        >
          <div className="w-14 h-14 rounded-full bg-[rgba(172,31,45,0.08)] flex items-center justify-center mb-4">
            <Icon className="w-7 h-7 text-[var(--ms-accent)]" strokeWidth={1.5} />
          </div>
          <div className="font-display text-[var(--ms-heading)] text-xl mb-2">{title}</div>
          <p className="text-[var(--ms-body)] text-base leading-relaxed">{line}</p>
        </div>
      ))}
    </>
  );
}
