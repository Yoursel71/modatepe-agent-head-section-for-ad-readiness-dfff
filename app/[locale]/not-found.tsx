import Link from 'next/link';
import Image from 'next/image';
import manzaragece from '/images/manzaragece.jpeg';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Cormorant+Garamond:wght@400;500;600;700&family=Lato:wght@300;400;500;700&display=swap');
      `}</style>

      <Image src={manzaragece} alt="" fill priority className="object-cover animate-ken-burns" sizes="100vw" />
      <div className="absolute inset-0 cinema-overlay-full" />

      <div className="relative z-10 text-center px-6 max-w-xl">
        <h1 className="font-display text-white font-bold mb-3" style={{ fontSize: 'clamp(4rem, 14vw, 9rem)', lineHeight: 1, textShadow: '0 4px 28px rgba(0,0,0,0.5)' }}>
          404
        </h1>
        <div className="gold-divider mx-auto mb-6">
          <span>✦</span>
        </div>
        <h2 className="font-display text-white mb-4 font-semibold" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.2rem)' }}>
          Sayfa Bulunamadı
        </h2>
        <p className="font-serif-elegant text-white/85 mb-10 mx-auto" style={{ fontSize: '1.15rem', lineHeight: 1.7, fontStyle: 'italic', maxWidth: '420px' }}>
          Aradığınız sayfa mevcut değil veya taşınmış olabilir.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/tr" className="btn-gold">
            <Home className="w-4 h-4" />
            Ana Sayfa&apos;ya Dön
          </Link>
        </div>
      </div>
    </div>
  );
}
