import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'NerdServ — Разработка сайтов и Telegram-ботов',
    short_name: 'NerdServ',
    description: 'Профессиональная разработка сайтов, Telegram-ботов и автоматизация процессов',
    start_url: '/',
    display: 'standalone',
    background_color: '#050505',
    theme_color: '#cbe857',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
