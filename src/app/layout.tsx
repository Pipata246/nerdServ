import type { Metadata } from "next";
import "./globals.css";
import { SiteShell } from "@/components/layout/site-shell";

export const metadata: Metadata = {
  title: "NerdServ — Разработка сайтов и Telegram-ботов под ключ | Создание сайтов",
  description: "Разработка сайтов, создание Telegram-ботов и автоматизация бизнеса. Лендинги, корпоративные сайты, интернет-магазины. Быстро, качественно, с гарантией. От 40 000 ₽.",
  keywords: "разработка сайтов, создание сайтов, разработка сайта, создать сайт, заказать сайт, сделать сайт, разработка веб сайтов, создание веб сайтов, разработка лендинга, telegram бот, nerdserv, нердсерв",
  authors: [{ name: "NerdServ" }],
  creator: "NerdServ",
  publisher: "NerdServ",
  metadataBase: new URL('https://nerdserv.pro'),
  alternates: {
    canonical: 'https://nerdserv.pro',
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://nerdserv.pro',
    siteName: 'NerdServ',
    title: 'NerdServ — Разработка сайтов и Telegram-ботов под ключ',
    description: 'Профессиональная разработка сайтов, Telegram-ботов и автоматизация процессов. Лендинги от 40 000 ₽. Гарантия 14 дней.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'NerdServ — Разработка сайтов',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NerdServ — Разработка сайтов и Telegram-ботов',
    description: 'Профессиональная разработка сайтов, ботов и автоматизация. От 40 000 ₽.',
    images: ['/images/og-image.png'],
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
  verification: {
    yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'NerdServ',
    url: 'https://nerdserv.pro',
    logo: 'https://nerdserv.pro/images/avatar.png',
    description: 'Профессиональная разработка сайтов, Telegram-ботов и автоматизация бизнеса',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'RU',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: ['Russian'],
    },
    sameAs: [
      'https://t.me/nerdserv',
    ],
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'RUB',
      lowPrice: '40000',
      offerCount: '3',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Russia',
    },
  };

  return (
    <html lang="ru">
      <head>
        <link rel="preload" href="/images/avatar.png" as="image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
