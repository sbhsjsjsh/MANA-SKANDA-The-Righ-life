'use client';

import { useState } from 'react';
import Image, { type StaticImageData } from 'next/image';
import { Trees } from 'lucide-react';

interface ResilientImageProps {
  src: StaticImageData | string;
  alt: string;
  fallbackTitle: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export default function ResilientImage({
  src,
  alt,
  fallbackTitle,
  className = '',
  priority = false,
  sizes = '(max-width: 768px) 100vw, 50vw',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#EEF1ED] via-[#E2E8E1] to-[#D4DDD4] text-[#1B4332] p-6 text-center ${className}`}
      >
        <Trees className="w-8 h-8 mb-3 opacity-70" strokeWidth={1.5} />
        <p className="font-display text-xl font-semibold text-[#181C19]">{fallbackTitle}</p>
        <p className="text-xs text-[#525C54] mt-1">MANA SKANDA – The Right Life</p>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
