import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import QRCode from 'qrcode';
import { teamMembers, SITE_BASE_URL } from '../lib/team-data';
import type { TeamMember } from '../lib/team-data';

const OUTPUT_DIR = join(process.cwd(), 'public', 'cards');

function generateVCard(member: TeamMember): string {
  const lines: string[] = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:${member.lastName};${member.firstName};;;`,
    `FN:${member.firstName} ${member.lastName}`,
    `ORG:${member.organization}`,
    `TITLE:${member.title}`,
    `EMAIL;TYPE=INTERNET,WORK:${member.email}`,
    `TEL;TYPE=CELL:${member.phone}`,
  ];

  if (member.url) {
    lines.push(`URL:${member.url}`);
  }

  if (member.address) {
    const a = member.address;
    lines.push(
      `ADR;TYPE=WORK:;;${a.street || ''};${a.city || ''};${a.state || ''};${a.zip || ''};${a.country || ''}`
    );
  }

  if (member.note) {
    lines.push(`NOTE:${member.note}`);
  }

  lines.push('END:VCARD');
  return lines.join('\r\n') + '\r\n';
}

async function main() {
  mkdirSync(OUTPUT_DIR, { recursive: true });

  if (SITE_BASE_URL.includes('your-domain.com')) {
    console.warn(
      '⚠  SITE_BASE_URL still contains "your-domain.com". Update lib/team-data.ts before deploying.\n'
    );
  }

  console.log(`Generating cards for ${teamMembers.length} team members...`);
  console.log(`Base URL: ${SITE_BASE_URL}`);
  console.log(`Output:   ${OUTPUT_DIR}\n`);

  for (const member of teamMembers) {
    const vcfContent = generateVCard(member);
    const vcfPath = join(OUTPUT_DIR, `${member.slug}.vcf`);
    writeFileSync(vcfPath, vcfContent, 'utf-8');

    const vcfUrl = `${SITE_BASE_URL}/cards/${member.slug}.vcf`;

    const svgString = await QRCode.toString(vcfUrl, {
      type: 'svg',
      errorCorrectionLevel: 'H',
      margin: 2,
      width: 512,
      color: {
        dark: '#AC1F2D',
        light: '#FFFFFF',
      },
    });

    const svgPath = join(OUTPUT_DIR, `${member.slug}-qr.svg`);
    writeFileSync(svgPath, svgString, 'utf-8');

    console.log(`  ${member.firstName} ${member.lastName}`);
    console.log(`    VCF: cards/${member.slug}.vcf`);
    console.log(`    QR:  cards/${member.slug}-qr.svg  ->  ${vcfUrl}`);
  }

  console.log(`\nDone. Generated ${teamMembers.length * 2} files.`);
}

main().catch((err) => {
  console.error('Error generating cards:', err);
  process.exit(1);
});
