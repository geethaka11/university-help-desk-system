import { forwardRef } from 'react';
import type {
  CardProps,
  CardHeaderProps,
  CardBodyProps,
  CardFooterProps,
} from './Card.types';

/**
 * Card Component - UWU Design System
 * 
 * Container component for grouping related content.
 * Supports multiple variants and composable sub-components.
 * 
 * @example
 * <Card variant="elevated" hoverable>
 *   <Card.Header>
 *     <h3>Chat Interface</h3>
 *   </Card.Header>
 *   <Card.Body>
 *     Real-time conversation with AI assistant
 *   </Card.Body>
 *   <Card.Footer>
 *     <Button>Learn More</Button>
 *   </Card.Footer>
 * </Card>
 */
const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      variant = 'default',
      hoverable = false,
      clickable = false,
      className = '',
      ...rest
    },
    ref
  ) => {
    // Base styles
    const baseStyles = `
      rounded-lg
      bg-white dark:bg-gray-800
      transition-all duration-200 ease-in-out
      ${clickable ? 'cursor-pointer' : ''}
    `;

    // Variant styles
    const variantStyles = {
      default: 'border border-gray-200 dark:border-gray-700',
      outlined: 'border-2 border-gray-300 dark:border-gray-600',
      elevated: 'shadow-lg',
    };

    // Hover styles
    const hoverStyles = hoverable
      ? 'hover:shadow-xl hover:-translate-y-0.5'
      : '';

    const combinedStyles = `
      ${baseStyles}
      ${variantStyles[variant]}
      ${hoverStyles}
      ${className}
    `.trim().replace(/\s+/g, ' ');

    return (
      <div ref={ref} className={combinedStyles} {...rest}>
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

/**
 * Card Header - Top section of card
 */
const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ children, className = '', ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={`p-6 border-b border-gray-200 dark:border-gray-700 ${className}`}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

CardHeader.displayName = 'Card.Header';

/**
 * Card Body - Main content section
 */
const CardBody = forwardRef<HTMLDivElement, CardBodyProps>(
  ({ children, className = '', ...rest }, ref) => {
    return (
      <div ref={ref} className={`p-6 ${className}`} {...rest}>
        {children}
      </div>
    );
  }
);

CardBody.displayName = 'Card.Body';

/**
 * Card Footer - Bottom section of card
 */
const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ children, className = '', ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={`p-6 border-t border-gray-200 dark:border-gray-700 ${className}`}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

CardFooter.displayName = 'Card.Footer';

// Attach sub-components with proper typing
const CardWithSubComponents = Card as typeof Card & {
  Header: typeof CardHeader;
  Body: typeof CardBody;
  Footer: typeof CardFooter;
};

CardWithSubComponents.Header = CardHeader;
CardWithSubComponents.Body = CardBody;
CardWithSubComponents.Footer = CardFooter;

export { CardWithSubComponents as Card };
