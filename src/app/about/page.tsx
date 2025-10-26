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
      <section className="gradient-brand py-12 md:py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-brand-cream mb-4">
            About Bindu's Stitching
          </h1>
          <p className="text-lg text-brand-cream/80 max-w-2xl">
            Crafting elegance with precision since 2016
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-96 md:h-full min-h-96 rounded-2xl overflow-hidden soft-shadow">
              <Image
                src="/images/about.jpg"
                alt="Master Tailor Bindu"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-cream mb-4">
                  Our Story
                </h2>
                <p className="text-brand-cream/80 leading-relaxed mb-4">
                  Bindu's Stitching was founded with a passion for creating beautiful, perfectly-fitted garments that make people feel confident and elegant. What started as a small home operation has grown into a trusted name in the community.
                </p>
                <p className="text-brand-cream/80 leading-relaxed">
                  With 8+ years of expertise in kids' dress stitching, blouse tailoring, and intricate Aari embroidery work, we have served over 500 satisfied customers and counting.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-brand-gold/30">
                <div>
                  <div className="text-3xl font-bold text-brand-gold">8+</div>
                  <p className="text-sm text-brand-cream/70">Years Experience</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-gold">500+</div>
                  <p className="text-sm text-brand-cream/70">Happy Clients</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-gold">100%</div>
                  <p className="text-sm text-brand-cream/70">Satisfaction</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-brand-bronze/20 rounded-2xl soft-shadow border border-brand-gold/20 p-8">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-2xl font-serif font-bold text-brand-gold mb-3">Our Mission</h3>
              <p className="text-brand-cream/80">
                To create beautifully tailored garments that celebrate individuality and provide perfect fit with exceptional craftsmanship.
              </p>
            </div>

            <div className="bg-brand-bronze/20 rounded-2xl soft-shadow border border-brand-gold/20 p-8">
              <div className="text-5xl mb-4">👨‍🎨</div>
              <h3 className="text-2xl font-serif font-bold text-brand-gold mb-3">Our Craft</h3>
              <p className="text-brand-cream/80">
                We specialize in custom tailoring that combines traditional techniques with modern design sensibilities.
              </p>
            </div>

            <div className="bg-brand-bronze/20 rounded-2xl soft-shadow border border-brand-gold/20 p-8">
              <div className="text-5xl mb-4">❤️</div>
              <h3 className="text-2xl font-serif font-bold text-brand-gold mb-3">Our Values</h3>
              <p className="text-brand-cream/80">
                Quality, precision, attention to detail, and customer satisfaction are at the heart of everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-brand relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-green rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-cream mb-8 text-center">
            Why Choose Us?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">📏</div>
              <div>
                <h3 className="font-semibold text-brand-gold mb-2">Perfect Fit Guaranteed</h3>
                <p className="text-brand-cream/80 text-sm">
                  Detailed measurements ensure every garment fits perfectly with comfort and style.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">⚡</div>
              <div>
                <h3 className="font-semibold text-brand-gold mb-2">Fast Turnaround</h3>
                <p className="text-brand-cream/80 text-sm">
                  Express services available for urgent orders without compromising quality.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">🎨</div>
              <div>
                <h3 className="font-semibold text-brand-gold mb-2">Custom Designs</h3>
                <p className="text-brand-cream/80 text-sm">
                  Bring your ideas to life with our creative design consultation services.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">💎</div>
              <div>
                <h3 className="font-semibold text-brand-gold mb-2">Premium Materials</h3>
                <p className="text-brand-cream/80 text-sm">
                  Only the finest fabrics and threads used for every creation.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">🤝</div>
              <div>
                <h3 className="font-semibold text-brand-gold mb-2">Personal Attention</h3>
                <p className="text-brand-cream/80 text-sm">
                  Each customer receives dedicated support throughout the tailoring process.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl flex-shrink-0">✅</div>
              <div>
                <h3 className="font-semibold text-brand-gold mb-2">Quality Assurance</h3>
                <p className="text-brand-cream/80 text-sm">
                  Every garment undergoes rigorous quality checks before delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-brand-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-cream mb-6">
            Ready to Experience Our Craftsmanship?
          </h2>
          <p className="text-lg text-brand-cream/80 mb-8">
            Let us create something beautiful for you today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold text-brand-dark bg-gradient-to-r from-brand-gold to-brand-lightgold hover:shadow-glow transition-smooth"
            >
              Book Appointment
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold text-brand-cream border-2 border-brand-gold hover:bg-brand-gold/10 transition-smooth"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
