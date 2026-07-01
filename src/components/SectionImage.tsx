import Image from 'next/image';

interface SectionImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export default function SectionImage({
  src,
  alt,
  className = '',
  priority = false,
  sizes = '(max-width: 768px) 100vw, 448px',
}: SectionImageProps) {
  return (
    <div className={`relative w-full max-w-lg mx-auto aspect-[9/16] sm:aspect-video rounded-xl overflow-hidden ring-1 ring-accent/20 bg-surface ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain"
        sizes={sizes}
        priority={priority}
      />
    </div>
  );
}
