import { PortfolioItem } from '@/types';
import {
  ElevateYourBridalLook,
  EmbraceHeritage,
  PecockDesign,
  Child,
  GoldenBlouse,
  FloralBohoVibes
} from "@/asset";

export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'Purple Kids Party Dress',
    category: 'Kids Stitching',
    image: Child,
    description: 'Charming purple silk party wear dress designed for kids with elegant floral embroidery and layered finish.',
    fullImage: Child,
  },
  {
    id: '2',
    title: 'Elevate Your Bridal Look',
    category: 'Bridal Blouse',
    image: ElevateYourBridalLook,
    description: 'A luxurious bridal blouse crafted with intricate Aari and Zari detailing — perfect for your special day.',
    fullImage: ElevateYourBridalLook,
  },
  {
    id: '3',
    title: 'Golden Royal Blouse',
    category: 'Aari & Stone Work',
    image: GoldenBlouse,
    description: 'Golden silk blouse enhanced with shimmering beadwork and hand-embroidered motifs, giving a regal bridal touch.',
    fullImage: GoldenBlouse,
  },
  {
    id: '4',
    title: 'Embrace Heritage Saree',
    category: 'Traditional Saree Work',
    image: EmbraceHeritage,
    description: 'A graceful saree design blending modern drape style with traditional Aari craftsmanship and temple patterns.',
    fullImage: EmbraceHeritage,
  },
  {
    id: '5',
    title: 'Peacock Design Blouse',
    category: 'Aari Work',
    image: PecockDesign,
    description: 'Signature peacock motif handcrafted with thread and mirror work — a perfect choice for festive sarees.',
    fullImage: PecockDesign,
  },
  {
    id: '6',
    title: 'Floral Boho Vibes Blouse',
    category: 'Designer Blouse',
    image: FloralBohoVibes,
    description: 'Contemporary floral-themed blouse that blends boho chic style with intricate thread embroidery.',
    fullImage: FloralBohoVibes,
  },
];
