import { Metadata } from 'next';
import { PageHeader, StatsSection, FeatureCard, CTASection } from '@/components';
import { OriginalSaree, GreenSaree, GoldenBlouse } from '@/asset';
import ImageManager from '@/components/ImageManager';

// ✅ Import React Icons
import { FaMagic, FaUserTie, FaHeart, FaRuler, FaBolt, FaPalette, FaGem, FaHandshake, FaCheckCircle } from 'react-icons/fa';

export const metadata: Metadata = {
  title: "About Us | Bindu's Stitching",
  description:
    "Learn about Bindu's Stitching - 8+ years of expert tailoring and embroidery craftsmanship.",
};

export default function AboutPage() {
  const aboutStats = [
    { value: "8+", label: "Years Experience" },
    { value: "500+", label: "Happy Clients" },
    { value: "100%", label: "Satisfaction" },
  ];

  return (
    <>
      <PageHeader
        title="About Bindu's Stitching"
        subtitle="Crafting elegance with precision since 2016"
      />

      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-brand-dark">
        <div className="container mx-auto">
          {/* --- Story Section --- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center mb-12 sm:mb-16">
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-full md:min-h-96 rounded-2xl overflow-hidden soft-shadow">
              <ImageManager src={GoldenBlouse} alt="Master Tailor Bindu" fill />
            </div>

            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-brand-cream mb-3 sm:mb-4">
                  Our Story
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-brand-cream/80 leading-relaxed mb-3 sm:mb-4">
                  Bindu's Stitching was founded with a passion for creating
                  beautiful, perfectly-fitted garments that make people feel
                  confident and elegant. What started as a small home operation
                  has grown into a trusted name in the community.
                </p>
                <p className="text-xs sm:text-sm md:text-base text-brand-cream/80 leading-relaxed">
                  With 8+ years of expertise in kids' dress stitching, blouse
                  tailoring, and intricate Aari embroidery work, we have served
                  over 500 satisfied customers and counting.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-brand-gold/30">
                {aboutStats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl sm:text-3xl font-bold text-brand-gold">
                      {stat.value}
                    </div>
                    <p className="text-xs sm:text-sm text-brand-cream/70">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* --- Feature Cards --- */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            <FeatureCard
              icon={<FaMagic className="text-brand-gold text-2xl" />}
              title="Our Mission"
              description="To create beautifully tailored garments that celebrate individuality and provide perfect fit with exceptional craftsmanship."
            />
            <FeatureCard
              icon={<FaUserTie className="text-brand-gold text-2xl" />}
              title="Our Craft"
              description="We specialize in custom tailoring that combines traditional techniques with modern design sensibilities."
            />
            <FeatureCard
              icon={<FaHeart className="text-brand-gold text-2xl" />}
              title="Our Values"
              description="Quality, precision, attention to detail, and customer satisfaction are at the heart of everything we do."
            />
          </div>
        </div>
      </section>

      {/* --- Why Choose Us --- */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-brand relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-accent-green rounded-full blur-3xl"></div>
        </div>

        <div className="relative container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-brand-cream mb-6 sm:mb-8 text-center">
            Why Choose Us?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            {/* Each item replaced emoji with icon */}
            <WhyItem
              icon={<FaRuler />}
              title="Perfect Fit Guaranteed"
              description="Detailed measurements ensure every garment fits perfectly with comfort and style."
            />
            <WhyItem
              icon={<FaBolt />}
              title="Fast Turnaround"
              description="Express services available for urgent orders without compromising quality."
            />
            <WhyItem
              icon={<FaPalette />}
              title="Custom Designs"
              description="Bring your ideas to life with our creative design consultation services."
            />
            <WhyItem
              icon={<FaGem />}
              title="Premium Materials"
              description="Only the finest fabrics and threads used for every creation."
            />
            <WhyItem
              icon={<FaHandshake />}
              title="Personal Attention"
              description="Each customer receives dedicated support throughout the tailoring process."
            />
            <WhyItem
              icon={<FaCheckCircle />}
              title="Quality Assurance"
              description="Every garment undergoes rigorous quality checks before delivery."
            />
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Experience Our Craftsmanship?"
        description="Let us create something beautiful for you today."
        buttons={[
          { label: "Book Appointment", href: "/booking", variant: "primary" },
          { label: "View Portfolio", href: "/portfolio", variant: "outline" },
        ]}
      />
    </>
  );
}

// ✅ Reusable WhyItem component for icons + text
function WhyItem({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-3 sm:gap-4">
      <div className="text-2xl sm:text-3xl flex-shrink-0 text-brand-gold">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-brand-gold mb-1 sm:mb-2 text-sm sm:text-base">
          {title}
        </h3>
        <p className="text-brand-cream/80 text-xs sm:text-sm">{description}</p>
      </div>
    </div>
  );
}
