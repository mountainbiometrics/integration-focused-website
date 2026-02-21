import Link from 'next/link';

interface PrimaryCTABannerProps {
  headline: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  variant?: 'standard' | 'technical';
}

export default function PrimaryCTABanner({
  headline,
  description,
  ctaText = 'Start a Conversation',
  ctaHref = '/contact',
  variant = 'standard',
}: PrimaryCTABannerProps) {
  const isTechnical = variant === 'technical';

  return (
    <section className="section-spacing">
      <div className="container-site">
        <div className="text-center">
          <h2 className="font-display leading-[1.12] text-[var(--ms-heading)] text-2xl md:text-3xl lg:text-4xl max-w-2xl mx-auto">
            {headline}
          </h2>
          {description && (
            <p className="mt-4 text-[var(--ms-body)] text-base md:text-lg max-w-2xl mx-auto">
              {description}
            </p>
          )}
          <div className="mt-8">
            <Link
              href={ctaHref}
              className="inline-flex items-center justify-center px-8 py-4 bg-[var(--ms-accent)] text-white font-medium rounded-xl hover:bg-[#8B1924] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ms-accent)] focus-visible:ring-offset-2 text-base no-underline hover:-translate-y-0.5"
              style={{ boxShadow: 'var(--ms-shadow-btn)' }}
            >
              {isTechnical ? 'Schedule a Technical Session' : ctaText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
