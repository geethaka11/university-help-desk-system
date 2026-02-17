import type { HTMLAttributes } from 'react';

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * User's name (for initials fallback)
   */
  name?: string;
  
  /**
   * Avatar image URL
   */
  src?: string;
  
  /**
   * Alt text for image
   */
  alt?: string;
  
  /**
   * Avatar size
   * @default 'md'
   */
  size?: AvatarSize;
  
  /**
   * Show online status indicator
   * @default false
   */
  showStatus?: boolean;
  
  /**
   * Status (online/offline/busy)
   */
  status?: 'online' | 'offline' | 'busy';
  
  /**
   * Additional CSS classes
   */
  className?: string;
}
