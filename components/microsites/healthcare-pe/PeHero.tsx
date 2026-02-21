export default function PeHero() {
  return (
    <section
      id="hero-section"
      className="py-20 md:py-28 lg:py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #F5E0E2 0%, #FDFBFC 40%, #F7F7FB 100%)' }}
    >
      {/* Decorative EKG pulse line */}
      <div className="absolute inset-0 flex items-center pointer-events-none" aria-hidden="true">
        <svg
          className="w-full opacity-[0.06]"
          viewBox="0 0 800 120"
          fill="none"
          preserveAspectRatio="none"
        >
          <path
            d="M0 60 H280 L300 48 L320 60 L340 60 L358 15 L376 105 L394 5 L412 60 L440 60 L460 42 L480 60 H800"
            stroke="#AC1F2D"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="container-site max-w-3xl mx-auto relative">
        <h1 className="font-display text-[2rem] md:text-[3.25rem] leading-[1.08] text-[var(--ms-heading)] mb-6 md:mb-8 md:text-center">
          Five clinics. Five systems. No&nbsp;answers.
        </h1>

        {/* Hero stat card */}
        <div className="flex md:justify-center mb-6 md:mb-8">
          <div
            className="inline-flex flex-col items-center bg-white/80 backdrop-blur-md rounded-2xl px-8 py-7 w-full md:w-auto"
            style={{ boxShadow: 'var(--ms-shadow-hero)' }}
          >
            <p className="text-4xl md:text-5xl font-bold text-[#AC1F2D] tabular-nums">
              $200K&ndash;$500K
            </p>
            <p className="text-2xl md:text-3xl text-[#AC1F2D]/70 font-normal -mt-1">
              per month
            </p>
            <p className="text-sm text-[var(--ms-body)] mt-1.5 text-center">
              leaking from your portfolio while systems don&rsquo;t&nbsp;talk
            </p>
          </div>
        </div>

        <p className="text-base md:text-xl text-[var(--ms-body)] leading-relaxed max-w-2xl mx-auto md:text-center">
          Every add-on acquisition makes the data problem worse.
          We make it&nbsp;disappear.
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-6 md:mt-8 md:justify-center">
          <a
            href="#architecture"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#AC1F2D] text-white font-semibold rounded-xl hover:bg-[#8B1924] transition-all duration-200 text-sm md:text-base hover:-translate-y-0.5"
            style={{ boxShadow: 'var(--ms-shadow-btn)' }}
          >
            See how
          </a>
          <span className="text-xs text-[var(--ms-muted)] font-medium tracking-wider uppercase">
            73% of PE deals are add-ons&ensp;&middot;&ensp;integration is the bottleneck
          </span>
        </div>
      </div>
    </section>
  );
}
