import type { Metadata } from 'next';
import Hero from '@/components/content/Hero';
import SectionHeader from '@/components/content/SectionHeader';
import UseCaseNarrative from '@/components/use-case/UseCaseNarrative';
import PrimaryCTABanner from '@/components/cta/PrimaryCTABanner';
import {
  AlertCircle,
  Clock,
  HelpCircle,
  Plug,
  ArrowRight,
  Play,
  CheckCircle,
  TrendingUp,
  Sparkles,
  Split,
  FileWarning,
  Timer,
  Link,
  Users,
  BarChart3,
  Activity,
  Settings,
  Zap,
  Database,
  RefreshCw,
  Code,
  Rocket,
  Target,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Use Cases | MTN',
  description:
    'See how MTN Data Foundry solves real problems during acquisitions, rollups, revenue cycle management, and digital health scaling.',
};

const acquisitionNarrative = {
  before: {
    title: 'Post-close friction',
    iconPoints: [
      { icon: AlertCircle, text: 'No consolidated reporting for months' },
      { icon: Clock, text: 'Custom pipelines under time pressure' },
      { icon: HelpCircle, text: 'Decisions wait for unreliable data' },
    ],
  },
  during: {
    title: 'Immediate visibility',
    iconPoints: [
      { icon: Plug, text: 'Systems connect in days' },
      { icon: ArrowRight, text: 'Auto-suggested mappings' },
      { icon: Play, text: 'Reporting flows immediately' },
    ],
  },
  after: {
    title: 'Steady state',
    iconPoints: [
      { icon: CheckCircle, text: 'Consolidated reporting across entities' },
      { icon: TrendingUp, text: 'Schema changes handled automatically' },
      { icon: Sparkles, text: 'Ready for next acquisition' },
    ],
  },
};

const rcmNarrative = {
  before: {
    title: 'Fragmented denial management',
    iconPoints: [
      { icon: Split, text: 'Multiple systems, no unified view' },
      { icon: FileWarning, text: 'Aging denials missed in silos' },
      { icon: Timer, text: 'Delayed, inconsistent reports' },
    ],
  },
  during: {
    title: 'Unified visibility',
    iconPoints: [
      { icon: Link, text: 'All denial data in one layer' },
      { icon: Users, text: 'Single prioritized queue' },
      { icon: Settings, text: 'No workflow changes required' },
    ],
  },
  after: {
    title: 'Operational clarity',
    iconPoints: [
      { icon: Activity, text: 'Real-time denial aging visibility' },
      { icon: BarChart3, text: 'Less manual reconciliation' },
      { icon: Target, text: 'Consistent performance metrics' },
    ],
  },
};

const digitalHealthNarrative = {
  before: {
    title: 'Scaling bottleneck',
    iconPoints: [
      { icon: Code, text: 'Custom mapping per customer' },
      { icon: AlertCircle, text: 'Vendors change formats unexpectedly' },
      { icon: Split, text: 'Integration complexity multiplies' },
    ],
  },
  during: {
    title: 'Accelerated onboarding',
    iconPoints: [
      { icon: Database, text: 'Minimal custom development' },
      { icon: RefreshCw, text: 'Schema changes auto-handled' },
      { icon: Zap, text: 'Engineering focuses on product' },
    ],
  },
  after: {
    title: 'Scalable infrastructure',
    iconPoints: [
      { icon: Rocket, text: 'Faster customer deployments' },
      { icon: CheckCircle, text: 'Consistent data quality' },
      { icon: Sparkles, text: 'Engineering freed for innovation' },
    ],
  },
};

export default function UseCasesPage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        headline="Where this makes a difference"
        subheadline="Real operational moments where MTN Data Foundry closes visibility gaps and keeps teams productive."
        ctaText="Discuss Your Scenario"
        ctaHref="/contact"
        variant="internal"
      />

      {/* Use Case 1: Acquisitions */}
      <section className="section-spacing">
        <div className="container-site">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              headline="Acquisitions, rollups, and scaling"
              subheadline="Close the visibility gap within weeks of every system integration."
              variant="emphasis"
            />
            <UseCaseNarrative {...acquisitionNarrative} variant="compact" />
          </div>
        </div>
      </section>

      {/* Use Case 2: RCM */}
      <section className="section-spacing bg-[var(--color-neutral-lighter)]/30">
        <div className="container-site">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              headline="Revenue cycle and denial visibility"
              subheadline="Unify revenue cycle visibility across fragmented systems."
              variant="emphasis"
            />
            <UseCaseNarrative {...rcmNarrative} variant="compact" />
          </div>
        </div>
      </section>

      {/* Use Case 3: Digital Health Scaling */}
      <section className="section-spacing">
        <div className="container-site">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              headline="Digital health and RPM scaling"
              subheadline="Onboard new customers and data sources without rebuilding integrations."
              variant="emphasis"
            />
            <UseCaseNarrative {...digitalHealthNarrative} variant="compact" />
          </div>
        </div>
      </section>

      {/* Additional context */}
      <section className="section-spacing bg-[var(--color-neutral-lighter)]/30">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-neutral-dark)] mb-6">
              These are starting points
            </h2>
            <p className="text-lg text-[var(--color-neutral-mid)] leading-relaxed mb-8">
              The Foundry adapts to your specific scenario. Whether you&apos;re
              managing a single transition or building infrastructure for ongoing
              consolidation, we&apos;ll design an approach that fits your
              operational reality.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
              <div className="p-6 rounded-lg bg-white border border-[var(--color-neutral-lighter)]">
                <h3 className="font-semibold text-[var(--color-neutral-dark)] mb-2">
                  Multi-clinic consolidation
                </h3>
                <p className="text-sm text-[var(--color-neutral-mid)]">
                  Bringing together multiple locations with different systems and
                  workflows
                </p>
              </div>
              <div className="p-6 rounded-lg bg-white border border-[var(--color-neutral-lighter)]">
                <h3 className="font-semibold text-[var(--color-neutral-dark)] mb-2">
                  Vendor transitions
                </h3>
                <p className="text-sm text-[var(--color-neutral-mid)]">
                  Switching billing vendors, clearinghouses, or analytics
                  platforms without losing continuity
                </p>
              </div>
              <div className="p-6 rounded-lg bg-white border border-[var(--color-neutral-lighter)]">
                <h3 className="font-semibold text-[var(--color-neutral-dark)] mb-2">
                  Reporting standardization
                </h3>
                <p className="text-sm text-[var(--color-neutral-mid)]">
                  Creating consistent metrics across heterogeneous systems and
                  entities
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Primary CTA */}
      <PrimaryCTABanner
        headline="What's your integration scenario?"
        description="We'll walk through your specific situation and show how the Foundry would fit."
        ctaText="Discuss Your Integration"
        ctaHref="/contact"
      />
    </>
  );
}
