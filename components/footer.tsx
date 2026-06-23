import Link from 'next/link';
import { Facebook, Instagram, MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import { FaTripadvisor } from "react-icons/fa";

interface FooterProps {
  locale: Locale;
  translations: any;
}

export function Footer({ locale, translations }: FooterProps) {
  const quickLinks = [
    { name: translations.nav.home, href: `/${locale}` },
    { name: translations.nav.restaurant, href: `/${locale}/restoran` },
    { name: translations.nav.menu, href: `/${locale}/menu` },
    { name: translations.nav.accommodation, href: `/${locale}/konaklama` },
    { name: translations.nav.galleryPhotos, href: `/${locale}/galeri` },
    { name: translations.nav.contact, href: `/${locale}/iletisim` },
  ];

  const socialLinks = [
    { name: 'Facebook', href: 'https://www.facebook.com/modateperestaurant/about/?_rdr', icon: Facebook },
    { name: 'Instagram', href: 'https://www.instagram.com/modateperestoran/', icon: Instagram },
    { name: 'Tripadvisor', href: 'https://www.tripadvisor.com.tr/Restaurant_Review-g298039-d13847054-Reviews-Modatepe_Restoran-Trabzon_Ortahisar_Turkish_Black_Sea_Coast.html', icon: FaTripadvisor },
  ];

  const whatsappUrl = "https://wa.me/905324484984?text=Merhaba,%20Modatepe'de%20rezervasyon%20yapmak%20istiyorum.";

  return (
    <footer className="bg-charcoal text-white pt-20 pb-10 mt-0 border-t border-gold/15">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Top accent */}
        <div className="text-center mb-14">
          <div className="gold-divider mx-auto mb-5">
            <span>✦</span>
          </div>
          <h3 className="font-display font-bold text-white mb-3" style={{ fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)', letterSpacing: '0.05em' }}>
            Modatepe
          </h3>
          <p className="font-serif-elegant" style={{ color: '#C9B89E', fontSize: '0.95rem', letterSpacing: '0.25em', textTransform: 'uppercase' }}>
            Restoran & Konaklama
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-10 md:gap-14">
          {/* Brand col */}
          <div className="md:col-span-1">
            <p className="font-serif-elegant mb-7" style={{ color: '#C9B89E', fontSize: '1rem', lineHeight: 1.75, fontStyle: 'italic' }}>
              Trabzon Ortahisar&apos;ın muhteşem manzarasında yöresel lezzetler ve konforlu konaklama.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 border border-gold/30 rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-charcoal transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-body-elegant text-gold mb-5" style={{ fontSize: '0.72rem', letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 700 }}>
              {translations.footer.quickLinks}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-serif-elegant transition-colors group inline-flex items-center gap-2"
                    style={{ color: '#C9B89E', fontSize: '1rem' }}
                  >
                    <span className="w-0 h-px bg-gold transition-all duration-300 group-hover:w-4" />
                    <span className="group-hover:text-white transition-colors">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body-elegant text-gold mb-5" style={{ fontSize: '0.72rem', letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 700 }}>
              {translations.contact.info.title}
            </h4>
            <div className="space-y-4 font-serif-elegant" style={{ color: '#C9B89E', fontSize: '0.98rem' }}>
              <a href="tel:+905324484984" className="flex items-center gap-3 hover:text-white transition-colors group">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <span>+90 532 448 49 84</span>
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors">
                <MessageCircle className="w-4 h-4 text-gold flex-shrink-0" />
                <span>WhatsApp</span>
              </a>
              <a href="mailto:murat60bir@outlook.com" className="flex items-center gap-3 hover:text-white transition-colors break-all">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <span>murat60bir@outlook.com</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                <span>Ortahisar, Trabzon</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-gold flex-shrink-0" />
                <span>{translations.hours.opening}</span>
              </div>
            </div>
          </div>

          {/* CTA col */}
          <div>
            <h4 className="font-body-elegant text-gold mb-5" style={{ fontSize: '0.72rem', letterSpacing: '0.3em', textTransform: 'uppercase', fontWeight: 700 }}>
              {translations.cta.bookNow}
            </h4>
            <p className="font-serif-elegant mb-6" style={{ color: '#C9B89E', fontSize: '0.98rem', lineHeight: 1.7, fontStyle: 'italic' }}>
              Sis bulutlarının üstünde, doğa ile baş başa unutulmaz bir kaçış için bizi arayın.
            </p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-gold w-full justify-center">
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-gold/15 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body-elegant" style={{ color: '#7C6B52', fontSize: '0.82rem', letterSpacing: '0.05em' }}>
            {translations.footer.copyright}
          </p>
          <div className="gold-divider" style={{ fontSize: '0.65rem' }}>
            <span>★</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
