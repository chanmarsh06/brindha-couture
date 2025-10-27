'use client';

import dynamic from 'next/dynamic';
import { ComponentType } from 'react';

// Dynamic imports for heavy components
export const DynamicTestimonialsCarousel = dynamic(
  () => import('./TestimonialsCarousel'),
  {
    loading: () => (
      <div className="py-12 sm:py-16 md:py-20 lg:py-24 bg-brand-dark">
        <div className="container text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-brand-gold/20 rounded w-64 mx-auto mb-4"></div>
            <div className="h-4 bg-brand-cream/20 rounded w-96 mx-auto mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-48 bg-brand-bronze/20 rounded-2xl"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    ssr: false,
  }
);

export const DynamicPortfolioGallery = dynamic(
  () => import('./PortfolioGallery'),
  {
    loading: () => (
      <div className="py-12 sm:py-16 md:py-20 lg:py-24 bg-brand-dark">
        <div className="container">
          <div className="animate-pulse">
            <div className="h-8 bg-brand-gold/20 rounded w-64 mx-auto mb-8"></div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="aspect-square bg-brand-bronze/20 rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    ssr: false,
  }
);

export const DynamicBookingForm = dynamic(
  () => import('./BookingForm'),
  {
    loading: () => (
      <div className="max-w-2xl mx-auto p-6 bg-brand-bronze/20 rounded-2xl">
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-brand-cream/20 rounded w-3/4"></div>
          <div className="h-10 bg-brand-cream/20 rounded"></div>
          <div className="h-10 bg-brand-cream/20 rounded"></div>
          <div className="h-24 bg-brand-cream/20 rounded"></div>
          <div className="h-10 bg-brand-gold/20 rounded"></div>
        </div>
      </div>
    ),
    ssr: false,
  }
);

export const DynamicContactForm = dynamic(
  () => import('./ContactForm'),
  {
    loading: () => (
      <div className="max-w-lg mx-auto p-6 bg-brand-bronze/20 rounded-2xl">
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-brand-cream/20 rounded w-1/2"></div>
          <div className="h-10 bg-brand-cream/20 rounded"></div>
          <div className="h-10 bg-brand-cream/20 rounded"></div>
          <div className="h-24 bg-brand-cream/20 rounded"></div>
          <div className="h-10 bg-brand-gold/20 rounded"></div>
        </div>
      </div>
    ),
    ssr: false,
  }
);