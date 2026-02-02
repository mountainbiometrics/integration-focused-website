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
          <h2 className="text-[var(--color-text-primary)] font-semibold text-2xl md:text-3xl lg:text-4xl leading-tight max-w-2xl mx-auto">
            {headline}
          </h2>
          {description && (
            <p className="mt-4 text-[var(--color-text-secondary)] text-base md:text-lg max-w-2xl mx-auto">
              {description}
            </p>
          )}
          <div className="mt-8">
            <Link
              href={ctaHref}
              className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-cta-blue)] text-white font-medium rounded-md hover:bg-[var(--color-cta-blue-hover)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-cta-blue)] focus-visible:ring-offset-2 text-base no-underline"
            >
              {isTechnical ? 'Schedule a Technical Session' : ctaText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
