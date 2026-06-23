import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import et from '/images/Et.jpeg';
import manzaraiyi from '/images/manzaraiyi.jpeg';
import normaloda from '/images/normaloda.jpeg';
import koridorkaranlik from '/images/koridorkaranlik.jpeg';
import { getTranslations, type Locale } from '@/lib/i18n';
import { Calendar, Clock, ArrowRight, Newspaper } from 'lucide-react';

interface BlogPageProps {
  params: { locale: Locale };
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const translations = await getTranslations(params.locale);
  
  return {
    title: translations.blog.title,
    description: 'Modatepe Restoran & Konaklama blog yazıları',
  };
}

export default async function BlogPage({ params: { locale } }: BlogPageProps) {
  const translations = await getTranslations(locale);

  const blogPosts = [
    {
      title: 'Karadeniz Mutfağının En Sevilen Lezzetleri',
      excerpt: 'Karadeniz mutfağının zengin lezzetlerini keşfedin. Hamsi, karalahana ve mısır ekmeği gibi bölgesel tatları...',
      image: et,
      date: '2024-01-15',
      readTime: '5 dakika',
      author: 'Modatepe Mutfak',
      category: 'Yemek',
      slug: 'karadeniz-mutfaginin-en-sevilen-lezzetleri'
    },
    {
      title: 'Trabzon Ortahisar Gezilecek Yerler',
      excerpt: 'Trabzon Ortahisar bölgesinde görülmesi gereken tarihi ve doğal güzellikler hakkında rehber...',
      image: manzaraiyi,
      date: '2024-01-10',
      readTime: '7 dakika',
      author: 'Modatepe',
      category: 'Gezi',
      slug: 'trabzon-ortahisar-gezi-rehberi'
    },
    {
      title: 'Doğa İçinde Huzurlu Konaklama',
      excerpt: 'Şehrin gürültüsünden uzakta, doğayla iç içe bir konaklama deneyimi yaşamanın faydaları...',
      image: normaloda,
      date: '2024-01-05',
      readTime: '4 dakika',
      author: 'Modatepe',
      category: 'Konaklama',
      slug: 'doga-icinde-huzurlu-konaklama'
    }
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Cormorant+Garamond:wght@400;500;600;700&family=Lato:wght@300;400;500;700&display=swap');
        body { background: #0F1410; }
      `}</style>

      {/* ============ CINEMA HERO ============ */}
      <section className="relative overflow-hidden" style={{ minHeight: '70vh' }}>
        <Image
          src={koridorkaranlik}
          alt={translations.blog.title}
          fill
          priority
          className="object-cover animate-ken-burns"
          sizes="100vw"
        />
        <div className="absolute inset-0 cinema-overlay-full" />

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-24" style={{ minHeight: '70vh' }}>
          <p className="font-body-elegant cinema-fade-1 text-gold mb-5" style={{ fontSize: '0.78rem', letterSpacing: '0.4em', textTransform: 'uppercase', fontWeight: 500 }}>
            <Newspaper className="inline w-4 h-4 mr-2 -mt-1" />
            {translations.nav.blog}
          </p>
          <h1 className="font-display cinema-fade-2 text-white font-bold mb-6 max-w-3xl" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)', lineHeight: 1.1, textShadow: '0 4px 28px rgba(0,0,0,0.5)' }}>
            {translations.blog.title}
          </h1>
          <div className="gold-divider cinema-fade-3 mb-6">
            <span>✦</span>
          </div>
          <p className="font-serif-elegant cinema-fade-3 text-white/90 max-w-2xl" style={{ fontSize: '1.2rem', fontStyle: 'italic', lineHeight: 1.7 }}>
            Yöresel lezzetler, gezi rehberleri ve konaklama deneyimleri hakkında yazılarımızı keşfedin.
          </p>
        </div>
      </section>

      {/* ============ BLOG POSTS ============ */}
      <section className="bg-cream py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Link
                key={index}
                href={`/${locale}/blog/${post.slug}`}
                className="group block bg-white border border-gold/15 hover:border-gold/45 transition-all duration-500"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-4 left-4 font-body-elegant text-charcoal bg-gold px-3 py-1 text-[0.65rem]" style={{ letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700 }}>
                    {post.category}
                  </div>
                </div>

                <div className="p-7">
                  <h2 className="font-display font-bold mb-3 line-clamp-2 group-hover:text-gold transition-colors" style={{ color: '#1A2620', fontSize: '1.35rem', lineHeight: 1.3 }}>
                    {post.title}
                  </h2>

                  <p className="font-serif-elegant mb-5 line-clamp-3" style={{ color: '#5C5043', fontSize: '1rem', lineHeight: 1.7, fontStyle: 'italic' }}>
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-3 text-[0.72rem] font-body-elegant mb-5" style={{ color: '#7C6B52', letterSpacing: '0.08em' }}>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-gold" />
                      {new Date(post.date).toLocaleDateString(locale === 'tr' ? 'tr-TR' : locale === 'ar' ? 'ar-AR' : 'en-US')}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-gold" />
                      {post.readTime}
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-2 text-gold font-body-elegant" style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700 }}>
                    {translations.blog.readMore}
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}