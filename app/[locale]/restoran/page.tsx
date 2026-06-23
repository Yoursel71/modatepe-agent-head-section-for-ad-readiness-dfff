import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import et from '/images/Et.jpeg';
import kahvalti from '/images/Kahvalti.jpeg';
import kahvalt2 from '/images/kahvalt2.jpeg';
import koridor from '/images/koridor.jpeg';
import koridor2 from '/images/koridor2.jpeg';
import vaybe from '/images/vaybe.jpeg';
import manzara4k from '/images/manzara4k.jpeg';
import manzaragece from '/images/manzaragece.jpeg';
import manzaraiyi from '/images/manzaraiyi.jpeg';
import etstok from '/images/etstok.jpeg';
import galeri2 from '/images/galeri2.jpeg';
import { getTranslations, type Locale } from '@/lib/i18n';
import { MessageCircle, MapPin, Phone, Clock, UtensilsCrossed, ArrowRight, Mountain } from 'lucide-react';

interface RestaurantPageProps {
  params: { locale: Locale };
}

export async function generateMetadata({ params }: RestaurantPageProps): Promise<Metadata> {
  const translations = await getTranslations(params.locale);
  return {
    title: translations.restaurant.harmony.heroTitle,
    description: translations.restaurant.intro,
  };
}

export default async function RestaurantPage({ params: { locale } }: RestaurantPageProps) {
  const translations = await getTranslations(locale);
  const h = translations.restaurant.harmony;

  const whatsappUrl = "https://wa.me/905324484984?text=Merhaba,%20Modatepe'de%20rezervasyon%20yapmak%20istiyorum.";
  const phoneUrl = "tel:+905324484984";

  const dishes = [
    { name: h.dishes.items.antrikot, image: et, price: '₺900' },
    { name: h.dishes.items.pirzola, image: etstok, price: '₺900' },
    { name: h.dishes.items.sacKavurma, image: vaybe, price: '₺900' },
    { name: h.dishes.items.kofte, image: et, price: '₺600' },
    { name: h.dishes.items.kahvalti, image: kahvalti, price: '₺750' },
    { name: h.dishes.items.sutlac, image: kahvalt2, price: '₺175' },
  ];

  const galleryImages = [
    { src: et, alt: 'Et porsiyonu' },
    { src: kahvalti, alt: 'Serpme kahvaltı' },
    { src: kahvalt2, alt: 'Kahvaltı sofrası' },
    { src: koridor, alt: 'Restoran iç mekan' },
    { src: koridor2, alt: 'Salon görünümü' },
    { src: vaybe, alt: 'Yöresel sunum' },
    { src: manzara4k, alt: 'Modatepe manzarası' },
    { src: manzaraiyi, alt: 'Doğa görünümü' },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Cormorant+Garamond:wght@400;500;600;700&family=Lato:wght@300;400;500;700&display=swap');

        .harmony-display { font-family: 'Playfair Display', serif; }
        .harmony-serif { font-family: 'Cormorant Garamond', serif; }
        .harmony-body { font-family: 'Lato', sans-serif; }

        .harmony-bg-cream { background: #FAF6EF; }
        .harmony-bg-dark { background: #0F1410; }
        .harmony-bg-warm { background: #F5EBDB; }

        .harmony-text-gold { color: #B89060; }
        .harmony-text-dark { color: #1A2620; }
        .harmony-text-muted { color: #5C5043; }

        .harmony-border-gold { border-color: #C9A56A; }

        .harmony-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          color: #B89060;
          font-size: 0.72rem;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          font-weight: 500;
          font-family: 'Lato', sans-serif;
        }
        .harmony-divider::before,
        .harmony-divider::after {
          content: '';
          width: 50px;
          height: 1px;
          background: linear-gradient(to right, transparent, #C9A56A, transparent);
        }

        .harmony-hero-overlay {
          background: linear-gradient(180deg,
            rgba(8, 16, 12, 0.55) 0%,
            rgba(8, 16, 12, 0.35) 35%,
            rgba(8, 16, 12, 0.75) 100%);
        }

        .harmony-section-overlay {
          background: linear-gradient(135deg,
            rgba(15, 61, 46, 0.85) 0%,
            rgba(26, 38, 32, 0.75) 100%);
        }

        .harmony-dish-card {
          position: relative;
          overflow: hidden;
          border-radius: 4px;
          transition: transform 0.5s ease, box-shadow 0.5s ease;
        }
        .harmony-dish-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 50px rgba(0,0,0,0.18);
        }
        .harmony-dish-card .img-wrap {
          overflow: hidden;
        }
        .harmony-dish-card img {
          transition: transform 0.8s ease;
        }
        .harmony-dish-card:hover img {
          transform: scale(1.08);
        }
        .harmony-dish-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 40%, rgba(8,16,12,0.92) 100%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 24px;
        }

        .harmony-cta-btn {
          background: #C9A56A;
          color: #0F1410;
          font-family: 'Lato', sans-serif;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          font-size: 0.78rem;
          padding: 16px 36px;
          border: none;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }
        .harmony-cta-btn:hover {
          background: #B89060;
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(184, 144, 96, 0.4);
        }

        .harmony-ghost-btn {
          background: transparent;
          color: #F5EBDB;
          border: 1px solid #C9A56A;
          font-family: 'Lato', sans-serif;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          font-size: 0.78rem;
          padding: 16px 36px;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }
        .harmony-ghost-btn:hover {
          background: #C9A56A;
          color: #0F1410;
        }

        .harmony-gallery-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 8px;
        }
        @media (max-width: 1023px) {
          .harmony-gallery-grid { grid-template-columns: repeat(2, 1fr); }
        }
        .harmony-gallery-tile {
          position: relative;
          aspect-ratio: 1;
          overflow: hidden;
          cursor: pointer;
        }
        .harmony-gallery-tile img {
          transition: transform 0.7s ease, filter 0.7s ease;
          filter: brightness(0.92);
        }
        .harmony-gallery-tile:hover img {
          transform: scale(1.1);
          filter: brightness(1.05);
        }
        .harmony-gallery-tile::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 60%, rgba(8,16,12,0.5));
          opacity: 0;
          transition: opacity 0.4s;
        }
        .harmony-gallery-tile:hover::after { opacity: 1; }

        .harmony-info-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(201, 165, 106, 0.25);
          padding: 36px 28px;
          text-align: center;
          transition: all 0.3s ease;
        }
        .harmony-info-card:hover {
          background: rgba(201, 165, 106, 0.08);
          border-color: rgba(201, 165, 106, 0.55);
          transform: translateY(-4px);
        }

        @keyframes harmony-fade-up {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .harmony-fade-up { animation: harmony-fade-up 0.9s ease-out both; }
      `}</style>

      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden" style={{ minHeight: '100vh' }}>
        <Image
          src={manzaragece}
          alt={h.heroTitle}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="harmony-hero-overlay absolute inset-0" />

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6" style={{ minHeight: '100vh' }}>
          <p className="harmony-body harmony-fade-up mb-6" style={{ color: '#C9A56A', fontSize: '0.78rem', letterSpacing: '0.4em', textTransform: 'uppercase', fontWeight: 500 }}>
            {h.tagline}
          </p>

          <h1 className="harmony-display harmony-fade-up text-white font-bold mb-8 max-w-4xl" style={{ fontSize: 'clamp(2.4rem, 6vw, 4.8rem)', lineHeight: 1.1, textShadow: '0 4px 28px rgba(0,0,0,0.5)' }}>
            {h.heroTitle}
          </h1>

          <div className="harmony-divider harmony-fade-up max-w-md mb-6">
            <span>★</span>
          </div>

          <p className="harmony-serif harmony-fade-up text-white/90 mb-12 max-w-2xl" style={{ fontSize: 'clamp(1.05rem, 1.8vw, 1.4rem)', fontStyle: 'italic', lineHeight: 1.6 }}>
            {h.heroSubtitle}
          </p>

          <div className="harmony-fade-up flex flex-col sm:flex-row gap-4 items-center">
            <Link href={`/${locale}/menu`} className="harmony-cta-btn">
              <UtensilsCrossed className="w-4 h-4" />
              {h.viewMenu}
            </Link>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="harmony-ghost-btn">
              <MessageCircle className="w-4 h-4" />
              {translations.cta.bookNow}
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/70 text-xs tracking-[0.3em] uppercase harmony-body flex flex-col items-center gap-2">
          <span>Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/70 to-transparent" />
        </div>
      </section>

      {/* ============ STAGE / MANZARA ============ */}
      <section className="harmony-bg-cream py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="relative">
              <div className="relative overflow-hidden" style={{ aspectRatio: '4/5', borderRadius: '2px' }}>
                <Image
                  src={manzara4k}
                  alt={h.stage.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="hidden md:block absolute -bottom-6 -right-6 w-32 h-32 harmony-border-gold border-2" style={{ zIndex: -1 }} />
            </div>

            <div>
              <p className="harmony-body harmony-text-gold mb-5" style={{ fontSize: '0.78rem', letterSpacing: '0.32em', textTransform: 'uppercase', fontWeight: 600 }}>
                <Mountain className="inline w-4 h-4 mr-2 -mt-1" />
                {h.stage.label}
              </p>
              <h2 className="harmony-display harmony-text-dark font-bold mb-7" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: 1.15 }}>
                {h.stage.title}
              </h2>
              <p className="harmony-serif harmony-text-muted mb-8" style={{ fontSize: '1.18rem', lineHeight: 1.75, fontStyle: 'italic' }}>
                {h.stage.description}
              </p>
              <Link href={`/${locale}/galeri`} className="harmony-cta-btn">
                {h.stage.cta}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ LEZZETLI YEMEKLER ============ */}
      <section className="harmony-bg-warm py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <p className="harmony-body harmony-text-gold mb-4" style={{ fontSize: '0.78rem', letterSpacing: '0.32em', textTransform: 'uppercase', fontWeight: 600 }}>
              {h.dishes.label}
            </p>
            <h2 className="harmony-display harmony-text-dark font-bold mb-5" style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: 1.1 }}>
              {h.dishes.title}
            </h2>
            <div className="harmony-divider max-w-xs mx-auto mb-6">
              <span>✦</span>
            </div>
            <p className="harmony-serif harmony-text-muted max-w-2xl mx-auto" style={{ fontSize: '1.12rem', lineHeight: 1.7, fontStyle: 'italic' }}>
              {h.dishes.description}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-7">
            {dishes.map((dish, i) => (
              <div key={i} className="harmony-dish-card" style={{ aspectRatio: '3/4' }}>
                <div className="img-wrap absolute inset-0">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </div>
                <div className="harmony-dish-overlay">
                  <span className="harmony-body text-amber-300 mb-2" style={{ fontSize: '0.7rem', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 600 }}>
                    {dish.price}
                  </span>
                  <h3 className="harmony-display text-white font-semibold" style={{ fontSize: 'clamp(1.05rem, 1.8vw, 1.5rem)', lineHeight: 1.25 }}>
                    {dish.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link href={`/${locale}/menu`} className="harmony-cta-btn">
              <UtensilsCrossed className="w-4 h-4" />
              {h.viewMenu}
            </Link>
          </div>
        </div>
      </section>

      {/* ============ YORESEL SOFRA (Kokteyl yerine) ============ */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <Image src={vaybe} alt={h.traditional.title} fill className="object-cover" sizes="100vw" />
        <div className="harmony-section-overlay absolute inset-0" />

        <div className="relative z-10 container mx-auto px-6 max-w-4xl text-center">
          <p className="harmony-body mb-5" style={{ color: '#E8C87A', fontSize: '0.78rem', letterSpacing: '0.32em', textTransform: 'uppercase', fontWeight: 600 }}>
            {h.traditional.label}
          </p>
          <h2 className="harmony-display text-white font-bold mb-6" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.4rem)', lineHeight: 1.1 }}>
            {h.traditional.title}
          </h2>
          <div className="harmony-divider max-w-xs mx-auto mb-7" style={{ color: '#E8C87A' }}>
            <span>♦</span>
          </div>
          <p className="harmony-serif text-white/90 mb-10 mx-auto" style={{ fontSize: '1.2rem', lineHeight: 1.75, fontStyle: 'italic', maxWidth: '640px' }}>
            {h.traditional.description}
          </p>
          <Link href={`/${locale}/menu`} className="harmony-cta-btn">
            {h.traditional.cta}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ============ HIKAYE ============ */}
      <section className="harmony-bg-cream py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center max-w-3xl mx-auto">
            <p className="harmony-body harmony-text-gold mb-5" style={{ fontSize: '0.78rem', letterSpacing: '0.32em', textTransform: 'uppercase', fontWeight: 600 }}>
              {h.story.label}
            </p>
            <h2 className="harmony-display harmony-text-dark font-bold mb-6" style={{ fontSize: 'clamp(1.9rem, 4vw, 3rem)', lineHeight: 1.15 }}>
              {h.story.title}
            </h2>
            <div className="harmony-divider max-w-xs mx-auto mb-7">
              <span>✧</span>
            </div>
            <p className="harmony-serif harmony-text-muted" style={{ fontSize: '1.2rem', lineHeight: 1.85, fontStyle: 'italic' }}>
              {h.story.description}
            </p>
          </div>
        </div>
      </section>

      {/* ============ GALERI ============ */}
      <section className="harmony-bg-dark py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-14">
            <p className="harmony-body harmony-text-gold mb-4" style={{ fontSize: '0.78rem', letterSpacing: '0.32em', textTransform: 'uppercase', fontWeight: 600 }}>
              {h.gallery.label}
            </p>
            <h2 className="harmony-display text-white font-bold mb-5" style={{ fontSize: 'clamp(1.9rem, 4vw, 3rem)', lineHeight: 1.1 }}>
              {h.gallery.title}
            </h2>
            <div className="harmony-divider max-w-xs mx-auto">
              <span>✦</span>
            </div>
          </div>

          <div className="harmony-gallery-grid">
            {galleryImages.map((img, i) => (
              <div key={i} className="harmony-gallery-tile">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ILETISIM ============ */}
      <section className="harmony-bg-dark py-20 md:py-28 border-t border-amber-900/20">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-14">
            <p className="harmony-body harmony-text-gold mb-4" style={{ fontSize: '0.78rem', letterSpacing: '0.32em', textTransform: 'uppercase', fontWeight: 600 }}>
              {h.contact.label}
            </p>
            <h2 className="harmony-display text-white font-bold mb-5" style={{ fontSize: 'clamp(1.9rem, 4vw, 3rem)', lineHeight: 1.1 }}>
              {h.contact.title}
            </h2>
            <div className="harmony-divider max-w-xs mx-auto">
              <span>✦</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            <a href={phoneUrl} className="harmony-info-card block">
              <Phone className="w-7 h-7 mx-auto mb-4" style={{ color: '#C9A56A' }} />
              <p className="harmony-body harmony-text-gold mb-2" style={{ fontSize: '0.72rem', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 600 }}>
                {h.contact.phone}
              </p>
              <p className="harmony-serif text-white" style={{ fontSize: '1.15rem' }}>
                0532 448 49 84
              </p>
            </a>

            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="harmony-info-card block">
              <MessageCircle className="w-7 h-7 mx-auto mb-4" style={{ color: '#C9A56A' }} />
              <p className="harmony-body harmony-text-gold mb-2" style={{ fontSize: '0.72rem', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 600 }}>
                {h.contact.whatsapp}
              </p>
              <p className="harmony-serif text-white" style={{ fontSize: '1.15rem' }}>
                {translations.cta.bookNow}
              </p>
            </a>

            <div className="harmony-info-card">
              <MapPin className="w-7 h-7 mx-auto mb-4" style={{ color: '#C9A56A' }} />
              <p className="harmony-body harmony-text-gold mb-2" style={{ fontSize: '0.72rem', letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 600 }}>
                {h.contact.address}
              </p>
              <p className="harmony-serif text-white" style={{ fontSize: '1rem', lineHeight: 1.55 }}>
                {h.contact.addressValue}
              </p>
            </div>
          </div>

          <div className="text-center mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-3 harmony-text-gold harmony-body" style={{ fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600 }}>
              <Clock className="w-4 h-4" />
              {translations.hours.opening}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
