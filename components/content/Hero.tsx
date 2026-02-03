import Link from 'next/link';

interface HeroProps {
  headline: string;
  subheadline: string;
  ctaText?: string;
  ctaHref?: string;
  variant?: 'homepage' | 'internal';
  children?: React.ReactNode;
}

export default function Hero({
  headline,
  subheadline,
  ctaText = 'Start a Conversation',
  ctaHref = '/contact',
  variant = 'homepage',
  children,
}: HeroProps) {
  const isHomepage = variant === 'homepage';

  return (
    <section
      className={`relative ${
        isHomepage
          ? 'pt-32 pb-20 md:pt-40 md:pb-[50px] lg:pt-48 lg:pb-32'
          : 'pt-28 pb-12 md:pt-32 md:pb-16'
      }`}
    >
      {/* Subtle background gradient for homepage */}
      {isHomepage && (
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              'linear-gradient(180deg, rgba(74, 111, 165, 0.06) 0%, rgba(255, 255, 255, 1) 100%)',
          }}
        />
      )}

      <div className="container-site">
        <div className="max-w-4xl mx-auto">
          {/* Headline */}
          <h1
            className={`font-semibold text-[var(--color-neutral-dark)] leading-tight ${
              isHomepage
                ? 'text-3xl md:text-4xl lg:text-5xl'
                : 'text-2xl md:text-3xl lg:text-4xl'
            }`}
          >
            {headline}
          </h1>

          {/* Subheadline */}
          <p
            className={`mt-6 text-[var(--color-neutral-mid)] leading-relaxed ${
              isHomepage
                ? 'text-lg md:text-xl max-w-2xl'
                : 'text-base md:text-lg max-w-xl'
            }`}
          >
            {subheadline}
          </p>

          {/* CTA Button */}
          {ctaText && ctaHref && (
            <div className={`${isHomepage ? 'mt-10' : 'mt-8'}`}>
              <Link
                href={ctaHref}
                className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-cta-blue)] text-white font-medium rounded-md hover:bg-[var(--color-cta-blue-hover)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-cta-blue)] focus-visible:ring-offset-2 text-base no-underline"
              >
                {ctaText}
              </Link>
            </div>
          )}

          {/* Optional children for additional content */}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  );
}
