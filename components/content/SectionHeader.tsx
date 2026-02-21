interface SectionHeaderProps {
  headline: string;
  subheadline?: string;
  align?: 'left' | 'center';
  variant?: 'standard' | 'emphasis';
}

export default function SectionHeader({
  headline,
  subheadline,
  align = 'left',
  variant = 'standard',
}: SectionHeaderProps) {
  const isEmphasis = variant === 'emphasis';
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 ${isCenter ? 'text-center' : ''}`}>
      <h2
        className={`font-display leading-[1.12] text-[var(--ms-heading)] ${
          isEmphasis ? 'text-2xl md:text-3xl lg:text-4xl' : 'text-xl md:text-2xl lg:text-3xl'
        } ${isCenter ? 'mx-auto' : ''}`}
      >
        {headline}
      </h2>
      {subheadline && (
        <p
          className={`mt-4 text-[var(--ms-body)] leading-relaxed ${
            isEmphasis ? 'text-lg' : 'text-base'
          } ${isCenter ? 'max-w-2xl mx-auto' : 'max-w-xl'}`}
        >
          {subheadline}
        </p>
      )}
    </div>
  );
}
