'use client';

import { useEffect, useState, type RefObject } from 'react';

/**
 * Returns a 0–1 progress value continuously driven by the element's scroll
 * position in the viewport. Scrolling forward advances the value; scrolling
 * back reverses it — like scrubbing through a video timeline.
 *
 * progress ≈ 0  when element top is near the bottom of the viewport
 * progress ≈ 1  when element top is near the top of the viewport
 *
 * Respects `prefers-reduced-motion` by immediately returning 1.
 */
export function useScrollProgress(
  ref: RefObject<HTMLElement | null>,
  options?: { startVh?: number; endVh?: number },
): number {
  const startVh = options?.startVh ?? 0.85;
  const endVh = options?.endVh ?? 0.15;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setProgress(1);
      return;
    }

    let ticking = false;

    function update() {
      const rect = el!.getBoundingClientRect();
      const vh = window.innerHeight;
      const startY = vh * startVh;
      const endY = vh * endVh;
      const scrolled = startY - rect.top;
      const total = startY - endY;
      setProgress(Math.max(0, Math.min(1, scrolled / total)));
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [ref, startVh, endVh]);

  return progress;
}

/** Maps a 0–1 value into a sub-range. `remap(0.5, 0.2, 0.8) → 0.5` */
export function remap(value: number, inMin: number, inMax: number): number {
  return Math.max(0, Math.min(1, (value - inMin) / (inMax - inMin)));
}
