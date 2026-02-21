'use client';

import { useEffect, useState } from 'react';

/** Loops 0→1 over `duration` ms, pauses, then resets. Runs only when visible. */
export function useLoopProgress(
  ref: React.RefObject<HTMLElement | null>,
  options?: { duration?: number; pauseEnd?: number; pauseStart?: number },
) {
  const duration = options?.duration ?? 8000;
  const pauseEnd = options?.pauseEnd ?? 2500;
  const pauseStart = options?.pauseStart ?? 400;
  const totalCycle = duration + pauseEnd + pauseStart;

  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) setHasEntered(true);
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);

  useEffect(() => {
    if (!isVisible) return;
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setProgress(1);
      return;
    }
    let animId: number;
    let startTime: number | null = null;
    function tick(now: number) {
      if (startTime === null) startTime = now;
      const elapsed = (now - startTime) % totalCycle;
      let p: number;
      if (elapsed < duration) {
        p = elapsed / duration;
      } else if (elapsed < duration + pauseEnd) {
        p = 1;
      } else {
        p = 0;
      }
      setProgress(p);
      animId = requestAnimationFrame(tick);
    }
    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, [isVisible, duration, pauseEnd, totalCycle]);

  return { progress, hasEntered };
}
