import Image from 'next/image';
import {
  ArrowRight,
  ArrowDown,
  Bot,
  CircleUserRound,
  Database,
  FileText,
  HeartPulse,
  Layers,
  Lock,
  Plus,
  RefreshCw,
  Search,
  Sparkles,
  Users,
  type LucideIcon,
} from 'lucide-react';
import ScrollReveal from '@/components/animation/ScrollReveal';

/* Where MTN Guide lands: the customer's stack on top, unchanged, and Guide
   running alongside it rather than in the data path. Guide reads structure
   from sources and warehouse, and serves the map up to people and agents.
   Adapted from the "Where MTN Guide lands" slide in the 2027 investor deck. */

interface Node {
  icon: LucideIcon;
  label: string;
}

const SOURCES: Node[] = [
  { icon: HeartPulse, label: 'EHR' },
  { icon: Users, label: 'CRM' },
  { icon: Layers, label: 'ERP' },
  { icon: FileText, label: 'Billing' },
];

const CONSUMERS: Node[] = [
  { icon: CircleUserRound, label: 'People' },
  { icon: Sparkles, label: 'Copilots' },
  { icon: Bot, label: 'Agents' },
  { icon: FileText, label: 'Reports' },
];

const ACTIONS = [
  { icon: Plus, label: 'Generate', line: 'The map, from schemas and docs' },
  { icon: RefreshCw, label: 'Maintain', line: 'Re-checks only what a change touches' },
  { icon: Search, label: 'Query', line: 'Routes to the right fields, with evidence' },
];

/* Desktop columns: sources, arrow, warehouse, arrow, consumers. The connector
   row reuses the same template so its lines land under the right boxes. */
const COLS = 'md:grid-cols-[minmax(0,4fr)_2.5rem_minmax(0,2fr)_2.5rem_minmax(0,4fr)]';

const tile = 'rounded-xl bg-white border border-[var(--ms-border)]';
const caption =
  'text-xs uppercase tracking-wide font-semibold text-[var(--ms-body-light)] mb-3';

function NodeIcon({ icon: Icon, label }: Node) {
  return (
    <div className="flex flex-col items-center gap-2 min-w-0">
      <Icon className="w-6 h-6 text-[var(--ms-body)]" strokeWidth={1.5} />
      <span className="text-sm text-[var(--ms-heading)]">{label}</span>
    </div>
  );
}

function Pill({ icon: Icon, label, tone }: { icon: LucideIcon; label: string; tone: 'muted' | 'primary' }) {
  const color = tone === 'primary' ? 'var(--ms-primary)' : 'var(--ms-body)';
  return (
    <span
      className="relative z-10 inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-white border px-3 py-1 text-xs font-medium"
      style={{ borderColor: color, color }}
    >
      <Icon className="w-3.5 h-3.5" strokeWidth={2} />
      {label}
    </span>
  );
}

/* A vertical connector between the stack and the Guide bar. Dashed for
   reading structure (no arrowhead), solid with an upward head for serving. */
function Connector({ kind }: { kind: 'reads' | 'serves' }) {
  const serves = kind === 'serves';
  return (
    <div className="relative h-24 flex items-center justify-center">
      <div
        className="absolute inset-y-0 left-1/2 -translate-x-1/2"
        style={
          serves
            ? { width: 2, backgroundColor: 'var(--ms-primary)' }
            : { borderLeft: '1.5px dashed var(--ms-body-light)' }
        }
      />
      {serves && (
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0"
          style={{
            borderLeft: '6px solid transparent',
            borderRight: '6px solid transparent',
            borderBottom: '9px solid var(--ms-primary)',
          }}
        />
      )}
      {serves ? (
        <Pill icon={ArrowRight} label="MCP · API" tone="primary" />
      ) : (
        <Pill icon={Lock} label="schemas & docs" tone="muted" />
      )}
    </div>
  );
}

export default function GuideAlongside() {
  return (
    <div
      role="img"
      aria-label="Diagram: your source systems feed your warehouse, and people, copilots, agents, and reports work from it, unchanged. MTN Guide runs alongside, reads schemas and documentation from your sources and warehouse, and serves the map back to people and agents over MCP and an API."
    >
      {/* Your stack, unchanged */}
      <ScrollReveal distance={16}>
        <div className={caption}>Your stack, unchanged</div>
        <div className={`grid grid-cols-1 ${COLS} items-stretch gap-3 md:gap-0`}>
          <div className="grid grid-cols-4 gap-2">
            {SOURCES.map((n) => (
              <div key={n.label} className={`${tile} py-5 px-1`}>
                <NodeIcon {...n} />
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center text-[var(--ms-muted)]">
            <ArrowRight className="hidden md:block w-5 h-5" />
            <ArrowDown className="md:hidden w-5 h-5" />
          </div>

          <div className={`${tile} py-5 flex items-center justify-center`}>
            <NodeIcon icon={Database} label="Warehouse" />
          </div>

          <div className="flex items-center justify-center text-[var(--ms-muted)]">
            <ArrowRight className="hidden md:block w-5 h-5" />
            <ArrowDown className="md:hidden w-5 h-5" />
          </div>

          <div className={`${tile} py-5 px-2 grid grid-cols-4 gap-2`}>
            {CONSUMERS.map((n) => (
              <NodeIcon key={n.label} {...n} />
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* MTN Guide, alongside */}
      <ScrollReveal stagger={0.2} distance={16}>
        {/* Desktop connectors, aligned to the columns above */}
        <div className={`hidden md:grid ${COLS}`}>
          <Connector kind="reads" />
          <div />
          <Connector kind="reads" />
          <div />
          <Connector kind="serves" />
        </div>

        {/* Mobile: the same two relationships, stated inline */}
        <div className="md:hidden flex flex-wrap items-center justify-center gap-2 my-5">
          <Pill icon={Lock} label="reads schemas & docs" tone="muted" />
          <Pill icon={ArrowRight} label="serves the map over MCP · API" tone="primary" />
        </div>

        <div className={caption}>MTN Guide, alongside</div>
        <div
          className="rounded-2xl border-2 border-[var(--ms-primary)] bg-[rgba(74,111,165,0.08)] p-5 md:p-6 flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-8"
        >
          <div className="flex items-center gap-4 lg:w-[34%] shrink-0">
            <Image src="/images/MTN_ekg.svg" alt="" width={56} height={56} className="h-10 w-auto" />
            <div>
              <div className="font-display text-[var(--ms-heading)] text-2xl leading-tight">MTN Guide</div>
              <div className="text-sm text-[var(--ms-body)]">
                Builds MTN FieldMap, the map of what every field means
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 flex-1">
            {ACTIONS.map(({ icon: Icon, label, line }) => (
              <div key={label} className="rounded-xl bg-white px-4 py-3">
                <div className="flex items-center gap-2 text-[var(--ms-primary)] font-medium text-base">
                  <Icon className="w-4 h-4" strokeWidth={2} />
                  {label}
                </div>
                <p className="text-sm text-[var(--ms-body)] leading-snug mt-1">{line}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
