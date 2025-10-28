'use client';

import { motion } from 'framer-motion';

interface Stat {
  value: string;
  label: string;
  description?: string;
}

interface StatsSectionProps {
  stats: Stat[];
  variant?: 'dark' | 'gradient';
  className?: string;
}

const StatsSection = ({
  stats,
  variant = 'dark',
  className = '',
}: StatsSectionProps) => {
  const bgClass = variant === 'dark' ? 'bg-brand-dark' : 'bg-gradient-brand';

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`py-12 sm:py-16 md:py-20 lg:py-24 ${bgClass} ${className}`}
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-3 sm:space-y-4">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-gold">
                {stat.value}
              </div>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif text-brand-cream">
                {stat.label}
              </h3>
              {stat.description && (
                <p className="text-xs sm:text-sm md:text-base text-brand-cream/70">
                  {stat.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default StatsSection;
