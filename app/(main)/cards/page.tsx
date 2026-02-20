import type { Metadata } from 'next';
import Image from 'next/image';
import { teamMembers } from '@/lib/team-data';

export const metadata: Metadata = {
  title: 'Team Cards | MTN',
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export default function CardsPage() {
  return (
    <div className="pt-28 pb-24">
      <div className="container-site">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold text-[var(--color-neutral-dark)] mb-4">
            Team Business Cards
          </h1>
          <p className="text-[var(--color-neutral-mid)] leading-relaxed mb-12">
            Scan a QR code to save contact information, or download individual files.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.slug}
                className="p-6 rounded-xl border border-[var(--color-neutral-lighter)] bg-white shadow-sm"
              >
                <div className="flex justify-center mb-6">
                  <Image
                    src={`/cards/${member.slug}-qr.svg`}
                    alt={`QR code for ${member.firstName} ${member.lastName}`}
                    width={200}
                    height={200}
                    unoptimized
                  />
                </div>

                <div className="text-center mb-4">
                  <h2 className="text-xl font-semibold text-[var(--color-neutral-dark)]">
                    {member.firstName} {member.lastName}
                  </h2>
                  <p className="text-sm text-[var(--color-neutral-mid)] mt-1">
                    {member.title}
                  </p>
                  <p className="text-sm text-[var(--color-neutral-mid)]">
                    {member.email}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href={`/cards/${member.slug}.vcf`}
                    download
                    className="inline-flex items-center justify-center px-4 py-2 bg-[var(--color-cta-blue)] text-white font-medium rounded-md hover:bg-[var(--color-cta-blue-hover)] transition-colors text-sm no-underline"
                  >
                    Download vCard
                  </a>
                  <a
                    href={`/cards/${member.slug}-qr.svg`}
                    download
                    className="inline-flex items-center justify-center px-4 py-2 border border-[var(--color-neutral-lighter)] text-[var(--color-neutral-dark)] font-medium rounded-md hover:bg-[var(--color-neutral-lighter)]/50 transition-colors text-sm no-underline"
                  >
                    Download QR Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
