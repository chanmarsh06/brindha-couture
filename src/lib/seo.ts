import { Metadata } from 'next';

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: "Bindu's Stitching",
    description: 'Expert custom tailoring for kids dresses, blouses, and Aari embroidery work',
    url: 'https://bindusstitching.com',
    telephone: '+916385555688',
    email: 'contact@bindusstitching.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Fashion Street',
      addressLocality: 'City Name',
      addressRegion: 'State',
      postalCode: '123456',
      addressCountry: 'IN',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '10:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '14:00',
        closes: '18:00',
      },
    ],
    priceRange: '₹600-₹5000+',
    sameAs: [
      'https://instagram.com',
      'https://facebook.com',
      'https://wa.me/6385555688',
    ],
    image: 'https://bindusstitching.com/images/hero.jpg',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 28.6139,
      longitude: 77.209,
    },
  };
}

export function generateServiceSchema(serviceName: string, description: string, price: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description,
    provider: {
      '@type': 'LocalBusiness',
      name: "Bindu's Stitching",
      url: 'https://bindusstitching.com',
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      price: price,
    },
    areaServed: {
      '@type': 'City',
      name: 'City Name',
    },
    serviceType: 'Tailoring',
  };
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateOrgSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: "Bindu's Stitching",
    url: 'https://bindusstitching.com',
    logo: 'https://bindusstitching.com/logo.png',
    description: 'Expert custom tailoring for kids dresses, blouses, and Aari embroidery work',
    foundingDate: '2016',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: '+916385555688',
      email: 'contact@bindusstitching.com',
    },
    sameAs: [
      'https://instagram.com',
      'https://facebook.com',
      'https://wa.me/6385555688',
    ],
  };
}

export const defaultMetadata: Metadata = {
  metadataBase: new URL('https://bindusstitching.com'),
  title: {
    default: "Bindu's Stitching - Expert Tailoring & Embroidery",
    template: "%s | Bindu's Stitching",
  },
  description:
    'Custom tailoring for kids dresses, blouses, and intricate Aari embroidery work. Expert craftsmanship with 8+ years of experience.',
  keywords: [
    'tailoring',
    'custom stitching',
    'kids dress',
    'blouse stitching',
    'aari work',
    'embroidery',
    'Indian fashion',
    'custom garments',
  ],
  authors: [{ name: 'Bindu' }],
  creator: 'Bindu',
  publisher: "Bindu's Stitching",
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://bindusstitching.com',
    siteName: "Bindu's Stitching",
    title: "Bindu's Stitching - Expert Tailoring & Embroidery",
    description:
      'Custom tailoring for kids dresses, blouses, and intricate Aari embroidery work.',
    images: [
      {
        url: 'https://bindusstitching.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Bindu's Stitching",
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Bindu's Stitching",
    description: 'Expert custom tailoring and embroidery work',
    images: ['https://bindusstitching.com/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://bindusstitching.com',
  },
};
