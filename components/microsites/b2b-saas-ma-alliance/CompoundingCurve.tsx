'use client';

import { useRef } from 'react';
import { useScrollProgress, remap } from '@/hooks/useScrollProgress';

const N_BOLTONS = 10;

// Foundry curve: y = 14 + (45 - 14) * exp(-0.85 * (n - 1)), clamped at 14.
// Math transcribed from design_docs/healthcare-pe-alliance-microsite.md;
// design_docs/b2b_saas_ma_alliance_microsite_plan.md confirms identical
// calibration across the healthcare and B2B SaaS verticals.
const FOUNDRY_DAYS = Array.from({ length: N_BOLTONS }, (_, i) => {
  const n = i + 1;
  return Math.max(14, 14 + (45 - 14) * Math.exp(-0.85 * (n - 1)));
});

type Layout = {
  vboxW: number;
  vboxH: number;
  xMin: number;
  xMax: number;
  yTop: number;
  yBottom: number;
  fonts: {
    axis: number;
    tickX: number;
    tickY: number;
    legend: number;
    callout: number;
    margin: number;
  };
  strokes: {
    conventional: number;
    foundry: number;
    pointR: number;
  };
};

const DESKTOP: Layout = {
  vboxW: 880,
  vboxH: 460,
  xMin: 70,
  xMax: 750,
  yTop: 50,
  yBottom: 410,
  fonts: { axis: 13, tickX: 12, tickY: 11, legend: 13, callout: 13, margin: 14 },
  strokes: { conventional: 2.5, foundry: 3, pointR: 3.5 },
};

const MOBILE: Layout = {
  vboxW: 580,
  vboxH: 540,
  xMin: 60,
  xMax: 360,
  yTop: 80,
  yBottom: 460,
  fonts: { axis: 22, tickX: 20, tickY: 18, legend: 22, callout: 20, margin: 24 },
  strokes: { conventional: 4, foundry: 5, pointR: 6 },
};

function buildScales(L: Layout) {
  const xScale = (n: number) => L.xMin + (n - 1) * ((L.xMax - L.xMin) / (N_BOLTONS - 1));
  const yScale = (days: number) => L.yBottom - (days / 100) * (L.yBottom - L.yTop);
  const conventionalPath = `M ${xScale(1)} ${yScale(90)} L ${xScale(N_BOLTONS)} ${yScale(90)}`;
  const foundryPath = FOUNDRY_DAYS.map(
    (d, i) => `${i === 0 ? 'M' : 'L'} ${xScale(i + 1).toFixed(1)} ${yScale(d).toFixed(1)}`,
  ).join(' ');
  return { xScale, yScale, conventionalPath, foundryPath };
}

const DESKTOP_SCALES = buildScales(DESKTOP);
const MOBILE_SCALES = buildScales(MOBILE);

export default function CompoundingCurve() {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useScrollProgress(sectionRef, { startVh: 0.55, endVh: -0.20 });

  const eyebrowFade = remap(progress, 0, 0.15);
  const headingFade = remap(progress, 0.05, 0.25);
  const conventionalFade = remap(progress, 0.25, 0.42);
  const foundryFade = remap(progress, 0.38, 0.44);
  const drawProgress = remap(progress, 0.42, 0.82);
  const callout45Fade = remap(progress, 0.48, 0.58);
  const callout14Fade = remap(progress, 0.74, 0.84);
  const marginFade = remap(progress, 0.86, 0.97);
  const glowAlpha = 0.18 + 0.10 * remap(progress, 0.65, 0.92);

  function renderChart(L: Layout, S: ReturnType<typeof buildScales>) {
    return (
      <svg
        viewBox={`0 0 ${L.vboxW} ${L.vboxH}`}
        className="w-full h-auto"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Y-axis label */}
        <text
          x={20}
          y={L.yTop - 18}
          fill="rgba(255,255,255,0.65)"
          fontSize={L.fonts.axis}
        >
          Days to integrated, reportable data
        </text>

        {/* X-axis label */}
        <text
          x={(L.xMin + L.xMax) / 2}
          y={L.vboxH - 5}
          textAnchor="middle"
          fill="rgba(255,255,255,0.65)"
          fontSize={L.fonts.axis}
        >
          Bolt-on number
        </text>

        {/* X-axis tick labels */}
        {[1, 5, 10].map((n) => (
          <text
            key={`xtick-${n}`}
            x={S.xScale(n)}
            y={L.yBottom + L.fonts.tickX + 8}
            textAnchor="middle"
            fill="rgba(255,255,255,0.55)"
            fontSize={L.fonts.tickX}
          >
            {n}
          </text>
        ))}

        {/* Y-axis tick labels */}
        {[90, 14].map((d) => (
          <text
            key={`ytick-${d}`}
            x={L.xMin - 12}
            y={S.yScale(d) + L.fonts.tickY * 0.35}
            textAnchor="end"
            fill="rgba(255,255,255,0.45)"
            fontSize={L.fonts.tickY}
          >
            {d}
          </text>
        ))}

        {/* Conventional line */}
        <path
          d={S.conventionalPath}
          stroke="#9A9A9A"
          strokeWidth={L.strokes.conventional}
          strokeLinecap="round"
          fill="none"
          opacity={conventionalFade * 0.85}
        />
        <text
          x={L.xMax + 8}
          y={S.yScale(90) + L.fonts.legend * 0.35}
          fill="#9A9A9A"
          fontSize={L.fonts.legend}
          fontWeight="bold"
          opacity={conventionalFade}
          textAnchor="start"
        >
          Conventional
        </text>

        {/* Foundry line with red drop-shadow glow */}
        <path
          d={S.foundryPath}
          stroke="#657EE2"
          strokeWidth={L.strokes.foundry}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity={foundryFade}
          pathLength={1}
          strokeDasharray="1 1"
          strokeDashoffset={1 - drawProgress}
          style={{
            filter: `drop-shadow(0 0 ${4 + 12 * glowAlpha}px rgba(172,31,45,${0.5 + glowAlpha * 1.5}))`,
          }}
        />
        {FOUNDRY_DAYS.map((d, i) => {
          const pointX = i / (N_BOLTONS - 1);
          const pointReveal = remap(drawProgress, pointX, pointX + 0.02);
          return (
            <circle
              key={`pt-${i}`}
              cx={S.xScale(i + 1)}
              cy={S.yScale(d)}
              r={L.strokes.pointR}
              fill="#657EE2"
              opacity={foundryFade * pointReveal}
            />
          );
        })}

        {/* "Engagement 1, ~45 days" callout */}
        <g opacity={callout45Fade}>
          <text
            x={S.xScale(1) + 12}
            y={S.yScale(45) - L.fonts.callout * 0.45}
            fill="#9CB1F0"
            fontSize={L.fonts.callout}
            fontWeight="bold"
            fontStyle="italic"
          >
            Engagement 1
          </text>
          <text
            x={S.xScale(1) + 12}
            y={S.yScale(45) + L.fonts.callout * 0.85}
            fill="#9CB1F0"
            fontSize={L.fonts.callout}
            fontWeight="bold"
            fontStyle="italic"
          >
            ~45 days
          </text>
        </g>

        {/* "~14 days" asymptote label */}
        <text
          x={L.xMax + 8}
          y={S.yScale(14) + L.fonts.legend * 0.35}
          fill="#9CB1F0"
          fontSize={L.fonts.legend}
          fontWeight="bold"
          opacity={callout14Fade}
          textAnchor="start"
        >
          ~14 days
        </text>

        {/* "compounding margin" annotation */}
        <text
          x={S.xScale(6)}
          y={S.yScale(62)}
          fill="rgba(156,177,240,0.85)"
          fontSize={L.fonts.margin}
          fontStyle="italic"
          textAnchor="middle"
          opacity={marginFade}
        >
          compounding margin
        </text>
      </svg>
    );
  }

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 lg:py-40 relative overflow-hidden"
      style={{ backgroundColor: 'var(--ms-dark-bg)' }}
    >
      {/* Radial glow over the asymptote */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 55% 45% at 70% 70%, rgba(172,31,45,${glowAlpha}), transparent 70%)`,
        }}
        aria-hidden="true"
      />

      <div className="container-site max-w-4xl mx-auto relative">
        <p
          className="text-[13px] font-semibold uppercase tracking-[0.2em] mb-6 text-center"
          style={{
            color: 'rgba(255,255,255,0.8)',
            opacity: eyebrowFade,
          }}
        >
          The compounding curve
        </p>

        <h2
          className="font-display text-[1.5rem] md:text-[2.25rem] leading-[1.12] text-center mb-10 md:mb-14"
          style={{
            opacity: headingFade,
            transform: `translateY(${(1 - headingFade) * 16}px)`,
            color: '#FFFFFF',
          }}
        >
          Engagement five costs a fraction of engagement&nbsp;one.
        </h2>

        {/* Desktop chart */}
        <div className="hidden md:block relative max-w-3xl mx-auto">
          {renderChart(DESKTOP, DESKTOP_SCALES)}
        </div>

        {/* Mobile chart — wider viewBox-relative fonts/strokes so labels stay readable */}
        <div className="md:hidden relative max-w-sm mx-auto">
          {renderChart(MOBILE, MOBILE_SCALES)}
        </div>

        <p
          className="text-sm md:text-base text-center max-w-2xl mx-auto mt-6"
          style={{
            color: 'rgba(255,255,255,0.65)',
            opacity: marginFade,
          }}
        >
          Conventional integration is flat across the platform. The accelerator&rsquo;s curve flattens at the asymptote as your firm&rsquo;s annotations, methodology, and canonical concepts compound across the deal&nbsp;flow.
        </p>
      </div>
    </section>
  );
}
