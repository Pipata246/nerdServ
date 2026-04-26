import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Политика конфиденциальности | NerdServ",
  description: "Политика конфиденциальности и обработки персональных данных NerdServ."
};

export default function PrivacyPage() {
  return (
    <section className="section">
      <div className="container-main max-w-3xl">
        <p className="text-xs uppercase tracking-[0.2em] text-lime-300/80">Юридическая информация</p>
        <h1 className="title mt-2">Политика конфиденциальности</h1>
        <p className="mt-2 text-sm text-gray-400">Последнее обновление: 26 апреля 2026 г.</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-gray-300">

          <div className="glass rounded-2xl p-6 space-y-3">
            <h2 className="text-base font-semibold text-white">1. Кто собирает данные</h2>
            <p>
              Индивидуальный разработчик, действующий под брендом <span className="text-white font-medium">NerdServ</span>.
              Контакт: <a href="https://t.me/nerdServ" className="text-lime-300 hover:underline">@nerdServ</a>, телефон: +7 (964) 986-67-41.
            </p>
          </div>

          <div className="glass rounded-2xl p-6 space-y-3">
            <h2 className="text-base font-semibold text-white">2. Какие данные собираются</h2>
            <p>При заполнении формы обратной связи вы передаёте:</p>
            <ul className="mt-2 space-y-1.5 text-gray-300">
              <li className="flex gap-2"><span className="text-lime-300 shrink-0">—</span> Имя</li>
              <li className="flex gap-2"><span className="text-lime-300 shrink-0">—</span> Контактные данные (Telegram username, номер телефона)</li>
              <li className="flex gap-2"><span className="text-lime-300 shrink-0">—</span> Описание задачи, бюджет, сроки</li>
              <li className="flex gap-2"><span className="text-lime-300 shrink-0">—</span> IP-адрес (автоматически, для защиты от спама)</li>
            </ul>
            <p className="mt-2">Никакие другие данные (cookies, геолокация, поведение на сайте) не собираются и не передаются третьим лицам.</p>
          </div>

          <div className="glass rounded-2xl p-6 space-y-3">
            <h2 className="text-base font-semibold text-white">3. Зачем нужны данные</h2>
            <p>Данные используются исключительно для:</p>
            <ul className="mt-2 space-y-1.5">
              <li className="flex gap-2"><span className="text-lime-300 shrink-0">—</span> Ответа на вашу заявку</li>
              <li className="flex gap-2"><span className="text-lime-300 shrink-0">—</span> Обсуждения условий сотрудничества</li>
              <li className="flex gap-2"><span className="text-lime-300 shrink-0">—</span> Выполнения договорных обязательств</li>
            </ul>
            <p className="mt-2">Данные не продаются, не передаются рекламным сетям и не используются для маркетинговых рассылок без вашего согласия.</p>
          </div>

          <div className="glass rounded-2xl p-6 space-y-3">
            <h2 className="text-base font-semibold text-white">4. Как хранятся данные</h2>
            <p>
              Данные из формы передаются напрямую в защищённый Telegram-канал и нигде не сохраняются в базах данных.
              Сайт размещён на платформе <span className="text-white">Vercel</span>, которая соответствует стандартам GDPR.
              Токены и ключи доступа хранятся в зашифрованных переменных окружения.
            </p>
          </div>

          <div className="glass rounded-2xl p-6 space-y-3">
            <h2 className="text-base font-semibold text-white">5. Срок хранения</h2>
            <p>
              Переписка и данные заявок хранятся в Telegram-чате до момента завершения сотрудничества или по вашему запросу об удалении.
              Вы можете в любой момент запросить удаление своих данных, написав на контакты ниже.
            </p>
          </div>

          <div className="glass rounded-2xl p-6 space-y-3">
            <h2 className="text-base font-semibold text-white">6. Ваши права</h2>
            <p>Вы вправе:</p>
            <ul className="mt-2 space-y-1.5">
              <li className="flex gap-2"><span className="text-lime-300 shrink-0">—</span> Запросить информацию о хранящихся данных</li>
              <li className="flex gap-2"><span className="text-lime-300 shrink-0">—</span> Потребовать исправления или удаления данных</li>
              <li className="flex gap-2"><span className="text-lime-300 shrink-0">—</span> Отозвать согласие на обработку в любой момент</li>
            </ul>
            <p className="mt-2">Для реализации прав напишите: <a href="https://t.me/nerdServ" className="text-lime-300 hover:underline">@nerdServ</a></p>
          </div>

          <div className="glass rounded-2xl p-6 space-y-3">
            <h2 className="text-base font-semibold text-white">7. Изменения политики</h2>
            <p>
              Политика может обновляться. Актуальная версия всегда доступна на этой странице.
              Продолжение использования сайта после изменений означает согласие с новой редакцией.
            </p>
          </div>

        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/" className="btn-secondary">← На главную</Link>
          <Link href="/offer" className="btn-secondary">Публичная оферта</Link>
        </div>
      </div>
    </section>
  );
}
