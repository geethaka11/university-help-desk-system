import type { HTMLAttributes, ReactNode } from 'react';

export type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info' | 'neutral';
export type BadgeSize = 'sm' | 'md' | 'lg';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * Badge content
   */
  children: ReactNode;
  
  /**
   * Visual variant
   * @default 'neutral'
   */
  variant?: BadgeVariant;
  
  /**
   * Badge size
   * @default 'md'
   */
  size?: BadgeSize;
  
  /**
   * Dot indicator (no text)
   * @default false
   */
  dot?: boolean;
  
  /**
   * Outlined style
   * @default false
   */
  outlined?: boolean;
  
  /**
   * Icon before text
   */
  icon?: ReactNode;
  
  /**
   * Additional CSS classes
   */
  className?: string;
}
