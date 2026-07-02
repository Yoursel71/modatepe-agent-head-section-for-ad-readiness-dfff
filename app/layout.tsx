import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover', // For safe area handling on notched devices
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0F3D2E' },
    { media: '(prefers-color-scheme: dark)', color: '#0F3D2E' }
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL('https://modatepecafe.com'),
  title: {
    default: 'Modatepe Restoran & Konaklama - Trabzon Ortahisar',
    template: '%s | Modatepe',
  },
  description: 'Trabzon Ortahisar\'da hizmet veren Modatepe Restoran & Konaklama. Lezzetli yemekler ve konforlu konaklama imkanı.',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Modatepe',
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    alternateLocale: ['en_US', 'ar_SA'],
    url: 'https://modatepecafe.com',
    siteName: 'Modatepe Restoran & Konaklama',
    title: 'Modatepe Restoran & Konaklama - Trabzon Ortahisar',
    description: 'Trabzon Ortahisar\'da hizmet veren Modatepe Restoran & Konaklama. Lezzetli yemekler ve konforlu konaklama imkanı.',
    images: [
      {
        url: '/icon-512.png',
        width: 512,
        height: 512,
        alt: 'Modatepe Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Modatepe Restoran & Konaklama',
    description: 'Trabzon Ortahisar\'da hizmet veren Modatepe Restoran & Konaklama.',
    images: ['/icon-512.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KCD93RR5');`}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KCD93RR5"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
        <Analytics />
      </body>
    </html>
  )
}
