
import { Metadata } from 'next';
import { PageHeader, ContactForm, ContactInfoCard } from '@/components';
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
  const workingHours = (
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
  );

  const phoneNumbers = (
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
  );

  return (
    <>
      <PageHeader
        title="Get in Touch"
        subtitle="Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible."
      />

      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-brand-dark">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {/* Contact Form Section */}
            <div className="lg:col-span-2">
              <div className="bg-brand-bronze/20 rounded-2xl soft-shadow border border-brand-gold/20 p-6 md:p-8 lg:p-12">
                <ContactForm />
              </div>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-6">
              <ContactInfoCard
                icon={<FaMapMarkerAlt className="text-brand-gold" />}
                title="Find Us on Map"
              >
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
              </ContactInfoCard>

              <ContactInfoCard
                icon={<FaPhoneAlt className="text-brand-gold" />}
                title="Phone"
              >
                {phoneNumbers}
              </ContactInfoCard>

              <ContactInfoCard
                icon={<IoTimeOutline className="text-brand-gold" />}
                title="Working Hours"
              >
                {workingHours}
              </ContactInfoCard>

              <ContactInfoCard
                icon={<FaWhatsapp className="text-brand-gold" />}
                title="Quick Reply"
                variant="gradient"
              >
                <a
                  href="https://wa.me/6385555688"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-brand-gold hover:text-brand-lightgold transition-smooth font-semibold"
                >
                  For faster response, reach out on WhatsApp
                </a>
              </ContactInfoCard>
            </div>
          </div>

          {/* Bottom Info Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <HiOutlineMail className="text-4xl sm:text-5xl text-brand-gold mx-auto mb-3" />
              <h3 className="text-lg sm:text-xl font-serif font-bold text-brand-gold mb-2">
                Email
              </h3>
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
              <h3 className="text-lg sm:text-xl font-serif font-bold text-brand-gold mb-2">
                Social Media
              </h3>
              <p className="text-xs text-brand-cream/60">
                Follow us for latest updates!
              </p>
            </div>

            <div>
              <FaRegCalendarAlt className="text-4xl sm:text-5xl text-brand-gold mx-auto mb-3" />
              <h3 className="text-lg sm:text-xl font-serif font-bold text-brand-gold mb-2">
                Book Now
              </h3>
              <a
                href="/booking"
                className="text-sm text-brand-gold hover:text-brand-lightgold transition-smooth font-semibold"
              >
                Schedule appointment →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
