import type { HTMLAttributes, ReactNode } from 'react';

export type CardVariant = 'default' | 'outlined' | 'elevated' | 'glass';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Card content
   */
  children: ReactNode;
  
  /**
   * Visual variant
   * @default 'default'
   */
  variant?: CardVariant;
  
  /**
   * Hover effect
   * @default false
   */
  hoverable?: boolean;
  
  /**
   * Clickable card (cursor pointer)
   * @default false
   */
  clickable?: boolean;
  
  /**
   * Additional CSS classes
   */
  className?: string;
}

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}
