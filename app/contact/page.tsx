import type { Metadata } from 'next';
import Hero from '@/components/content/Hero';
import ContactForm from '@/components/forms/ContactForm';

export const metadata: Metadata = {
  title: 'Contact | MTN',
  description:
    'Start a conversation about your next integration. Discuss your acquisition, system change, or visibility challenges with our team.',
};

const scenarios = [
  {
    title: 'Upcoming acquisition',
    description: 'Planning a close and want to avoid the usual data blackout',
  },
  {
    title: 'Recent system change',
    description: 'EHR migration, billing system change, or vendor transition',
  },
  {
    title: 'Ongoing visibility gaps',
    description: 'Struggling with fragmented data across multiple systems',
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        headline="Start a conversation"
        subheadline="We'll discuss your specific scenario and walk through how visibility can stay live during your transition."
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
              <h2 className="text-xl font-semibold text-[var(--color-neutral-dark)] mb-6">
                What we&apos;ll cover
              </h2>

              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[rgba(74,111,165,0.15)] flex items-center justify-center mt-0.5">
                    <svg
                      className="w-3 h-3 text-[var(--color-cta-blue)]"
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
                  <span className="text-[var(--color-neutral-dark)]">
                    Your specific integration scenario and timeline
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[rgba(74,111,165,0.15)] flex items-center justify-center mt-0.5">
                    <svg
                      className="w-3 h-3 text-[var(--color-cta-blue)]"
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
                  <span className="text-[var(--color-neutral-dark)]">
                    How MTN Data Foundry fits with your existing systems
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[rgba(74,111,165,0.15)] flex items-center justify-center mt-0.5">
                    <svg
                      className="w-3 h-3 text-[var(--color-cta-blue)]"
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
                  <span className="text-[var(--color-neutral-dark)]">
                    What a pilot would look like for your use case
                  </span>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-[var(--color-neutral-dark)] mb-4">
                Common scenarios
              </h3>

              <div className="space-y-4">
                {scenarios.map((scenario, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg bg-[var(--color-neutral-lighter)]/50"
                  >
                    <div className="font-medium text-[var(--color-neutral-dark)] mb-1">
                      {scenario.title}
                    </div>
                    <div className="text-sm text-[var(--color-neutral-mid)]">
                      {scenario.description}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 rounded-lg border border-[var(--color-neutral-lighter)]">
                <h4 className="font-medium text-[var(--color-neutral-dark)] mb-2">
                  No preparation needed
                </h4>
                <p className="text-sm text-[var(--color-neutral-mid)]">
                  This is a working conversation, not a formal demo. You don&apos;t
                  need to prepare data samples or technical specifications upfront.
                  We&apos;ll discuss what makes sense based on your situation.
                </p>
              </div>
            </div>

            {/* Right column - Form */}
            <div>
              <div className="bg-white p-8 rounded-xl border border-[var(--color-neutral-lighter)] shadow-sm">
                <h2 className="text-xl font-semibold text-[var(--color-neutral-dark)] mb-6">
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
