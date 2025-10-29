'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ContactFormData } from '@/types';
import { Button, Input, TextArea } from '@/components';
import { useValidation, commonValidators } from '@/hooks/useValidation';

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
    ],
    subject: [
      {
        validate: commonValidators.required,
        message: 'Subject is required',
      },
    ],
    message: [
      {
        validate: commonValidators.required,
        message: 'Message is required',
      },
    ],
  };

  const { errors, validate, clearError } = useValidation(validationRules);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      clearError(name);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate(formData as unknown as Record<string, unknown>)) return;

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

        <div className="md:col-span-2">
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
        </div>
      </div>

      <Input
        type="text"
        name="subject"
        value={formData.subject}
        onChange={handleInputChange}
        label="Subject"
        placeholder="What is this about?"
        error={errors.subject}
        required
      />

      <TextArea
        name="message"
        value={formData.message}
        onChange={handleInputChange}
        label="Message"
        placeholder="Your message..."
        rows={5}
        error={errors.message}
        required
      />

      <Button
        type="submit"
        disabled={isLoading}
        isLoading={isLoading}
        ariaLabel="Submit contact form"
        className="w-full"
      >
        Send Message
      </Button>

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
