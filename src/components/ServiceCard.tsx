'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Service } from '@/types';

interface ServiceCardProps {
  service: Service;
  index?: number;
}

const ServiceCard = ({ service, index = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group h-full"
    >
      <div className="h-full bg-brand-bronze/20 backdrop-blur-sm rounded-3xl overflow-hidden soft-shadow hover:soft-lg transition-smooth border border-brand-gold/20 hover:border-brand-gold/50 flex flex-col">
        <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden bg-gradient-to-br from-brand-gold/10 to-accent-green/10">
          <div className="absolute inset-0 flex items-center justify-center text-6xl md:text-7xl group-hover:scale-110 transition-transform duration-300">
            {service.icon}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent"></div>
        </div>

        <div className="flex-1 p-6 sm:p-8 flex flex-col">
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-brand-gold mb-3 group-hover:text-brand-lightgold transition-smooth">
            {service.title}
          </h3>

          <p className="text-brand-cream/70 mb-6 flex-grow">{service.description}</p>

          <div className="mb-6">
            <p className="text-3xl font-bold text-brand-lightgold mb-4">{service.price}</p>
            <div className="space-y-2">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="text-accent-green mt-1">✓</span>
                  <span className="text-brand-cream/80 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <Link
            href={`/services#${service.id}`}
            className="inline-flex items-center justify-center px-6 py-2 rounded-full font-semibold text-brand-dark bg-gradient-to-r from-brand-gold to-brand-lightgold hover:shadow-glow transition-smooth w-full"
          >
            Learn More
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
