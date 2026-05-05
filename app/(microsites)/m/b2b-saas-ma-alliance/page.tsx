import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FileDown } from 'lucide-react';
import { getMicrositeBySlug } from '@/lib/microsites';
import MicrositeThemeWrapper from '@/components/microsites/MicrositeThemeWrapper';
import MicrositeEmailGate from '@/components/microsites/MicrositeEmailGate';
import StickyMobileCta from '@/components/microsites/shared/StickyMobileCta';
import SaasMaHero from '@/components/microsites/b2b-saas-ma-alliance/SaasMaHero';
import EngagementAmnesia from '@/components/microsites/b2b-saas-ma-alliance/EngagementAmnesia';
import SaasStackTangle from '@/components/microsites/b2b-saas-ma-alliance/SaasStackTangle';
import CompoundingCurve from '@/components/microsites/b2b-saas-ma-alliance/CompoundingCurve';
import SolutionStats from '@/components/microsites/b2b-saas-ma-alliance/SolutionStats';
import IpLibrary from '@/components/microsites/b2b-saas-ma-alliance/IpLibrary';
import WhatYouKeep from '@/components/microsites/b2b-saas-ma-alliance/WhatYouKeep';

const config = getMicrositeBySlug('b2b-saas-ma-alliance')!;

export const metadata: Metadata = {
  title: config.title,
  description: config.metaDescription,
  openGraph: {
    title: config.title,
    description: config.metaDescription,
    type: 'website',
  },
};

export default function B2bSaasMaAlliancePage() {
  const currentYear = new Date().getFullYear();

  return (
    <MicrositeThemeWrapper theme={config.theme}>
      {/* Minimal header — logo only */}
      <header className="py-3 bg-white border-b border-[var(--ms-border)]">
        <div className="container-site">
          <Link href="/">
            <Image
              src="/images/MTN_ekg.svg"
              alt="Mountain Biometrics"
              width={137}
              height={137}
              priority
              className="h-9 w-auto"
            />
          </Link>
        </div>
      </header>

      <div className="[&>section]:!py-10 md:[&>section]:!py-14 lg:[&>section]:!py-16">
        <SaasMaHero />
        <EngagementAmnesia />
        <SaasStackTangle />
        <CompoundingCurve />
        <SolutionStats />
        <IpLibrary />
        <WhatYouKeep />
      </div>

      {/* Email-gated download */}
      <section
        id="download"
        className="py-8 md:py-14"
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
                className="w-8 h-8 text-[var(--ms-primary)]"
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
      <footer className="mt-auto py-6 md:py-8 border-t border-[var(--ms-border)]">
        <div className="container-site text-center">
          {config.brandTagline && (
            <p className="text-base text-[var(--ms-body)] mb-2">
              {config.brandTagline}
            </p>
          )}
          <p className="text-sm text-[var(--ms-muted)]">
            &copy; {currentYear} Mountain Biometrics. All rights reserved.
          </p>
        </div>
      </footer>

      <StickyMobileCta
        bgColor="#AC1F2D"
        activeBgColor="#8B1924"
        label="Download the Briefing"
      />
    </MicrositeThemeWrapper>
  );
}
