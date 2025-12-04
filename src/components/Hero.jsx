import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronLeft, FaChevronRight, FaChevronDown } from 'react-icons/fa'
import { useLanguage } from '../context/LanguageContext'

const Hero = () => {
  const { t } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=2000&q=80',
      caption: t('Building Hope Together', 'نبني الأمل معاً'),
      tagline: t('Building Hope Together', 'نبني الأمل معاً')
    },
    {
      image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=2000&q=80',
      caption: t('Every Life Matters', 'كل حياة مهمة'),
      tagline: t('Every Life Matters', 'كل حياة مهمة')
    },
    {
      image: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=2000&q=80',
      caption: t('Restoring Dignity & Peace', 'استعادة الكرامة والسلام'),
      tagline: t('Restoring Dignity & Peace', 'استعادة الكرامة والسلام')
    },
    {
      image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=2000&q=80',
      caption: t('Empowering Communities', 'تمكين المجتمعات'),
      tagline: t('Empowering Communities', 'تمكين المجتمعات')
    }
  ]

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(slideTimer)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      {/* Background Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${slides[currentSlide].image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="block mb-2">{t('Aghsan al-Karama Organization', 'منظمة أغصان الكرامة')}</span>
            <span className="block text-2xl md:text-3xl font-light opacity-95">
            </span>
          </h1>

          {/* Sliding Text Animation - Synced with Background */}
          <div className="mb-8">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentSlide}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="text-xl md:text-2xl font-light"
              >
                {slides[currentSlide].tagline}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(200, 90, 63, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-accent-terracotta to-accent-orange text-white rounded-full font-semibold text-lg shadow-lg"
            >
              {t('Donate Now', 'تبرع الآن')}
            </motion.a>
            <motion.a
              href="#support"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,1)', color: '#2E5C8A' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold text-lg"
            >
              {t('Volunteer', 'تطوع')}
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Slide Caption */}
      <motion.div
        key={currentSlide}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute top-20 right-4 md:right-8 z-20 bg-black/60 backdrop-blur-md px-6 py-3 rounded-xl border-l-4 border-accent-terracotta text-white text-xl md:text-2xl font-bold shadow-2xl"
      >
        {slides[currentSlide].caption}
      </motion.div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-4 rounded-full transition-all"
      >
        <FaChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-4 rounded-full transition-all"
      >
        <FaChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all ${
              index === currentSlide
                ? 'w-8 h-3 bg-white rounded-full'
                : 'w-3 h-3 bg-white/50 rounded-full hover:bg-white/80'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white text-3xl opacity-80"
      >
        <FaChevronDown />
      </motion.div>
    </section>
  )
}

export default Hero
