export type LoaderSize = 'sm' | 'md' | 'lg' | 'xl';

/**
 * Pulse Ring loader — double-ripple rings expanding outward
 * with a solid center dot.
 */

export interface LoaderProps {
  /**
   * Loader size
   * @default 'md'
   */
  size?: LoaderSize;

  /**
   * Custom color (CSS color value)
   */
  color?: string;

  /**
   * Center in parent container
   * @default false
   */
  centered?: boolean;

  /**
   * Loading text
   */
  text?: string;

  /**
   * Full screen overlay
   * @default false
   */
  fullScreen?: boolean;
  
  /**
   * Additional CSS classes
   */
  className?: string;
}
