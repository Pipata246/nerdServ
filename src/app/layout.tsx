import type { Metadata } from "next";
import "./globals.css";
import { SiteShell } from "@/components/layout/site-shell";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'NerdServ',
    url: 'https://nerdserv.tech',
    logo: 'https://nerdserv.tech/images/avatar.png',
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
      'https://www.instagram.com/c.ler.c/',
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
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'NerdServ',
    url: 'https://nerdserv.tech',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://nerdserv.tech/?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'SiteLinksSearchBox',
    url: 'https://nerdserv.tech',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://nerdserv.tech/?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Разделы сайта NerdServ',
    itemListElement: [
      {
        '@type': 'SiteNavigationElement',
        position: 1,
        name: 'Услуги',
        description: 'Разработка сайтов, Telegram-ботов и автоматизация бизнеса',
        url: 'https://nerdserv.tech/services',
      },
      {
        '@type': 'SiteNavigationElement',
        position: 2,
        name: 'Портфолио',
        description: 'Реализованные проекты: сайты, боты, интеграции',
        url: 'https://nerdserv.tech/portfolio',
      },
      {
        '@type': 'SiteNavigationElement',
        position: 3,
        name: 'Обо мне',
        description: 'Fullstack-разработчик и UX/UI-дизайнер',
        url: 'https://nerdserv.tech/about',
      },
      {
        '@type': 'SiteNavigationElement',
        position: 4,
        name: 'Ваш кейс',
        description: 'Подбор решения под вашу задачу',
        url: 'https://nerdserv.tech/your-case',
      },
      {
        '@type': 'SiteNavigationElement',
        position: 5,
        name: 'Контакты',
        description: 'Связаться с NerdServ',
        url: 'https://nerdserv.tech/contact',
      },
    ],
  },
];

export const metadata: Metadata = {
  title: "NerdServ — Бизнес-решения и веб-разработка",
  description: "Разработка сайтов, создание Telegram-ботов и автоматизация бизнеса. Лендинги, корпоративные сайты, интернет-магазины. Быстро, качественно, с гарантией. От 40 000 ₽.",
  keywords: "разработка сайтов, создание сайтов, разработка сайта, создать сайт, заказать сайт, сделать сайт, разработка веб сайтов, создание веб сайтов, разработка лендинга, telegram бот, nerdserv, нердсерв",
  authors: [{ name: "NerdServ" }],
  creator: "NerdServ",
  publisher: "NerdServ",
  metadataBase: new URL('https://nerdserv.tech'),
  alternates: {
    canonical: 'https://nerdserv.tech',
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://nerdserv.tech',
    siteName: 'NerdServ',
    title: 'NerdServ — Бизнес-решения и веб-разработка',
    description: 'Профессиональная разработка сайтов, Telegram-ботов и автоматизация процессов. Лендинги от 40 000 ₽. Гарантия 14 дней.',
    images: [
      {
        url: 'https://nerdserv.tech/images/123.jpg',
        width: 1200,
        height: 630,
        alt: 'NerdServ — Бизнес-решения и веб-разработка',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NerdServ — Бизнес-решения и веб-разработка',
    description: 'Профессиональная разработка сайтов, Telegram-ботов и автоматизация процессов. Лендинги от 40 000 ₽.',
    images: ['https://nerdserv.tech/images/123.jpg'],
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
    google: 'your-google-verification-code',
  },
  icons: {
    icon: '/icon.svg',
  },
  other: {
    'script:ld+json': JSON.stringify(jsonLd),
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body>
        <SiteShell>{children}</SiteShell>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
