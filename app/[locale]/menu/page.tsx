import { Metadata } from 'next';
import Image from 'next/image';
import et from '/images/Et.jpeg';
import kahvalti from '/images/Kahvalti.jpeg';
import { Button } from '@/components/ui/button';
import { getTranslations, type Locale } from '@/lib/i18n';
import { MessageCircle } from 'lucide-react';

interface MenuPageProps {
    params: { locale: Locale };
}

export async function generateMetadata({ params }: MenuPageProps): Promise<Metadata> {
    const translations = await getTranslations(params.locale);
    return {
        title: translations.restaurant.menu.title,
        description: 'Modatepe Restoran menüsü',
    };
}

export default async function MenuPage({ params: { locale } }: MenuPageProps) {
    const translations = await getTranslations(locale);
    const whatsappUrl = "https://wa.me/905324484984?text=Merhaba,%20Modatepe'de%20rezervasyon%20yapmak%20istiyorum.";

    const menuData = {
        breakfast: {
            label: translations.restaurant.menu.breakfast,
            emoji: '☕',
            accent: '#C2783C',
            bg: '#FDF6EE',
            border: '#E8C89A',
            items: [
                {
                    name: translations.restaurant.menuItems.serpmeKahvalti.name,
                    price: `₺750 / ${translations.restaurant.menu.perPerson}`,
                    description: translations.restaurant.menuItems.serpmeKahvalti.description,
                    highlight: true,
                },
            ],
        },
        mainCourses: {
            label: translations.restaurant.menu.mainCourses,
            emoji: '🥩',
            accent: '#7C3A2A',
            bg: '#FDF0EC',
            border: '#D9A090',
            items: [
                { name: translations.restaurant.menuItems.kuzuPirzola.name, price: '₺900', description: translations.restaurant.menuItems.kuzuPirzola.description },
                { name: translations.restaurant.menuItems.danaAntrikot.name, price: '₺900', description: translations.restaurant.menuItems.danaAntrikot.description },
                { name: translations.restaurant.menuItems.sacKavurma.name, price: '₺900', description: translations.restaurant.menuItems.sacKavurma.description },
                { name: translations.restaurant.menuItems.kofte.name, price: '₺600', description: translations.restaurant.menuItems.kofte.description },
                { name: translations.restaurant.menuItems.tavukIzgara.name, price: '₺500', description: translations.restaurant.menuItems.tavukIzgara.description },
                { name: translations.restaurant.menuItems.kofteKilo.name, price: '₺1550', description: translations.restaurant.menuItems.kofteKilo.description },
            ],
        },
        drinks: {
            label: translations.restaurant.menu.drinks,
            emoji: '🍵',
            accent: '#2E6B5E',
            bg: '#EDF5F2',
            border: '#8EC5B8',
            items: [
                { name: translations.restaurant.menuItems.turkKahvesi.name, price: '₺150', description: translations.restaurant.menuItems.turkKahvesi.description },
                { name: translations.restaurant.menuItems.cay.name, price: '₺30', description: translations.restaurant.menuItems.cay.description },
                { name: translations.restaurant.menuItems.nescafe.name, price: '₺100', description: translations.restaurant.menuItems.nescafe.description },
                { name: translations.restaurant.menuItems.mesrubat.name, price: '₺125', description: translations.restaurant.menuItems.mesrubat.description },
                { name: translations.restaurant.menuItems.su.name, price: '₺30', description: translations.restaurant.menuItems.su.description },
            ],
        },
        desserts: {
            label: translations.restaurant.menu.desserts,
            emoji: '🍮',
            accent: '#8B4F7A',
            bg: '#F9F0F5',
            border: '#D4A8C7',
            items: [
                { name: translations.restaurant.menuItems.sutlac.name, price: '₺175', description: translations.restaurant.menuItems.sutlac.description },
            ],
        },
    };

    return (
        <>
            {/* Google Fonts */}
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Lato:wght@300;400;700&display=swap');

                .menu-font { font-family: 'Playfair Display', serif; }
                .menu-body { font-family: 'Lato', sans-serif; }

                .menu-tab-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    padding: 10px 20px;
                    border-radius: 999px;
                    font-size: 0.9rem;
                    font-weight: 600;
                    letter-spacing: 0.02em;
                    border: 2px solid transparent;
                    background: #F5EFE6;
                    color: #6B5038;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    white-space: nowrap;
                    font-family: 'Lato', sans-serif;
                }
                .menu-tab-btn:hover {
                    background: #EDE3D3;
                }
                .menu-tab-btn.active {
                    background: var(--tab-accent);
                    color: #fff;
                    border-color: var(--tab-accent);
                    box-shadow: 0 4px 16px color-mix(in srgb, var(--tab-accent) 40%, transparent);
                }

                .menu-card {
                    background: var(--card-bg);
                    border: 1.5px solid var(--card-border);
                    border-left: 5px solid var(--card-accent);
                    border-radius: 14px;
                    padding: 20px 24px;
                    transition: box-shadow 0.2s ease, transform 0.2s ease;
                }
                .menu-card:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 28px rgba(0,0,0,0.09);
                }
                .menu-card.highlight-card {
                    background: linear-gradient(135deg, #FDF6EE 0%, #FAF0E0 100%);
                    border-left-width: 5px;
                    position: relative;
                    overflow: hidden;
                }
                .menu-card.highlight-card::after {
                    content: '★';
                    position: absolute;
                    top: -12px;
                    right: 20px;
                    font-size: 5rem;
                    color: rgba(194, 120, 60, 0.07);
                    pointer-events: none;
                    font-family: serif;
                }

                .menu-ornament {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    color: #B89060;
                    font-size: 0.8rem;
                    letter-spacing: 0.12em;
                    text-transform: uppercase;
                }
                .menu-ornament::before,
                .menu-ornament::after {
                    content: '';
                    flex: 1;
                    height: 1px;
                    background: linear-gradient(to right, transparent, #D4B078, transparent);
                }

                .menu-hero-overlay {
                    background: linear-gradient(
                        160deg,
                        rgba(80, 38, 10, 0.75) 0%,
                        rgba(140, 70, 20, 0.55) 50%,
                        rgba(30, 60, 40, 0.70) 100%
                    );
                }

                .tab-scroll {
                    display: flex;
                    gap: 10px;
                    overflow-x: auto;
                    padding: 4px 2px 8px;
                    scrollbar-width: none;
                }
                .tab-scroll::-webkit-scrollbar { display: none; }

                .price-tag {
                    font-family: 'Playfair Display', serif;
                    font-weight: 700;
                    font-size: 1.35rem;
                    line-height: 1;
                }
                .info-banner {
                    background: linear-gradient(135deg, #FFFBF2 0%, #FEF5E0 100%);
                    border: 1.5px solid #E8C87A;
                    border-radius: 14px;
                    padding: 20px 24px;
                    display: flex;
                    gap: 14px;
                    align-items: flex-start;
                }
            `}</style>

            {/* Hero */}
            <section className="relative overflow-hidden" style={{ height: '380px' }}>
                <Image
                    src={kahvalti}
                    alt={translations.restaurant.menu.title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority
                />
                <div className="menu-hero-overlay absolute inset-0" />

                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                    <p className="menu-body text-xs tracking-[0.3em] uppercase text-amber-200 mb-3 opacity-90">
                        Modatepe Restoran
                    </p>
                    <h1 className="menu-font text-white font-bold mb-3" style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', textShadow: '0 2px 12px rgba(0,0,0,0.4)' }}>
                        {translations.restaurant.menu.title}
                    </h1>
                    <div className="menu-ornament w-48 mx-auto mb-5">
                        <span>{translations.restaurant.menu.menuSubtitle}</span>
                    </div>
                    <Button asChild className="whatsapp-btn rounded-full px-8 py-5 text-base font-semibold shadow-lg" style={{ backdropFilter: 'blur(8px)' }}>
                        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                            <MessageCircle className="w-5 h-5 mr-2" />
                            {translations.cta.bookNow}
                        </a>
                    </Button>
                </div>
            </section>

            {/* Menu Content */}
            <section className="py-12 menu-body" style={{ background: '#FAF8F4', minHeight: '60vh' }}>
                <div className="container mx-auto px-4 max-w-3xl">

                    {/* Menu category tabs client component — rendered as pure HTML tabs using URL-free state trick */}
                    <MenuTabs menuData={menuData} infoTitle={translations.restaurant.menu.menuInfoTitle} infoText={translations.restaurant.menu.menuInfoText} />

                </div>
            </section>
        </>
    );
}

// Client component for interactive tabs
import { MenuTabs } from '@/components/menu-tabs';
