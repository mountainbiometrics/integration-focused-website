import type { Metadata } from 'next';
import Hero from '@/components/content/Hero';
import PrimaryCTABanner from '@/components/cta/PrimaryCTABanner';
import FoundryFlow from '@/components/product/FoundryFlow';
import MappingCascade from '@/components/product/MappingCascade';
import HealingPipeline from '@/components/product/HealingPipeline';
import AutomatePlumbing from '@/components/product/AutomatePlumbing';
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
        headline="Adaptive integration that stays live"
        subheadline="MTN Data Foundry adapts as systems change. Continuous visibility, no integration restarts, no months of catch-up."
        ctaText="See How It Works"
        ctaHref="/contact"
        variant="internal"
      />

      {/* Product Overview — animated Sources → Foundry → Tools */}
      <FoundryFlow />

      {/* Self-Organizing Integration — animated field mapping */}
      <MappingCascade />

      {/* Flatten the Maintenance Curve — chart */}
      <HealingPipeline />

      {/* Automate the Plumbing — self-healing infographic rows */}
      <AutomatePlumbing />

      {/* Continuous Monitoring — 3 signal lanes */}
      <MonitoringPulse />

      {/* Primary CTA */}
      <PrimaryCTABanner
        headline="See how this fits your stack"
        description="We'll walk through your current systems and show how the Foundry would integrate."
        ctaText="See How It Fits Your Stack"
        ctaHref="/contact"
      />
    </>
  );
}
