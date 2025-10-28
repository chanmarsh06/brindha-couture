'use client';

import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  variant?: 'gradient' | 'dark';
}

const PageHeader = ({
  title,
  subtitle,
  className = '',
  variant = 'gradient',
}: PageHeaderProps) => {
  const bgClass = variant === 'gradient' ? 'gradient-brand' : 'bg-brand-dark';

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`${bgClass} py-12 sm:py-14 md:py-16 lg:py-20 mt-14 sm:mt-16 ${className}`}
    >
      <div className="container mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-brand-cream mb-3 sm:mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-brand-cream/80 max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
    </motion.section>
  );
};

export default PageHeader;
