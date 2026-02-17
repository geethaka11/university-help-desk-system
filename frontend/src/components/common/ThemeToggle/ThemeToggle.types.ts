export type ThemeToggleSize = 'sm' | 'md' | 'lg';

export interface ThemeToggleProps {
  /** Toggle button size @default 'md' */
  size?: ThemeToggleSize;
  /** Additional CSS classes */
  className?: string;
}
