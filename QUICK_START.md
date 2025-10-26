# Quick Start Guide

## 🚀 Get Started in 5 Minutes

### 1. Install Dependencies
```bash
npm install
```

### 2. Add Your Images
Place your business images in these directories:
```
public/images/
├── hero.jpg                 # Main hero image
├── about.jpg               # About page image
└── services/
    ├── kids-dress.jpg
    ├── blouse.jpg
    └── aari.jpg
```

### 3. Update Business Information

**WhatsApp Number** - Edit these files:
- `src/components/Header.tsx` (line 11)
- `src/components/FloatingWhatsAppCTA.tsx` (line 15)
- `src/components/Footer.tsx` (various locations)
- `src/lib/seo.ts` (line 8)

Replace `919876543210` with your WhatsApp number (include country code)

**Business Address & Phone** - Edit `src/app/booking/page.tsx`:
- Lines 48-50: Address
- Lines 51-59: Phone numbers
- Lines 60-67: Operating hours

**Services & Pricing** - Edit these data files:
- `src/data/services.ts` - Service descriptions and prices
- `src/data/portfolio.ts` - Portfolio items and categories
- `src/data/pricing.ts` - Pricing tiers and features
- `src/data/testimonials.ts` - Customer testimonials

### 4. Run Development Server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### 5. Deploy to Vercel

**Option A: Recommended (Vercel)**
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Click "Deploy"

Your site will be live in minutes!

**Option B: Other Platforms**
Build and deploy the `.next` folder:
```bash
npm run build
```

## 📁 Important Files to Customize

| File | Purpose | What to Change |
|------|---------|----------------|
| `src/data/services.ts` | Service offerings | Descriptions, prices, features |
| `src/data/portfolio.ts` | Gallery items | Photos and descriptions |
| `src/data/testimonials.ts` | Reviews | Customer quotes and ratings |
| `src/data/pricing.ts` | Pricing tiers | Plans and pricing details |
| `src/data/blog.ts` | Blog articles | Content and articles |
| `src/app/globals.css` | Colors & theme | Brand colors (CSS variables) |
| `src/lib/seo.ts` | SEO & business info | Address, phone, meta data |

## 🎨 Color Customization

All colors are CSS variables in `src/app/globals.css`:

```css
:root {
  --brand-dark: #1A130E;        /* Dark brown background */
  --brand-bronze: #7B5A2D;      /* Bronze accents */
  --brand-gold: #D4AF37;        /* Primary gold */
  --brand-lightgold: #E8C88A;   /* Light gold */
  --brand-cream: #F5EAD6;       /* Cream text */
  --accent-green: #0FA678;      /* Green accent */
}
```

Tailwind classes automatically generated:
- `bg-brand-dark`, `text-brand-gold`, etc.

## 📸 Image Guide

### Required Images

**Hero Section** (`public/images/hero.jpg`)
- Size: 400x400px minimum (square)
- Format: JPG (optimized)
- Content: Professional photo of you/your work

**Services** (`public/images/services/`)
- kids-dress.jpg
- blouse.jpg
- aari.jpg
- Size: 600x400px or similar
- Format: JPG (compressed)

**Portfolio** (`public/images/portfolio/`)
- Create multiple images for gallery
- Naming: kids-1.jpg, blouse-1.jpg, aari-1.jpg, etc.
- Size: 800x600px minimum
- Format: JPG

**Testimonials** (`public/images/testimonials/`)
- priya.jpg, anisha.jpg, meera.jpg, kavya.jpg, divya.jpg
- Size: 200x200px (square)
- Format: JPG

**Blog** (`public/images/blog/`)
- measurements.jpg, aari.jpg, fabric-care.jpg, etc.
- Size: 1200x600px
- Format: JPG

### Image Tools
- **Compress**: TinyPNG, ImageOptim
- **Resize**: Canva, Photopea, ImageResizer
- **Convert**: CloudConvert (JPG to WebP)

## 🔧 Common Customizations

### Change Hero Heading
`src/components/Hero.tsx` (lines 28-35)

### Update Footer Links
`src/components/Footer.tsx` (lines 45-90)

### Modify Pricing
`src/data/pricing.ts` - Update pricingTiers array

### Add Blog Post
`src/data/blog.ts` - Add new BlogPost object

### Change Mobile Menu Items
`src/components/Header.tsx` (lines 10-16)

## 🚨 Troubleshooting

**Port 3000 already in use?**
```bash
npm run dev -- -p 3001
```

**Images not showing?**
1. Check file is in `public/images/` directory
2. Verify filename matches exactly
3. Ensure file is JPG/PNG format

**WhatsApp link not working?**
- Verify phone number includes country code (+91)
- Test in browser: `https://wa.me/919876543210`

**Styles not applied?**
```bash
npm run build
npm start
```

**Port in use error?**
```bash
lsof -ti:3000 | xargs kill -9
npm run dev
```

## 📱 Testing

### Mobile Preview
```bash
npm run dev
# Open on phone at: http://<your-ip>:3000
```

### Desktop Sizes
- Inspect element → Toggle device toolbar (F12)
- Test: Mobile, Tablet, Desktop

### Forms Test
- Try booking form with invalid email
- Try WhatsApp button on mobile
- Test file upload functionality

## 📊 Analytics Setup (Optional)

Add Google Analytics:

1. Get GA tracking ID from Google Analytics
2. Edit `src/app/layout.tsx`
3. Add before `</head>`:

```tsx
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXX" />
<script dangerouslySetInnerHTML={{__html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXX');
`}} />
```

## 🆘 Need Help?

Check these resources:
- README.md - Comprehensive documentation
- Next.js: https://nextjs.org/docs
- Tailwind: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion

## 📋 Pre-Launch Checklist

- [ ] All images added to `public/images/`
- [ ] WhatsApp number updated everywhere
- [ ] Business address and hours updated
- [ ] Services, pricing, and testimonials customized
- [ ] Brand colors adjusted (optional)
- [ ] All links tested (forms, buttons, navigation)
- [ ] Mobile responsiveness verified
- [ ] Contact form redirects to WhatsApp
- [ ] Domain/hosting set up (if using custom domain)
- [ ] Deployed to Vercel or chosen platform

## 🎉 You're Ready!

Your site is production-ready. Customize the content, add your images, and deploy!

For detailed deployment instructions, see README.md
