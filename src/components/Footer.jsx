import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { useLanguage } from '../context/LanguageContext'

const Footer = () => {
  const { t } = useLanguage()

  const socialLinks = [
    { icon: FaFacebook, href: '#', label: 'Facebook' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' }
  ]

  const quickLinks = [
    { href: '#about', label: t('About Us', 'عن المنظمة') },
    { href: '#aims', label: t('Our Aims', 'أهدافنا') },
    { href: '#support', label: t('Volunteer', 'تطوع') },
    { href: '#contact', label: t('Contact', 'اتصل بنا') }
  ]

  return (
    <footer className="bg-neutral-dark-gray text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <h4 className="text-2xl font-bold text-accent-orange mb-4">
              Aghsan al-Karama Organization
            </h4>
            <p className="text-neutral-light-gray leading-relaxed">
              {t(
                'Providing hope, dignity, and a path to rebuild lives since January 2025.',
                'نوفر الأمل والكرامة وطريقاً لإعادة بناء الحياة منذ يناير 2025.'
              )}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-accent-orange mb-4">
              {t('Quick Links', 'روابط سريعة')}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-neutral-light-gray hover:text-accent-orange transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xl font-bold text-accent-orange mb-4">
              {t('Connect', 'تواصل معنا')}
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 bg-white/10 hover:bg-accent-terracotta rounded-full flex items-center justify-center text-xl transition-all hover:-translate-y-1"
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-neutral-light-gray">
          <p>© 2025 Aghsan al-Karama Organization. {t('All rights reserved.', 'جميع الحقوق محفوظة.')}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
