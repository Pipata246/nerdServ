import { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/animated/reveal";

export const metadata: Metadata = {
  title: "Пользовательское соглашение | NerdServ",
  description: "Условия использования сайта и услуг"
};

export default function TermsPage() {
  return (
    <section className="section">
      <div className="container-main">
        <Reveal>
          <h1 className="title">Пользовательское соглашение</h1>
          <p className="subtitle">Условия использования сайта и заказа услуг</p>
        </Reveal>

        <div className="mt-8 max-w-4xl">
          <Reveal delay={0.1}>
            <div className="glass rounded-2xl p-6 space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-3 text-lime-300">1. Общие положения</h2>
                <p className="text-gray-300 leading-relaxed">
                  Используя сайт и отправляя заявки, вы соглашаетесь с данными условиями. 
                  Сайт предоставляет информацию об услугах разработки и возможность связи для обсуждения проектов.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3 text-lime-300">2. Услуги</h2>
                <p className="text-gray-300 leading-relaxed">
                  Мы предоставляем услуги разработки сайтов, Telegram-ботов и автоматизации процессов. 
                  Точные условия, сроки и стоимость обсуждаются индивидуально для каждого проекта.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3 text-lime-300">3. Заказ услуг</h2>
                <p className="text-gray-300 leading-relaxed">
                  Заявка через форму не является публичной офертой. Договор заключается после обсуждения 
                  деталей проекта и подписания отдельного соглашения с фиксированными условиями.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3 text-lime-300">4. Оплата</h2>
                <p className="text-gray-300 leading-relaxed">
                  Стоимость услуг фиксируется в договоре. Оплата производится согласно условиям договора. 
                  Цены на сайте носят ознакомительный характер и могут изменяться.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3 text-lime-300">5. Гарантии</h2>
                <p className="text-gray-300 leading-relaxed">
                  Предоставляем гарантию на выполненные работы сроком 2 недели с момента сдачи проекта. 
                  Гарантия покрывает исправление ошибок в рамках технического задания.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3 text-lime-300">6. Ответственность</h2>
                <p className="text-gray-300 leading-relaxed">
                  Мы не несем ответственности за убытки, связанные с использованием информации с сайта. 
                  Ответственность по проектам регулируется отдельными договорами.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3 text-lime-300">7. Контакты</h2>
                <p className="text-gray-300 leading-relaxed">
                  По вопросам соглашения обращайтесь: <br/>
                  Telegram: @nerdServ <br/>
                  Через форму обратной связи на сайте
                </p>
              </div>

              <div className="border-t border-white/10 pt-4">
                <p className="text-sm text-gray-400">
                  Последнее обновление: {new Date().toLocaleDateString('ru-RU')}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-6 text-center">
              <Link href="/" className="btn-secondary">
                ← Вернуться на главную
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}