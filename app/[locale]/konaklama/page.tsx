import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import normaloda from '/images/normaloda.jpeg';
import deluxeoda from '/images/deluxeoda.jpeg';
import normaltasev from '/images/normaltasev.jpeg';
import deluxetasev from '/images/deluxetaşev.jpeg';
import deluxetasev2 from '/images/deluxetasev2.jpeg';
import manzaragece from '/images/manzaragece.jpeg';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { getTranslations, type Locale } from '@/lib/i18n';
import { MessageCircle, Wifi, Car, Coffee, Users, BedDouble, ChevronDown, Sparkles } from 'lucide-react';

interface AccommodationPageProps {
  params: { locale: Locale };
}

export async function generateMetadata({ params }: AccommodationPageProps): Promise<Metadata> {
  const translations = await getTranslations(params.locale);
  return {
    title: translations.accommodation.harmony.heroTitle,
    description: translations.accommodation.harmony.heroSubtitle,
  };
}

export default async function AccommodationPage({ params: { locale } }: AccommodationPageProps) {
  const translations = await getTranslations(locale);
  const h = translations.accommodation.harmony;
  const whatsappUrl = "https://wa.me/905324484984?text=Merhaba,%20Modatepe'de%20rezervasyon%20yapmak%20istiyorum.";

  const roomTypes = [
    {
      title: translations.accommodation.rooms.normalRoom.title,
      description: translations.accommodation.rooms.normalRoom.description,
      count: translations.accommodation.rooms.normalRoom.count,
      image: normaloda,
      amenities: ['WiFi', 'Klima', '2 Kişilik', 'Banyo']
    },
    {
      title: translations.accommodation.rooms.deluxeRoom.title,
      description: translations.accommodation.rooms.deluxeRoom.description,
      count: translations.accommodation.rooms.deluxeRoom.count,
      image: deluxeoda,
      amenities: ['WiFi', 'Klima', '2+2 Kişilik', 'Geniş oda']
    },
    {
      title: translations.accommodation.rooms.normalStoneHouse.title,
      description: translations.accommodation.rooms.normalStoneHouse.description,
      count: translations.accommodation.rooms.normalStoneHouse.count,
      image: normaltasev,
      amenities: ['WiFi', 'Çift Banyo', '2+2 Kişilik']
    },
    {
      title: translations.accommodation.rooms.deluxeStoneHouse.title,
      description: translations.accommodation.rooms.deluxeStoneHouse.description,
      count: translations.accommodation.rooms.deluxeStoneHouse.count,
      image: deluxetasev,
      amenities: ['WiFi', 'Çift Kat', '5+2 Kişilik', 'Çift Banyo']
    }
  ];

  const faqs = [
    { question: translations.accommodation.faq.q1, answer: translations.accommodation.faq.a1 },
    { question: translations.accommodation.faq.q2, answer: translations.accommodation.faq.a2 },
    { question: translations.accommodation.faq.q3, answer: translations.accommodation.faq.a3 },
    { question: translations.accommodation.faq.q4, answer: translations.accommodation.faq.a4 },
  ];

  const amenities = [
    { icon: Wifi, title: h.amenities.wifi, desc: h.amenities.wifiDesc },
    { icon: Car, title: h.amenities.parking, desc: h.amenities.parkingDesc },
    { icon: Coffee, title: h.amenities.breakfast, desc: h.amenities.breakfastDesc },
    { icon: Users, title: h.amenities.reception, desc: h.amenities.receptionDesc },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Cormorant+Garamond:wght@400;500;600;700&family=Lato:wght@300;400;500;700&display=swap');
        body { background: #0F1410; }

        .room-card {
          position: relative;
          background: #FAF6EF;
          overflow: hidden;
          transition: all 0.5s ease;
        }
        .room-card:hover { transform: translateY(-6px); box-shadow: 0 30px 60px rgba(0,0,0,0.18); }
        .room-card .room-img { transition: transform 0.9s ease; }
        .room-card:hover .room-img { transform: scale(1.06); }

        .amenity-tag {
          background: rgba(201, 165, 106, 0.1);
          color: #B89060;
          border: 1px solid rgba(201, 165, 106, 0.3);
          padding: 5px 14px;
          font-size: 0.72rem;
          letter-spacing: 0.1em;
          font-weight: 600;
          text-transform: uppercase;
          font-family: 'Lato', sans-serif;
        }

        .room-count-badge {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(15, 20, 16, 0.85);
          backdrop-filter: blur(8px);
          color: #C9A56A;
          padding: 8px 16px;
          font-size: 0.72rem;
          letter-spacing: 0.15em;
          font-weight: 700;
          text-transform: uppercase;
          font-family: 'Lato', sans-serif;
          border: 1px solid rgba(201, 165, 106, 0.4);
        }

        .accordion-premium {
          background: #FAF6EF !important;
          border: 1px solid rgba(201, 165, 106, 0.25) !important;
          border-radius: 0 !important;
          padding: 4px 28px !important;
          margin-bottom: 12px !important;
          transition: all 0.3s ease;
        }
        .accordion-premium:hover {
          border-color: rgba(201, 165, 106, 0.55) !important;
          background: #fff !important;
        }
      `}</style>

      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden" style={{ minHeight: '100vh' }}>
        <div className="absolute inset-0">
          <Image
            src={deluxetasev2}
            alt={h.heroTitle}
            fill
            priority
            className="object-cover animate-ken-burns"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 cinema-overlay-full" />

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6" style={{ minHeight: '100vh' }}>
          <p className="font-body-elegant cinema-fade-1 text-gold mb-6" style={{ fontSize: '0.78rem', letterSpacing: '0.4em', textTransform: 'uppercase', fontWeight: 500 }}>
            {h.tagline}
          </p>
          <h1 className="font-display cinema-fade-2 text-white font-bold mb-8 max-w-4xl" style={{ fontSize: 'clamp(2.4rem, 6vw, 4.8rem)', lineHeight: 1.1, textShadow: '0 4px 28px rgba(0,0,0,0.55)' }}>
            {h.heroTitle}
          </h1>
          <div className="gold-divider cinema-fade-3 mb-7">
            <BedDouble className="w-3.5 h-3.5" />
          </div>
          <p className="font-serif-elegant cinema-fade-3 text-white/90 mb-12 max-w-2xl" style={{ fontSize: 'clamp(1.05rem, 1.9vw, 1.4rem)', fontStyle: 'italic', lineHeight: 1.6 }}>
            {h.heroSubtitle}
          </p>
          <div className="cinema-fade-4 flex flex-col sm:flex-row gap-4 items-center">
            <a href="#rooms" className="btn-gold">
              <BedDouble className="w-4 h-4" />
              {h.viewRooms}
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost-gold">
              <MessageCircle className="w-4 h-4" />
              {translations.cta.bookNow}
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/80 text-[10px] tracking-[0.4em] uppercase font-body-elegant flex flex-col items-center gap-3 animate-scroll-cue">
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

      {/* ============ AMENITIES ============ */}
      <section className="bg-charcoal py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <p className="font-body-elegant text-gold mb-4" style={{ fontSize: '0.78rem', letterSpacing: '0.32em', textTransform: 'uppercase', fontWeight: 600 }}>
              {h.amenities.label}
            </p>
            <h2 className="font-display text-white font-bold mb-5" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.4rem)', lineHeight: 1.1 }}>
              {h.amenities.title}
            </h2>
            <div className="gold-divider mx-auto">
              <span>✦</span>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-5">
            {amenities.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="text-center p-9 border border-gold/20 hover:border-gold/60 hover:bg-white/[0.02] transition-all duration-500 group">
                  <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center border border-gold/40 rounded-full group-hover:bg-gold/10 transition-colors">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-display text-white mb-2.5 font-semibold" style={{ fontSize: '1.2rem' }}>
                    {item.title}
                  </h3>
                  <p className="font-serif-elegant" style={{ color: '#C9B89E', fontSize: '0.95rem', lineHeight: 1.55, fontStyle: 'italic' }}>
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ ROOMS ============ */}
      <section id="rooms" className="bg-cream-warm py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <p className="font-body-elegant text-gold mb-4" style={{ fontSize: '0.78rem', letterSpacing: '0.32em', textTransform: 'uppercase', fontWeight: 600 }}>
              {h.rooms.label}
            </p>
            <h2 className="font-display font-bold mb-5" style={{ color: '#1A2620', fontSize: 'clamp(2rem, 4.5vw, 3.4rem)', lineHeight: 1.1 }}>
              {h.rooms.title}
            </h2>
            <div className="gold-divider mx-auto">
              <span>✦</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-7">
            {roomTypes.map((room, i) => (
              <div key={i} className="room-card">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={room.image}
                    alt={room.title}
                    fill
                    className="object-cover room-img"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="room-count-badge">{room.count}</div>
                </div>

                <div className="p-8">
                  <h3 className="font-display font-bold mb-4" style={{ color: '#1A2620', fontSize: '1.55rem', lineHeight: 1.2 }}>
                    {room.title}
                  </h3>
                  <p className="font-serif-elegant mb-6" style={{ color: '#5C5043', fontSize: '1.05rem', lineHeight: 1.7, fontStyle: 'italic' }}>
                    {room.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {room.amenities.map((amenity, idx) => (
                      <span key={idx} className="amenity-tag">{amenity}</span>
                    ))}
                  </div>

                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-gold w-full justify-center">
                    <MessageCircle className="w-4 h-4" />
                    {translations.cta.bookNow}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ NATURE STRIP ============ */}
      <section className="relative overflow-hidden" style={{ minHeight: '60vh' }}>
        <Image src={manzaragece} alt="" fill className="object-cover animate-slow-zoom" sizes="100vw" />
        <div className="absolute inset-0 cinema-overlay-full" />
        <div className="relative z-10 flex items-center justify-center text-center px-6 py-24" style={{ minHeight: '60vh' }}>
          <div className="max-w-3xl">
            <div className="gold-divider mb-6 mx-auto">
              <span>★</span>
            </div>
            <h2 className="font-display text-white font-bold mb-7" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', lineHeight: 1.2, textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
              {translations.home.harmony.experience.title}
            </h2>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-gold">
              <MessageCircle className="w-4 h-4" />
              {translations.cta.bookNow}
            </a>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="bg-cream py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-14">
            <p className="font-body-elegant text-gold mb-4" style={{ fontSize: '0.78rem', letterSpacing: '0.32em', textTransform: 'uppercase', fontWeight: 600 }}>
              {h.faq.label}
            </p>
            <h2 className="font-display font-bold mb-5" style={{ color: '#1A2620', fontSize: 'clamp(2rem, 4.5vw, 3.4rem)', lineHeight: 1.1 }}>
              {h.faq.title}
            </h2>
            <div className="gold-divider mx-auto">
              <span>✦</span>
            </div>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="accordion-premium">
                <AccordionTrigger className="text-left hover:no-underline font-display py-5" style={{ color: '#1A2620', fontSize: '1.1rem' }}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-serif-elegant pb-5" style={{ color: '#5C5043', fontSize: '1.05rem', lineHeight: 1.7, fontStyle: 'italic' }}>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="bg-charcoal py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <div className="gold-divider mb-6 mx-auto">
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <h2 className="font-display text-white font-bold mb-7" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', lineHeight: 1.15 }}>
            {translations.cta.bookNow}
          </h2>
          <p className="font-serif-elegant mb-10 mx-auto" style={{ color: '#C9B89E', fontSize: '1.15rem', lineHeight: 1.7, fontStyle: 'italic', maxWidth: '560px' }}>
            {h.intro.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-gold">
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
            <a href="tel:+905324484984" className="btn-ghost-gold">
              +90 532 448 49 84
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
