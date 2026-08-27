import { Database, FileText, Braces, MessagesSquare } from 'lucide-react';

/**
 * EvidenceInputs — what Guide reads, as a scannable grid rather than a list.
 * Each card is one evidence modality; the note underneath is the property
 * that holds across all of them.
 */

const MODALITIES = [
  {
    icon: Database,
    title: 'Structural',
    detail: 'DDL, JSON Schema, OpenAPI specs, data dictionaries, and warehouse catalogs',
  },
  {
    icon: FileText,
    title: 'Prose',
    detail: 'Documentation, integration guides, and vendor references',
  },
  {
    icon: Braces,
    title: 'Examples',
    detail: 'Synthetic or anonymized payloads, where values clarify meaning',
  },
  {
    icon: MessagesSquare,
    title: 'Human answers',
    detail: 'Answers to specific questions, recorded as evidence in their own right',
  },
];

export default function EvidenceInputs() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {MODALITIES.map(({ icon: Icon, title, detail }) => (
          <div
            key={title}
            className="p-5 rounded-lg bg-white border border-[var(--ms-border)]"
          >
            <Icon
              className="w-5 h-5 mb-3 text-[var(--ms-primary)]"
              strokeWidth={1.75}
              aria-hidden="true"
            />
            <h4 className="font-display text-base text-[var(--ms-heading)] mb-1.5">
              {title}
            </h4>
            <p className="text-sm text-[var(--ms-body)] leading-relaxed">{detail}</p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-base text-[var(--ms-body-light)] leading-relaxed">
        Each modality keeps an evidence shape faithful to the artifact it came from.
      </p>
    </div>
  );
}
