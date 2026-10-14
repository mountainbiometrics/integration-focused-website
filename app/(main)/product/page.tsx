import type { Metadata } from 'next';
import Hero from '@/components/content/Hero';
import PrimaryCTABanner from '@/components/cta/PrimaryCTABanner';
import SectionHeader from '@/components/content/SectionHeader';
import GuideAlongside from '@/components/content/GuideAlongside';
import MappingCascade from '@/components/product/MappingCascade';
import HealingPipeline from '@/components/product/HealingPipeline';
import AutomatePlumbing from '@/components/product/AutomatePlumbing';
import AIReadiness from '@/components/product/AIReadiness';
import WhatItDoes from '@/components/product/WhatItDoes';
import MonitoringPulse from '@/components/product/MonitoringPulse';

export const metadata: Metadata = {
  title: 'MTN Guide | MTN',
  description:
    'One platform, two parts: MTN Guide, an agentic data engineer, builds MTN FieldMap, an evidence-backed map of what your systems mean, and keeps it current as they change.',
};

export default function ProductPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        headline="MTN Guide"
        subheadline="One platform, two parts. Guide, an agentic data engineer, reads your schemas, documentation, and API specifications, not your records. It builds MTN FieldMap, a map of what your data means across systems with the evidence behind each mapping, and keeps it current as those systems change."
        ctaText="See How It Works"
        ctaHref="/contact"
        variant="internal"
        topo="summit"
      />

      {/* Product Overview — where Guide lands in your stack */}
      <section className="section-spacing bg-[var(--ms-surface)]">
        <div className="container-site">
          <div className="max-w-5xl mx-auto">
            <SectionHeader
              headline="Where MTN Guide lands"
              subheadline="Beside your systems, not in the data path. Your stack keeps working as it does today."
              align="center"
            />
            <div className="mt-10">
              <GuideAlongside />
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: A FieldMap in days — animated field mapping */}
      <MappingCascade />

      {/* Section 2: Change stays contained — maintenance chart */}
      <HealingPipeline />

      {/* Section 3: How change stays contained — vignettes */}
      <AutomatePlumbing />

      {/* Section 4: Ready for what you deploy next — AI readiness */}
      <AIReadiness />

      {/* Section 5: What it does, and what it doesn't — positioning */}
      <WhatItDoes />

      {/* Section 6: You find out when something moves — schema drift */}
      <MonitoringPulse />

      {/* Primary CTA */}
      <PrimaryCTABanner
        headline="See how this fits your stack"
        description="We'll walk through your sources, your warehouse, and your deployment plans, and show you where the map fits underneath."
        ctaText="See How It Fits Your Stack"
        ctaHref="/contact"
      />
    </>
  );
}
