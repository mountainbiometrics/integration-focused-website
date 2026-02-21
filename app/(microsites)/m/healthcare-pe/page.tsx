import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FileDown } from 'lucide-react';
import { getMicrositeBySlug } from '@/lib/microsites';
import MicrositeThemeWrapper from '@/components/microsites/MicrositeThemeWrapper';
import MicrositeEmailGate from '@/components/microsites/MicrositeEmailGate';
import PeHero from '@/components/microsites/healthcare-pe/PeHero';
import ChaosGrid from '@/components/microsites/healthcare-pe/ChaosGrid';
import MeshDiagram from '@/components/microsites/healthcare-pe/MeshDiagram';
import AccelerationRows from '@/components/microsites/shared/AccelerationRows';
import ReturnCards from '@/components/microsites/shared/ReturnCards';
import MeaningBeat from '@/components/microsites/shared/MeaningBeat';
import DarkReveal from '@/components/microsites/shared/DarkReveal';
import PeCta from '@/components/microsites/healthcare-pe/PeCta';
import StickyMobileCta from '@/components/microsites/shared/StickyMobileCta';

const config = getMicrositeBySlug('healthcare-pe')!;

export const metadata: Metadata = {
  title: config.title,
  description: config.metaDescription,
  openGraph: {
    title: config.title,
    description: config.metaDescription,
    type: 'website',
  },
};

export default function HealthcarePePage() {
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

      <PeHero />
      <ChaosGrid />
      <MeshDiagram />
      <AccelerationRows config={{
        accentRgb: '90,111,209',
        accentColor: 'var(--ms-blue)',
        heading: 'Three things get faster. Permanently.',
        timeline: {
          barCompressionFactor: 78,
          beforeLabels: ['1mo', '6mo', '12mo', '18mo', '24mo', '36mo'],
          summary: 'Weeks, not years.',
          detail: 'Per acquisition. Every time.',
        },
        team: { detail: '3\u20135 people instead of 15\u201325. Same output.' },
        maintenance: { xAxisLabel: 'Clinics', detail: '<1 hr/week at 200+ sources. Conventional: 2\u20133 dedicated engineers.' },
      }} />
      <ReturnCards
        accentColor="#AC1F2D"
        accentRgb="172,31,45"
        cards={[
          { label: 'Per-Clinic Uplift', stat: '$208K', detail: 'additional EBITDA per clinic, per year' },
          { label: '10-Clinic Portfolio', stat: '$2.08M', detail: 'year-one EBITDA improvement across the platform' },
          { label: 'Enterprise Value', stat: '$24M', detail: 'at a 12x exit multiple \u2014 the spread between \u201Cmet plan\u201D and \u201Cexceeded plan\u201D' },
        ]}
      />
      <MeaningBeat
        heading="This isn&rsquo;t a spreadsheet problem."
        body={
          <p>
            Every month your systems don&rsquo;t talk, a clinician somewhere is making a
            decision without the full picture. A referral loops. A prior auth stalls.
            A patient&nbsp;waits.
          </p>
        }
        closer={<>Faster integration isn&rsquo;t operational efficiency. It&rsquo;s care that arrives on&nbsp;time.</>}
      />
      <DarkReveal
        glowColor="rgba(172,31,45,0.12)"
        setupText={<>A five-year hold that loses twelve to eighteen months to&nbsp;integration&hellip;</>}
        revealText={<>&hellip;is really a three-and-a-half-year&nbsp;hold.</>}
        punchlineText={<>You don&rsquo;t get those months&nbsp;back.</>}
        punchlineColor="#F06070"
      />
      <PeCta />

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

      <StickyMobileCta
        bgColor="#AC1F2D"
        activeBgColor="#8B1924"
        emailSubject="Healthcare%20PE%20Assessment"
        label="Request an assessment"
      />
    </MicrositeThemeWrapper>
  );
}
