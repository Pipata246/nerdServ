import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";

type FormData = {
  name: string;
  contact: string;
  service: string;
  message: string;
  budget?: string;
  deadline?: string;
  contactWay: "telegram" | "whatsapp" | "max" | "email";
  countryCode?: string;
};

// Rate limiting в памяти (для продакшена лучше использовать Redis)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 3; // максимум 3 запроса
const RATE_WINDOW = 60 * 1000; // за 1 минуту

// Функция для очистки HTML и предотвращения XSS
function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, '') // Удаляем HTML теги
    .replace(/javascript:/gi, '') // Удаляем javascript: ссылки
    .replace(/on\w+=/gi, '') // Удаляем event handlers
    .trim()
    .slice(0, 1000); // Ограничиваем длину
}

// Проверка rate limit
function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const userLimit = rateLimitMap.get(ip);

  if (!userLimit || now > userLimit.resetTime) {
    // Новый пользователь или время сброса прошло
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_WINDOW });
    return true;
  }

  if (userLimit.count >= RATE_LIMIT) {
    return false; // Превышен лимит
  }

  // Увеличиваем счетчик
  userLimit.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // 1. Проверка origin (CSRF защита)
    const origin = request.headers.get('origin');
    const host = request.headers.get('host');
    
    if (process.env.NODE_ENV === 'production') {
      const allowedOrigins = [
        `https://${host}`,
        'https://nerdserv.pro',
        'https://www.nerdserv.pro',
      ];
      
      if (!origin || !allowedOrigins.includes(origin)) {
        console.warn(`Blocked request from unauthorized origin: ${origin}`);
        return NextResponse.json(
          { error: "Unauthorized origin" },
          { status: 403 }
        );
      }
    }

    // 2. Rate limiting
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown';
    
    if (!checkRateLimit(ip)) {
      console.warn(`Rate limit exceeded for IP: ${ip}`);
      return NextResponse.json(
        { error: "Слишком много запросов. Попробуйте через минуту." },
        { status: 429 }
      );
    }

    // 3. Проверка размера запроса
    const contentLength = request.headers.get('content-length');
    if (contentLength && parseInt(contentLength) > 10000) { // 10KB лимит
      return NextResponse.json(
        { error: "Слишком большой запрос" },
        { status: 413 }
      );
    }

    const body: FormData = await request.json();

    // 4. Строгая валидация и санитизация
    if (!body.name || !body.contact || !body.service || !body.message) {
      return NextResponse.json(
        { error: "Заполните все обязательные поля" },
        { status: 400 }
      );
    }

    // Санитизация всех входных данных
    const sanitizedData = {
      name: sanitizeInput(body.name),
      contact: sanitizeInput(body.contact),
      service: sanitizeInput(body.service),
      message: sanitizeInput(body.message),
      budget: body.budget ? sanitizeInput(body.budget) : undefined,
      deadline: body.deadline ? sanitizeInput(body.deadline) : undefined,
      contactWay: body.contactWay,
      countryCode: body.countryCode ? sanitizeInput(body.countryCode) : undefined,
    };

    // Дополнительная валидация
    if (sanitizedData.name.length < 2 || sanitizedData.name.length > 50) {
      return NextResponse.json(
        { error: "Имя должно быть от 2 до 50 символов" },
        { status: 400 }
      );
    }

    if (sanitizedData.message.length < 10 || sanitizedData.message.length > 1000) {
      return NextResponse.json(
        { error: "Сообщение должно быть от 10 до 1000 символов" },
        { status: 400 }
      );
    }

    // Проверка на спам (простая эвристика)
    const spamKeywords = ['casino', 'loan', 'bitcoin', 'crypto', 'investment'];
    const messageText = sanitizedData.message.toLowerCase();
    if (spamKeywords.some(keyword => messageText.includes(keyword))) {
      console.warn(`Potential spam detected from IP: ${ip}`);
      return NextResponse.json(
        { error: "Сообщение заблокировано фильтром спама" },
        { status: 400 }
      );
    }

    // Форматирование контакта в зависимости от канала
    let contactLink = "";
    let contactIcon = "";
    let contactDisplay = sanitizedData.contact;

    switch (sanitizedData.contactWay) {
      case "telegram":
        contactIcon = "📱";
        const username = sanitizedData.contact.replace("@", "");
        // Валидация Telegram username
        if (!/^[a-zA-Z0-9_]{5,32}$/.test(username)) {
          return NextResponse.json(
            { error: "Неверный формат Telegram username" },
            { status: 400 }
          );
        }
        contactLink = `https://t.me/${username}`;
        contactDisplay = `@${username}`;
        break;
      case "whatsapp":
        contactIcon = "📞";
        const phone = sanitizedData.contact.replace(/\D/g, "");
        if (!/^[0-9]{6,15}$/.test(phone)) {
          return NextResponse.json(
            { error: "Неверный формат номера телефона" },
            { status: 400 }
          );
        }
        const fullPhone = `${sanitizedData.countryCode || "+7"}${phone}`;
        contactLink = `https://wa.me/${fullPhone.replace(/\D/g, "")}`;
        contactDisplay = fullPhone;
        break;
      case "max":
        contactIcon = "📞";
        const maxPhone = sanitizedData.contact.replace(/\D/g, "");
        if (!/^[0-9]{6,15}$/.test(maxPhone)) {
          return NextResponse.json(
            { error: "Неверный формат номера телефона" },
            { status: 400 }
          );
        }
        const fullMaxPhone = `${sanitizedData.countryCode || "+7"}${maxPhone}`;
        contactLink = `https://max.mail.ru/`;
        contactDisplay = fullMaxPhone;
        break;
      case "email":
        contactIcon = "✉️";
        // Валидация email
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(sanitizedData.contact)) {
          return NextResponse.json(
            { error: "Неверный формат email" },
            { status: 400 }
          );
        }
        contactLink = `mailto:${sanitizedData.contact}`;
        contactDisplay = sanitizedData.contact;
        break;
    }

    // Форматирование сообщения для Telegram (экранируем HTML)
    const channelName = {
      telegram: "Telegram",
      whatsapp: "WhatsApp",
      max: "Max",
      email: "Email"
    }[sanitizedData.contactWay];

    const message = `🔔 <b>НОВАЯ ЗАЯВКА С САЙТА</b>

━━━━━━━━━━━━━━━━━━━━
👤 <b>Имя:</b> ${sanitizedData.name}
${contactIcon} <b>Связаться:</b> ${channelName}
✉️ <b>Контакт:</b> ${contactDisplay}

📋 <b>Услуга:</b> ${sanitizedData.service}
${sanitizedData.budget ? `💰 <b>Бюджет:</b> ${sanitizedData.budget}` : ""}
${sanitizedData.deadline ? `⏰ <b>Срок:</b> ${sanitizedData.deadline}` : ""}

💬 <b>Сообщение:</b>
${sanitizedData.message}

━━━━━━━━━━━━━━━━━━━━
🕐 ${new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" })}
🌐 IP: ${ip}`;

    // Отправка в Telegram
    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      console.error("Telegram credentials not configured");
      return NextResponse.json(
        { error: "Сервер временно недоступен" },
        { status: 500 }
      );
    }

    const telegramPayload: {
      chat_id: string;
      text: string;
      parse_mode: string;
      reply_markup?: {
        inline_keyboard: Array<Array<{ text: string; url: string }>>;
      };
    } = {
      chat_id: TELEGRAM_CHAT_ID,
      text: message,
      parse_mode: "HTML",
    };

    // Добавляем кнопку только если есть ссылка
    if (contactLink) {
      telegramPayload.reply_markup = {
        inline_keyboard: [
          [
            {
              text: `💬 Написать в ${channelName}`,
              url: contactLink,
            },
          ],
        ],
      };
    }

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(telegramPayload),
      }
    );

    if (!telegramResponse.ok) {
      const error = await telegramResponse.text();
      console.error("Telegram API error (sanitized):", error.slice(0, 100));
      
      return NextResponse.json(
        { error: "Ошибка отправки сообщения" },
        { status: 500 }
      );
    }

    // Логируем успешную отправку (без чувствительных данных)
    console.log(`Form submitted successfully from IP: ${ip}, service: ${sanitizedData.service}`);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Form submission error:", error instanceof Error ? error.message : 'Unknown error');
    return NextResponse.json(
      { error: "Внутренняя ошибка сервера" },
      { status: 500 }
    );
  }
}
