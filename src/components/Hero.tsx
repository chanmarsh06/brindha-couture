'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, cubicBezier } from 'framer-motion';
import GirlImage from "@/asset/bindu/original-saree.png"

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: cubicBezier(0.25, 0.46, 0.45, 0.94) },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: {
      opacity: 1,
      scale: 1.1,
      transition: { duration: 1, ease: cubicBezier(0.25, 0.46, 0.45, 0.94) },
    },
  };

  return (
    <section className="relative w-full min-h-screen gradient-brand overflow-hidden flex items-center py-12 sm:py-16">
      {/* Background Circles */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-8 sm:top-16 left-0 w-40 h-40 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-brand-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-8 sm:bottom-16 right-0 w-48 h-48 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-accent-green/5 rounded-full blur-3xl"></div>
      </div>

      {/* Content Container */}
      <div className="relative container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 px-4 md:px-0">
        {/* Left Text */}
        <motion.div
          className="flex-1 w-full md:w-1/2 flex flex-col justify-center md:justify-start text-center md:text-left space-y-3 sm:space-y-5"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-brand-cream leading-tight"
            variants={itemVariants}
          >
            Exquisite{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-brand-lightgold">
              Tailoring
            </span>{' '}
            Crafted for You
          </motion.h1>

          <motion.p
            className="text-sm sm:text-base md:text-lg text-brand-cream/80 max-w-xl mx-auto md:mx-0"
            variants={itemVariants}
          >
            Transform your vision into reality with our expert tailoring services. From kids' custom dresses to intricate Aari embroidery, we create garments that celebrate your elegance.
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center md:justify-start" variants={itemVariants}>
            <Link
              href="/booking"
              className="inline-flex items-center justify-center px-5 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full font-semibold text-sm md:text-base text-brand-dark bg-gradient-to-r from-brand-gold to-brand-lightgold hover:shadow-glow transition-smooth text-center"
            >
              Book Appointment
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center px-5 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full font-semibold text-sm md:text-base text-brand-cream border-2 border-brand-gold hover:bg-brand-gold/10 transition-smooth text-center"
            >
              View Portfolio
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="flex-1 w-full md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0 relative"
          variants={imageVariants}
        >
          <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] rounded-full overflow-hidden soft-shadow border-4 border-brand-gold/60">
            <Image
              src={GirlImage}
              alt="Master Tailor at Work"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Trusted Badge */}
          <motion.div
            className="absolute bottom-[-12px] right-[-12px] px-3 py-1 rounded-full bg-brand-dark/90 backdrop-blur-sm soft-shadow border border-brand-gold/40"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <p className="text-xs sm:text-sm md:text-base font-semibold text-brand-gold">
              Trusted for Excellence ✨
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
