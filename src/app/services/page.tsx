import { Metadata } from "next";
import { services } from "@/data/site-data";
import { Reveal } from "@/components/animated/reveal";
import { RevealEnhanced } from "@/components/animated/reveal-enhanced";
import { SalesProof } from "@/components/sections/sales-proof";

export const metadata: Metadata = {
  title: "Услуги по разработке сайтов и ботов | NerdServ",
  description: "Разработка сайтов под ключ: лендинги, корпоративные сайты, интернет-магазины. Telegram-боты для бизнеса. Автоматизация процессов. Цены от 25 000 ₽.",
  keywords: "разработка сайтов цена, заказать разработку сайта, создание сайтов под ключ, разработка лендинга, telegram бот разработка, автоматизация бизнеса",
  alternates: {
    canonical: 'https://nerdserv.pro/services',
  },
  openGraph: {
    title: 'Услуги по разработке сайтов и ботов | NerdServ',
    description: 'Разработка сайтов под ключ от 40 000 ₽. Telegram-боты от 25 000 ₽. Автоматизация от 30 000 ₽.',
    url: 'https://nerdserv.pro/services',
  },
};

export default function ServicesPage() {
  const basicServices = services.filter((item) => item.category === "basic");
  const extraServices = services.filter((item) => item.category === "extra");

  return (
    <section className="section">
      <div className="container-main">
        <RevealEnhanced direction="left" delay={0.05}>
          <h1 className="title">Услуги</h1>
        </RevealEnhanced>
        <RevealEnhanced direction="right" delay={0.08}>
          <p className="subtitle">Решения под задачи бизнеса: от лендингов до сложных автоматизаций.</p>
        </RevealEnhanced>

        <RevealEnhanced direction="left" delay={0.1}>
          <h2 className="mt-8 text-2xl font-semibold">Базовые услуги</h2>
        </RevealEnhanced>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {basicServices.map((item, i) => (
            <RevealEnhanced 
              key={item.id} 
              delay={0.12 + i * 0.05}
              direction={i % 2 === 0 ? "left" : "right"}
            >
              <article className="glass rounded-2xl p-6 transition hover:-translate-y-2 hover:border-lime-300/40">
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="mt-3 text-sm text-gray-300">{item.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-200">
                  {item.benefits.map((benefit) => (
                    <li key={benefit}>• {benefit}</li>
                  ))}
                </ul>
                <p className="mt-6 text-lime-300">{item.priceFrom}</p>
              </article>
            </RevealEnhanced>
          ))}
        </div>

        <RevealEnhanced direction="right" delay={0.3}>
          <h2 className="mt-10 text-2xl font-semibold">Дополнительные услуги (Upsell)</h2>
          <p className="mt-2 text-sm text-gray-300">
            Добавьте нужные опции к базовой разработке, чтобы быстрее получить результат и масштабироваться.
          </p>
        </RevealEnhanced>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {extraServices.map((item, i) => (
            <RevealEnhanced 
              key={item.id} 
              delay={0.32 + i * 0.04}
              direction={i % 2 === 0 ? "left" : "right"}
            >
              <article className="glass rounded-2xl p-6 transition hover:-translate-y-1">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-300">{item.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-200">
                  {item.benefits.map((benefit) => (
                    <li key={benefit}>• {benefit}</li>
                  ))}
                </ul>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-gray-400">Цена:</span>
                  <span className="text-sm font-semibold text-lime-300">{item.priceFrom}</span>
                </div>
              </article>
            </RevealEnhanced>
          ))}
        </div>

        <RevealEnhanced direction="up" delay={0.45} className="mt-8">
          <SalesProof />
        </RevealEnhanced>
      </div>
    </section>
  );
}
