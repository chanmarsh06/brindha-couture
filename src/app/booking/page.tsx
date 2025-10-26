import { Metadata } from 'next';
import BookingForm from '@/components/BookingForm';

export const metadata: Metadata = {
  title: 'Book Appointment | Bindu\'s Stitching',
  description: 'Schedule your tailoring appointment with Bindu\'s Stitching. Easy booking with flexible dates and times.',
};

export default function BookingPage() {
  return (
    <>
      <section className="gradient-brand py-12 sm:py-14 md:py-16 lg:py-20 mt-14 sm:mt-16">
        <div className="container mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-brand-cream mb-3 sm:mb-4">
            Book Your Appointment
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-brand-cream/80 max-w-2xl">
            Ready to get started? Fill out the form below and we'll confirm your booking details.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-brand-dark">
        <div className="container mx-auto">
          <div className="bg-brand-bronze/20 rounded-2xl soft-shadow border border-brand-gold/20 p-5 sm:p-6 md:p-8 lg:p-12">
            <BookingForm />
          </div>

          <div className="mt-12 sm:mt-14 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📍</div>
              <h3 className="text-lg sm:text-xl font-serif font-bold text-brand-gold mb-2">Visit Us</h3>
              <p className="text-xs sm:text-sm md:text-base text-brand-cream/70">
                123 Fashion Street<br />
                City Center<br />
                PIN: 123456
              </p>
            </div>

            <div className="text-center">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📞</div>
              <h3 className="text-lg sm:text-xl font-serif font-bold text-brand-gold mb-2">Call Us</h3>
              <p className="text-xs sm:text-sm md:text-base text-brand-cream/70">
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
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">⏰</div>
              <h3 className="text-lg sm:text-xl font-serif font-bold text-brand-gold mb-2">Hours</h3>
              <p className="text-xs sm:text-sm md:text-base text-brand-cream/70">
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
