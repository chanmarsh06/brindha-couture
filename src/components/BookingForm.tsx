'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { BookingFormData } from '@/types';
import { Button, Input, TextArea, Select } from '@/components';
import { useValidation, commonValidators } from '@/hooks/useValidation';

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

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const services = ['Kids Dress Stitching', 'Blouse Stitching', 'Aari Work', 'Custom Design'];

  const validationRules = {
    name: [
      {
        validate: commonValidators.required,
        message: 'Name is required',
      },
    ],
    email: [
      {
        validate: commonValidators.required,
        message: 'Email is required',
      },
      {
        validate: commonValidators.email,
        message: 'Please enter a valid email',
      },
    ],
    phone: [
      {
        validate: commonValidators.required,
        message: 'Phone number is required',
      },
      {
        validate: commonValidators.phone,
        message: 'Please enter a valid 10-digit phone number',
      },
    ],
    service: [
      {
        validate: commonValidators.required,
        message: 'Please select a service',
      },
    ],
    date: [
      {
        validate: commonValidators.required,
        message: 'Date is required',
      },
    ],
    time: [
      {
        validate: commonValidators.required,
        message: 'Time is required',
      },
    ],
  };

  const { errors, validate, clearError } = useValidation(validationRules);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      clearError(name);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFile(e.target.files[0]);
    }
  };

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  if (!validate(formData as unknown as Record<string, unknown>)) return;

  setIsLoading(true);

  // 🧾 Prepare WhatsApp message
  const whatsappMessage = `Hi! I'd like to book an appointment.
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.service}
Date: ${formData.date}
Time: ${formData.time}
Notes: ${formData.notes}`;

  try {
    // 📤 Send data to backend
    const res = await fetch('/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const result = await res.json();

    if (result.success) {
      // ✅ Show success UI first
      setSubmitted(true);

      // ⏳ Wait 2 seconds, then redirect to WhatsApp
      setTimeout(() => {
        const encodedMessage = encodeURIComponent(whatsappMessage);
        window.open(`https://wa.me/6385555688?text=${encodedMessage}`, '_blank');
      }, 2000);

      // 🧹 Reset form
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
    } else {
      alert('❌ Something went wrong while submitting your booking. Please try again.');
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    alert('⚠️ Unable to send booking at the moment. Please try again later.');
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
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          label="Full Name"
          placeholder="Your name"
          error={errors.name}
          required
        />

        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          label="Email Address"
          placeholder="your@email.com"
          error={errors.email}
          required
        />

        <Input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          label="Phone Number"
          placeholder="+91 9876543210"
          error={errors.phone}
          required
        />

        <Select
          name="service"
          value={formData.service}
          onChange={handleInputChange}
          label="Select Service"
          error={errors.service}
          options={services.map((service) => ({
            value: service,
            label: service,
          }))}
          required
        />

        <Input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
          label="Preferred Date"
          error={errors.date}
          required
        />

        <Input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleInputChange}
          label="Preferred Time"
          error={errors.time}
          required
        />
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

      <TextArea
        name="notes"
        value={formData.notes}
        onChange={handleInputChange}
        label="Additional Notes"
        placeholder="Any special requirements or design preferences..."
        rows={4}
      />

      <Button
        type="submit"
        disabled={isLoading}
        isLoading={isLoading}
        aria-label="Submit booking form"
        className="w-full"
      >
        Book Appointment
      </Button>

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
