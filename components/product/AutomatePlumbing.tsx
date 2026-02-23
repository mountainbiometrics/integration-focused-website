'use client';

import { useRef } from 'react';
import { useScrollProgress, remap } from '@/hooks/useScrollProgress';

const CARD_W = 340;
const CARD_H = 130;

export default function AutomatePlumbing() {
  const sectionRef = useRef<HTMLElement>(null);
  const progress = useScrollProgress(sectionRef, { startVh: 0.45, endVh: -0.55 });

  const row1 = remap(progress, 0.04, 0.35);
  const row2 = remap(progress, 0.22, 0.55);
  const row3 = remap(progress, 0.42, 0.75);
  const row4 = remap(progress, 0.62, 0.90);
  const shield = remap(progress, 0.88, 0.98);

  return (
    <section ref={sectionRef} className="section-spacing">
      <div className="container-site">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display leading-[1.12] text-[var(--ms-heading)] text-2xl md:text-3xl mb-3 text-center">
            Automate the plumbing
          </h2>
          <p className="text-[var(--ms-body)] text-center mb-10 max-w-2xl mx-auto">
            Keep your people focused on the high-value work.
          </p>

          <div className="space-y-5">
            <Row progress={row1}>
              <NewFieldRow p={row1} />
              <RowLabel text="New field detected and mapped" p={row1} />
            </Row>

            <Row progress={row2}>
              <RenameRow p={row2} />
              <RowLabel text="Renamed field matched by values" p={row2} />
            </Row>

            <Row progress={row3}>
              <TypeConvertRow p={row3} />
              <RowLabel text="Type conversion applied automatically" p={row3} />
            </Row>

            <Row progress={row4}>
              <StructureRow p={row4} />
              <RowLabel text="Structure adapted with full audit log" p={row4} />
            </Row>
          </div>

          {/* Shield footer */}
          <div
            className="mt-8 flex items-center justify-center gap-3"
            style={{ opacity: shield, transform: `translateY(${(1 - shield) * 8}px)` }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
              <path
                d="M12 3L4 7v5c0 5.25 3.4 10.15 8 11.25 4.6-1.1 8-6 8-11.25V7l-8-4z"
                fill="rgba(90,111,209,0.10)" stroke="var(--ms-blue)" strokeWidth="1.5"
              />
              <path
                d="M9 12l2 2 4-4"
                stroke="var(--ms-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"
              />
            </svg>
            <p className="text-sm font-semibold text-[var(--ms-blue)]">
              Forward-only. Historical data stays stable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Shared row wrapper ─────────────────────────────────────────────── */

function Row({ progress, children }: { progress: number; children: React.ReactNode }) {
  const entrance = remap(progress, 0, 0.20);
  return (
    <div
      className="bg-white rounded-2xl p-5 md:p-6"
      style={{
        opacity: entrance,
        transform: `translateY(${(1 - entrance) * 20}px)`,
        boxShadow: 'var(--ms-shadow-card-sm)',
      }}
    >
      {children}
    </div>
  );
}

function RowLabel({ text, p }: { text: string; p: number }) {
  const fade = remap(p, 0.70, 0.90);
  return (
    <p
      className="text-sm md:text-base font-medium text-[var(--ms-heading)] text-center mt-3"
      style={{ opacity: fade }}
    >
      {text}
    </p>
  );
}

/* ── Row 1: New field added ────────────────────────────────────────── */

function NewFieldRow({ p }: { p: number }) {
  const fieldsIn = remap(p, 0.10, 0.30);
  const newSlide = remap(p, 0.30, 0.55);
  const arrowDraw = remap(p, 0.50, 0.65);
  const checkMark = remap(p, 0.62, 0.78);

  const FIELDS = ['customer_id', 'account_num', 'policy_num'];
  const NEW = 'coverage_type';

  return (
    <div className="flex justify-center">
      <svg viewBox={`0 0 ${CARD_W} ${CARD_H}`} className="w-full max-w-[320px] h-auto">
        {FIELDS.map((f, i) => {
          const y = 10 + i * 30;
          return (
            <g key={f} opacity={fieldsIn}>
              <rect x={20} y={y} width={110} height={24} rx={5} fill="var(--ms-surface)" stroke="var(--ms-border)" strokeWidth="1" />
              <text x={75} y={y + 13} textAnchor="middle" dominantBaseline="central" fontSize="10" fontFamily="monospace" fill="var(--ms-heading)">
                {f}
              </text>
              <CheckSmall x={140} y={y + 12} opacity={fieldsIn} />
            </g>
          );
        })}

        {(() => {
          const y = 10 + FIELDS.length * 30;
          const color = checkMark > 0.5 ? 'var(--ms-blue)' : '#F59E0B';
          return (
            <g opacity={newSlide} transform={`translate(${(1 - newSlide) * -24}, 0)`}>
              <rect x={20} y={y} width={110} height={24} rx={5} fill={checkMark > 0.5 ? 'rgba(90,111,209,0.06)' : 'white'} stroke={color} strokeWidth="1.5" />
              <text x={75} y={y + 13} textAnchor="middle" dominantBaseline="central" fontSize="10" fontFamily="monospace" fill={color}>
                {NEW}
              </text>
              {checkMark < 0.5 && (
                <g>
                  <circle cx={10} cy={y + 12} r={7} fill="#F59E0B" opacity={0.12} />
                  <text x={10} y={y + 13} textAnchor="middle" dominantBaseline="central" fontSize="13" fontWeight="700" fill="#F59E0B">+</text>
                </g>
              )}
              <CheckSmall x={140} y={y + 12} opacity={checkMark} />
            </g>
          );
        })()}

        <line x1={160} y1={65} x2={210} y2={65} stroke="var(--ms-blue)" strokeWidth="1.5" strokeDasharray="40" strokeDashoffset={40 * (1 - arrowDraw)} strokeLinecap="round" />
        <polygon points="210,65 204,61 204,69" fill="var(--ms-blue)" opacity={arrowDraw} />
        <text x={230} y={67} dominantBaseline="central" fontSize="11" fontWeight="600" fill="var(--ms-blue)" opacity={arrowDraw}>
          Mapped
        </text>
      </svg>
    </div>
  );
}

/* ── Row 2: Field renamed ──────────────────────────────────────────── */

function RenameRow({ p }: { p: number }) {
  const oldIn = remap(p, 0.10, 0.25);
  const strike = remap(p, 0.30, 0.45);
  const newIn = remap(p, 0.40, 0.58);
  const valuesMatch = remap(p, 0.52, 0.68);
  const check = remap(p, 0.65, 0.80);

  const LX = 20;
  const RX = 185;
  const BW = 120;
  const CY = 40;

  return (
    <div className="flex justify-center">
      <svg viewBox={`0 0 ${CARD_W} ${BW}`} className="w-full max-w-[320px] h-auto">
        <g opacity={oldIn}>
          <rect x={LX} y={CY - 12} width={BW} height={24} rx={5} fill="var(--ms-surface)" stroke={strike > 0.3 ? '#EF5350' : 'var(--ms-border)'} strokeWidth="1" />
          <text x={LX + BW / 2} y={CY + 1} textAnchor="middle" dominantBaseline="central" fontSize="10" fontFamily="monospace" fill={strike > 0.3 ? '#EF5350' : 'var(--ms-heading)'}>
            AccountNum
          </text>
          {strike > 0.3 && (
            <line x1={LX + 8} y1={CY} x2={LX + BW - 8} y2={CY} stroke="#EF5350" strokeWidth="1.5" opacity={strike} />
          )}
        </g>

        <line x1={LX + BW + 6} y1={CY} x2={RX - 6} y2={CY} stroke="var(--ms-blue)" strokeWidth="1.5" strokeDasharray="30" strokeDashoffset={30 * (1 - remap(p, 0.35, 0.50))} strokeLinecap="round" />
        <polygon points={`${RX - 6},${CY} ${RX - 12},${CY - 4} ${RX - 12},${CY + 4}`} fill="var(--ms-blue)" opacity={remap(p, 0.40, 0.50)} />

        <g opacity={newIn}>
          <rect x={RX} y={CY - 12} width={BW} height={24} rx={5} fill="rgba(90,111,209,0.06)" stroke="var(--ms-blue)" strokeWidth="1.5" />
          <text x={RX + BW / 2} y={CY + 1} textAnchor="middle" dominantBaseline="central" fontSize="10" fontFamily="monospace" fill="var(--ms-blue)">
            account_number
          </text>
        </g>

        <text x={LX + BW / 2} y={CY + 24} textAnchor="middle" fontSize="8" fill="var(--ms-body-light)" opacity={oldIn}>
          38291, 50412, 77203…
        </text>
        <text x={RX + BW / 2} y={CY + 24} textAnchor="middle" fontSize="8" fill="var(--ms-body-light)" opacity={newIn}>
          38291, 50412, 77203…
        </text>

        <line x1={LX + BW / 2} y1={CY + 32} x2={RX + BW / 2} y2={CY + 32} stroke="var(--ms-blue)" strokeWidth="1" strokeDasharray="4 3" opacity={valuesMatch * 0.5} />
        <text x={(LX + RX + BW) / 2} y={CY + 46} textAnchor="middle" fontSize="9" fontWeight="600" fill="var(--ms-blue)" opacity={valuesMatch}>
          Values match
        </text>

        <CheckSmall x={RX + BW + 12} y={CY} opacity={check} />
      </svg>
    </div>
  );
}

/* ── Row 3: Type conversion ────────────────────────────────────────── */

function TypeConvertRow({ p }: { p: number }) {
  const beforeIn = remap(p, 0.10, 0.25);
  const arrowDraw = remap(p, 0.30, 0.50);
  const afterIn = remap(p, 0.45, 0.62);
  const check = remap(p, 0.65, 0.80);

  const LX = 15;
  const RX = 190;
  const BW = 130;
  const CY = 50;

  return (
    <div className="flex justify-center">
      <svg viewBox={`0 0 ${CARD_W} 100`} className="w-full max-w-[320px] h-auto">
        <g opacity={beforeIn}>
          <text x={LX + BW / 2} y={22} textAnchor="middle" fontSize="9" fontWeight="600" fill="var(--ms-body-light)">Source sends</text>
          <rect x={LX} y={30} width={BW} height={26} rx={5} fill="var(--ms-surface)" stroke="var(--ms-border)" strokeWidth="1" />
          <text x={LX + BW / 2} y={44} textAnchor="middle" dominantBaseline="central" fontSize="10" fontFamily="monospace" fill="var(--ms-heading)">
            &quot;01/15/2024&quot;
          </text>
          <text x={LX + BW / 2} y={70} textAnchor="middle" fontSize="9" fill="var(--ms-body-light)">string</text>
        </g>

        <line x1={LX + BW + 6} y1={CY - 7} x2={RX - 6} y2={CY - 7} stroke="var(--ms-blue)" strokeWidth="1.5" strokeDasharray="36" strokeDashoffset={36 * (1 - arrowDraw)} strokeLinecap="round" />
        <polygon points={`${RX - 6},${CY - 7} ${RX - 12},${CY - 11} ${RX - 12},${CY - 3}`} fill="var(--ms-blue)" opacity={arrowDraw} />
        {arrowDraw > 0.3 && (
          <g opacity={arrowDraw}>
            <circle cx={(LX + BW + RX) / 2} cy={CY - 7} r={9} fill="white" stroke="var(--ms-blue)" strokeWidth="1" />
            <path d={`M${(LX + BW + RX) / 2 - 3},${CY - 10} l6,0 M${(LX + BW + RX) / 2 + 3},${CY - 4} l-6,0`} stroke="var(--ms-blue)" strokeWidth="1" strokeLinecap="round" />
          </g>
        )}

        <g opacity={afterIn}>
          <text x={RX + BW / 2} y={22} textAnchor="middle" fontSize="9" fontWeight="600" fill="var(--ms-blue)">Target expects</text>
          <rect x={RX} y={30} width={BW} height={26} rx={5} fill="rgba(90,111,209,0.06)" stroke="var(--ms-blue)" strokeWidth="1.5" />
          <text x={RX + BW / 2} y={44} textAnchor="middle" dominantBaseline="central" fontSize="10" fontFamily="monospace" fill="var(--ms-blue)">
            2024-01-15
          </text>
          <text x={RX + BW / 2} y={70} textAnchor="middle" fontSize="9" fill="var(--ms-blue)">date</text>
        </g>

        <CheckSmall x={RX + BW + 12} y={CY - 7} opacity={check} />
      </svg>
    </div>
  );
}

/* ── Row 4: Structure change ───────────────────────────────────────── */

function StructureRow({ p }: { p: number }) {
  const beforeIn = remap(p, 0.10, 0.25);
  const flash = remap(p, 0.28, 0.42);
  const arrowDraw = remap(p, 0.35, 0.52);
  const afterIn = remap(p, 0.45, 0.62);
  const audit = remap(p, 0.65, 0.82);

  const LX = 15;
  const RX = 190;
  const BW = 130;

  return (
    <div className="flex justify-center">
      <svg viewBox={`0 0 ${CARD_W} ${CARD_H}`} className="w-full max-w-[320px] h-auto">
        <g opacity={beforeIn * (1 - flash * 0.3)}>
          <text x={LX + BW / 2} y={16} textAnchor="middle" fontSize="9" fontWeight="600" fill="var(--ms-body-light)">Before</text>
          <rect x={LX} y={22} width={BW} height={22} rx={4} fill="var(--ms-surface)" stroke={flash > 0.3 ? '#F59E0B' : 'var(--ms-border)'} strokeWidth="1" />
          <text x={LX + BW / 2} y={34} textAnchor="middle" dominantBaseline="central" fontSize="10" fontFamily="monospace" fill="var(--ms-heading)">address</text>
          <rect x={LX + 10} y={48} width={BW - 10} height={18} rx={3} fill="white" stroke="var(--ms-border)" strokeWidth="0.75" />
          <text x={LX + 10 + (BW - 10) / 2} y={58} textAnchor="middle" dominantBaseline="central" fontSize="8" fontFamily="monospace" fill="var(--ms-body-light)">street, city, state</text>
          <rect x={LX + 10} y={70} width={BW - 10} height={18} rx={3} fill="white" stroke="var(--ms-border)" strokeWidth="0.75" />
          <text x={LX + 10 + (BW - 10) / 2} y={80} textAnchor="middle" dominantBaseline="central" fontSize="8" fontFamily="monospace" fill="var(--ms-body-light)">zip</text>
        </g>

        <line x1={LX + BW + 6} y1={55} x2={RX - 6} y2={55} stroke="var(--ms-blue)" strokeWidth="1.5" strokeDasharray="36" strokeDashoffset={36 * (1 - arrowDraw)} strokeLinecap="round" />
        <polygon points={`${RX - 6},55 ${RX - 12},51 ${RX - 12},59`} fill="var(--ms-blue)" opacity={arrowDraw} />

        <g opacity={afterIn}>
          <text x={RX + BW / 2} y={16} textAnchor="middle" fontSize="9" fontWeight="600" fill="var(--ms-blue)">After</text>
          <rect x={RX} y={22} width={BW} height={20} rx={4} fill="rgba(90,111,209,0.06)" stroke="var(--ms-blue)" strokeWidth="1" />
          <text x={RX + BW / 2} y={33} textAnchor="middle" dominantBaseline="central" fontSize="9" fontFamily="monospace" fill="var(--ms-blue)">street_address</text>
          <rect x={RX} y={46} width={BW} height={20} rx={4} fill="rgba(90,111,209,0.06)" stroke="var(--ms-blue)" strokeWidth="1" />
          <text x={RX + BW / 2} y={57} textAnchor="middle" dominantBaseline="central" fontSize="9" fontFamily="monospace" fill="var(--ms-blue)">city, state</text>
          <rect x={RX} y={70} width={BW} height={20} rx={4} fill="rgba(90,111,209,0.06)" stroke="var(--ms-blue)" strokeWidth="1" />
          <text x={RX + BW / 2} y={81} textAnchor="middle" dominantBaseline="central" fontSize="9" fontFamily="monospace" fill="var(--ms-blue)">postal_code</text>
        </g>

        <g opacity={audit}>
          <rect x={CARD_W / 2 - 48} y={104} width={96} height={20} rx={10} fill="rgba(76,175,80,0.10)" stroke="#4CAF50" strokeWidth="1" />
          <text x={CARD_W / 2} y={115} textAnchor="middle" dominantBaseline="central" fontSize="9" fontWeight="600" fill="#4CAF50">
            Audit log updated
          </text>
        </g>
      </svg>
    </div>
  );
}

/* ── Shared small checkmark ─────────────────────────────────────────── */

function CheckSmall({ x, y, opacity }: { x: number; y: number; opacity: number }) {
  return (
    <g opacity={opacity} transform={`scale(${0.5 + opacity * 0.5})`} style={{ transformOrigin: `${x}px ${y}px`, transformBox: 'fill-box' }}>
      <circle cx={x} cy={y} r={8} fill="var(--ms-blue)" opacity={0.10} />
      <path d={`M${x - 3},${y} l2,2 4,-4`} stroke="var(--ms-blue)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
}
