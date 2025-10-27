'use client';

import Image, { StaticImageData } from 'next/image';
import React from 'react';

type ImageManagerProps = {
  src: string | StaticImageData;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fill?: boolean;
  priority?: boolean;
  sizes?: string; // 👈 Add this line
};

const ImageManager: React.FC<ImageManagerProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  fill = false,
  priority = false,
  sizes, // 👈 Add this too
}) => {
  const imageSrc = typeof src === 'string' ? src : src.src;

  return (
    <div className={fill ? 'relative w-full h-full' : ''}>
      <Image
        src={imageSrc}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        className={className}
        fill={fill}
        priority={priority}
        sizes={sizes} // 👈 Forward it to <Image />
      />
    </div>
  );
};

export default ImageManager;
