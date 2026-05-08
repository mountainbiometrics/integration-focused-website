import Image from 'next/image';
import { Linkedin } from 'lucide-react';

interface FounderCardProps {
  name: string;
  title: string;
  imagePath: string;
  bio: string;
  linkedInUrl?: string;
}

export default function FounderCard({
  name,
  title,
  imagePath,
  bio,
  linkedInUrl,
}: FounderCardProps) {
  return (
    <div
      className="bg-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6"
      style={{ boxShadow: 'var(--ms-shadow-card)' }}
    >
      {/* Image */}
      <div className="flex-shrink-0 md:w-[35%]">
        <Image
          src={imagePath}
          alt={name}
          width={400}
          height={400}
          className="rounded-xl w-full aspect-square object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-center">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="font-display text-[var(--ms-heading)] text-xl md:text-2xl">
            {name}
          </h3>
          {linkedInUrl && (
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--ms-body)] hover:text-[var(--ms-accent)] transition-colors"
              aria-label={`${name} LinkedIn profile`}
            >
              <Linkedin className="w-5 h-5" />
            </a>
          )}
        </div>
        <p className="text-[var(--ms-body)] font-medium mb-4">{title}</p>
        <p className="text-base text-[var(--ms-body)] leading-relaxed">{bio}</p>
      </div>
    </div>
  );
}
