import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us | Bindu\'s Stitching',
  description: 'Learn about Bindu\'s Stitching - 8+ years of expert tailoring and embroidery craftsmanship.',
};

export default function AboutPage() {
  return (
    <>
      <section className="gradient-brand py-12 sm:py-14 md:py-16 lg:py-20 mt-14 sm:mt-16">
        <div className="container mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-brand-cream mb-3 sm:mb-4">
            About Bindu's Stitching
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-brand-cream/80 max-w-2xl">
            Crafting elegance with precision since 2016
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-brand-dark">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center mb-12 sm:mb-16">
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-full md:min-h-96 rounded-2xl overflow-hidden soft-shadow">
              <Image
                src="/images/about.jpg"
                alt="Master Tailor Bindu"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-brand-cream mb-3 sm:mb-4">
                  Our Story
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-brand-cream/80 leading-relaxed mb-3 sm:mb-4">
                  Bindu's Stitching was founded with a passion for creating beautiful, perfectly-fitted garments that make people feel confident and elegant. What started as a small home operation has grown into a trusted name in the community.
                </p>
                <p className="text-xs sm:text-sm md:text-base text-brand-cream/80 leading-relaxed">
                  With 8+ years of expertise in kids' dress stitching, blouse tailoring, and intricate Aari embroidery work, we have served over 500 satisfied customers and counting.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-brand-gold/30">
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-brand-gold">8+</div>
                  <p className="text-xs sm:text-sm text-brand-cream/70">Years Experience</p>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-brand-gold">500+</div>
                  <p className="text-xs sm:text-sm text-brand-cream/70">Happy Clients</p>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-brand-gold">100%</div>
                  <p className="text-xs sm:text-sm text-brand-cream/70">Satisfaction</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            <div className="bg-brand-bronze/20 rounded-2xl soft-shadow border border-brand-gold/20 p-4 sm:p-5 md:p-6 lg:p-8">
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">✨</div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-brand-gold mb-2 sm:mb-3">Our Mission</h3>
              <p className="text-xs sm:text-sm md:text-base text-brand-cream/80">
                To create beautifully tailored garments that celebrate individuality and provide perfect fit with exceptional craftsmanship.
              </p>
            </div>

            <div className="bg-brand-bronze/20 rounded-2xl soft-shadow border border-brand-gold/20 p-4 sm:p-5 md:p-6 lg:p-8">
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">👨‍🎨</div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-brand-gold mb-2 sm:mb-3">Our Craft</h3>
              <p className="text-xs sm:text-sm md:text-base text-brand-cream/80">
                We specialize in custom tailoring that combines traditional techniques with modern design sensibilities.
              </p>
            </div>

            <div className="bg-brand-bronze/20 rounded-2xl soft-shadow border border-brand-gold/20 p-4 sm:p-5 md:p-6 lg:p-8">
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">❤️</div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-brand-gold mb-2 sm:mb-3">Our Values</h3>
              <p className="text-xs sm:text-sm md:text-base text-brand-cream/80">
                Quality, precision, attention to detail, and customer satisfaction are at the heart of everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-brand relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-accent-green rounded-full blur-3xl"></div>
        </div>

        <div className="relative container mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-brand-cream mb-6 sm:mb-8 text-center">
            Why Choose Us?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
            <div className="flex gap-3 sm:gap-4">
              <div className="text-2xl sm:text-3xl flex-shrink-0">📏</div>
              <div>
                <h3 className="font-semibold text-brand-gold mb-1 sm:mb-2 text-sm sm:text-base">Perfect Fit Guaranteed</h3>
                <p className="text-brand-cream/80 text-xs sm:text-sm">
                  Detailed measurements ensure every garment fits perfectly with comfort and style.
                </p>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4">
              <div className="text-2xl sm:text-3xl flex-shrink-0">⚡</div>
              <div>
                <h3 className="font-semibold text-brand-gold mb-1 sm:mb-2 text-sm sm:text-base">Fast Turnaround</h3>
                <p className="text-brand-cream/80 text-xs sm:text-sm">
                  Express services available for urgent orders without compromising quality.
                </p>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4">
              <div className="text-2xl sm:text-3xl flex-shrink-0">🎨</div>
              <div>
                <h3 className="font-semibold text-brand-gold mb-1 sm:mb-2 text-sm sm:text-base">Custom Designs</h3>
                <p className="text-brand-cream/80 text-xs sm:text-sm">
                  Bring your ideas to life with our creative design consultation services.
                </p>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4">
              <div className="text-2xl sm:text-3xl flex-shrink-0">💎</div>
              <div>
                <h3 className="font-semibold text-brand-gold mb-1 sm:mb-2 text-sm sm:text-base">Premium Materials</h3>
                <p className="text-brand-cream/80 text-xs sm:text-sm">
                  Only the finest fabrics and threads used for every creation.
                </p>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4">
              <div className="text-2xl sm:text-3xl flex-shrink-0">🤝</div>
              <div>
                <h3 className="font-semibold text-brand-gold mb-1 sm:mb-2 text-sm sm:text-base">Personal Attention</h3>
                <p className="text-brand-cream/80 text-xs sm:text-sm">
                  Each customer receives dedicated support throughout the tailoring process.
                </p>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4">
              <div className="text-2xl sm:text-3xl flex-shrink-0">✅</div>
              <div>
                <h3 className="font-semibold text-brand-gold mb-1 sm:mb-2 text-sm sm:text-base">Quality Assurance</h3>
                <p className="text-brand-cream/80 text-xs sm:text-sm">
                  Every garment undergoes rigorous quality checks before delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-brand-dark">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-brand-cream mb-4 sm:mb-6">
            Ready to Experience Our Craftsmanship?
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-brand-cream/80 mb-6 sm:mb-8 px-2">
            Let us create something beautiful for you today.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-2 sm:py-3 text-xs sm:text-sm md:text-base rounded-full font-semibold text-brand-dark bg-gradient-to-r from-brand-gold to-brand-lightgold hover:shadow-glow transition-smooth"
            >
              Book Appointment
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-2 sm:py-3 text-xs sm:text-sm md:text-base rounded-full font-semibold text-brand-cream border-2 border-brand-gold hover:bg-brand-gold/10 transition-smooth"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
