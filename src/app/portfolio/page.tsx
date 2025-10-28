import { Metadata } from 'next';
import { PageHeader, PortfolioGallery } from '@/components';
import { portfolioItems } from '@/data/portfolio';

export const metadata: Metadata = {
  title: 'Portfolio | Bindu\'s Stitching',
  description: 'Browse our portfolio of custom tailored dresses, blouses, and embroidery work.',
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        title="Our Portfolio"
        subtitle="Explore our collection of beautifully crafted garments and embroidery work."
      />

      <PortfolioGallery items={portfolioItems} />
    </>
  );
}
