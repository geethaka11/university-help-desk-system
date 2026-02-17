import { useState, type FC } from 'react';
import type { AvatarProps } from './Avatar.types';

/**
 * Avatar Component - UWU Design System
 * 
 * User profile picture with fallback to initials.
 * Supports status indicators and multiple sizes.
 * 
 * @example
 * <Avatar name="John Doe" src="/avatar.jpg" size="lg" showStatus status="online" />
 * <Avatar name="Jane Smith" size="md" />
 */
export const Avatar: FC<AvatarProps> = ({
  name = '',
  src,
  alt,
  size = 'md',
  showStatus = false,
  status = 'offline',
  className = '',
  ...rest
}) => {
  const [imageError, setImageError] = useState(false);

  // Size mappings
  const sizeStyles = {
    xs: 'w-6 h-6 text-xs',
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg',
    xl: 'w-16 h-16 text-xl',
  };

  // Status indicator styles
  const statusStyles = {
    online: 'bg-success',
    offline: 'bg-gray-400',
    busy: 'bg-warning',
  };

  // Status indicator size based on avatar size
  const statusSizeMap = {
    xs: 'w-1.5 h-1.5',
    sm: 'w-2 h-2',
    md: 'w-2.5 h-2.5',
    lg: 'w-3 h-3',
    xl: 'w-4 h-4',
  };

  // Get initials from name
  const getInitials = (fullName: string): string => {
    if (!fullName) return '?';
    const names = fullName.trim().split(' ');
    if (names.length === 1) return names[0].charAt(0).toUpperCase();
    return (names[0].charAt(0) + names[names.length - 1].charAt(0)).toUpperCase();
  };

  const initials = getInitials(name);

  // Generate consistent color from name
  const getColorFromName = (str: string): string => {
    const colors = [
      'bg-primary',
      'bg-secondary',
      'bg-info',
      'bg-warning',
      'bg-primary-light',
      'bg-secondary-light',
      'bg-secondary-dark',
    ];
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  };

  const bgColor = getColorFromName(name);

  return (
    <div className={`relative inline-block ${className}`} {...rest}>
      {/* Avatar Circle */}
      <div
        className={`
          ${sizeStyles[size]}
          rounded-full
          flex items-center justify-center
          overflow-hidden
          font-semibold text-white
          ${!src || imageError ? bgColor : 'bg-gray-200'}
        `}
        role="img"
        aria-label={alt || name || 'User avatar'}
      >
        {src && !imageError ? (
          <img
            src={src}
            alt={alt || name}
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
            loading="lazy"
          />
        ) : (
          <span>{initials}</span>
        )}
      </div>

      {/* Status Indicator */}
      {showStatus && (
        <span
          className={`
            absolute bottom-0 right-0
            ${statusSizeMap[size]}
            ${statusStyles[status]}
            rounded-full
            border-2 border-background-paper dark:border-background-dark
          `}
          role="status"
          aria-label={`Status: ${status}`}
        />
      )}
    </div>
  );
};

Avatar.displayName = 'Avatar';
