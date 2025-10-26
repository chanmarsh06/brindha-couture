# Bindu's Stitching - Custom Tailoring Website

A modern, responsive Next.js website for a local tailoring business specializing in kids' dress stitching, blouse tailoring, and Aari embroidery work.

## Features

✨ **Modern Design**
- Elegant dark theme with gold gradient accents
- Warm color palette inspired by traditional Indian fashion
- Fully responsive mobile-first design
- Smooth animations with Framer Motion

🎨 **Components**
- Sticky responsive header with mobile navigation
- Hero section with circular image and text
- Services grid with detailed cards
- Portfolio gallery with lightbox
- Testimonials carousel
- Pricing cards with highlighted tiers
- Booking form with validation and file upload
- Contact form with WhatsApp integration
- Floating WhatsApp CTA button

📱 **Pages**
- **Home**: Hero, services showcase, testimonials, CTA
- **About**: Business story, values, why choose us
- **Services**: Detailed service descriptions and features
- **Portfolio**: Gallery with category filtering and lightbox
- **Pricing**: Transparent pricing tiers and FAQs
- **Booking**: Appointment booking with form validation
- **Blog**: Articles and resources
- **Contact**: Contact form and location info

🔍 **SEO & Performance**
- Complete SEO meta tags
- JSON-LD LocalBusiness schema
- Open Graph tags for social sharing
- Optimized images with `next/image`
- Lazy loading and responsive srcsets
- Semantic HTML and accessibility features
- Keyboard navigation support

🎯 **Integrations**
- Click-to-call functionality
- WhatsApp integration for bookings and contact
- File upload for measurements
- Form validation and error handling

## Tech Stack

- **Framework**: Next.js 16 (App Router, TypeScript)
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **UI**: Semantic HTML, ARIA labels
- **Deployment**: Vercel Ready

## Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn installed

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd my-stitching-site
```

2. **Install dependencies**
```bash
npm install
```

3. **Add placeholder images** (optional for development)
Create the images directory structure:
```bash
mkdir -p public/images/{services,portfolio,testimonials,blog}
```

4. **Run the development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

## Configuration

### Update Business Information

Edit the following files to customize with your business details:

**`src/components/Header.tsx`** (line 11)
- WhatsApp phone number

**`src/app/booking/page.tsx`** (lines 48-63)
- Business address and phone numbers
- Operating hours

**`src/lib/seo.ts`**
- Business name, description, address
- Coordinates for Google Maps
- Contact information

**`src/components/Footer.tsx`**
- Social media links
- Contact information

**`src/data/services.ts`**
- Service descriptions and pricing

**`src/data/portfolio.ts`**
- Portfolio items and descriptions

**`src/data/testimonials.ts`**
- Customer testimonials

### Color Customization

All brand colors are defined in `src/app/globals.css` as CSS variables:
```css
:root {
  --brand-dark: #1A130E;
  --brand-bronze: #7B5A2D;
  --brand-gold: #D4AF37;
  --brand-lightgold: #E8C88A;
  --brand-cream: #F5EAD6;
  --accent-green: #0FA678;
}
```

Colors are also available as Tailwind classes:
- `bg-brand-dark`, `text-brand-gold`, etc.

## Project Structure

```
src/
├── app/                 # Next.js app router pages
│   ├── about/          # About page
│   ├── blog/           # Blog listing
│   ├── booking/        # Appointment booking
│   ├── contact/        # Contact page
│   ├── layout.tsx      # Root layout with SEO
│   ├── page.tsx        # Home page
│   ├── pricing/        # Pricing page
│   ├── portfolio/      # Portfolio gallery
│   ├── services/       # Services page
│   └── globals.css     # Global styles & CSS variables
├── components/         # Reusable React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── ServiceCard.tsx
│   ├── ServicesGrid.tsx
│   ├── PortfolioGallery.tsx
│   ├── TestimonialsCarousel.tsx
│   ├── PricingCards.tsx
│   ├── BookingForm.tsx
│   ├── ContactForm.tsx
│   └── FloatingWhatsAppCTA.tsx
├── data/              # Static content data
│   ├── services.ts
│   ├── portfolio.ts
│   ├── testimonials.ts
│   ├── pricing.ts
│   └── blog.ts
├── lib/               # Utility functions
│   └── seo.ts        # SEO and schema utilities
└── types/            # TypeScript type definitions
    └── index.ts
```

## Building for Production

### Build the project
```bash
npm run build
```

This creates an optimized production build in `.next/`

### Run production build locally
```bash
npm start
```

### Lint code
```bash
npm run lint
```

## Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy this Next.js site is using [Vercel](https://vercel.com/), made by the creators of Next.js.

1. **Push to GitHub**
```bash
git push origin main
```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect Next.js and configure build settings

3. **Deploy**
   - Click "Deploy" button
   - Your site will be live at a Vercel URL

4. **Custom Domain** (Optional)
   - Add your domain in Vercel project settings
   - Update DNS records with Vercel's nameservers

### Environment Variables (if needed)
Create a `.env.local` file for development:
```env
NEXT_PUBLIC_WHATSAPP_NUMBER=919876543210
NEXT_PUBLIC_BUSINESS_EMAIL=contact@bindusstitching.com
```

### Alternative Deployment Options

**Netlify**
```bash
npm run build
# Deploy the `out` directory to Netlify
```

**Docker**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## Image Setup

Place images in the `public/images/` directory:

```
public/images/
├── hero.jpg                 # Hero section image
├── about.jpg               # About page image
├── services/
│   ├── kids-dress.jpg
│   ├── blouse.jpg
│   └── aari.jpg
├── portfolio/
│   ├── kids-1.jpg
│   ├── kids-2.jpg
│   ├── blouse-1.jpg
│   ├── blouse-2.jpg
│   ├── aari-1.jpg
│   └── aari-2.jpg
├── testimonials/
│   ├── priya.jpg
│   ├── anisha.jpg
│   ├── meera.jpg
│   ├── kavya.jpg
│   └── divya.jpg
└── blog/
    ├── measurements.jpg
    ├── aari.jpg
    ├── fabric-care.jpg
    ├── blouses.jpg
    ├── kids-fashion.jpg
    └── fabrics.jpg
```

Recommended image formats:
- **JPG**: Hero images, portfolio items (optimized)
- **PNG**: Icons, logos
- **WebP**: For better compression (Next.js handles conversion)

Use online tools like TinyPNG or ImageOptim to compress images before uploading.

## Accessibility

✅ **Implemented Features**
- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus states on buttons and links
- Color contrast compliance
- Alt text for all images
- Form validation and error messages
- Reduced motion preferences respected

## Performance Optimizations

- Image optimization with `next/image`
- Lazy loading for gallery images
- CSS-in-JS with Tailwind (no unused CSS)
- Code splitting and dynamic imports
- Minified production builds
- Mobile-first responsive design

## Lighthouse Scores

Expected performance metrics:
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 95+

## Customization Tips

### Adding New Services
Edit `src/data/services.ts` and add to the services array

### Adding Portfolio Items
Edit `src/data/portfolio.ts` and add to the portfolioItems array

### Changing Theme Colors
Update CSS variables in `src/app/globals.css`

### Modifying Typography
Edit font settings in `tailwind.config.ts`

### Adding Blog Posts
Edit `src/data/blog.ts` and create blog post pages

## Maintenance

### Regular Updates
- Keep Next.js and dependencies updated
- Monitor Lighthouse scores
- Test forms and integrations periodically
- Update business information as needed

### Analytics Setup (Optional)
Add Google Analytics or similar:
```tsx
// In src/app/layout.tsx
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID" />
<script dangerouslySetInnerHTML={{__html: `...`}} />
```

## Support & Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [TypeScript](https://www.typescriptlang.org)

## License

This project is proprietary. All rights reserved © Bindu's Stitching

## Contact

For questions or support:
- 📞 +91 98765 43210
- 📧 contact@bindusstitching.com
- 💬 [WhatsApp](https://wa.me/919876543210)
