'use client';

import { useRef } from 'react';
import { useScrollProgress, remap } from '@/hooks/useScrollProgress';

const SVG_SIZE = 340;
const CENTER = SVG_SIZE / 2;
const RADIUS = 130;

const NODE_LABELS = [
  { name: 'Epic' },
  { name: 'athena' },
  { name: 'eCW' },
  { name: 'NextGen' },
  { name: 'MEDITECH' },
  { name: 'Greenway' },
  { name: 'AdvMD' },
  { name: 'Cerner' },
];

function circleNodes(count: number, cx: number, cy: number, r: number) {
  const nodes: { x: number; y: number }[] = [];
  for (let i = 0; i < count; i++) {
    const angle = (2 * Math.PI * i) / count - Math.PI / 2;
    nodes.push({
      x: cx + r * Math.cos(angle),
      y: cy + r * Math.sin(angle),
    });
  }
  return nodes;
}

function pairwise(count: number) {
  const pairs: [number, number][] = [];
  for (let i = 0; i < count; i++) {
    for (let j = i + 1; j < count; j++) {
      pairs.push([i, j]);
    }
  }
  return pairs;
}

const NODES_8 = circleNodes(8, CENTER, CENTER, RADIUS);
const PAIRS_8 = pairwise(8);

export default function EhrTangle() {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useScrollProgress(sectionRef, { startVh: 0.50, endVh: -0.50 });

  const badgeFade = remap(progress, 0.05, 0.15);
  const headingFade = remap(progress, 0.10, 0.25);

  const phase1 = remap(progress, 0.20, 0.45);
  const phase2 = remap(progress, 0.40, 0.70);
  const costAnim = remap(progress, 0.65, 0.85);
  const costFade = remap(progress, 0.63, 0.73);
  const costValue = Math.round(65 + costAnim * 10);
  const closingFade = remap(progress, 0.85, 1.00);

  const lineWarmth = remap(phase2, 0.3, 0.9);
  const connectionCount = Math.round(phase2 * 28);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 lg:py-32"
      style={{ backgroundColor: 'var(--ms-surface-warm)' }}
    >
      <div className="container-site max-w-4xl mx-auto">
        <span
          className="inline-block px-4 py-1.5 rounded-full text-[13px] font-semibold uppercase tracking-[0.12em] mb-4 border bg-[rgba(172,31,45,0.05)] border-[rgba(172,31,45,0.12)] text-[#AC1F2D]"
          style={{
            opacity: badgeFade,
            transform: `translateY(${(1 - badgeFade) * 12}px)`,
          }}
        >
          And it compounds
        </span>

        <h2
          className="font-display text-[1.5rem] md:text-[2rem] leading-[1.12] text-[var(--ms-heading)] mb-10 md:mb-14"
          style={{
            opacity: headingFade,
            transform: `translateY(${(1 - headingFade) * 16}px)`,
          }}
        >
          Every new bolt-on adds an EHR. Every pair has to&nbsp;talk.
        </h2>

        <div className="flex justify-center mb-6">
          <svg
            viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
            className="w-full max-w-[532px] h-auto"
          >
            {PAIRS_8.map(([a, b], i) => {
              const lineIn = remap(phase2, i * 0.025, i * 0.025 + 0.25);
              if (lineIn <= 0) return null;
              const r = Math.round(160 + lineWarmth * 79);
              const g = Math.round(160 - lineWarmth * 77);
              const bv = Math.round(170 - lineWarmth * 90);
              return (
                <line
                  key={`line-${i}`}
                  x1={NODES_8[a].x}
                  y1={NODES_8[a].y}
                  x2={NODES_8[b].x}
                  y2={NODES_8[b].y}
                  stroke={`rgb(${r},${g},${bv})`}
                  strokeWidth="1"
                  opacity={lineIn * 0.5}
                />
              );
            })}

            {NODES_8.map((node, i) => {
              const nodeIn = remap(phase1, i * 0.08, i * 0.08 + 0.25);
              return (
                <g key={`node-${i}`} style={{ opacity: nodeIn }}>
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={26}
                    fill="white"
                    stroke="var(--ms-border)"
                    strokeWidth="1.5"
                  />
                  <text
                    x={node.x}
                    y={node.y}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fill="var(--ms-heading)"
                    fontSize="11"
                    fontWeight="600"
                  >
                    {NODE_LABELS[i].name}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {phase2 > 0 && (
          <div className="text-center mb-4">
            <span
              className="text-2xl md:text-3xl font-bold tabular-nums"
              style={{
                color: lineWarmth > 0.5 ? '#EF5350' : 'var(--ms-heading)',
              }}
            >
              {connectionCount}
            </span>
            <span className="text-base text-[var(--ms-body)] ml-2">connections</span>
          </div>
        )}

        <div
          className="text-center mt-6"
          style={{ opacity: costFade }}
        >
          <span className="text-3xl md:text-5xl font-bold text-[#AC1F2D] tabular-nums">
            {costValue}%
          </span>
          <p className="text-base text-[var(--ms-body)] mt-1">
            of integration labor on pairwise mappings
          </p>
        </div>

        <p
          className="text-base md:text-lg font-semibold text-[var(--ms-heading)] text-center mt-10"
          style={{
            opacity: closingFade,
            transform: `translateY(${(1 - closingFade) * 8}px)`,
          }}
        >
          Twenty-eight mappings. And every quarterly EHR upgrade silently breaks one of&nbsp;them.
        </p>
      </div>
    </section>
  );
}
