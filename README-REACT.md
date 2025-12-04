# Aghsan al-Karama Organization - React MVP

A modern, responsive, and emotionally engaging React website for the humanitarian NGO "Aghsan al-Karama Organization".

## 🚀 Tech Stack

- **React 18** - Modern React with Hooks
- **Vite** - Lightning fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **React Icons** - Beautiful icon library
- **React Intersection Observer** - Scroll-triggered animations

## ✨ Features

### MVP Features Implemented

1. **Bilingual Support (EN/AR)**
   - Complete language toggle
   - RTL support for Arabic
   - All content translated

2. **Dynamic Hero Section**
   - 4 rotating background images
   - Sliding text animation (changes every 3 seconds)
   - Unique captions for each image
   - Smooth transitions

3. **Modern Animations**
   - Scroll-triggered animations
   - Hover effects on all interactive elements
   - Floating donate button
   - Smooth page transitions
   - Icon rotations and scaling

4. **Responsive Design**
   - Mobile-first approach
   - Adapts to all screen sizes
   - Touch-friendly interactions

5. **Core Sections**
   - Hero with sliding text
   - About Us
   - 7 Core Aims
   - Support Opportunities
   - Inspirational Quotes Carousel
   - Contact Form
   - Footer

6. **Enhanced UX**
   - Floating navigation
   - Expandable content cards
   - Form validation
   - Smooth scrolling
   - Loading states

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Color Palette

- Primary Blue: `#2E5C8A`
- Soft Blue: `#4A7BA7`
- Terracotta: `#C85A3F`
- Orange: `#D68642`
- Dark Gray: `#1A2530`

## 🗂️ Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation bar
│   ├── Hero.jsx            # Hero section with sliding text
│   ├── About.jsx           # About Us section
│   ├── Aims.jsx            # Core Aims cards
│   ├── Support.jsx         # Support opportunities
│   ├── Quotes.jsx          # Quotes carousel
│   ├── Contact.jsx         # Contact form
│   ├── Footer.jsx          # Footer section
│   └── FloatingDonate.jsx  # Floating donate button
├── context/
│   └── LanguageContext.jsx # Language management
├── App.jsx                 # Main app component
├── main.jsx               # App entry point
└── index.css              # Global styles
```

## 🌟 Key Highlights

### Sliding Text in Hero
The hero section features an animated text that cycles through:
- "Providing hope..."
- "Restoring dignity..."
- "Rebuilding lives..."
- "Creating futures..."

Text slides up/down smoothly every 3 seconds with fade transitions.

### Advanced Animations
- **Framer Motion** for smooth, performant animations
- **Intersection Observer** for scroll-triggered effects
- **Staggered animations** for list items
- **Micro-interactions** on hover and click

### Language Context
Global state management for language switching with:
- Persistent storage (localStorage)
- RTL layout support
- Helper function `t(en, ar)` for easy translations

## 🔧 Customization

### Change Colors
Edit `tailwind.config.js`:
```js
colors: {
  primary: {
    blue: '#2E5C8A',
    // ...
  }
}
```

### Add More Sliding Texts
Edit `src/components/Hero.jsx`:
```js
const slidingTexts = [
  t('Your text', 'النص بالعربية'),
  // Add more...
]
```

### Modify Animations
All animations use Framer Motion. Customize in component files:
```jsx
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📞 Contact

**NGO Manager:** Najat Toma Sola  
**Email:** support@aghsan-alkarama.org  
**Phone:** +964 751 030 5849

## 📄 License

© 2025 Aghsan al-Karama Organization. All rights reserved.

---

Built with ❤️ for humanitarian impact
