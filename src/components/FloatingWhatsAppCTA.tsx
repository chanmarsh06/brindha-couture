'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const FloatingWhatsAppCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappLink = 'https://wa.me/919876543210?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services';

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: 20 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-6 right-6 z-40"
    >
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center"
        aria-label="Contact us on WhatsApp"
      >
        <motion.div
          animate={isMobile ? {} : { y: [0, -8, 0] }}
          transition={isMobile ? {} : { duration: 3, repeat: Infinity }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-gold to-brand-lightgold blur-lg opacity-75"></div>

          <div className="relative w-16 h-16 bg-gradient-to-r from-brand-gold to-brand-lightgold rounded-full flex items-center justify-center soft-shadow hover:scale-110 transition-transform cursor-pointer group">
            <span className="text-3xl">💬</span>

            <motion.div
              className="absolute inset-0 rounded-full border-2 border-brand-gold"
              animate={{ scale: [1, 1.2, 1] }}
              transition={isMobile ? { duration: 0 } : { duration: 2, repeat: Infinity }}
            />
          </div>

          <motion.div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4 whitespace-nowrap bg-brand-dark/90 text-brand-gold text-sm font-semibold px-4 py-2 rounded-full soft-shadow hidden group-hover:block pointer-events-none"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            Chat with us!
          </motion.div>
        </motion.div>
      </a>
    </motion.div>
  );
};

export default FloatingWhatsAppCTA;
