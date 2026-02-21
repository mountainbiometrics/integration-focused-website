export interface MicrositePaper {
  title: string;
  subtitle?: string;
  filePath: string;
  fileSize?: string;
}

export interface MicrositeSection {
  type: 'bullets' | 'stats' | 'before-after';
  heading?: string;
  items: { label: string; detail?: string; icon?: string }[];
  annotation?: string;
  tone?: 'pain' | 'solution';
  badgeLabel?: string;
}

export interface MicrositeTheme {
  primaryColor: string;
  primaryColorHover: string;
  heroGradientColor: string;
}

export interface MicrositeConfig {
  slug: string;
  title: string;
  metaDescription: string;
  headline: string;
  subheadline: string;
  heroStat?: string;
  heroStatCaption?: string;
  papers: MicrositePaper[];
  formspreeId: string;
  ctaLabel?: string;
  theme?: MicrositeTheme;
  sections?: MicrositeSection[];
  utmCampaign?: string;
  brandTagline?: string;
}

const microsites: MicrositeConfig[] = [
  {
    slug: 'healthcare-pe',
    title: 'MTN | Close the Visibility Gap',
    metaDescription:
      'Download the executive and technical white papers on closing the data visibility gap during healthcare rollups and PE-backed consolidation.',
    headline: 'Close the Visibility Gap',
    heroStat: '$200K–$500K/mo',
    heroStatCaption: 'per portfolio in delayed integration costs',
    subheadline: 'We compress integration from months to weeks.',
    papers: [
      {
        title: 'Close the Visibility Gap — Executive Edition',
        subtitle: 'For PE operating partners and platform CEOs',
        filePath: '/papers/mtn-wp-001-exec.pdf',
        fileSize: '3.3 MB',
      },
      {
        title: 'Close the Visibility Gap — Technical Edition',
        subtitle: 'For integration leads and CTO/CIOs',
        filePath: '/papers/mtn-wp-001-tech.pdf',
        fileSize: '3.8 MB',
      },
    ],
    formspreeId: 'xaqbaljo',
    ctaLabel: 'Download the White Papers',
    theme: {
      primaryColor: '#AC1F2D',
      primaryColorHover: '#8B1924',
      heroGradientColor: '#F5E0E2',
    },
    sections: [
      {
        type: 'stats',
        heading: 'The Cost of Waiting',
        tone: 'pain',
        badgeLabel: 'The Problem',
        items: [
          { label: '$200K–$500K', detail: 'monthly leakage', icon: 'DollarSign' },
          { label: '12–18 mo', detail: 'lost per hold', icon: 'Hourglass' },
          { label: '65%', detail: 'claims never resubmitted', icon: 'FileX' },
        ],
      },
      {
        type: 'stats',
        heading: 'What Changes',
        tone: 'solution',
        badgeLabel: 'The Solution',
        items: [
          { label: '12mo → 3wk', detail: 'Integration timeline', icon: 'Zap' },
          { label: '25 → 5', detail: 'People needed', icon: 'Users' },
          { label: '$2M+', detail: 'Year-one EBITDA', icon: 'TrendingUp' },
        ],
        annotation: '~$24M in enterprise value at 12x exit multiple.',
      },
      {
        type: 'stats',
        heading: 'Why the Math Changes',
        tone: 'solution',
        badgeLabel: 'The Proof',
        items: [
          { label: 'Shared layer', detail: '#50 doesn\u2019t touch 1–49', icon: 'Layers' },
          { label: '5–15 min', detail: 'per integration review', icon: 'Clock' },
          { label: 'Flat curve', detail: 'costs don\u2019t compound', icon: 'Minus' },
        ],
        annotation: '99.0% mapping accuracy in benchmark testing.',
      },
    ],
    utmCampaign: 'healthcare-pe-wp',
    brandTagline: 'Full data visibility during consolidation and system change.',
  },
  {
    slug: 'b2b-pe',
    title: 'MTN | Cut the Integration Tax',
    metaDescription:
      'Download executive and technical white papers on reducing compounding integration costs in PE-backed B2B rollups.',
    headline: 'Cut the Integration Tax',
    subheadline:
      'What compounding integration costs are doing to your rollup returns — and how to eliminate them.',
    papers: [
      {
        title: 'Cut the Integration Tax — Executive Edition',
        subtitle: 'For PE deal teams and operating partners',
        filePath: '/papers/mtn-wp-002-exec.pdf',
        fileSize: '2.2 MB',
      },
      {
        title: 'Cut the Integration Tax — Technical Edition',
        subtitle: 'For CTOs and integration architects',
        filePath: '/papers/mtn-wp-002-tech.pdf',
        fileSize: '2.8 MB',
      },
    ],
    formspreeId: 'xaqbaljo',
    ctaLabel: 'Download the White Papers',
    theme: {
      primaryColor: '#AC1F2D',
      primaryColorHover: '#8B1924',
      heroGradientColor: '#F5E0E2',
    },
    sections: [
      {
        type: 'bullets',
        heading: 'The Compounding Problem',
        tone: 'pain',
        badgeLabel: 'The Problem',
        items: [
          {
            label: '70% of mergers miss revenue synergies',
            detail: 'Integration delays are the primary cause',
          },
          {
            label: '$500K+ annual maintenance',
            detail: 'Per-connection costs that grow with every add-on acquisition',
          },
          {
            label: '30% of portfolio companies held 7+ years',
            detail: 'Extended holds often signal integration complexity, not strategy',
          },
        ],
      },
      {
        type: 'stats',
        heading: 'What Changes with Data Foundry',
        tone: 'solution',
        badgeLabel: 'The Solution',
        items: [
          { label: '8–10 weeks → 2–3 weeks', detail: 'Integration timeline' },
          { label: '$500K+ → under $100K', detail: 'Annual maintenance cost' },
          { label: '~70 bps IRR recovered', detail: 'Per month of integration compressed' },
        ],
      },
    ],
    utmCampaign: 'b2b-pe-wp',
    brandTagline: 'Full data visibility during consolidation and system change.',
  },
  {
    slug: 'cms-interop',
    title: 'MTN | Compliance to Capability',
    metaDescription:
      'Download executive and technical white papers on turning CMS interoperability compliance into a competitive advantage for payers.',
    headline: 'Compliance to Capability',
    subheadline:
      'Why your CMS interoperability spend is not producing returns yet — and how to turn mandated APIs into computable data.',
    papers: [
      {
        title: 'Compliance to Capability — Executive Edition',
        subtitle: 'For payer executives and compliance leaders',
        filePath: '/papers/mtn-wp-003-exec.pdf',
        fileSize: '2.5 MB',
      },
      {
        title: 'Compliance to Capability — Technical Edition',
        subtitle: 'For health IT architects and interoperability teams',
        filePath: '/papers/mtn-wp-003-tech.pdf',
        fileSize: '3.3 MB',
      },
    ],
    formspreeId: 'xaqbaljo',
    ctaLabel: 'Download the White Papers',
    theme: {
      primaryColor: '#AC1F2D',
      primaryColorHover: '#8B1924',
      heroGradientColor: '#F5E0E2',
    },
    sections: [],
    utmCampaign: 'cms-interop-wp',
    brandTagline: 'Full data visibility during consolidation and system change.',
  },
];

export function getMicrositeBySlug(slug: string): MicrositeConfig | undefined {
  return microsites.find((m) => m.slug === slug);
}

export function getAllMicrositeSlugs(): string[] {
  return microsites.map((m) => m.slug);
}
