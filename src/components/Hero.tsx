'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import GirlImage from "@/asset/aari-work-girl.jpg"

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
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section className="relative min-h-screen md:h-screen gradient-brand overflow-hidden pt-14 sm:pt-16 md:pt-20 pb-8 sm:pb-10 md:pb-16 flex flex-col">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-8 sm:top-16 left-0 w-40 h-40 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-brand-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-8 sm:bottom-16 right-0 w-48 h-48 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-accent-green/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto flex-1 flex items-center">
        <motion.div
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6 md:space-y-8">
            <div>
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-brand-cream mb-3 sm:mb-4 leading-tight"
                variants={itemVariants}
              >
                Exquisite
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-brand-lightgold">
                  Tailoring
                </span>
                <br />
                Crafted
                <br />
                for You
              </motion.h1>

              <motion.p
                className="text-sm sm:text-base md:text-lg text-brand-cream/80 max-w-xl leading-relaxed"
                variants={itemVariants}
              >
                Transform your vision into reality with our expert tailoring services. From kids' custom dresses to
                intricate Aari embroidery, we create garments that celebrate your elegance.
              </motion.p>
            </div>

            <motion.div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4" variants={itemVariants}>
              <Link
                href="/booking"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold text-xs sm:text-sm md:text-base text-brand-dark bg-gradient-to-r from-brand-gold to-brand-lightgold hover:shadow-glow transition-smooth text-center"
              >
                Book Appointment
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold text-xs sm:text-sm md:text-base text-brand-cream border-2 border-brand-gold hover:bg-brand-gold/10 transition-smooth text-center"
              >
                View Portfolio
              </Link>
            </motion.div>

            <motion.div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-brand-gold/30" variants={itemVariants}>
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-gold">500+</div>
                <p className="text-xs sm:text-sm text-brand-cream/70 mt-1">Happy Clients</p>
              </div>
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-gold">8+</div>
                <p className="text-xs sm:text-sm text-brand-cream/70 mt-1">Years Expert</p>
              </div>
              <div>
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-gold">100%</div>
                <p className="text-xs sm:text-sm text-brand-cream/70 mt-1">Satisfaction</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={imageVariants} className="relative flex justify-center md:justify-end mt-8 md:mt-0">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-gold/40 to-accent-green/20 blur-2xl"></div>

              <div className="relative w-full h-full rounded-full overflow-hidden soft-shadow border-4 border-brand-gold/60">
                <Image
                  src={GirlImage}
                  alt="Master Tailor at Work"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 224px, (max-width: 768px) 256px, (max-width: 1024px) 288px, 384px"
                />
              </div>

              <motion.div
                className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 md:-bottom-6 md:-right-6 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-brand-dark/90 backdrop-blur-sm soft-shadow border border-brand-gold/40"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <p className="text-xs sm:text-sm md:text-base font-semibold text-brand-gold">
                  Trusted for Excellence ✨
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
