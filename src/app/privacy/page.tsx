import { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/animated/reveal";

export const metadata: Metadata = {
  title: "Политика конфиденциальности | NerdServ",
  description: "Политика обработки персональных данных"
};

export default function PrivacyPage() {
  return (
    <section className="section">
      <div className="container-main">
        <Reveal>
          <h1 className="title">Политика конфиденциальности</h1>
          <p className="subtitle">Как мы обрабатываем ваши персональные данные</p>
        </Reveal>

        <div className="mt-8 max-w-4xl">
          <Reveal delay={0.1}>
            <div className="glass rounded-2xl p-6 space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-3 text-lime-300">1. Какие данные мы собираем</h2>
                <p className="text-gray-300 leading-relaxed">
                  При заполнении формы обратной связи мы собираем: имя, контактные данные (Telegram, WhatsApp, email), 
                  описание задачи, бюджет и сроки. Данные передаются через защищенное соединение.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3 text-lime-300">2. Как мы используем данные</h2>
                <p className="text-gray-300 leading-relaxed">
                  Ваши данные используются исключительно для связи с вами по вопросам сотрудничества. 
                  Мы не передаем данные третьим лицам и не используем их в рекламных целях.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3 text-lime-300">3. Хранение данных</h2>
                <p className="text-gray-300 leading-relaxed">
                  Данные из формы отправляются в Telegram и не сохраняются в базах данных. 
                  Переписка хранится в мессенджерах согласно их политикам конфиденциальности.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3 text-lime-300">4. Ваши права</h2>
                <p className="text-gray-300 leading-relaxed">
                  Вы можете запросить удаление своих данных, отозвать согласие на обработку или получить 
                  копию данных. Для этого напишите нам в Telegram @nerdServ.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3 text-lime-300">5. Cookies и аналитика</h2>
                <p className="text-gray-300 leading-relaxed">
                  Сайт не использует cookies для отслеживания. Мы не подключаем системы аналитики, 
                  которые собирают персональные данные посетителей.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3 text-lime-300">6. Контакты</h2>
                <p className="text-gray-300 leading-relaxed">
                  По вопросам обработки персональных данных обращайтесь: <br/>
                  Telegram: @nerdServ <br/>
                  Email: через форму обратной связи
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