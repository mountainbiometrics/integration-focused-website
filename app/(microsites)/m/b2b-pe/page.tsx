import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FileDown } from 'lucide-react';
import { getMicrositeBySlug } from '@/lib/microsites';
import MicrositeThemeWrapper from '@/components/microsites/MicrositeThemeWrapper';
import MicrositeEmailGate from '@/components/microsites/MicrositeEmailGate';
import B2bPeHero from '@/components/microsites/b2b-pe/B2bPeHero';
import TangleGrid from '@/components/microsites/b2b-pe/TangleGrid';
import SharedLayerDiagram from '@/components/microsites/b2b-pe/SharedLayerDiagram';
import AccelerationRows from '@/components/microsites/b2b-pe/AccelerationRows';
import ReturnCards from '@/components/microsites/b2b-pe/ReturnCards';
import MeaningBeat from '@/components/microsites/b2b-pe/MeaningBeat';
import DarkReveal from '@/components/microsites/b2b-pe/DarkReveal';
import B2bPeCta from '@/components/microsites/b2b-pe/B2bPeCta';
import StickyMobileCta from '@/components/microsites/b2b-pe/StickyMobileCta';

const config = getMicrositeBySlug('b2b-pe')!;

export const metadata: Metadata = {
  title: config.title,
  description: config.metaDescription,
  openGraph: {
    title: config.title,
    description: config.metaDescription,
    type: 'website',
  },
};

export default function B2bPePage() {
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

      <B2bPeHero />
      <TangleGrid />
      <SharedLayerDiagram />
      <AccelerationRows />
      <ReturnCards />
      <MeaningBeat />
      <DarkReveal />
      <B2bPeCta />

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
            <div className="w-16 h-16 rounded-full bg-[rgba(74,111,165,0.08)] flex items-center justify-center">
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
      <footer className="mt-auto py-6 md:py-8 border-t border-[var(--ms-border)]">
        <div className="container-site text-center">
          <p className="text-sm text-[var(--ms-body)] mb-2">
            Full data visibility during consolidation and system&nbsp;change.
          </p>
          <p className="text-xs text-[var(--ms-muted)]">
            &copy; {currentYear} Mountain Biometrics. All rights reserved.
          </p>
        </div>
      </footer>

      <StickyMobileCta />
    </MicrositeThemeWrapper>
  );
}
