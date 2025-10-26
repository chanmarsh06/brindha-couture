import { Metadata } from 'next';
import PricingCards from '@/components/PricingCards';
import { pricingTiers } from '@/data/pricing';

export const metadata: Metadata = {
  title: 'Pricing | Bindu\'s Stitching',
  description: 'View our transparent and affordable pricing for tailoring services.',
};

export default function PricingPage() {
  return (
    <>
      <section className="gradient-brand py-12 sm:py-14 md:py-16 lg:py-20 mt-14 sm:mt-16">
        <div className="container mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-brand-cream mb-3 sm:mb-4">
            Our Pricing
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-brand-cream/80 max-w-2xl">
            Transparent, affordable pricing for all our tailoring and embroidery services.
          </p>
        </div>
      </section>

      <PricingCards tiers={pricingTiers} />

      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-brand">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-brand-cream mb-6 sm:mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            <div className="bg-brand-bronze/20 p-4 sm:p-5 md:p-6 rounded-2xl border border-brand-gold/20">
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-brand-gold mb-2 sm:mb-3">
                How long does tailoring typically take?
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-brand-cream/80">
                Standard tailoring takes 5-10 days. Express services are available at an additional 30% charge
                for faster turnaround.
              </p>
            </div>

            <div className="bg-brand-bronze/20 p-4 sm:p-5 md:p-6 rounded-2xl border border-brand-gold/20">
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-brand-gold mb-2 sm:mb-3">
                Do you offer alterations?
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-brand-cream/80">
                Yes! All garments come with free alterations within 7 days of delivery to ensure perfect fit.
              </p>
            </div>

            <div className="bg-brand-bronze/20 p-4 sm:p-5 md:p-6 rounded-2xl border border-brand-gold/20">
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-brand-gold mb-2 sm:mb-3">
                Can I choose my own fabric?
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-brand-cream/80">
                Absolutely! You can bring your own fabric or choose from our premium fabric selection. We work with
                fabrics you provide.
              </p>
            </div>

            <div className="bg-brand-bronze/20 p-4 sm:p-5 md:p-6 rounded-2xl border border-brand-gold/20">
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-brand-gold mb-2 sm:mb-3">
                What if I'm not satisfied with the final product?
              </h3>
              <p className="text-xs sm:text-sm md:text-base text-brand-cream/80">
                Customer satisfaction is our priority. We offer unlimited free alterations until you're completely happy with your garment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
