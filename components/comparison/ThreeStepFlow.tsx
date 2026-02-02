interface Step {
  number: number;
  title: string;
  description: string;
}

interface ThreeStepFlowProps {
  steps: Step[];
  variant?: 'horizontal' | 'vertical';
}

export default function ThreeStepFlow({
  steps,
  variant = 'horizontal',
}: ThreeStepFlowProps) {
  const isHorizontal = variant === 'horizontal';

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
            <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-[var(--color-neutral-lighter)]" />
          )}

          {/* Connector line for vertical layout */}
          {!isHorizontal && index < steps.length - 1 && (
            <div className="absolute left-6 top-12 w-0.5 h-full bg-[var(--color-neutral-lighter)]" />
          )}

          {/* Step number */}
          <div
            className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-[rgba(74,111,165,0.12)] flex items-center justify-center ${
              isHorizontal ? 'mx-auto mb-4' : ''
            }`}
          >
            <span className="text-[var(--color-cta-blue)] font-semibold text-lg">
              {step.number}
            </span>
          </div>

          {/* Content */}
          <div className={`${isHorizontal ? 'text-center' : ''}`}>
            <h3
              className={`font-semibold text-[var(--color-neutral-dark)] text-lg mb-2 ${
                isHorizontal ? '' : 'mt-1'
              }`}
            >
              {step.title}
            </h3>
            <p className="text-[var(--color-neutral-mid)] text-base leading-relaxed">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
