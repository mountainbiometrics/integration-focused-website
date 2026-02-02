interface ProblemBulletsProps {
  framing: string;
  bullets: string[];
  variant?: 'executive' | 'operator';
}

export default function ProblemBullets({
  framing,
  bullets,
  variant = 'executive',
}: ProblemBulletsProps) {
  return (
    <div className="space-y-6">
      {/* Framing sentence */}
      <p className="text-[var(--color-neutral-dark)] text-lg leading-relaxed">
        {framing}
      </p>

      {/* Bullet list */}
      <ul className="space-y-4">
        {bullets.map((bullet, index) => (
          <li key={index} className="flex items-start gap-3">
            {/* Bullet indicator */}
            <span
              className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2.5 bg-[var(--color-primary-red)]/60"
            />
            <span
              className={`text-[var(--color-neutral-dark)] leading-relaxed ${
                variant === 'executive' ? 'text-base' : 'text-sm'
              }`}
            >
              {bullet}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
