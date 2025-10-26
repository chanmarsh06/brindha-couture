'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { BookingFormData } from '@/types';

const BookingForm = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const services = ['Kids Dress Stitching', 'Blouse Stitching', 'Aari Work', 'Custom Design'];

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = 'Please enter a valid email';

    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, '')))
      newErrors.phone = 'Please enter a valid 10-digit phone number';

    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.time) newErrors.time = 'Time is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const data = new FormData();
      data.append('name', formData.name);
      data.append('email', formData.email);
      data.append('phone', formData.phone);
      data.append('service', formData.service);
      data.append('date', formData.date);
      data.append('time', formData.time);
      data.append('notes', formData.notes);
      if (file) {
        data.append('measurements', file);
      }

      const whatsappMessage = `Hi! I'd like to book an appointment.\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\nDate: ${formData.date}\nTime: ${formData.time}\nNotes: ${formData.notes}`;

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
        service: '',
        date: '',
        time: '',
        notes: '',
      });
      setFile(null);

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

        <div>
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

        <div>
          <label htmlFor="service" className="block text-xs sm:text-sm font-semibold text-brand-gold mb-1 sm:mb-2">
            Select Service
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleInputChange}
            className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-brand-dark border text-xs sm:text-base ${
              errors.service ? 'border-red-500' : 'border-brand-gold/30'
            } text-brand-cream focus:outline-none focus:border-brand-gold transition-smooth`}
            aria-label="Service selection"
            required
          >
            <option value="">Choose a service...</option>
            {services.map((service) => (
              <option key={service} value={service} className="bg-brand-dark text-xs sm:text-base">
                {service}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="text-red-400 text-xs mt-1">{errors.service}</p>
          )}
        </div>

        <div>
          <label htmlFor="date" className="block text-xs sm:text-sm font-semibold text-brand-gold mb-1 sm:mb-2">
            Preferred Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-brand-dark border text-xs sm:text-base ${
              errors.date ? 'border-red-500' : 'border-brand-gold/30'
            } text-brand-cream focus:outline-none focus:border-brand-gold transition-smooth`}
            aria-label="Preferred date"
            required
          />
          {errors.date && (
            <p className="text-red-400 text-xs mt-1">{errors.date}</p>
          )}
        </div>

        <div>
          <label htmlFor="time" className="block text-xs sm:text-sm font-semibold text-brand-gold mb-1 sm:mb-2">
            Preferred Time
          </label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleInputChange}
            className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-brand-dark border text-xs sm:text-base ${
              errors.time ? 'border-red-500' : 'border-brand-gold/30'
            } text-brand-cream focus:outline-none focus:border-brand-gold transition-smooth`}
            aria-label="Preferred time"
            required
          />
          {errors.time && (
            <p className="text-red-400 text-xs mt-1">{errors.time}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="file" className="block text-xs sm:text-sm font-semibold text-brand-gold mb-1 sm:mb-2">
          Upload Measurements (Optional)
        </label>
        <label
          htmlFor="file"
          className="flex items-center justify-center w-full px-3 sm:px-4 py-4 sm:py-6 rounded-lg bg-brand-dark border-2 border-dashed border-brand-gold/50 cursor-pointer hover:border-brand-gold transition-smooth"
        >
          <div className="text-center">
            <p className="text-xs sm:text-sm text-brand-cream/70">
              {file ? `📎 ${file.name.substring(0, 20)}...` : '📁 Click to upload or drag'}
            </p>
            <p className="text-brand-cream/50 text-xs mt-1">PDF, PNG, JPG (Max 5MB)</p>
          </div>
          <input
            type="file"
            id="file"
            onChange={handleFileChange}
            accept=".pdf,.png,.jpg,.jpeg"
            className="hidden"
            aria-label="Upload measurements file"
          />
        </label>
      </div>

      <div>
        <label htmlFor="notes" className="block text-xs sm:text-sm font-semibold text-brand-gold mb-1 sm:mb-2">
          Additional Notes
        </label>
        <textarea
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleInputChange}
          className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-brand-dark border border-brand-gold/30 text-xs sm:text-base text-brand-cream placeholder-brand-cream/40 focus:outline-none focus:border-brand-gold transition-smooth resize-none"
          placeholder="Any special requirements or design preferences..."
          rows={4}
          aria-label="Additional notes"
        />
      </div>

      <motion.button
        type="submit"
        disabled={isLoading}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-2 sm:py-3 text-xs sm:text-base rounded-full font-semibold bg-gradient-to-r from-brand-gold to-brand-lightgold text-brand-dark hover:shadow-glow transition-smooth disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Submit booking form"
      >
        {isLoading ? 'Submitting...' : 'Book Appointment'}
      </motion.button>

      {submitted && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-400 text-center"
        >
          ✓ Thank you! Redirecting to WhatsApp to confirm your booking...
        </motion.div>
      )}
    </motion.form>
  );
};

export default BookingForm;
