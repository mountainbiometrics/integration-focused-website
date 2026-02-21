'use client';

import { useRef } from 'react';
import { useScrollProgress, remap } from '@/hooks/useScrollProgress';

const SVG_SIZE = 340;
const CENTER = SVG_SIZE / 2;
const RADIUS = 130;

const NODE_LABELS = [
  { name: 'NetSuite', fmt: 'CSV' },
  { name: 'Salesforce', fmt: 'API' },
  { name: 'QuickBooks', fmt: 'Excel' },
  { name: 'HubSpot', fmt: 'Webhook' },
  { name: 'SAP', fmt: 'IDOC' },
  { name: 'Dynamics', fmt: 'OData' },
  { name: 'Sage', fmt: 'FTP' },
  { name: 'Zoho', fmt: 'REST' },
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
const PAIRS_8 = pairwise(8); // 28 connections

export default function TangleGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useScrollProgress(sectionRef, { startVh: 0.50, endVh: -0.30 });

  const badgeFade = remap(progress, 0, 0.08);
  const headingFade = remap(progress, 0.03, 0.15);

  // Phase 1 (0–0.30): 8 nodes stagger in
  const phase1 = remap(progress, 0.05, 0.30);
  // Phase 2 (0.25–0.55): Pairwise lines draw, gray → red
  const phase2 = remap(progress, 0.25, 0.55);
  // Phase 3 (0.50–0.70): Cost counter
  const costAnim = remap(progress, 0.50, 0.70);
  const costFade = remap(progress, 0.48, 0.58);
  const costValue = Math.round(400 + costAnim * 400); // $400K → $800K
  // Phase 4 (0.70–0.90): Closing line
  const closingFade = remap(progress, 0.70, 0.90);

  // Line warmth (gray → red)
  const lineWarmth = remap(phase2, 0.3, 0.9);

  // Connection counter
  const connectionCount = Math.round(phase2 * 28);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 lg:py-32"
      style={{ backgroundColor: 'var(--ms-surface-warm)' }}
    >
      <div className="container-site max-w-4xl mx-auto">
        {/* Badge */}
        <span
          className="inline-block px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.12em] mb-4 border bg-[rgba(172,31,45,0.05)] border-[rgba(172,31,45,0.12)] text-[#AC1F2D]"
          style={{
            opacity: badgeFade,
            transform: `translateY(${(1 - badgeFade) * 12}px)`,
          }}
        >
          The integration tax
        </span>

        <h2
          className="font-display text-[1.5rem] md:text-[2rem] leading-[1.12] text-[var(--ms-heading)] mb-10 md:mb-14"
          style={{
            opacity: headingFade,
            transform: `translateY(${(1 - headingFade) * 16}px)`,
          }}
        >
          Every acquisition adds systems. None of them&nbsp;talk.
        </h2>

        {/* SVG diagram — 8 nodes in circle layout */}
        <div className="flex justify-center mb-6">
          <svg
            viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
            className="w-full max-w-[380px] h-auto"
          >
            {/* Pairwise connections (phase 2) */}
            {PAIRS_8.map(([a, b], i) => {
              const lineIn = remap(phase2, i * 0.025, i * 0.025 + 0.25);
              if (lineIn <= 0) return null;
              // gray (160,160,170) → red (239,83,80) = #EF5350
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

            {/* 8 acquisition nodes (phase 1) */}
            {NODES_8.map((node, i) => {
              const nodeIn = remap(phase1, i * 0.08, i * 0.08 + 0.25);
              return (
                <g key={`node-${i}`} style={{ opacity: nodeIn }}>
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={22}
                    fill="white"
                    stroke="var(--ms-border)"
                    strokeWidth="1.5"
                  />
                  <text
                    x={node.x}
                    y={node.y - 3}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fill="var(--ms-heading)"
                    fontSize="8"
                    fontWeight="600"
                  >
                    {NODE_LABELS[i].name}
                  </text>
                  <text
                    x={node.x}
                    y={node.y + 8}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fill="var(--ms-muted)"
                    fontSize="6.5"
                  >
                    {NODE_LABELS[i].fmt}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Connection counter */}
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
            <span className="text-sm text-[var(--ms-body)] ml-2">connections</span>
          </div>
        )}

        {/* Cost counter */}
        <div
          className="text-center mt-6"
          style={{ opacity: costFade }}
        >
          <span className="text-3xl md:text-5xl font-bold text-[#AC1F2D] tabular-nums">
            ${costValue}K
          </span>
          <span className="text-lg md:text-xl text-[#AC1F2D] font-medium">/year in maintenance</span>
        </div>

        {/* Closing line */}
        <p
          className="text-base md:text-lg font-semibold text-[var(--ms-heading)] text-center mt-10"
          style={{
            opacity: closingFade,
            transform: `translateY(${(1 - closingFade) * 8}px)`,
          }}
        >
          At fifty integrations, your team is consumed.
          At two hundred, your budget&nbsp;is.
        </p>
      </div>
    </section>
  );
}
