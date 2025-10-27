'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Service } from '@/types';
import { Child, GoldenBlouse, OriginalSaree } from '@/asset';
import ImageManager from './ImageManager';
import { StaticImageData } from 'next/image';

interface ServiceCardProps {
  service: Service; 
  index?: number;
}

const ServiceCard = ({ service, index = 0 }: ServiceCardProps) => {
  // Map service titles to images
  const serviceImages: Record<string, StaticImageData> = {
    'Child Dress': Child,
    'Golden Blouse': GoldenBlouse,
    'Original Saree': OriginalSaree,
  };

  const serviceImage = serviceImages[service.title];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group h-full flex flex-col bg-brand-bronze/20 backdrop-blur-sm rounded-2xl sm:rounded-3xl overflow-hidden soft-shadow border border-brand-gold/20 hover:border-brand-gold/50 transition-smooth"
    >
      {/* Text Content */}
      <div className="p-4 sm:p-6 md:p-8 flex flex-col flex-1">
        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif font-bold text-brand-gold mb-2 sm:mb-3">
          {service.title}
        </h3>

        <p className="text-xs sm:text-sm md:text-base text-brand-cream/70 mb-4 sm:mb-6 flex-grow leading-relaxed">
          {service.description}
        </p>

        <p className="text-2xl sm:text-3xl font-bold text-brand-lightgold mb-3 sm:mb-4">{service.price}</p>

        <div className="space-y-1 sm:space-y-2 mb-4">
          {service.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2 sm:gap-3">
              <span className="text-accent-green mt-0.5 sm:mt-1 flex-shrink-0">✓</span>
              <span className="text-xs sm:text-sm text-brand-cream/80">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Image */}
      {serviceImage && (
        <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72">
          <ImageManager src={serviceImage} alt={service.title} fill className="object-cover" />
        </div>
      )}

      {/* Learn More Link */}
      <Link
        href={`/services#${service.id}`}
        className="inline-flex items-center justify-center px-4 sm:px-6 py-2 text-xs sm:text-sm md:text-base rounded-b-2xl font-semibold text-brand-dark bg-gradient-to-r from-brand-gold to-brand-lightgold hover:shadow-glow transition-smooth w-full"
      >
        Learn More
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
