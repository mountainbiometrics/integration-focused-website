import { LucideIcon } from 'lucide-react';

interface MetricCard {
  icon: LucideIcon;
  metric: string;
  label: string;
}

interface OutcomeBulletsProps {
  headline?: string;
  bullets?: string[];
  metricCards?: MetricCard[];
  align?: 'left' | 'center';
  variant?: 'bullets' | 'metricCards';
}

export default function OutcomeBullets({
  headline,
  bullets,
  metricCards,
  align = 'left',
  variant = 'bullets',
}: OutcomeBulletsProps) {
  const isCentered = align === 'center';

  // Metric cards variant: premium cards with icons
  if (variant === 'metricCards' && metricCards) {
    return (
      <div className="space-y-6">
        {headline && (
          <h3 className={`text-xl md:text-2xl font-display leading-[1.12] text-[var(--ms-heading)] ${isCentered ? 'text-center' : ''}`}>
            {headline}
          </h3>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {metricCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-white"
                style={{ boxShadow: 'var(--ms-shadow-card)' }}
              >
                <div className="w-14 h-14 rounded-full bg-[var(--ms-blue)]/10 flex items-center justify-center mb-4">
                  <Icon
                    className="w-7 h-7 text-[var(--ms-blue)]"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </div>
                <span className="text-2xl font-bold text-[var(--ms-accent)] mb-1">
                  {card.metric}
                </span>
                <span className="text-sm text-[var(--ms-body-light)]">
                  {card.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Original bullets variant
  return (
    <div className={`space-y-6 ${isCentered ? 'flex flex-col items-center' : ''}`}>
      {headline && (
        <h3 className={`text-xl md:text-2xl font-display leading-[1.12] text-[var(--ms-heading)] ${isCentered ? 'text-center' : ''}`}>
          {headline}
        </h3>
      )}

      {bullets && (
        <ul className={`space-y-4 ${isCentered ? 'inline-block' : ''}`}>
          {bullets.map((bullet, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-5 h-5 mt-0.5 rounded-full bg-[var(--ms-blue)]/12 flex items-center justify-center">
                <svg
                  className="w-3 h-3 text-[var(--ms-blue)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <span className="text-[var(--ms-heading)] leading-relaxed text-base">
                {bullet}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
