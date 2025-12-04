import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronLeft, FaChevronRight, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import { useLanguage } from '../context/LanguageContext'

const Quotes = () => {
  const { t } = useLanguage()
  const [currentQuote, setCurrentQuote] = useState(0)

  const quotes = [
    {
      text: t(
        'Migrants and refugees are not pawns on the chessboard of humanity. They are children, women and men who leave or are forced to leave their homes.',
        'المهاجرون واللاجئون ليسوا بيادق على رقعة شطرنج الإنسانية. إنهم أطفال ونساء ورجال يغادرون أو يجبرون على مغادرة منازلهم.'
      ),
      author: t('Pope Francis', 'البابا فرنسيس')
    },
    {
      text: t(
        'We cannot all succeed when half of us are held back.',
        'لا يمكننا جميعاً النجاح عندما يتم إعاقة نصفنا.'
      ),
      author: t('Malala Yousafzai', 'ملالا يوسفزاي')
    },
    {
      text: t(
        'The purpose of human life is to serve, and to show compassion and the will to help others.',
        'الغرض من الحياة البشرية هو الخدمة وإظهار الرحمة والإرادة لمساعدة الآخرين.'
      ),
      author: t('Albert Schweitzer', 'ألبرت شفايتزر')
    },
    {
      text: t(
        'No one has ever become poor by giving.',
        'لم يصبح أحد فقيراً من خلال العطاء.'
      ),
      author: t('Anne Frank', 'آن فرانك')
    },
    {
      text: t(
        'Remember, we are all affecting the world every moment, whether we mean to or not.',
        'تذكر، نحن جميعاً نؤثر على العالم في كل لحظة، سواء كنا نقصد ذلك أم لا.'
      ),
      author: t('Dalai Lama', 'الدالاي لاما')
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length)
    }, 7000)
    return () => clearInterval(timer)
  }, [])

  const nextQuote = () => setCurrentQuote((prev) => (prev + 1) % quotes.length)
  const prevQuote = () => setCurrentQuote((prev) => (prev - 1 + quotes.length) % quotes.length)

  return (
    <section className="relative py-20 bg-gradient-to-br from-[#1e3a5f] via-primary-blue to-[#2a4a6f] overflow-hidden">
      {/* Floating Background Text */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {['HOPE', 'DIGNITY', 'HUMANITY'].map((text, index) => (
          <motion.div
            key={text}
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              duration: 25,
              repeat: Infinity,
              delay: index * 8,
              ease: 'linear'
            }}
            className="absolute text-[8rem] font-black text-white/5 whitespace-nowrap"
            style={{ top: `${10 + index * 40}%` }}
          >
            {text}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-16 animate-glow"
        >
          {t('Words of Wisdom', 'كلمات من الحكمة')}
        </motion.h2>

        <div className="relative min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuote}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <FaQuoteLeft className="text-4xl opacity-50 mb-6 mx-auto" />
              <blockquote className="text-2xl md:text-4xl font-light italic leading-relaxed mb-8">
                {quotes[currentQuote].text}
              </blockquote>
              <cite className="text-xl font-semibold not-italic">
                — {quotes[currentQuote].author}
              </cite>
              <FaQuoteRight className="text-4xl opacity-50 mt-6 mx-auto" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-8 mt-12">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevQuote}
            className="bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-4 rounded-full transition-all"
          >
            <FaChevronLeft size={20} />
          </motion.button>

          <div className="flex gap-2">
            {quotes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuote(index)}
                className={`transition-all ${
                  index === currentQuote
                    ? 'w-8 h-3 bg-white rounded-full'
                    : 'w-3 h-3 bg-white/40 rounded-full hover:bg-white/70'
                }`}
              />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextQuote}
            className="bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white p-4 rounded-full transition-all"
          >
            <FaChevronRight size={20} />
          </motion.button>
        </div>
      </div>
    </section>
  )
}

export default Quotes
