'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useState } from 'react';

// Default avatar SVG as a data URL
const DEFAULT_AVATAR = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23FFB6C1'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='white'%3EClient%3C/text%3E%3C/svg%3E";

interface EfficientImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  loading?: 'lazy' | 'eager';
  sizes?: string;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
}

type ImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  loading?: 'lazy' | 'eager';
  sizes?: string;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  onError?: () => void;
};

export function EfficientImage({
  src,
  alt,
  width,
  height,
  fill = false,
  className,
  priority = false,
  loading,
  sizes,
  quality = 75,
  placeholder = 'blur',
  blurDataURL = DEFAULT_AVATAR,
  ...props
}: EfficientImageProps) {
  const [imgSrc, setImgSrc] = useState(src);

  const imageProps: ImageProps = {
    src: imgSrc,
    alt,
    width,
    height,
    fill,
    className: cn('object-cover', className),
    priority,
    sizes,
    quality,
    placeholder,
    blurDataURL,
    onError: () => setImgSrc(blurDataURL),
    ...props,
  };

  // Only add loading prop if priority is false
  if (!priority) {
    imageProps.loading = loading || 'lazy';
  }

  return <Image {...imageProps} />;
} 