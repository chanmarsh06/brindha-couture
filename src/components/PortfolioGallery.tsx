'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { PortfolioItem } from '@/types';

interface PortfolioGalleryProps {
  items: PortfolioItem[];
}

const PortfolioGallery = ({ items }: PortfolioGalleryProps) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...new Set(items.map((item) => item.category))];

  const filteredItems =
    selectedCategory === 'All' ? items : items.filter((item) => item.category === selectedCategory);

  const selectedItem = items.find((item) => item.id === selectedId);
 

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-brand-gold rounded-full blur-3xl"></div>
      </div>

      <div className="relative container">
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-serif font-bold text-brand-cream mb-2 sm:mb-4">
            Our Portfolio
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-brand-cream/70">
            Explore our latest creations and finest work
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 sm:px-6 py-1 sm:py-2 text-xs sm:text-sm rounded-full font-semibold transition-smooth ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-brand-gold to-brand-lightgold text-brand-dark'
                  : 'bg-brand-bronze/30 text-brand-cream hover:bg-brand-bronze/50 border border-brand-gold/30'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedId(item.id)}
                className="cursor-pointer group"
              >
                <div className="relative h-48 sm:h-56 md:h-64 lg:h-80 rounded-lg sm:rounded-2xl overflow-hidden soft-shadow hover:soft-lg transition-smooth border border-brand-gold/20 hover:border-brand-gold/50">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-serif font-bold text-brand-gold mb-1 sm:mb-2">
                      {item.title}
                    </h3>
                    <p className="text-brand-cream/90 text-xs sm:text-sm">{item.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

     <AnimatePresence>
  {selectedItem && (
    <motion.div
      key="lightbox"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelectedId(null)}
      className="fixed inset-0 bg-brand-dark/95 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-xl sm:max-w-2xl max-h-[85vh] sm:max-h-[90vh]"
      >
        <button
          onClick={() => setSelectedId(null)}
          className="absolute -top-8 -right-8 sm:-top-10 sm:-right-10 z-10 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-brand-gold text-brand-dark flex items-center justify-center hover:bg-brand-lightgold transition-smooth text-lg sm:text-xl md:text-2xl"
          aria-label="Close lightbox"
        >
          ✕
        </button>

        {selectedItem.image && (
          <div className="relative w-full h-64 sm:h-80 md:h-[400px] lg:h-[500px] rounded-xl sm:rounded-2xl overflow-hidden">
            <Image
              src={selectedItem.fullImage || selectedItem.image}
              alt={selectedItem.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="bg-brand-bronze/40 backdrop-blur-sm p-4 sm:p-6 md:p-8">
          <h3 className="text-lg sm:text-2xl md:text-3xl font-serif font-bold text-brand-gold mb-1 sm:mb-2">
            {selectedItem.title}
          </h3>
          <p className="text-xs sm:text-sm text-brand-cream/70 mb-3 sm:mb-4">{selectedItem.category}</p>
          <p className="text-xs sm:text-sm md:text-base text-brand-cream/90 line-clamp-4 sm:line-clamp-none">
            {selectedItem.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

    </section>
  );
};

export default PortfolioGallery;
