# 🚀 NerdServ — Лендинг для разработчика

Современный лендинг-портфолио с интеграцией Telegram-уведомлений о заявках.

## 📦 Технологии

- **Next.js 15.2** — React-фреймворк с SSR
- **TypeScript** — типизация
- **Tailwind CSS 4** — стилизация
- **Framer Motion** — анимации
- **Telegram Bot API** — уведомления о заявках

## 🎯 Основные возможности

- ✅ Адаптивный дизайн (mobile-first)
- ✅ Темная/светлая тема
- ✅ Анимированный фон с кодом
- ✅ Портфолио с фильтрацией (15 кейсов)
- ✅ Форма обратной связи с Telegram-уведомлениями
- ✅ Интерактивный степпер "Ваш кейс"
- ✅ Слайдер отзывов (12 отзывов)

## 🚀 Быстрый старт

### 1. Установка зависимостей

```bash
npm install
```

### 2. Настройка переменных окружения

Создайте файл `.env.local` в корне проекта:

```env
TELEGRAM_BOT_TOKEN=your_bot_token_here
TELEGRAM_CHAT_ID=your_chat_id_here
```

**Как получить токены?** Читайте [TELEGRAM_SETUP.md](./TELEGRAM_SETUP.md)

### 3. Запуск dev-сервера

```bash
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000)

### 4. Сборка для продакшена

```bash
npm run build
npm start
```

## 📱 Настройка Telegram-уведомлений

Подробная инструкция в файле [TELEGRAM_SETUP.md](./TELEGRAM_SETUP.md)

**Кратко:**
1. Создайте бота через [@BotFather](https://t.me/BotFather)
2. Получите Bot Token
3. Узнайте свой Chat ID через [@userinfobot](https://t.me/userinfobot)
4. Добавьте переменные на Vercel
5. Redeploy проекта

## 📁 Структура проекта

```
src/
├── app/                    # Страницы (Next.js App Router)
│   ├── api/               # API endpoints
│   │   └── submit-form/   # Обработка форм → Telegram
│   ├── page.tsx           # Главная
│   ├── services/          # Услуги
│   ├── portfolio/         # Портфолио
│   ├── about/             # О разработчике
│   ├── your-case/         # Процесс работы
│   └── contact/           # Контакты
├── components/
│   ├── layout/            # Header, Footer
│   ├── sections/          # Секции страниц
│   ├── ui/                # UI-компоненты
│   └── animated/          # Анимации
└── data/
    └── site-data.ts       # Контент (услуги, кейсы, отзывы)
```

## 🎨 Кастомизация

### Изменить контент

Весь контент находится в `src/data/site-data.ts`:
- Услуги (9 позиций)
- Кейсы (15 проектов)
- Отзывы (12 отзывов)
- Навигация

### Изменить цвета

Цветовая схема в `src/app/globals.css`:
- CSS-переменные для темной/светлой темы
- Акцентный цвет: `--accent: #cbe857`

### Изменить мета-теги

Мета-теги в каждом `page.tsx`:
```typescript
export const metadata: Metadata = {
  title: "Ваш заголовок",
  description: "Ваше описание"
};
```

## 🔧 Скрипты

```bash
npm run dev      # Запуск dev-сервера
npm run build    # Сборка для продакшена
npm run start    # Запуск продакшен-сервера
npm run lint     # Проверка кода
```

## 📦 Деплой на Vercel

1. Подключите репозиторий к Vercel
2. Добавьте переменные окружения (см. [TELEGRAM_SETUP.md](./TELEGRAM_SETUP.md))
3. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## 🐛 Troubleshooting

### Формы не отправляются?

- Проверьте переменные окружения
- Убедитесь, что написали `/start` боту
- Проверьте логи в Vercel Functions

### Анимации тормозят?

- Отключите `framer-motion` для слабых устройств
- Уменьшите количество анимированных элементов

## 📄 Лицензия

MIT

## 🤝 Контакты

- Telegram: [@nerdServ](https://t.me/nerdServ)
- WhatsApp: +7 (964) 986-67-41
- Instagram: [@nerd1dk](https://www.instagram.com/nerd1dk/)

---

Сделано с ❤️ на Next.js
