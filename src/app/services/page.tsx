import { Metadata } from 'next';
import ServicesGrid from '@/components/ServicesGrid';
import { services } from '@/data/services';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Our Services | Bindu\'s Stitching',
  description: 'Explore our tailoring services: kids dress stitching, blouse tailoring, and Aari embroidery work.',
};

export default function ServicesPage() {
  return (
    <>
      <section className="gradient-brand py-12 sm:py-14 md:py-16 lg:py-20 mt-14 sm:mt-16">
        <div className="container mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-brand-cream mb-3 sm:mb-4">
            Our Tailoring Services
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-brand-cream/80 max-w-2xl">
            From custom kids' dresses to intricate Aari embroidery, we offer a comprehensive range of tailoring
            services tailored to your needs.
          </p>
        </div>
      </section>

      <ServicesGrid services={services} title="" description="" />

      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-brand-dark">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            <div className="space-y-3 sm:space-y-4 p-4 sm:p-5 md:p-6 lg:p-8 bg-brand-bronze/20 rounded-2xl soft-shadow border border-brand-gold/20">
              <div className="text-3xl sm:text-4xl">📏</div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-brand-gold">Custom Measurements</h3>
              <p className="text-xs sm:text-sm md:text-base text-brand-cream/70">
                Perfect fit guaranteed with our detailed measurement consultation process.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4 p-4 sm:p-5 md:p-6 lg:p-8 bg-brand-bronze/20 rounded-2xl soft-shadow border border-brand-gold/20">
              <div className="text-3xl sm:text-4xl">⚡</div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-brand-gold">Quick Turnaround</h3>
              <p className="text-xs sm:text-sm md:text-base text-brand-cream/70">
                Express services available. We deliver quality work in minimal time.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4 p-4 sm:p-5 md:p-6 lg:p-8 bg-brand-bronze/20 rounded-2xl soft-shadow border border-brand-gold/20">
              <div className="text-3xl sm:text-4xl">✨</div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-brand-gold">Premium Quality</h3>
              <p className="text-xs sm:text-sm md:text-base text-brand-cream/70">
                Only the finest fabrics and threads used for every creation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-brand relative overflow-hidden">
        <div className="relative container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-brand-cream mb-4 sm:mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-brand-cream/80 mb-6 sm:mb-8 px-2">
            Contact us today to discuss your tailoring needs and get a quote.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-2 sm:py-3 text-xs sm:text-sm md:text-base rounded-full font-semibold text-brand-dark bg-gradient-to-r from-brand-gold to-brand-lightgold hover:shadow-glow transition-smooth"
            >
              Book Appointment
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-2 sm:py-3 text-xs sm:text-sm md:text-base rounded-full font-semibold text-brand-cream border-2 border-brand-gold hover:bg-brand-gold/10 transition-smooth"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
