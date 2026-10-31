import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Публичная оферта | NerdServ",
  description: "Публичная оферта на оказание услуг по разработке сайтов, Telegram-ботов и автоматизации."
};

export default function OfferPage() {
  return (
    <section className="section">
      <div className="container-main max-w-3xl">
        <p className="text-xs uppercase tracking-[0.2em] text-lime-300/80">Юридическая информация</p>
        <h1 className="title mt-2">Публичная оферта</h1>
        <p className="mt-2 text-sm text-gray-400">Последнее обновление: 26 апреля 2026 г.</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-gray-300">

          <div className="glass rounded-2xl p-6 space-y-3">
            <h2 className="text-base font-semibold text-white">1. Общие положения</h2>
            <p>
              Настоящий документ является публичной офертой индивидуального разработчика, действующего под брендом{" "}
              <span className="text-white font-medium">NerdServ</span> (далее — Исполнитель), и адресован любому физическому
              или юридическому лицу (далее — Заказчик), желающему воспользоваться услугами.
            </p>
            <p>
              Отправка заявки через форму на сайте, а также начало переписки с целью заказа услуг означает полное
              и безоговорочное принятие условий настоящей оферты.
            </p>
          </div>

          <div className="glass rounded-2xl p-6 space-y-3">
            <h2 className="text-base font-semibold text-white">2. Предмет оферты</h2>
            <p>Исполнитель оказывает следующие услуги:</p>
            <ul className="mt-2 space-y-1.5">
              <li className="flex gap-2"><span className="text-lime-300 shrink-0">—</span> Разработка сайтов (лендинги, корпоративные сайты, веб-приложения)</li>
              <li className="flex gap-2"><span className="text-lime-300 shrink-0">—</span> Разработка Telegram-ботов и чат-ботов</li>
              <li className="flex gap-2"><span className="text-lime-300 shrink-0">—</span> Автоматизация бизнес-процессов и интеграции</li>
              <li className="flex gap-2"><span className="text-lime-300 shrink-0">—</span> Техническая поддержка и сопровождение</li>
              <li className="flex gap-2"><span className="text-lime-300 shrink-0">—</span> Редизайн и оптимизация существующих решений</li>
            </ul>
            <p className="mt-2">Конкретный перечень, объём и стоимость услуг согласовываются индивидуально до начала работ.</p>
          </div>

          <div className="glass rounded-2xl p-6 space-y-3">
            <h2 className="text-base font-semibold text-white">3. Порядок заключения договора</h2>
            <ul className="space-y-2">
              <li className="flex gap-2"><span className="text-lime-300 shrink-0">1.</span> Заказчик оставляет заявку через форму на сайте или пишет напрямую в мессенджер.</li>
              <li className="flex gap-2"><span className="text-lime-300 shrink-0">2.</span> Исполнитель проводит бесплатную консультацию и уточняет требования.</li>
              <li className="flex gap-2"><span className="text-lime-300 shrink-0">3.</span> Стороны согласовывают техническое задание, стоимость и сроки.</li>
              <li className="flex gap-2"><span className="text-lime-300 shrink-0">4.</span> Заказчик вносит предоплату — договор считается заключённым.</li>
            </ul>
          </div>

          <div className="glass rounded-2xl p-6 space-y-3">
            <h2 className="text-base font-semibold text-white">4. Стоимость и оплата</h2>
            <p>Стоимость услуг определяется индивидуально и фиксируется до начала работ. Изменение стоимости в процессе выполнения без согласования сторон не допускается.</p>
            <p className="mt-2">Порядок оплаты:</p>
            <ul className="mt-2 space-y-1.5">
              <li className="flex gap-2"><span className="text-lime-300 shrink-0">—</span> Предоплата 50% — до начала работ</li>
              <li className="flex gap-2"><span className="text-lime-300 shrink-0">—</span> Остаток 50% — после сдачи готового проекта</li>
              <li className="flex gap-2"><span className="text-lime-300 shrink-0">—</span> Для небольших задач (до 10 000 ₽) — полная предоплата</li>
            </ul>
            <p className="mt-2">Способы оплаты: банковский перевод, СБП, карта. Реквизиты предоставляются при согласовании.</p>
          </div>

          <div className="glass rounded-2xl p-6 space-y-3">
            <h2 className="text-base font-semibold text-white">5. Сроки выполнения</h2>
            <p>
              Сроки фиксируются в техническом задании до начала работ. Исполнитель обязуется соблюдать согласованные сроки.
              В случае задержки по вине Исполнителя — срок продлевается без дополнительной оплаты.
            </p>
            <p className="mt-2">
              Задержка по вине Заказчика (несвоевременное предоставление материалов, затянутое согласование) не является
              нарушением со стороны Исполнителя и может сдвигать сроки сдачи.
            </p>
          </div>

          <div className="glass rounded-2xl p-6 space-y-3">
            <h2 className="text-base font-semibold text-white">6. Права и обязанности сторон</h2>
            <p className="font-medium text-white">Исполнитель обязуется:</p>
            <ul className="mt-1.5 space-y-1.5">
              <li className="flex gap-2"><span className="text-lime-300 shrink-0">—</span> Выполнить работу в согласованные сроки и в соответствии с ТЗ</li>
              <li className="flex gap-2"><span className="text-lime-300 shrink-0">—</span> Предоставлять доступ к тестовой среде в процессе разработки</li>
              <li className="flex gap-2"><span className="text-lime-300 shrink-0">—</span> Устранять ошибки в течение 14 дней после сдачи бесплатно</li>
              <li className="flex gap-2"><span className="text-lime-300 shrink-0">—</span> Не передавать данные Заказчика третьим лицам</li>
            </ul>
            <p className="mt-3 font-medium text-white">Заказчик обязуется:</p>
            <ul className="mt-1.5 space-y-1.5">
              <li className="flex gap-2"><span className="text-lime-300 shrink-0">—</span> Своевременно предоставлять необходимые материалы и доступы</li>
              <li className="flex gap-2"><span className="text-lime-300 shrink-0">—</span> Оплачивать услуги в согласованные сроки</li>
              <li className="flex gap-2"><span className="text-lime-300 shrink-0">—</span> Согласовывать правки в разумные сроки (до 5 рабочих дней)</li>
            </ul>
          </div>

          <div className="glass rounded-2xl p-6 space-y-3">
            <h2 className="text-base font-semibold text-white">7. Гарантии и правки</h2>
            <p>
              После сдачи проекта предоставляется <span className="text-white font-medium">14 дней бесплатной гарантии</span>.
              В этот период Исполнитель устраняет любые ошибки и несоответствия согласованному ТЗ.
            </p>
            <p className="mt-2">
              Правки, выходящие за рамки ТЗ, а также новые функции после сдачи — оцениваются и выполняются отдельно.
            </p>
          </div>

          <div className="glass rounded-2xl p-6 space-y-3">
            <h2 className="text-base font-semibold text-white">8. Права на результат работ</h2>
            <p>
              После полной оплаты Заказчик получает все права на разработанный продукт: исходный код, дизайн, контент.
              Исполнитель вправе упоминать проект в портфолио, если Заказчик не возражает.
            </p>
          </div>

          <div className="glass rounded-2xl p-6 space-y-3">
            <h2 className="text-base font-semibold text-white">9. Отказ от услуг и возврат</h2>
            <p>
              Заказчик вправе отказаться от услуг до начала работ — предоплата возвращается в полном объёме.
            </p>
            <p className="mt-2">
              При отказе после начала работ — возвращается часть предоплаты за вычетом стоимости уже выполненных этапов.
              Расчёт производится пропорционально объёму выполненной работы.
            </p>
          </div>

          <div className="glass rounded-2xl p-6 space-y-3">
            <h2 className="text-base font-semibold text-white">10. Ответственность</h2>
            <p>
              Исполнитель не несёт ответственности за убытки, возникшие вследствие неправомерного использования
              разработанного продукта Заказчиком, а также за сбои в работе сторонних сервисов (хостинг, API, платёжные системы).
            </p>
            <p className="mt-2">
              Максимальная ответственность Исполнителя ограничена суммой, уплаченной Заказчиком по конкретному проекту.
            </p>
          </div>

          <div className="glass rounded-2xl p-6 space-y-3">
            <h2 className="text-base font-semibold text-white">11. Контакты</h2>
            <p>По всем вопросам, связанным с офертой:</p>
            <ul className="mt-2 space-y-1.5">
              <li className="flex gap-2"><span className="text-lime-300 shrink-0">—</span> Telegram: <a href="https://t.me/nerdServ" className="text-lime-300 hover:underline">@nerdServ</a></li>
              <li className="flex gap-2"><span className="text-lime-300 shrink-0">—</span> WhatsApp/Max: +7 (964) 986-67-41</li>
            </ul>
          </div>

        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/" className="btn-secondary">← На главную</Link>
          <Link href="/privacy" className="btn-secondary">Политика конфиденциальности</Link>
        </div>
      </div>
    </section>
  );
}
