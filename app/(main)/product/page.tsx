import type { Metadata } from 'next';
import Hero from '@/components/content/Hero';
import PrimaryCTABanner from '@/components/cta/PrimaryCTABanner';
import FoundryFlow from '@/components/product/FoundryFlow';
import MappingCascade from '@/components/product/MappingCascade';
import HealingPipeline from '@/components/product/HealingPipeline';
import AutomatePlumbing from '@/components/product/AutomatePlumbing';
import AIReadiness from '@/components/product/AIReadiness';
import WhatItDoes from '@/components/product/WhatItDoes';
import MonitoringPulse from '@/components/product/MonitoringPulse';

export const metadata: Metadata = {
  title: 'MTN Guide | MTN',
  description:
    'MTN Guide is an agentic data engineer: it maps what your systems mean from schemas and documentation, and keeps that map current as they change.',
};

export default function ProductPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        headline="MTN Guide"
        subheadline="An agentic data engineer. It reads your schemas, maps what they mean, and keeps the map current as your systems change."
        ctaText="See How It Works"
        ctaHref="/contact"
        variant="internal"
        background="topo"
      />

      {/* Product Overview — animated Sources → Guide → Tools */}
      <FoundryFlow />

      {/* Section 1: A map in days — animated field mapping */}
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
