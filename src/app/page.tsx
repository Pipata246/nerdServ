"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Reveal } from "@/components/animated/reveal";
import { services, cases } from "@/data/site-data";
import { TestimonialsSlider } from "@/components/sections/testimonials-slider";
import { SVGSprinkles } from "@/components/ui/svg-sprinkles";
import { SalesProof } from "@/components/sections/sales-proof";

export default function HomePage() {
  const basicServices = services.filter((item) => item.category === "basic");

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
              Помогаю бизнесу запускать быстрые сайты, автоматизировать рутину и внедрять полезные Решения.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/contact" className="btn-primary w-full justify-center sm:w-auto">
                Оставить заявку
              </Link>
              <Link href="/portfolio" className="btn-secondary w-full justify-center sm:w-auto">
                Смотреть кейсы
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section pt-6 sm:pt-8">
        <div className="container-main">
          <Reveal>
            <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-lime-300/90">Почему выбирают меня</p>
                <h2 className="mt-2 text-2xl font-bold sm:text-3xl">Работаю как партнер, а не просто исполнитель</h2>
                <p className="mt-2 max-w-3xl text-sm text-gray-300 sm:text-base">
                  Вы получаете не только код, но и понятный процесс: от идеи и приоритетов до запуска и улучшений по метрикам.
                </p>
              </div>
              <Link href="/contact" className="btn-secondary w-full justify-center sm:w-auto">
                Обсудить задачу
              </Link>
            </div>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Системный подход",
                text: "Фиксируем цель проекта, этапы, сроки и KPI до старта работ."
              },
              {
                title: "Быстрая коммуникация",
                text: "Регулярные апдейты и ответы без задержек, чтобы вы не теряли темп."
              },
              {
                title: "Ориентация на результат",
                text: "Фокус на заявках, скорости и удобстве пользователя, а не на 'красивом коде ради кода'."
              }
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.12}>
                <div className="glass rounded-2xl p-6">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-300">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-main">
          <Reveal>
            <h2 className="text-2xl font-bold sm:text-3xl">Мои услуги</h2>
          </Reveal>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {basicServices.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.1}>
                <article className="glass rounded-2xl p-5">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-300">{item.description}</p>
                  <p className="mt-4 text-sm text-lime-300">{item.priceFrom}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <p className="mt-5 text-sm text-gray-300">
              Также доступны дополнительные услуги: поддержка, CRM/платежки, CMS, парсинг, редизайн и другие.
            </p>
            <Link href="/services" className="btn-secondary mt-3 w-full justify-center sm:w-auto">
              Смотреть все 9 услуг
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section py-6 sm:py-8">
        <div className="container-main">
          <Reveal>
            <SalesProof />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container-main">
          <Reveal>
            <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-lime-300/90">Портфолио и результаты</p>
                <h2 className="mt-2 text-2xl font-bold sm:text-3xl">Превью кейсов</h2>
                <p className="mt-2 max-w-2xl text-sm text-gray-300">Каждый кейс показывает измеримый результат, а не просто красивый макет.</p>
              </div>
              <Link href="/portfolio" className="btn-secondary w-full justify-center sm:w-auto">
                Смотреть все кейсы
              </Link>
            </div>
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
                  {"stack" in item && item.stack && <p className="mt-2 text-xs text-gray-400">{item.stack}</p>}
                  {"result" in item && item.result && <p className="mt-2 text-sm font-semibold text-lime-300">{item.result}</p>}
                  <p className="mt-2 text-sm text-gray-300">{item.description}</p>
                  <Link href="/portfolio" className="btn-secondary mt-4 w-full justify-center text-sm">
                    Подробнее
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-main">
          <Reveal>
            <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-lime-300/90">Социальное доказательство</p>
                <h2 className="mt-2 text-2xl font-bold sm:text-3xl">Отзывы клиентов</h2>
                <p className="mt-2 max-w-2xl text-sm text-gray-300">
                  Клиенты возвращаются за следующими задачами, потому что получают результат и понятный процесс работы.
                </p>
              </div>
              <Link href="/contact" className="btn-secondary w-full justify-center sm:w-auto">
                Хочу такой же результат
              </Link>
            </div>
          </Reveal>
          <div className="grid gap-4 lg:grid-cols-[2fr_1fr]">
            <TestimonialsSlider />
            <div className="glass flex flex-col gap-4 rounded-2xl p-5">
              {/* Rating */}
              <div className="rounded-xl bg-lime-300/8 p-4">
                <p className="text-xs uppercase tracking-widest text-gray-400">Средняя оценка</p>
                <div className="mt-2 flex items-end gap-2">
                  <span className="text-4xl font-black text-lime-300">5.0</span>
                  <span className="mb-1 text-lg text-gray-500">/ 5</span>
                </div>
                <div className="mt-2 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-lime-300">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              {/* Stats */}
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/8 bg-white/3 p-3 text-center">
                  <p className="text-2xl font-bold text-white">12</p>
                  <p className="mt-0.5 text-xs text-gray-400">отзывов</p>
                </div>
                <div className="rounded-xl border border-white/8 bg-white/3 p-3 text-center">
                  <p className="text-2xl font-bold text-white">40+</p>
                  <p className="mt-0.5 text-xs text-gray-400">проектов</p>
                </div>
              </div>
              <p className="text-xs leading-relaxed text-gray-400">
                Отзывы по сайтам, Telegram-ботам и автоматизации процессов.
              </p>
              <Link href="/contact" className="btn-primary mt-auto w-full justify-center">
                Обсудить ваш проект
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-main">
          <Reveal>
            <div className="glass rounded-3xl p-6 text-center sm:p-8">
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-lime-300/90">Финальный шаг</p>
              <h2 className="text-3xl font-bold">Готовы обсудить ваш проект?</h2>
              <p className="mx-auto mt-3 max-w-xl text-gray-300">Опишите задачу, и я предложу лучшее техническое решение.</p>
              <div className="mx-auto mt-4 flex max-w-2xl flex-wrap justify-center gap-2 text-xs text-gray-300">
                <span className="rounded-full border border-lime-300/30 bg-lime-300/10 px-3 py-1">Ответ в течение 1 часа</span>
                <span className="rounded-full border border-lime-300/30 bg-lime-300/10 px-3 py-1">Старт работ за 24 часа</span>
              </div>
              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <Link href="/contact" className="btn-primary w-full justify-center sm:w-auto">
                  Оставить заявку
                </Link>
                <Link href="/services" className="btn-secondary w-full justify-center sm:w-auto">
                  Посмотреть услуги
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
