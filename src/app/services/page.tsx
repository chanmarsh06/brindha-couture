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
      <section className="gradient-brand py-12 md:py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-brand-cream mb-4">
            Our Tailoring Services
          </h1>
          <p className="text-lg text-brand-cream/80 max-w-2xl">
            From custom kids' dresses to intricate Aari embroidery, we offer a comprehensive range of tailoring
            services tailored to your needs.
          </p>
        </div>
      </section>

      <ServicesGrid services={services} title="" description="" />

      <section className="py-16 md:py-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4 p-6 bg-brand-bronze/20 rounded-2xl soft-shadow border border-brand-gold/20">
              <div className="text-4xl">📏</div>
              <h3 className="text-2xl font-serif font-bold text-brand-gold">Custom Measurements</h3>
              <p className="text-brand-cream/70">
                Perfect fit guaranteed with our detailed measurement consultation process.
              </p>
            </div>

            <div className="space-y-4 p-6 bg-brand-bronze/20 rounded-2xl soft-shadow border border-brand-gold/20">
              <div className="text-4xl">⚡</div>
              <h3 className="text-2xl font-serif font-bold text-brand-gold">Quick Turnaround</h3>
              <p className="text-brand-cream/70">
                Express services available. We deliver quality work in minimal time.
              </p>
            </div>

            <div className="space-y-4 p-6 bg-brand-bronze/20 rounded-2xl soft-shadow border border-brand-gold/20">
              <div className="text-4xl">✨</div>
              <h3 className="text-2xl font-serif font-bold text-brand-gold">Premium Quality</h3>
              <p className="text-brand-cream/70">
                Only the finest fabrics and threads used for every creation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-brand relative overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-brand-cream mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-brand-cream/80 mb-8">
            Contact us today to discuss your tailoring needs and get a quote.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold text-brand-dark bg-gradient-to-r from-brand-gold to-brand-lightgold hover:shadow-glow transition-smooth"
            >
              Book Appointment
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold text-brand-cream border-2 border-brand-gold hover:bg-brand-gold/10 transition-smooth"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
