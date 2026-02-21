'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * One-shot IntersectionObserver hook. Returns `isVisible: true` once the
 * element enters the viewport and stays true forever (no reversal).
 *
 * Respects `prefers-reduced-motion` by returning `true` immediately.
 */
export function useScrollReveal(options?: {
  threshold?: number;
  rootMargin?: string;
}): { ref: React.RefObject<HTMLDivElement | null>; isVisible: boolean } {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const threshold = options?.threshold ?? 0.15;
  const rootMargin = options?.rootMargin ?? '0px 0px -60px 0px';

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    // On mobile, use a larger bottom inset so elements must be well into
    // the viewport before triggering — prevents animations finishing before
    // the user's eye reaches the content.
    const isMobile = window.innerWidth < 768;
    const effectiveRootMargin = isMobile ? '0px 0px -150px 0px' : rootMargin;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: effectiveRootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, isVisible };
}
