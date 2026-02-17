import type { FC } from 'react';
import type { LoaderProps } from './Loader.types';

/**
 * Loader Component - UWU Design System
 *
 * Pulse Ring — double-ripple rings expanding outward with a solid center dot.
 *
 * @example
 * <Loader size="lg" text="Loading..." />
 * <Loader size="sm" centered />
 * <Loader fullScreen text="Please wait..." />
 */
export const Loader: FC<LoaderProps> = ({
  size = 'md',
  color = 'var(--color-primary)',
  centered = false,
  text,
  fullScreen = false,
  className = '',
}) => {
  const sizeMap = { sm: 16, md: 32, lg: 48, xl: 64 };
  const dimension = sizeMap[size];
  const borderWidth = Math.max(2, dimension / 16);

  const pulseRing = (
    <div
      className="relative"
      style={{ width: dimension, height: dimension }}
      role="status"
      aria-label={text || 'Loading'}
    >
      {/* Two staggered expanding rings */}
      {[0, 1].map((i) => (
        <div
          key={i}
          className="absolute inset-0 rounded-full"
          style={{
            border: `${borderWidth}px solid ${color}`,
            animation: `pulse-ring 1.5s ${i * 0.5}s ease-out infinite`,
          }}
        />
      ))}
      {/* Solid center dot */}
      <div
        className="absolute rounded-full"
        style={{
          width: dimension * 0.35,
          height: dimension * 0.35,
          backgroundColor: color,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </div>
  );

  const content = (
    <div
      className={`
        flex flex-col items-center justify-center gap-3
        ${centered ? 'mx-auto' : ''}
        ${className}
      `}
    >
      {pulseRing}
      {text && (
        <p className="text-sm text-text-secondary dark:text-gray-400 font-medium">
          {text}
        </p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
        role="dialog"
        aria-modal="true"
        aria-label="Loading"
      >
        <div className="bg-background-paper dark:bg-surface-dark rounded-lg p-8 shadow-xl">
          {content}
        </div>
      </div>
    );
  }

  return content;
};

Loader.displayName = 'Loader';
