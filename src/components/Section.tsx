'use client';

import { motion } from 'framer-motion';
import React from 'react';

type SectionVariant = 'dark' | 'gradient' | 'light';
type SectionSize = 'sm' | 'md' | 'lg';

interface SectionProps {
  children: React.ReactNode;
  variant?: SectionVariant;
  size?: SectionSize;
  withGradient?: boolean;
  className?: string;
  animated?: boolean;
}

const Section = ({
  children,
  variant = 'dark',
  size = 'lg',
  withGradient = false,
  className = '',
  animated = false,
}: SectionProps) => {
  const bgMap: Record<SectionVariant, string> = {
    dark: 'bg-brand-dark',
    gradient: 'bg-gradient-brand',
    light: 'bg-brand-bronze/10',
  };

  const paddingMap: Record<SectionSize, string> = {
    sm: 'py-8 sm:py-10 md:py-12',
    md: 'py-12 sm:py-16 md:py-20',
    lg: 'py-12 sm:py-16 md:py-20 lg:py-24',
  };

  const bgClass = bgMap[variant];
  const paddingClass = paddingMap[size];

  const gradientOverlay = withGradient
    ? 'relative overflow-hidden before:absolute before:inset-0 before:opacity-10 before:pointer-events-none before:content-[""]'
    : '';

  const sectionClass = `${bgClass} ${paddingClass} ${gradientOverlay} ${className}`;

  if (!animated) {
    return <section className={sectionClass}>{children}</section>;
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={sectionClass}
    >
      {children}
    </motion.section>
  );
};

export default Section;
