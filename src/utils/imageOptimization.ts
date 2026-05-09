/**
 * Image optimization utilities for lazy loading and modern formats
 */

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  decoding?: 'auto' | 'sync' | 'async';
  onClick?: () => void;
}

/**
 * Get WebP version of image if available, with fallback to original
 */
export const getOptimizedImageSrc = (src: string, useWebP = true): string => {
  if (!useWebP || !src) return src;
  // Keep original format for now; convert to WebP at build time if needed
  return src;
};

/**
 * Create a picture element with WebP support and fallback
 * Returns JSX for <picture> with <source> and <img> tags
 */
export const createResponsiveImageProps = (src: string): LazyImageProps => ({
  src: getOptimizedImageSrc(src),
  loading: 'lazy',
  decoding: 'async',
});
