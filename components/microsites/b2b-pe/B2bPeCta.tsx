export default function B2bPeCta() {
  return (
    <section id="cta-section" className="py-20 md:py-28 lg:py-32 bg-white">
      <div className="container-site max-w-2xl mx-auto text-center">
        <h2 className="font-display text-[1.5rem] md:text-[2rem] leading-[1.12] text-[var(--ms-heading)] mb-3">
          Bring us your messiest&nbsp;portfolio.
        </h2>
        <p className="text-base md:text-lg text-[var(--ms-body)] mb-10">
          Your systems. Your acquisitions. We&rsquo;ll show you what the Foundry sees in two&nbsp;weeks.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
          <a
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-[#4A6FA5] text-white font-semibold rounded-xl hover:bg-[#3D5C8A] transition-all duration-200 hover:-translate-y-0.5"
            style={{ boxShadow: '0 1px 2px rgba(61,92,138,0.3), 0 4px 12px rgba(74,111,165,0.2), inset 0 1px 0 rgba(255,255,255,0.1)' }}
          >
            Request an integration assessment
          </a>
          <a
            href="#download"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white text-[#4A6FA5] font-semibold rounded-xl border border-[#4A6FA5] hover:bg-[rgba(74,111,165,0.04)] transition-all duration-200 hover:-translate-y-0.5"
          >
            Download the white papers
          </a>
        </div>
      </div>
    </section>
  );
}
