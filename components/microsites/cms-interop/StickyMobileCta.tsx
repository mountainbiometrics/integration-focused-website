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
      <div className="bg-white/90 backdrop-blur-sm border-t border-[#ECECEC] px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <a
          href="mailto:warren@themtn.ai?subject=Data%20Foundry%20walkthrough"
          className="block w-full text-center px-6 py-3 bg-[#AC1F2D] text-white font-medium rounded-md text-sm active:bg-[#8B1924] transition-colors"
        >
          Schedule a walkthrough
        </a>
      </div>
    </div>
  );
}
