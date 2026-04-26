import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { getTranslations, getDirection, type Locale } from '@/lib/i18n';

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: Locale };
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: LocaleLayoutProps) {
  const translations = await getTranslations(locale);
  const direction = getDirection(locale);

  return (
    <div lang={locale} dir={direction} className="min-h-screen bg-background text-foreground">
      <Header locale={locale} translations={translations} />
      <main className="flex-1">
        {children}
      </main>
      <Footer locale={locale} translations={translations} />
    </div>
  );
}

export { generateStaticParams } from '@/lib/i18n';