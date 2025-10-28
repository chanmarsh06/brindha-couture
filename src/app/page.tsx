import { Metadata } from 'next';
import { Hero, ServicesGrid, StatsSection, CTASection } from '@/components';
import { DynamicTestimonialsCarousel } from '@/components/DynamicComponents';
import { services } from '@/data/services';
import { testimonials } from '@/data/testimonials';

export const metadata: Metadata = {
  title: 'Home | Bindu\'s Stitching - Expert Tailoring & Embroidery',
  description:
    'Welcome to Bindu\'s Stitching. Custom tailoring for kids\' dresses, blouses, and intricate Aari embroidery. 8+ years of expert craftsmanship.',
};

export default function Home() {
  const stats = [
    {
      value: '8+',
      label: 'Years of Excellence',
      description: 'Perfecting our craft and techniques since our inception',
    },
    {
      value: '500+',
      label: 'Happy Clients',
      description: 'Trusted by families and individuals across the city',
    },
    {
      value: '100+',
      label: 'Satisfaction',
      description: 'Every garment tailored to perfection with care',
    },
  ];

  return (
    <>
      <Hero />
      <ServicesGrid services={services} />
      <DynamicTestimonialsCarousel testimonials={testimonials} />

      <StatsSection stats={stats} />

      <CTASection
        title="Ready to Transform Your Wardrobe?"
        description="Let us create something beautiful for you. From custom kids' dresses to intricate embroidery, we're here to bring your vision to life."
        buttons={[
          { label: 'Book Your Appointment', href: '/booking', variant: 'primary' },
          { label: 'Get in Touch', href: '/contact', variant: 'outline' },
        ]}
      />
    </>
  );
}
