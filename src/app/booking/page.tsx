import { Metadata } from 'next';
import BookingForm from '@/components/BookingForm';

export const metadata: Metadata = {
  title: 'Book Appointment | Bindu\'s Stitching',
  description: 'Schedule your tailoring appointment with Bindu\'s Stitching. Easy booking with flexible dates and times.',
};

export default function BookingPage() {
  return (
    <>
      <section className="gradient-brand py-12 md:py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-brand-cream mb-4">
            Book Your Appointment
          </h1>
          <p className="text-lg text-brand-cream/80 max-w-2xl">
            Ready to get started? Fill out the form below and we'll confirm your booking details.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-brand-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-bronze/20 rounded-2xl soft-shadow border border-brand-gold/20 p-8 md:p-12">
            <BookingForm />
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-serif font-bold text-brand-gold mb-2">Visit Us</h3>
              <p className="text-brand-cream/70">
                123 Fashion Street<br />
                City Center<br />
                PIN: 123456
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-serif font-bold text-brand-gold mb-2">Call Us</h3>
              <p className="text-brand-cream/70">
                <a href="tel:+919876543210" className="hover:text-brand-gold transition-smooth">
                  +91 98765 43210
                </a>
                <br />
                <a href="tel:+919876543211" className="hover:text-brand-gold transition-smooth">
                  +91 98765 43211
                </a>
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="text-xl font-serif font-bold text-brand-gold mb-2">Hours</h3>
              <p className="text-brand-cream/70">
                Mon - Sat: 10 AM - 7 PM<br />
                Sunday: 2 PM - 6 PM<br />
                Closed on Holidays
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
