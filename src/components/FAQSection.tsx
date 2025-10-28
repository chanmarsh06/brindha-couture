'use client';

import { motion } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  faqs: FAQItem[];
  className?: string;
}

const FAQSection = ({
  title = 'Frequently Asked Questions',
  faqs,
  className = '',
}: FAQSectionProps) => {
  return (
    <section className={`py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-brand ${className}`}>
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-brand-cream mb-6 sm:mb-8 text-center">
          {title}
        </h2>

        <div className="space-y-4 sm:space-y-5 md:space-y-6 max-w-3xl mx-auto">
          {faqs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-brand-bronze/20 p-4 sm:p-5 md:p-6 rounded-2xl border border-brand-gold/20 hover:border-brand-gold/40 transition-colors"
            >
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-brand-gold mb-2 sm:mb-3">
                {item.question}
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-brand-cream/80">
                {item.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
