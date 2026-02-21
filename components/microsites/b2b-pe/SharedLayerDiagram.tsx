'use client';

import { useRef } from 'react';
import { remap } from '@/hooks/useScrollProgress';
import { useLoopProgress } from '@/hooks/useLoopProgress';

const SVG_SIZE = 340;
const CENTER = SVG_SIZE / 2;
const RADIUS = 130;

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

const NODES_8 = circleNodes(8, CENTER, CENTER, RADIUS * 0.7);
const NODES_16 = circleNodes(16, CENTER, CENTER, RADIUS);
const PAIRS_8 = pairwise(8);   // 28 connections
const PAIRS_16 = pairwise(16); // 120 connections

export default function SharedLayerDiagram() {
  const sectionRef = useRef<HTMLElement>(null);
  const { progress, hasEntered } = useLoopProgress(sectionRef);

  // Phase 1 (0.08–0.30): 8 nodes, 28 pairwise connections
  const phase1 = remap(progress, 0.08, 0.30);
  // Phase 2 (0.25–0.50): Grows to 16 nodes, 120 connections, lines → red
  const phase2 = remap(progress, 0.25, 0.50);
  // Phase 3 (0.50–0.75): Mesh fades, Foundry hub appears, 16 clean blue spokes
  const phase3 = remap(progress, 0.50, 0.75);

  const meshOpacity = 1 - remap(phase3, 0, 0.6);
  const hubOpacity = remap(phase3, 0.2, 0.8);
  const lineWarmth = remap(phase2, 0.3, 0.8);

  // Connection count for label
  let connectionCount: number;
  if (phase3 > 0.5) {
    connectionCount = 16;
  } else if (phase2 > 0) {
    connectionCount = Math.round(28 + phase2 * 92); // 28 → 120
  } else {
    connectionCount = Math.round(phase1 * 28);
  }

  // One-time entrance for static text
  const enterOpacity = hasEntered ? 1 : 0;

  return (
    <section
      ref={sectionRef}
      id="architecture"
      className="py-20 md:py-28 lg:py-32 bg-white overflow-hidden"
    >
      <div className="container-site max-w-4xl mx-auto">
        <span
          className="inline-block px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.12em] mb-4 border bg-[rgba(74,111,165,0.05)] border-[rgba(74,111,165,0.12)] text-[#4A6FA5] transition-opacity duration-700"
          style={{ opacity: enterOpacity }}
        >
          The architecture
        </span>

        <h2
          className="font-display text-[1.5rem] md:text-[2rem] leading-[1.12] text-[var(--ms-heading)] mb-8 md:mb-10 transition-opacity duration-700 delay-150"
          style={{ opacity: enterOpacity }}
        >
          Every acquisition multiplies the&nbsp;mess. Unless it&nbsp;doesn&rsquo;t.
        </h2>

        {/* SVG diagram */}
        <div className="flex justify-center mb-6">
          <svg
            viewBox={`0 0 ${SVG_SIZE} ${SVG_SIZE}`}
            className="w-full max-w-[380px] h-auto"
          >
            {/* Phase 1 & 2: Mesh connections */}
            <g style={{ opacity: meshOpacity }}>
              {/* 8-node mesh (phase 1, before phase 2 takes over) */}
              {phase2 < 0.1 && PAIRS_8.map(([a, b], i) => {
                const lineIn = remap(phase1, i * 0.025, i * 0.025 + 0.3);
                return (
                  <line
                    key={`8-${i}`}
                    x1={NODES_8[a].x}
                    y1={NODES_8[a].y}
                    x2={NODES_8[b].x}
                    y2={NODES_8[b].y}
                    stroke="var(--ms-muted)"
                    strokeWidth="1.5"
                    opacity={lineIn * 0.6}
                  />
                );
              })}

              {/* 16-node mesh (phase 2) */}
              {phase2 >= 0.1 && PAIRS_16.map(([a, b], i) => {
                const lineIn = remap(phase2, i * 0.006, i * 0.006 + 0.2);
                // gray (154,154,170) → red (239,83,80) = #EF5350
                const r = Math.round(154 + lineWarmth * 85);
                const g = Math.round(154 - lineWarmth * 71);
                const bv = Math.round(170 - lineWarmth * 90);
                return (
                  <line
                    key={`16-${i}`}
                    x1={NODES_16[a].x}
                    y1={NODES_16[a].y}
                    x2={NODES_16[b].x}
                    y2={NODES_16[b].y}
                    stroke={`rgb(${r},${g},${bv})`}
                    strokeWidth="1"
                    opacity={lineIn * 0.4}
                  />
                );
              })}

              {/* 8 nodes (phase 1, before phase 2 takes over) */}
              {phase2 < 0.1 && NODES_8.map((node, i) => {
                const nodeIn = remap(phase1, i * 0.06, i * 0.06 + 0.2);
                return (
                  <circle
                    key={`n8-${i}`}
                    cx={node.x}
                    cy={node.y}
                    r={7}
                    fill="var(--ms-heading)"
                    opacity={nodeIn}
                  />
                );
              })}

              {/* 16 nodes (phase 2) */}
              {phase2 >= 0.1 && NODES_16.map((node, i) => {
                const nodeIn = remap(phase2, i * 0.04, i * 0.04 + 0.2);
                // dark (26,26,46) → red (172,31,45) = #AC1F2D
                const r = Math.round(26 + lineWarmth * 146);
                const g = Math.round(26 + lineWarmth * 5);
                const bv = Math.round(46 - lineWarmth * 1);
                return (
                  <circle
                    key={`n16-${i}`}
                    cx={node.x}
                    cy={node.y}
                    r={5}
                    fill={lineWarmth > 0.5 ? `rgb(${r},${g},${bv})` : 'var(--ms-heading)'}
                    opacity={nodeIn}
                  />
                );
              })}
            </g>

            {/* Phase 3: Hub-and-spoke */}
            <g style={{ opacity: hubOpacity }}>
              {/* Radial lines to 16 nodes (rendered first, behind hub) */}
              {NODES_16.map((node, i) => {
                const spokeIn = remap(hubOpacity, i * 0.04, i * 0.04 + 0.3);
                return (
                  <g key={`spoke-${i}`} opacity={spokeIn}>
                    <line
                      x1={CENTER}
                      y1={CENTER}
                      x2={node.x}
                      y2={node.y}
                      stroke="#4A6FA5"
                      strokeWidth="1.5"
                      opacity={0.5}
                    />
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={5}
                      fill="#4A6FA5"
                      opacity={0.8}
                    />
                  </g>
                );
              })}

              {/* Central hub (rendered last, on top of spokes) */}
              <circle
                cx={CENTER}
                cy={CENTER}
                r={22}
                fill="#4A6FA5"
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
            </g>
          </svg>
        </div>

        {/* Connection counter */}
        <div className="text-center mb-6">
          <span
            className="text-2xl md:text-3xl font-bold tabular-nums"
            style={{
              color: phase3 > 0.5 ? '#4A6FA5' : lineWarmth > 0.5 ? '#EF5350' : 'var(--ms-heading)',
            }}
          >
            {connectionCount}
          </span>
          <span className="text-sm text-[var(--ms-body)] ml-2">
            {phase3 > 0.5 ? 'spokes' : 'connections'}
          </span>
        </div>

        {/* Takeaway */}
        <p
          className="text-base md:text-lg font-semibold text-[var(--ms-heading)] text-center transition-opacity duration-700 delay-300"
          style={{ opacity: enterOpacity }}
        >
          Acquisition fifty doesn&rsquo;t touch one through&nbsp;forty-nine.
        </p>
      </div>
    </section>
  );
}
