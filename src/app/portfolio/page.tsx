import { Metadata } from 'next';
import PortfolioGallery from '@/components/PortfolioGallery';
import { portfolioItems } from '@/data/portfolio';

export const metadata: Metadata = {
  title: 'Portfolio | Bindu\'s Stitching',
  description: 'Browse our portfolio of custom tailored dresses, blouses, and embroidery work.',
};

export default function PortfolioPage() {
  return (
    <>
      <section className="gradient-brand py-12 sm:py-14 md:py-16 lg:py-20 mt-14 sm:mt-16">
        <div className="container mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-brand-cream mb-3 sm:mb-4">
            Our Portfolio
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-brand-cream/80 max-w-2xl">
            Explore our collection of beautifully crafted garments and embroidery work.
          </p>
        </div>
      </section>

      <PortfolioGallery items={portfolioItems} />
    </>
  );
}
