'use client';

import { useRef } from 'react';
import { useScrollProgress, remap } from '@/hooks/useScrollProgress';

const SOURCE_FIELDS = ['customer_id', 'dob', 'account_num', 'policy_num', 'vendor_id'];
const TARGET_FIELDS = ['client_id', 'birth_date', 'account_number', 'policy_number', 'supplier_id'];
const CONFIDENCE = ['99%', '98%', '97%', '99%', '?'];

const SVG_W = 620;
const SVG_H = 260;

const SRC_X = 40;
const FDR_CX = SVG_W / 2;
const TGT_X = SVG_W - 40;
const FIELD_W = 100;
const FIELD_H = 28;
const FIELD_GAP = 8;
const FIELD_START_Y = 40;

function fieldY(i: number) {
  return FIELD_START_Y + i * (FIELD_H + FIELD_GAP);
}

export default function MappingCascade() {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useScrollProgress(sectionRef, { startVh: 0.75, endVh: -0.05 });

  /* Phase 1: Recognition (0–0.35) */
  const srcBoxFade = remap(progress, 0, 0.15);
  const srcFields = (i: number) => remap(progress, 0.05 + i * 0.04, 0.18 + i * 0.04);
  const arrowToFoundry = remap(progress, 0.18, 0.32);
  const foundryPulse = remap(progress, 0.28, 0.38);

  /* Phase 2: Suggestion (0.30–0.65) */
  const tgtFields = (i: number) => remap(progress, 0.30 + i * 0.04, 0.44 + i * 0.04);
  const connectors = (i: number) => remap(progress, 0.38 + i * 0.05, 0.55 + i * 0.05);
  const confBadges = (i: number) => remap(progress, 0.50 + i * 0.04, 0.62 + i * 0.04);

  /* Phase 3: Human review (0.60–0.90) */
  const uncertainPulse = remap(progress, 0.60, 0.72);
  const reviewIcon = remap(progress, 0.68, 0.78);
  const resolvedLine = remap(progress, 0.78, 0.88);

  /* Takeaways */
  const takeaway1 = remap(progress, 0.22, 0.34);
  const takeaway2 = remap(progress, 0.55, 0.65);
  const takeaway3 = remap(progress, 0.85, 0.95);

  const lastIdx = SOURCE_FIELDS.length - 1;

  return (
    <section ref={sectionRef} className="section-spacing">
      <div className="container-site">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display leading-[1.12] text-[var(--ms-heading)] text-2xl md:text-3xl mb-3 text-center">
            Self-organizing integration
          </h2>
          <p className="text-[var(--ms-body)] text-center mb-10 max-w-2xl mx-auto">
            New systems come online quickly because the Foundry learns from existing mappings.
          </p>

          {/* SVG Diagram */}
          <div className="flex justify-center mb-6">
            <svg
              viewBox={`0 0 ${SVG_W} ${SVG_H}`}
              className="w-full max-w-[560px] h-auto"
              aria-label="Fields from a new source are automatically mapped to target fields through the Foundry"
            >
              {/* "New source" label */}
              <text
                x={SRC_X + FIELD_W / 2} y={24}
                textAnchor="middle" fontSize="14" fontWeight="600"
                fill="var(--ms-heading)" opacity={srcBoxFade}
              >
                New source
              </text>

              {/* Source field boxes */}
              {SOURCE_FIELDS.map((field, i) => {
                const a = srcFields(i);
                const y = fieldY(i);
                return (
                  <g key={`sf-${i}`} opacity={a} transform={`translate(${(1 - a) * -16}, 0)`}>
                    <rect
                      x={SRC_X} y={y}
                      width={FIELD_W} height={FIELD_H}
                      rx={6} fill="var(--ms-surface)"
                      stroke="var(--ms-border)" strokeWidth="1"
                    />
                    <text
                      x={SRC_X + FIELD_W / 2} y={y + FIELD_H / 2 + 1}
                      textAnchor="middle" dominantBaseline="central"
                      fontSize="9" fontFamily="monospace" fill="var(--ms-heading)"
                    >
                      {field}
                    </text>
                  </g>
                );
              })}

              {/* Foundry circle */}
              <circle
                cx={FDR_CX} cy={SVG_H / 2} r={24}
                fill="rgba(90,111,209,0.08)"
                stroke="var(--ms-blue)" strokeWidth="2"
                opacity={arrowToFoundry}
              />
              <text
                x={FDR_CX} y={SVG_H / 2 + 1}
                textAnchor="middle" dominantBaseline="central"
                fontSize="8" fontWeight="700" fill="var(--ms-blue)"
                opacity={arrowToFoundry}
              >
                Foundry
              </text>

              {/* Pulse ring */}
              {foundryPulse > 0 && foundryPulse < 1 && (
                <circle
                  cx={FDR_CX} cy={SVG_H / 2}
                  r={24 + foundryPulse * 16}
                  fill="none" stroke="var(--ms-blue)" strokeWidth="1.5"
                  opacity={0.5 * (1 - foundryPulse)}
                />
              )}

              {/* "Target fields" label */}
              <text
                x={TGT_X - FIELD_W / 2} y={24}
                textAnchor="middle" fontSize="14" fontWeight="600"
                fill="var(--ms-heading)" opacity={tgtFields(0)}
              >
                Target fields
              </text>

              {/* Target field boxes */}
              {TARGET_FIELDS.map((field, i) => {
                const a = tgtFields(i);
                const y = fieldY(i);
                return (
                  <g key={`tf-${i}`} opacity={a} transform={`translate(${(1 - a) * 16}, 0)`}>
                    <rect
                      x={TGT_X - FIELD_W} y={y}
                      width={FIELD_W} height={FIELD_H}
                      rx={6} fill="var(--ms-surface)"
                      stroke="var(--ms-border)" strokeWidth="1"
                    />
                    <text
                      x={TGT_X - FIELD_W / 2} y={y + FIELD_H / 2 + 1}
                      textAnchor="middle" dominantBaseline="central"
                      fontSize="9" fontFamily="monospace" fill="var(--ms-heading)"
                    >
                      {field}
                    </text>
                  </g>
                );
              })}

              {/* Connector lines from source → foundry → target */}
              {SOURCE_FIELDS.map((_, i) => {
                const c = connectors(i);
                const isUncertain = i === lastIdx;
                const srcY = fieldY(i) + FIELD_H / 2;
                const tgtY = fieldY(i) + FIELD_H / 2;

                /* If this is the uncertain one, check if resolved */
                const resolved = isUncertain && resolvedLine >= 1;
                const lineColor = isUncertain && !resolved
                  ? 'var(--ms-muted)'
                  : 'var(--ms-blue)';
                const dashArray = isUncertain && !resolved ? '4 3' : 'none';

                /* Amber pulse for uncertain connector */
                const amberOpacity = isUncertain ? uncertainPulse * (1 - resolvedLine) : 0;

                return (
                  <g key={`con-${i}`}>
                    {/* Left segment: source → foundry */}
                    <line
                      x1={SRC_X + FIELD_W + 4} y1={srcY}
                      x2={FDR_CX - 28} y2={SVG_H / 2}
                      stroke={lineColor}
                      strokeWidth="1.2"
                      strokeDasharray={dashArray}
                      opacity={c * 0.6}
                      strokeLinecap="round"
                    />
                    {/* Right segment: foundry → target */}
                    <line
                      x1={FDR_CX + 28} y1={SVG_H / 2}
                      x2={TGT_X - FIELD_W - 4} y2={tgtY}
                      stroke={lineColor}
                      strokeWidth="1.2"
                      strokeDasharray={dashArray}
                      opacity={c * 0.6}
                      strokeLinecap="round"
                    />

                    {/* Confidence badge */}
                    {!isUncertain && (
                      <g opacity={confBadges(i)}>
                        <rect
                          x={TGT_X + 4} y={tgtY - 9}
                          width={28} height={18}
                          rx={9} fill="rgba(90,111,209,0.10)"
                        />
                        <text
                          x={TGT_X + 18} y={tgtY + 1}
                          textAnchor="middle" dominantBaseline="central"
                          fontSize="8" fontWeight="600" fill="var(--ms-blue)"
                        >
                          {CONFIDENCE[i]}
                        </text>
                      </g>
                    )}

                    {/* Checkmark for confirmed matches */}
                    {!isUncertain && confBadges(i) > 0.5 && (
                      <g opacity={confBadges(i)}>
                        <circle cx={TGT_X - FIELD_W - 14} cy={tgtY} r={6} fill="var(--ms-blue)" opacity={0.15} />
                        <path
                          d={`M${TGT_X - FIELD_W - 17},${tgtY} l2,2 4,-4`}
                          stroke="var(--ms-blue)" strokeWidth="1.5" fill="none"
                          strokeLinecap="round" strokeLinejoin="round"
                        />
                      </g>
                    )}

                    {/* Amber glow for uncertain */}
                    {isUncertain && amberOpacity > 0 && (
                      <circle
                        cx={(SRC_X + FIELD_W + 4 + FDR_CX - 28) / 2}
                        cy={(srcY + SVG_H / 2) / 2}
                        r={6}
                        fill="#F59E0B"
                        opacity={amberOpacity * 0.5}
                      />
                    )}

                    {/* "?" badge for uncertain */}
                    {isUncertain && (
                      <g opacity={confBadges(i)}>
                        <rect
                          x={TGT_X + 4} y={tgtY - 9}
                          width={22} height={18}
                          rx={9} fill="rgba(245,158,11,0.15)"
                        />
                        <text
                          x={TGT_X + 15} y={tgtY + 1}
                          textAnchor="middle" dominantBaseline="central"
                          fontSize="9" fontWeight="700" fill="#F59E0B"
                        >
                          ?
                        </text>
                      </g>
                    )}

                    {/* Review icon for uncertain */}
                    {isUncertain && reviewIcon > 0 && (
                      <g opacity={reviewIcon}>
                        {/* Person + magnifier icon (simplified) */}
                        <circle
                          cx={FDR_CX} cy={srcY - 6}
                          r={5} fill="none" stroke="#F59E0B" strokeWidth="1.2"
                        />
                        <line
                          x1={FDR_CX + 3.5} y1={srcY - 2.5}
                          x2={FDR_CX + 7} y2={srcY + 1}
                          stroke="#F59E0B" strokeWidth="1.2" strokeLinecap="round"
                        />
                      </g>
                    )}

                    {/* Resolved checkmark for uncertain */}
                    {isUncertain && resolvedLine > 0.5 && (
                      <g opacity={resolvedLine}>
                        <circle cx={TGT_X - FIELD_W - 14} cy={tgtY} r={6} fill="var(--ms-blue)" opacity={0.15} />
                        <path
                          d={`M${TGT_X - FIELD_W - 17},${tgtY} l2,2 4,-4`}
                          stroke="var(--ms-blue)" strokeWidth="1.5" fill="none"
                          strokeLinecap="round" strokeLinejoin="round"
                        />
                      </g>
                    )}
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Phase takeaways */}
          <div className="space-y-3 max-w-xl mx-auto text-center">
            <p
              className="text-sm text-[var(--ms-heading)] font-medium"
              style={{ opacity: takeaway1, transform: `translateY(${(1 - takeaway1) * 8}px)` }}
            >
              Maps fields using values, naming patterns, and standards.
            </p>
            <p
              className="text-sm text-[var(--ms-heading)] font-medium"
              style={{ opacity: takeaway2, transform: `translateY(${(1 - takeaway2) * 8}px)` }}
            >
              High-confidence matches apply automatically.
            </p>
            <p
              className="text-sm text-[var(--ms-heading)] font-medium"
              style={{ opacity: takeaway3, transform: `translateY(${(1 - takeaway3) * 8}px)` }}
            >
              Low-confidence cases route to a human — never guesses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
