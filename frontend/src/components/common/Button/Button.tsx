import { forwardRef } from 'react';
import type { ButtonProps } from './Button.types';

/**
 * Button Component - UWU Design System
 * 
 * Production-ready button with multiple variants, sizes, and states.
 * Follows accessibility best practices with ARIA attributes.
 * 
 * @example
 * <Button variant="primary" size="md" onClick={handleClick}>
 *   Submit Query
 * </Button>
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      isLoading = false,
      disabled = false,
      startIcon,
      endIcon,
      className = '',
      type = 'button',
      ...rest
    },
    ref
  ) => {
    // Base styles - always applied
    const baseStyles = `
      inline-flex items-center justify-center gap-2 whitespace-nowrap
      font-medium rounded-lg
      transition-all duration-200 ease-in-out
      focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-background-dark
      disabled:opacity-50 disabled:cursor-not-allowed
      ${fullWidth ? 'w-full' : ''}
    `;

    // Variant styles
    const variantStyles = {
      primary: `
        bg-primary text-white
        hover:bg-primary-dark
        focus:ring-primary/50
        active:bg-primary-dark
        shadow-md hover:shadow-lg
      `,
      secondary: `
        bg-secondary text-white
        hover:bg-secondary-dark
        focus:ring-secondary/50
        active:bg-secondary-dark
        shadow-md hover:shadow-lg
      `,
      outlined: `
        bg-transparent border-2 border-primary text-primary
        dark:border-primary-light dark:text-primary-light
        hover:bg-primary hover:text-white
        focus:ring-primary/50
        active:bg-primary-dark active:border-primary-dark active:text-white
      `,
      text: `
        bg-transparent text-primary
        dark:text-primary-light
        hover:bg-primary/10 dark:hover:bg-primary-light/15
        focus:ring-primary/50
        active:bg-primary/20 dark:active:bg-primary-light/25
      `,
      danger: `
        bg-error text-white
        hover:bg-error-dark
        focus:ring-error/50
        active:bg-error-dark
        shadow-md hover:shadow-lg
      `,
    };

    // Size styles
    const sizeStyles = {
      sm: 'px-4 py-2 text-sm min-h-[36px]',
      md: 'px-6 py-3 text-base min-h-[44px]',
      lg: 'px-8 py-4 text-lg min-h-[52px]',
    };

    const combinedStyles = `
      ${baseStyles}
      ${variantStyles[variant]}
      ${sizeStyles[size]}
      ${className}
    `.trim().replace(/\s+/g, ' ');

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || isLoading}
        className={combinedStyles}
        aria-busy={isLoading}
        aria-disabled={disabled || isLoading}
        {...rest}
      >
        {/* Start Icon or Loading Spinner */}
        {isLoading ? (
          <span className="animate-spin" role="status" aria-label="Loading">
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </span>
        ) : startIcon ? (
          <span className="shrink-0">{startIcon}</span>
        ) : null}

        {/* Button Text */}
        <span>{children}</span>

        {/* End Icon */}
        {!isLoading && endIcon && (
          <span className="shrink-0">{endIcon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
