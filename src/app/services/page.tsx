import { Metadata } from 'next';
import { PageHeader, Button, ServicesGrid, FeatureCard } from '@/components';
import { services } from '@/data/services';

export const metadata: Metadata = {
  title: 'Our Services | Bindu\'s Stitching',
  description: 'Explore our tailoring services: kids dress stitching, blouse tailoring, and Aari embroidery work.',
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Tailoring Services"
        subtitle="From custom kids' dresses to intricate Aari embroidery, we offer a comprehensive range of tailoring services tailored to your needs."
      />

      <ServicesGrid services={services} title="" description="" />

      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-brand-dark">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            <FeatureCard
              icon="📏"
              title="Custom Measurements"
              description="Perfect fit guaranteed with our detailed measurement consultation process."
            />
            <FeatureCard
              icon="⚡"
              title="Quick Turnaround"
              description="Express services available. We deliver quality work in minimal time."
            />
            <FeatureCard
              icon="✨"
              title="Premium Quality"
              description="Only the finest fabrics and threads used for every creation."
            />
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
            <Button as="link" href="/booking" size="lg">
              Book Appointment
            </Button>
            <Button as="link" href="/contact" variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
