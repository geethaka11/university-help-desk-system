export type LoaderSize = 'sm' | 'md' | 'lg' | 'xl';
export type LoaderVariant = 'spinner' | 'dots' | 'pulse';

export interface LoaderProps {
  /**
   * Loader size
   * @default 'md'
   */
  size?: LoaderSize;
  
  /**
   * Visual variant
   * @default 'spinner'
   */
  variant?: LoaderVariant;
  
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
