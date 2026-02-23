'use client';

import { useRef } from 'react';
import { useScrollProgress, remap } from '@/hooks/useScrollProgress';

const SVG_W = 600;
const SVG_H = 280;
const LANE_X1 = 100;
const LANE_X2 = 480;
const BELL_X = 516;
const LANE_GAP = 80;
const LANE_Y_START = 55;

function laneY(i: number) {
  return LANE_Y_START + i * LANE_GAP;
}

/* Deterministic heartbeat pulse positions */
const PULSE_COUNT = 8;
function pulseX(i: number, total: number) {
  return LANE_X1 + ((i + 0.5) / total) * (LANE_X2 - LANE_X1);
}

/* Deterministic data shape positions */
const SHAPE_COUNT = 6;

/* Deterministic value positions */
const VALUES = ['98', '97', '99', '96', '23', '98'];

export default function MonitoringPulse() {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useScrollProgress(sectionRef, { startVh: 0.75, endVh: -0.05 });

  /* Lane 1: Transmission health (0–0.35) */
  const lane1Enter = remap(progress, 0, 0.12);
  const lane1Pulses = remap(progress, 0.05, 0.28);
  const lane1Gap = remap(progress, 0.18, 0.25);
  const lane1Bell = remap(progress, 0.22, 0.30);

  /* Lane 2: Schema drift (0.30–0.65) */
  const lane2Enter = remap(progress, 0.28, 0.38);
  const lane2Shapes = remap(progress, 0.32, 0.52);
  const lane2Bad = remap(progress, 0.44, 0.52);
  const lane2Bell = remap(progress, 0.50, 0.58);

  /* Lane 3: Quality alerts (0.60–0.90) */
  const lane3Enter = remap(progress, 0.58, 0.68);
  const lane3Values = remap(progress, 0.62, 0.78);
  const lane3Outlier = remap(progress, 0.72, 0.78);
  const lane3Bell = remap(progress, 0.76, 0.84);
  const lane3Flag = remap(progress, 0.82, 0.88);

  /* Close: all bells glow (0.85–1.0) */
  const allGlow = remap(progress, 0.88, 0.96);
  const closeLine = remap(progress, 0.90, 0.98);

  const y1 = laneY(0);
  const y2 = laneY(1);
  const y3 = laneY(2);

  return (
    <section ref={sectionRef} className="section-spacing bg-[var(--ms-surface)]">
      <div className="container-site">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display leading-[1.12] text-[var(--ms-heading)] text-2xl md:text-3xl mb-3 text-center">
            Continuous monitoring
          </h2>
          <p className="text-[var(--ms-body)] text-center mb-10 max-w-2xl mx-auto">
            Early warning before downstream impact.
          </p>

          {/* SVG Lanes */}
          <div className="flex justify-center mb-6">
            <svg
              viewBox={`0 0 ${SVG_W} ${SVG_H}`}
              className="w-full max-w-[520px] h-auto"
              aria-label="Three monitoring lanes detecting transmission gaps, schema drift, and quality anomalies"
            >
              {/* ── Lane 1: Transmission health ── */}
              <g opacity={lane1Enter}>
                {/* Lane label */}
                <text x={LANE_X1 - 10} y={y1 + 1} textAnchor="end" dominantBaseline="central" fontSize="15" fontWeight="600" fill="var(--ms-heading)">
                  Transmission
                </text>
                {/* Lane line */}
                <line x1={LANE_X1} y1={y1} x2={LANE_X2} y2={y1} stroke="var(--ms-border)" strokeWidth="1" opacity={0.5} />

                {/* Heartbeat pulses — after gap point (i >= 5), all show as X (no data) */}
                {Array.from({ length: PULSE_COUNT }).map((_, i) => {
                  const px = pulseX(i, PULSE_COUNT);
                  const a = remap(lane1Pulses, i * 0.1, i * 0.1 + 0.3);
                  const isAfterGap = i >= 5;
                  const gapVisible = isAfterGap && lane1Gap > 0.3;

                  if (gapVisible) {
                    return (
                      <g key={`p1-${i}`} opacity={a}>
                        <line
                          x1={px - 6} y1={y1 - 8} x2={px + 6} y2={y1 + 8}
                          stroke="#EF5350" strokeWidth="2" strokeLinecap="round"
                          opacity={0.7}
                        />
                        <line
                          x1={px + 6} y1={y1 - 8} x2={px - 6} y2={y1 + 8}
                          stroke="#EF5350" strokeWidth="2" strokeLinecap="round"
                          opacity={0.7}
                        />
                      </g>
                    );
                  }

                  return (
                    <circle
                      key={`p1-${i}`}
                      cx={px} cy={y1} r={4}
                      fill="var(--ms-blue)"
                      opacity={a}
                    />
                  );
                })}

                {/* Bell icon */}
                <g opacity={lane1Bell} transform={`translate(${BELL_X}, ${y1 - 10})`}>
                  <BellIcon active={lane1Bell > 0.5} glowing={allGlow > 0.5} />
                </g>

                {/* Tooltip */}
                {lane1Bell > 0.5 && (
                  <g opacity={Math.min((lane1Bell - 0.5) * 3, 1)}>
                    <rect x={BELL_X - 66} y={y1 + 14} width={145} height={24} rx={4} fill="var(--ms-heading)" />
                    <text x={BELL_X + 6} y={y1 + 26} textAnchor="middle" dominantBaseline="central" fontSize="13" fill="white">
                      Source stopped sending
                    </text>
                  </g>
                )}
              </g>

              {/* ── Lane 2: Schema drift ── */}
              <g opacity={lane2Enter}>
                <text x={LANE_X1 - 10} y={y2 + 1} textAnchor="end" dominantBaseline="central" fontSize="15" fontWeight="600" fill="var(--ms-heading)">
                  Schema
                </text>
                <line x1={LANE_X1} y1={y2} x2={LANE_X2} y2={y2} stroke="var(--ms-border)" strokeWidth="1" opacity={0.5} />

                {/* Data shapes — after drift point (i >= 3), all show as amber mismatched rectangles */}
                {Array.from({ length: SHAPE_COUNT }).map((_, i) => {
                  const sx = LANE_X1 + ((i + 0.5) / SHAPE_COUNT) * (LANE_X2 - LANE_X1);
                  const a = remap(lane2Shapes, i * 0.12, i * 0.12 + 0.3);
                  const isAfterDrift = i >= 3;
                  const driftVisible = isAfterDrift && lane2Bad > 0.3;

                  if (driftVisible) {
                    return (
                      <rect
                        key={`s2-${i}`}
                        x={sx - 6} y={y2 - 8}
                        width={12} height={16}
                        rx={2}
                        fill="#F59E0B" opacity={a * 0.8}
                      />
                    );
                  }

                  return (
                    <rect
                      key={`s2-${i}`}
                      x={sx - 5} y={y2 - 5}
                      width={10} height={10}
                      rx={2}
                      fill="var(--ms-blue)"
                      opacity={a}
                    />
                  );
                })}

                <g opacity={lane2Bell} transform={`translate(${BELL_X}, ${y2 - 10})`}>
                  <BellIcon active={lane2Bell > 0.5} glowing={allGlow > 0.5} />
                </g>

                {lane2Bell > 0.5 && (
                  <g opacity={Math.min((lane2Bell - 0.5) * 3, 1)}>
                    <rect x={BELL_X - 58} y={y2 + 14} width={130} height={24} rx={4} fill="var(--ms-heading)" />
                    <text x={BELL_X + 6} y={y2 + 26} textAnchor="middle" dominantBaseline="central" fontSize="13" fill="white">
                      Structure changed
                    </text>
                  </g>
                )}
              </g>

              {/* ── Lane 3: Quality alerts ── */}
              <g opacity={lane3Enter}>
                <text x={LANE_X1 - 10} y={y3 + 1} textAnchor="end" dominantBaseline="central" fontSize="15" fontWeight="600" fill="var(--ms-heading)">
                  Quality
                </text>
                <line x1={LANE_X1} y1={y3} x2={LANE_X2} y2={y3} stroke="var(--ms-border)" strokeWidth="1" opacity={0.5} />

                {/* Number values flowing */}
                {VALUES.map((val, i) => {
                  const vx = LANE_X1 + ((i + 0.5) / VALUES.length) * (LANE_X2 - LANE_X1);
                  const a = remap(lane3Values, i * 0.12, i * 0.12 + 0.3);
                  const isOutlier = val === '23';
                  const outlierActive = isOutlier && lane3Outlier > 0.3;
                  const flagged = isOutlier && lane3Flag > 0.5;

                  return (
                    <g key={`v3-${i}`} opacity={a}>
                      <rect
                        x={vx - 16} y={y3 - 12}
                        width={32} height={24} rx={4}
                        fill={outlierActive ? (flagged ? 'rgba(239,83,80,0.15)' : 'rgba(239,83,80,0.25)') : 'rgba(90,111,209,0.08)'}
                        stroke={outlierActive ? '#EF5350' : 'var(--ms-border)'}
                        strokeWidth="1"
                      />
                      <text
                        x={vx} y={y3 + 1}
                        textAnchor="middle" dominantBaseline="central"
                        fontSize="14" fontWeight="600" fontFamily="monospace"
                        fill={outlierActive ? '#EF5350' : 'var(--ms-heading)'}
                      >
                        {val}
                      </text>
                      {/* Flag icon for outlier */}
                      {flagged && (
                        <g opacity={lane3Flag}>
                          <line x1={vx + 16} y1={y3 - 8} x2={vx + 16} y2={y3 + 8} stroke="#EF5350" strokeWidth="1" />
                          <polygon
                            points={`${vx + 16},${y3 - 8} ${vx + 24},${y3 - 5} ${vx + 16},${y3 - 2}`}
                            fill="#EF5350" opacity={0.7}
                          />
                        </g>
                      )}
                    </g>
                  );
                })}

                <g opacity={lane3Bell} transform={`translate(${BELL_X}, ${y3 - 10})`}>
                  <BellIcon active={lane3Bell > 0.5} glowing={allGlow > 0.5} />
                </g>

                {lane3Bell > 0.5 && (
                  <g opacity={Math.min((lane3Bell - 0.5) * 3, 1)}>
                    <rect x={BELL_X - 56} y={y3 + 14} width={126} height={24} rx={4} fill="var(--ms-heading)" />
                    <text x={BELL_X + 6} y={y3 + 26} textAnchor="middle" dominantBaseline="central" fontSize="13" fill="white">
                      Anomaly detected
                    </text>
                  </g>
                )}
              </g>
            </svg>
          </div>

          {/* Closing line */}
          <p
            className="text-base font-medium text-[var(--ms-heading)] text-center max-w-lg mx-auto"
            style={{
              opacity: closeLine,
              transform: `translateY(${(1 - closeLine) * 8}px)`,
            }}
          >
            Issues surface before they reach downstream systems.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ── Bell icon sub-component ── */

function BellIcon({ active, glowing }: { active: boolean; glowing: boolean }) {
  const color = glowing ? 'var(--ms-blue)' : active ? '#F59E0B' : 'var(--ms-muted)';
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M10 2C7.24 2 5 4.24 5 7v3.5L3.5 13v1h13v-1L15 10.5V7c0-2.76-2.24-5-5-5z"
        fill={color}
        opacity={0.2}
      />
      <path
        d="M10 2C7.24 2 5 4.24 5 7v3.5L3.5 13v1h13v-1L15 10.5V7c0-2.76-2.24-5-5-5z"
        stroke={color}
        strokeWidth="1.2"
        fill="none"
      />
      <circle cx="10" cy="17" r="1.5" fill={color} />
      {/* Glow ring */}
      {glowing && (
        <circle cx="10" cy="10" r="12" fill="none" stroke="var(--ms-blue)" strokeWidth="1" opacity={0.3} />
      )}
    </svg>
  );
}
