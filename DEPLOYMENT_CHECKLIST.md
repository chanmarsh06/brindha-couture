# 🚀 Deployment Checklist

Complete this checklist before deploying your site to production.

## 📋 Content & Configuration

### Business Information
- [ ] WhatsApp number updated in:
  - [ ] `src/components/Header.tsx` (line 11)
  - [ ] `src/components/FloatingWhatsAppCTA.tsx` (line 15)
  - [ ] `src/components/Footer.tsx`
  - [ ] `src/lib/seo.ts` (line 8)
  - [ ] `src/app/booking/page.tsx` (line 62)

- [ ] Business address updated in:
  - [ ] `src/app/booking/page.tsx` (lines 48-50)
  - [ ] `src/lib/seo.ts` (address field)

- [ ] Phone numbers updated in:
  - [ ] `src/app/booking/page.tsx` (lines 51-59)
  - [ ] `src/app/contact/page.tsx`

- [ ] Operating hours updated in:
  - [ ] `src/app/booking/page.tsx` (lines 60-67)
  - [ ] `src/app/contact/page.tsx`

- [ ] Email address updated in:
  - [ ] `src/lib/seo.ts` (line 9)
  - [ ] `src/app/contact/page.tsx` (line 71)
  - [ ] `src/components/Footer.tsx`

- [ ] Social media links updated in:
  - [ ] `src/components/Footer.tsx`
  - [ ] `src/app/contact/page.tsx`

### Content Files
- [ ] Services customized (`src/data/services.ts`)
  - [ ] Service names match your offerings
  - [ ] Descriptions are accurate
  - [ ] Prices are correct
  - [ ] Features listed properly

- [ ] Portfolio items updated (`src/data/portfolio.ts`)
  - [ ] Portfolio titles updated
  - [ ] Categories correct
  - [ ] Descriptions accurate
  - [ ] Image paths correct

- [ ] Testimonials added (`src/data/testimonials.ts`)
  - [ ] Real customer quotes
  - [ ] Accurate ratings
  - [ ] Names and roles correct

- [ ] Pricing tiers configured (`src/data/pricing.ts`)
  - [ ] Prices accurate
  - [ ] Features listed correctly
  - [ ] Popular tier highlighted

- [ ] Blog posts created (`src/data/blog.ts`)
  - [ ] Article titles relevant
  - [ ] Content descriptions accurate
  - [ ] Categories assigned
  - [ ] Dates current

### Colors & Branding
- [ ] Brand colors customized (if needed) in `src/app/globals.css`
  - [ ] `--brand-dark` set correctly
  - [ ] `--brand-gold` matches branding
  - [ ] All other colors appropriate
- [ ] Logo/brand text updated in `src/components/Header.tsx` if needed

## 📸 Images

### Required Images Present
- [ ] `public/images/hero.jpg` (circular profile/work image)
- [ ] `public/images/about.jpg` (about page image)

### Services Images
- [ ] `public/images/services/kids-dress.jpg`
- [ ] `public/images/services/blouse.jpg`
- [ ] `public/images/services/aari.jpg`

### Portfolio Images
- [ ] `public/images/portfolio/kids-1.jpg`
- [ ] `public/images/portfolio/kids-2.jpg`
- [ ] `public/images/portfolio/blouse-1.jpg`
- [ ] `public/images/portfolio/blouse-2.jpg`
- [ ] `public/images/portfolio/aari-1.jpg`
- [ ] `public/images/portfolio/aari-2.jpg`

### Testimonials Images
- [ ] `public/images/testimonials/priya.jpg`
- [ ] `public/images/testimonials/anisha.jpg`
- [ ] `public/images/testimonials/meera.jpg`
- [ ] `public/images/testimonials/kavya.jpg`
- [ ] `public/images/testimonials/divya.jpg`

### Blog Images
- [ ] `public/images/blog/measurements.jpg`
- [ ] `public/images/blog/aari.jpg`
- [ ] `public/images/blog/fabric-care.jpg`
- [ ] `public/images/blog/blouses.jpg`
- [ ] `public/images/blog/kids-fashion.jpg`
- [ ] `public/images/blog/fabrics.jpg`

### Image Quality
- [ ] All images optimized for web (compressed)
- [ ] Images correctly named and sized
- [ ] No missing alt text in data files
- [ ] Image paths in components match file locations

## 🔗 Links & Integrations

### Navigation Links
- [ ] All header navigation links working
- [ ] Footer links functional
- [ ] Mobile menu links accessible
- [ ] Back links working properly

### Forms
- [ ] Booking form validates correctly
- [ ] Contact form validates correctly
- [ ] File upload working (measurements form)
- [ ] WhatsApp redirects working
- [ ] Error messages display properly

### Call-to-Action Buttons
- [ ] "Book Appointment" links to `/booking`
- [ ] "Contact Us" links to `/contact`
- [ ] "WhatsApp" links work on mobile
- [ ] Phone links use `tel:` protocol
- [ ] Email links use `mailto:` protocol

### External Links
- [ ] Instagram/social media links correct
- [ ] All external links open in new tab
- [ ] No 404 errors on links
- [ ] Links have proper rel attributes

## 🎨 Visual & UX

### Responsive Design
- [ ] Mobile (320px+) - all layouts work
- [ ] Tablet (768px+) - layouts optimized
- [ ] Desktop (1024px+) - full experience
- [ ] No horizontal scrolling on mobile
- [ ] Touch-friendly buttons (>44px height)

### Animations
- [ ] Framer Motion animations smooth
- [ ] No jarring transitions
- [ ] Animations disabled on `prefers-reduced-motion`
- [ ] Lightbox opens/closes smoothly
- [ ] Carousel transitions properly

### Colors & Contrast
- [ ] Text readable on all backgrounds
- [ ] WCAG AA contrast standards met
- [ ] Color-only information has alternatives
- [ ] Gold/cream colors display correctly

### Typography
- [ ] Fonts loading correctly
- [ ] Font sizes readable on mobile
- [ ] Line spacing appropriate
- [ ] Headings formatted correctly

## ♿ Accessibility

### Semantic HTML
- [ ] Proper use of `<main>`, `<nav>`, `<footer>`
- [ ] Headings in correct order
- [ ] Forms properly labeled
- [ ] Links have descriptive text

### ARIA Labels
- [ ] Buttons have aria-label
- [ ] Form inputs labeled
- [ ] Mobile menu has aria-expanded
- [ ] Images have alt text

### Keyboard Navigation
- [ ] Tab order logical
- [ ] All buttons focusable
- [ ] Focus visible on all elements
- [ ] Can close modals with Escape
- [ ] No keyboard traps

### Screen Reader
- [ ] Tested with screen reader
- [ ] Form labels read correctly
- [ ] Buttons announce purpose
- [ ] Images described properly

## 🔍 SEO

### Meta Tags
- [ ] Title tags set for all pages
- [ ] Meta descriptions accurate
- [ ] OG tags for social sharing
- [ ] Meta viewport set
- [ ] Charset defined

### JSON-LD Schema
- [ ] LocalBusiness schema valid
- [ ] Organization schema valid
- [ ] Testing with Schema.org validator

### Structured Data
- [ ] Phone number marked up
- [ ] Address marked up
- [ ] Opening hours marked up
- [ ] Service offerings marked up

### Sitemaps & Robots
- [ ] All pages indexable
- [ ] No `noindex` accidentally set
- [ ] robots.txt allows crawling (if using)

## ⚡ Performance

### Build
- [ ] `npm run build` completes successfully
- [ ] No build errors or warnings
- [ ] Bundle size reasonable
- [ ] All images optimized

### Image Optimization
- [ ] Images use next/image component
- [ ] Lazy loading enabled
- [ ] Responsive srcsets working
- [ ] WebP format supported

### Loading
- [ ] Pages load in under 3 seconds
- [ ] No 404 errors in console
- [ ] No console errors or warnings
- [ ] Lighthouse score 90+

### Network
- [ ] CSS properly minified
- [ ] JavaScript properly minified
- [ ] No unused CSS/JS
- [ ] Assets cached properly

## 🔐 Security

### Content Security
- [ ] No hardcoded secrets/API keys
- [ ] External scripts safe
- [ ] Links have proper rel attributes
- [ ] Forms properly validated

### Environment Variables
- [ ] .env.local not committed
- [ ] Public variables prefixed with NEXT_PUBLIC_
- [ ] Sensitive data never exposed

### HTTPS
- [ ] Site runs over HTTPS
- [ ] All external resources over HTTPS
- [ ] Security headers set

## 📱 Mobile Specific

### Touch Experience
- [ ] Buttons large enough to tap
- [ ] No hover-only interactions
- [ ] Form inputs properly sized
- [ ] Links have adequate spacing

### Mobile Menu
- [ ] Hamburger menu works
- [ ] Mobile menu closes when clicking link
- [ ] Menu doesn't block important content

### Mobile Forms
- [ ] Form fields properly sized
- [ ] Keyboard doesn't hide inputs
- [ ] File upload works on mobile
- [ ] Date/time pickers work

### Mobile Images
- [ ] Images scale properly
- [ ] No stretched images
- [ ] Load fast on mobile
- [ ] Display correctly at all sizes

## 🚀 Deployment (Vercel)

### Pre-Deployment
- [ ] Code pushed to GitHub
- [ ] All files committed (no untracked)
- [ ] README reviewed
- [ ] QUICK_START.md reviewed

### Vercel Setup
- [ ] Project created on Vercel
- [ ] GitHub repo connected
- [ ] Build settings correct
- - [ ] Framework: Next.js
  - [ ] Build command: `npm run build`
  - [ ] Output directory: `.next`

### Environment Variables (if any)
- [ ] Set in Vercel dashboard
- [ ] Match local .env.local
- [ ] Verified they're being used

### First Deployment
- [ ] Vercel deployment succeeds
- [ ] Preview URL accessible
- [ ] All pages load correctly
- [ ] Forms functional
- [ ] Images display properly
- [ ] No 404 errors

### Custom Domain (if applicable)
- [ ] Domain registered
- [ ] DNS records updated
- [ ] SSL certificate active
- [ ] www redirect configured
- [ ] Domain verified in Vercel

### Post-Deployment
- [ ] Site accessible via domain
- [ ] HTTPS working
- [ ] All pages load
- [ ] Forms working
- [ ] WhatsApp links functional
- [ ] Images optimized

## ✅ Final Checks

### Browser Testing
- [ ] Chrome - Desktop & Mobile
- [ ] Firefox - Desktop & Mobile
- [ ] Safari - Desktop & Mobile
- [ ] Edge - Desktop

### Device Testing
- [ ] Phone (iOS)
- [ ] Phone (Android)
- [ ] Tablet (iPad)
- [ ] Desktop monitors (various sizes)

### Features Testing
- [ ] Navigation all pages
- [ ] Click all links
- [ ] Submit booking form
- [ ] Submit contact form
- [ ] Click WhatsApp button
- [ ] Play animations
- [ ] Filter portfolio
- [ ] Open lightbox

### Edge Cases
- [ ] Page with no JavaScript
- [ ] Slow internet (throttle in DevTools)
- [ ] Large fonts (zoom 200%)
- [ ] Screen reader

## 📊 Analytics (Optional)

- [ ] Google Analytics setup (if using)
- [ ] Tracking events configured
- [ ] Goals set up
- [ ] Dashboard working

## 🎉 Launch Day

### Before Going Live
- [ ] Final review of entire site
- [ ] Test all forms one more time
- [ ] Verify WhatsApp integration
- [ ] Check phone numbers
- [ ] Verify contact email

### Going Live
- [ ] Update status on social media
- [ ] Send launch notification
- [ ] Share domain with customers
- [ ] Monitor for errors

### Post-Launch Monitoring
- [ ] Check error logs daily for first week
- [ ] Monitor analytics
- [ ] Respond to contact form submissions
- [ ] Test forms regularly

## 🔄 Maintenance Schedule

### Daily
- [ ] Check for form submissions
- [ ] Monitor for errors

### Weekly
- [ ] Review analytics
- [ ] Test critical features
- [ ] Check all links

### Monthly
- [ ] Update content as needed
- [ ] Add new portfolio items
- [ ] Monitor performance
- [ ] Check for security updates

### Quarterly
- [ ] Update dependencies
- [ ] Review SEO performance
- [ ] Analyze user behavior
- [ ] Plan improvements

---

## ✨ You're Ready to Launch!

Once all checkboxes are complete, your site is production-ready. Congratulations! 🎉

**Questions?** See README.md or QUICK_START.md
