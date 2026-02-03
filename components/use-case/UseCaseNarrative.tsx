import { LucideIcon } from 'lucide-react';

interface IconPoint {
  icon: LucideIcon;
  text: string;
}

interface UseCasePhase {
  title: string;
  description?: string;
  points?: string[];
  iconPoints?: IconPoint[];
}

interface UseCaseNarrativeProps {
  before: UseCasePhase;
  during: UseCasePhase;
  after: UseCasePhase;
  variant?: 'full' | 'compact';
}

export default function UseCaseNarrative({
  before,
  during,
  after,
  variant = 'full',
}: UseCaseNarrativeProps) {
  const phases = [
    { data: before, label: 'Before', isFirst: true },
    { data: during, label: 'During', isFirst: false },
    { data: after, label: 'After', isFirst: false },
  ];

  const isCompact = variant === 'compact';

  // Compact variant: 3-column horizontal layout
  if (isCompact) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {phases.map((phase) => (
          <div
            key={phase.label}
            className={`p-5 rounded-lg ${
              phase.isFirst
                ? 'bg-[rgba(196,69,79,0.06)]'
                : 'bg-[rgba(74,111,165,0.08)]'
            }`}
          >
            {/* Phase label */}
            <span
              className={`inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wide mb-3 ${
                phase.isFirst
                  ? 'bg-[var(--color-primary-red)]/80 text-white'
                  : 'bg-[var(--color-cta-blue)] text-white'
              }`}
            >
              {phase.label}
            </span>

            {/* Title */}
            <h4 className="font-semibold text-[var(--color-neutral-dark)] text-base mb-3">
              {phase.data.title}
            </h4>

            {/* Points with icons */}
            {phase.data.iconPoints && (
              <ul className="space-y-2">
                {phase.data.iconPoints.map((point, pointIndex) => {
                  const Icon = point.icon;
                  return (
                    <li key={pointIndex} className="flex items-start gap-2">
                      <Icon
                        className={`flex-shrink-0 w-4 h-4 mt-0.5 ${
                          phase.isFirst
                            ? 'text-[var(--color-primary-red)]/70'
                            : 'text-[var(--color-cta-blue)]'
                        }`}
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                      <span className="text-[var(--color-neutral-dark)] text-sm leading-snug">
                        {point.text}
                      </span>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        ))}
      </div>
    );
  }

  // Full variant: stacked cards
  return (
    <div className="space-y-6">
      {phases.map((phase) => (
        <div
          key={phase.label}
          className={`p-6 md:p-8 rounded-lg ${
            phase.isFirst
              ? 'bg-[rgba(196,69,79,0.06)]'
              : 'bg-[rgba(74,111,165,0.08)]'
          }`}
        >
          {/* Phase label and title */}
          <div className="flex items-center gap-3 mb-4">
            <span
              className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${
                phase.isFirst
                  ? 'bg-[var(--color-primary-red)]/80 text-white'
                  : 'bg-[var(--color-cta-blue)] text-white'
              }`}
            >
              {phase.label}
            </span>
            <h4 className="font-semibold text-[var(--color-neutral-dark)] text-lg">
              {phase.data.title}
            </h4>
          </div>

          {/* Description */}
          {phase.data.description && (
            <p className="text-[var(--color-neutral-mid)] leading-relaxed mb-4">
              {phase.data.description}
            </p>
          )}

          {/* Original text points */}
          {phase.data.points && (
            <ul className="space-y-2">
              {phase.data.points.map((point, pointIndex) => (
                <li key={pointIndex} className="flex items-start gap-3">
                  <span
                    className={`flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2 ${
                      phase.isFirst
                        ? 'bg-[var(--color-primary-red)]/60'
                        : 'bg-[var(--color-cta-blue)]'
                    }`}
                  />
                  <span className="text-[var(--color-neutral-dark)] text-sm leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
