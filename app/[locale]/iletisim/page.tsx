import { Metadata } from 'next';
import Image from 'next/image';
import manzaragece from '/images/manzaragece.jpeg';
import { ContactInfo } from '@/components/contact-info';
import { ContactForm } from '@/components/contact-form';
import { FeedbackForm } from '@/components/feedback-form';
import { GoogleMap } from '@/components/google-map';
import { getTranslations, type Locale } from '@/lib/i18n';
import { MapPin } from 'lucide-react';

interface ContactPageProps {
  params: { locale: Locale };
}

export async function generateMetadata({ params }: ContactPageProps): Promise<Metadata> {
  const translations = await getTranslations(params.locale);

  return {
    title: translations.contact.title,
    description: 'Modatepe Restoran & Konaklama iletişim bilgileri ve rezervasyon',
  };
}

export default async function ContactPage({ params: { locale } }: ContactPageProps) {
  const translations = await getTranslations(locale);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Cormorant+Garamond:wght@400;500;600;700&family=Lato:wght@300;400;500;700&display=swap');
        body { background: #0F1410; }
      `}</style>

      {/* ============ CINEMA HERO ============ */}
      <section className="relative overflow-hidden" style={{ minHeight: '70vh' }}>
        <Image
          src={manzaragece}
          alt={translations.contact.title}
          fill
          priority
          className="object-cover animate-ken-burns"
          sizes="100vw"
        />
        <div className="absolute inset-0 cinema-overlay-full" />

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-24" style={{ minHeight: '70vh' }}>
          <p className="font-body-elegant cinema-fade-1 text-gold mb-5" style={{ fontSize: '0.78rem', letterSpacing: '0.4em', textTransform: 'uppercase', fontWeight: 500 }}>
            {translations.nav.contact}
          </p>
          <h1 className="font-display cinema-fade-2 text-white font-bold mb-6 max-w-3xl" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)', lineHeight: 1.1, textShadow: '0 4px 28px rgba(0,0,0,0.5)' }}>
            {translations.contact.title}
          </h1>
          <div className="gold-divider cinema-fade-3 mb-6">
            <span>✦</span>
          </div>
          <p className="font-serif-elegant cinema-fade-3 text-white/90 max-w-2xl" style={{ fontSize: '1.2rem', fontStyle: 'italic', lineHeight: 1.7 }}>
            Sorularınız, rezervasyon talepleriniz ve geri bildirimleriniz için bize ulaşın.
          </p>
        </div>
      </section>

      {/* ============ CONTACT INFO ============ */}
      <section className="bg-cream py-24 md:py-28">
        <div className="container mx-auto px-6 max-w-5xl">
          <ContactInfo locale={locale} translations={translations} />
        </div>
      </section>

      {/* ============ FORMS ============ */}
      <section className="bg-cream-warm py-24 md:py-28">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <p className="font-body-elegant text-gold mb-4" style={{ fontSize: '0.78rem', letterSpacing: '0.32em', textTransform: 'uppercase', fontWeight: 600 }}>
              {translations.contact.title}
            </p>
            <h2 className="font-display font-bold mb-5" style={{ color: '#1A2620', fontSize: 'clamp(1.9rem, 4vw, 3rem)', lineHeight: 1.15 }}>
              {translations.contact.forms.contact.title}
            </h2>
            <div className="gold-divider mx-auto">
              <span>✦</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
            <ContactForm locale={locale} translations={translations} />
            <FeedbackForm locale={locale} translations={translations} />
          </div>
        </div>
      </section>

      {/* ============ MAP ============ */}
      <section className="bg-charcoal py-24 md:py-28">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <p className="font-body-elegant text-gold mb-4" style={{ fontSize: '0.78rem', letterSpacing: '0.32em', textTransform: 'uppercase', fontWeight: 600 }}>
              {translations.home.harmony.location.label}
            </p>
            <h2 className="font-display text-white font-bold mb-5" style={{ fontSize: 'clamp(1.9rem, 4vw, 3rem)', lineHeight: 1.1 }}>
              {translations.home.location.title}
            </h2>
            <div className="gold-divider mx-auto">
              <MapPin className="w-3.5 h-3.5" />
            </div>
          </div>

          <div className="overflow-hidden border border-gold/15">
            <GoogleMap locale={locale} translations={translations} />
          </div>
        </div>
      </section>
    </>
  );
}
