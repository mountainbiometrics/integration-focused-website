export default function CmsHero() {
  return (
    <section
      id="hero-section"
      className="py-12 md:py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #F5E0E2 0%, white 100%)' }}
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
        <h1 className="text-[1.75rem] leading-tight md:text-5xl font-bold text-[#4D4D4D] mb-6 md:mb-8 md:text-center">
          Nobody&rsquo;s talking about what happens six&nbsp;months&nbsp;later.
        </h1>

        {/* Hero stat card */}
        <div className="flex md:justify-center mb-6 md:mb-8">
          <div className="inline-flex flex-col items-center bg-white/70 backdrop-blur-sm rounded-xl px-6 py-5 sm:px-10 sm:py-6 shadow-sm border border-[#ECECEC] border-t-[3px] border-t-[#AC1F2D] w-full md:w-auto">
            <p className="text-4xl md:text-5xl font-bold text-[#AC1F2D] tabular-nums">57%</p>
            <p className="text-sm text-[#7D7D7D] mt-1.5 text-center">
              of your integration budget&nbsp;&mdash; spent after go-live
            </p>
          </div>
        </div>

        <p className="text-base md:text-xl text-[#7D7D7D] leading-relaxed max-w-2xl mx-auto md:text-center">
          Your plan spent 18&nbsp;months building CMS-mandated APIs. The data is
          flowing. But your quality team still can&rsquo;t compute Star measures
          without chart chase. Risk adjustment diagnoses don&rsquo;t survive
          normalization. PA auto-adjudication rates are in single digits.
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-6 md:mt-8 md:justify-center">
          <a
            href="#architecture"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#AC1F2D] text-white font-medium rounded-md hover:bg-[#8B1924] transition-colors text-sm md:text-base"
          >
            See how it works
          </a>
          <span className="text-xs text-[#B4B1B1] font-medium tracking-wider uppercase">
            CMS-0057-F&ensp;&middot;&ensp;January 2027
          </span>
        </div>
      </div>
    </section>
  );
}
