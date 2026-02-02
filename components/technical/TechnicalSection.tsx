interface TechnicalSectionProps {
  title: string;
  description: string;
  behaviors: string[];
}

export default function TechnicalSection({
  title,
  description,
  behaviors,
}: TechnicalSectionProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-[var(--color-neutral-dark)]">
        {title}
      </h3>
      <p className="text-[var(--color-neutral-mid)] leading-relaxed">
        {description}
      </p>
      <ul className="space-y-3 mt-4">
        {behaviors.map((behavior, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2 bg-[var(--color-neutral-mid)]" />
            <span className="text-[var(--color-neutral-dark)] text-sm leading-relaxed">
              {behavior}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
