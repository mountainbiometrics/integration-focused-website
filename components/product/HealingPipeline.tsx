'use client';

import { useRef } from 'react';
import { useScrollProgress, remap } from '@/hooks/useScrollProgress';

export default function HealingPipeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useScrollProgress(sectionRef, { startVh: 0.75, endVh: -0.05 });

  const chartEntrance = remap(progress, 0, 0.22);
  const lineAnim = remap(progress, 0.15, 0.75);
  const chartSummary = remap(progress, 0.70, 0.88);

  /* Chart geometry */
  const svgWidth = 360;
  const svgHeight = 140;
  const xStart = 36;
  const xEnd = 340;
  const yBottom = 120;
  const yTop = 16;

  const drawX = xStart + lineAnim * (xEnd - xStart);

  const conventionalPoints: string[] = [];
  const foundryPoints: string[] = [];
  const steps = 50;
  for (let s = 0; s <= steps; s++) {
    const t = s / steps;
    const x = xStart + t * (xEnd - xStart);
    if (x > drawX) break;
    const yConv = yBottom - (t * t) * (yBottom - yTop);
    conventionalPoints.push(`${x},${yConv}`);
    const yFlat = yBottom - t * 12;
    foundryPoints.push(`${x},${yFlat}`);
  }

  const convPath = conventionalPoints.length > 1
    ? `M${conventionalPoints.join(' L')}`
    : '';
  const flatPath = foundryPoints.length > 1
    ? `M${foundryPoints.join(' L')}`
    : '';

  const convColor = lineAnim > 0.5 ? '#EF5350' : 'var(--ms-muted)';
  const accentColor = 'var(--ms-blue)';

  return (
    <section ref={sectionRef} className="section-spacing bg-[var(--ms-surface)]">
      <div className="container-site">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display leading-[1.12] text-[var(--ms-heading)] text-2xl md:text-3xl mb-3 text-center">
            Flatten the maintenance curve
          </h2>
          <p className="text-[var(--ms-body)] text-center mb-10 max-w-2xl mx-auto">
            Conventional integration maintenance compounds with every new system. The Foundry keeps it flat.
          </p>

          {/* Maintenance curve chart */}
          <div
            className="bg-white rounded-2xl p-6 md:p-8 mb-8"
            style={{
              opacity: chartEntrance,
              transform: `translateY(${(1 - chartEntrance) * 24}px)`,
              boxShadow: 'var(--ms-shadow-card-sm)',
            }}
          >
            <div className="mb-5 flex items-center justify-center">
              <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full max-w-[420px] h-auto">
                {/* Y axis label */}
                <text x={6} y={yBottom - 4} fill="var(--ms-muted)" fontSize="9" textAnchor="start" transform="rotate(-90, 10, 75)">
                  hrs / wk
                </text>

                {/* X axis labels */}
                <text x={xStart} y={svgHeight - 2} fill="var(--ms-muted)" fontSize="9" textAnchor="start">
                  1 system
                </text>
                <text x={xEnd} y={svgHeight - 2} fill="var(--ms-muted)" fontSize="9" textAnchor="end">
                  200+
                </text>

                {/* Conventional line */}
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

                {/* Foundry line */}
                {flatPath && (
                  <path
                    d={flatPath}
                    fill="none"
                    stroke={accentColor}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                )}

                {/* Legend */}
                {lineAnim > 0.6 && (
                  <>
                    <line x1={xStart} y1={yTop + 6} x2={xStart + 20} y2={yTop + 6} stroke={convColor} strokeWidth="2" />
                    <text x={xStart + 24} y={yTop + 10} fill={convColor} fontSize="10">Conventional</text>
                    <line x1={xStart} y1={yTop + 20} x2={xStart + 20} y2={yTop + 20} stroke={accentColor} strokeWidth="2" />
                    <text x={xStart + 24} y={yTop + 24} fill={accentColor} fontSize="10">Foundry</text>
                  </>
                )}
              </svg>
            </div>

            <p
              className="text-sm md:text-base font-semibold text-[var(--ms-heading)] text-center"
              style={{ opacity: chartSummary }}
            >
              Self-healing pipelines adapt when sources change — no manual rework.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

