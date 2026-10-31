import { Metadata } from "next";
import { PortfolioGrid } from "@/components/sections/portfolio-grid";
import { RevealEnhanced } from "@/components/animated/reveal-enhanced";

export const metadata: Metadata = {
  title: "Портфолио — Примеры разработанных сайтов и ботов | NerdServ",
  description: "Реальные кейсы разработки сайтов, Telegram-ботов и интеграций с результатами. 15+ успешных проектов. Смотрите примеры работ и результаты клиентов.",
  keywords: "примеры сайтов, портфолио разработчика, кейсы разработки, примеры telegram ботов, готовые сайты",
  alternates: {
    canonical: 'https://nerdserv.tech/portfolio',
  },
  openGraph: {
    title: 'Портфолио — Примеры разработанных сайтов | NerdServ',
    description: '15+ реальных кейсов с результатами: +34% конверсии, 70% автоматизации, -12 часов ручной работы.',
    url: 'https://nerdserv.tech/portfolio',
  },
};

export default function PortfolioPage() {
  return (
    <section className="section">
      <div className="container-main">
        <RevealEnhanced direction="left" delay={0.1}>
          <h1 className="title">Кейсы</h1>
        </RevealEnhanced>
        <RevealEnhanced direction="right" delay={0.15}>
          <p className="subtitle">Реальные проекты с описанием задачи, решения и результата.</p>
        </RevealEnhanced>
        <div className="mt-8">
          <PortfolioGrid />
        </div>
      </div>
    </section>
  );
}
