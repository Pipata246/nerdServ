import { Metadata } from "next";
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
              <div className="mb-4 flex h-64 items-center justify-center rounded-xl bg-gray-600/40 text-sm text-gray-200">
                Image Placeholder
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
      </div>
    </section>
  );
}
