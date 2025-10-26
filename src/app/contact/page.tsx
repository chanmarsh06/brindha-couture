import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Us | Bindu\'s Stitching',
  description: 'Get in touch with Bindu\'s Stitching. We\'re here to help with your tailoring inquiries.',
};

export default function ContactPage() {
  return (
    <>
      <section className="gradient-brand py-12 sm:py-14 md:py-16 lg:py-20 mt-14 sm:mt-16">
        <div className="container mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-brand-cream mb-3 sm:mb-4">
            Get in Touch
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-brand-cream/80 max-w-2xl">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-brand-dark">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 mb-12 sm:mb-14 md:mb-16">
            <div className="lg:col-span-2">
              <div className="bg-brand-bronze/20 rounded-2xl soft-shadow border border-brand-gold/20 p-5 sm:p-6 md:p-8 lg:p-12">
                <ContactForm />
              </div>
            </div>

            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              <div className="bg-brand-bronze/20 rounded-2xl soft-shadow border border-brand-gold/20 p-4 sm:p-5 md:p-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-brand-gold mb-3 sm:mb-4">📍 Location</h3>
                <p className="text-xs sm:text-sm md:text-base text-brand-cream/80">
                  123 Fashion Street<br />
                  City Center<br />
                  City Name, PIN 123456
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex mt-3 text-xs sm:text-sm text-brand-gold hover:text-brand-lightgold transition-smooth font-semibold"
                >
                  View on Map →
                </a>
              </div>

              <div className="bg-brand-bronze/20 rounded-2xl soft-shadow border border-brand-gold/20 p-4 sm:p-5 md:p-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-brand-gold mb-3 sm:mb-4">📞 Phone</h3>
                <div className="space-y-1 sm:space-y-2">
                  <a
                    href="tel:+919876543210"
                    className="block text-xs sm:text-sm md:text-base text-brand-cream/80 hover:text-brand-gold transition-smooth"
                  >
                    +91 98765 43210
                  </a>
                  <a
                    href="tel:+919876543211"
                    className="block text-xs sm:text-sm md:text-base text-brand-cream/80 hover:text-brand-gold transition-smooth"
                  >
                    +91 98765 43211
                  </a>
                </div>
              </div>

              <div className="bg-brand-bronze/20 rounded-2xl soft-shadow border border-brand-gold/20 p-4 sm:p-5 md:p-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-brand-gold mb-3 sm:mb-4">⏰ Hours</h3>
                <div className="space-y-1 sm:space-y-2 text-brand-cream/80 text-xs sm:text-sm">
                  <p>
                    <strong>Mon - Sat:</strong><br />
                    10:00 AM - 7:00 PM
                  </p>
                  <p>
                    <strong>Sunday:</strong><br />
                    2:00 PM - 6:00 PM
                  </p>
                  <p className="pt-2 border-t border-brand-gold/20">
                    <strong>Holidays:</strong><br />
                    Closed
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-brand-gold/20 to-accent-green/20 rounded-2xl soft-shadow border border-brand-gold/30 p-4 sm:p-5 md:p-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-brand-gold mb-3 sm:mb-4">💬 Quick Reply</h3>
                <p className="text-brand-cream/80 text-xs sm:text-sm mb-3 sm:mb-4">
                  For faster response, reach out on WhatsApp
                </p>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-3 sm:px-4 py-2 text-xs sm:text-sm rounded-full font-semibold text-brand-dark bg-gradient-to-r from-brand-gold to-brand-lightgold hover:shadow-glow transition-smooth"
                >
                  💬 Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">✉️</div>
              <h3 className="text-lg sm:text-xl font-serif font-bold text-brand-gold mb-2">Email</h3>
              <a
                href="mailto:contact@bindusstitching.com"
                className="text-xs sm:text-sm md:text-base text-brand-cream/70 hover:text-brand-gold transition-smooth"
              >
                contact@bindusstitching.com
              </a>
            </div>

            <div className="text-center">
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">📱</div>
              <h3 className="text-lg sm:text-xl font-serif font-bold text-brand-gold mb-2">Social Media</h3>
              <div className="flex gap-3 sm:gap-4 justify-center">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl sm:text-2xl hover:scale-110 transition-transform"
                >
                  📷
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl sm:text-2xl hover:scale-110 transition-transform"
                >
                  👍
                </a>
              </div>
            </div>

            <div className="text-center">
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">📅</div>
              <h3 className="text-lg sm:text-xl font-serif font-bold text-brand-gold mb-2">Book Now</h3>
              <Link
                href="/booking"
                className="text-xs sm:text-sm md:text-base text-brand-gold hover:text-brand-lightgold transition-smooth font-semibold"
              >
                Schedule appointment →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
