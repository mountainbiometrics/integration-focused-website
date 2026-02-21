'use client';

import { useRef, useEffect, useState, type ReactNode, type ElementType } from 'react';
import { useScrollProgress, remap } from '@/hooks/useScrollProgress';

interface ScrollRevealProps {
  children: ReactNode;
  /** Delays the start of this element's animation within the scroll range (0–1, default 0) */
  stagger?: number;
  direction?: 'up' | 'left';
  distance?: number;
  className?: string;
  as?: ElementType;
}

/**
 * Scroll-linked reveal wrapper. Fades in as the element scrolls into view
 * and fades back out when scrolling up. Uses useScrollProgress for continuous,
 * reversible animation tied to scroll position.
 *
 * Respects `prefers-reduced-motion` — elements appear immediately.
 */
export default function ScrollReveal({
  children,
  stagger = 0,
  direction = 'up',
  distance = 24,
  className,
  as: Tag = 'div',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const progress = useScrollProgress(ref, { startVh: 0.85, endVh: 0.35 });

  // Reduced motion: show immediately
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setReducedMotion(true);
    }
  }, []);

  // Each element animates over a portion of the scroll range.
  // `stagger` pushes its start later (e.g. 0.3 means it starts at 30% progress).
  const elementProgress = reducedMotion ? 1 : remap(progress, stagger, Math.min(stagger + 0.5, 1));

  const opacity = elementProgress;
  const offset = distance * (1 - elementProgress);
  const transform =
    direction === 'up' ? `translateY(${offset}px)` : `translateX(-${offset}px)`;

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity,
        transform: elementProgress >= 1 ? 'none' : transform,
        willChange: elementProgress < 1 && elementProgress > 0 ? 'opacity, transform' : 'auto',
      }}
    >
      {children}
    </Tag>
  );
}
