'use client';

import { motion } from 'framer-motion';
import Button from './ui/Button';

interface CTAButton {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

interface CTASectionProps {
  title: string;
  description: string;
  buttons: CTAButton[];
  className?: string;
  variant?: 'gradient' | 'dark';
}

const CTASection = ({
  title,
  description,
  buttons,
  className = '',
  variant = 'gradient',
}: CTASectionProps) => {
  const bgClass =
    variant === 'gradient' ? 'bg-gradient-brand' : 'bg-brand-dark';

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`py-12 sm:py-16 md:py-20 lg:py-24 ${bgClass} relative overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-brand-lightgold rounded-full blur-3xl"></div>
      </div>

      <div className="relative container text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-brand-cream mb-4 sm:mb-6">
          {title}
        </h2>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-brand-cream/80 mb-6 sm:mb-8 max-w-2xl mx-auto">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          {buttons.map((btn, idx) => (
            <Button
              key={idx}
              as="link"
              href={btn.href}
              variant={btn.variant || 'primary'}
              size="lg"
            >
              {btn.label}
            </Button>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default CTASection;
