export default function B2bPeHero() {
  return (
    <section
      id="hero-section"
      className="py-20 md:py-28 lg:py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #F5E0E2 0%, #FDFBFC 40%, #F7F7FB 100%)' }}
    >
      {/* Decorative rising-line chart */}
      <div className="absolute inset-0 flex items-center pointer-events-none" aria-hidden="true">
        <svg
          className="w-full opacity-[0.06]"
          viewBox="0 0 800 120"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0 100 L80 95 L160 88 L240 82 L320 72 L400 60 L480 46 L560 34 L640 24 L720 16 L800 10"
            stroke="#AC1F2D"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="container-site max-w-3xl mx-auto relative">
        <h1 className="font-display text-[2rem] md:text-[3.25rem] leading-[1.08] text-[var(--ms-heading)] mb-6 md:mb-8 md:text-center">
          Eight acquisitions in. Still no single source of&nbsp;truth.
        </h1>

        {/* Hero stat card */}
        <div className="flex md:justify-center mb-6 md:mb-8">
          <div
            className="inline-flex flex-col items-center bg-white/80 backdrop-blur-md rounded-2xl px-8 py-7 w-full md:w-auto"
            style={{ boxShadow: 'var(--ms-shadow-hero)' }}
          >
            <p className="text-4xl md:text-5xl font-bold text-[#AC1F2D] tabular-nums">
              70%
            </p>
            <p className="text-sm text-[var(--ms-body)] mt-1.5 text-center">
              of mergers fail to achieve revenue synergies
            </p>
          </div>
        </div>

        <p className="text-base md:text-xl text-[var(--ms-body)] leading-relaxed max-w-2xl mx-auto md:text-center">
          Every add-on multiplies the integration burden.
          We make the fiftieth faster than the&nbsp;first.
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-6 md:mt-8 md:justify-center">
          <a
            href="#architecture"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#AC1F2D] text-white font-semibold rounded-xl hover:bg-[#8B1924] transition-all duration-200 text-sm md:text-base hover:-translate-y-0.5"
            style={{ boxShadow: '0 1px 2px rgba(139,25,36,0.3), 0 4px 12px rgba(172,31,45,0.2), inset 0 1px 0 rgba(255,255,255,0.1)' }}
          >
            See how it works
          </a>
          <span className="text-xs text-[var(--ms-muted)] font-medium tracking-wider uppercase">
            73% of PE deals are add-ons&ensp;&middot;&ensp;integration is the bottleneck
          </span>
        </div>
      </div>
    </section>
  );
}
