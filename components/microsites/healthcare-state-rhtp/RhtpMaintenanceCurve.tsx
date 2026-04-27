'use client';

import { useRef } from 'react';
import { useScrollProgress, remap } from '@/hooks/useScrollProgress';

const FOUNDRY_COLOR = '#657EE2';
const TRADITIONAL_BASE = '#4D4D4D';
const TRADITIONAL_HIGH = '#AC1F2D';

function lerpHex(a: string, b: string, t: number): string {
  const parse = (h: string) => [
    parseInt(h.slice(1, 3), 16),
    parseInt(h.slice(3, 5), 16),
    parseInt(h.slice(5, 7), 16),
  ];
  const [ar, ag, ab] = parse(a);
  const [br, bg, bb] = parse(b);
  const r = Math.round(ar + (br - ar) * t);
  const g = Math.round(ag + (bg - ag) * t);
  const b2 = Math.round(ab + (bb - ab) * t);
  return `rgb(${r}, ${g}, ${b2})`;
}

export default function RhtpMaintenanceCurve() {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useScrollProgress(sectionRef, { startVh: 0.50, endVh: -0.20 });

  const cardEntrance = remap(progress, 0, 0.22);
  const lineAnim = remap(progress, 0.15, 0.75);

  const svgWidth = 360;
  const svgHeight = 160;
  const xStart = 44;
  const xEnd = 340;
  const yBottom = 130;
  const yTop = 18;

  const drawX = xStart + lineAnim * (xEnd - xStart);

  const conventionalPoints: string[] = [];
  const foundryPoints: string[] = [];
  const steps = 60;
  for (let s = 0; s <= steps; s++) {
    const t = s / steps;
    const x = xStart + t * (xEnd - xStart);
    if (x > drawX) break;
    // Cubic traditional growth — superlinear, compounds with every facility and spec change
    const yConv = yBottom - t * t * t * (yBottom - yTop);
    conventionalPoints.push(`${x},${yConv}`);
    // Nearly flat Foundry curve
    const yFlat = yBottom - t * 0.10 * (yBottom - yTop);
    foundryPoints.push(`${x},${yFlat}`);
  }

  const convPath = conventionalPoints.length > 1 ? `M${conventionalPoints.join(' L')}` : '';
  const flatPath = foundryPoints.length > 1 ? `M${foundryPoints.join(' L')}` : '';

  const convColor =
    lineAnim < 0.5
      ? TRADITIONAL_BASE
      : lerpHex(TRADITIONAL_BASE, TRADITIONAL_HIGH, remap(lineAnim, 0.5, 1.0));

  const showAnnotation = lineAnim > 0.7;
  const annotationFade = remap(lineAnim, 0.7, 0.95);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 lg:py-32"
      style={{ backgroundColor: 'var(--ms-surface)' }}
    >
      <div className="container-site max-w-3xl mx-auto">
        <span
          className="inline-block px-4 py-1.5 rounded-full text-[13px] font-semibold uppercase tracking-[0.12em] mb-4 border"
          style={{
            backgroundColor: 'rgba(172,31,45,0.05)',
            borderColor: 'rgba(172,31,45,0.12)',
            color: 'var(--ms-primary)',
          }}
        >
          Why the burden compounds
        </span>
        <h2 className="font-display text-[1.5rem] md:text-[2rem] leading-[1.12] text-[var(--ms-heading)] mb-3">
          Traditional integration grows. Mapping-artifact architecture doesn&rsquo;t.
        </h2>
        <p className="text-base md:text-lg text-[var(--ms-body)] mb-10 md:mb-14 max-w-2xl">
          Traditional integration grows with every new facility onboarded and every annual
          specification change. Mapping-artifact architecture grows with neither.
        </p>

        <div
          className="bg-white rounded-2xl p-6 md:p-10"
          style={{
            opacity: cardEntrance,
            transform: `translateY(${(1 - cardEntrance) * 24}px)`,
            boxShadow: 'var(--ms-shadow-card-sm)',
          }}
        >
          <div className="flex items-center justify-center">
            <svg
              viewBox={`0 0 ${svgWidth} ${svgHeight}`}
              className="w-full h-auto"
              role="img"
              aria-label="Maintenance burden growth chart"
            >
              {/* Y axis label */}
              <text
                x={14}
                y={(yTop + yBottom) / 2}
                fill="var(--ms-muted)"
                fontSize="6"
                textAnchor="middle"
                transform={`rotate(-90, 14, ${(yTop + yBottom) / 2})`}
              >
                annual reporting hours (relative)
              </text>

              {/* X axis baseline */}
              <line
                x1={xStart}
                y1={yBottom}
                x2={xEnd}
                y2={yBottom}
                stroke="var(--ms-border)"
                strokeWidth="1"
              />

              {/* X axis labels */}
              <text x={xStart} y={svgHeight - 4} fill="var(--ms-muted)" fontSize="6" textAnchor="start">
                25 facilities (1×)
              </text>
              <text x={xEnd} y={svgHeight - 4} fill="var(--ms-muted)" fontSize="6" textAnchor="end">
                all participating rural facilities
              </text>

              {/* Conventional cubic curve */}
              {convPath && (
                <path
                  d={convPath}
                  fill="none"
                  stroke={convColor}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}

              {/* Foundry near-flat curve */}
              {flatPath && (
                <path
                  d={flatPath}
                  fill="none"
                  stroke={FOUNDRY_COLOR}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}

              {/* Annotation */}
              {showAnnotation && (
                <g style={{ opacity: annotationFade }}>
                  <text
                    x={xStart + 8}
                    y={yBottom - 6}
                    fill="var(--ms-body)"
                    fontSize="6"
                    fontWeight="600"
                    textAnchor="start"
                  >
                    238 hrs/FQHC × 25 FQHCs ≈ 6,000 hrs baseline
                  </text>
                </g>
              )}

              {/* Legend */}
              {lineAnim > 0.6 && (
                <>
                  <line x1={xEnd - 90} y1={yTop + 5} x2={xEnd - 78} y2={yTop + 5} stroke={convColor} strokeWidth="2" />
                  <text x={xEnd - 74} y={yTop + 7} fill={convColor} fontSize="6">
                    Traditional
                  </text>
                  <line x1={xEnd - 90} y1={yTop + 14} x2={xEnd - 78} y2={yTop + 14} stroke={FOUNDRY_COLOR} strokeWidth="2" />
                  <text x={xEnd - 74} y={yTop + 16} fill={FOUNDRY_COLOR} fontSize="6">
                    Data Foundry
                  </text>
                </>
              )}
            </svg>
          </div>

          <p className="text-sm text-[var(--ms-muted)] mt-4 text-center italic">
            Illustrative growth, not a claimed MTN result.
          </p>
        </div>
      </div>
    </section>
  );
}
