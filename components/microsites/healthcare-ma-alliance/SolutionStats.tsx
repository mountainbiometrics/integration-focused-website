import { Clock, Zap, Layers, TrendingUp } from 'lucide-react';

const STATS = [
  { label: '6\u20138 wk \u2192 1\u20132 wk', detail: 'Schema discovery during the pilot', Icon: Clock },
  { label: '90 \u2192 14 days', detail: 'Per bolt-on by engagement five', Icon: Zap },
  { label: '3 reusable assets', detail: 'Captured every engagement', Icon: Layers },
] as const;

export default function SolutionStats() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container-site max-w-3xl mx-auto">
        <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold uppercase tracking-wide mb-3 bg-[rgba(74,111,165,0.10)] text-[var(--ms-primary)]">
          The Solution
        </span>
        <div className="mb-5 md:mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-[var(--ms-heading)]">
            What compresses and compounds.
          </h2>
          <div className="w-10 h-0.5 bg-[var(--ms-primary)] mt-2 rounded-full" />
        </div>
        <div className="grid grid-cols-3 gap-2 sm:gap-6">
          {STATS.map(({ label, detail, Icon }) => (
            <div
              key={label}
              className="bg-white rounded-lg p-3 sm:p-6 text-center border-t-[3px] border-t-[var(--ms-primary)] hover:-translate-y-0.5 transition-transform duration-200"
              style={{ boxShadow: 'var(--ms-shadow-card-sm)' }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 rounded-full bg-[rgba(74,111,165,0.12)] flex items-center justify-center">
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--ms-primary)]" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <p className="text-base sm:text-xl md:text-2xl font-bold text-[var(--ms-primary)]">
                {label}
              </p>
              <p className="text-sm text-[var(--ms-body)] mt-1 sm:mt-2">
                {detail}
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-start justify-center gap-2 mt-6 md:mt-8 px-4 py-3 rounded-lg bg-[rgba(74,111,165,0.06)] max-w-2xl mx-auto">
          <TrendingUp className="w-4 h-4 text-[var(--ms-primary)] flex-shrink-0 mt-1" strokeWidth={1.5} aria-hidden="true" />
          <p className="text-sm sm:text-base text-[var(--ms-body)]">
            AI-assisted mapping operates on schema metadata only. Patient and financial data values stay in your client&rsquo;s environment.
          </p>
        </div>
      </div>
    </section>
  );
}
