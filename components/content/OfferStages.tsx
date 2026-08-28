/* The shape of the engagement, in three stages. Deliberately no figures. */

const STAGES = [
  {
    n: '1',
    name: 'The Read',
    when: 'Hours',
    body: 'Your systems mapped. What is there, and what is possible.',
  },
  {
    n: '2',
    name: 'The Number',
    when: 'Weeks',
    body: 'One answer everyone trusts, live and traceable, in production.',
  },
  {
    n: '3',
    name: 'The Year',
    when: 'Ongoing',
    body: 'It stays true as systems change and acquisitions land.',
  },
];

export default function OfferStages() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {STAGES.map((s) => (
        <div
          key={s.name}
          className="h-full flex flex-col rounded-2xl bg-white border-l-[3px] border-l-[var(--ms-accent)] p-6"
          style={{ boxShadow: 'var(--ms-shadow-card-sm)' }}
        >
          <div className="flex items-baseline gap-3 mb-3">
            <span className="font-display text-3xl text-[var(--ms-accent)] leading-none">
              {s.n}
            </span>
            <span className="font-display text-[var(--ms-heading)] text-xl">
              {s.name}
            </span>
          </div>
          <div className="text-xs uppercase tracking-wide font-semibold text-[var(--ms-body-light)] mb-3">
            {s.when}
          </div>
          <p className="text-base text-[var(--ms-body)] leading-relaxed">
            {s.body}
          </p>
        </div>
      ))}
    </div>
  );
}
