export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  price: string;
  features: string[];
  icon: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  fullImage?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  message: string;
  rating: number;
  image?: string;
}

export interface PricingTier {
  id: string;
  name: string;
  description: string;
  price: string;
  features: string[];
  highlighted: boolean;
  cta: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  author: string;
  category: string;
  image: string;
  readTime: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  notes: string;
  measurements?: File;
}
