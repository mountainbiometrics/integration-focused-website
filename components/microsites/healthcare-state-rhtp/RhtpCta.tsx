interface ProofLine {
  label: string;
  detail: string;
}

const PROOF_LINES: readonly ProofLine[] = [
  { label: 'What we map',         detail: 'UDS · MBQIP · T-MSIS · eCQM' },
  { label: 'What we quantify',    detail: 'Hours of manual reconciliation today' },
  { label: 'What we demonstrate', detail: 'Drift-resilient mapping against a real spec change' },
];

export default function RhtpCta() {
  return (
    <section id="cta-section" className="py-20 md:py-28 lg:py-32 bg-white">
      <div className="container-site max-w-2xl mx-auto text-center">
        <h2 className="font-display text-[1.5rem] md:text-[2rem] leading-[1.12] text-[var(--ms-heading)] mb-8 md:mb-10">
          Thirty days. Three facilities. No&nbsp;PHI.
        </h2>

        <dl className="grid grid-cols-1 gap-3 md:gap-4 mb-10 md:mb-12 text-left max-w-xl mx-auto">
          {PROOF_LINES.map((line) => (
            <div
              key={line.label}
              className="grid grid-cols-[max-content_1fr] gap-x-4 md:gap-x-6 items-baseline pb-3 border-b border-[var(--ms-border)] last:border-b-0 last:pb-0"
            >
              <dt className="text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--ms-muted)] whitespace-nowrap">
                {line.label}
              </dt>
              <dd className="text-sm md:text-base text-[var(--ms-heading)]">
                {line.detail}
              </dd>
            </div>
          ))}
        </dl>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          <a
            href="mailto:warren@themtn.ai?subject=RHTP%20Proof%20of%20Value"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-[var(--ms-primary)] text-white font-semibold rounded-xl hover:bg-[var(--ms-primary-hover)] transition-all duration-200 hover:-translate-y-0.5"
            style={{ boxShadow: 'var(--ms-shadow-btn)' }}
          >
            Email warren@themtn.ai
          </a>
          <a
            href="#download"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white text-[var(--ms-primary)] font-semibold rounded-xl border border-[var(--ms-primary)] hover:bg-[rgba(172,31,45,0.04)] transition-all duration-200 hover:-translate-y-0.5"
          >
            Download the executive paper
          </a>
        </div>

        <p className="text-xs md:text-sm text-[var(--ms-muted)] max-w-xl mx-auto">
          Procurement: NASPO ValuePoint &middot; state cooperative contracts &middot; Rural
          Tech Catalyst Fund (NOFO Cat.&nbsp;F &middot; supports&nbsp;F.2).
        </p>
      </div>
    </section>
  );
}
