import Link from 'next/link';

interface InlineCTALinkProps {
  href: string;
  children: React.ReactNode;
  showArrow?: boolean;
}

export default function InlineCTALink({
  href,
  children,
  showArrow = true,
}: InlineCTALinkProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 text-[var(--color-neutral-dark)] hover:text-[var(--color-primary-red)] font-medium transition-colors group no-underline"
    >
      {children}
      {showArrow && (
        <svg
          className="w-4 h-4 transition-transform group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      )}
    </Link>
  );
}
