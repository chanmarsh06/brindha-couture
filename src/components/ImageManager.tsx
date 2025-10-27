'use client';

import Image, { StaticImageData } from 'next/image';
import React from 'react';

type ImageManagerProps = {
  src: StaticImageData;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fill?: boolean;
  priority?: boolean;
};

const ImageManager: React.FC<ImageManagerProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  fill = false,
  priority = false,
}) => {
  return (
    <div className={fill ? 'relative w-full h-full' : ''}>
      <Image
        src={src}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        className={className}
        fill={fill}
        priority={priority}
      />
    </div>
  );
};

export default ImageManager;
