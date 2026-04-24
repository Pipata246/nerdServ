import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/animated/reveal";
import { SVGSprinkles } from "@/components/ui/svg-sprinkles";

export const metadata: Metadata = {
  title: "Обо мне | NerdServ",
  description: "Опыт, навыки и подход к разработке цифровых решений."
};

export default function AboutPage() {
  return (
    <section className="section">
      <div className="container-main">
        <h1 className="title">Обо мне</h1>
        <p className="subtitle">Fullstack-разработчик и UX/UI-дизайнер, создаю удобные и эффективные цифровые продукты.</p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="glass relative overflow-hidden rounded-2xl p-6">
              <SVGSprinkles />
              {/* Photo block */}
              <div className="relative mb-5 overflow-hidden rounded-xl">
                {/* Lime glow behind photo */}
                <div className="pointer-events-none absolute inset-0 z-10 rounded-xl ring-1 ring-lime-300/20" />
                <div className="pointer-events-none absolute -bottom-8 left-1/2 z-0 h-40 w-64 -translate-x-1/2 rounded-full bg-lime-300/15 blur-3xl" />
                <Image
                  src="/images/avatar.png"
                  alt="Фото разработчика"
                  width={600}
                  height={400}
                  className="relative z-[1] h-72 w-full object-cover object-top"
                  priority
                />
              </div>
              <p className="text-gray-300">
                Разрабатываю сайты, Telegram-боты и автоматизации для бизнеса. Работаю от первого созвона до запуска и поддержки — без посредников и размытой ответственности.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass rounded-2xl p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-lime-300/90">Чем занимаюсь</p>
              <h2 className="mt-2 text-2xl font-semibold">Стек и направления</h2>

              <div className="mt-5 grid grid-cols-2 gap-3">
                {[
                  { icon: "⬡", label: "Next.js / React", sub: "Фронтенд и SSR" },
                  { icon: "⬡", label: "Node.js / Python", sub: "Бэкенд и API" },
                  { icon: "⬡", label: "Telegram Bots", sub: "aiogram / python-telegram-bot" },
                  { icon: "⬡", label: "Автоматизация", sub: "Make, Webhook, n8n" },
                  { icon: "⬡", label: "CRM-интеграции", sub: "AmoCRM, Bitrix24" },
                  { icon: "⬡", label: "БД и деплой", sub: "PostgreSQL, Vercel, VPS" },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl border border-white/8 bg-white/3 p-3">
                    <p className="text-sm font-semibold text-white">{item.label}</p>
                    <p className="mt-0.5 text-xs text-gray-500">{item.sub}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-xl border border-lime-300/15 bg-lime-300/5 p-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-lime-300/70">Подход к работе</p>
                <p className="mt-2 text-sm leading-relaxed text-gray-300">
                  Работаю с задачами под ключ — от анализа и проектирования до запуска и поддержки. Фокус на результате для бизнеса, а не на количестве написанного кода.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            { value: "40+", label: "реализованных проектов", icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" },
            { value: "до 10 дней", label: "от брифа до запуска", icon: "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" },
            { value: "2 недели", label: "гарантия после сдачи", icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" },
          ].map((item, i) => (
            <Reveal key={item.label} delay={i * 0.08}>
              <div className="glass rounded-2xl p-5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5 text-lime-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                </svg>
                <p className="mt-3 text-2xl font-bold text-lime-300">{item.value}</p>
                <p className="mt-1 text-sm text-gray-400">{item.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-8">
          <Reveal>
            <div className="mb-5">
              <p className="text-xs uppercase tracking-[0.2em] text-lime-300/90">Как проходит работа</p>
              <h2 className="mt-2 text-2xl font-bold sm:text-3xl">Прозрачный процесс от идеи до результата</h2>
            </div>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-4">
            {[
              { title: "01. Бриф", text: "Фиксируем цели, задачи и критерии успеха." },
              { title: "02. План", text: "Собираю этапы, сроки и приоритеты запуска." },
              { title: "03. Реализация", text: "Разработка с регулярными апдейтами по прогрессу." },
              { title: "04. Запуск", text: "Тестирование, релиз и сопровождение после старта." }
            ].map((step, i) => (
              <Reveal key={step.title} delay={i * 0.08}>
                <article className="glass rounded-2xl p-5">
                  <h3 className="text-base font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm text-gray-300">{step.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <Reveal>
            <div className="glass rounded-3xl p-6 text-center sm:p-8">
              <h2 className="text-2xl font-bold sm:text-3xl">Нужен специалист, который доводит до результата?</h2>
              <p className="mx-auto mt-3 max-w-2xl text-gray-300">
                Подскажу, с чего лучше начать именно в вашем случае, и предложу решение под бюджет и сроки.
              </p>
              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <Link href="/contact" className="btn-primary w-full justify-center sm:w-auto">
                  Обсудить проект
                </Link>
                <Link href="/portfolio" className="btn-secondary w-full justify-center sm:w-auto">
                  Посмотреть кейсы
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
