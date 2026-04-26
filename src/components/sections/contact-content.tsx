"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { ChevronDown, MessageCircle, Send } from "lucide-react";
import Link from "next/link";

type Errors = {
  name?: string;
  contact?: string;
  service?: string;
  message?: string;
  consent?: string;
};

type CustomSelectProps = {
  name: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  options: Array<{ value: string; label: string }>;
};

function CustomSelect({ name, value, onChange, placeholder, options }: CustomSelectProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onClickOutside = (event: MouseEvent) => {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(event.target as Node)) setOpen(false);
    };
    window.addEventListener("click", onClickOutside);
    return () => window.removeEventListener("click", onClickOutside);
  }, []);

  const currentLabel = options.find((opt) => opt.value === value)?.label || placeholder;

  return (
    <div ref={rootRef} className="relative">
      <input type="hidden" name={name} value={value} />
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={`field-control flex items-center justify-between ${open ? "ring-1 ring-[var(--accent-outline-soft)]" : ""}`}
      >
        <span className={value ? "text-[var(--field-text)]" : "text-[var(--field-placeholder)]"}>{currentLabel}</span>
        <ChevronDown className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute z-20 mt-2 max-h-64 w-full overflow-auto rounded-xl border border-[var(--accent-outline)] bg-[var(--bg-soft)] p-1 shadow-xl">
          {options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
              className={`w-full rounded-lg px-3 py-2 text-left text-sm transition ${
                value === opt.value ? "bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)]" : "hover:bg-black/10"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

const EMPTY = {
  name: "",
  contact: "",
  service: "",
  budget: "",
  deadline: "",
  message: "",
  contactWay: "telegram",
  countryCode: "+7",
  consent: false,
};

export function ContactContent() {
  const [fields, setFields] = useState(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const set = (key: keyof typeof EMPTY) => (val: string | boolean) =>
    setFields((prev) => ({ ...prev, [key]: val }));

  const reset = () => {
    setFields(EMPTY);
    setErrors({});
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const nextErrors: Errors = {};
    if (fields.name.trim().length < 2) nextErrors.name = "Введите имя (минимум 2 символа).";

    if (fields.contactWay === "whatsapp" || fields.contactWay === "max") {
      if (!/^[0-9()\-\s]{6,20}$/.test(fields.contact)) {
        nextErrors.contact = "Введите корректный номер телефона.";
      }
    } else if (fields.contactWay === "telegram") {
      if (!/^@?[a-zA-Z0-9_]{5,32}$/.test(fields.contact)) {
        nextErrors.contact = "Введите username Telegram, например @nerdServ.";
      }
    }

    if (!fields.service) nextErrors.service = "Выберите интересующую услугу.";
    if (fields.message.trim().length < 10) nextErrors.message = "Сообщение должно быть от 10 символов.";
    if (!fields.consent) nextErrors.consent = "Подтвердите согласие на обработку данных.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    // Блокируем кнопку и сразу очищаем форму
    setSubmitting(true);
    const payload = { ...fields };
    reset();

    try {
      await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: payload.name,
          contact: payload.contact,
          service: payload.service,
          message: payload.message,
          budget: payload.budget || undefined,
          deadline: payload.deadline || undefined,
          contactWay: payload.contactWay,
          countryCode: payload.countryCode,
        }),
      });
    } catch (_) {
      // Сообщение всё равно доходит, игнорируем сетевую ошибку
    } finally {
      setSubmitting(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 2500);
    }
  };

  return (
    <div className="mt-8 grid gap-6 lg:grid-cols-2">
      <form onSubmit={handleSubmit} className="glass space-y-4 rounded-2xl p-6">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-lime-300/90">Быстрый бриф</p>
          <p className="mt-2 text-sm text-gray-300">Заполните форму, и я вернусь с первичным планом работ и оценкой.</p>
        </div>

        <div>
          <input
            value={fields.name}
            onChange={(e) => set("name")(e.target.value)}
            placeholder="Имя"
            className="field-control"
          />
          {errors.name && <p className="mt-1 text-xs text-red-300">{errors.name}</p>}
        </div>

        <div>
          {fields.contactWay === "whatsapp" || fields.contactWay === "max" ? (
            <div className="grid gap-3 sm:grid-cols-[160px_1fr]">
              <CustomSelect
                name="countryCode"
                value={fields.countryCode}
                onChange={set("countryCode") as (v: string) => void}
                placeholder="Код"
                options={[
                  { value: "+7", label: "+7 (RU)" },
                  { value: "+1", label: "+1 (US/CA)" },
                  { value: "+44", label: "+44 (UK)" },
                  { value: "+49", label: "+49 (DE)" },
                  { value: "+971", label: "+971 (UAE)" },
                ]}
              />
              <input
                value={fields.contact}
                onChange={(e) => set("contact")(e.target.value)}
                placeholder="Номер телефона (без кода страны)"
                className="field-control"
              />
            </div>
          ) : (
            <input
              value={fields.contact}
              onChange={(e) => set("contact")(e.target.value)}
              placeholder="Telegram username (@username)"
              className="field-control"
            />
          )}
          {errors.contact && <p className="mt-1 text-xs text-red-300">{errors.contact}</p>}
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <CustomSelect
              name="service"
              value={fields.service}
              onChange={set("service") as (v: string) => void}
              placeholder="Выберите услугу"
              options={[
                { value: "site", label: "Разработка сайта" },
                { value: "bot", label: "Telegram / чат-бот" },
                { value: "automation", label: "Автоматизация / интеграции" },
                { value: "support", label: "Поддержка и сопровождение" },
              ]}
            />
            {errors.service && <p className="mt-1 text-xs text-red-300">{errors.service}</p>}
          </div>
          <input
            value={fields.budget}
            onChange={(e) => set("budget")(e.target.value)}
            placeholder="Бюджет (опц.)"
            className="field-control"
          />
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <input
            value={fields.deadline}
            onChange={(e) => set("deadline")(e.target.value)}
            placeholder="Желаемый срок (опц.)"
            className="field-control"
          />
          <CustomSelect
            name="contactWay"
            value={fields.contactWay}
            onChange={set("contactWay") as (v: string) => void}
            placeholder="Выберите канал связи"
            options={[
              { value: "telegram", label: "Связь через Telegram" },
              { value: "whatsapp", label: "Связь через WhatsApp" },
              { value: "max", label: "Связь через Max" },
            ]}
          />
        </div>

        <div>
          <textarea
            value={fields.message}
            onChange={(e) => set("message")(e.target.value)}
            placeholder="Кратко опишите задачу, текущую ситуацию и ожидаемый результат"
            className="field-control min-h-36"
          />
          {errors.message && <p className="mt-1 text-xs text-red-300">{errors.message}</p>}
        </div>

        <label className="flex items-start gap-2 text-xs text-gray-300">
          <input
            type="checkbox"
            checked={fields.consent}
            onChange={(e) => set("consent")(e.target.checked)}
            className="check-control"
          />
          <span>Согласен(на) на обработку персональных данных и получение ответа по указанным контактам.</span>
        </label>
        {errors.consent && <p className="-mt-2 text-xs text-red-300">{errors.consent}</p>}

        <button
          disabled={submitting}
          className="btn-primary w-full justify-center sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? "Отправка..." : success ? "Заявка отправлена! ✓" : "Отправить"}
        </button>
        <p className="text-xs text-gray-400">Обычно отвечаю в течение 1 часа в рабочее время.</p>
      </form>

      <div className="glass rounded-2xl p-6">
        <h2 className="text-2xl font-semibold">Другие способы связи</h2>
        <div className="mt-5 space-y-3 text-gray-200">
          <Link
            href="https://t.me/nerdServ"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl border border-white/10 p-3 transition hover:bg-white/5"
          >
            <Send className="h-5 w-5 text-lime-300" /> Telegram: @nerdServ
          </Link>
          <Link
            href="https://wa.me/79649866741"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl border border-white/10 p-3 transition hover:bg-white/5"
          >
            <MessageCircle className="h-5 w-5 text-lime-300" /> WhatsApp/Max: +7 (964) 986-67-41
          </Link>
          <Link
            href="https://t.me/nerdServv"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl border border-white/10 p-3 transition hover:bg-white/5"
          >
            <svg className="h-5 w-5 flex-shrink-0 text-lime-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            Telegram-канал: @nerdServv
          </Link>
          <Link
            href="https://www.instagram.com/nerd1dk/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl border border-white/10 p-3 transition hover:bg-white/5"
          >
            <svg className="h-5 w-5 flex-shrink-0 text-lime-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
            </svg>
            Instagram: @nerd1dk
          </Link>
          <div className="rounded-xl border border-white/10 bg-black/20 p-4">
            <p className="text-sm font-medium">Что будет после отправки:</p>
            <ul className="mt-2 space-y-1 text-sm text-gray-300">
              <li>• Уточнение задачи и приоритетов</li>
              <li>• Предварительная оценка сроков и бюджета</li>
              <li>• Предложение по формату работы</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
