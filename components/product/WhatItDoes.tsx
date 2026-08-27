'use client';

import { useRef } from 'react';
import { useScrollProgress, remap } from '@/hooks/useScrollProgress';

const DOES_ITEMS = [
  'Read schemas, docs, and API specs, no records required',
  'Map fields to shared concepts, with the evidence behind each',
  'Re-check only what a schema change actually touched',
  'Answer where data lives, for your team, your BI, your agents',
];

const DOESNT_ITEMS = [
  'Replace your warehouse or BI tools',
  'Sit in your production data path',
  'Require changes to your source systems',
  'Hold your records, or return data as results',
];

export default function WhatItDoes() {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useScrollProgress(sectionRef, { startVh: 0.75, endVh: -0.05 });

  /* Header fade */
  const headerFade = remap(progress, 0, 0.15);

  /* Column containers */
  const leftBox = remap(progress, 0.10, 0.25);
  const rightBox = remap(progress, 0.15, 0.30);

  /* Staggered item reveals */
  const doesItem = (i: number) => remap(progress, 0.25 + i * 0.08, 0.45 + i * 0.08);
  const doesntItem = (i: number) => remap(progress, 0.30 + i * 0.08, 0.50 + i * 0.08);

  return (
    <section ref={sectionRef} className="section-spacing bg-[var(--ms-surface)]">
      <div className="container-site">
        <div className="max-w-4xl mx-auto">
          <div style={{ opacity: headerFade }}>
            <h2 className="font-display leading-[1.12] text-[var(--ms-heading)] text-2xl md:text-3xl mb-3 text-center">
              What it does, and what it doesn&apos;t.
            </h2>
            <p className="text-[var(--ms-body)] text-center mb-10 max-w-2xl mx-auto">
              MTN FieldMap is the layer between your sources and your stack. It doesn&apos;t try to be your stack.
            </p>
          </div>

          {/* Two-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left column: It does */}
            <div
              className="p-6 rounded-lg bg-white border border-[var(--ms-border)]"
              style={{
                opacity: leftBox,
                transform: `translateY(${(1 - leftBox) * 20}px)`,
              }}
            >
              <h3 className="font-display text-[var(--ms-heading)] text-xl mb-5">
                It does
              </h3>
              <ul className="space-y-4">
                {DOES_ITEMS.map((item, i) => {
                  const a = doesItem(i);
                  return (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-base text-[var(--ms-body)]"
                      style={{
                        opacity: a,
                        transform: `translateX(${(1 - a) * -20}px) scale(${0.95 + a * 0.05})`,
                      }}
                    >
                      {/* Green checkmark icon */}
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        className="flex-shrink-0 mt-0.5"
                        fill="none"
                      >
                        <circle cx="10" cy="10" r="9" fill="rgba(76,175,80,0.12)" stroke="#4CAF50" strokeWidth="1.5" />
                        <path
                          d="M6 10l3 3 5-6"
                          stroke="#4CAF50"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>{item}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Right column: It doesn't */}
            <div
              className="p-6 rounded-lg bg-white border border-[var(--ms-border)]"
              style={{
                opacity: rightBox,
                transform: `translateY(${(1 - rightBox) * 20}px)`,
              }}
            >
              <h3 className="font-display text-[var(--ms-heading)] text-xl mb-5">
                It doesn&apos;t
              </h3>
              <ul className="space-y-4">
                {DOESNT_ITEMS.map((item, i) => {
                  const a = doesntItem(i);
                  return (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-base text-[var(--ms-body)]"
                      style={{
                        opacity: a,
                        transform: `translateX(${(1 - a) * 20}px) scale(${0.95 + a * 0.05})`,
                      }}
                    >
                      {/* Gray minus icon */}
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        className="flex-shrink-0 mt-0.5"
                        fill="none"
                      >
                        <circle cx="10" cy="10" r="9" fill="var(--ms-surface)" stroke="var(--ms-muted)" strokeWidth="1.5" />
                        <line
                          x1="6" y1="10" x2="14" y2="10"
                          stroke="var(--ms-muted)"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                      <span>{item}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
