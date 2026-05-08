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
  title: 'Product | MTN',
  description:
    'MTN Data Foundry closes visibility gaps during acquisitions and system changes. Learn how it works.',
};

export default function ProductPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        headline="The data layer underneath the work."
        subheadline="Live in days. Flat through every add-on. Ready for what you deploy next."
        ctaText="See How It Works"
        ctaHref="/contact"
        variant="internal"
      />

      {/* Product Overview — animated Sources → Foundry → Tools */}
      <FoundryFlow />

      {/* Section 1: Live in days — animated field mapping */}
      <MappingCascade />

      {/* Section 2: Flat through every add-on — maintenance chart */}
      <HealingPipeline />

      {/* Section 3: Flat doesn't happen by accident — self-healing vignettes */}
      <AutomatePlumbing />

      {/* Section 4: Ready for what you deploy next — AI readiness */}
      <AIReadiness />

      {/* Section 5: What it does, and what it doesn't — positioning */}
      <WhatItDoes />

      {/* Section 6: It tells you before anything breaks — 3 signal lanes */}
      <MonitoringPulse />

      {/* Primary CTA */}
      <PrimaryCTABanner
        headline="See how this fits your stack"
        description="We'll walk through your sources, your warehouse, and your deployment plans, and show how the layer fits underneath."
        ctaText="See How It Fits Your Stack"
        ctaHref="/contact"
      />
    </>
  );
}
