'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Testimonial } from '@/types';

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

  return (
    <section className="py-16 md:py-24 bg-gradient-brand relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-green rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-brand-cream mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-brand-cream/70">
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
              className="bg-brand-bronze/30 backdrop-blur-sm rounded-3xl soft-shadow border border-brand-gold/30 p-8 md:p-12"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center">
                {testimonials[current].image && (
                  <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-gold to-accent-green p-1">
                      <div className="relative w-full h-full rounded-full overflow-hidden bg-brand-dark">
                        <Image
                          src={testimonials[current].image}
                          alt={testimonials[current].name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start gap-1 mb-4">
                    {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                      <span key={i} className="text-2xl">⭐</span>
                    ))}
                  </div>

                  <p className="text-lg md:text-xl text-brand-cream/90 mb-4 italic">
                    "{testimonials[current].message}"
                  </p>

                  <div>
                    <p className="font-semibold text-brand-lightgold">
                      {testimonials[current].name}
                    </p>
                    <p className="text-brand-cream/70 text-sm">
                      {testimonials[current].role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-between mt-8">
            <button
              onClick={goToPrevious}
              className="p-3 rounded-full bg-brand-gold text-brand-dark hover:bg-brand-lightgold transition-smooth"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex gap-3">
              {testimonials.map((_, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-3 h-3 rounded-full transition-smooth ${
                    idx === current ? 'bg-brand-gold w-8' : 'bg-brand-gold/30 hover:bg-brand-gold/60'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="p-3 rounded-full bg-brand-gold text-brand-dark hover:bg-brand-lightgold transition-smooth"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
