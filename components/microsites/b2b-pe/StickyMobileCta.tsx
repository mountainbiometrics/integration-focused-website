'use client';

import { useEffect, useState } from 'react';

export default function StickyMobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('hero-section');
    const download = document.getElementById('download');
    if (!hero || !download) return;

    let heroVisible = true;
    let downloadVisible = false;

    function updateVisibility() {
      setVisible(!heroVisible && !downloadVisible);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.target === hero) heroVisible = entry.isIntersecting;
          if (entry.target === download) downloadVisible = entry.isIntersecting;
        }
        updateVisibility();
      },
      { threshold: 0.15 },
    );

    observer.observe(hero);
    observer.observe(download);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-300"
      style={{ transform: visible ? 'translateY(0)' : 'translateY(100%)' }}
    >
      <div
        className="bg-white/90 backdrop-blur-sm px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
        style={{
          borderTop: '1px solid var(--ms-border)',
          boxShadow: '0 -4px 24px rgba(15,15,26,0.08)',
        }}
      >
        <a
          href="mailto:warren@themtn.ai?subject=B2B%20PE%20Integration%20Assessment"
          className="block w-full text-center px-6 py-3 bg-[#4A6FA5] text-white font-semibold rounded-xl text-sm active:bg-[#3D5C8A] transition-colors"
          style={{ boxShadow: '0 1px 2px rgba(61,92,138,0.3), 0 4px 12px rgba(74,111,165,0.2), inset 0 1px 0 rgba(255,255,255,0.1)' }}
        >
          Request an integration assessment
        </a>
      </div>
    </div>
  );
}
