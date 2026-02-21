import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | MTN',
  description: 'Privacy policy for Mountain Biometrics website and services.',
};

export default function PrivacyPage() {
  return (
    <div className="pt-28 pb-24">
      <div className="container-site">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold text-[var(--ms-heading)] mb-8">
            Privacy Policy
          </h1>

          <div className="prose prose-gray max-w-none space-y-6">
            <p className="text-[var(--ms-body)] leading-relaxed">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <h2 className="text-xl font-semibold text-[var(--ms-heading)] mt-8">
              Information We Collect
            </h2>
            <p className="text-[var(--ms-body)] leading-relaxed">
              When you use our website or contact us, we may collect information
              you provide directly, including your name, email address,
              organization name, and any other information you choose to share.
            </p>

            <h2 className="text-xl font-semibold text-[var(--ms-heading)] mt-8">
              How We Use Information
            </h2>
            <p className="text-[var(--ms-body)] leading-relaxed">
              We use the information we collect to respond to your inquiries,
              provide our services, and improve our website. We do not sell your
              personal information to third parties.
            </p>

            <h2 className="text-xl font-semibold text-[var(--ms-heading)] mt-8">
              Data Security
            </h2>
            <p className="text-[var(--ms-body)] leading-relaxed">
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized access,
              alteration, disclosure, or destruction.
            </p>

            <h2 className="text-xl font-semibold text-[var(--ms-heading)] mt-8">
              Contact Us
            </h2>
            <p className="text-[var(--ms-body)] leading-relaxed">
              If you have questions about this Privacy Policy, please contact us
              through our website contact form.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
