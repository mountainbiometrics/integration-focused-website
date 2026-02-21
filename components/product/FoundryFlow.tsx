'use client';

import { useRef } from 'react';
import { useScrollProgress, remap } from '@/hooks/useScrollProgress';

const SOURCE_LABELS = ['EHRs', 'Billing', 'Vendors'];
const TOOL_LABELS = ['Warehouse', 'BI', 'Analytics'];
const BADGES = ['Continuous visibility', 'Less maintenance', 'Fast onboarding'];

const SVG_W = 600;
const SVG_H = 220;

/* Circle positions */
const SRC_CX = 100;
const FDR_CX = 300;
const TOOL_CX = 500;
const CY = 100;
const MAIN_R = 36;
const SAT_R = 8;
const SAT_OFFSET = 50;

/* Satellite positions around a circle */
function satellites(cx: number, cy: number, count: number, offset: number) {
  const out: { x: number; y: number }[] = [];
  for (let i = 0; i < count; i++) {
    const angle = -Math.PI / 2 + ((2 * Math.PI) / count) * i;
    out.push({ x: cx + Math.cos(angle) * offset, y: cy + Math.sin(angle) * offset });
  }
  return out;
}

const SRC_SATS = satellites(SRC_CX, CY, 3, SAT_OFFSET);
const TOOL_SATS = satellites(TOOL_CX, CY, 3, SAT_OFFSET);

export default function FoundryFlow() {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useScrollProgress(sectionRef, { startVh: 0.75, endVh: 0.10 });

  /* Phase 1: Sources materialize (0–0.30) */
  const srcCircle = remap(progress, 0, 0.20);
  const srcSats = (i: number) => remap(progress, 0.08 + i * 0.06, 0.26 + i * 0.06);

  /* Phase 2: Foundry activates (0.25–0.55) */
  const arrowLeft = remap(progress, 0.25, 0.42);
  const foundryScale = remap(progress, 0.32, 0.50);
  const foundryBorder = remap(progress, 0.30, 0.52);
  const pulseRing = remap(progress, 0.48, 0.58);

  /* Phase 3: Tools receive (0.50–0.80) */
  const arrowRight = remap(progress, 0.50, 0.67);
  const toolCircle = remap(progress, 0.58, 0.72);
  const toolSats = (i: number) => remap(progress, 0.62 + i * 0.05, 0.76 + i * 0.05);

  /* Data dots flowing along arrows */
  const dot1 = remap(progress, 0.36, 0.50);
  const dot2 = remap(progress, 0.62, 0.76);

  /* Phase 4: Outcome badges (0.75–1.0) */
  const badgeFade = (i: number) => remap(progress, 0.78 + i * 0.06, 0.90 + i * 0.06);

  return (
    <section ref={sectionRef} className="section-spacing bg-[var(--ms-surface)]">
      <div className="container-site">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display leading-[1.12] text-[var(--ms-heading)] text-2xl md:text-3xl mb-8 text-center">
            What MTN Data Foundry does
          </h2>

          {/* SVG Diagram */}
          <div className="flex justify-center mb-8">
            <svg
              viewBox={`0 0 ${SVG_W} ${SVG_H}`}
              className="w-full max-w-[540px] h-auto"
              aria-label="Data flows from sources through the Foundry to your tools"
            >
              {/* Source circle */}
              <circle
                cx={SRC_CX} cy={CY} r={MAIN_R}
                fill="white"
                stroke="var(--ms-border)"
                strokeWidth="2"
                opacity={srcCircle}
                transform={`translate(0,${(1 - srcCircle) * 12})`}
              />
              <text
                x={SRC_CX} y={CY + 1}
                textAnchor="middle" dominantBaseline="central"
                fontSize="11" fontWeight="600" fill="var(--ms-heading)"
                opacity={srcCircle}
              >
                Sources
              </text>

              {/* Source satellites */}
              {SRC_SATS.map((s, i) => {
                const a = srcSats(i);
                return (
                  <g key={`ss-${i}`}>
                    <circle
                      cx={s.x} cy={s.y} r={SAT_R}
                      fill="var(--ms-muted)"
                      opacity={a}
                      transform={`scale(${0.3 + a * 0.7})`}
                      style={{ transformOrigin: `${s.x}px ${s.y}px`, transformBox: 'fill-box' }}
                    />
                    <text
                      x={s.x} y={s.y + SAT_R + 12}
                      textAnchor="middle" fontSize="9" fill="var(--ms-body-light)"
                      opacity={a}
                    >
                      {SOURCE_LABELS[i]}
                    </text>
                  </g>
                );
              })}

              {/* Left arrow */}
              <line
                x1={SRC_CX + MAIN_R + 8} y1={CY}
                x2={FDR_CX - MAIN_R - 8} y2={CY}
                stroke="var(--ms-muted)"
                strokeWidth="2"
                strokeDasharray="120"
                strokeDashoffset={120 * (1 - arrowLeft)}
                strokeLinecap="round"
              />
              {/* Left arrowhead */}
              <polygon
                points={`${FDR_CX - MAIN_R - 8},${CY} ${FDR_CX - MAIN_R - 16},${CY - 5} ${FDR_CX - MAIN_R - 16},${CY + 5}`}
                fill="var(--ms-muted)"
                opacity={arrowLeft}
              />

              {/* Data dot 1 flowing left→center */}
              {dot1 > 0 && dot1 < 1 && (
                <circle
                  cx={SRC_CX + MAIN_R + 8 + dot1 * (FDR_CX - SRC_CX - 2 * MAIN_R - 16)}
                  cy={CY}
                  r={4}
                  fill="var(--ms-blue)"
                  opacity={0.8}
                />
              )}

              {/* Foundry circle */}
              <circle
                cx={FDR_CX} cy={CY}
                r={MAIN_R + 2}
                fill="none"
                stroke="var(--ms-blue)"
                strokeWidth="2.5"
                strokeDasharray={Math.PI * 2 * (MAIN_R + 2)}
                strokeDashoffset={Math.PI * 2 * (MAIN_R + 2) * (1 - foundryBorder)}
              />
              <circle
                cx={FDR_CX} cy={CY} r={MAIN_R}
                fill="rgba(90,111,209,0.08)"
                opacity={foundryScale}
                transform={`scale(${0.85 + foundryScale * 0.15})`}
                style={{ transformOrigin: `${FDR_CX}px ${CY}px`, transformBox: 'fill-box' }}
              />
              <text
                x={FDR_CX} y={CY + 1}
                textAnchor="middle" dominantBaseline="central"
                fontSize="12" fontWeight="700" fill="var(--ms-blue)"
                opacity={foundryScale}
              >
                Foundry
              </text>

              {/* Pulse ring */}
              {pulseRing > 0 && pulseRing < 1 && (
                <circle
                  cx={FDR_CX} cy={CY}
                  r={MAIN_R + 4 + pulseRing * 20}
                  fill="none"
                  stroke="var(--ms-blue)"
                  strokeWidth="1.5"
                  opacity={0.5 * (1 - pulseRing)}
                />
              )}

              {/* Right arrow */}
              <line
                x1={FDR_CX + MAIN_R + 8} y1={CY}
                x2={TOOL_CX - MAIN_R - 8} y2={CY}
                stroke="var(--ms-blue)"
                strokeWidth="2"
                strokeDasharray="120"
                strokeDashoffset={120 * (1 - arrowRight)}
                strokeLinecap="round"
              />
              {/* Right arrowhead */}
              <polygon
                points={`${TOOL_CX - MAIN_R - 8},${CY} ${TOOL_CX - MAIN_R - 16},${CY - 5} ${TOOL_CX - MAIN_R - 16},${CY + 5}`}
                fill="var(--ms-blue)"
                opacity={arrowRight}
              />

              {/* Data dot 2 flowing center→right */}
              {dot2 > 0 && dot2 < 1 && (
                <circle
                  cx={FDR_CX + MAIN_R + 8 + dot2 * (TOOL_CX - FDR_CX - 2 * MAIN_R - 16)}
                  cy={CY}
                  r={4}
                  fill="var(--ms-blue)"
                  opacity={0.8}
                />
              )}

              {/* Tools circle */}
              <circle
                cx={TOOL_CX} cy={CY} r={MAIN_R}
                fill="white"
                stroke="var(--ms-border)"
                strokeWidth="2"
                opacity={toolCircle}
                transform={`translate(0,${(1 - toolCircle) * 12})`}
              />
              <text
                x={TOOL_CX} y={CY + 1}
                textAnchor="middle" dominantBaseline="central"
                fontSize="11" fontWeight="600" fill="var(--ms-heading)"
                opacity={toolCircle}
              >
                Tools
              </text>

              {/* Tool satellites */}
              {TOOL_SATS.map((s, i) => {
                const a = toolSats(i);
                return (
                  <g key={`ts-${i}`}>
                    <circle
                      cx={s.x} cy={s.y} r={SAT_R}
                      fill="var(--ms-blue)"
                      opacity={a}
                      transform={`scale(${0.3 + a * 0.7})`}
                      style={{ transformOrigin: `${s.x}px ${s.y}px`, transformBox: 'fill-box' }}
                    />
                    <text
                      x={s.x} y={s.y + SAT_R + 12}
                      textAnchor="middle" fontSize="9" fill="var(--ms-body-light)"
                      opacity={a}
                    >
                      {TOOL_LABELS[i]}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Outcome badges */}
          <div className="flex flex-wrap justify-center gap-3">
            {BADGES.map((badge, i) => {
              const a = badgeFade(i);
              return (
                <span
                  key={badge}
                  className="px-4 py-1.5 rounded-full text-sm font-medium border"
                  style={{
                    opacity: a,
                    transform: `translateY(${(1 - a) * 10}px)`,
                    backgroundColor: 'rgba(90,111,209,0.06)',
                    borderColor: 'rgba(90,111,209,0.15)',
                    color: 'var(--ms-blue)',
                  }}
                >
                  {badge}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
