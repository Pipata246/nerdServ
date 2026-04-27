import { Metadata } from "next";
import { YourCaseClient } from "./your-case-client";

export const metadata: Metadata = {
  title: "Как проходит разработка сайта — 7 этапов работы | NerdServ",
  description: "Прозрачный процесс разработки сайта от заявки до запуска. 7 этапов работы: консультация, ТЗ, разработка, тестирование, запуск, поддержка. Без скрытых платежей.",
  keywords: "этапы разработки сайта, процесс создания сайта, как заказать сайт, разработка сайта под ключ этапы",
  alternates: {
    canonical: 'https://nerdserv.pro/your-case',
  },
  openGraph: {
    title: 'Как проходит разработка сайта — 7 этапов | NerdServ',
    description: 'Узнайте как проходит работа над вашим проектом. Прозрачный процесс без сюрпризов.',
    url: 'https://nerdserv.pro/your-case',
  },
};

export default function YourCasePage() {
  return <YourCaseClient />;
}
