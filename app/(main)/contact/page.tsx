import type { Metadata } from 'next';
import Hero from '@/components/content/Hero';
import ContactForm from '@/components/forms/ContactForm';

export const metadata: Metadata = {
  title: 'Contact | MTN',
  description:
    'Start with one business problem. We’ll test fit, effort, and value with you before any wider rollout.',
};

const scenarios = [
  {
    title: 'An AI initiative stalled on data',
    description: 'Models and agents are ready, but nobody can say which data to trust',
  },
  {
    title: 'An acquisition or system change',
    description: 'A close, an EHR or core-system migration, or a vendor transition',
  },
  {
    title: 'Conflicting answers',
    description: 'The same question returns different numbers from different systems',
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        headline="Start a conversation"
        subheadline="Bring one business problem. We'll walk through where its data lives, what MTN would map, and how to test fit, effort, and value before any wider rollout."
        variant="internal"
        ctaText=""
        ctaHref=""
      />

      {/* Contact Content */}
      <section className="pb-24">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left column - Context */}
            <div>
              <h2 className="font-display text-xl text-[var(--ms-heading)] mb-6">
                What we&apos;ll cover
              </h2>

              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[rgba(74,111,165,0.15)] flex items-center justify-center mt-0.5">
                    <svg
                      className="w-3 h-3 text-[var(--ms-primary)]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-[var(--ms-heading)]">
                    The business problem and the systems behind it
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[rgba(74,111,165,0.15)] flex items-center justify-center mt-0.5">
                    <svg
                      className="w-3 h-3 text-[var(--ms-primary)]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-[var(--ms-heading)]">
                    How MTN Guide fits with your existing systems
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[rgba(74,111,165,0.15)] flex items-center justify-center mt-0.5">
                    <svg
                      className="w-3 h-3 text-[var(--ms-primary)]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-[var(--ms-heading)]">
                    What a pilot would look like for your use case
                  </span>
                </div>
              </div>

              <h3 className="font-display text-lg text-[var(--ms-heading)] mb-4">
                Common scenarios
              </h3>

              <div className="space-y-4">
                {scenarios.map((scenario, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg bg-[var(--ms-border)]/50"
                  >
                    <div className="font-medium text-[var(--ms-heading)] mb-1">
                      {scenario.title}
                    </div>
                    <div className="text-base text-[var(--ms-body)]">
                      {scenario.description}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 rounded-lg border border-[var(--ms-border)]">
                <h4 className="font-medium text-[var(--ms-heading)] mb-2">
                  No preparation needed
                </h4>
                <p className="text-base text-[var(--ms-body)]">
                  This is a working conversation, not a formal demo. You don&apos;t
                  need to prepare data samples or technical specifications upfront.
                  We&apos;ll discuss what makes sense based on your situation.
                </p>
              </div>
            </div>

            {/* Right column - Form */}
            <div>
              <div className="bg-white p-8 rounded-xl border border-[var(--ms-border)] shadow-sm">
                <h2 className="font-display text-xl text-[var(--ms-heading)] mb-6">
                  Get in touch
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
