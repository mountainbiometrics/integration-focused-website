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
import AccelerationRows from '@/components/microsites/shared/AccelerationRows';
import ReturnCards from '@/components/microsites/shared/ReturnCards';
import MeaningBeat from '@/components/microsites/shared/MeaningBeat';
import DarkReveal from '@/components/microsites/shared/DarkReveal';
import B2bPeCta from '@/components/microsites/b2b-pe/B2bPeCta';
import StickyMobileCta from '@/components/microsites/shared/StickyMobileCta';

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
      <AccelerationRows config={{
        accentRgb: '74,111,165',
        accentColor: '#4A6FA5',
        heading: 'Three things get faster. Every\u00A0acquisition.',
        timeline: {
          barCompressionFactor: 75,
          beforeLabels: ['8wk', '9wk', '10wk'],
          summary: 'Weeks, not months.',
          detail: '2\u20133 weeks per acquisition.',
        },
        team: { detail: '3\u20135 people instead of 15\u201325.' },
        maintenance: { xAxisLabel: 'Acquisitions', detail: '<1 hr/week at 200+ sources. Conventional: 5\u201310 dedicated engineers.' },
      }} />
      <ReturnCards
        accentColor="#4A6FA5"
        accentRgb="74,111,165"
        cards={[
          { label: 'IRR Recovery', stat: '~70 bps', detail: 'Per month of integration compressed \u2014 the difference between \u201Cmet plan\u201D and \u201Cexceeded plan.\u201D' },
          { label: 'Hold Period Savings', stat: '$2.5\u20135M', detail: 'Maintenance you won\u2019t pay over a six-year hold. Flat curve vs. compounding cost.' },
          { label: 'Exit Multiple', stat: '+1.0x', detail: 'The spread between holdco discount and integrated platform premium. Buyers pay more for clean data.' },
        ]}
      />
      <MeaningBeat
        heading="This isn&rsquo;t a back-office problem."
        body={
          <p>
            Every month without integrated reporting, your operating partners are flying blind.
            Revenue leaks. Duplicate vendors survive. Cross-sell opportunities die in
            spreadsheets no one&nbsp;reconciles.
          </p>
        }
        closer={<>Integration speed isn&rsquo;t operational efficiency. It&rsquo;s exit&nbsp;defense.</>}
        accentRgb="74,111,165"
        accentColor="#4A6FA5"
      />
      <DarkReveal
        glowColor="rgba(74,111,165,0.14)"
        setupText={<>A platform that spends $5&nbsp;million on integration over a six-year&nbsp;hold&hellip;</>}
        revealText={<>&hellip;could have spent $600K and added $20M at&nbsp;exit.</>}
        punchlineText={<>That&rsquo;s a 33-to-1 return on integration&nbsp;spend.</>}
        punchlineColor="#7BA3D4"
      />
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
          <p className="text-sm text-[var(--ms-body)] mb-2">
            Full data visibility during consolidation and system&nbsp;change.
          </p>
          <p className="text-xs text-[var(--ms-muted)]">
            &copy; {currentYear} Mountain Biometrics. All rights reserved.
          </p>
        </div>
      </footer>

      <StickyMobileCta
        bgColor="#4A6FA5"
        activeBgColor="#3D5C8A"
        btnShadow="0 1px 2px rgba(61,92,138,0.3), 0 4px 12px rgba(74,111,165,0.2), inset 0 1px 0 rgba(255,255,255,0.1)"
        label="Request an integration assessment"
      />
    </MicrositeThemeWrapper>
  );
}
