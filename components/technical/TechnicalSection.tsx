interface TechnicalSectionProps {
  title: string;
  description: string;
  behaviors: string[];
  intro?: React.ReactNode;
  /** Diagram rendered between the description and the behaviour list. */
  graphic?: React.ReactNode;
}

export default function TechnicalSection({
  title,
  description,
  behaviors,
  intro,
  graphic,
}: TechnicalSectionProps) {
  return (
    <div className="space-y-4">
      <h3 className="font-display text-xl text-[var(--ms-heading)]">{title}</h3>
      <p className="text-[var(--ms-body)] leading-relaxed">{description}</p>
      {intro}
      {graphic && <div className="my-6">{graphic}</div>}
      {behaviors.length > 0 && (
        <ul
          className={`mt-4 ${
            graphic
              ? 'grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3'
              : 'space-y-3'
          }`}
        >
          {behaviors.map((behavior, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2 bg-[var(--ms-body)]" />
              <span className="text-[var(--ms-heading)] text-base leading-relaxed">
                {behavior}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
