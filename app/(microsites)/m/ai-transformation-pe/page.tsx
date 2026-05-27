import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar } from 'lucide-react';
import { getMicrositeBySlug } from '@/lib/microsites';
import MicrositeThemeWrapper from '@/components/microsites/MicrositeThemeWrapper';
import MicrositeEmailGate from '@/components/microsites/MicrositeEmailGate';
import AiHero from '@/components/microsites/ai-transformation-pe/AiHero';
import AiChaosGrid from '@/components/microsites/ai-transformation-pe/AiChaosGrid';
import AiSharedLayerDiagram from '@/components/microsites/ai-transformation-pe/AiSharedLayerDiagram';
import AiDataSample from '@/components/microsites/ai-transformation-pe/AiDataSample';
import AiCta from '@/components/microsites/ai-transformation-pe/AiCta';
import AccelerationRows from '@/components/microsites/shared/AccelerationRows';
import MeaningBeat from '@/components/microsites/shared/MeaningBeat';
import DarkReveal from '@/components/microsites/shared/DarkReveal';
import StickyMobileCta from '@/components/microsites/shared/StickyMobileCta';

const config = getMicrositeBySlug('ai-transformation-pe')!;

export const metadata: Metadata = {
  title: config.title,
  description: config.metaDescription,
  openGraph: {
    title: config.title,
    description: config.metaDescription,
    type: 'website',
  },
};

export default function AiTransformationPePage() {
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

      <AiHero />
      <AiChaosGrid />
      <AiSharedLayerDiagram />
      <AiDataSample />
      <AccelerationRows config={{
        accentRgb: '90,111,209',
        accentColor: 'var(--ms-blue)',
        heading: 'Three things get faster. Permanently.',
        timeline: {
          barCompressionFactor: 78,
          beforeLabels: ['1mo', '6mo', '12mo', '18mo', '24mo', '36mo'],
          summary: 'Weeks, not years.',
          detail: 'From new portco to AI-ready data.',
        },
        team: { detail: '3–5 engineers instead of 15–25. Same AI output.' },
        maintenance: { xAxisLabel: 'Portcos', detail: '<1 hr/week at 50+ portcos. Conventional: 2–3 engineers per portco.' },
      }} />
      <MeaningBeat
        heading="The 6% who get AI to work &mdash; one company in seventeen &mdash; share one&nbsp;thing."
        body={
          <p>
            They paid down the Babel Tax. They wrote down what
            &ldquo;customer&rdquo; means &mdash; everywhere, the same way
            &mdash; so their AI could read&nbsp;it. The unglamorous
            architectural&nbsp;work.
          </p>
        }
        closer={<>We do that&nbsp;work.</>}
      />
      <DarkReveal
        glowColor="rgba(172,31,45,0.12)"
        setupText={<>Investors expect AI ROI in&nbsp;six&nbsp;months&hellip;</>}
        revealText={<>&hellip;CEOs need two to four&nbsp;years. Longer than half your active&nbsp;holds.</>}
        punchlineText={<>Only one variable closes that gap. The data&nbsp;layer.</>}
        punchlineColor="#F06070"
      />
      <AiCta />

      {/* Email-gated call request */}
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
              <Calendar
                className="w-8 h-8 text-[var(--ms-primary)]"
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </div>
          </div>
          <MicrositeEmailGate
            slug={config.slug}
            papers={[]}
            formspreeId={config.formspreeId}
            ctaLabel={config.ctaLabel}
            mode="call"
            callDescription={
              <p className="text-center">
                A 30-minute review of where your portcos are stuck on AI &mdash;
                and what it would take to&nbsp;ship.
              </p>
            }
            callConfirmation={
              <>Thanks. We&rsquo;ll reach out within one business day to schedule the&nbsp;review.</>
            }
          />
        </div>
      </section>

      {/* Minimal footer */}
      <footer className="mt-auto py-6 md:py-8 border-t border-[var(--ms-border)]">
        <div className="container-site text-center">
          <p className="text-base text-[var(--ms-body)] mb-2">
            {config.brandTagline}
          </p>
          <p className="text-sm text-[var(--ms-muted)]">
            &copy; {currentYear} Mountain Biometrics. All rights reserved.
          </p>
        </div>
      </footer>

      <StickyMobileCta
        bgColor="#AC1F2D"
        activeBgColor="#8B1924"
        label="Book an AI assessment"
      />
    </MicrositeThemeWrapper>
  );
}
