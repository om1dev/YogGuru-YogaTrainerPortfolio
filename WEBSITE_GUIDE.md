# YogGuru - Professional Yoga Trainer Website

## 🌿 Overview
A modern, professional, and calming single-page website for a yoga trainer featuring smooth animations, interactive elements, and a nature-inspired design.

## ✨ Features Implemented

### 1. **Hero Section with Breathing Animation**
- Expanding and contracting circle that mimics breathing
- Alternating "Inhale..." and "Exhale..." text
- Creates immediate mindful atmosphere
- Smooth fade-in animations for all elements
- Prominent CTA buttons

### 2. **Smooth Navigation**
- Fixed navigation bar with scroll detection
- Smooth scroll to all sections
- Hover effects with animated underlines
- Becomes translucent/blurred when scrolled

### 3. **About Section**
- Professional trainer profile layout
- Certifications with animated badges
- Years of experience highlighted
- Specializations list with leaf icons
- Personal message in styled quote box
- Image placeholder with shimmer effect

### 4. **Services Section**
6 service cards with:
- Large emoji icons
- Service descriptions
- Hover animations (lift and scale effects)
- Staggered entrance animations
- "Contact to Book" buttons

Services Include:
- General Yoga Classes
- Weight Loss Yoga
- Back Pain Therapy
- Stress Relief Yoga
- Meditation Sessions
- Personal Training

### 5. **Before/After Transformation Slider**
- Interactive draggable slider
- Compare "Before" and "After" postures
- Smooth transition effect
- Visual representation of transformation
- Fully interactive with mouse/touch

### 6. **Testimonials Section**
- 4 client reviews with avatars
- 5-star ratings
- Hover animations
- Staggered slide-up entrance
- Real success stories

### 7. **Gallery Section**
- 6 gallery items with placeholders
- Hover zoom effects
- Categories: Group Classes, Therapy, Meditation, Studio, Outdoor, Peaceful Moments
- Ready for real images

### 8. **Contact Section**
- Contact information cards:
  - Phone number
  - Email address
  - Physical location
  - WhatsApp link
- Integrated contact form (Formspree ready)
- All fields validated
- Service selection dropdown
- Smooth hover animations

### 9. **Floating Action Buttons**
- **WhatsApp Button**: Fixed, pulsing green button
- **Book Button**: Fixed, pulsing gradient button
- Both always visible and accessible
- Gentle pulse animation

### 10. **Design & Colors**
**Nature-Inspired Color Theme:**
- Primary: Soft Green (#7A9E7E)
- Secondary: Warm Sand (#C8A882)
- Accent: Light Beige (#E8DCC4)
- Background: Off-White (#FAF8F3)
- Creates wellness and calm atmosphere

### 11. **Animations**
- Breathing circle animation (8s cycle)
- Scroll-triggered fade-ins
- Card hover effects
- Staggered entrance animations
- Button hover transformations
- Smooth scroll behavior
- Pulse effects on floating buttons

### 12. **Responsive Design**
Fully responsive breakpoints:
- Desktop (1200px+)
- Tablet (768px - 1200px)
- Mobile (< 768px)
- Small mobile (< 480px)

## 🚀 How to Use

### Development
```bash
npm run dev
```
Visit: http://localhost:5174

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📝 Customization Guide

### 1. **Update Trainer Information**
Edit [src/App.jsx](src/App.jsx):
- Line 109: Change trainer name
- Line 110: Update tagline
- Lines 136-186: Update about section details

### 2. **Modify Services**
Edit the `services` array (Lines 32-67):
```javascript
{
  id: 1,
  name: 'Your Service Name',
  description: 'Service description',
  icon: '🧘‍♀️' // Change emoji
}
```

### 3. **Update Testimonials**
Edit the `testimonials` array (Lines 69-94):
```javascript
{
  name: 'Client Name',
  review: 'Review text',
  rating: 5,
  image: '👩' // Change avatar emoji
}
```

### 4. **Contact Information**
Update contact details (Lines 294-311):
- Phone number
- Email
- Location
- WhatsApp link (also update floating button link)

### 5. **Contact Form Integration**
Replace Formspree URL in [src/App.jsx](src/App.jsx) line 314:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

Get your Formspree ID from: https://formspree.io

### 6. **Add Real Images**
Replace placeholders:
- About section: Line 141 - Add `<img>` tag
- Gallery: Lines 272-297 - Add image URLs

### 7. **Colors**
Modify color scheme in [src/App.css](src/App.css) (Lines 10-19):
```css
:root {
  --primary-color: #7A9E7E;
  --secondary-color: #C8A882;
  /* ... other colors */
}
```

## 🎯 Key Sections Navigation

The site has smooth scroll navigation to:
1. **Home** - Hero with breathing animation
2. **About** - Trainer profile and certifications
3. **Services** - All yoga services offered
4. **Testimonials** - Client reviews
5. **Gallery** - Photos and moments
6. **Contact** - Booking form and contact info

## 📱 Mobile Menu
Note: For full mobile responsiveness, you may want to add a hamburger menu for devices < 768px. Currently, the nav menu is hidden on mobile (see lines 893-895 in App.css).

## 🌟 Special Features

### Breathing Animation
The hero section features a calming breathing circle that:
- Expands and contracts (4 seconds in, 4 seconds out)
- Changes text from "Inhale..." to "Exhale..."
- Creates immediate mindfulness connection

### Interactive Slider
The Before/After section allows users to:
- Drag a slider left and right
- Compare transformation visually
- Engage with the content interactively

### Floating Buttons
Always-visible action buttons for:
- Quick WhatsApp contact
- Direct booking navigation
- Gentle pulse animation draws attention

## 🎨 Typography & Spacing
- Clean, modern sans-serif font (Segoe UI)
- Generous spacing for readability
- Proper visual hierarchy
- Consistent padding and margins

## ✅ SEO Ready
- Proper meta tags in [index.html](index.html)
- Semantic HTML structure
- Descriptive content
- Alt text ready for images

## 🔄 Next Steps (Optional Enhancements)

1. **Add Real Images**: Replace emoji placeholders with professional photos
2. **Implement Hamburger Menu**: For better mobile navigation
3. **Add Blog Section**: Share yoga tips and articles
4. **Integrate Booking System**: Connect to calendar/booking service
5. **Add Video Background**: Subtle yoga video in hero section
6. **Social Media Links**: Add Instagram, Facebook links
7. **Client Portal**: Login area for existing clients
8. **Class Schedule**: Display weekly class times
9. **Payment Integration**: Online booking with payment
10. **Multi-language Support**: Reach wider audience

## 📄 File Structure
```
YogGuru/
├── src/
│   ├── App.jsx          # Main component (all sections)
│   ├── App.css          # All styles and animations
│   ├── index.css        # Base reset styles
│   └── main.jsx         # React entry point
├── public/              # Static assets
├── index.html           # HTML template with meta tags
└── package.json         # Dependencies
```

## 🎉 Deployment

### Deploy to Netlify
1. Run: `npm run build`
2. Drag `dist` folder to Netlify
3. Configure form: Settings → Forms → Enable form detection
4. Done!

### Deploy to Vercel
```bash
npm i -g vercel
vercel
```

### Deploy to GitHub Pages
1. Update `vite.config.js` with base path
2. Run: `npm run build`
3. Push to GitHub
4. Enable GitHub Pages

## 💡 Tips for Best Results

1. **Images**: Use high-quality, professional yoga photos
2. **Contact Form**: Test thoroughly before launch
3. **WhatsApp**: Update number in two places (contact section + floating button)
4. **Loading Speed**: Optimize all images before adding
5. **Browser Testing**: Test on Chrome, Firefox, Safari, Edge
6. **Mobile Testing**: Test on actual devices, not just browser resize

## 🙏 Namaste!

Your professional yoga trainer website is ready to help transform lives. The calming design, smooth animations, and nature-inspired colors create the perfect atmosphere for a wellness business.

Remember: The breathing animation in the hero section immediately sets the tone and creates a mindful first impression.

Good luck with your yoga journey! 🧘‍♀️
