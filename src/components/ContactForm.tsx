'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ContactFormData } from '@/types';

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = 'Please enter a valid email';

    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const whatsappMessage = `New Contact Request:\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSubject: ${formData.subject}\nMessage: ${formData.message}`;

      const encodedMessage = encodeURIComponent(whatsappMessage);
      window.open(
        `https://wa.me/919876543210?text=${encodedMessage}`,
        '_blank'
      );

      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });

      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div>
          <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-brand-gold mb-1 sm:mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-brand-dark border text-xs sm:text-base ${
              errors.name ? 'border-red-500' : 'border-brand-gold/30'
            } text-brand-cream placeholder-brand-cream/40 focus:outline-none focus:border-brand-gold transition-smooth`}
            placeholder="Your name"
            aria-label="Full name"
            required
          />
          {errors.name && (
            <p className="text-red-400 text-xs mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-brand-gold mb-1 sm:mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-brand-dark border text-xs sm:text-base ${
              errors.email ? 'border-red-500' : 'border-brand-gold/30'
            } text-brand-cream placeholder-brand-cream/40 focus:outline-none focus:border-brand-gold transition-smooth`}
            placeholder="your@email.com"
            aria-label="Email address"
            required
          />
          {errors.email && (
            <p className="text-red-400 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        <div className="md:col-span-2">
          <label htmlFor="phone" className="block text-xs sm:text-sm font-semibold text-brand-gold mb-1 sm:mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-brand-dark border text-xs sm:text-base ${
              errors.phone ? 'border-red-500' : 'border-brand-gold/30'
            } text-brand-cream placeholder-brand-cream/40 focus:outline-none focus:border-brand-gold transition-smooth`}
            placeholder="+91 9876543210"
            aria-label="Phone number"
            required
          />
          {errors.phone && (
            <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-xs sm:text-sm font-semibold text-brand-gold mb-1 sm:mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-brand-dark border text-xs sm:text-base ${
            errors.subject ? 'border-red-500' : 'border-brand-gold/30'
          } text-brand-cream placeholder-brand-cream/40 focus:outline-none focus:border-brand-gold transition-smooth`}
          placeholder="What is this about?"
          aria-label="Subject"
          required
        />
        {errors.subject && (
          <p className="text-red-400 text-xs mt-1">{errors.subject}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-brand-gold mb-1 sm:mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-brand-dark border text-xs sm:text-base ${
            errors.message ? 'border-red-500' : 'border-brand-gold/30'
          } text-brand-cream placeholder-brand-cream/40 focus:outline-none focus:border-brand-gold transition-smooth resize-none`}
          placeholder="Your message..."
          rows={5}
          aria-label="Message"
          required
        />
        {errors.message && (
          <p className="text-red-400 text-xs mt-1">{errors.message}</p>
        )}
      </div>

      <motion.button
        type="submit"
        disabled={isLoading}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-2 sm:py-3 text-xs sm:text-base rounded-full font-semibold bg-gradient-to-r from-brand-gold to-brand-lightgold text-brand-dark hover:shadow-glow transition-smooth disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Submit contact form"
      >
        {isLoading ? 'Sending...' : 'Send Message'}
      </motion.button>

      {submitted && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-400 text-center"
        >
          ✓ Thank you! Your message has been sent. We'll get back to you soon!
        </motion.div>
      )}
    </motion.form>
  );
};

export default ContactForm;
