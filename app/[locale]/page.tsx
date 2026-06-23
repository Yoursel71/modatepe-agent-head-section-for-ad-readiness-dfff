import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import manzara4k from '/images/manzara4k.jpeg';
import manzaragece from '/images/manzaragece.jpeg';
import manzaraiyi from '/images/manzaraiyi.jpeg';
import sislimanzara from '/images/sislimanzaramk.jpeg';
import et from '/images/Et.jpeg';
import kahvalti from '/images/Kahvalti.jpeg';
import koridor from '/images/koridor.jpeg';
import deluxeoda from '/images/deluxeoda.jpeg';
import deluxetasev from '/images/deluxetaşev.jpeg';
import vaybe from '/images/vaybe.jpeg';
import { GoogleMap } from '@/components/google-map';
import { getTranslations, type Locale } from '@/lib/i18n';
import { MessageCircle, MapPin, Phone, UtensilsCrossed, BedDouble, ArrowRight, Sparkles, ChevronDown } from 'lucide-react';

interface HomePageProps {
  params: { locale: Locale };
}

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const translations = await getTranslations(params.locale);
  return {
    title: translations.home.harmony.heroTitle,
    description: translations.home.harmony.heroSubtitle,
  };
}

export default async function HomePage({ params: { locale } }: HomePageProps) {
  const translations = await getTranslations(locale);
  const h = translations.home.harmony;
  const whatsappUrl = "https://wa.me/905324484984?text=Merhaba,%20Modatepe'de%20rezervasyon%20yapmak%20istiyorum.";

  const galleryImages = [
    { src: manzara4k, alt: 'Modatepe manzarası' },
    { src: kahvalti, alt: 'Serpme kahvaltı' },
    { src: deluxeoda, alt: 'Deluxe oda' },
    { src: et, alt: 'Et porsiyonu' },
    { src: koridor, alt: 'Restoran iç mekan' },
    { src: deluxetasev, alt: 'Taş ev' },
    { src: manzaraiyi, alt: 'Doğa manzarası' },
    { src: vaybe, alt: 'Yöresel sunum' },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Cormorant+Garamond:wght@400;500;600;700&family=Lato:wght@300;400;500;700&display=swap');
        body { background: #0F1410; }
      `}</style>

      {/* ============ CINEMA HERO ============ */}
      <section className="relative overflow-hidden" style={{ minHeight: '100vh' }}>
        {/* Background video with image fallback */}
        <div className="absolute inset-0 z-0">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster={manzaragece.src}
          >
            <source src="/hero.mp4" type="video/mp4" />
            <source src="/hero.webm" type="video/webm" />
          </video>
          {/* Fallback image (visible behind video while loading or if missing) */}
          <Image
            src={manzaragece}
            alt="Modatepe"
            fill
            priority
            className="object-cover animate-ken-burns -z-10"
            sizes="100vw"
          />
        </div>

        <div className="absolute inset-0 cinema-overlay-full z-10" />

        <div className="relative z-20 flex flex-col items-center justify-center text-center px-6" style={{ minHeight: '100vh' }}>
          <p className="font-body-elegant cinema-fade-1 text-gold mb-6" style={{ fontSize: '0.78rem', letterSpacing: '0.4em', textTransform: 'uppercase', fontWeight: 500 }}>
            {h.tagline}
          </p>

          <h1 className="font-display cinema-fade-2 text-white font-bold mb-8 max-w-5xl" style={{ fontSize: 'clamp(2.4rem, 6.5vw, 5.2rem)', lineHeight: 1.08, textShadow: '0 4px 32px rgba(0,0,0,0.55)' }}>
            {h.heroTitle}
          </h1>

          <div className="gold-divider cinema-fade-3 mb-7">
            <Sparkles className="w-3.5 h-3.5" />
          </div>

          <p className="font-serif-elegant cinema-fade-3 text-white/90 mb-12 max-w-2xl" style={{ fontSize: 'clamp(1.05rem, 1.9vw, 1.4rem)', fontStyle: 'italic', lineHeight: 1.6 }}>
            {h.heroSubtitle}
          </p>

          <div className="cinema-fade-4 flex flex-col sm:flex-row gap-4 items-center">
            <Link href={`/${locale}/restoran`} className="btn-gold">
              <UtensilsCrossed className="w-4 h-4" />
              {h.exploreRestaurant}
            </Link>
            <Link href={`/${locale}/konaklama`} className="btn-ghost-gold">
              <BedDouble className="w-4 h-4" />
              {h.exploreAccommodation}
            </Link>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/80 text-[10px] tracking-[0.4em] uppercase font-body-elegant flex flex-col items-center gap-3 animate-scroll-cue">
          <span>Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </section>

      {/* ============ INTRO ============ */}
      <section className="bg-cream py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <p className="font-body-elegant text-gold mb-5" style={{ fontSize: '0.78rem', letterSpacing: '0.32em', textTransform: 'uppercase', fontWeight: 600 }}>
            {h.intro.label}
          </p>
          <h2 className="font-display font-bold mb-7" style={{ color: '#1A2620', fontSize: 'clamp(2rem, 4.5vw, 3.4rem)', lineHeight: 1.12 }}>
            {h.intro.title}
          </h2>
          <div className="gold-divider mb-7 mx-auto">
            <span>✦</span>
          </div>
          <p className="font-serif-elegant mx-auto" style={{ color: '#5C5043', fontSize: '1.25rem', lineHeight: 1.85, fontStyle: 'italic', maxWidth: '720px' }}>
            {h.intro.description}
          </p>
        </div>
      </section>

      {/* ============ RESTAURANT SHOWCASE ============ */}
      <section className="bg-charcoal relative overflow-hidden py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="order-2 md:order-1">
              <p className="font-body-elegant text-gold mb-5" style={{ fontSize: '0.78rem', letterSpacing: '0.32em', textTransform: 'uppercase', fontWeight: 600 }}>
                <UtensilsCrossed className="inline w-4 h-4 mr-2 -mt-1" />
                {h.restaurant.label}
              </p>
              <h2 className="font-display text-white font-bold mb-7" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: 1.12 }}>
                {h.restaurant.title}
              </h2>
              <p className="font-serif-elegant mb-9" style={{ color: '#C9B89E', fontSize: '1.2rem', lineHeight: 1.8, fontStyle: 'italic' }}>
                {h.restaurant.description}
              </p>
              <Link href={`/${locale}/restoran`} className="btn-gold">
                {h.restaurant.cta}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="order-1 md:order-2 relative">
              <div className="grid grid-cols-2 gap-3">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image src={et} alt="" fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 50vw, 25vw" />
                </div>
                <div className="relative aspect-[3/4] overflow-hidden translate-y-8">
                  <Image src={kahvalti} alt="" fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 50vw, 25vw" />
                </div>
              </div>
              <div className="hidden md:block absolute -top-6 -left-6 w-32 h-32 border border-gold opacity-40" />
            </div>
          </div>
        </div>
      </section>

      {/* ============ ACCOMMODATION SHOWCASE ============ */}
      <section className="bg-cream-warm relative overflow-hidden py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-3">
                <div className="relative aspect-[3/4] overflow-hidden translate-y-8">
                  <Image src={deluxeoda} alt="" fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 50vw, 25vw" />
                </div>
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image src={deluxetasev} alt="" fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 50vw, 25vw" />
                </div>
              </div>
              <div className="hidden md:block absolute -bottom-6 -right-6 w-32 h-32 border border-gold opacity-50" />
            </div>

            <div>
              <p className="font-body-elegant text-gold mb-5" style={{ fontSize: '0.78rem', letterSpacing: '0.32em', textTransform: 'uppercase', fontWeight: 600 }}>
                <BedDouble className="inline w-4 h-4 mr-2 -mt-1" />
                {h.accommodation.label}
              </p>
              <h2 className="font-display font-bold mb-7" style={{ color: '#1A2620', fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: 1.12 }}>
                {h.accommodation.title}
              </h2>
              <p className="font-serif-elegant mb-9" style={{ color: '#5C5043', fontSize: '1.2rem', lineHeight: 1.8, fontStyle: 'italic' }}>
                {h.accommodation.description}
              </p>
              <Link href={`/${locale}/konaklama`} className="btn-gold">
                {h.accommodation.cta}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ EXPERIENCE / NATURE FULL-BLEED ============ */}
      <section className="relative overflow-hidden" style={{ minHeight: '90vh' }}>
        <Image src={sislimanzara} alt={h.experience.title} fill className="object-cover animate-slow-zoom" sizes="100vw" />
        <div className="absolute inset-0 cinema-overlay-full" />

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-24" style={{ minHeight: '90vh' }}>
          <p className="font-body-elegant text-gold mb-5" style={{ fontSize: '0.78rem', letterSpacing: '0.32em', textTransform: 'uppercase', fontWeight: 600 }}>
            {h.experience.label}
          </p>
          <h2 className="font-display text-white font-bold mb-7 max-w-4xl" style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)', lineHeight: 1.12, textShadow: '0 4px 28px rgba(0,0,0,0.5)' }}>
            {h.experience.title}
          </h2>
          <div className="gold-divider mb-7">
            <span>★</span>
          </div>
          <p className="font-serif-elegant text-white/95 mx-auto" style={{ fontSize: '1.3rem', lineHeight: 1.8, fontStyle: 'italic', maxWidth: '720px' }}>
            {h.experience.description}
          </p>
        </div>
      </section>

      {/* ============ GALLERY ============ */}
      <section className="bg-charcoal py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-14">
            <p className="font-body-elegant text-gold mb-4" style={{ fontSize: '0.78rem', letterSpacing: '0.32em', textTransform: 'uppercase', fontWeight: 600 }}>
              {h.gallery.label}
            </p>
            <h2 className="font-display text-white font-bold mb-5" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.4rem)', lineHeight: 1.1 }}>
              {h.gallery.title}
            </h2>
            <div className="gold-divider mx-auto">
              <span>✦</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {galleryImages.map((img, i) => (
              <Link key={i} href={`/${locale}/galeri`} className="relative aspect-square overflow-hidden group">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 brightness-95 group-hover:brightness-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />
              </Link>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link href={`/${locale}/galeri`} className="btn-ghost-gold">
              {translations.cta.viewMore}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ LOCATION ============ */}
      <section className="bg-cream py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <p className="font-body-elegant text-gold mb-4" style={{ fontSize: '0.78rem', letterSpacing: '0.32em', textTransform: 'uppercase', fontWeight: 600 }}>
              {h.location.label}
            </p>
            <h2 className="font-display font-bold mb-5" style={{ color: '#1A2620', fontSize: 'clamp(2rem, 4.5vw, 3.4rem)', lineHeight: 1.1 }}>
              {h.location.title}
            </h2>
            <div className="gold-divider mx-auto">
              <MapPin className="w-3.5 h-3.5" />
            </div>
          </div>

          <div className="rounded-sm overflow-hidden shadow-xl">
            <GoogleMap locale={locale} translations={translations} />
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <a href="tel:+905324484984" className="text-center p-7 border border-gold/30 hover:border-gold/70 hover:bg-white transition-all group">
              <Phone className="w-6 h-6 mx-auto mb-3 text-gold group-hover:scale-110 transition-transform" />
              <p className="font-body-elegant text-gold mb-1.5" style={{ fontSize: '0.72rem', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 600 }}>
                {translations.contact.info.phone}
              </p>
              <p className="font-serif-elegant" style={{ color: '#1A2620', fontSize: '1.1rem' }}>+90 532 448 49 84</p>
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-center p-7 border border-gold/30 hover:border-gold/70 hover:bg-white transition-all group">
              <MessageCircle className="w-6 h-6 mx-auto mb-3 text-gold group-hover:scale-110 transition-transform" />
              <p className="font-body-elegant text-gold mb-1.5" style={{ fontSize: '0.72rem', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 600 }}>
                WhatsApp
              </p>
              <p className="font-serif-elegant" style={{ color: '#1A2620', fontSize: '1.1rem' }}>{translations.cta.bookNow}</p>
            </a>
            <div className="text-center p-7 border border-gold/30">
              <MapPin className="w-6 h-6 mx-auto mb-3 text-gold" />
              <p className="font-body-elegant text-gold mb-1.5" style={{ fontSize: '0.72rem', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 600 }}>
                {translations.contact.info.address}
              </p>
              <p className="font-serif-elegant" style={{ color: '#1A2620', fontSize: '1rem', lineHeight: 1.55 }}>
                Ortahisar, Trabzon
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
