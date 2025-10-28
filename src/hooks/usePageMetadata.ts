import { Metadata } from 'next';

interface PageMetadataParams {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
}

export const createPageMetadata = ({
  title,
  description,
  keywords = [
    'tailoring',
    'stitching',
    'embroidery',
    'kids dresses',
    'Aari work',
  ],
  ogImage = '/images/og-image.jpg',
  canonical,
}: PageMetadataParams): Metadata => {
  const fullTitle = title.includes('Bindu') ? title : `${title} | Bindu's Stitching`;

  return {
    title: fullTitle,
    description,
    keywords: Array.isArray(keywords) ? keywords.join(', ') : keywords,
    openGraph: {
      title: fullTitle,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: fullTitle }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
    },
    alternates: canonical ? { canonical } : undefined,
  };
};

export default createPageMetadata;
