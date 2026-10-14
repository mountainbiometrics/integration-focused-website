import { ArrowUpRight } from 'lucide-react';

/* Press coverage and announcements, newest first. Each opens the original
   story in a new tab. */

interface NewsItem {
  outlet: string;
  date: string;
  headline: string;
  href: string;
}

const NEWS: NewsItem[] = [
  {
    outlet: 'TechBuzz News',
    date: 'Oct 13, 2026',
    headline: 'MTN Lands $2.34 Million NIH Grant to Help AI Navigate Fragmented Data',
    href: 'https://www.techbuzznews.com/mtn-nih-grant-ai-fragmented-data/',
  },
  {
    outlet: 'PR Newswire · Press release',
    date: 'Oct 13, 2026',
    headline:
      'MTN Secures $2.34 Million NIH Grant to Scale Platform That Maps Fragmented Data So High-Trust Industries Can Drive Superior Performance',
    href: 'https://www.prnewswire.com/news-releases/mtn-secures-2-34-million-nih-grant-to-scale-platform-that-maps-fragmented-data-so-high-trust-industries-can-drive-superior-performance-302903944.html',
  },
];

export default function NewsLinks() {
  return (
    <ul className="list-none p-0 m-0 grid grid-cols-1 md:grid-cols-2 gap-6">
      {NEWS.map((n) => (
        <li key={n.href}>
          <a
            href={n.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group h-full flex flex-col p-6 rounded-2xl bg-white border border-[var(--ms-border)] no-underline shadow-card-hover"
          >
            <div className="flex items-center justify-between gap-3 text-sm text-[var(--ms-body-light)] mb-3">
              <span className="font-semibold uppercase tracking-wide text-xs">{n.outlet}</span>
              <span className="tabular-nums whitespace-nowrap">{n.date}</span>
            </div>
            <div className="font-display text-[var(--ms-heading)] text-xl leading-snug flex-1">
              {n.headline}
            </div>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[var(--ms-accent)]">
              Read the story
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
