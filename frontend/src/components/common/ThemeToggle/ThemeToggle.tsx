import type { FC } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useThemeStore } from '../../../store';
import type { ThemeToggleProps } from './ThemeToggle.types';

/**
 * ThemeToggle Component - UWU Design System
 *
 * Compact icon button that toggles dark/light mode.
 * Reads and updates the global Zustand theme store.
 *
 * @example
 * <ThemeToggle />
 * <ThemeToggle size="lg" />
 */
export const ThemeToggle: FC<ThemeToggleProps> = ({
  size = 'md',
  className = '',
}) => {
  const { theme, toggleTheme } = useThemeStore();
  const isDark = theme === 'dark';

  const sizeStyles = {
    sm: { button: 'w-8 h-8', icon: 16 },
    md: { button: 'w-9 h-9', icon: 18 },
    lg: { button: 'w-10 h-10', icon: 20 },
  };

  const s = sizeStyles[size];

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={toggleTheme}
      className={`
        inline-flex items-center justify-center
        ${s.button} rounded-lg
        transition-all duration-200 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-background-dark focus:ring-primary/50
        text-text-secondary dark:text-gray-400
        hover:bg-gray-100 dark:hover:bg-white/10
        hover:text-text-primary dark:hover:text-text-inverse
        ${className}
      `}
    >
      <span className="transition-transform duration-300 ease-in-out">
        {isDark ? (
          <Sun size={s.icon} className="text-amber-400" />
        ) : (
          <Moon size={s.icon} />
        )}
      </span>
    </button>
  );
};

ThemeToggle.displayName = 'ThemeToggle';
