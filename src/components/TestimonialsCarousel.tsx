'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Testimonial } from '@/types';
import ImageManager from './ImageManager';
import { Button } from '@/components';
import { GreenSaree, BlueSaree, OriginalSaree, RedSaree } from '@/asset';

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialsCarousel = ({ testimonials }: TestimonialsCarouselProps) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  // Optional: map testimonial images to ImageManager imports
  const testimonialImages = [GreenSaree, BlueSaree, OriginalSaree, RedSaree];

  return (
    <section className="py-16 md:py-24 bg-gradient-brand relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-green rounded-full blur-3xl"></div>
      </div>

      <div className="relative container">
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-serif font-bold text-brand-cream mb-3 sm:mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-brand-cream/70">
            Trusted by hundreds of satisfied customers
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-brand-bronze/30 backdrop-blur-sm rounded-2xl sm:rounded-3xl soft-shadow border border-brand-gold/30 p-4 sm:p-6 md:p-8 lg:p-12"
            >
              <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 items-center">
                {testimonials[current].image && (
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 flex-shrink-0">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-gold to-accent-green p-1">
                      <div className="relative w-full h-full rounded-full overflow-hidden bg-brand-dark">
                        <ImageManager
                          src={testimonialImages[current % testimonialImages.length]}
                          alt={testimonials[current].name}
                          fill
                          className="rounded-full"
                        />
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start gap-1 mb-3 sm:mb-4">
                    {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                      <span key={i} className="text-lg sm:text-xl md:text-2xl">⭐</span>
                    ))}
                  </div>

                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-brand-cream/90 mb-3 sm:mb-4 italic">
                    "{testimonials[current].message}"
                  </p>

                  <div>
                    <p className="font-semibold text-brand-lightgold text-sm sm:text-base">
                      {testimonials[current].name}
                    </p>
                    <p className="text-brand-cream/70 text-xs sm:text-sm">
                      {testimonials[current].role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-between mt-6 sm:mt-8">
            <Button
              onClick={goToPrevious}
              variant="primary"
              className="p-2 sm:p-3"
              ariaLabel="Previous testimonial"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Button>

            <div className="flex gap-2 sm:gap-3">
              {testimonials.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-smooth ${
                    idx === current ? 'bg-brand-gold w-6 sm:w-8' : 'bg-brand-gold/30 hover:bg-brand-gold/60'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>

            <Button
              onClick={goToNext}
              variant="primary"
              className="p-2 sm:p-3"
              ariaLabel="Next testimonial"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
