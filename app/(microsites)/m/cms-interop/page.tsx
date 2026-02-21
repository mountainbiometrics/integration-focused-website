import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FileDown } from 'lucide-react';
import { getMicrositeBySlug } from '@/lib/microsites';
import MicrositeThemeWrapper from '@/components/microsites/MicrositeThemeWrapper';
import MicrositeEmailGate from '@/components/microsites/MicrositeEmailGate';
import CmsHero from '@/components/microsites/cms-interop/CmsHero';
import BudgetBar from '@/components/microsites/cms-interop/BudgetBar';
import FoundryDiagram from '@/components/microsites/cms-interop/FoundryDiagram';
import TransformationRows from '@/components/microsites/cms-interop/TransformationRows';
import RevenueCards from '@/components/microsites/cms-interop/RevenueCards';
import MeaningBeat from '@/components/microsites/shared/MeaningBeat';
import OneMoreThing from '@/components/microsites/cms-interop/OneMoreThing';
import CmsCta from '@/components/microsites/cms-interop/CmsCta';
import StickyMobileCta from '@/components/microsites/shared/StickyMobileCta';

const config = getMicrositeBySlug('cms-interop')!;

export const metadata: Metadata = {
  title: config.title,
  description: config.metaDescription,
  openGraph: {
    title: config.title,
    description: config.metaDescription,
    type: 'website',
  },
};

export default function CmsInteropPage() {
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

      <CmsHero />
      <BudgetBar />
      <FoundryDiagram />
      <TransformationRows />
      <RevenueCards />
      <MeaningBeat
        heading="This isn&rsquo;t about plumbing."
        body={
          <p>
            Every failed data mapping is a patient whose history didn&rsquo;t follow them.
            A diagnosis that disappeared. A prior auth that made someone&nbsp;wait.
          </p>
        }
        closer="The pipe matters because what&rsquo;s inside it&nbsp;matters."
      />
      <OneMoreThing />
      <CmsCta />

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
          <p className="text-sm text-[var(--ms-body)] mb-2">
            Under an hour a week. That&rsquo;s the whole&nbsp;job.
          </p>
          <p className="text-xs text-[var(--ms-muted)]">
            &copy; {currentYear} Mountain Biometrics. All rights reserved.
          </p>
        </div>
      </footer>

      <StickyMobileCta
        bgColor="#AC1F2D"
        activeBgColor="#8B1924"
        emailSubject="Data%20Foundry%20walkthrough"
        label="Let&rsquo;s look at your data"
      />
    </MicrositeThemeWrapper>
  );
}
