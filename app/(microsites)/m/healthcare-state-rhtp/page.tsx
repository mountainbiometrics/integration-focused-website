import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FileDown } from 'lucide-react';
import { getMicrositeBySlug } from '@/lib/microsites';
import MicrositeThemeWrapper from '@/components/microsites/MicrositeThemeWrapper';
import MicrositeEmailGate from '@/components/microsites/MicrositeEmailGate';
import RhtpHero from '@/components/microsites/healthcare-state-rhtp/RhtpHero';
import RhtpPatientJourney from '@/components/microsites/healthcare-state-rhtp/RhtpPatientJourney';
import RhtpStateStack from '@/components/microsites/healthcare-state-rhtp/RhtpStateStack';
import RhtpMaintenanceCurve from '@/components/microsites/healthcare-state-rhtp/RhtpMaintenanceCurve';
import RhtpPeerStates from '@/components/microsites/healthcare-state-rhtp/RhtpPeerStates';
import RhtpCta from '@/components/microsites/healthcare-state-rhtp/RhtpCta';
import ReturnCards from '@/components/microsites/shared/ReturnCards';
import MeaningBeat from '@/components/microsites/shared/MeaningBeat';
import DarkReveal from '@/components/microsites/shared/DarkReveal';
import StickyMobileCta from '@/components/microsites/shared/StickyMobileCta';

const config = getMicrositeBySlug('healthcare-state-rhtp')!;

export const metadata: Metadata = {
  title: config.title,
  description: config.metaDescription,
  openGraph: {
    title: config.title,
    description: config.metaDescription,
    type: 'website',
  },
};

const RETURN_CARDS = [
  {
    label: 'Workforce gap',
    stat: '40%',
    detail: 'of local health departments have no informatics staff. (NACCHO 2024)',
  },
  {
    label: 'Usage gap',
    stat: '42%',
    detail:
      'of clinicians use outside clinical info — even when their hospital has access. (ONC 2023)',
  },
  {
    label: 'Vendor heterogeneity',
    stat: '4–6',
    detail: 'EHR vendors per rural network — vs. 1 in an integrated delivery system.',
  },
] as const;

function FounderNote() {
  return (
    <div className="container-site max-w-2xl mx-auto pt-2 pb-10 md:pb-14">
      <div
        className="rounded-2xl bg-white border border-[var(--ms-border)] p-6 md:p-8"
        style={{ boxShadow: 'var(--ms-shadow-card-sm)' }}
      >
        <p className="text-base md:text-lg text-[var(--ms-heading)] leading-relaxed">
          Rural communities are owed health data infrastructure that doesn&rsquo;t require
          an informaticist their state can&rsquo;t hire. The semantic layer is the only
          piece left to automate &mdash; and it&rsquo;s the piece we&nbsp;built.
        </p>
        <p className="text-sm text-[var(--ms-body-light)] mt-4">
          &mdash; Warren Pettine, MD, Founder &amp; CEO &middot; University of Utah Medical
          Machine Intelligence Lab
        </p>
      </div>
    </div>
  );
}

export default function HealthcareStateRhtpPage() {
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

      <RhtpHero />

      <ReturnCards
        heading="The structural gap states are working with."
        cards={RETURN_CARDS}
        accentColor="#AC1F2D"
        accentRgb="172,31,45"
      />

      <MeaningBeat
        badge="Why it matters"
        heading="The record moves through the HIE. The meaning does not travel with it."
        body={
          <p>
            Forty percent of local health departments have no informatics staff.
            The 195 rural hospitals that have closed since 2005 didn&rsquo;t fail at care.
            They failed at reporting&nbsp;it.
          </p>
        }
        closer="That gap is what Technical Factor F.2 asks states to&nbsp;close."
        accentRgb="172,31,45"
        accentColor="#AC1F2D"
      />

      <RhtpPatientJourney />

      <RhtpStateStack />
      <RhtpMaintenanceCurve />

      <RhtpPeerStates />

      <DarkReveal
        glowColor="rgba(172,31,45,0.14)"
        setupText={
          <>
            Today your F.2 report is reconstructed by hand across four EHRs and a
            pharmacy&nbsp;system.
          </>
        }
        revealText={
          <>Tomorrow it assembles itself from the schemas you already&nbsp;own.</>
        }
        punchlineText={<>Federal reporting stops being a fire&nbsp;drill.</>}
        punchlineColor="#F06070"
      />

      <RhtpCta />

      {/* Email-gated download with founder note above */}
      <FounderNote />
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
            <p className="text-base text-[var(--ms-body)] mb-2">{config.brandTagline}</p>
          )}
          <p className="text-sm text-[var(--ms-muted)]">
            &copy; {currentYear} Mountain Biometrics. All rights reserved.
          </p>
        </div>
      </footer>

      <StickyMobileCta
        bgColor="#AC1F2D"
        activeBgColor="#8B1924"
        label="Download the executive paper"
        href="#download"
      />
    </MicrositeThemeWrapper>
  );
}
