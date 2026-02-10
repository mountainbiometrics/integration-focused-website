export interface TeamMember {
  /** Unique slug used for filenames: e.g. "jane-doe" -> jane-doe.vcf, jane-doe-qr.svg */
  slug: string;
  firstName: string;
  lastName: string;
  /** Job title / role */
  title: string;
  email: string;
  /** Phone in international format, e.g. "+1-555-123-4567" */
  phone: string;
  organization: string;
  /** Website or LinkedIn URL */
  url?: string;
  address?: {
    street?: string;
    city?: string;
    state?: string;
    zip?: string;
    country?: string;
  };
  note?: string;
}

/**
 * Base URL where the site is hosted. QR codes encode URLs like:
 * `${SITE_BASE_URL}/cards/${slug}.vcf`
 *
 * Must NOT have a trailing slash.
 */
export const SITE_BASE_URL = 'https://www.themtn.ai';

/**
 * Team members. Add entries here and run `npm run generate-cards`
 * to produce VCF files and QR code images.
 */
export const teamMembers: TeamMember[] = [
  {
    slug: 'warren-pettine',
    firstName: 'Warren',
    lastName: 'Pettine',
    title: 'CEO',
    email: 'warren@themtn.ai',
    phone: '+1-970-219-7842',
    organization: 'MTN',
    url: 'https://themtn.ai',
  },
];
