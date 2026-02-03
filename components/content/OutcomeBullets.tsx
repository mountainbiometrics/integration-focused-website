interface OutcomeBulletsProps {
  headline?: string;
  bullets: string[];
  align?: 'left' | 'center';
}

export default function OutcomeBullets({
  headline,
  bullets,
  align = 'left',
}: OutcomeBulletsProps) {
  const isCentered = align === 'center';

  return (
    <div className={`space-y-6 ${isCentered ? 'flex flex-col items-center' : ''}`}>
      {/* Optional headline */}
      {headline && (
        <h3 className={`text-xl md:text-2xl font-semibold text-[var(--color-neutral-dark)] leading-snug ${isCentered ? 'text-center' : ''}`}>
          {headline}
        </h3>
      )}

      {/* Bullet list */}
      <ul className={`space-y-4 ${isCentered ? 'inline-block' : ''}`}>
        {bullets.map((bullet, index) => (
          <li key={index} className="flex items-start gap-3">
            {/* Checkmark indicator for positive outcomes */}
            <span className="flex-shrink-0 w-5 h-5 mt-0.5 rounded-full bg-[rgba(74,111,165,0.15)] flex items-center justify-center">
              <svg
                className="w-3 h-3 text-[var(--color-cta-blue)]"
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
            <span className="text-[var(--color-neutral-dark)] leading-relaxed text-base">
              {bullet}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
