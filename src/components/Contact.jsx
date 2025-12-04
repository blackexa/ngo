import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaUserTie, FaEnvelope, FaPhone, FaPaperPlane, FaCheckCircle, FaTimesCircle } from 'react-icons/fa'
import { useLanguage } from '../context/LanguageContext'

const Contact = () => {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [notification, setNotification] = useState({ show: false, type: '', message: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('https://formspree.io/f/mblnklzn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      
      if (response.ok) {
        setNotification({
          show: true,
          type: 'success',
          message: t('Thank you for your message! We will get back to you soon.', 'شكراً على رسالتك! سنعود إليك قريباً.')
        })
        setFormData({ name: '', email: '', message: '' })
      } else {
        setNotification({
          show: true,
          type: 'error',
          message: t('Something went wrong. Please try again.', 'حدث خطأ. يرجى المحاولة مرة أخرى.')
        })
      }
    } catch (error) {
      setNotification({
        show: true,
        type: 'error',
        message: t('Something went wrong. Please try again.', 'حدث خطأ. يرجى المحاولة مرة أخرى.')
      })
    }
    
    setIsSubmitting(false)
    
    // Auto hide notification after 5 seconds
    setTimeout(() => {
      setNotification({ show: false, type: '', message: '' })
    }, 5000)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="py-20 bg-neutral-cream">
      {/* Beautiful Notification Popup */}
      <AnimatePresence>
        {notification.show && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.9 }}
            className="fixed top-20 left-1/2 transform -translate-x-1/2 z-[60] w-full max-w-md px-4"
          >
            <div className={`${
              notification.type === 'success' 
                ? 'bg-green-500' 
                : 'bg-red-500'
            } text-white p-6 rounded-2xl shadow-2xl flex items-start gap-4`}>
              <div className="text-3xl">
                {notification.type === 'success' ? <FaCheckCircle /> : <FaTimesCircle />}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-1">
                  {notification.type === 'success' 
                    ? t('Success!', 'نجح!') 
                    : t('Error!', 'خطأ!')}
                </h3>
                <p>{notification.message}</p>
              </div>
              <button
                onClick={() => setNotification({ show: false, type: '', message: '' })}
                className="text-white/80 hover:text-white text-xl"
              >
                ×
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-blue mb-4">
            {t('Get in Touch', 'تواصل معنا')}
          </h2>
          <p className="text-xl text-neutral-medium-gray">
            {t('Together, we can make a difference', 'معاً يمكننا إحداث فرق')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, x: 10 }}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <div className="text-4xl text-accent-terracotta mb-4">
                <FaUserTie />
              </div>
              <h3 className="text-xl font-bold text-neutral-dark-gray mb-2">
                {t('NGO Manager', 'مدير المنظمة')}
              </h3>
              <p className="text-2xl font-semibold text-primary-blue">Najat Toma Sola</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.03, x: 10 }}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <div className="text-4xl text-accent-terracotta mb-4">
                <FaEnvelope />
              </div>
              <h3 className="text-xl font-bold text-neutral-dark-gray mb-2">
                {t('Email', 'البريد الإلكتروني')}
              </h3>
              <a 
                href="mailto:support@aghsan-alkarama.org"
                className="text-lg text-primary-blue hover:text-accent-terracotta transition-colors font-medium"
              >
                support@aghsan-alkarama.org
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.03, x: 10 }}
              className="bg-white p-6 rounded-2xl shadow-lg"
            >
              <div className="text-4xl text-accent-terracotta mb-4">
                <FaPhone />
              </div>
              <h3 className="text-xl font-bold text-neutral-dark-gray mb-2">
                {t('Phone (Iraq)', 'الهاتف (العراق)')}
              </h3>
              <a 
                href="tel:+9647510305849"
                className="text-lg text-primary-blue hover:text-accent-terracotta transition-colors font-medium"
              >
                +964 751 030 5849
              </a>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-neutral-dark-gray font-semibold mb-2">
                  {t('Your Name', 'اسمك')}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-neutral-light-gray rounded-xl focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-neutral-dark-gray font-semibold mb-2">
                  {t('Your Email', 'بريدك الإلكتروني')}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-neutral-light-gray rounded-xl focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-neutral-dark-gray font-semibold mb-2">
                  {t('Message', 'الرسالة')}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 border-2 border-neutral-light-gray rounded-xl focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition-all resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-accent-terracotta to-accent-orange text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>{t('Sending...', 'جاري الإرسال...')}</span>
                ) : (
                  <>
                    <FaPaperPlane />
                    <span>{t('Send Message', 'إرسال الرسالة')}</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
