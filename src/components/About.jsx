import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaHeart, FaHandsHelping } from 'react-icons/fa'
import { useLanguage } from '../context/LanguageContext'

const About = () => {
  const { t } = useLanguage()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-primary-blue mb-16"
        >
          {t('About Us', 'عن المنظمة')}
        </motion.h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.03, y: -10 }}
            className="bg-primary-light-blue p-8 rounded-2xl shadow-lg"
          >
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-5xl text-primary-blue mb-6"
            >
              <FaHeart />
            </motion.div>
            <h3 className="text-2xl font-bold text-primary-blue mb-4">
              {t('Our Story', 'قصتنا')}
            </h3>
            <p className="text-neutral-dark-gray leading-relaxed">
              {t(
                'Established on January 15, 2025, Aghsan al-Karama Organization was born from a deep commitment to restore dignity and hope to those displaced by conflict. We stand with refugees and internally displaced persons, offering not just aid, but a pathway to rebuild their lives with strength and resilience.',
                'تأسست منظمة أغصان الكرامة في 15 يناير 2025 من التزام عميق بإعادة الكرامة والأمل للنازحين بسبب النزاعات. نقف مع اللاجئين والنازحين داخلياً، ونقدم ليس فقط المساعدة، بل طريقاً لإعادة بناء حياتهم بقوة ومرونة.'
              )}
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.03, y: -10 }}
            className="bg-primary-light-blue p-8 rounded-2xl shadow-lg"
          >
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              className="text-5xl text-primary-blue mb-6"
            >
              <FaHandsHelping />
            </motion.div>
            <h3 className="text-2xl font-bold text-primary-blue mb-4">
              {t('Our Partnership', 'شراكتنا')}
            </h3>
            <p className="text-neutral-dark-gray leading-relaxed mb-6">
              {t(
                'We are proud to partner with the Barzani Charity Foundation, joining forces to amplify our impact and reach more communities in need. Together, we deliver comprehensive humanitarian assistance across Kurdistan and Iraq.',
                'نفخر بالشراكة مع مؤسسة بارزاني الخيرية، لتضافر الجهود وتوسيع تأثيرنا للوصول إلى المزيد من المجتمعات المحتاجة. معاً، نقدم المساعدة الإنسانية الشاملة في جميع أنحاء كردستان والعراق.'
              )}
            </p>
            <div className="flex items-center gap-3 bg-white p-4 rounded-xl">
              <FaHandsHelping className="text-2xl text-accent-terracotta" />
              <span className="font-semibold text-neutral-dark-gray">
                {t('In partnership with Barzani Charity Foundation', 'بالشراكة مع مؤسسة بارزاني الخيرية')}
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
