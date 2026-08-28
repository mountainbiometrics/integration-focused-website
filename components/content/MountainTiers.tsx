/* Foundation → Middle → Summit, drawn as one mountain rather than three boxes.
   Each band is a trapezoid whose top edge equals the band above it, so the
   slopes run continuously from the peak down to the base. */

interface Tier {
  title: string;
  body: string;
  /** band width, as a % of the container */
  width: number;
  /** horizontal taper per side, as a % of the band's own width */
  inset: number;
  fill: string;
}

const TIERS: Tier[] = [
  {
    title: 'Your AI-enabled business',
    body: 'Models trained on your own operations. Agents you can put into production. Questions nobody in the business can answer today. Built with whatever tools you choose.',
    width: 62,
    inset: 9,
    fill: 'rgba(172,31,45,0.09)',
  },
  {
    title: 'Data transformation',
    body: 'A forward-deployed engineer works inside your systems and carries the load. You review the work. You do not staff it.',
    width: 80,
    inset: 11.25,
    fill: 'rgba(74,111,165,0.09)',
  },
  {
    title: 'MTN FieldMap and MTN Guide',
    body: 'The map of what every field means, and the guide that answers against it. Everything above rests here.',
    width: 100,
    inset: 10,
    fill: 'rgba(74,111,165,0.16)',
  },
];

/* peak base matches the summit band's top edge */
const PEAK_WIDTH = TIERS[0].width * (1 - (TIERS[0].inset * 2) / 100);

export default function MountainTiers() {
  return (
    <div className="flex flex-col items-center">
      {/* the peak */}
      <div
        className="h-14 md:h-20"
        style={{
          width: `${PEAK_WIDTH}%`,
          clipPath: 'polygon(50% 0, 100% 100%, 0 100%)',
          backgroundColor: 'var(--ms-accent)',
        }}
        aria-hidden="true"
      />

      {TIERS.map((t) => (
        <div
          key={t.title}
          className="px-8 md:px-14 py-6 md:py-7 text-center"
          style={{
            width: `${t.width}%`,
            clipPath: `polygon(${t.inset}% 0, ${100 - t.inset}% 0, 100% 100%, 0% 100%)`,
            backgroundColor: t.fill,
          }}
        >
          <div className="font-display text-[var(--ms-heading)] text-xl mb-2">{t.title}</div>
          <p className="text-base text-[var(--ms-body)] leading-relaxed max-w-xl mx-auto">
            {t.body}
          </p>
        </div>
      ))}
    </div>
  );
}
