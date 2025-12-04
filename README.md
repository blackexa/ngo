# Aghsan al-Karama Organization Website

A modern, responsive, and emotionally engaging single-page website for the humanitarian NGO "Aghsan al-Karama Organization".

## About the Organization

**Established:** January 15, 2025

**Mission:** Providing emergency and long-term support to refugees and internally displaced persons (IDPs) affected by war, offering shelter, food, medical care, psychological support, education, and advocacy.

**Partnership:** Proud partner of the Barzani Charity Foundation

## Features

### Design Highlights
- **Modern UI/UX**: Clean, compassionate design with warm color palette (soft blues, terracotta tones)
- **Fully Responsive**: Mobile-first approach, works perfectly on all devices
- **Bilingual Support**: English and Arabic names displayed with proper RTL support
- **Smooth Animations**: Subtle scroll-triggered animations, parallax effects, and hover interactions
- **Accessibility**: Respects `prefers-reduced-motion` preference, keyboard navigation support

### Key Sections
1. **Hero Section**: Full-width background with bilingual NGO name and call-to-action buttons
2. **About Us**: Story and partnership information with animated cards
3. **Our Aims**: 7 core aims displayed as interactive icon cards
4. **Ways to Support**: Expandable volunteer opportunities
5. **Quote Section**: Inspirational Pope Francis quote
6. **Contact & Support**: Contact information and functional form

### Technical Features
- Intersection Observer API for scroll animations
- Lazy loading support for images
- Form validation
- Mobile navigation menu
- Floating "Donate" button
- Optimized performance with minimal JavaScript

## File Structure

```
ngo/
├── index.html          # Main HTML file
├── styles.css          # Complete stylesheet
├── script.js           # JavaScript for interactivity
└── README.md           # This file
```

## Setup & Usage

1. **Clone or download** the project files
2. **Open** `index.html` in a web browser
3. No build process required - works out of the box!

## Customization

### Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-blue: #4A90E2;
    --terracotta: #E07A5F;
    --warm-orange: #F4A261;
    /* ... more colors */
}
```

### Images
Replace the hero background image URL in `styles.css`:
```css
.hero {
    background: url('YOUR_IMAGE_URL') center/cover no-repeat;
}
```

### Content
All content can be edited directly in `index.html`.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contact Information

**NGO Manager:** Najat Toma Sola  
**Email:** jtmarten@hotmail.com  
**Phone (Iraq):** +964 751 030 5849

## Credits

- **Fonts:** Google Fonts (Poppins, Tajawal)
- **Icons:** Font Awesome 6.5.1
- **Images:** Unsplash (placeholder)

## License

© 2025 Aghsan al-Karama Organization. All rights reserved.

---

*Website designed with ❤️ for humanitarian impact*
