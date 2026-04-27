export default function RhtpHero() {
  return (
    <section
      id="hero-section"
      className="py-24 md:py-32 lg:py-40 relative overflow-hidden"
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
          Section 71401 &middot; Technical Factor F.2 &middot; September 30, 2027 deadline
        </p>

        <h1 className="font-display text-[2rem] md:text-[3.5rem] leading-[1.06] text-[var(--ms-heading)] mb-7 md:mb-9">
          Federal reporting that assembles itself from the schemas you already&nbsp;own.
        </h1>

        <p className="text-base md:text-lg text-[var(--ms-body)] max-w-xl mx-auto">
          Six full-time weeks per FQHC, every year &mdash; just for&nbsp;UDS.
        </p>
        <p className="text-[11px] md:text-xs text-[var(--ms-muted)] mt-1.5">
          HRSA OMB&nbsp;0915-0193
        </p>

        <div className="mt-9 md:mt-11">
          <a
            href="#download"
            className="inline-flex items-center justify-center px-8 py-4 bg-[var(--ms-primary)] text-white font-semibold rounded-xl hover:bg-[var(--ms-primary-hover)] transition-all duration-200 text-base md:text-lg hover:-translate-y-0.5"
            style={{ boxShadow: 'var(--ms-shadow-btn)' }}
          >
            Download the executive paper
          </a>
        </div>
      </div>
    </section>
  );
}
