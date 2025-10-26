import { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'kids-dress',
    title: 'Kids Dress Stitching',
    description: 'Custom tailored dresses for children with perfect fit and comfort. From casual wear to party dresses.',
    image: '/images/services/kids-dress.jpg',
    price: '₹800 - ₹2500',
    features: [
      'Custom measurements',
      'Premium fabric selection',
      'Quick turnaround time',
      'Perfect fit guaranteed',
      'Adjustments included',
    ],
    icon: '👧',
  },
  {
    id: 'blouse-stitching',
    title: 'Blouse Stitching',
    description: 'Traditional and modern blouse designs with expert tailoring. Perfect for sarees and lehengas.',
    image: '/images/services/blouse.jpg',
    price: '₹600 - ₹1500',
    features: [
      'Traditional & contemporary designs',
      'Embroidery incorporation',
      'Multiple style options',
      'Expert craftsmanship',
      'Express service available',
    ],
    icon: '👚',
  },
  {
    id: 'aari-work',
    title: 'Aari Work & Embroidery',
    description: 'Intricate Aari embroidery work on garments and fabrics. Add elegance to your wardrobe.',
    image: '/images/services/aari.jpg',
    price: '₹1500 - ₹5000+',
    features: [
      'Traditional Aari embroidery',
      'Custom designs',
      'Gold & silver thread work',
      'Beading & sequins',
      'Bridal work available',
    ],
    icon: '✨',
  },
];

export const serviceCategories = ['Kids Stitching', 'Blouse Stitching', 'Aari Work'];
