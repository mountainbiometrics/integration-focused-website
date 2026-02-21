import { LucideIcon } from 'lucide-react';

interface Step {
  number: number;
  title: string;
  description: string;
  icon?: LucideIcon;
}

interface ThreeStepFlowProps {
  steps: Step[];
  variant?: 'horizontal' | 'vertical' | 'iconForward';
}

export default function ThreeStepFlow({
  steps,
  variant = 'horizontal',
}: ThreeStepFlowProps) {
  const isHorizontal = variant === 'horizontal';
  const isIconForward = variant === 'iconForward';

  // Icon-forward variant: large icons above step numbers
  if (isIconForward) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={step.number} className="relative text-center">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-[var(--ms-border)]" />
              )}

              {/* Icon */}
              {Icon && (
                <div
                  className="relative z-10 w-20 h-20 mx-auto mb-4 rounded-full bg-[var(--ms-blue)]/10 flex items-center justify-center"
                  style={{ boxShadow: 'var(--ms-shadow-card-sm)' }}
                >
                  <Icon
                    className="w-10 h-10 text-[var(--ms-blue)]"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </div>
              )}

              {/* Step number */}
              <div className="relative z-10 w-8 h-8 mx-auto mb-3 rounded-full bg-[var(--ms-blue)] flex items-center justify-center">
                <span className="text-white font-semibold text-sm">
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <h3 className="font-display font-semibold text-[var(--ms-heading)] text-lg mb-2">
                {step.title}
              </h3>
              <p className="text-[var(--ms-body)] text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
    );
  }

  // Original horizontal/vertical variants
  return (
    <div
      className={`${
        isHorizontal
          ? 'grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12'
          : 'space-y-8'
      }`}
    >
      {steps.map((step, index) => (
        <div
          key={step.number}
          className={`relative ${
            isHorizontal ? '' : 'flex items-start gap-6'
          }`}
        >
          {/* Connector line for horizontal layout */}
          {isHorizontal && index < steps.length - 1 && (
            <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-[var(--ms-border)]" />
          )}

          {/* Connector line for vertical layout */}
          {!isHorizontal && index < steps.length - 1 && (
            <div className="absolute left-6 top-12 w-0.5 h-full bg-[var(--ms-border)]" />
          )}

          {/* Step number */}
          <div
            className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-[var(--ms-blue)]/10 flex items-center justify-center ${
              isHorizontal ? 'mx-auto mb-4' : ''
            }`}
          >
            <span className="text-[var(--ms-blue)] font-semibold text-lg">
              {step.number}
            </span>
          </div>

          {/* Content */}
          <div className={`${isHorizontal ? 'text-center' : ''}`}>
            <h3
              className={`font-display font-semibold text-[var(--ms-heading)] text-lg mb-2 ${
                isHorizontal ? '' : 'mt-1'
              }`}
            >
              {step.title}
            </h3>
            <p className="text-[var(--ms-body)] text-base leading-relaxed">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
