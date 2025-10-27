'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // ✅ WhatsApp official icon

const FloatingWhatsAppCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 300);
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const whatsappLink =
    'https://wa.me/6385555688?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services';

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: 20 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40"
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
          {/* Glowing background */}
          <div className="absolute inset-0 rounded-full bg-green-400 blur-lg opacity-60"></div>

          {/* WhatsApp Circle Button */}
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full flex items-center justify-center soft-shadow hover:scale-110 transition-transform cursor-pointer group">
            <FaWhatsapp
              className="text-white group-hover:scale-110 transition-transform"
              size={30}
            />

            <motion.div
              className="absolute inset-0 rounded-full border-2 border-white/70"
              animate={{ scale: [1, 1.2, 1] }}
              transition={isMobile ? { duration: 0 } : { duration: 2, repeat: Infinity }}
            />
          </div>

          {/* Hover Tooltip */}
          <motion.div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-3 sm:translate-y-4 whitespace-nowrap bg-[#25D366]/90 text-white text-xs sm:text-sm font-semibold px-3 py-1 sm:py-2 rounded-full shadow-md hidden group-hover:block pointer-events-none"
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
