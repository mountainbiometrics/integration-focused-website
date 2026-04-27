'use client';

import React, { useRef } from 'react';
import { useScrollProgress, remap } from '@/hooks/useScrollProgress';

interface Layer {
  label: string;
  vendors: readonly string[];
  highlighted?: boolean;
}

const LAYERS: readonly Layer[] = [
  {
    label: 'Transport',
    vendors: ['State HIE', 'TEFCA QHINs', 'Carequality', 'CommonWell'],
  },
  {
    label: 'Semantic',
    vendors: ['MTN Data Foundry'],
    highlighted: true,
  },
  {
    label: 'Analytics',
    vendors: [
      'Innovaccer',
      'Arcadia',
      'Azara',
      'Health Catalyst',
      'Snowflake',
      'Databricks',
    ],
  },
];

function Arrow({ progress }: { progress: number }) {
  return (
    <div className="flex items-center justify-center py-1 md:py-0 md:px-2 md:w-10">
      <svg
        className="w-6 h-6 md:hidden"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ stroke: 'var(--ms-muted)' }}
      >
        <path
          d="M12 5v14M5 12l7 7 7-7"
          strokeDasharray="40"
          strokeDashoffset={40 * (1 - progress)}
        />
      </svg>
      <svg
        className="hidden md:block w-8 h-8"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ stroke: 'var(--ms-muted)' }}
      >
        <path
          d="M5 12h14M12 5l7 7-7 7"
          strokeDasharray="40"
          strokeDashoffset={40 * (1 - progress)}
        />
      </svg>
    </div>
  );
}

export default function RhtpStateStack() {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useScrollProgress(sectionRef, { startVh: 0.50, endVh: -0.20 });

  const layerProgresses = [
    remap(progress, 0, 0.30),
    remap(progress, 0.20, 0.50),
    remap(progress, 0.40, 0.70),
  ];
  const arrow1 = remap(progress, 0.30, 0.45);
  const arrow2 = remap(progress, 0.50, 0.65);
  const bandFade = remap(progress, 0.65, 0.90);

  return (
    <section
      ref={sectionRef}
      id="state-stack"
      className="py-20 md:py-28 lg:py-32"
      style={{ backgroundColor: 'var(--ms-surface)' }}
    >
      <div className="container-site max-w-5xl mx-auto">
        <span
          className="inline-block px-4 py-1.5 rounded-full text-[13px] font-semibold uppercase tracking-[0.12em] mb-4 border"
          style={{
            backgroundColor: 'rgba(172,31,45,0.05)',
            borderColor: 'rgba(172,31,45,0.12)',
            color: 'var(--ms-primary)',
          }}
        >
          Where it fits in the state stack
        </span>
        <h2 className="font-display text-[1.5rem] md:text-[2rem] leading-[1.12] text-[var(--ms-heading)] mb-10 md:mb-14">
          Complement, not replace.
        </h2>

        {/* Three-box diagram */}
        <div className="flex flex-col md:flex-row items-stretch gap-3 md:gap-0 mb-6 md:mb-8">
          {LAYERS.map((layer, i) => (
            <React.Fragment key={layer.label}>
              <div
                className="flex-1 rounded-2xl p-5 md:p-6 min-w-0 relative"
                style={{
                  opacity: layerProgresses[i],
                  transform: `translateY(${(1 - layerProgresses[i]) * 14}px)`,
                  backgroundColor: layer.highlighted ? 'white' : 'var(--ms-surface-warm)',
                  border: layer.highlighted
                    ? '2px solid var(--ms-primary)'
                    : '1px solid var(--ms-border)',
                  boxShadow: layer.highlighted ? 'var(--ms-shadow-card)' : 'none',
                }}
              >
                {layer.highlighted && (
                  <span
                    className="absolute top-2.5 right-2.5 inline-block px-2 py-0.5 rounded-full text-[9px] font-semibold uppercase tracking-[0.12em]"
                    style={{
                      backgroundColor: 'var(--ms-primary)',
                      color: 'white',
                    }}
                  >
                    This paper
                  </span>
                )}
                <p
                  className="text-[11px] font-semibold uppercase tracking-[0.16em] mb-3 text-center"
                  style={{
                    color: layer.highlighted ? 'var(--ms-primary)' : 'var(--ms-body-light)',
                  }}
                >
                  {layer.label}
                </p>
                <div className="flex flex-wrap gap-1.5 justify-center">
                  {layer.vendors.map((v) => (
                    <span
                      key={v}
                      className="inline-block px-2.5 py-1 rounded-md text-[12px] md:text-[13px] font-medium"
                      style={{
                        backgroundColor: layer.highlighted
                          ? 'rgba(172,31,45,0.08)'
                          : 'white',
                        color: layer.highlighted
                          ? 'var(--ms-primary)'
                          : 'var(--ms-body)',
                        border: '1px solid var(--ms-border)',
                      }}
                    >
                      {v}
                    </span>
                  ))}
                </div>
              </div>

              {i < LAYERS.length - 1 && (
                <Arrow progress={i === 0 ? arrow1 : arrow2} />
              )}
            </React.Fragment>
          ))}
        </div>

        <p className="text-sm md:text-base text-[var(--ms-body)] text-center max-w-xl mx-auto mb-16 md:mb-20">
          Sits between the layer that moves data and the layer that uses&nbsp;it.
        </p>

        {/* Absorbed metadata band */}
        <div
          className="text-center"
          style={{
            opacity: bandFade,
            transform: `translateY(${(1 - bandFade) * 8}px)`,
          }}
        >
          <p className="font-display text-[1.75rem] md:text-[2.5rem] lg:text-[3rem] leading-[1.1] text-[var(--ms-heading)]">
            Metadata, not patient&nbsp;data.
          </p>
          <p className="text-base md:text-lg text-[var(--ms-body)] mt-3 max-w-xl mx-auto">
            Foundry works on schemas and field definitions. PHI never crosses a facility&nbsp;boundary.
          </p>
        </div>
      </div>
    </section>
  );
}
