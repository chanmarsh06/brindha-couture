'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Brand from "@/asset/brindha-couture-logo.png"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-brand-dark/95 backdrop-blur-md soft-shadow">
      <nav className="container py-3 sm:py-4 flex justify-between items-center">
        {/* ✅ Fixed: Removed nested <Link> */}
        <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
          {/* Logo Image */}
          <div className="w-10 sm:w-12">
            <img src={Brand.src} alt="Bindu's Stitching Logo" className="w-full h-auto" />
          </div>

          {/* Branding Text */}
          <div className="hidden sm:flex flex-col">
            <span className="text-brand-gold font-serif text-sm md:text-lg font-semibold">
              Bindu's Couture
            </span>
            <span className="text-brand-lightgold text-xs">
              Elegant Crafts
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              prefetch={true}
              className="text-sm lg:text-base text-brand-cream hover:text-brand-gold transition-smooth relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-gold to-accent-green group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
          <a
            href="https://wa.me/919876543210?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 lg:px-6 py-2 rounded-full bg-gradient-to-r from-brand-gold to-brand-lightgold text-brand-dark text-sm lg:text-base font-semibold hover:shadow-glow transition-smooth"
            aria-label="Contact via WhatsApp"
          >
            WhatsApp
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-brand-gold hover:bg-brand-bronze/20 rounded-lg transition-smooth flex-shrink-0"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-brand-dark/98 border-t border-brand-gold/20"
        >
          <div className="container py-3 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                prefetch={true}
                className="block px-3 sm:px-4 py-2 text-sm sm:text-base text-brand-cream hover:text-brand-gold hover:bg-brand-bronze/20 rounded-lg transition-smooth"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/919876543210?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-3 sm:px-4 py-2 text-sm sm:text-base rounded-full bg-gradient-to-r from-brand-gold to-brand-lightgold text-brand-dark font-semibold hover:shadow-glow transition-smooth"
              onClick={() => setIsOpen(false)}
            >
              WhatsApp
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
