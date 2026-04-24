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
                <div className="glass flex flex-col rounded-2xl p-5">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full border border-lime-300/25 bg-lime-300/10 px-2.5 py-0.5 text-xs text-lime-300">
                      {item.type === "site" ? "Сайт" : item.type === "bot" ? "Telegram-бот" : "Интеграция"}
                    </span>
                    {"stack" in item && item.stack && (
                      <span className="text-xs text-gray-500">{item.stack}</span>
                    )}
                  </div>
                  <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                  {"result" in item && item.result && (
                    <p className="mt-1 text-sm font-semibold text-lime-300">{item.result}</p>
                  )}
                  <p className="mt-2 flex-1 text-sm text-gray-300">{item.description}</p>
                  <Link href="/portfolio" className="btn-secondary mt-4 w-full justify-center text-sm">
                    Смотреть кейсы
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

      {/* Your Case teaser */}
      <section className="section">
        <div className="container-main">
          <Reveal>
            {/* Unique design: diagonal split with gradient */}
            <div className="relative overflow-hidden rounded-3xl border border-lime-300/20 bg-gradient-to-br from-lime-300/5 via-transparent to-transparent p-6 sm:p-10">
              {/* Diagonal accent line */}
              <div className="pointer-events-none absolute -right-40 top-0 h-full w-96 rotate-12 bg-gradient-to-b from-lime-300/10 to-transparent blur-2xl" />

              <div className="relative grid gap-8 lg:grid-cols-[1fr_1.2fr]">
                {/* Left */}
                <div className="flex flex-col justify-between gap-6">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-lime-300/30 bg-lime-300/10 px-3 py-1">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3 w-3 text-lime-300">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      <span className="text-xs font-semibold uppercase tracking-wider text-lime-300">Как это работает</span>
                    </div>
                    <h2 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl">
                      Хотите знать, что будет происходить с вашим проектом?
                    </h2>
                    <p className="mt-3 text-gray-300">
                      Никаких сюрпризов. Посмотрите все 7 этапов — от первого сообщения до запуска и поддержки. Прозрачно, по шагам, без лишних вопросов.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Link href="/your-case" className="btn-primary w-full justify-center sm:w-auto">
                      Смотреть все этапы →
                    </Link>
                    <Link href="/contact" className="btn-secondary w-full justify-center sm:w-auto">
                      Начать проект
                    </Link>
                  </div>
                </div>

                {/* Right: step preview cards with stagger */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { n: "01", label: "Бесплатная консультация", hint: "Отвечаю в течение 1 часа", color: "lime" },
                    { n: "03", label: "Цена и сроки зафиксированы", hint: "Никаких доплат в процессе", color: "violet" },
                    { n: "04", label: "Следите за прогрессом", hint: "Тестовая среда всегда доступна", color: "orange" },
                    { n: "06", label: "Запуск под ключ", hint: "Вы получаете клиентов", color: "teal" },
                  ].map((s, i) => (
                    <Reveal key={s.n} delay={i * 0.08}>
                      <Link
                        href="/your-case"
                        className="group relative flex flex-col gap-2 overflow-hidden rounded-2xl border border-white/10 bg-black/20 p-4 backdrop-blur-sm transition hover:border-lime-300/40 hover:bg-lime-300/5"
                      >
                        <div className="absolute right-0 top-0 h-16 w-16 translate-x-6 -translate-y-6 rounded-full bg-lime-300/5 blur-xl transition group-hover:bg-lime-300/10" />
                        <span className="relative text-xs font-bold text-lime-300/60 transition group-hover:text-lime-300">
                          Шаг {s.n}
                        </span>
                        <span className="relative text-sm font-semibold leading-snug text-white">{s.label}</span>
                        <span className="relative text-xs text-gray-500">{s.hint}</span>
                      </Link>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section">
        <div className="container-main">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border-2 border-lime-300/30 bg-gradient-to-br from-black/60 via-black/40 to-transparent p-8 sm:p-12">
              <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-lime-300/15 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-lime-300/10 blur-3xl" />

              <div className="relative text-center">
                {/* Label */}
                <div className="inline-flex items-center gap-2 rounded-full border border-lime-300/30 bg-lime-300/10 px-4 py-1.5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-3.5 w-3.5 text-lime-300">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                  </svg>
                  <span className="text-xs font-semibold uppercase tracking-widest text-lime-300">Готовы начать?</span>
                </div>

                <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-black sm:text-4xl lg:text-5xl">
                  Расскажите о своей задаче
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-base text-gray-300 sm:text-lg">
                  Напишите в двух словах — что нужно сделать. Я отвечу в течение часа, оценю задачу и предложу конкретный план.
                </p>

                {/* Tags with SVG icons */}
                <div className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-3">
                  {[
                    {
                      value: "Ответ за 1 час",
                      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                    },
                    {
                      value: "Оценка бесплатно",
                      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
                    },
                    {
                      value: "Старт за 24 часа",
                      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4"><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" /></svg>
                    },
                    {
                      value: "Фиксированная цена",
                      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /></svg>
                    },
                  ].map((tag) => (
                    <span
                      key={tag.value}
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-gray-200 backdrop-blur-sm"
                    >
                      <span className="text-lime-300">{tag.icon}</span>
                      {tag.value}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                  <Link href="/contact" className="btn-primary w-full justify-center text-base sm:w-auto">
                    Оставить заявку
                  </Link>
                  <Link href="/your-case" className="btn-secondary w-full justify-center text-base sm:w-auto">
                    Как проходит работа
                  </Link>
                </div>

                {/* Bottom stats */}
                <div className="mx-auto mt-10 flex max-w-lg justify-center gap-8 border-t border-white/10 pt-6">
                  {[
                    { value: "40+", label: "проектов сдано" },
                    { value: "5.0", label: "средняя оценка" },
                    { value: "2 нед.", label: "гарантия" },
                  ].map((s) => (
                    <div key={s.label} className="text-center">
                      <p className="text-2xl font-black text-lime-300">{s.value}</p>
                      <p className="mt-1 text-xs text-gray-500">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
