'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { LanguageSwitcher } from '@/components/language-switcher';
import { Menu, MessageCircle, Home, ImageIcon, UtensilsCrossed, BedDouble, Newspaper, Phone, ChefHat } from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import { cn } from '@/lib/utils';
import { useScrollLock } from '@/hooks/use-scroll-lock';
import { useIsMobile } from '@/hooks/use-media-query';

interface HeaderProps {
  locale: Locale;
  translations: any;
}

export function Header({ locale, translations }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isMobile = useIsMobile();

  useScrollLock(isOpen && isMobile);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navigation = [
    { name: translations.nav.home, href: `/${locale}`, icon: Home },
    { name: translations.nav.restaurant, href: `/${locale}/restoran`, icon: ChefHat },
    { name: translations.nav.galleryPhotos, href: `/${locale}/galeri`, icon: ImageIcon },
    { name: translations.nav.menu, href: `/${locale}/menu`, icon: UtensilsCrossed },
    { name: translations.nav.accommodation, href: `/${locale}/konaklama`, icon: BedDouble },
    { name: translations.nav.blog, href: `/${locale}/blog`, icon: Newspaper },
    { name: translations.nav.contact, href: `/${locale}/iletisim`, icon: Phone },
  ];

  const mobileNavItems = [
    { name: translations.nav.home, href: `/${locale}`, icon: Home },
    { name: translations.nav.restaurant, href: `/${locale}/restoran`, icon: ChefHat },
    { name: translations.nav.menu, href: `/${locale}/menu`, icon: UtensilsCrossed },
    { name: translations.nav.accommodation, href: `/${locale}/konaklama`, icon: BedDouble },
    { name: translations.nav.contact, href: `/${locale}/iletisim`, icon: Phone },
  ];

  const whatsappUrl = "https://wa.me/905324484984?text=Merhaba,%20Modatepe'de%20rezervasyon%20yapmak%20istiyorum.";

  return (
    <>
      {/* Top Header */}
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-charcoal/95 backdrop-blur-md border-b border-gold/15 shadow-lg'
            : 'bg-gradient-to-b from-black/60 via-black/30 to-transparent'
        )}
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-11 h-11 bg-gold flex items-center justify-center group-hover:bg-gold/90 transition-colors" style={{ borderRadius: '2px' }}>
                <span className="font-display font-bold text-base" style={{ color: '#0F1410' }}>M</span>
              </div>
              <span className="absolute -inset-0.5 border border-gold/40 group-hover:border-gold transition-colors pointer-events-none" style={{ borderRadius: '2px' }} />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-display text-lg font-bold text-white tracking-wide leading-tight">Modatepe</h1>
              <p className="font-body-elegant text-[0.65rem] text-gold tracking-[0.25em] uppercase">Restoran & Konaklama</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
            {navigation.map((item) => {
              const isActive = pathname === item.href ||
                (item.href !== `/${locale}` && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'font-body-elegant font-semibold transition-colors relative py-2 group',
                    isActive ? 'text-gold' : 'text-white/90 hover:text-gold'
                  )}
                  style={{ letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.78rem' }}
                >
                  {item.name}
                  <span className={cn(
                    'absolute -bottom-0.5 left-0 right-0 mx-auto h-px bg-gold transition-all duration-300',
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  )} />
                </Link>
              );
            })}
          </nav>

          {/* Right Side */}
          <div className="flex items-center space-x-3">
            <LanguageSwitcher currentLocale={locale} />

            <Button asChild className="hidden sm:inline-flex btn-gold">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                <span>{translations.cta.bookNow}</span>
              </a>
            </Button>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="sm" className="text-white hover:text-gold hover:bg-white/5">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-charcoal border-l border-gold/20 text-white">
                <div className="mt-2 mb-8 text-center">
                  <h2 className="font-display text-2xl text-white font-bold">Modatepe</h2>
                  <p className="font-body-elegant text-gold text-[0.65rem] tracking-[0.3em] uppercase mt-1">
                    Restoran & Konaklama
                  </p>
                  <div className="gold-divider mt-4">
                    <span>✦</span>
                  </div>
                </div>

                <nav className="flex flex-col space-y-1">
                  {navigation.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href ||
                      (item.href !== `/${locale}` && pathname.startsWith(item.href));
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          'font-body-elegant transition-colors py-3 px-3 flex items-center gap-3 border-l-2',
                          isActive
                            ? 'text-gold border-gold bg-gold/5'
                            : 'text-white/80 border-transparent hover:text-gold hover:border-gold/40'
                        )}
                        style={{ fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}
                      >
                        <Icon className="w-4 h-4" />
                        {item.name}
                      </Link>
                    );
                  })}
                </nav>

                <div className="mt-8 pt-6 border-t border-gold/15">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-gold w-full justify-center">
                    <MessageCircle className="w-4 h-4" />
                    {translations.cta.bookNow}
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-charcoal/95 backdrop-blur-lg border-t border-gold/20">
        <div className="flex items-center justify-around px-1 py-2 safe-area-bottom">
          {mobileNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href ||
              (item.href !== `/${locale}` && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex flex-col items-center justify-center py-1.5 px-2 transition-all duration-200 min-w-[56px]',
                  isActive ? 'text-gold' : 'text-white/60 hover:text-gold'
                )}
              >
                <Icon className={cn('w-5 h-5 mb-0.5', isActive && 'scale-110')} />
                <span
                  className={cn(
                    'text-[9px] leading-tight font-medium truncate max-w-[56px] font-body-elegant',
                    isActive && 'font-bold'
                  )}
                  style={{ letterSpacing: '0.05em', textTransform: 'uppercase' }}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
