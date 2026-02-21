'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/product', label: 'Product' },
  { href: '/use-cases', label: 'Use Cases' },
  { href: '/technical', label: 'Technical' },
  { href: '/about', label: 'About' },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm py-3'
          : 'bg-white py-5'
      }`}
    >
      <div className="container-site">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/MTN_ekg.svg"
              alt="Mountain Biometrics"
              width={40}
              height={40}
              priority
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[0.9375rem] font-medium no-underline transition-all px-3 py-1.5 rounded-md ${
                  pathname === link.href
                    ? 'text-[var(--ms-accent)] bg-[var(--ms-accent)]/10'
                    : 'text-[var(--ms-heading)] hover:text-[var(--ms-accent)] hover:bg-[var(--color-neutral-lighter)]/50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Primary CTA - Desktop */}
          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center justify-center px-6 py-3 bg-[var(--ms-accent)] text-white font-medium rounded-xl hover:bg-[#8B1924] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ms-accent)] focus-visible:ring-offset-2 no-underline hover:-translate-y-0.5"
            style={{ boxShadow: 'var(--ms-shadow-btn)' }}
          >
            Start a Conversation
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 text-[var(--color-neutral-dark)]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-[var(--color-neutral-lighter)]">
            <div className="flex flex-col gap-4 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-base font-medium py-2 px-3 rounded-md no-underline transition-all ${
                    pathname === link.href
                      ? 'text-[var(--ms-accent)] bg-[var(--ms-accent)]/10'
                      : 'text-[var(--ms-heading)] hover:text-[var(--ms-accent)] hover:bg-[var(--color-neutral-lighter)]/50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-[var(--ms-accent)] text-white font-medium rounded-xl hover:bg-[#8B1924] transition-all mt-2 no-underline hover:-translate-y-0.5"
                style={{ boxShadow: 'var(--ms-shadow-btn)' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Start a Conversation
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
