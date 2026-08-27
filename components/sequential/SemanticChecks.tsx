/* Three checks that have to be settled before any sequence is trustworthy.
   Each is carried by its diagram; the copy is one line. */

function Card({
  title,
  caption,
  children,
}: {
  title: string;
  caption: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="h-full flex flex-col p-6 rounded-2xl bg-white border-l-[3px] border-l-[var(--ms-accent)]"
      style={{ boxShadow: 'var(--ms-shadow-card-sm)' }}
    >
      <h3 className="font-display text-[var(--ms-heading)] text-xl mb-5">{title}</h3>
      <div className="flex-1 flex items-center">{children}</div>
      <p className="text-[var(--ms-body)] text-base leading-relaxed mt-5">{caption}</p>
    </div>
  );
}

/* 1 — one field, three possible meanings, nothing to tell them apart */
function TimestampAmbiguity() {
  const meanings = ['when it happened', 'when it was entered', 'when the job ran'];
  return (
    <svg viewBox="0 0 260 130" className="w-full h-auto" role="img" aria-label="A single timestamp field fanning out to three different possible meanings, each marked with a question mark">
      <rect x="2" y="48" width="94" height="32" rx="8" fill="var(--ms-surface)" stroke="var(--ms-border)" />
      <text x="49" y="68" fontSize="12" textAnchor="middle" fontFamily="monospace" fill="var(--ms-heading)">
        created_at
      </text>
      {meanings.map((m, i) => {
        const y = 22 + i * 41;
        return (
          <g key={m}>
            <path
              d={`M 100 64 C 124 64, 124 ${y}, 146 ${y}`}
              stroke="var(--ms-muted)"
              strokeWidth="1.5"
              strokeDasharray="4 3"
              fill="none"
            />
            <text x="152" y={y + 4} fontSize="11" fill="var(--ms-body)">
              {m}
            </text>
          </g>
        );
      })}
      <text x="120" y="122" fontSize="18" textAnchor="middle" fontWeight="700" fill="var(--ms-accent)">
        ?
      </text>
    </svg>
  );
}

/* 2 — two systems' events overlap, but only partly */
function EventIdentity() {
  return (
    <svg viewBox="0 0 260 130" className="w-full h-auto" role="img" aria-label="Two overlapping circles representing a visit in one system and an encounter in another, with the shared region marked by a question mark">
      <circle cx="98" cy="62" r="50" fill="var(--ms-primary)" fillOpacity="0.14" stroke="var(--ms-primary)" strokeWidth="1.5" />
      <circle cx="162" cy="62" r="50" fill="var(--ms-accent)" fillOpacity="0.12" stroke="var(--ms-accent)" strokeWidth="1.5" />
      <text x="62" y="66" fontSize="11" textAnchor="middle" fill="var(--ms-primary)">
        System A
      </text>
      <text x="198" y="66" fontSize="11" textAnchor="middle" fill="var(--ms-accent)">
        System B
      </text>
      <text x="130" y="60" fontSize="18" textAnchor="middle" fontWeight="700" fill="var(--ms-heading)">
        ?
      </text>
      <text x="130" y="78" fontSize="10" textAnchor="middle" fill="var(--ms-body-light)">
        same?
      </text>
      <text x="130" y="124" fontSize="11" textAnchor="middle" fill="var(--ms-body-light)">
        mostly. not always.
      </text>
    </svg>
  );
}

/* 3 — one row means something different in each source */
function GrainMismatch() {
  const tracks = [
    { label: '1 row = a day', blocks: [0, 84, 168], w: 76, color: 'var(--ms-primary)' },
    { label: '1 row = an event', blocks: [10, 52, 68, 140, 196], w: 14, color: 'var(--ms-accent)' },
    { label: '1 row = a reading', blocks: Array.from({ length: 16 }, (_, i) => i * 16), w: 10, color: 'var(--ms-body-light)' },
  ];
  return (
    <svg viewBox="0 0 260 130" className="w-full h-auto" role="img" aria-label="Three tracks showing the same span of time chopped into days, into individual events, and into frequent readings, none of which line up">
      {tracks.map((t, i) => {
        const y = 14 + i * 40;
        return (
          <g key={t.label}>
            <text x="0" y={y - 3} fontSize="10" fill="var(--ms-body-light)">
              {t.label}
            </text>
            {t.blocks.map((x) => (
              <rect
                key={x}
                x={x}
                y={y}
                width={t.w}
                height="16"
                rx="3"
                fill={t.color}
                fillOpacity="0.28"
                stroke={t.color}
                strokeWidth="1"
              />
            ))}
          </g>
        );
      })}
    </svg>
  );
}

export default function SemanticChecks() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card
        title="Which time is this?"
        caption="Nothing in a schema says whether a date is when the thing happened or when someone typed it."
      >
        <TimestampAmbiguity />
      </Card>
      <Card
        title="Is this the same event?"
        caption="Two systems overlap on most records and disagree at the edges. Whether that matters depends on the question."
      >
        <EventIdentity />
      </Card>
      <Card
        title="What does one row mean?"
        caption="Join records at different grains and you get numbers that look right and cannot be reproduced."
      >
        <GrainMismatch />
      </Card>
    </div>
  );
}
