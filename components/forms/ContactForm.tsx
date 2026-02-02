'use client';

import { useForm, ValidationError } from '@formspree/react';
import { useState } from 'react';

// Replace with your actual Formspree form ID
const FORMSPREE_FORM_ID = 'xpwzgvqk'; // Placeholder - user should replace this

export default function ContactForm() {
  const [state, handleSubmit] = useForm(FORMSPREE_FORM_ID);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    scenario: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  if (state.succeeded) {
    return (
      <div className="bg-[rgba(74,111,165,0.1)] rounded-lg p-8 text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[rgba(74,111,165,0.15)] flex items-center justify-center">
          <svg
            className="w-8 h-8 text-[var(--color-cta-blue)]"
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
        </div>
        <h3 className="text-xl font-semibold text-[var(--color-neutral-dark)] mb-2">
          Message sent
        </h3>
        <p className="text-[var(--color-neutral-mid)]">
          We&apos;ll be in touch within one business day to schedule a conversation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name field */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-[var(--color-neutral-dark)] mb-2"
        >
          Name <span className="text-[var(--color-neutral-mid)]">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-[var(--color-neutral-light)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-cta-blue)] focus:border-transparent text-[var(--color-neutral-dark)]"
          placeholder="Your name"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>

      {/* Email field */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-[var(--color-neutral-dark)] mb-2"
        >
          Email <span className="text-[var(--color-neutral-mid)]">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-[var(--color-neutral-light)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-cta-blue)] focus:border-transparent text-[var(--color-neutral-dark)]"
          placeholder="you@company.com"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      {/* Organization field */}
      <div>
        <label
          htmlFor="organization"
          className="block text-sm font-medium text-[var(--color-neutral-dark)] mb-2"
        >
          Organization <span className="text-[var(--color-neutral-mid)]">*</span>
        </label>
        <input
          type="text"
          id="organization"
          name="organization"
          required
          value={formData.organization}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-[var(--color-neutral-light)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-cta-blue)] focus:border-transparent text-[var(--color-neutral-dark)]"
          placeholder="Your company or organization"
        />
        <ValidationError
          prefix="Organization"
          field="organization"
          errors={state.errors}
        />
      </div>

      {/* Scenario field (optional) */}
      <div>
        <label
          htmlFor="scenario"
          className="block text-sm font-medium text-[var(--color-neutral-dark)] mb-2"
        >
          What&apos;s your integration scenario?{' '}
          <span className="text-[var(--color-neutral-mid)] font-normal">
            (optional)
          </span>
        </label>
        <textarea
          id="scenario"
          name="scenario"
          rows={4}
          value={formData.scenario}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-[var(--color-neutral-light)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-cta-blue)] focus:border-transparent text-[var(--color-neutral-dark)] resize-none"
          placeholder="Tell us about your upcoming acquisition, system change, or current visibility challenges..."
        />
        <ValidationError
          prefix="Scenario"
          field="scenario"
          errors={state.errors}
        />
      </div>

      {/* Submit button */}
      <button
        type="submit"
        disabled={state.submitting}
        className="w-full px-8 py-4 bg-[var(--color-cta-blue)] text-white font-medium rounded-md hover:bg-[var(--color-cta-blue-hover)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-cta-blue)] focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {state.submitting ? 'Sending...' : 'Start a Conversation'}
      </button>

      {/* Error message */}
      {state.errors && Object.keys(state.errors).length > 0 && (
        <p className="text-[var(--color-categorical-alert)] text-sm mt-2">
          There was an error submitting your message. Please try again.
        </p>
      )}
    </form>
  );
}
