'use client';

import { useState } from 'react';

interface MenuItem {
    name: string;
    price: string;
    description?: string;
    highlight?: boolean;
}

interface CategoryData {
    label: string;
    emoji: string;
    accent: string;
    bg: string;
    border: string;
    items: MenuItem[];
}

interface MenuTabsProps {
    menuData: Record<string, CategoryData>;
    infoTitle: string;
    infoText: string;
}

export function MenuTabs({ menuData, infoTitle, infoText }: MenuTabsProps) {
    const keys = Object.keys(menuData) as (keyof typeof menuData)[];
    const [active, setActive] = useState<string>(keys[0]);

    const current = menuData[active];

    return (
        <>
            {/* Tab bar */}
            <div className="tab-scroll sticky top-4 z-40 bg-transparent mb-8">
                <div className="flex gap-2.5 bg-white/80 backdrop-blur-md rounded-2xl p-2 shadow-sm border border-amber-100">
                    {keys.map((key) => {
                        const cat = menuData[key];
                        const isActive = key === active;
                        return (
                            <button
                                key={key}
                                className="menu-tab-btn"
                                style={{
                                    ['--tab-accent' as string]: cat.accent,
                                } as React.CSSProperties}
                                data-active={isActive}
                                onClick={() => setActive(key)}
                                aria-selected={isActive}
                                role="tab"
                                // inline active class trick via data attribute
                                {...(isActive ? { 'aria-current': 'true' } : {})}
                            >
                                <span>{cat.emoji}</span>
                                <span>{cat.label}</span>
                                <style>{`
                                    button[aria-current="true"].menu-tab-btn {
                                        background: ${isActive ? cat.accent : ''} !important;
                                        color: ${isActive ? '#fff' : ''} !important;
                                        box-shadow: ${isActive ? `0 4px 16px ${cat.accent}55` : ''};
                                    }
                                `}</style>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Cards */}
            <div className="space-y-4" role="tabpanel">
                {current.items.map((item, index) => (
                    <div
                        key={index}
                        className={`menu-card${item.highlight ? ' highlight-card' : ''}`}
                        style={{
                            ['--card-bg' as string]: current.bg,
                            ['--card-border' as string]: current.border,
                            ['--card-accent' as string]: current.accent,
                        } as React.CSSProperties}
                    >
                        <div className="flex justify-between items-start gap-4">
                            <div className="flex-1">
                                {item.highlight && (
                                    <span className="menu-body inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3"
                                        style={{ background: current.accent, color: '#fff', letterSpacing: '0.12em' }}>
                                        ✦ Özel
                                    </span>
                                )}
                                <h3 className="menu-font font-semibold text-xl leading-snug mb-1.5"
                                    style={{ color: current.accent }}>
                                    {item.name}
                                </h3>
                                {item.description && (
                                    <p className="menu-body text-sm leading-relaxed" style={{ color: '#7A6248' }}>
                                        {item.description}
                                    </p>
                                )}
                            </div>
                            <div className="flex-shrink-0 text-right">
                                <div className="price-tag" style={{ color: current.accent }}>
                                    {item.price}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Info Banner */}
            <div className="info-banner mt-10 mb-6">
                <span style={{ fontSize: '1.4rem', lineHeight: 1, marginTop: '2px' }}>ℹ️</span>
                <div>
                    <h4 className="menu-font font-semibold mb-1" style={{ color: '#7C5522', fontSize: '1rem' }}>
                        {infoTitle}
                    </h4>
                    <p className="menu-body text-sm leading-relaxed" style={{ color: '#8B6840' }}>
                        {infoText}
                    </p>
                </div>
            </div>
        </>
    );
}
