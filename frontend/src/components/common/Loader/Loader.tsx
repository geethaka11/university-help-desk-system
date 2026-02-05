import type { FC } from 'react';
import type { LoaderProps } from './Loader.types';

/**
 * Loader Component - UWU Design System
 * 
 * Loading indicators for async operations.
 * Multiple variants and sizes available.
 * 
 * @example
 * <Loader size="lg" text="Loading..." />
 * <Loader variant="dots" centered />
 * <Loader fullScreen text="Please wait..." />
 */
export const Loader: FC<LoaderProps> = ({
  size = 'md',
  variant = 'spinner',
  color = 'var(--color-primary-main)',
  centered = false,
  text,
  fullScreen = false,
  className = '',
}) => {
  // Size mappings
  const sizeMap = {
    sm: 16,
    md: 32,
    lg: 48,
    xl: 64,
  };

  const dimension = sizeMap[size];

  // Render spinner variant
  const renderSpinner = () => (
    <svg
      className="animate-spin"
      width={dimension}
      height={dimension}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      role="status"
      aria-label={text || 'Loading'}
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke={color}
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill={color}
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );

  // Render dots variant
  const renderDots = () => {
    const dotSize = dimension / 4;
    return (
      <div className="flex gap-2" role="status" aria-label={text || 'Loading'}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="rounded-full animate-pulse"
            style={{
              width: dotSize,
              height: dotSize,
              backgroundColor: color,
              animationDelay: `${i * 150}ms`,
            }}
          />
        ))}
      </div>
    );
  };

  // Render pulse variant
  const renderPulse = () => (
    <div
      className="rounded-full animate-ping"
      style={{
        width: dimension,
        height: dimension,
        backgroundColor: color,
      }}
      role="status"
      aria-label={text || 'Loading'}
    />
  );

  // Select variant to render
  const variantContent = (() => {
    switch (variant) {
      case 'spinner':
        return renderSpinner();
      case 'dots':
        return renderDots();
      case 'pulse':
        return renderPulse();
      default:
        return renderSpinner();
    }
  })();

  const content = (
    <div
      className={`
        flex flex-col items-center justify-center gap-3
        ${centered ? 'mx-auto' : ''}
        ${className}
      `}
    >
      {variantContent}
      {text && (
        <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
          {text}
        </p>
      )}
    </div>
  );

  // Full screen overlay
  if (fullScreen) {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
        role="dialog"
        aria-modal="true"
        aria-label="Loading"
      >
        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-xl">
          {content}
        </div>
      </div>
    );
  }

  return content;
};

Loader.displayName = 'Loader';
