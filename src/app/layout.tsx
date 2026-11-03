import type { Metadata } from "next";
import "./globals.css";
import { SiteShell } from "@/components/layout/site-shell";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

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
        url: 'https://nerdserv.tech/images/avatar.png',
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
    images: ['https://nerdserv.tech/images/avatar.png'],
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
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
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
  };

  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <link rel="preload" href="/images/avatar.png" as="image" />
        <link rel="icon" href="/images/avatar.png" />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <SiteShell>{children}</SiteShell>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
