import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  DollarSign, Hourglass, FileX, Zap, Users, TrendingUp,
  Layers, Clock, Minus, ChevronDown, FileDown, Activity,
  ArrowDown, X, Check,
  type LucideIcon,
} from 'lucide-react';
import { getMicrositeBySlug, getAllMicrositeSlugs } from '@/lib/microsites';
import type { MicrositeSection } from '@/lib/microsites';
import MicrositeThemeWrapper from '@/components/microsites/MicrositeThemeWrapper';
import MicrositeEmailGate from '@/components/microsites/MicrositeEmailGate';

const iconMap: Record<string, LucideIcon> = {
  DollarSign, Hourglass, FileX, Zap, Users, TrendingUp,
  Layers, Clock, Minus,
};

export function generateStaticParams() {
  // These slugs have dedicated custom pages at /m/<slug>/page.tsx
  return getAllMicrositeSlugs()
    .filter((slug) => slug !== 'cms-interop' && slug !== 'healthcare-pe')
    .map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const config = getMicrositeBySlug(slug);
  if (!config) return {};

  return {
    title: config.title,
    description: config.metaDescription,
    openGraph: {
      title: config.title,
      description: config.metaDescription,
      type: 'website',
    },
  };
}

function SectionBlock({ section, sectionIndex }: { section: MicrositeSection; sectionIndex: number }) {
  if (section.type === 'bullets') {
    const isPain = section.tone === 'pain';
    const bulletSectionBg = isPain ? 'bg-[rgba(196,69,79,0.04)]' : 'bg-white';
    return (
      <section className={`py-10 md:py-16 ${bulletSectionBg}`}>
        <div className="container-site max-w-3xl mx-auto">
          {section.badgeLabel && (
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-3 ${
              isPain
                ? 'bg-[rgba(172,31,45,0.10)] text-[var(--color-primary-red)]'
                : 'bg-[rgba(74,111,165,0.10)] text-[var(--color-cta-blue)]'
            }`}>
              {section.badgeLabel}
            </span>
          )}
          {section.heading && (
            <h2 className="text-xl md:text-2xl font-bold text-[var(--color-neutral-dark)] mb-5 md:mb-8">
              {section.heading}
            </h2>
          )}
          <div className="flex flex-col gap-5">
            {section.items.map((item) => (
              <div key={item.label} className="flex gap-3 md:gap-4">
                {isPain ? (
                  <span className="flex-shrink-0 w-5 h-5 mt-0.5 rounded-full bg-[rgba(172,31,45,0.10)] flex items-center justify-center">
                    <X className="w-3 h-3 text-[var(--color-primary-red)]" strokeWidth={2.5} />
                  </span>
                ) : (
                  <span className="flex-shrink-0 w-5 h-5 mt-0.5 rounded-full bg-[rgba(74,111,165,0.15)] flex items-center justify-center">
                    <Check className="w-3 h-3 text-[var(--color-cta-blue)]" strokeWidth={2.5} />
                  </span>
                )}
                <div>
                  <p className="text-sm md:text-base font-semibold text-[var(--color-neutral-dark)]">
                    {item.label}
                  </p>
                  {item.detail && (
                    <p className="text-sm text-[var(--color-neutral-mid)] mt-0.5">
                      {item.detail}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
          {section.annotation && (
            <div className="flex items-center justify-center gap-2 mt-4 md:mt-6 px-4 py-2.5 rounded-lg bg-[rgba(74,111,165,0.06)] max-w-md mx-auto">
              <TrendingUp className="w-4 h-4 text-[var(--color-cta-blue)] flex-shrink-0" strokeWidth={1.5} />
              <p className="text-xs sm:text-sm text-[var(--color-neutral-mid)]">
                {section.annotation}
              </p>
            </div>
          )}
        </div>
      </section>
    );
  }

  if (section.type === 'stats') {
    const isPain = section.tone === 'pain';
    const isSolution = section.tone === 'solution';
    const valueColor = isPain
      ? 'text-[var(--color-primary-red)]'
      : isSolution
        ? 'text-[var(--color-cta-blue)]'
        : 'text-[var(--ms-primary,var(--color-cta-blue))]';
    const sectionBg = isPain
      ? 'bg-[rgba(196,69,79,0.06)]'
      : isSolution
        ? sectionIndex % 2 === 0 ? 'bg-white' : 'bg-[rgba(74,111,165,0.05)]'
        : sectionIndex % 2 === 0 ? 'bg-white' : 'bg-[var(--ms-hero-gradient,#f8f9fa)]';
    const accentBorder = isPain
      ? 'border-t-[3px] border-t-[var(--color-primary-red)]'
      : isSolution
        ? 'border-t-[3px] border-t-[var(--color-cta-blue)]'
        : 'border-t-[3px] border-t-[var(--ms-primary,var(--color-cta-blue))]';
    const headingAccent = isPain
      ? 'bg-[var(--color-primary-red)]'
      : isSolution
        ? 'bg-[var(--color-cta-blue)]'
        : 'bg-[var(--ms-primary,var(--color-cta-blue))]';
    return (
      <section className={`py-10 md:py-16 ${sectionBg}`}>
        <div className="container-site max-w-3xl mx-auto">
          {section.badgeLabel && (
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-3 ${
              isPain
                ? 'bg-[rgba(172,31,45,0.10)] text-[var(--color-primary-red)]'
                : 'bg-[rgba(74,111,165,0.10)] text-[var(--color-cta-blue)]'
            }`}>
              {section.badgeLabel}
            </span>
          )}
          {section.heading && (
            <div className="mb-5 md:mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-[var(--color-neutral-dark)]">
                {section.heading}
              </h2>
              <div className={`w-10 h-0.5 ${headingAccent} mt-2 rounded-full`} />
            </div>
          )}
          <div className="grid grid-cols-3 gap-2 sm:gap-6">
            {section.items.map((item) => (
              <div
                key={item.label}
                className={`bg-white rounded-lg p-3 sm:p-6 text-center shadow-sm ${accentBorder} hover:-translate-y-0.5 transition-transform duration-200`}
              >
                {item.icon && iconMap[item.icon] && (() => {
                  const Icon = iconMap[item.icon!];
                  const circleBg = isPain
                    ? 'bg-[rgba(172,31,45,0.08)]'
                    : isSolution
                      ? 'bg-[rgba(74,111,165,0.12)]'
                      : 'bg-[rgba(74,111,165,0.12)]';
                  const iconColor = isPain
                    ? 'text-[var(--color-primary-red)]'
                    : isSolution
                      ? 'text-[var(--color-cta-blue)]'
                      : 'text-[var(--ms-primary,var(--color-cta-blue))]';
                  return (
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 rounded-full ${circleBg} flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${iconColor}`} strokeWidth={1.5} aria-hidden="true" />
                    </div>
                  );
                })()}
                <p className={`text-xl sm:text-2xl md:text-3xl font-bold ${valueColor}`}>
                  {item.label}
                </p>
                {item.detail && (
                  <p className="text-xs text-[var(--color-neutral-mid)] mt-1 sm:mt-2">
                    {item.detail}
                  </p>
                )}
              </div>
            ))}
          </div>
          {section.annotation && (
            <div className="flex items-center justify-center gap-2 mt-4 md:mt-6 px-4 py-2.5 rounded-lg bg-[rgba(74,111,165,0.06)] max-w-md mx-auto">
              <TrendingUp className="w-4 h-4 text-[var(--color-cta-blue)] flex-shrink-0" strokeWidth={1.5} />
              <p className="text-xs sm:text-sm text-[var(--color-neutral-mid)]">
                {section.annotation}
              </p>
            </div>
          )}
        </div>
      </section>
    );
  }

  if (section.type === 'before-after') {
    return (
      <section className="py-10 md:py-16 bg-white">
        <div className="container-site max-w-3xl mx-auto">
          {section.heading && (
            <h2 className="text-xl md:text-2xl font-bold text-[var(--color-neutral-dark)] mb-5 md:mb-8">
              {section.heading}
            </h2>
          )}
          <div className="space-y-4">
            {section.items.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 p-4 rounded-lg border border-[var(--color-neutral-lighter)]"
              >
                <div className="flex-1">
                  <p className="font-medium text-[var(--color-neutral-dark)]">
                    {item.label}
                  </p>
                  {item.detail && (
                    <p className="text-sm text-[var(--color-neutral-mid)] mt-1">
                      {item.detail}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return null;
}

export default async function MicrositePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const config = getMicrositeBySlug(slug);
  if (!config) notFound();

  const currentYear = new Date().getFullYear();

  return (
    <MicrositeThemeWrapper theme={config.theme}>
      {/* Minimal header — logo only */}
      <header className="py-5 bg-white border-b border-[var(--color-neutral-lighter)]">
        <div className="container-site">
          <Link href="/">
            <Image
              src="/images/MTN_ekg_extended_large.svg"
              alt="Mountain Biometrics"
              width={160}
              height={36}
              priority
              className="h-9 w-auto"
            />
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section
        className="py-12 md:py-24 relative overflow-hidden"
        style={{
          background: config.theme
            ? `linear-gradient(135deg, ${config.theme.heroGradientColor} 0%, white 100%)`
            : undefined,
        }}
      >
        {/* Decorative EKG pulse line */}
        <div className="absolute inset-0 flex items-center pointer-events-none" aria-hidden="true">
          <svg
            className="w-full opacity-[0.06]"
            viewBox="0 0 800 120"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M0 60 H280 L300 48 L320 60 L340 60 L358 15 L376 105 L394 5 L412 60 L440 60 L460 42 L480 60 H800"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[var(--ms-primary,var(--color-primary-red))]"
            />
          </svg>
        </div>

        {/* Decorative background circles */}
        <div
          className="absolute -top-10 -left-10 w-48 h-48 md:w-64 md:h-64 rounded-full opacity-[0.04] pointer-events-none"
          style={{ background: `var(--ms-primary, var(--color-primary-red))` }}
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-8 -right-8 w-32 h-32 md:w-48 md:h-48 rounded-full opacity-[0.03] pointer-events-none"
          style={{ background: `var(--ms-primary, var(--color-primary-red))` }}
          aria-hidden="true"
        />

        <div className="container-site max-w-3xl mx-auto text-center relative">
          <h1 className="text-3xl md:text-5xl font-bold text-[var(--color-neutral-dark)] mb-6 md:mb-8">
            {config.headline}
          </h1>

          {config.heroStat && (
            <div className="inline-flex flex-col items-center bg-white/70 backdrop-blur-sm rounded-xl px-6 py-5 sm:px-10 sm:py-6 shadow-sm border border-[var(--color-neutral-lighter)] border-t-[3px] border-t-[var(--ms-primary,var(--color-primary-red))] mb-6">
              <div className="w-10 h-10 rounded-full bg-[rgba(172,31,45,0.08)] flex items-center justify-center mb-3">
                <Activity className="w-5 h-5 text-[var(--ms-primary,var(--color-primary-red))]" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <p className="text-2xl md:text-4xl font-bold text-[var(--ms-primary,var(--color-primary-red))]">
                {config.heroStat}
              </p>
              {config.heroStatCaption && (
                <p className="text-sm text-[var(--color-neutral-mid)] mt-1.5">
                  {config.heroStatCaption}
                </p>
              )}
            </div>
          )}

          <p className="text-base md:text-xl text-[var(--color-neutral-mid)] leading-relaxed max-w-2xl mx-auto">
            {config.subheadline}
          </p>

          <a
            href="#download"
            className="inline-flex items-center justify-center gap-2 mt-6 md:mt-8 px-8 py-4 bg-[var(--ms-primary,var(--color-cta-blue))] text-white font-medium rounded-md hover:opacity-90 transition-opacity"
          >
            {config.ctaLabel || 'Download Now'}
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Optional content sections */}
      {config.sections?.map((section, i) => (
        <React.Fragment key={i}>
          <SectionBlock section={section} sectionIndex={i} />
          {i < (config.sections?.length ?? 0) - 1 && (
            <div className="flex justify-center py-3 md:py-5">
              <div className="flex items-center gap-3 w-full max-w-3xl mx-auto px-4">
                <div className="flex-1 h-px bg-[var(--color-neutral-lighter)]" />
                <div className="w-8 h-8 rounded-full bg-[rgba(74,111,165,0.08)] flex items-center justify-center flex-shrink-0">
                  <ChevronDown className="w-4 h-4 text-[var(--color-cta-blue)]" strokeWidth={2} aria-hidden="true" />
                </div>
                <div className="flex-1 h-px bg-[var(--color-neutral-lighter)]" />
              </div>
            </div>
          )}
        </React.Fragment>
      ))}

      {/* Email-gated download */}
      <section
        className="py-12 md:py-20"
        id="download"
        style={{
          background: config.theme
            ? `linear-gradient(180deg, white 0%, ${config.theme.heroGradientColor} 100%)`
            : undefined,
        }}
      >
        <div className="container-site max-w-md mx-auto">
          <div className="flex justify-center mb-6 md:mb-8">
            <div className="w-16 h-16 rounded-full bg-[rgba(172,31,45,0.08)] flex items-center justify-center">
              <FileDown
                className="w-8 h-8 text-[var(--ms-primary,var(--color-cta-blue))]"
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </div>
          </div>
          <MicrositeEmailGate
            slug={config.slug}
            papers={config.papers}
            formspreeId={config.formspreeId}
            ctaLabel={config.ctaLabel}
          />
        </div>
      </section>

      {/* Minimal footer */}
      <footer className="mt-auto py-6 md:py-8 border-t border-[var(--color-neutral-lighter)]">
        <div className="container-site text-center">
          {config.brandTagline && (
            <p className="text-sm text-[var(--color-neutral-mid)] mb-2">
              {config.brandTagline}
            </p>
          )}
          <p className="text-xs text-[var(--color-neutral-light)]">
            &copy; {currentYear} Mountain Biometrics. All rights reserved.
          </p>
        </div>
      </footer>
    </MicrositeThemeWrapper>
  );
}
