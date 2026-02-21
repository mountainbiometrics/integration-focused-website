import { LucideIcon } from 'lucide-react';

interface IconBullet {
  icon: LucideIcon;
  label: string;
}

interface ProblemBulletsProps {
  framing?: string;
  bullets?: string[];
  iconBullets?: IconBullet[];
  variant?: 'executive' | 'operator' | 'visual';
}

export default function ProblemBullets({
  framing,
  bullets,
  iconBullets,
  variant = 'executive',
}: ProblemBulletsProps) {
  // Visual variant: 2x2 icon grid
  if (variant === 'visual' && iconBullets) {
    return (
      <div className="grid grid-cols-2 gap-6 md:gap-8">
        {iconBullets.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[rgba(172,31,45,0.08)] flex items-center justify-center mb-3">
                <Icon
                  className="w-8 h-8 text-[var(--color-primary-red)]"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </div>
              <span className="text-[var(--ms-heading)] font-medium text-base">
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    );
  }

  // Original text variants
  return (
    <div className="space-y-6">
      {framing && (
        <p className="text-[var(--color-neutral-dark)] text-lg leading-relaxed">
          {framing}
        </p>
      )}

      {bullets && (
        <ul className="space-y-4">
          {bullets.map((bullet, index) => (
            <li key={index} className="flex items-start gap-3">
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
      )}
    </div>
  );
}
