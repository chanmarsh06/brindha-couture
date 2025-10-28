'use client';

import { ReactNode } from 'react';

interface ContactStatCardProps {
  icon: ReactNode;
  title: string;
  content: ReactNode;
  link?: {
    href: string;
    label: string;
    target?: string;
    rel?: string;
  };
}

interface ContactStatsSectionProps {
  stats: ContactStatCardProps[];
  className?: string;
}

const ContactStatsSection = ({
  stats,
  className = '',
}: ContactStatsSectionProps) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 text-center ${className}`}>
      {stats.map((stat, index) => (
        <div key={index}>
          <div className="text-4xl sm:text-5xl text-brand-gold mx-auto mb-3">
            {stat.icon}
          </div>
          <h3 className="text-lg sm:text-xl font-serif font-bold text-brand-gold mb-2">
            {stat.title}
          </h3>
          <div className="text-sm text-brand-cream/70 hover:text-brand-gold transition-smooth">
            {stat.link ? (
              <a
                href={stat.link.href}
                target={stat.link.target}
                rel={stat.link.rel}
                className="font-semibold"
              >
                {stat.link.label}
              </a>
            ) : (
              stat.content
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactStatsSection;
