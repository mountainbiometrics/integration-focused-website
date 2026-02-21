import { X, Check } from 'lucide-react';

interface BeforeAfterProps {
  before: {
    title?: string;
    items: string[];
  };
  after: {
    title?: string;
    items: string[];
  };
  variant?: 'text' | 'withIcons';
  compact?: boolean;
}

export default function BeforeAfter({
  before,
  after,
  variant = 'text',
  compact = false,
}: BeforeAfterProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
      {/* Before column */}
      <div
        className="p-6 md:p-8 rounded-2xl bg-[rgba(196,69,79,0.06)]"
        style={{ boxShadow: 'var(--ms-shadow-card-sm)' }}
      >
        <h4 className="font-display font-semibold text-[var(--ms-heading)] text-lg mb-4 flex items-center gap-2">
          {variant === 'withIcons' && (
            <svg
              className="w-5 h-5 text-[var(--color-primary-red)]/70"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          )}
          {before.title || 'Before'}
        </h4>
        <ul className={compact ? 'space-y-2' : 'space-y-3'}>
          {before.items.map((item, index) => (
            <li key={index} className="flex items-center gap-3">
              {compact ? (
                <X
                  className="flex-shrink-0 w-5 h-5 text-[var(--color-primary-red)]/70"
                  strokeWidth={2}
                  aria-hidden="true"
                />
              ) : (
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2 bg-[var(--color-primary-red)]/60" />
              )}
              <span className={`text-[var(--ms-heading)] leading-relaxed ${compact ? 'text-base font-medium' : 'text-sm'}`}>
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* After column */}
      <div
        className="p-6 md:p-8 rounded-2xl bg-[rgba(74,111,165,0.08)]"
        style={{ boxShadow: 'var(--ms-shadow-card-sm)' }}
      >
        <h4 className="font-display font-semibold text-[var(--ms-heading)] text-lg mb-4 flex items-center gap-2">
          {variant === 'withIcons' && (
            <svg
              className="w-5 h-5 text-[var(--ms-blue)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          )}
          {after.title || 'After'}
        </h4>
        <ul className={compact ? 'space-y-2' : 'space-y-3'}>
          {after.items.map((item, index) => (
            <li key={index} className="flex items-center gap-3">
              {compact ? (
                <Check
                  className="flex-shrink-0 w-5 h-5 text-[var(--ms-blue)]"
                  strokeWidth={2}
                  aria-hidden="true"
                />
              ) : (
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-white flex items-center justify-center">
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
              )}
              <span className={`text-[var(--ms-heading)] leading-relaxed ${compact ? 'text-base font-medium' : 'text-sm'}`}>
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
