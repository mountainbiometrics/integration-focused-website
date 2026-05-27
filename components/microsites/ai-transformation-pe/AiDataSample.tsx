interface DataGroup {
  label: string;
  rows: [string, string][];
}

function DataRows({
  groups,
  labelClassName,
}: {
  groups: DataGroup[];
  labelClassName: string;
}) {
  return (
    <div className="space-y-5">
      {groups.map((group, i) => (
        <div key={group.label}>
          <p className={`text-xs font-semibold uppercase tracking-wider mb-2 ${labelClassName}`}>
            {group.label}
          </p>
          <dl className="font-mono text-[13px] md:text-sm space-y-1">
            {group.rows.map(([k, v]) => (
              <div key={k} className="flex gap-3 py-0.5">
                <dt className="text-[var(--ms-muted)] min-w-[7rem] flex-shrink-0">{k}</dt>
                <dd className="text-[var(--ms-heading)] break-all">{v}</dd>
              </div>
            ))}
          </dl>
          {i < groups.length - 1 && (
            <div className="border-t border-[var(--ms-border)] mt-4" />
          )}
        </div>
      ))}
    </div>
  );
}

export default function AiDataSample() {
  return (
    <section className="py-20 md:py-28 lg:py-32" style={{ backgroundColor: 'var(--ms-surface)' }}>
      <div className="container-site max-w-5xl mx-auto">
        <span
          className="inline-block px-4 py-1.5 rounded-full text-[13px] font-semibold uppercase tracking-[0.12em] mb-4 border bg-[rgba(74,111,165,0.05)] border-[rgba(74,111,165,0.12)] text-[#4A6FA5]"
        >
          The demonstration
        </span>
        <h2 className="font-display text-[1.5rem] md:text-[2rem] leading-[1.12] text-[var(--ms-heading)] mb-10 md:mb-14">
          What it actually&nbsp;does.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-4 items-stretch">
          {/* LEFT — raw data from portcos */}
          <div className="bg-white rounded-xl border border-[var(--ms-border)] p-6 md:p-7 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--ms-body-light)] mb-4">
              What your portcos send
            </p>
            <DataRows
              labelClassName="text-[#AC1F2D]"
              groups={[
                {
                  label: 'Portco A · CRM',
                  rows: [
                    ['cust_id', 'A4729'],
                    ['name', '"Jonas, S."'],
                    ['email', 'sjonas@acme.com'],
                  ],
                },
                {
                  label: 'Portco B · EHR',
                  rows: [
                    ['PatientID', '82-S-LON'],
                    ['first', 'Sara'],
                    ['last', 'Jonas'],
                    ['email', '—'],
                  ],
                },
                {
                  label: 'Portco C · Billing',
                  rows: [
                    ['acct_num', '10947'],
                    ['billing_name', '"Sara Jonas-Lee"'],
                    ['email_addr', 'sjlee@acme.com'],
                  ],
                },
              ]}
            />
          </div>

          {/* ARROW divider — horizontal on desktop, vertical on mobile */}
          <div
            className="flex md:flex-col items-center justify-center text-[#4A6FA5]"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-8 h-8 rotate-90 md:rotate-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </div>

          {/* RIGHT — resolved by MTN */}
          <div className="bg-white rounded-xl border border-[var(--ms-border)] border-t-[3px] border-t-[#4A6FA5] p-6 md:p-7 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--ms-body-light)] mb-4">
              What your AI sees
            </p>
            <DataRows
              labelClassName="text-[#4A6FA5]"
              groups={[
                {
                  label: 'Resolved entity',
                  rows: [
                    ['entity_id', 'mtn-7f93a…'],
                    ['name', 'Sara Jonas-Lee'],
                    ['emails', '2'],
                    ['sources', 'Portco A, B, C'],
                    ['status', 'active'],
                  ],
                },
              ]}
            />
          </div>
        </div>

        <p className="text-sm text-[var(--ms-muted)] text-center mt-8 italic">
          Illustrative example. Real customer data is never used in marketing&nbsp;materials.
        </p>
      </div>
    </section>
  );
}
