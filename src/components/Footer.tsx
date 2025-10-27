'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        { label: 'Kids Dress Stitching', href: '/services#kids' },
        { label: 'Blouse Stitching', href: '/services#blouse' },
        { label: 'Aari Work', href: '/services#aari' },
        { label: 'Custom Designs', href: '/services' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Portfolio', href: '/portfolio' },
        { label: 'Blog', href: '/blog' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Quick Links',
      links: [
        { label: 'Pricing', href: '/pricing' },
        { label: 'Book Appointment', href: '/booking' },
        { label: 'FAQs', href: '/faqs' },
        { label: 'Privacy Policy', href: '/privacy' },
      ],
    },
  ];

  const socialLinks = [
    { icon: <FaWhatsapp />, href: 'https://wa.me/919876543210', label: 'WhatsApp' },
    { icon: <FaPhoneAlt />, href: 'tel:+919876543210', label: 'Call' },
    { icon: <FaEnvelope />, href: 'mailto:contact@bindusstitching.com', label: 'Email' },
  ];

  return (
    <footer className="bg-brand-dark border-t border-brand-gold/20 mt-10 sm:mt-14 md:mt-20">
      <div className="container mx-auto px-4 py-10 sm:py-12 md:py-16">
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center gap-2 mb-4 justify-center sm:justify-start">
              <div className="text-3xl sm:text-4xl font-serif font-bold text-brand-gold">✨</div>
              <div>
                <div className="text-brand-gold font-serif text-base sm:text-lg font-semibold text-center sm:text-left">
                  Bindu&apos;s Stitching
                </div>
                <p className="text-brand-lightgold text-xs sm:text-sm text-center sm:text-left">
                  Elegant Crafts
                </p>
              </div>
            </Link>
            <p className="text-xs sm:text-sm text-brand-cream/70 text-center sm:text-left leading-relaxed">
              Creating beautiful, custom-tailored garments with precision and passion.
            </p>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section, idx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-center sm:text-left"
            >
              <h4 className="text-brand-gold font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs sm:text-sm text-brand-cream/70 hover:text-brand-gold transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-brand-gold/20 pt-6 sm:pt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center text-center sm:text-left">
            {/* Social Links */}
            <div>
              <h4 className="text-brand-gold font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
                Connect With Us
              </h4>
              <div className="flex gap-5 justify-center sm:justify-start">
                {socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="text-2xl text-brand-cream hover:text-brand-gold hover:scale-110 transition-all duration-300"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Copyright */}
            <div className="text-xs sm:text-sm text-brand-cream/70">
              <p>&copy; {currentYear} Bindu&apos;s Stitching. All rights reserved.</p>
              <p className="mt-1 sm:mt-2">Designed with ❤️ for elegance and craftsmanship.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
