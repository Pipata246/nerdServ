"use client";

import { FormEvent, useState } from "react";
import { MessageCircle, Send } from "lucide-react";

type Errors = { name?: string; email?: string; message?: string };

export function ContactContent() {
  const [errors, setErrors] = useState<Errors>({});
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const message = String(form.get("message") || "").trim();

    // Lightweight client-side validation for better UX before backend integration.
    const nextErrors: Errors = {};
    if (name.length < 2) nextErrors.name = "Введите имя (минимум 2 символа).";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "Введите корректный email.";
    if (message.length < 10) nextErrors.message = "Сообщение должно быть от 10 символов.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSuccess(true);
      e.currentTarget.reset();
      setTimeout(() => setSuccess(false), 1800);
    }
  };

  return (
    <div className="mt-8 grid gap-6 lg:grid-cols-2">
      <form onSubmit={handleSubmit} className="glass space-y-4 rounded-2xl p-6">
        <div>
          <input name="name" placeholder="Имя" className="field-control" />
          {errors.name && <p className="mt-1 text-xs text-red-300">{errors.name}</p>}
        </div>
        <div>
          <input name="email" placeholder="Email" className="field-control" />
          {errors.email && <p className="mt-1 text-xs text-red-300">{errors.email}</p>}
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Сообщение"
            className="field-control min-h-36"
          />
          {errors.message && <p className="mt-1 text-xs text-red-300">{errors.message}</p>}
        </div>
        <button className="btn-primary">{success ? "Отправлено!" : "Отправить"}</button>
      </form>

      <div className="glass rounded-2xl p-6">
        <h2 className="text-2xl font-semibold">Другие способы связи</h2>
        <div className="mt-5 space-y-3 text-gray-200">
          <div className="flex items-center gap-3 rounded-xl border border-white/10 p-3">
            <Send className="h-5 w-5 text-lime-300" /> Telegram: @NerdIdk
          </div>
          <div className="flex items-center gap-3 rounded-xl border border-white/10 p-3">
            <MessageCircle className="h-5 w-5 text-lime-300" /> WhatsApp/Max: +7 (964) 986-67-41
          </div>
        </div>
      </div>
    </div>
  );
}
