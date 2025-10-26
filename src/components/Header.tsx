'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

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
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="text-3xl font-serif font-bold text-brand-gold group-hover:text-brand-lightgold transition-smooth">
            ✨
          </div>
          <div className="flex flex-col">
            <span className="text-brand-gold font-serif text-lg font-semibold hidden sm:inline">
              Bindu's Stitching
            </span>
            <span className="text-brand-lightgold text-xs hidden sm:inline">Elegant Crafts</span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-brand-cream hover:text-brand-gold transition-smooth relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-gold to-accent-green group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
          <a
            href="https://wa.me/919876543210?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-full bg-gradient-to-r from-brand-gold to-brand-lightgold text-brand-dark font-semibold hover:shadow-glow transition-smooth"
            aria-label="Contact via WhatsApp"
          >
            WhatsApp
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-brand-gold hover:bg-brand-bronze/20 rounded-lg transition-smooth"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <svg
            className="w-6 h-6"
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
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-brand-cream hover:text-brand-gold hover:bg-brand-bronze/20 rounded-lg transition-smooth"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/919876543210?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-4 py-2 rounded-full bg-gradient-to-r from-brand-gold to-brand-lightgold text-brand-dark font-semibold hover:shadow-glow transition-smooth"
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
