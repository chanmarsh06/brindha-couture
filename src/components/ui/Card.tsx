'use client';

import React from 'react';
import { motion, MotionProps } from 'framer-motion';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'highlighted' | 'bordered';
  hoverable?: boolean;
  animated?: boolean;
  className?: string;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      variant = 'default',
      hoverable = true,
      animated = true,
      className = '',
      ...props
    },
    ref
  ) => {
    const variantClasses = {
      default:
        'bg-brand-bronze/20 backdrop-blur-sm border border-brand-gold/20 hover:border-brand-gold/50',
      highlighted:
        'bg-gradient-to-br from-brand-gold/20 to-accent-green/20 border-2 border-brand-gold',
      bordered: 'bg-brand-dark border-2 border-brand-gold',
    };

    const baseClasses = `rounded-2xl sm:rounded-3xl overflow-hidden soft-shadow transition-smooth ${
      hoverable ? 'cursor-pointer' : ''
    } ${variantClasses[variant]} ${className}`;

    const motionProps: MotionProps = animated
      ? {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
          viewport: { once: true },
        }
      : {};

    return (
      <motion.div
        ref={ref}
        className={baseClasses}
        {...motionProps}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = 'Card';

export default Card;
