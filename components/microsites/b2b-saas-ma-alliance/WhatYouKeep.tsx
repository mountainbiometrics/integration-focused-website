import { Check, Shield } from 'lucide-react';

const ITEMS = [
  {
    label: 'Annotation conventions encoded as your firm’s house style.',
    detail:
      'Versioned artifacts with confidence scores. The next engagement starts pre-loaded with your firm’s accumulated conventions.',
  },
  {
    label: 'Internal documented knowledge, made operational.',
    detail:
      'Playbooks and data dictionaries that lived dormant in SharePoint become active mapping intelligence on every engagement.',
  },
  {
    label: 'Canonical concepts derived from past engagements.',
    detail:
      'A growing library of stable business objects (Customer.AccountID, Contract.MRR, Opportunity.Stage) that every future source maps against.',
  },
];

const OWNERSHIP_NOTE =
  'Your firm owns the methodology, conventions, and templates you bring or build. MTN owns the platform and the cross-customer learnings about how it performs across deployments.';

export default function WhatYouKeep() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container-site max-w-3xl mx-auto">
        <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold uppercase tracking-wide mb-3 bg-[rgba(74,111,165,0.10)] text-[var(--ms-primary)]">
          Your IP
        </span>
        <h2 className="text-xl md:text-2xl font-bold text-[var(--ms-heading)] mb-5 md:mb-8">
          What your firm keeps.
        </h2>
        <div className="flex flex-col gap-5">
          {ITEMS.map((item) => (
            <div key={item.label} className="flex gap-3 md:gap-4">
              <span className="flex-shrink-0 w-5 h-5 mt-0.5 rounded-full bg-[rgba(74,111,165,0.15)] flex items-center justify-center">
                <Check className="w-3 h-3 text-[var(--ms-primary)]" strokeWidth={2.5} />
              </span>
              <div>
                <p className="text-base md:text-lg font-semibold text-[var(--ms-heading)]">
                  {item.label}
                </p>
                <p className="text-base text-[var(--ms-body)] mt-0.5">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div
          className="flex items-start gap-3 mt-8 md:mt-10 px-4 py-4 rounded-lg max-w-2xl mx-auto"
          style={{
            backgroundColor: 'rgba(74,111,165,0.06)',
            border: '1px solid rgba(74,111,165,0.18)',
          }}
        >
          <Shield className="w-5 h-5 text-[var(--ms-primary)] flex-shrink-0 mt-0.5" strokeWidth={1.5} aria-hidden="true" />
          <p className="text-sm sm:text-base text-[var(--ms-body)] italic leading-relaxed">
            {OWNERSHIP_NOTE}
          </p>
        </div>
      </div>
    </section>
  );
}
