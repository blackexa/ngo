import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChild, FaUsers, FaTruck, FaNetworkWired, FaPlus, FaMinus } from 'react-icons/fa'
import { useLanguage } from '../context/LanguageContext'

const Support = () => {
  const { t } = useLanguage()
  const [expandedIndex, setExpandedIndex] = useState(null)

  const opportunities = [
    {
      icon: FaChild,
      title: t('Child Care Support', 'رعاية الأطفال'),
      description: t('Offer care and educational activities for children in refugee camps, creating safe spaces for play and learning.', 'تقديم الرعاية والأنشطة التعليمية للأطفال في مخيمات اللاجئين، وخلق مساحات آمنة للعب والتعلم.'),
      details: t('Volunteer as a caregiver, teacher, or activity coordinator. Help children process trauma through art, music, and play therapy. Commitment: flexible hours, training provided.', 'تطوع كمقدم رعاية أو معلم أو منسق أنشطة. ساعد الأطفال على معالجة الصدمات من خلال الفن والموسيقى والعلاج باللعب. الالتزام: ساعات مرنة، يتم توفير التدريب.')
    },
    {
      icon: FaUsers,
      title: t('Parent Relief Services', 'خدمات دعم الوالدين'),
      description: t('Help parents by watching their children, giving caregivers time to attend medical appointments, seek employment, or simply rest.', 'مساعدة الوالدين من خلال مراقبة أطفالهم، ومنح مقدمي الرعاية وقتًا لحضور المواعيد الطبية أو البحث عن عمل أو الراحة ببساطة.'),
      details: t('Provide respite care for overwhelmed parents. Coordinate childcare rotations within camps. Requirements: background check, basic first aid knowledge helpful.', 'تقديم رعاية للآباء المرهقين. تنسيق دورات رعاية الأطفال داخل المخيمات. المتطلبات: فحص خلفية، معرفة أساسية بالإسعافات الأولية مفيدة.')
    },
    {
      icon: FaTruck,
      title: t('Material Delivery', 'توصيل المواد'),
      description: t('Deliver essential materials, food, and supplies directly to relief camps and distribution centers.', 'توصيل المواد الأساسية والغذاء والإمدادات مباشرة إلى مخيمات الإغاثة ومراكز التوزيع.'),
      details: t('Drive supply trucks, coordinate logistics, or help with warehouse operations. Valid driver\'s license required. Physical fitness needed for loading/unloading.', 'قيادة شاحنات الإمدادات، وتنسيق اللوجستيات، أو المساعدة في عمليات المستودعات. رخصة قيادة سارية مطلوبة. اللياقة البدنية مطلوبة للتحميل والتفريغ.')
    },
    {
      icon: FaNetworkWired,
      title: t('Government Coordination', 'التنسيق الحكومي'),
      description: t('Work with local government officials to streamline aid delivery, secure permits, and advocate for refugee rights.', 'العمل مع المسؤولين الحكوميين المحليين لتبسيط تقديم المساعدات وتأمين التصاريح والدفاع عن حقوق اللاجئين.'),
      details: t('Ideal for those with administrative, legal, or policy experience. Help navigate bureaucracy and ensure compliance. Language skills in Kurdish, Arabic, and English highly valued.', 'مثالي لذوي الخبرة الإدارية أو القانونية أو السياسية. المساعدة في التعامل مع البيروقراطية وضمان الامتثال. مهارات اللغة الكردية والعربية والإنجليزية ذات قيمة عالية.')
    }
  ]

  return (
    <section id="support" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-blue mb-4">
            {t('Ways to Support Our Mission', 'طرق دعم مهمتنا')}
          </h2>
          <p className="text-xl text-neutral-medium-gray">
            {t('Your time and compassion can change lives', 'وقتك ورحمتك يمكن أن يغيرا حياة الناس')}
          </p>
        </motion.div>

        <div className="space-y-4">
          {opportunities.map((opportunity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-neutral-light-gray rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl text-primary-blue flex-shrink-0">
                  <opportunity.icon />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-neutral-dark-gray mb-2">
                    {opportunity.title}
                  </h3>
                  <p className="text-neutral-medium-gray mb-4">
                    {opportunity.description}
                  </p>
                  <AnimatePresence>
                    {expandedIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="border-t-2 border-white pt-4 mt-4 overflow-hidden"
                      >
                        <p className="text-neutral-medium-gray">
                          {opportunity.details}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  className="bg-accent-terracotta hover:bg-primary-blue text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors flex-shrink-0"
                >
                  {expandedIndex === index ? <FaMinus /> : <FaPlus />}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Support
