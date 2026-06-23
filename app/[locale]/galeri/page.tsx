import { Metadata } from 'next';
import Image from 'next/image';
import et from '/images/Et.jpeg';
import kahvalti from '/images/Kahvalti.jpeg';
import kahvalt2 from '/images/kahvalt2.jpeg';
import koridor from '/images/koridor.jpeg';
import koridor2 from '/images/koridor2.jpeg';
import vaybe from '/images/vaybe.jpeg';
import galeri2 from '/images/galeri2.jpeg';
import galeri4 from '/images/galeri4.jpeg';
import bungalov from '/images/bungalov.jpeg';
import manzara4k from '/images/manzara4k.jpeg';
import manzaraiyi from '/images/manzaraiyi.jpeg';
import normaloda from '/images/normaloda.jpeg';
import { getTranslations, type Locale } from '@/lib/i18n';
import { ImageIcon } from 'lucide-react';

interface GalleryPageProps {
    params: { locale: Locale };
}

export async function generateMetadata({ params }: GalleryPageProps): Promise<Metadata> {
    const translations = await getTranslations(params.locale);

    return {
        title: translations.nav.galleryPhotos,
        description: 'Modatepe Restoran & Konaklama tesis fotoğrafları',
    };
}

export default async function GalleryPage({ params: { locale } }: GalleryPageProps) {
    const translations = await getTranslations(locale);

    const galleryImages = [
        manzara4k,
        galeri2,
        kahvalti,
        koridor,
        galeri4,
        et,
        kahvalt2,
        koridor2,
        vaybe,
        bungalov,
        manzaraiyi,
        normaloda
    ];

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Cormorant+Garamond:wght@400;500;600;700&family=Lato:wght@300;400;500;700&display=swap');
                body { background: #0F1410; }
            `}</style>

            {/* ============ CINEMA HERO ============ */}
            <section className="relative overflow-hidden" style={{ minHeight: '80vh' }}>
                <Image
                    src={manzara4k}
                    alt={translations.nav.galleryPhotos}
                    fill
                    priority
                    className="object-cover animate-ken-burns"
                    sizes="100vw"
                />
                <div className="absolute inset-0 cinema-overlay-full" />

                <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-24" style={{ minHeight: '80vh' }}>
                    <p className="font-body-elegant cinema-fade-1 text-gold mb-5" style={{ fontSize: '0.78rem', letterSpacing: '0.4em', textTransform: 'uppercase', fontWeight: 500 }}>
                        <ImageIcon className="inline w-4 h-4 mr-2 -mt-1" />
                        {translations.nav.galleryPhotos}
                    </p>
                    <h1 className="font-display cinema-fade-2 text-white font-bold mb-6 max-w-3xl" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)', lineHeight: 1.1, textShadow: '0 4px 28px rgba(0,0,0,0.5)' }}>
                        Bir Bakışta Modatepe
                    </h1>
                    <div className="gold-divider cinema-fade-3 mb-6">
                        <span>✦</span>
                    </div>
                    <p className="font-serif-elegant cinema-fade-3 text-white/90 max-w-2xl" style={{ fontSize: '1.2rem', fontStyle: 'italic', lineHeight: 1.7 }}>
                        Tesisimizden fotoğraflar, doğa manzaraları ve yöresel sofralar.
                    </p>
                </div>
            </section>

            {/* ============ GALLERY GRID ============ */}
            <section className="bg-charcoal py-24 md:py-32">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                        {galleryImages.map((image, index) => (
                            <div
                                key={index}
                                className="relative aspect-square overflow-hidden group cursor-pointer"
                            >
                                <Image
                                    src={image}
                                    alt={`Tesis fotoğrafı ${index + 1}`}
                                    fill
                                    className="object-cover transition-all duration-700 brightness-90 group-hover:brightness-110 group-hover:scale-110"
                                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
