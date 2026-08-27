/**
 * LayerStackDiagram — layers compose, and change stays contained.
 *
 * Three tiers: sources at the bottom, composite layers above them, and the
 * canonical model on top — which is itself just another composite layer.
 * Correspondences are drawn inside the layer *above* the two systems they
 * relate, with connectors reaching down to both, because that is where the
 * map actually records them.
 *
 * The accented path shows the blast radius of a schema change: one source
 * moves, one correspondence is re-evaluated, and the rest of the estate
 * stands.
 */

const HEAD = 'var(--ms-heading)';
const BODY = 'var(--ms-body)';
const PRIM = 'var(--ms-primary)';
const ACC = 'var(--ms-accent)';

interface BoxProps {
  x: number;
  y: number;
  w: number;
  h: number;
  label?: string;
  sub?: string;
  corner?: string;
}

function Box({ x, y, w, h, label, sub, corner }: BoxProps) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={9} fill="white" stroke={PRIM} strokeWidth={1.6} />
      {corner && (
        <text
          x={x + 10}
          y={y + 18}
          fontSize={10}
          fontWeight={700}
          fill={BODY}
          letterSpacing="1"
        >
          {corner}
        </text>
      )}
      {label && (
        <text
          x={x + w / 2}
          y={y + h / 2 - 2}
          fontSize={13}
          fontWeight={600}
          fill={HEAD}
          textAnchor="middle"
        >
          {label}
        </text>
      )}
      {sub && (
        <text x={x + w / 2} y={y + h / 2 + 15} fontSize={10.5} fill={BODY} textAnchor="middle">
          {sub}
        </text>
      )}
    </g>
  );
}

function Chip({
  x,
  y,
  w,
  label,
  affected = false,
}: {
  x: number;
  y: number;
  w: number;
  label: string;
  affected?: boolean;
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={24}
        rx={7}
        fill={affected ? 'rgba(172,31,45,0.08)' : 'rgba(74,111,165,0.08)'}
        stroke={affected ? ACC : PRIM}
        strokeWidth={1.4}
        strokeDasharray={affected ? undefined : '4 3'}
      />
      <text
        x={x + w / 2}
        y={y + 16}
        fontSize={11}
        fill={affected ? ACC : HEAD}
        textAnchor="middle"
      >
        {label}
      </text>
    </g>
  );
}

function Link({
  x1,
  y1,
  x2,
  y2,
  affected = false,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  affected?: boolean;
}) {
  const mid = (y1 + y2) / 2;
  return (
    <path
      d={`M ${x1} ${y1} C ${x1} ${mid}, ${x2} ${mid}, ${x2} ${y2}`}
      fill="none"
      stroke={affected ? ACC : PRIM}
      strokeWidth={affected ? 1.8 : 1.3}
      strokeOpacity={affected ? 0.75 : 0.32}
    />
  );
}

function TierLabel({ y, children }: { y: number; children: string }) {
  return (
    <text
      x={80}
      y={y}
      fontSize={10}
      fontWeight={700}
      fill={BODY}
      textAnchor="end"
      letterSpacing="1.2"
    >
      {children}
    </text>
  );
}

export default function LayerStackDiagram() {
  return (
    <div className="rounded-lg bg-white border border-[var(--ms-border)] p-4 md:p-6 overflow-x-auto">
      <svg
        viewBox="0 0 800 345"
        className="w-full min-w-[620px] h-auto"
        role="img"
        aria-label="Diagram: three tiers. At the bottom, source layers: Epic, athenahealth, and Claims 837. Above them, composite layers for clinical and billing, each holding the correspondences between the systems beneath it. On top, the canonical model, which is itself just another composite layer. A schema change in Epic is highlighted, re-evaluating only the one correspondence it affects rather than the whole estate."
      >
        <TierLabel y={83}>CANONICAL</TierLabel>
        <TierLabel y={183}>COMPOSITE</TierLabel>
        <TierLabel y={283}>SOURCES</TierLabel>

        {/* Connectors sit behind the boxes */}
        <Link x1={160} y1={198} x2={207} y2={250} affected />
        <Link x1={280} y1={198} x2={447} y2={250} affected />
        <Link x1={438} y1={198} x2={447} y2={250} />
        <Link x1={682} y1={198} x2={682} y2={250} />
        <Link x1={327} y1={150} x2={327} y2={105} />
        <Link x1={682} y1={150} x2={682} y2={105} />

        <Box x={95} y={50} w={695} h={55} label="Canonical model" sub="a composite layer like any other" />

        <Box x={95} y={150} w={465} h={55} corner="CLINICAL" />
        <Box x={575} y={150} w={215} h={55} corner="BILLING" />

        {/* Correspondence is recorded in the layer above both systems */}
        <Chip x={112} y={174} w={205} label="patient_id ↔ pat_id" affected />
        <Chip x={330} y={174} w={218} label="encounter ↔ visit" />
        <Chip x={586} y={174} w={193} label="claim ↔ encounter" />

        <Box x={95} y={250} w={225} h={55} label="Epic" sub="DDL + data dictionary" />
        <Box x={335} y={250} w={225} h={55} label="athenahealth" sub="OpenAPI + docs" />
        <Box x={575} y={250} w={215} h={55} label="Claims 837" sub="spec + samples" />

        {/* The change that started it */}
        <circle cx={310} cy={250} r={11} fill={ACC} />
        <text x={310} y={255} fontSize={13} fontWeight={700} fill="white" textAnchor="middle">
          !
        </text>

        <text x={95} y={332} fontSize={11} fill={ACC}>
          A schema change in Epic re-evaluates one correspondence. Everything else stands.
        </text>
      </svg>
    </div>
  );
}
