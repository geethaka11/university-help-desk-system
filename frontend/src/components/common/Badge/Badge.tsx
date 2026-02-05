import type { FC } from 'react';
import type { BadgeProps } from './Badge.types';

/**
 * Badge Component - UWU Design System
 * 
 * Small status indicators and labels.
 * Multiple variants for different contexts.
 * 
 * @example
 * <Badge variant="success">Active</Badge>
 * <Badge variant="primary" size="lg" icon={<CheckIcon />}>Verified</Badge>
 * <Badge variant="warning" outlined>Pending</Badge>
 * <Badge dot variant="error" />
 */
export const Badge: FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  size = 'md',
  dot = false,
  outlined = false,
  icon,
  className = '',
  ...rest
}) => {
  // Base styles
  const baseStyles = `
    inline-flex items-center justify-center gap-1
    font-semibold rounded-full
    transition-colors duration-150
  `;

  // Size styles
  const sizeStyles = {
    sm: dot ? 'w-2 h-2' : 'px-2 py-0.5 text-xs',
    md: dot ? 'w-2.5 h-2.5' : 'px-3 py-1 text-sm',
    lg: dot ? 'w-3 h-3' : 'px-4 py-1.5 text-base',
  };

  // Variant styles (filled)
  const filledVariants = {
    primary: 'bg-primary text-white',
    secondary: 'bg-secondary text-white',
    success: 'bg-success text-white',
    warning: 'bg-warning text-white',
    error: 'bg-error text-white',
    info: 'bg-info text-white',
    neutral: 'bg-gray-500 text-white',
  };

  // Variant styles (outlined)
  const outlinedVariants = {
    primary: 'border-2 border-primary text-primary bg-primary/10',
    secondary: 'border-2 border-secondary text-secondary bg-secondary/10',
    success: 'border-2 border-success text-success bg-success/10',
    warning: 'border-2 border-warning text-warning bg-warning/10',
    error: 'border-2 border-error text-error bg-error/10',
    info: 'border-2 border-info text-info bg-info/10',
    neutral: 'border-2 border-gray-500 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800',
  };

  const variantStyle = outlined ? outlinedVariants[variant] : filledVariants[variant];

  const combinedStyles = `
    ${baseStyles}
    ${sizeStyles[size]}
    ${variantStyle}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  // Dot badge (no text)
  if (dot) {
    return <span className={combinedStyles} role="status" {...rest} />;
  }

  return (
    <span className={combinedStyles} role="status" {...rest}>
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </span>
  );
};

Badge.displayName = 'Badge';
