'use client';

import { useState, useEffect } from 'react';
import EmailCaptureForm from '@/components/forms/EmailCaptureForm';
import type { MicrositePaper } from '@/lib/microsites';

interface MicrositeEmailGateProps {
  slug: string;
  papers: MicrositePaper[];
  formspreeId: string;
  ctaLabel?: string;
}

export default function MicrositeEmailGate({
  slug,
  papers,
  formspreeId,
  ctaLabel,
}: MicrositeEmailGateProps) {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(`ms-submitted-${slug}`) === 'true') {
        setUnlocked(true);
      }
    } catch {
      // localStorage unavailable
    }
  }, [slug]);

  if (unlocked) {
    return (
      <div className="space-y-4">
        <div className="bg-[rgba(46,125,111,0.08)] rounded-lg p-6 text-center mb-6">
          <svg
            className="w-10 h-10 mx-auto mb-3 text-[var(--ms-primary,var(--color-cta-blue))]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <p className="text-[var(--color-neutral-dark)] font-medium">
            Your downloads are ready
          </p>
        </div>
        {papers.map((paper) => (
          <a
            key={paper.filePath}
            href={paper.filePath}
            download
            className="flex items-center gap-4 p-4 min-h-[56px] border border-[var(--color-neutral-lighter)] rounded-lg hover:border-[var(--ms-primary,var(--color-cta-blue))] hover:bg-[var(--ms-hero-gradient,#f8f9fa)] transition-all no-underline group"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[var(--ms-primary,var(--color-cta-blue))] flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-[var(--color-neutral-dark)] group-hover:text-[var(--ms-primary,var(--color-cta-blue))] transition-colors">
                {paper.title}
              </p>
              {paper.subtitle && (
                <p className="text-sm text-[var(--color-neutral-mid)] mt-0.5">
                  {paper.subtitle}
                </p>
              )}
              {paper.fileSize && (
                <p className="hidden md:block text-xs text-[var(--color-neutral-light)] mt-1">
                  PDF &middot; {paper.fileSize}
                </p>
              )}
            </div>
            <svg
              className="w-5 h-5 text-[var(--color-neutral-light)] group-hover:text-[var(--ms-primary,var(--color-cta-blue))] transition-colors flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </a>
        ))}
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-[var(--color-neutral-dark)] mb-2">
          {papers.length === 1 ? 'Get the white paper' : 'Get the white papers'}
        </h3>
        <div className="space-y-2 mb-6">
          {papers.map((paper) => (
            <div key={paper.filePath} className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-[var(--ms-primary,var(--color-cta-blue))] mt-0.5 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <div>
                <p className="text-sm font-medium text-[var(--color-neutral-dark)]">
                  {paper.title}
                </p>
                {paper.subtitle && (
                  <p className="text-xs text-[var(--color-neutral-mid)]">
                    {paper.subtitle}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <EmailCaptureForm
        formspreeId={formspreeId}
        micrositeSlug={slug}
        ctaLabel={ctaLabel}
        onSuccess={() => setUnlocked(true)}
      />
    </div>
  );
}
