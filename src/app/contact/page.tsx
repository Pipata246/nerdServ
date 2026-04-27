import { Metadata } from "next";
import { ContactContent } from "@/components/sections/contact-content";

export const metadata: Metadata = {
  title: "Контакты — Заказать разработку сайта | NerdServ",
  description: "Свяжитесь для заказа разработки сайта, Telegram-бота или автоматизации. Telegram: @nerdServ, WhatsApp: +7 (964) 986-67-41. Ответ в течение 1 часа.",
  keywords: "заказать сайт, заказать разработку, контакты разработчика, связаться с разработчиком, nerdserv контакты",
  alternates: {
    canonical: 'https://nerdserv.pro/contact',
  },
  openGraph: {
    title: 'Контакты — Заказать разработку сайта | NerdServ',
    description: 'Оставьте заявку на разработку. Ответ в течение 1 часа. Бесплатная консультация.',
    url: 'https://nerdserv.pro/contact',
  },
};

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container-main">
        <h1 className="title">Контакты</h1>
        <p className="subtitle">Оставьте сообщение, и я свяжусь с вами в ближайшее время.</p>
        <ContactContent />
      </div>
    </section>
  );
}
