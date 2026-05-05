import { ArrowDown } from 'lucide-react';

export default function SaasMaHero() {
  return (
    <section
      id="hero-section"
      className="py-20 md:py-28 lg:py-32 relative overflow-hidden"
      style={{
        background:
          'linear-gradient(160deg, var(--ms-hero-gradient) 0%, #FDFBFC 40%, #F7F7FB 100%)',
      }}
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
            stroke="var(--ms-primary)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="container-site max-w-3xl mx-auto relative md:text-center">
        <p className="text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.16em] text-[var(--ms-primary)] mb-5 md:mb-6">
          B2B SaaS M&amp;A &middot; Productized Accelerator
        </p>

        <h1 className="font-display text-[2rem] md:text-[3.25rem] leading-[1.08] text-[var(--ms-heading)] mb-6 md:mb-8">
          Turn Integration Labor into Compounding&nbsp;IP
        </h1>

        <div className="flex md:justify-center mb-6 md:mb-8">
          <div
            className="inline-flex flex-col items-center bg-white/80 backdrop-blur-md rounded-2xl px-6 sm:px-8 py-7 w-full md:w-auto"
            style={{ boxShadow: 'var(--ms-shadow-hero)' }}
          >
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#AC1F2D] tabular-nums whitespace-nowrap">
              6&ndash;8 wk &rarr; 1&ndash;2 wk
            </p>
            <p className="text-base text-[var(--ms-body)] mt-1.5 text-center">
              Encode your expertise. Compress engagement&nbsp;timelines
            </p>
          </div>
        </div>

        <p className="text-base md:text-xl text-[var(--ms-body)] leading-relaxed max-w-2xl mx-auto">
          Your firm&rsquo;s methodology as portable&nbsp;IP.
        </p>

        <div className="mt-8 md:mt-10">
          <a
            href="#download"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#AC1F2D] text-white font-semibold rounded-xl hover:bg-[#8B1924] transition-all duration-200 text-base md:text-lg hover:-translate-y-0.5"
            style={{ boxShadow: 'var(--ms-shadow-btn)' }}
          >
            Download the Briefing
            <ArrowDown className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
