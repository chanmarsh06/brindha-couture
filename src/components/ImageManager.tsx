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
  sizes?: string;
  quality?: number; // 🔹 optional image quality control
  loading?: 'lazy' | 'eager'; // 🔹 better loading control
  placeholder?: 'blur' | 'empty'; // 🔹 optional blurred placeholder for static images
};

const ImageManager: React.FC<ImageManagerProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  fill = false,
  priority = false,
  sizes,
  quality,
  loading = 'lazy',
  placeholder,
}) => {
  // Detect if the image is a StaticImageData (imported asset)
  const isStatic = typeof src !== 'string';
  const imageSrc = isStatic ? src.src : src;

  // Use fallback width/height if not provided
  const computedWidth = width ?? (isStatic ? src.width : undefined);
  const computedHeight = height ?? (isStatic ? src.height : undefined);

  return (
    <div className={fill ? 'relative w-full h-full' : 'inline-block'}>
      <Image
        src={imageSrc}
        alt={alt}
        width={fill ? undefined : computedWidth}
        height={fill ? undefined : computedHeight}
        className={className}
        fill={fill}
        priority={priority}
        sizes={sizes}
        quality={quality}
        loading={loading}
        placeholder={placeholder && isStatic ? placeholder : 'empty'}
      />
    </div>
  );
};

export default ImageManager;
