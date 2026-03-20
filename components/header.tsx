'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { LanguageSwitcher } from '@/components/language-switcher';
import { ThemeToggle } from '@/components/theme-toggle';
import { Menu, MessageCircle, Home, ImageIcon, UtensilsCrossed, BedDouble, Newspaper, Phone } from 'lucide-react';
import type { Locale } from '@/lib/i18n';
import { cn } from '@/lib/utils';
import { useScrollLock } from '@/hooks/use-scroll-lock';
import { useIsMobile, useIsDesktop } from '@/hooks/use-media-query';

interface HeaderProps {
  locale: Locale;
  translations: any;
}

export function Header({ locale, translations }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isMobile = useIsMobile();
  const isDesktop = useIsDesktop();

  // Lock scroll when mobile menu is open
  useScrollLock(isOpen && isMobile);

  const navigation = [
    { name: translations.nav.home, href: `/${locale}`, icon: Home },
    { name: translations.nav.galleryPhotos, href: `/${locale}/galeri`, icon: ImageIcon },
    { name: translations.nav.menu, href: `/${locale}/menu`, icon: UtensilsCrossed },
    { name: translations.nav.accommodation, href: `/${locale}/konaklama`, icon: BedDouble },
    { name: translations.nav.blog, href: `/${locale}/blog`, icon: Newspaper },
    { name: translations.nav.contact, href: `/${locale}/iletisim`, icon: Phone },
  ];

  // Bottom nav shows only key items for mobile (max 5)
  const mobileNavItems = [
    { name: translations.nav.home, href: `/${locale}`, icon: Home },
    { name: translations.nav.menu, href: `/${locale}/menu`, icon: UtensilsCrossed },
    { name: translations.nav.galleryPhotos, href: `/${locale}/galeri`, icon: ImageIcon },
    { name: translations.nav.accommodation, href: `/${locale}/konaklama`, icon: BedDouble },
    { name: translations.nav.contact, href: `/${locale}/iletisim`, icon: Phone },
  ];

  const whatsappUrl = "https://wa.me/905324484984?text=Merhaba,%20Modatepe'de%20rezervasyon%20yapmak%20istiyorum.";

  return (
    <>
      {/* Top Header */}
      <header className="glass-strong sticky top-0 z-50 shadow-soft">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center space-x-3">
            <div className="w-10 h-10 gradient-green rounded-lg flex items-center justify-center shadow-glow">
              <span className="text-white font-bold text-base">M</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-brand-green">Modatepe</h1>
              <p className="text-xs text-brand-gray-600">Restoran & Konaklama</p>
            </div>
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center space-x-10 flex-1 justify-center">
            {navigation.map((item) => {
              const isActive = pathname === item.href ||
                (item.href !== `/${locale}` && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'text-base font-semibold transition-colors hover:text-brand-green',
                    isActive
                      ? 'text-brand-green'
                      : 'text-gray-700 dark:text-gray-200'
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Side */}
          <div className="flex items-center space-x-3">
            <ThemeToggle />
            <LanguageSwitcher currentLocale={locale} />

            {/* WhatsApp CTA */}
            <Button asChild className="whatsapp-btn hover-glow">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span className="hidden sm:inline">{translations.cta.bookNow}</span>
              </a>
            </Button>

            {/* Mobile Menu Button (hamburger - for full nav with blog etc.) */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="sm">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <nav className="mt-8 flex flex-col space-y-4">
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
                          'text-lg font-medium transition-colors hover:text-brand-green py-2 flex items-center gap-3',
                          isActive
                            ? 'text-brand-green'
                            : 'text-gray-700 dark:text-gray-200'
                        )}
                      >
                        <Icon className="w-5 h-5" />
                        {item.name}
                      </Link>
                    );
                  })}
                </nav>

                {/* WhatsApp in side menu */}
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <Button asChild className="whatsapp-btn hover-glow w-full">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      {translations.cta.bookNow}
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation Bar */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-t border-gray-200 dark:border-gray-700 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <div className="flex items-center justify-around px-1 py-1.5 safe-area-bottom">
          {mobileNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href ||
              (item.href !== `/${locale}` && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex flex-col items-center justify-center py-1.5 px-2 rounded-xl transition-all duration-200 min-w-[56px]',
                  isActive
                    ? 'text-brand-green bg-green-50 dark:bg-green-900/30'
                    : 'text-gray-500 dark:text-gray-400 hover:text-brand-green active:bg-gray-50 dark:active:bg-gray-800'
                )}
              >
                <Icon className={cn('w-5 h-5 mb-0.5', isActive && 'scale-110')} />
                <span className={cn(
                  'text-[10px] leading-tight font-medium truncate max-w-[56px]',
                  isActive && 'font-semibold'
                )}>
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
