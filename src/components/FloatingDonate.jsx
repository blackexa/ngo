import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaHeart } from 'react-icons/fa'
import { useLanguage } from '../context/LanguageContext'

const FloatingDonate = () => {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href="#contact"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, -10, 0]
          }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{
            y: {
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut'
            }
          }}
          whileHover={{ scale: 1.1, y: -5 }}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-accent-terracotta to-accent-orange text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 font-semibold z-50 hover:shadow-accent-terracotta/50 transition-all"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <FaHeart className="text-2xl" />
          </motion.div>
          <span className="hidden sm:inline">{t('Donate', 'تبرع')}</span>
        </motion.a>
      )}
    </AnimatePresence>
  )
}

export default FloatingDonate
