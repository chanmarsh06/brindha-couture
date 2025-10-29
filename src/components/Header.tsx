'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from '@/asset';
import ImageManager from './ImageManager';
import { Button } from '@/components';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

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
        {/* ✅ Logo Section */}
        <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
          <div className="w-10 sm:w-12">
            <ImageManager
              // src={CanvaLogo}
              src={Logo}
              alt="Bindu's Couture Logo"
              className="w-full h-auto object-contain"
            />
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-brand-gold font-serif text-sm md:text-lg font-semibold">
              Bindu&apos;s Couture
            </span>
            <span className="text-brand-lightgold text-xs tracking-wide">
              Elegant Crafts
            </span>
          </div>
        </Link>

        {/* ✅ Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => {
            const isActive = isActiveLink(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                prefetch={true}
                className={`text-sm lg:text-base transition-smooth relative group ${
                  isActive 
                    ? 'text-brand-gold font-semibold' 
                    : 'text-brand-cream hover:text-brand-gold'
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-brand-gold to-accent-green transition-all duration-300 ${
                  isActive 
                    ? 'w-full' 
                    : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            );
          })}

          <Button
            as="link"
            href="https://wa.me/6385555688?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment"
            target="_blank"
            rel="noopener noreferrer"
            size="md"
            ariaLabel="Contact via WhatsApp"
          >
            WhatsApp
          </Button>
        </div>

        {/* ✅ Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-brand-gold hover:bg-brand-bronze/20 rounded-lg transition-smooth flex-shrink-0 focus:outline-none"
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

      {/* ✅ Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-brand-dark/98 border-t border-brand-gold/20"
          >
            <div className="container py-3 space-y-2">
              {navLinks.map((link) => {
                const isActive = isActiveLink(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    prefetch={true}
                    className={`block px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg transition-smooth ${
                      isActive
                        ? 'text-brand-gold bg-brand-gold/10 font-semibold border border-brand-gold/30'
                        : 'text-brand-cream hover:text-brand-gold hover:bg-brand-bronze/20'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Button
                as="link"
                href="https://wa.me/6385555688?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment"
                target="_blank"
                rel="noopener noreferrer"
                size="md"
                className="block w-full text-center"
                onClick={() => setIsOpen(false)}
              >
                WhatsApp
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
