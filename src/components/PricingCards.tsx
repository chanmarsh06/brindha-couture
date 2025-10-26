'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { PricingTier } from '@/types';

interface PricingCardsProps {
  tiers: PricingTier[];
}

const PricingCards = ({ tiers }: PricingCardsProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-16 md:py-24 bg-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-brand-gold rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-brand-cream mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-brand-cream/70 max-w-2xl mx-auto">
            Choose the perfect plan for your tailoring needs
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {tiers.map((tier, idx) => (
            <motion.div key={tier.id} variants={itemVariants} className="h-full">
              <div
                className={`h-full rounded-3xl overflow-hidden soft-shadow transition-smooth relative ${
                  tier.highlighted
                    ? 'bg-gradient-to-br from-brand-gold/20 to-accent-green/20 border-2 border-brand-gold scale-105 md:scale-110 md:z-10'
                    : 'bg-brand-bronze/20 backdrop-blur-sm border border-brand-gold/20 hover:border-brand-gold/50'
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-brand-gold to-brand-lightgold text-brand-dark px-4 py-2 text-center font-semibold text-sm">
                    ⭐ Most Popular
                  </div>
                )}

                <div className={`p-8 ${tier.highlighted ? 'pt-16' : ''}`}>
                  <h3 className="text-2xl font-serif font-bold text-brand-gold mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-brand-cream/70 mb-6">{tier.description}</p>

                  <div className="mb-8">
                    <span className="text-5xl font-bold text-brand-lightgold">{tier.price}</span>
                    {!tier.price.includes('+') && (
                      <span className="text-brand-cream/70"> / Service</span>
                    )}
                  </div>

                  <div className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIdx) => (
                      <div key={featureIdx} className="flex items-start gap-3">
                        <span className="text-accent-green mt-1 flex-shrink-0">✓</span>
                        <span className="text-brand-cream/80 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/booking"
                    className={`block w-full text-center py-3 rounded-full font-semibold transition-smooth ${
                      tier.highlighted
                        ? 'bg-gradient-to-r from-brand-gold to-brand-lightgold text-brand-dark hover:shadow-glow'
                        : 'bg-brand-gold/20 text-brand-gold border border-brand-gold/50 hover:bg-brand-gold/30'
                    }`}
                  >
                    {tier.cta}
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 p-8 bg-brand-bronze/20 rounded-2xl border border-brand-gold/20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-brand-cream/80 mb-4">
            Don't see what you're looking for? We offer custom tailoring solutions for all your needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-2 rounded-full font-semibold text-brand-gold border border-brand-gold hover:bg-brand-gold/10 transition-smooth"
          >
            Get Custom Quote
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingCards;
