'use client';

import { useRef } from 'react';
import { useScrollProgress, remap } from './useScrollProgress';

// Generate positions for N nodes in a circle
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

// Generate all pairwise connections
function pairwise(count: number) {
  const pairs: [number, number][] = [];
  for (let i = 0; i < count; i++) {
    for (let j = i + 1; j < count; j++) {
      pairs.push([i, j]);
    }
  }
  return pairs;
}

const SVG_SIZE = 320;
const CENTER = SVG_SIZE / 2;
const RADIUS = 120;

const NODES_5 = circleNodes(5, CENTER, CENTER, RADIUS * 0.7);
const NODES_10 = circleNodes(10, CENTER, CENTER, RADIUS);
const PAIRS_5 = pairwise(5);   // 10 connections
const PAIRS_10 = pairwise(10); // 45 connections

/**
 * Scroll-pinned section: the outer wrapper is 300vh tall, creating 200vh of
 * scroll distance while the visible content stays sticky at `top: 0`.
 * The user scrolls through the full animation sequence before the page
 * continues downward.
 */
export default function MeshDiagram() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  // progress 0→1 as the wrapper scrolls from rect.top=0 to rect.top=-200vh
  const progress = useScrollProgress(wrapperRef, { startVh: 0, endVh: -2.0 });

  // Badge & heading appear quickly at the start of the pin
  const badgeFade = remap(progress, 0, 0.05);
  const headingFade = remap(progress, 0.02, 0.08);

  // Phase 1 (0.08–0.30): 5 nodes appear, pairwise lines draw (10 connections)
  const phase1 = remap(progress, 0.08, 0.30);
  // Phase 2 (0.25–0.50): Grows to 10 nodes, 45 connections, lines turn warm
  const phase2 = remap(progress, 0.25, 0.50);
  // Phase 3 (0.50–0.75): Mesh fades, central hub appears, 10 radial lines
  const phase3 = remap(progress, 0.50, 0.75);
  // Phase 4 (0.75–0.90): Takeaway fades in
  const takeawayFade = remap(progress, 0.75, 0.90);

  // Mesh opacity fades out in phase 3
  const meshOpacity = 1 - remap(phase3, 0, 0.6);
  // Hub appears in phase 3
  const hubOpacity = remap(phase3, 0.2, 0.8);

  // Connection count for label
  let connectionCount: number;
  if (phase3 > 0.5) {
    connectionCount = 10;
  } else if (phase2 > 0) {
    connectionCount = Math.round(10 + phase2 * 35);
  } else {
    connectionCount = Math.round(phase1 * 10);
  }

  // Line color shifts warm/red in phase 2
  const lineWarmth = remap(phase2, 0.3, 0.8);

  return (
    <div
      ref={wrapperRef}
      className="relative bg-white"
      style={{ height: '300vh' }}
    >
      {/* Sticky viewport — stays pinned while wrapper scrolls */}
      <section
        id="architecture"
        className="sticky top-0 h-screen flex items-center overflow-hidden bg-white"
      >
        <div className="container-site max-w-4xl mx-auto">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.12em] mb-4 border bg-[rgba(90,111,209,0.05)] border-[rgba(90,111,209,0.12)] text-[var(--ms-blue)]"
            style={{
              opacity: badgeFade,
              transform: `translateY(${(1 - badgeFade) * 12}px)`,
            }}
          >
            The math
          </span>

          <h2
            className="font-display text-[1.5rem] md:text-[2rem] leading-[1.12] text-[var(--ms-heading)] mb-8 md:mb-10"
            style={{
              opacity: headingFade,
              transform: `translateY(${(1 - headingFade) * 16}px)`,
            }}
          >
            Every acquisition multiplies the&nbsp;mess.
          </h2>

          {/* SVG diagram */}
          <div className="flex justify-center mb-6">
            <svg
              viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
              className="w-full max-w-[360px] h-auto"
            >
              {/* Phase 1 & 2: Mesh connections */}
              <g style={{ opacity: meshOpacity }}>
                {/* 5-node mesh (phase 1) */}
                {phase2 < 0.1 && PAIRS_5.map(([a, b], i) => {
                  const lineIn = remap(phase1, i * 0.08, i * 0.08 + 0.3);
                  return (
                    <line
                      key={`5-${i}`}
                      x1={NODES_5[a].x}
                      y1={NODES_5[a].y}
                      x2={NODES_5[b].x}
                      y2={NODES_5[b].y}
                      stroke="var(--ms-muted)"
                      strokeWidth="1.5"
                      opacity={lineIn * 0.6}
                    />
                  );
                })}

                {/* 10-node mesh (phase 2) */}
                {phase2 >= 0.1 && PAIRS_10.map(([a, b], i) => {
                  const lineIn = remap(phase2, i * 0.015, i * 0.015 + 0.25);
                  const r = Math.round(154 + lineWarmth * 86);
                  const g = Math.round(154 - lineWarmth * 105);
                  const bv = Math.round(170 - lineWarmth * 87);
                  return (
                    <line
                      key={`10-${i}`}
                      x1={NODES_10[a].x}
                      y1={NODES_10[a].y}
                      x2={NODES_10[b].x}
                      y2={NODES_10[b].y}
                      stroke={`rgb(${r},${g},${bv})`}
                      strokeWidth="1"
                      opacity={lineIn * 0.5}
                    />
                  );
                })}

                {/* 5 nodes (phase 1, before phase 2 takes over) */}
                {phase2 < 0.1 && NODES_5.map((node, i) => {
                  const nodeIn = remap(phase1, i * 0.06, i * 0.06 + 0.2);
                  return (
                    <circle
                      key={`n5-${i}`}
                      cx={node.x}
                      cy={node.y}
                      r={8}
                      fill="var(--ms-heading)"
                      opacity={nodeIn}
                    />
                  );
                })}

                {/* 10 nodes (phase 2) */}
                {phase2 >= 0.1 && NODES_10.map((node, i) => {
                  const nodeIn = remap(phase2, i * 0.05, i * 0.05 + 0.2);
                  const r = Math.round(26 + lineWarmth * 214);
                  const g = Math.round(26 - lineWarmth * 0);
                  const bv = Math.round(46 - lineWarmth * 1);
                  return (
                    <circle
                      key={`n10-${i}`}
                      cx={node.x}
                      cy={node.y}
                      r={6}
                      fill={lineWarmth > 0.5 ? `rgb(${r},${g},${bv})` : 'var(--ms-heading)'}
                      opacity={nodeIn}
                    />
                  );
                })}
              </g>

              {/* Phase 3: Hub-and-spoke */}
              <g style={{ opacity: hubOpacity }}>
                {/* Central hub */}
                <circle
                  cx={CENTER}
                  cy={CENTER}
                  r={20}
                  fill="var(--ms-blue)"
                  opacity={hubOpacity}
                />
                <text
                  x={CENTER}
                  y={CENTER + 1}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fill="white"
                  fontSize="7"
                  fontWeight="600"
                >
                  Foundry
                </text>

                {/* Radial lines to 10 nodes */}
                {NODES_10.map((node, i) => {
                  const spokeIn = remap(hubOpacity, i * 0.06, i * 0.06 + 0.3);
                  return (
                    <g key={`spoke-${i}`} opacity={spokeIn}>
                      <line
                        x1={CENTER}
                        y1={CENTER}
                        x2={node.x}
                        y2={node.y}
                        stroke="var(--ms-blue)"
                        strokeWidth="1.5"
                        opacity={0.5}
                      />
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r={6}
                        fill="var(--ms-blue)"
                        opacity={0.8}
                      />
                    </g>
                  );
                })}
              </g>
            </svg>
          </div>

          {/* Connection counter */}
          <div className="text-center mb-6">
            <span className="text-2xl md:text-3xl font-bold tabular-nums" style={{
              color: phase3 > 0.5 ? 'var(--ms-blue)' : lineWarmth > 0.5 ? '#AC1F2D' : 'var(--ms-heading)',
            }}>
              {connectionCount}
            </span>
            <span className="text-sm text-[var(--ms-body)] ml-2">connections</span>
          </div>

          {/* Takeaway */}
          <p
            className="text-base md:text-lg font-semibold text-[var(--ms-heading)] text-center"
            style={{
              opacity: takeawayFade,
              transform: `translateY(${(1 - takeawayFade) * 8}px)`,
            }}
          >
            Clinic fifty doesn&rsquo;t touch clinics one through&nbsp;forty-nine.
          </p>
        </div>
      </section>
    </div>
  );
}
