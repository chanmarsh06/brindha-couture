import { Metadata } from 'next';
import Hero from '@/components/Hero';
import ServicesGrid from '@/components/ServicesGrid';
import { DynamicTestimonialsCarousel } from '@/components/DynamicComponents';
import { services } from '@/data/services';
import { testimonials } from '@/data/testimonials';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Home | Bindu\'s Stitching - Expert Tailoring & Embroidery',
  description:
    'Welcome to Bindu\'s Stitching. Custom tailoring for kids\' dresses, blouses, and intricate Aari embroidery. 8+ years of expert craftsmanship.',
};

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid services={services} />
      <DynamicTestimonialsCarousel testimonials={testimonials} />

      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-brand-dark">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 text-center">
            <div className="space-y-3 sm:space-y-4">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-gold">8+</div>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif text-brand-cream">Years of Excellence</h3>
              <p className="text-xs sm:text-sm md:text-base text-brand-cream/70">
                Perfecting our craft and techniques since our inception
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-gold">500+</div>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif text-brand-cream">Happy Clients</h3>
              <p className="text-xs sm:text-sm md:text-base text-brand-cream/70">
                Trusted by families and individuals across the city
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brand-gold">100+</div>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif text-brand-cream">Satisfaction</h3>
              <p className="text-xs sm:text-sm md:text-base text-brand-cream/70">
                Every garment tailored to perfection with care
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-brand relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-brand-lightgold rounded-full blur-3xl"></div>
        </div>

        <div className="relative container text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-serif font-bold text-brand-cream mb-4 sm:mb-6">
            Ready to Transform Your Wardrobe?
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-brand-cream/80 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Let us create something beautiful for you. From custom kids' dresses to intricate embroidery, we're here to
            bring your vision to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href="/booking"
              prefetch={true}
              className="inline-flex items-center justify-center px-5 sm:px-6 md:px-8 py-2 sm:py-3 text-xs sm:text-sm md:text-base rounded-full font-semibold text-brand-dark bg-gradient-to-r from-brand-gold to-brand-lightgold hover:shadow-glow transition-smooth"
            >
              Book Your Appointment
            </Link>
            <Link
              href="/contact"
              prefetch={true}
              className="inline-flex items-center justify-center px-5 sm:px-6 md:px-8 py-2 sm:py-3 text-xs sm:text-sm md:text-base rounded-full font-semibold text-brand-cream border-2 border-brand-gold hover:bg-brand-gold/10 transition-smooth"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
