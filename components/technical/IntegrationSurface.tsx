import { Download, FileCode2, FlaskConical } from 'lucide-react';

/**
 * IntegrationSurface — what an engineer gets to build against.
 *
 * Two halves. The diagram is the call surface: one internal API behind two
 * transports, so an agent calling MCP and an app calling HTTP get the same
 * answers, and the structured answer is consumable before narration ever
 * happens. The cards below are what you keep — artifacts that leave with you.
 */

const HEAD = 'var(--ms-heading)';
const BODY = 'var(--ms-body)';
const PRIM = 'var(--ms-primary)';

function Box({
  x,
  y,
  w,
  h,
  label,
  sub,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  sub?: string;
}) {
  const cy = y + h / 2 + (sub ? -5 : 0);
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={9} fill="white" stroke={PRIM} strokeWidth={1.6} />
      <text x={x + w / 2} y={cy + 4} fontSize={13} fontWeight={600} fill={HEAD} textAnchor="middle">
        {label}
      </text>
      {sub && (
        <text x={x + w / 2} y={cy + 20} fontSize={10.5} fill={BODY} textAnchor="middle">
          {sub}
        </text>
      )}
    </g>
  );
}

function Transport({ x, y, label }: { x: number; y: number; label: string }) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={120}
        height={36}
        rx={7}
        fill="rgba(74,111,165,0.08)"
        stroke={PRIM}
        strokeWidth={1.4}
      />
      <text x={x + 60} y={y + 22} fontSize={12} fill={HEAD} textAnchor="middle">
        {label}
      </text>
    </g>
  );
}

function Arrow({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  return (
    <g stroke={PRIM} fill={PRIM} strokeOpacity={0.6} fillOpacity={0.6}>
      <line x1={x1} y1={y1} x2={x2 - 7} y2={y2} strokeWidth={1.5} />
      <path d={`M ${x2} ${y2} l -8 -4.5 l 0 9 z`} stroke="none" />
    </g>
  );
}

export default function IntegrationSurface() {
  return (
    <div className="space-y-6">
      <div className="rounded-lg bg-white border border-[var(--ms-border)] p-4 md:p-6 overflow-x-auto">
        <svg
          viewBox="0 0 780 246"
          className="w-full min-w-[600px] h-auto"
          role="img"
          aria-label="Diagram: your agent calls MCP tools and your app or a person calls HTTP. Both reach one internal API with identical semantics. The API returns a structured answer you can consume directly, and prose narration is an optional step after it."
        >
          <Box x={20} y={45} w={140} h={50} label="Your agent" />
          <Box x={20} y={165} w={140} h={50} label="Your app" sub="or a person" />

          <Transport x={195} y={52} label="MCP tools" />
          <Transport x={195} y={172} label="HTTP" />

          <Box x={355} y={80} w={180} h={100} label="One internal API" sub="identical semantics" />

          <Box x={595} y={55} w={165} h={54} label="Structured answer" sub="consume directly" />
          <Box x={595} y={180} w={165} h={54} label="Prose narration" sub="optional" />

          <Arrow x1={160} y1={70} x2={195} y2={70} />
          <Arrow x1={315} y1={70} x2={355} y2={108} />
          <Arrow x1={160} y1={190} x2={195} y2={190} />
          <Arrow x1={315} y1={190} x2={355} y2={152} />
          <Arrow x1={535} y1={130} x2={595} y2={88} />

          {/* Narration is a step you can decline, not a stage you route through */}
          <g stroke={PRIM} fill={PRIM} strokeOpacity={0.6} fillOpacity={0.6}>
            <line x1={677} y1={109} x2={677} y2={173} strokeWidth={1.5} strokeDasharray="5 4" />
            <path d="M 677 180 l -4.5 -8 l 9 0 z" stroke="none" />
          </g>
          <text x={687} y={148} fontSize={10.5} fill={BODY}>
            optional
          </text>
        </svg>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          {
            icon: Download,
            title: 'Map export',
            detail: 'The evidence and attribution behind every assertion',
          },
          {
            icon: FileCode2,
            title: 'Mappings and specs',
            detail: 'Yours to implement in your own pipeline',
          },
          {
            icon: FlaskConical,
            title: 'Sandbox',
            detail: 'Pre-engagement schema introspection',
          },
        ].map(({ icon: Icon, title, detail }) => (
          <div key={title} className="p-5 rounded-lg bg-white border border-[var(--ms-border)]">
            <Icon
              className="w-5 h-5 mb-3 text-[var(--ms-primary)]"
              strokeWidth={1.75}
              aria-hidden="true"
            />
            <h4 className="font-display text-base text-[var(--ms-heading)] mb-1.5">{title}</h4>
            <p className="text-sm text-[var(--ms-body)] leading-relaxed">{detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
