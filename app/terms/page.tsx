import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | MTN',
  description: 'Terms of service for Mountain Biometrics website and services.',
};

export default function TermsPage() {
  return (
    <div className="pt-28 pb-24">
      <div className="container-site">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold text-[var(--color-neutral-dark)] mb-8">
            Terms of Service
          </h1>

          <div className="prose prose-gray max-w-none space-y-6">
            <p className="text-[var(--color-neutral-mid)] leading-relaxed">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <h2 className="text-xl font-semibold text-[var(--color-neutral-dark)] mt-8">
              Acceptance of Terms
            </h2>
            <p className="text-[var(--color-neutral-mid)] leading-relaxed">
              By accessing and using this website, you accept and agree to be
              bound by the terms and provisions of this agreement.
            </p>

            <h2 className="text-xl font-semibold text-[var(--color-neutral-dark)] mt-8">
              Use of Website
            </h2>
            <p className="text-[var(--color-neutral-mid)] leading-relaxed">
              This website is provided for informational purposes about Mountain
              Biometrics and our services. You agree to use the website only for
              lawful purposes and in accordance with these Terms.
            </p>

            <h2 className="text-xl font-semibold text-[var(--color-neutral-dark)] mt-8">
              Intellectual Property
            </h2>
            <p className="text-[var(--color-neutral-mid)] leading-relaxed">
              All content on this website, including text, graphics, logos, and
              images, is the property of Mountain Biometrics and is protected by
              applicable intellectual property laws.
            </p>

            <h2 className="text-xl font-semibold text-[var(--color-neutral-dark)] mt-8">
              Limitation of Liability
            </h2>
            <p className="text-[var(--color-neutral-mid)] leading-relaxed">
              Mountain Biometrics shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages resulting
              from your use of or inability to use this website.
            </p>

            <h2 className="text-xl font-semibold text-[var(--color-neutral-dark)] mt-8">
              Contact Us
            </h2>
            <p className="text-[var(--color-neutral-mid)] leading-relaxed">
              If you have questions about these Terms of Service, please contact
              us through our website contact form.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
