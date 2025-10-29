'use client';

import { motion, MotionProps } from 'framer-motion';
import React from 'react';

interface ContactInfoCardProps {
  title: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  variant?: 'default' | 'highlighted' | 'gradient';
  className?: string;
}

const ContactInfoCard = ({
  title,
  icon,
  children,
  variant = 'default',
  className = '',
}: ContactInfoCardProps) => {
  const baseClass =
    'rounded-2xl soft-shadow border border-brand-gold/20 p-5';

  const variantClass =
    variant === 'highlighted'
      ? 'bg-gradient-to-br from-brand-gold/20 to-accent-green/20 border-brand-gold/30'
      : 'bg-brand-bronze/20';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`${baseClass} ${variantClass} ${className}`}
    >
      {(icon || title) && (
        <h3 className="flex items-center gap-2 text-lg sm:text-xl md:text-2xl font-serif font-bold text-brand-gold mb-3">
          {icon}
          {title}
        </h3>
      )}
      {children}
    </motion.div>
  );
};

export default ContactInfoCard;
