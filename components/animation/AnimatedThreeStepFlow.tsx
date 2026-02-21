'use client';

import { useRef } from 'react';
import { Database, GitMerge, RefreshCw, type LucideIcon } from 'lucide-react';
import { useScrollProgress, remap } from '@/hooks/useScrollProgress';

const iconMap: Record<string, LucideIcon> = {
  Database,
  GitMerge,
  RefreshCw,
};

interface Step {
  number: number;
  title: string;
  description: string;
  icon?: string;
}

interface AnimatedThreeStepFlowProps {
  steps: Step[];
}

/**
 * Scroll-linked version of ThreeStepFlow's iconForward variant.
 * Steps 1→2→3 appear sequentially as the user scrolls through the section.
 * Scrolling back up reverses the animation.
 *
 * Icons are passed as string names (e.g. "Database") to avoid
 * serialising component objects across the server/client boundary.
 */
export default function AnimatedThreeStepFlow({ steps }: AnimatedThreeStepFlowProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const progress = useScrollProgress(sectionRef, { startVh: 0.85, endVh: 0.15 });

  // Staggered ranges for each step
  const ranges: [number, number][] = [
    [0.0, 0.35],
    [0.25, 0.60],
    [0.50, 0.85],
  ];

  return (
    <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
      {steps.map((step, index) => {
        const Icon = step.icon ? iconMap[step.icon] : undefined;
        const [rangeStart, rangeEnd] = ranges[index] ?? [0, 1];
        const stepProgress = remap(progress, rangeStart, rangeEnd);

        // Per-step animation values
        const opacity = stepProgress;
        const translateY = 24 * (1 - stepProgress);
        const iconScale = 0.5 + 0.5 * stepProgress;

        // Connector line opacity tied to next step's entrance
        const connectorOpacity =
          index < steps.length - 1
            ? remap(progress, ranges[index + 1][0], ranges[index + 1][0] + 0.15)
            : 0;

        return (
          <div
            key={step.number}
            className="relative text-center"
            style={{
              opacity,
              transform: `translateY(${translateY}px)`,
              willChange: stepProgress < 1 ? 'opacity, transform' : 'auto',
            }}
          >
            {/* Connector line */}
            {index < steps.length - 1 && (
              <div
                className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-[var(--ms-border)]"
                style={{ opacity: connectorOpacity }}
              />
            )}

            {/* Icon */}
            {Icon && (
              <div
                className="relative z-10 w-20 h-20 mx-auto mb-4 rounded-full bg-[var(--ms-blue)]/10 flex items-center justify-center"
                style={{
                  boxShadow: 'var(--ms-shadow-card-sm)',
                  transform: `scale(${iconScale})`,
                  willChange: stepProgress < 1 ? 'transform' : 'auto',
                }}
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
            <p className="text-[var(--ms-body)] text-base leading-relaxed">
              {step.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
