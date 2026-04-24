import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/animated/reveal";
import { SkillsBars } from "@/components/sections/skills-bars";
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
                5+ лет в коммерческой разработке. Работаю от идеи до релиза: аналитика, дизайн, разработка, тестирование,
                запуск и поддержка. Специализируюсь на задачах, где нужен не просто код, а результат для бизнеса.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass rounded-2xl p-6">
              <h2 className="text-2xl font-semibold">Навыки</h2>
              <SkillsBars />

              <h3 className="mt-8 text-xl font-semibold">Опыт</h3>
              <p className="mt-3 text-sm text-gray-300">
                Работал с e-commerce, EdTech, локальными сервисами и B2B-платформами. Реализовал более 40 проектов,
                включая лендинги, корпоративные сайты, ботов и сложные интеграции.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            { value: "40+", label: "реализованных проектов" },
            { value: "5+ лет", label: "коммерческого опыта" },
            { value: "24 часа", label: "средний старт работ" }
          ].map((item, i) => (
            <Reveal key={item.label} delay={i * 0.08}>
              <div className="glass rounded-2xl p-5">
                <p className="text-2xl font-bold text-lime-300">{item.value}</p>
                <p className="mt-2 text-sm text-gray-300">{item.label}</p>
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
