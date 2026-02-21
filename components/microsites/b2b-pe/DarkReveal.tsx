'use client';

import { useRef } from 'react';
import { useScrollProgress, remap } from './useScrollProgress';

export default function DarkReveal() {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useScrollProgress(sectionRef, { startVh: 0.50, endVh: -0.20 });

  const labelFade = remap(progress, 0, 0.20);
  const setupFade = remap(progress, 0.15, 0.38);
  const revealFade = remap(progress, 0.35, 0.60);
  const punchFade = remap(progress, 0.55, 0.80);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-36 lg:py-44 relative overflow-hidden"
      style={{ backgroundColor: 'var(--ms-dark-bg)' }}
    >
      {/* Blue radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 55%, rgba(74,111,165,0.14), transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="container-site max-w-2xl mx-auto text-center relative">
        {/* Small caps label */}
        <p
          className="text-[11px] font-semibold uppercase tracking-[0.2em] mb-8"
          style={{
            color: 'rgba(255,255,255,0.8)',
            opacity: labelFade,
            transform: `translateY(${(1 - labelFade) * 10}px)`,
          }}
        >
          One more thing
        </p>

        {/* Setup line */}
        <p
          className="text-base md:text-lg leading-relaxed mb-6"
          style={{
            color: '#FFFFFF',
            opacity: setupFade,
            transform: `translateY(${(1 - setupFade) * 12}px)`,
          }}
        >
          A platform that spends $5&nbsp;million on integration
          over a six-year&nbsp;hold&hellip;
        </p>

        {/* Reveal */}
        <p
          className="font-display text-2xl md:text-4xl leading-tight mb-4"
          style={{
            color: '#FFFFFF',
            opacity: revealFade,
            transform: `translateY(${(1 - revealFade) * 16}px)`,
          }}
        >
          &hellip;could have spent $600K and added $20M at&nbsp;exit.
        </p>

        {/* Punchline — steel blue bright */}
        <p
          className="text-lg md:text-2xl font-bold"
          style={{
            color: '#7BA3D4',
            opacity: punchFade,
            transform: `translateY(${(1 - punchFade) * 10}px)`,
          }}
        >
          That&rsquo;s a 33-to-1 return on integration&nbsp;spend.
        </p>
      </div>
    </section>
  );
}
