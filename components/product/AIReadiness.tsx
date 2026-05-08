'use client';

import { useRef } from 'react';
import { useScrollProgress, remap } from '@/hooks/useScrollProgress';

const CONCEPTS = ['Patient', 'Encounter', 'Claim', 'Schedule'];
const MODELS = ['Claude', 'GPT', 'Gemini', 'Your own'];

const SVG_W = 620;
const SVG_H = 280;

const LAYER_X = 80;
const LAYER_Y = 80;
const LAYER_W = 180;
const LAYER_H = 140;
const CONCEPT_SIZE = 70;
const CONCEPT_GAP = 10;

const MODEL_START_X = 420;
const MODEL_Y_START = 40;
const MODEL_GAP = 60;
const MODEL_R = 32;

export default function AIReadiness() {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useScrollProgress(sectionRef, { startVh: 0.75, endVh: -0.05 });

  /* Phase 1: Canonical layer appears (0–0.30) */
  const layerBox = remap(progress, 0, 0.18);
  const conceptBoxes = (i: number) => remap(progress, 0.08 + i * 0.04, 0.24 + i * 0.04);

  /* Phase 2: Query arrives (0.25–0.45) */
  const queryArrow = remap(progress, 0.25, 0.40);
  const queryPulse = remap(progress, 0.38, 0.48);

  /* Phase 3: Data flows to models (0.45–0.75) */
  const dataFlow = (i: number) => remap(progress, 0.45 + i * 0.05, 0.65 + i * 0.05);
  const modelActivate = (i: number) => remap(progress, 0.55 + i * 0.05, 0.70 + i * 0.05);

  /* Phase 4: Compliance badge (0.72–0.90) */
  const complianceBadge = remap(progress, 0.72, 0.88);

  return (
    <section ref={sectionRef} className="section-spacing">
      <div className="container-site">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display leading-[1.12] text-[var(--ms-heading)] text-2xl md:text-3xl mb-3 text-center">
            Ready for what you deploy next.
          </h2>
          <p className="text-[var(--ms-body)] text-center mb-10 max-w-2xl mx-auto">
            A canonical layer your next model reads from on day one. Claude, GPT, Gemini, or your own.
          </p>

          {/* SVG Diagram */}
          <div className="flex justify-center mb-6">
            <svg
              viewBox={`0 0 ${SVG_W} ${SVG_H}`}
              className="w-full max-w-[784px] h-auto"
              aria-label="Query flows from canonical layer to multiple AI models simultaneously"
            >
              {/* Canonical layer container */}
              <rect
                x={LAYER_X} y={LAYER_Y}
                width={LAYER_W} height={LAYER_H}
                rx={8}
                fill="rgba(90,111,209,0.06)"
                stroke="var(--ms-blue)"
                strokeWidth="2"
                opacity={layerBox}
              />
              <text
                x={LAYER_X + LAYER_W / 2} y={LAYER_Y - 10}
                textAnchor="middle" fontSize="14" fontWeight="600"
                fill="var(--ms-blue)" opacity={layerBox}
              >
                Canonical Layer
              </text>

              {/* Concept boxes (2×2 grid inside canonical layer) */}
              {CONCEPTS.map((concept, i) => {
                const a = conceptBoxes(i);
                const row = Math.floor(i / 2);
                const col = i % 2;
                const x = LAYER_X + 10 + col * (CONCEPT_SIZE + CONCEPT_GAP);
                const y = LAYER_Y + 20 + row * (CONCEPT_SIZE + CONCEPT_GAP);

                return (
                  <g key={`concept-${i}`} opacity={a}>
                    <rect
                      x={x} y={y}
                      width={CONCEPT_SIZE} height={CONCEPT_SIZE}
                      rx={6}
                      fill="white"
                      stroke="var(--ms-blue)"
                      strokeWidth="1.5"
                    />
                    <text
                      x={x + CONCEPT_SIZE / 2} y={y + CONCEPT_SIZE / 2 + 1}
                      textAnchor="middle" dominantBaseline="central"
                      fontSize="11" fontWeight="600" fill="var(--ms-heading)"
                    >
                      {concept}
                    </text>
                  </g>
                );
              })}

              {/* Query arrow arriving from left */}
              <line
                x1={20} y1={LAYER_Y + LAYER_H / 2}
                x2={LAYER_X - 10} y2={LAYER_Y + LAYER_H / 2}
                stroke="var(--ms-muted)"
                strokeWidth="2"
                strokeDasharray="40"
                strokeDashoffset={40 * (1 - queryArrow)}
                strokeLinecap="round"
              />
              <polygon
                points={`${LAYER_X - 10},${LAYER_Y + LAYER_H / 2} ${LAYER_X - 18},${LAYER_Y + LAYER_H / 2 - 5} ${LAYER_X - 18},${LAYER_Y + LAYER_H / 2 + 5}`}
                fill="var(--ms-muted)"
                opacity={queryArrow}
              />

              {/* Query pulse on canonical layer */}
              {queryPulse > 0 && queryPulse < 1 && (
                <circle
                  cx={LAYER_X + LAYER_W / 2} cy={LAYER_Y + LAYER_H / 2}
                  r={20 + queryPulse * 30}
                  fill="none"
                  stroke="var(--ms-blue)"
                  strokeWidth="1.5"
                  opacity={0.4 * (1 - queryPulse)}
                />
              )}

              {/* AI Models on the right */}
              {MODELS.map((model, i) => {
                const modelX = MODEL_START_X;
                const modelY = MODEL_Y_START + i * MODEL_GAP;
                const a = modelActivate(i);
                const flowProgress = dataFlow(i);

                return (
                  <g key={`model-${i}`}>
                    {/* Data flow line from layer to model */}
                    <line
                      x1={LAYER_X + LAYER_W + 10} y1={LAYER_Y + LAYER_H / 2}
                      x2={modelX - MODEL_R - 8} y2={modelY}
                      stroke="var(--ms-blue)"
                      strokeWidth="1.5"
                      strokeDasharray="120"
                      strokeDashoffset={120 * (1 - flowProgress)}
                      strokeLinecap="round"
                      opacity={0.6}
                    />

                    {/* Data dot flowing along the line */}
                    {flowProgress > 0 && flowProgress < 1 && (
                      <circle
                        cx={LAYER_X + LAYER_W + 10 + flowProgress * (modelX - MODEL_R - 8 - LAYER_X - LAYER_W - 10)}
                        cy={LAYER_Y + LAYER_H / 2 + flowProgress * (modelY - LAYER_Y - LAYER_H / 2)}
                        r={4}
                        fill="var(--ms-blue)"
                        opacity={0.8}
                      />
                    )}

                    {/* Model circle */}
                    <circle
                      cx={modelX} cy={modelY} r={MODEL_R}
                      fill={a > 0.5 ? 'rgba(90,111,209,0.12)' : 'white'}
                      stroke={a > 0.5 ? 'var(--ms-blue)' : 'var(--ms-border)'}
                      strokeWidth={a > 0.5 ? '2' : '1.5'}
                      opacity={modelActivate(i)}
                    />
                    <text
                      x={modelX} y={modelY + 1}
                      textAnchor="middle" dominantBaseline="central"
                      fontSize="12" fontWeight="600"
                      fill={a > 0.5 ? 'var(--ms-blue)' : 'var(--ms-heading)'}
                      opacity={modelActivate(i)}
                    >
                      {model}
                    </text>

                    {/* Activation glow */}
                    {a > 0.5 && (
                      <circle
                        cx={modelX} cy={modelY}
                        r={MODEL_R + 4}
                        fill="none"
                        stroke="var(--ms-blue)"
                        strokeWidth="1"
                        opacity={0.3 * a}
                      />
                    )}
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Compliance badge */}
          <div
            className="flex items-center justify-center gap-3"
            style={{ opacity: complianceBadge, transform: `translateY(${(1 - complianceBadge) * 8}px)` }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
              <path
                d="M12 3L4 7v5c0 5.25 3.4 10.15 8 11.25 4.6-1.1 8-6 8-11.25V7l-8-4z"
                fill="rgba(76,175,80,0.10)" stroke="#4CAF50" strokeWidth="1.5"
              />
              <path
                d="M9 12l2 2 4-4"
                stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"
              />
            </svg>
            <p className="text-sm font-semibold text-[#4CAF50]">
              Every model query lands inside the compliance perimeter
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
