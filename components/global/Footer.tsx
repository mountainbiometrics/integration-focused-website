import Link from 'next/link';
import Image from 'next/image';

const footerNavLinks = [
  { href: '/product', label: 'Product' },
  { href: '/use-cases', label: 'Use Cases' },
  { href: '/technical', label: 'Technical' },
  { href: '/about', label: 'About' },
];

const legalLinks = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-700">
      <div className="container-site py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Logo and Company Info */}
          <div className="space-y-4">
            <Link href="/">
              <Image
                src="/images/MTN_ekg_extended_large_white.svg"
                alt="Mountain Biometrics"
                width={160}
                height={36}
                className="h-9 w-auto"
              />
            </Link>
            <p className="!text-white text-sm leading-relaxed max-w-xs">
              Eliminating data blackout periods during consolidation and system change.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="!text-white font-semibold mb-4 text-sm uppercase tracking-wide">
              Navigation
            </h4>
            <nav className="flex flex-col gap-3">
              {footerNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="!text-white hover:!text-gray-300 transition-colors text-sm no-underline"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="!text-white font-semibold mb-4 text-sm uppercase tracking-wide">
              Legal
            </h4>
            <nav className="flex flex-col gap-3">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="!text-white hover:!text-gray-300 transition-colors text-sm no-underline"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-600">
          <p className="!text-white text-sm">
            &copy; {currentYear} Mountain Biometrics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
