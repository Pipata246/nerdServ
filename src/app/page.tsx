"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Reveal } from "@/components/animated/reveal";
import { services, cases } from "@/data/site-data";
import { TestimonialsSlider } from "@/components/sections/testimonials-slider";
import { SVGSprinkles } from "@/components/ui/svg-sprinkles";
import { SalesProof } from "@/components/sections/sales-proof";

export default function HomePage() {
  return (
    <>
      <section className="section">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass relative overflow-hidden rounded-3xl p-7 sm:p-12"
          >
            <SVGSprinkles />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="mb-4 text-sm uppercase tracking-[0.2em] text-lime-300"
            >
              Digital services
            </motion.p>
            <h1 className="title">Разработка сайтов и Telegram-ботов под ключ</h1>
            <p className="subtitle">
              Помогаю бизнесу запускать быстрые сайты, автоматизировать рутину и внедрять полезные Telegram-решения.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Оставить заявку
              </Link>
              <Link href="/portfolio" className="btn-secondary">
                Смотреть кейсы
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container-main">
          <Reveal>
            <h2 className="text-2xl font-bold sm:text-3xl">Мои услуги</h2>
          </Reveal>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {services.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.1}>
                <article className="glass rounded-2xl p-5">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-300">{item.description}</p>
                  <p className="mt-4 text-sm text-lime-300">{item.priceFrom}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section py-6 sm:py-8">
        <div className="container-main">
          <Reveal>
            <SalesProof />
          </Reveal>
        </div>
      </section>

      <section className="section pt-6 sm:pt-8">
        <div className="container-main grid gap-6 lg:grid-cols-3">
          {["Системный подход", "Быстрая коммуникация", "Ориентация на результат"].map((item, i) => (
            <Reveal key={item} delay={i * 0.12}>
              <div className="glass rounded-2xl p-6">
                <h3 className="text-lg font-semibold">{item}</h3>
                <p className="mt-2 text-sm text-gray-300">
                  Работаю прозрачно: четкие этапы, регулярные отчеты и измеримый результат.
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container-main">
          <Reveal>
            <h2 className="text-2xl font-bold sm:text-3xl">Превью кейсов</h2>
          </Reveal>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {cases.slice(0, 3).map((item, i) => (
              <Reveal key={item.id} delay={i * 0.1}>
                <div className="glass relative rounded-2xl p-4">
                  <div className="absolute right-3 top-3 text-lime-300/70">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                      <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="currentColor" />
                    </svg>
                  </div>
                  <div className="flex h-36 items-center justify-center rounded-xl bg-gray-600/40 text-sm text-gray-200">
                    Image Placeholder
                  </div>
                  <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-main">
          <Reveal>
            <h2 className="mb-6 text-2xl font-bold sm:text-3xl">Отзывы</h2>
          </Reveal>
          <TestimonialsSlider />
        </div>
      </section>

      <section className="section">
        <div className="container-main">
          <Reveal>
            <div className="glass rounded-3xl p-8 text-center">
              <h2 className="text-3xl font-bold">Готовы обсудить ваш проект?</h2>
              <p className="mx-auto mt-3 max-w-xl text-gray-300">Опишите задачу, и я предложу лучшее техническое решение.</p>
              <Link href="/contact" className="btn-primary mt-6">
                Оставить заявку
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
