'use client';

import React from 'react';
import { motion, MotionProps } from 'framer-motion';
import Link from 'next/link';

type ButtonVariant = 'primary' | 'secondary' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  className?: string;
  isLoading?: boolean;
  onClick?: () => void;
}

interface ButtonAsButtonProps extends BaseButtonProps {
  as?: 'button';
  type?: 'button' | 'submit' | 'reset';
  form?: string;
  ariaLabel?: string;
}

interface ButtonAsLinkProps extends BaseButtonProps {
  as: 'link';
  href: string;
  target?: string;
  rel?: string;
  prefetch?: boolean;
  ariaLabel?: string;
}

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-gradient-to-r from-brand-gold to-brand-lightgold text-brand-dark hover:shadow-glow',
  secondary:
    'bg-brand-gold/20 text-brand-gold border border-brand-gold/50 hover:bg-brand-gold/30',
  outline:
    'text-brand-cream border-2 border-brand-gold hover:bg-brand-gold/10',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm',
  md: 'px-5 sm:px-6 md:px-8 py-2 sm:py-3 text-sm md:text-base',
  lg: 'px-6 sm:px-8 md:px-10 py-3 sm:py-4 text-base md:text-lg',
};

const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      disabled = false,
      className = '',
      isLoading = false,
      ...props
    },
    ref
  ) => {
    const baseClasses =
      'inline-flex items-center justify-center rounded-full font-semibold transition-smooth disabled:opacity-50 disabled:cursor-not-allowed';
    const variantClass = variantClasses[variant];
    const sizeClass = sizeClasses[size];
    const combinedClassName = `${baseClasses} ${variantClass} ${sizeClass} ${className}`;

    if ('as' in props && props.as === 'link') {
       const { href, target, rel, prefetch, ariaLabel, ...linkProps } = props;
      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          target={target}
          rel={rel}
          className={combinedClassName}
          aria-label={ariaLabel}
          {...(linkProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {isLoading ? '...' : children}
        </Link>
      );
    }

    const { type = 'button', form, ariaLabel, onClick } = props;

    return (
      <motion.button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={type}
        form={form}
        disabled={disabled || isLoading}
        onClick={onClick}
        whileHover={!disabled ? { scale: 1.02 } : undefined}
        whileTap={!disabled ? { scale: 0.98 } : undefined}
        className={combinedClassName}
        aria-label={ariaLabel}
      >
        {isLoading ? '...' : children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
