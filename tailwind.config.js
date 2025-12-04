/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index-react.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#2E5C8A',
          'soft-blue': '#4A7BA7',
          'light-blue': '#D6E8F0',
        },
        accent: {
          terracotta: '#C85A3F',
          orange: '#D68642',
        },
        neutral: {
          cream: '#F0EDE8',
          'dark-gray': '#1A2530',
          'medium-gray': '#5A6670',
          'light-gray': '#D8DCDF',
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        tajawal: ['Tajawal', 'sans-serif'],
      },
      animation: {
        'slide-text': 'slideText 15s linear infinite',
        'fade-in': 'fadeIn 1s ease-in',
        'slide-up': 'slideUp 0.8s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
      },
      keyframes: {
        slideText: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        glow: {
          '0%, 100%': { 
            textShadow: '0 0 10px rgba(255,255,255,0.5), 0 0 20px rgba(255,255,255,0.3)' 
          },
          '50%': { 
            textShadow: '0 0 20px rgba(255,255,255,0.8), 0 0 30px rgba(255,255,255,0.5)' 
          }
        }
      }
    },
  },
  plugins: [],
}
