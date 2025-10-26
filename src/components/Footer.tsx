'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

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
    { icon: '📱', href: 'https://wa.me/919876543210', label: 'WhatsApp' },
    { icon: '📞', href: 'tel:+919876543210', label: 'Call' },
    { icon: '📧', href: 'mailto:contact@bindusstitching.com', label: 'Email' },
  ];

  return (
    <footer className="bg-brand-dark border-t border-brand-gold/20 mt-12 sm:mt-16 md:mt-20">
      <div className="container py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center gap-1 sm:gap-2 mb-3 sm:mb-4">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-brand-gold">✨</div>
              <div>
                <div className="text-brand-gold font-serif text-sm sm:text-lg font-semibold">
                  Bindu's Stitching
                </div>
                <p className="text-brand-lightgold text-xs sm:text-sm">Elegant Crafts</p>
              </div>
            </Link>
            <p className="text-xs sm:text-sm text-brand-cream/70">
              Creating beautiful, custom-tailored garments with precision and passion.
            </p>
          </motion.div>

          {footerSections.map((section, idx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <h4 className="text-brand-gold font-semibold mb-3 sm:mb-4 text-xs sm:text-base">{section.title}</h4>
              <ul className="space-y-1 sm:space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs sm:text-sm text-brand-cream/70 hover:text-brand-gold transition-smooth"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-brand-gold/20 pt-6 sm:pt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 items-center text-center sm:text-left">
            <div>
              <h4 className="text-brand-gold font-semibold mb-3 sm:mb-4 text-xs sm:text-base">Connect With Us</h4>
              <div className="flex gap-3 sm:gap-4 justify-center sm:justify-start">
                {socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl sm:text-2xl hover:scale-110 transition-transform"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
            <div className="text-xs sm:text-sm text-brand-cream/70">
              <p>
                &copy; {currentYear} Bindu's Stitching. All rights reserved.
              </p>
              <p className="mt-1 sm:mt-2">Designed with ❤️ for elegance and craftsmanship.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
