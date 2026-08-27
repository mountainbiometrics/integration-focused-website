import Image from 'next/image';

interface Validation {
  /** Short mark shown when no logo file is supplied yet. */
  mark: string;
  /** Drop a file in /public/images/logos and set this to swap in real artwork. */
  logoSrc?: string;
  name: string;
  org: string;
  detail: string;
}

const VALIDATIONS: Validation[] = [
  {
    mark: 'NIH',
    name: 'SBIR Fast-Track',
    org: 'National Library of Medicine',
    detail: '$2.2M. Funded on first submission.',
  },
  {
    mark: 'a²',
    name: 'a2 Collective Award',
    org: 'National Institute on Aging',
    detail: 'Won to build time-series models.',
  },
  {
    mark: 'xTech',
    name: 'AI Grand Challenge',
    org: 'U.S. Army',
    detail: 'Finalist. Tested on Army data.',
  },
];

export default function PeerReviewedValidation() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {VALIDATIONS.map((v) => (
        <div
          key={v.name}
          className="flex flex-col p-6 rounded-2xl bg-white border border-[var(--ms-border)]"
          style={{ boxShadow: 'var(--ms-shadow-card-sm)' }}
        >
          {/* logo slot */}
          <div className="h-14 flex items-center mb-5">
            {v.logoSrc ? (
              <Image
                src={v.logoSrc}
                alt={`${v.org} ${v.name}`}
                width={160}
                height={56}
                className="h-12 w-auto object-contain"
              />
            ) : (
              <span
                className="inline-flex items-center justify-center px-4 h-12 rounded-lg border-2 border-[var(--ms-primary)] font-display text-2xl text-[var(--ms-primary)]"
                aria-hidden="true"
              >
                {v.mark}
              </span>
            )}
          </div>

          <div className="font-display text-[var(--ms-heading)] text-xl leading-tight">
            {v.name}
          </div>
          <div className="text-sm text-[var(--ms-body-light)] mt-1">{v.org}</div>
          <p className="text-base text-[var(--ms-body)] mt-3">{v.detail}</p>
        </div>
      ))}
    </div>
  );
}
