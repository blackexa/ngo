import { motion } from 'framer-motion'
import { FaHome, FaUtensils, FaMedkit, FaBrain, FaGraduationCap, FaTools, FaBullhorn } from 'react-icons/fa'
import { useLanguage } from '../context/LanguageContext'

const Aims = () => {
  const { t } = useLanguage()

  const aims = [
    {
      icon: FaHome,
      title: t('Emergency Shelter', 'مأوى طوارئ'),
      description: t('Providing safe, dignified housing for families fleeing conflict and disaster.', 'توفير سكن آمن وكريم للعائلات الفارة من النزاعات والكوارث.')
    },
    {
      icon: FaUtensils,
      title: t('Food Security', 'الأمن الغذائي'),
      description: t('Ensuring no one goes hungry through regular food distributions and nutrition programs.', 'ضمان عدم جوع أحد من خلال توزيعات الغذاء المنتظمة وبرامج التغذية.')
    },
    {
      icon: FaMedkit,
      title: t('Medical Care', 'الرعاية الطبية'),
      description: t('Delivering essential healthcare services and medical supplies to vulnerable communities.', 'تقديم الخدمات الصحية الأساسية والإمدادات الطبية للمجتمعات الضعيفة.')
    },
    {
      icon: FaBrain,
      title: t('Psychosocial Support', 'الدعم النفسي'),
      description: t('Healing trauma through counseling, mental health services, and community support.', 'شفاء الصدمات من خلال الإرشاد وخدمات الصحة النفسية والدعم المجتمعي.')
    },
    {
      icon: FaGraduationCap,
      title: t('Education Access', 'الوصول للتعليم'),
      description: t('Keeping children learning with schools, supplies, and educational programs.', 'إبقاء الأطفال يتعلمون من خلال المدارس والإمدادات والبرامج التعليمية.')
    },
    {
      icon: FaTools,
      title: t('Vocational Training', 'التدريب المهني'),
      description: t('Empowering adults with skills and livelihood opportunities for sustainable futures.', 'تمكين البالغين بالمهارات وفرص العيش من أجل مستقبل مستدام.')
    },
    {
      icon: FaBullhorn,
      title: t('Advocacy & Rights', 'الدفاع والحقوق'),
      description: t('Championing the rights and voices of refugees and displaced communities.', 'الدفاع عن حقوق وأصوات اللاجئين والمجتمعات النازحة.')
    }
  ]

  return (
    <section id="aims" className="py-20 bg-neutral-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-blue mb-4">
            {t('Our Core Aims', 'أهدافنا الأساسية')}
          </h2>
          <p className="text-xl text-neutral-medium-gray">
            {t('Seven pillars of support for those who need it most', 'سبعة أعمدة للدعم لمن هم في أمس الحاجة إليها')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {aims.map((aim, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
              }}
              className="bg-white p-6 rounded-2xl shadow-lg text-center cursor-pointer group"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
                className="inline-block text-5xl text-accent-terracotta mb-4 group-hover:text-primary-blue transition-colors"
              >
                <aim.icon />
              </motion.div>
              <h3 className="text-xl font-bold text-neutral-dark-gray mb-3">
                {aim.title}
              </h3>
              <p className="text-neutral-medium-gray leading-relaxed">
                {aim.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Aims
