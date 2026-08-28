import Image from 'next/image';

interface Logo {
  src: string;
  alt: string;
  /** intrinsic dimensions, so Next can reserve the right space */
  w: number;
  h: number;
}

interface Validation {
  logos: Logo[];
  name: string;
  org: string;
  detail: string;
}

const VALIDATIONS: Validation[] = [
  {
    logos: [
      { src: '/images/logos/nih.png', alt: 'National Institutes of Health', w: 356, h: 200 },
      { src: '/images/logos/nlm.svg', alt: 'National Library of Medicine', w: 708, h: 722 },
    ],
    name: 'SBIR Fast-Track',
    org: 'National Library of Medicine',
    detail: '$2.2M. Funded on first submission.',
  },
  {
    logos: [
      { src: '/images/logos/a2-collective.png', alt: 'a2 Collective', w: 267, h: 200 },
    ],
    name: 'a2 Collective Award',
    org: 'National Institute on Aging',
    detail: 'Won to build time-series models.',
  },
  {
    logos: [
      { src: '/images/logos/xtech.png', alt: 'Army xTech', w: 500, h: 200 },
      { src: '/images/logos/us-army.png', alt: 'U.S. Army', w: 222, h: 200 },
    ],
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
          <div className="h-12 flex items-center gap-4 mb-5">
            {v.logos.map((l) => (
              <Image
                key={l.src}
                src={l.src}
                alt={l.alt}
                width={l.w}
                height={l.h}
                className="h-10 w-auto object-contain"
              />
            ))}
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
