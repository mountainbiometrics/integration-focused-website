'use client';

import { useRef } from 'react';
import { Database } from 'lucide-react';
import { useScrollProgress, remap } from '@/hooks/useScrollProgress';

// Token counts diminish across engagements (4 → 3 → 2 → 2 → 1) to visually
// tell the compounding story: each engagement deposits LESS new work because
// the library does more. Canonical concepts (Customer, Contract, Opportunity)
// get defined in engagement 1 alongside the foundation Salesforce mapping;
// subsequent engagements add new source coverage and refinements rather than
// new concepts.
const ENGAGEMENT_DEPOSITS = [
  {
    engagement: 'Engagement 1',
    tokens: ['Salesforce mapping', 'Annotation v1', 'B2B SaaS playbook', 'Drift baseline'],
  },
  {
    engagement: 'Engagement 2',
    tokens: ['HubSpot mapping', 'Annotation v2', 'Vertical SaaS playbook'],
  },
  {
    engagement: 'Engagement 3',
    tokens: ['NetSuite mapping', 'Drift signatures'],
  },
  {
    engagement: 'Engagement 4',
    tokens: ['Zuora mapping', 'Reviewer corpus'],
  },
  {
    engagement: 'Engagement 5',
    tokens: ['Stripe mapping'],
  },
] as const;

export default function IpLibrary() {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useScrollProgress(sectionRef, { startVh: 0.55, endVh: -0.20 });

  const eyebrowFade = remap(progress, 0.0, 0.18);
  const headingFade = remap(progress, 0.05, 0.22);

  // Per-engagement reveal windows: row N reveals at remap(progress, 0.10 + N*0.11, 0.20 + N*0.11).
  const rowProgresses = ENGAGEMENT_DEPOSITS.map((_, n) =>
    remap(progress, 0.10 + n * 0.11, 0.20 + n * 0.11),
  );
  const depositsLanded = rowProgresses.reduce(
    (acc, p, i) => acc + (p >= 1 ? ENGAGEMENT_DEPOSITS[i].tokens.length : 0),
    0,
  );
  // 12 deposits at peak; factor 0.058 keeps peak glow ≈ 0.80 (similar to prior 15-deposit version).
  const libraryGlowAlpha = 0.10 + 0.058 * depositsLanded;

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 lg:py-40 relative overflow-hidden"
      style={{ backgroundColor: 'var(--ms-dark-bg)' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 40% 45% at 78% 50%, rgba(172,31,45,${libraryGlowAlpha}), transparent 70%)`,
        }}
        aria-hidden="true"
      />

      <div className="container-site max-w-5xl mx-auto relative">
        <p
          className="text-[13px] font-semibold uppercase tracking-[0.2em] mb-6 text-center"
          style={{
            color: 'rgba(255,255,255,0.8)',
            opacity: eyebrowFade,
          }}
        >
          Your IP library
        </p>

        <h2
          className="font-display text-[1.5rem] md:text-[2.25rem] leading-[1.12] text-center mb-12 md:mb-16"
          style={{
            opacity: headingFade,
            transform: `translateY(${(1 - headingFade) * 16}px)`,
            color: '#FFFFFF',
          }}
        >
          Every engagement deposits IP into your firm&rsquo;s&nbsp;library.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-10 md:gap-12 items-center">
          <div className="flex flex-col gap-4 md:gap-5">
            {ENGAGEMENT_DEPOSITS.map(({ engagement, tokens }, n) => {
              const rowProgress = rowProgresses[n];
              return (
                <div
                  key={engagement}
                  className="flex items-center gap-4"
                  style={{
                    opacity: rowProgress,
                    transform: `translateX(${(1 - rowProgress) * -20}px)`,
                  }}
                >
                  <span
                    className="text-sm md:text-base font-medium min-w-[110px]"
                    style={{ color: 'rgba(255,255,255,0.85)' }}
                  >
                    {engagement}
                  </span>
                  <div className="flex gap-2 flex-wrap">
                    {tokens.map((token) => (
                      <span
                        key={token}
                        className="inline-flex items-center justify-center px-2.5 py-1 rounded-md text-[11px] font-medium whitespace-nowrap"
                        style={{
                          backgroundColor: 'rgba(101,126,226,0.18)',
                          color: '#9CB1F0',
                          border: '1px solid rgba(101,126,226,0.35)',
                        }}
                      >
                        {token}
                      </span>
                    ))}
                  </div>
                  <div
                    className="hidden md:block flex-1 h-px"
                    style={{
                      background: `linear-gradient(to right, rgba(101,126,226,${0.5 * rowProgress}), transparent)`,
                    }}
                    aria-hidden="true"
                  />
                </div>
              );
            })}
          </div>

          <div
            className="rounded-2xl p-6 md:p-8 text-center relative"
            style={{
              backgroundColor: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.10)',
              boxShadow: `0 0 ${20 + libraryGlowAlpha * 80}px rgba(172,31,45,${libraryGlowAlpha * 1.5})`,
            }}
          >
            <div className="flex justify-center mb-3">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: 'rgba(172,31,45,0.18)' }}
              >
                <Database className="w-6 h-6" style={{ color: '#F06070' }} aria-hidden="true" />
              </div>
            </div>
            <p
              className="text-[12px] font-semibold uppercase tracking-[0.16em] mb-2"
              style={{ color: 'rgba(255,255,255,0.6)' }}
            >
              Your firm&rsquo;s IP library
            </p>
            <p
              className="text-4xl md:text-5xl font-bold tabular-nums"
              style={{ color: '#F06070' }}
            >
              {depositsLanded}
            </p>
            <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.7)' }}>
              artifacts deposited
            </p>
          </div>
        </div>

        <p
          className="text-sm text-center mt-10 md:mt-14 max-w-2xl mx-auto"
          style={{ color: 'rgba(255,255,255,0.55)' }}
        >
          Each engagement deposits less new work because your library does more. Mappings, annotations, methodology, and drift signatures compound across every&nbsp;deal.
        </p>
      </div>
    </section>
  );
}
