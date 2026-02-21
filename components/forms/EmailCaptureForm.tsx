'use client';

import { useForm, ValidationError } from '@formspree/react';

interface EmailCaptureFormProps {
  formspreeId: string;
  micrositeSlug: string;
  ctaLabel?: string;
  onSuccess: () => void;
}

export default function EmailCaptureForm({
  formspreeId,
  micrositeSlug,
  ctaLabel = 'Download the White Papers',
  onSuccess,
}: EmailCaptureFormProps) {
  const [state, handleSubmit] = useForm(formspreeId);

  // Read UTM params from URL
  const getUtmParams = () => {
    if (typeof window === 'undefined') return {};
    const params = new URLSearchParams(window.location.search);
    return {
      utm_source: params.get('utm_source') || '',
      utm_medium: params.get('utm_medium') || '',
      utm_campaign: params.get('utm_campaign') || '',
      utm_term: params.get('utm_term') || '',
      utm_content: params.get('utm_content') || '',
    };
  };

  if (state.succeeded) {
    // Persist submission in localStorage
    try {
      localStorage.setItem(`ms-submitted-${micrositeSlug}`, 'true');
    } catch {
      // localStorage unavailable
    }
    onSuccess();
    return null;
  }

  const utmParams = getUtmParams();

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-[var(--ms-heading)] mb-2"
        >
          Work email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 min-h-[48px] border border-[var(--ms-muted)] rounded-md text-base focus:outline-none focus:ring-2 focus:ring-[var(--ms-primary)] focus:border-transparent text-[var(--ms-heading)]"
          placeholder="you@company.com"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      {/* Hidden fields */}
      <input type="hidden" name="_microsite" value={micrositeSlug} />
      <input type="hidden" name="_utm_source" value={utmParams.utm_source} />
      <input type="hidden" name="_utm_medium" value={utmParams.utm_medium} />
      <input type="hidden" name="_utm_campaign" value={utmParams.utm_campaign} />
      <input type="hidden" name="_utm_term" value={utmParams.utm_term} />
      <input type="hidden" name="_utm_content" value={utmParams.utm_content} />

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full px-8 py-4 min-h-[52px] bg-[var(--ms-primary)] text-white text-base font-semibold rounded-md hover:bg-[var(--ms-primary-hover)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ms-primary)] focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {state.submitting ? 'Submitting...' : ctaLabel}
      </button>

      {state.errors && Object.keys(state.errors).length > 0 && (
        <p className="text-[var(--ms-alert)] text-sm mt-2">
          There was an error. Please try again.
        </p>
      )}
    </form>
  );
}
