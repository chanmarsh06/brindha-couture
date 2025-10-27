import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import Link from 'next/link';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaRegCalendarAlt,
} from 'react-icons/fa';
import { IoTimeOutline } from 'react-icons/io5';
import { HiOutlineMail } from 'react-icons/hi';

export const metadata: Metadata = {
  title: "Contact Us | Bindu's Stitching",
  description:
    "Get in touch with Bindu's Stitching. We're here to help with your tailoring inquiries.",
};

export default function ContactPage() {
  return (
    <>
      {/* Top Banner */}
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

      {/* Contact Details + Form */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-brand-dark">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {/* Left: Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-brand-bronze/20 rounded-2xl soft-shadow border border-brand-gold/20 p-6 md:p-8 lg:p-12">
                <ContactForm />
              </div>
            </div>

            {/* Right: Info Cards */}
            <div className="space-y-6">
              {/* Map */}
              <div className="bg-brand-bronze/20 rounded-2xl soft-shadow border border-brand-gold/20 p-5">
                <h3 className="flex items-center gap-2 text-lg sm:text-xl md:text-2xl font-serif font-bold text-brand-gold mb-4">
                  <FaMapMarkerAlt className="text-brand-gold" /> Find Us on Map
                </h3>
                <div className="w-full h-64 sm:h-80 md:h-[400px] rounded-xl overflow-hidden border border-brand-gold/30 shadow-md">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.508985418731!2d76.95004887500847!3d10.98802365838502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85ba78a3f54b7%3A0x64ddbc79963ce30!2sBindu's%20Stitching!5e0!3m2!1sen!2sin!4v1698752361234!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-brand-bronze/20 rounded-2xl soft-shadow border border-brand-gold/20 p-5">
                <h3 className="flex items-center gap-2 text-lg sm:text-xl md:text-2xl font-serif font-bold text-brand-gold mb-3">
                  <FaPhoneAlt className="text-brand-gold" /> Phone
                </h3>
                <div className="space-y-1">
                  <a
                    href="tel:+919876543210"
                    className="block text-sm text-brand-cream/80 hover:text-brand-gold transition-smooth"
                  >
                    +91 98765 43210
                  </a>
                  <a
                    href="tel:+919876543211"
                    className="block text-sm text-brand-cream/80 hover:text-brand-gold transition-smooth"
                  >
                    +91 98765 43211
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-brand-bronze/20 rounded-2xl soft-shadow border border-brand-gold/20 p-5">
                <h3 className="flex items-center gap-2 text-lg sm:text-xl md:text-2xl font-serif font-bold text-brand-gold mb-3">
                  <IoTimeOutline className="text-brand-gold" /> Working Hours
                </h3>
                <div className="text-xs sm:text-sm text-brand-cream/80 space-y-2">
                  <p>
                    <strong>Mon - Sat:</strong> 10:00 AM - 7:00 PM
                  </p>
                  <p>
                    <strong>Sunday:</strong> 2:00 PM - 6:00 PM
                  </p>
                  <p className="pt-2 border-t border-brand-gold/20">
                    <strong>Holidays:</strong> Closed
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="bg-gradient-to-br from-brand-gold/20 to-accent-green/20 rounded-2xl soft-shadow border border-brand-gold/30 p-5">
                <h3 className="flex items-center gap-2 text-lg sm:text-xl md:text-2xl font-serif font-bold text-brand-gold mb-3">
                  <FaWhatsapp className="text-brand-gold" /> Quick Reply
                </h3>
                <p className="text-brand-cream/80 text-xs sm:text-sm mb-3">
                  For faster response, reach out on WhatsApp
                </p>
                <a
                  href="https://wa.me/6385555688"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-4 py-2 text-sm rounded-full font-semibold text-brand-dark bg-gradient-to-r from-brand-gold to-brand-lightgold hover:shadow-glow transition-smooth"
                >
                  <FaWhatsapp className="text-brand-dark text-lg" /> Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <HiOutlineMail className="text-4xl sm:text-5xl text-brand-gold mx-auto mb-3" />
              <h3 className="text-lg sm:text-xl font-serif font-bold text-brand-gold mb-2">Email</h3>
              <a
                href="mailto:contact@bindusstitching.com"
                className="text-sm text-brand-cream/70 hover:text-brand-gold transition-smooth"
              >
                contact@bindusstitching.com
              </a>
            </div>

            <div>
              <div className="flex justify-center gap-4 mb-3">
                <FaInstagram className="text-3xl text-brand-gold hover:text-brand-lightgold transition-transform hover:scale-110" />
                <FaFacebookF className="text-3xl text-brand-gold hover:text-brand-lightgold transition-transform hover:scale-110" />
              </div>
              <h3 className="text-lg sm:text-xl font-serif font-bold text-brand-gold mb-2">Social Media</h3>
              <p className="text-xs text-brand-cream/60">Follow us for latest updates!</p>
            </div>

            <div>
              <FaRegCalendarAlt className="text-4xl sm:text-5xl text-brand-gold mx-auto mb-3" />
              <h3 className="text-lg sm:text-xl font-serif font-bold text-brand-gold mb-2">Book Now</h3>
              <Link
                href="/booking"
                className="text-sm text-brand-gold hover:text-brand-lightgold transition-smooth font-semibold"
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
