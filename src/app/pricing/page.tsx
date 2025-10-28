import { Metadata } from 'next';
import { PageHeader, PricingCards, FAQSection } from '@/components';
import { pricingTiers } from '@/data/pricing';

export const metadata: Metadata = {
  title: 'Pricing | Bindu\'s Stitching',
  description: 'View our transparent and affordable pricing for tailoring services.',
};

export default function PricingPage() {
  const faqs = [
    {
      question: 'How long does tailoring typically take?',
      answer: 'Standard tailoring takes 5-10 days. Express services are available at an additional 30% charge for faster turnaround.',
    },
    {
      question: 'Do you offer alterations?',
      answer: 'Yes! All garments come with free alterations within 7 days of delivery to ensure perfect fit.',
    },
    {
      question: 'Can I choose my own fabric?',
      answer: 'Absolutely! You can bring your own fabric or choose from our premium fabric selection. We work with fabrics you provide.',
    },
    {
      question: 'What if I\'m not satisfied with the final product?',
      answer: 'Customer satisfaction is our priority. We offer unlimited free alterations until you\'re completely happy with your garment.',
    },
  ];

  return (
    <>
      <PageHeader
        title="Our Pricing"
        subtitle="Transparent, affordable pricing for all our tailoring and embroidery services."
      />

      <PricingCards tiers={pricingTiers} />

      <FAQSection faqs={faqs} />
    </>
  );
}
