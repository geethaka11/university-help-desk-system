import { forwardRef, useId } from 'react';
import type { InputProps } from './Input.types';

/**
 * Input Component - UWU Design System
 * 
 * Accessible form input with label, validation states, and helper text.
 * Supports icons, error messages, and multiple sizes.
 * 
 * @example
 * <Input
 *   label="Email Address"
 *   type="email"
 *   placeholder="student@uwu.ac.lk"
 *   error={errors.email}
 *   required
 * />
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      size = 'md',
      variant = 'default',
      error,
      helperText,
      required = false,
      fullWidth = false,
      startIcon,
      endIcon,
      wrapperClassName = '',
      className = '',
      disabled,
      id: providedId,
      ...rest
    },
    ref
  ) => {
    const generatedId = useId();
    const id = providedId || generatedId;
    const helperId = `${id}-helper`;
    const errorId = `${id}-error`;

    // Determine variant based on error
    const effectiveVariant = error ? 'error' : variant;

    // Base input styles
    const baseStyles = `
      w-full rounded-lg border-2 
      bg-white dark:bg-gray-800
      text-gray-900 dark:text-white
      transition-all duration-150 ease-in-out
      focus:outline-none focus:ring-2
      disabled:opacity-50 disabled:cursor-not-allowed
      placeholder:text-gray-500 dark:placeholder:text-gray-400
    `;

    // Size styles
    const sizeStyles = {
      sm: 'px-3 py-1.5 text-sm min-h-[36px]',
      md: 'px-4 py-2 text-base min-h-[44px]',
      lg: 'px-5 py-3 text-lg min-h-[52px]',
    };

    // Variant styles
    const variantStyles = {
      default: `
        border-gray-300 dark:border-gray-600
        focus:border-primary focus:ring-primary/20
        hover:border-gray-400 dark:hover:border-gray-500
      `,
      error: `
        border-error
        focus:border-error focus:ring-error/20
      `,
      success: `
        border-success
        focus:border-success focus:ring-success/20
      `,
    };

    // Icon padding adjustments
    const iconPaddingStyles = startIcon ? 'pl-10' : endIcon ? 'pr-10' : '';

    const combinedStyles = `
      ${baseStyles}
      ${sizeStyles[size]}
      ${variantStyles[effectiveVariant]}
      ${iconPaddingStyles}
      ${className}
    `.trim().replace(/\s+/g, ' ');

    return (
      <div className={`${fullWidth ? 'w-full' : ''} ${wrapperClassName}`}>
        {/* Label */}
        {label && (
          <label
            htmlFor={id}
            className="block text-sm font-medium mb-1.5 text-gray-700 dark:text-gray-200"
          >
            {label}
            {required && <span className="text-error ml-1" aria-label="required">*</span>}
          </label>
        )}

        {/* Input Container */}
        <div className="relative">
          {/* Start Icon */}
          {startIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 pointer-events-none">
              {startIcon}
            </div>
          )}

          {/* Input Field */}
          <input
            ref={ref}
            id={id}
            disabled={disabled}
            aria-invalid={!!error}
            aria-describedby={
              error ? errorId : helperText ? helperId : undefined
            }
            aria-required={required}
            className={combinedStyles}
            {...rest}
          />

          {/* End Icon */}
          {endIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 pointer-events-none">
              {endIcon}
            </div>
          )}
        </div>

        {/* Error Message */}
        {error && (
          <p
            id={errorId}
            className="mt-1.5 text-sm text-error flex items-center gap-1"
            role="alert"
          >
            <svg
              className="w-4 h-4 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            {error}
          </p>
        )}

        {/* Helper Text */}
        {!error && helperText && (
          <p
            id={helperId}
            className="mt-1.5 text-sm text-gray-600 dark:text-gray-400"
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
