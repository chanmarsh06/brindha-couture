'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FeatureCardProps {
  icon?: ReactNode; 
  title: string;
  description: string;
  variant?: 'default' | 'highlighted';
  className?: string;
}

const FeatureCard = ({
  icon,
  title,
  description,
  variant = 'default',
  className = '',
}: FeatureCardProps) => {
  const baseClass =
    'rounded-2xl soft-shadow border border-brand-gold/20 p-4 sm:p-5 md:p-6 lg:p-8 space-y-3 sm:space-y-4';

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
      {icon && (
        <div className="text-3xl sm:text-4xl lg:text-5xl text-brand-gold">
          {icon}
        </div>
      )}

      <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-brand-gold">
        {title}
      </h3>
      <p className="text-xs sm:text-sm md:text-base text-brand-cream/70 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export default FeatureCard;
