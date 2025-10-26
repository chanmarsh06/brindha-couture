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
      <section className="gradient-brand py-12 md:py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-brand-cream mb-4">
            Our Portfolio
          </h1>
          <p className="text-lg text-brand-cream/80 max-w-2xl">
            Explore our collection of beautifully crafted garments and embroidery work.
          </p>
        </div>
      </section>

      <PortfolioGallery items={portfolioItems} />
    </>
  );
}
