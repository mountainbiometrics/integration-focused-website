'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
import { remap } from './useScrollProgress';

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

/** Loops 0→1 over `duration` ms, pauses, then resets. Runs only when visible. */
function useLoopProgress(
  ref: React.RefObject<HTMLElement | null>,
  options?: { duration?: number; pauseEnd?: number; pauseStart?: number },
) {
  const duration = options?.duration ?? 8000;
  const pauseEnd = options?.pauseEnd ?? 2500;
  const pauseStart = options?.pauseStart ?? 400;
  const totalCycle = duration + pauseEnd + pauseStart;

  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) setHasEntered(true);
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);

  useEffect(() => {
    if (!isVisible) return;
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setProgress(1);
      return;
    }
    let animId: number;
    let startTime: number | null = null;
    function tick(now: number) {
      if (startTime === null) startTime = now;
      const elapsed = (now - startTime) % totalCycle;
      let p: number;
      if (elapsed < duration) {
        p = elapsed / duration;
      } else if (elapsed < duration + pauseEnd) {
        p = 1;
      } else {
        p = 0;
      }
      setProgress(p);
      animId = requestAnimationFrame(tick);
    }
    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, [isVisible, duration, pauseEnd, totalCycle]);

  return { progress, hasEntered };
}

export default function MeshDiagram() {
  const sectionRef = useRef<HTMLElement>(null);
  const { progress, hasEntered } = useLoopProgress(sectionRef);

  // Phase 1 (0.08–0.30): 5 nodes appear, pairwise lines draw (10 connections)
  const phase1 = remap(progress, 0.08, 0.30);
  // Phase 2 (0.25–0.50): Grows to 10 nodes, 45 connections, lines turn warm
  const phase2 = remap(progress, 0.25, 0.50);
  // Phase 3 (0.50–0.75): Mesh fades, central hub appears, 10 radial lines
  const phase3 = remap(progress, 0.50, 0.75);

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
          className="inline-block px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.12em] mb-4 border bg-[rgba(90,111,209,0.05)] border-[rgba(90,111,209,0.12)] text-[var(--ms-blue)] transition-opacity duration-700"
          style={{ opacity: enterOpacity }}
        >
          The math
        </span>

        <h2
          className="font-display text-[1.5rem] md:text-[2rem] leading-[1.12] text-[var(--ms-heading)] mb-8 md:mb-10 transition-opacity duration-700 delay-150"
          style={{ opacity: enterOpacity }}
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
              {/* Radial lines to 10 nodes (rendered first, behind hub) */}
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

              {/* Central hub (rendered last, on top of spokes) */}
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
          className="text-base md:text-lg font-semibold text-[var(--ms-heading)] text-center transition-opacity duration-700 delay-300"
          style={{ opacity: enterOpacity }}
        >
          Clinic fifty doesn&rsquo;t touch clinics one through&nbsp;forty-nine.
        </p>
      </div>
    </section>
  );
}
