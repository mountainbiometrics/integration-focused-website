interface UseCaseNarrativeProps {
  before: {
    title: string;
    description: string;
    points: string[];
  };
  during: {
    title: string;
    description: string;
    points: string[];
  };
  after: {
    title: string;
    description: string;
    points: string[];
  };
}

export default function UseCaseNarrative({
  before,
  during,
  after,
}: UseCaseNarrativeProps) {
  const phases = [
    { data: before, color: 'var(--color-neutral-lighter)', label: 'Before' },
    { data: during, color: 'var(--color-gradient-red-light)', label: 'During' },
    { data: after, color: 'var(--color-gradient-red-light)', label: 'After' },
  ];

  return (
    <div className="space-y-8">
      {phases.map((phase, index) => (
        <div
          key={phase.label}
          className={`p-6 md:p-8 rounded-lg ${
            index === 0
              ? 'bg-[rgba(196,69,79,0.06)]'
              : 'bg-[rgba(74,111,165,0.08)]'
          }`}
        >
          {/* Phase label */}
          <div className="flex items-center gap-3 mb-4">
            <span
              className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${
                index === 0
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
          <p className="text-[var(--color-neutral-mid)] leading-relaxed mb-4">
            {phase.data.description}
          </p>

          {/* Points */}
          <ul className="space-y-2">
            {phase.data.points.map((point, pointIndex) => (
              <li key={pointIndex} className="flex items-start gap-3">
                <span
                  className={`flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2 ${
                    index === 0
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
        </div>
      ))}
    </div>
  );
}
