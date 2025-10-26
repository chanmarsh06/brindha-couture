'use client';

import { motion } from 'framer-motion';
import { Service } from '@/types';
import ServiceCard from './ServiceCard';

interface ServicesGridProps {
  services: Service[];
  title?: string;
  description?: string;
}

const ServicesGrid = ({
  services,
  title = 'Our Services',
  description = 'Discover our range of expert tailoring services tailored to your needs.',
}: ServicesGridProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-brand-gold rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto">
        <motion.div
          className="text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-brand-cream mb-3 sm:mb-4">{title}</h2>
          <p className="text-sm sm:text-base md:text-lg text-brand-cream/70 max-w-2xl mx-auto px-2 sm:px-0">{description}</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, idx) => (
            <ServiceCard key={service.id} service={service} index={idx} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;
