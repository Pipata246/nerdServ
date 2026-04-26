import { NextRequest, NextResponse } from "next/server";

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

export async function POST(request: NextRequest) {
  try {
    const body: FormData = await request.json();

    // Валидация
    if (!body.name || !body.contact || !body.service || !body.message) {
      return NextResponse.json(
        { error: "Заполните все обязательные поля" },
        { status: 400 }
      );
    }

    // Форматирование контакта в зависимости от канала
    let contactLink = "";
    let contactIcon = "";
    let contactDisplay = body.contact;

    switch (body.contactWay) {
      case "telegram":
        contactIcon = "📱";
        const username = body.contact.replace("@", "");
        contactLink = `https://t.me/${username}`;
        contactDisplay = `@${username}`;
        break;
      case "whatsapp":
        contactIcon = "📞";
        const phone = body.contact.replace(/\D/g, "");
        const fullPhone = `${body.countryCode || "+7"}${phone}`;
        contactLink = `https://wa.me/${fullPhone.replace(/\D/g, "")}`;
        contactDisplay = fullPhone;
        break;
      case "max":
        contactIcon = "📞";
        const maxPhone = body.contact.replace(/\D/g, "");
        const fullMaxPhone = `${body.countryCode || "+7"}${maxPhone}`;
        contactLink = `https://max.mail.ru/`;
        contactDisplay = fullMaxPhone;
        break;
      case "email":
        contactIcon = "✉️";
        contactLink = `mailto:${body.contact}`;
        contactDisplay = body.contact;
        break;
    }

    // Форматирование сообщения для Telegram
    const channelName = {
      telegram: "Telegram",
      whatsapp: "WhatsApp",
      max: "Max",
      email: "Email"
    }[body.contactWay];

    const message = `🔔 <b>НОВАЯ ЗАЯВКА С САЙТА</b>

━━━━━━━━━━━━━━━━━━━━
👤 <b>Имя:</b> ${body.name}
${contactIcon} <b>Связаться:</b> ${channelName}
✉️ <b>Контакт:</b> ${contactDisplay}

📋 <b>Услуга:</b> ${body.service}
${body.budget ? `💰 <b>Бюджет:</b> ${body.budget}` : ""}
${body.deadline ? `⏰ <b>Срок:</b> ${body.deadline}` : ""}

💬 <b>Сообщение:</b>
${body.message}

━━━━━━━━━━━━━━━━━━━━
🕐 ${new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" })}`;

    // Отправка в Telegram
    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      console.error("Telegram credentials not configured", {
        hasToken: !!TELEGRAM_BOT_TOKEN,
        hasChat: !!TELEGRAM_CHAT_ID
      });
      return NextResponse.json(
        { error: "Переменные окружения не настроены на Vercel. Добавьте TELEGRAM_BOT_TOKEN и TELEGRAM_CHAT_ID в Settings → Environment Variables" },
        { status: 500 }
      );
    }

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: "HTML",
          reply_markup: contactLink
            ? {
                inline_keyboard: [
                  [
                    {
                      text: `💬 Написать в ${channelName}`,
                      url: contactLink,
                    },
                  ],
                ],
              }
            : undefined,
        }),
      }
    );

    if (!telegramResponse.ok) {
      const error = await telegramResponse.text();
      console.error("Telegram API error:", error);
      
      // Парсим ошибку от Telegram
      let errorMessage = "Ошибка отправки в Telegram";
      try {
        const errorData = JSON.parse(error);
        if (errorData.description) {
          if (errorData.description.includes("chat not found")) {
            errorMessage = "Бот не может отправить сообщение. Напишите боту /start в Telegram";
          } else if (errorData.description.includes("Unauthorized")) {
            errorMessage = "Неправильный токен бота. Проверьте TELEGRAM_BOT_TOKEN";
          } else {
            errorMessage = errorData.description;
          }
        }
      } catch (e) {
        // Если не JSON, используем текст как есть
        errorMessage = error;
      }
      
      return NextResponse.json(
        { error: errorMessage },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Form submission error:", error);
    return NextResponse.json(
      { error: "Внутренняя ошибка сервера" },
      { status: 500 }
    );
  }
}
