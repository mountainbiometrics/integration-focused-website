import Hero from '@/components/content/Hero';
import SectionHeader from '@/components/content/SectionHeader';
import DenialRateDemo from '@/components/content/DenialRateDemo';
import ScatteredSystems from '@/components/content/ScatteredSystems';
import TrustAndTime from '@/components/content/TrustAndTime';
import FourReturns from '@/components/content/FourReturns';
import ScrollReveal from '@/components/animation/ScrollReveal';
import PrimaryCTABanner from '@/components/cta/PrimaryCTABanner';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        headline="It’s time to trust your data"
        subheadline="Your trusted guide through fragmented data to a better-run organization."
        ctaText="Start a Conversation"
        ctaHref="/contact"
        variant="homepage"
        topo="range"
      />

      {/* The stakes, as a demo */}
      <section className="section-spacing bg-[var(--ms-surface-warm)]">
        <div className="container-site">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <SectionHeader
                headline="Same request. Different answer."
                subheadline="Example: building an AI agent to track a monthly denial-rate chart across five clinics."
                align="center"
              />
            </ScrollReveal>
            <div className="mt-10">
              <DenialRateDemo />
            </div>
          </div>
        </div>
      </section>

      {/* Fragmentation, and what MTN does about it */}
      <section className="section-spacing">
        <div className="container-site">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <SectionHeader
                headline="Your data isn’t missing. It’s fragmented."
                subheadline="Every system names the same thing differently. MTN learns a common semantic map, maintains it over time and guides users or agents to the right meaning."
                align="center"
              />
            </ScrollReveal>
            <div className="mt-10">
              <ScatteredSystems />
            </div>
          </div>
        </div>
      </section>

      {/* Trust and time */}
      <section className="section-spacing bg-[var(--ms-surface)]">
        <div className="container-site">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <SectionHeader
                headline="Trust and time"
                subheadline="We don’t want your data, but we care about your time."
                align="center"
              />
            </ScrollReveal>
            <ScrollReveal stagger={0.1} distance={20}>
              <div className="mt-10">
                <TrustAndTime />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Four returns */}
      <section className="section-spacing bg-[var(--ms-surface-warm)]">
        <div className="container-site">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <SectionHeader
                headline="Four returns on your AI investment"
                subheadline="What every organization should expect once its data can be trusted."
                align="center"
              />
            </ScrollReveal>
            <ScrollReveal stagger={0.1} distance={20}>
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <FourReturns />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Primary CTA Section */}
      <PrimaryCTABanner
        headline="Send us one representative schema"
        description="We’ll show you what the FieldMap finds in it. Just as usefully, we’ll show you what it can’t tell you without asking."
        ctaText="Start a Conversation"
        ctaHref="/contact"
      />
    </>
  );
}
