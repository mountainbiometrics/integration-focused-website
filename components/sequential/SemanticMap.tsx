/* The map: fields from separate systems resolved onto shared concepts,
   with one connection held back for review rather than guessed. */

const SOURCES = [
  { name: 'Records system', y: 28, fields: ['patient_id', 'svc_dt'] },
  { name: 'Scheduling', y: 128, fields: ['client_no', 'appt_ts'] },
  { name: 'Device feed', y: 228, fields: ['subject', 'reading_at'] },
];

const CONCEPTS = [
  { name: 'Person', y: 52 },
  { name: 'Event', y: 148 },
  { name: 'When it happened', y: 244 },
];

const SRC_X = 8;
const SRC_W = 168;
const CON_X = 452;
const CON_W = 180;
const FIELD_H = 26;

/* field row centre: source box top + header + row offset */
const fieldY = (srcIdx: number, fieldIdx: number) =>
  SOURCES[srcIdx].y + 42 + fieldIdx * (FIELD_H + 6) + FIELD_H / 2;

const conceptY = (i: number) => CONCEPTS[i].y + 22;

/* [sourceIdx, fieldIdx, conceptIdx, needsReview] */
const LINKS: [number, number, number, boolean][] = [
  [0, 0, 0, false],
  [0, 1, 2, false],
  [1, 0, 0, false],
  [1, 1, 2, false],
  [2, 0, 0, true],
  [2, 1, 2, false],
];

export default function SemanticMap() {
  return (
    <div
      className="p-6 md:p-8 rounded-2xl bg-white border border-[var(--ms-border)] overflow-x-auto"
      style={{ boxShadow: 'var(--ms-shadow-card-sm)' }}
    >
      <svg
        viewBox="0 0 640 300"
        className="w-full min-w-[560px] h-auto"
        role="img"
        aria-label="Three source systems on the left, each with two fields, connected by lines to three shared concepts on the right: Person, Event, and When it happened. One connection is dashed and flagged for review."
      >
        {/* connections drawn first, so boxes sit on top */}
        {LINKS.map(([s, f, c, review]) => {
          const y1 = fieldY(s, f);
          const y2 = conceptY(c);
          const x1 = SRC_X + SRC_W;
          const x2 = CON_X;
          const mid = (x1 + x2) / 2;
          return (
            <path
              key={`${s}-${f}`}
              d={`M ${x1} ${y1} C ${mid} ${y1}, ${mid} ${y2}, ${x2} ${y2}`}
              stroke={review ? 'var(--ms-accent)' : 'var(--ms-primary)'}
              strokeOpacity={review ? 1 : 0.55}
              strokeWidth="1.75"
              strokeDasharray={review ? '5 4' : undefined}
              fill="none"
            />
          );
        })}

        {/* review flag on the uncertain link */}
        <g>
          <circle cx="314" cy={(fieldY(2, 0) + conceptY(0)) / 2} r="11" fill="white" stroke="var(--ms-accent)" strokeWidth="1.5" />
          <text
            x="314"
            y={(fieldY(2, 0) + conceptY(0)) / 2 + 5}
            fontSize="14"
            fontWeight="700"
            textAnchor="middle"
            fill="var(--ms-accent)"
          >
            ?
          </text>
        </g>

        {/* source systems */}
        {SOURCES.map((s) => (
          <g key={s.name}>
            <rect
              x={SRC_X}
              y={s.y}
              width={SRC_W}
              height={42 + s.fields.length * (FIELD_H + 6)}
              rx="10"
              fill="white"
              stroke="var(--ms-border)"
              strokeWidth="1.5"
            />
            <text x={SRC_X + 14} y={s.y + 26} fontSize="13" fontWeight="600" fill="var(--ms-heading)">
              {s.name}
            </text>
            {s.fields.map((f, j) => (
              <g key={f}>
                <rect
                  x={SRC_X + 12}
                  y={s.y + 42 + j * (FIELD_H + 6)}
                  width={SRC_W - 24}
                  height={FIELD_H}
                  rx="6"
                  fill="var(--ms-surface)"
                />
                <text
                  x={SRC_X + 22}
                  y={s.y + 42 + j * (FIELD_H + 6) + 17}
                  fontSize="11.5"
                  fontFamily="monospace"
                  fill="var(--ms-body)"
                >
                  {f}
                </text>
              </g>
            ))}
          </g>
        ))}

        {/* shared concepts */}
        {CONCEPTS.map((c) => (
          <g key={c.name}>
            <rect
              x={CON_X}
              y={c.y}
              width={CON_W}
              height="44"
              rx="10"
              fill="rgba(74,111,165,0.10)"
              stroke="var(--ms-primary)"
              strokeWidth="1.75"
            />
            <text
              x={CON_X + CON_W / 2}
              y={c.y + 28}
              fontSize="14"
              fontWeight="600"
              textAnchor="middle"
              fill="var(--ms-heading)"
            >
              {c.name}
            </text>
          </g>
        ))}

        {/* column captions */}
        <text x={SRC_X} y="14" fontSize="11" fontWeight="600" fill="var(--ms-body-light)">
          YOUR SYSTEMS
        </text>
        <text x={CON_X} y="14" fontSize="11" fontWeight="600" fill="var(--ms-body-light)">
          WHAT THEY MEAN
        </text>
      </svg>

      <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2 mt-6 pt-5 border-t border-[var(--ms-border)]">
        <span className="inline-flex items-center gap-2 text-sm text-[var(--ms-body)]">
          <span className="w-6 h-0.5 rounded" style={{ backgroundColor: 'var(--ms-primary)', opacity: 0.55 }} />
          mapped, with the evidence behind it
        </span>
        <span className="inline-flex items-center gap-2 text-sm text-[var(--ms-body)]">
          <span
            className="w-6 h-0 rounded"
            style={{ borderTop: '2px dashed var(--ms-accent)' }}
          />
          flagged: asked, not guessed
        </span>
      </div>
    </div>
  );
}
