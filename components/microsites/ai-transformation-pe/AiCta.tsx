export default function AiCta() {
  return (
    <section id="cta-section" className="py-20 md:py-28 lg:py-32 bg-white">
      <div className="container-site max-w-2xl mx-auto text-center">
        <h2 className="font-display text-[1.5rem] md:text-[2rem] leading-[1.12] text-[var(--ms-heading)] mb-3">
          Bring us your messiest&nbsp;portfolio.
        </h2>
        <p className="text-base md:text-lg text-[var(--ms-body)] mb-10">
          Your systems. Your portcos. We&rsquo;ll show you what the data layer sees in two&nbsp;weeks.
        </p>

        <div className="flex justify-center mb-10">
          <a
            href="#download"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-[#AC1F2D] text-white font-semibold rounded-xl hover:bg-[#8B1924] transition-all duration-200 hover:-translate-y-0.5"
            style={{ boxShadow: 'var(--ms-shadow-btn)' }}
          >
            Book the assessment
          </a>
        </div>
      </div>
    </section>
  );
}
