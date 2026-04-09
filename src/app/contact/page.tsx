import { Metadata } from "next";
import { ContactContent } from "@/components/sections/contact-content";

export const metadata: Metadata = {
  title: "Контакты | NerdServ",
  description: "Форма обратной связи и контакты для заказа разработки сайта, бота или автоматизации."
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
