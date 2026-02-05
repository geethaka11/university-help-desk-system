import type { InputHTMLAttributes, ReactNode } from 'react';

export type InputSize = 'sm' | 'md' | 'lg';
export type InputVariant = 'default' | 'error' | 'success';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * Input label
   */
  label?: string;
  
  /**
   * Input size
   * @default 'md'
   */
  size?: InputSize;
  
  /**
   * Visual variant
   * @default 'default'
   */
  variant?: InputVariant;
  
  /**
   * Error message to display
   */
  error?: string;
  
  /**
   * Helper text below input
   */
  helperText?: string;
  
  /**
   * Required field indicator
   * @default false
   */
  required?: boolean;
  
  /**
   * Full width input
   * @default false
   */
  fullWidth?: boolean;
  
  /**
   * Icon before input
   */
  startIcon?: ReactNode;
  
  /**
   * Icon after input
   */
  endIcon?: ReactNode;
  
  /**
   * Additional wrapper CSS classes
   */
  wrapperClassName?: string;
  
  /**
   * Additional input CSS classes
   */
  className?: string;
}
