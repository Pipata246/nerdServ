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

export function ContactContent() {
  const [errors, setErrors] = useState<Errors>({});
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [serviceValue, setServiceValue] = useState("");
  const [contactWayValue, setContactWayValue] = useState("telegram");
  const [countryCodeValue, setCountryCodeValue] = useState("+7");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "").trim();
    const contact = String(form.get("contact") || "").trim();
    const service = String(form.get("service") || "").trim();
    const message = String(form.get("message") || "").trim();
    const consent = form.get("consent");

    const nextErrors: Errors = {};
    if (name.length < 2) nextErrors.name = "Введите имя (минимум 2 символа).";
    
    if (contactWayValue === "whatsapp" || contactWayValue === "max") {
      if (!/^[0-9()\-\s]{6,20}$/.test(contact)) {
        nextErrors.contact = "Введите корректный номер телефона.";
      }
    } else if (contactWayValue === "telegram") {
      if (!/^@?[a-zA-Z0-9_]{5,32}$/.test(contact)) {
        nextErrors.contact = "Введите username Telegram, например @nerdServ.";
      }
    }
    
    if (!service) nextErrors.service = "Выберите интересующую услугу.";
    if (message.length < 10) nextErrors.message = "Сообщение должно быть от 10 символов.";
    if (!consent) nextErrors.consent = "Подтвердите согласие на обработку данных.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitting(true);
      setTimeout(() => {
        setSubmitting(false);
        setSuccess(true);
        setServiceValue("");
        setContactWayValue("telegram");
        setCountryCodeValue("+7");
        e.currentTarget.reset();
        setTimeout(() => setSuccess(false), 2200);
      }, 800);
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
          <input name="name" placeholder="Имя" className="field-control" />
          {errors.name && <p className="mt-1 text-xs text-red-300">{errors.name}</p>}
        </div>
        <div>
          {contactWayValue === "whatsapp" || contactWayValue === "max" ? (
            <div className="grid gap-3 sm:grid-cols-[160px_1fr]">
              <CustomSelect
                name="countryCode"
                value={countryCodeValue}
                onChange={setCountryCodeValue}
                placeholder="Код"
                options={[
                  { value: "+7", label: "+7 (RU)" },
                  { value: "+1", label: "+1 (US/CA)" },
                  { value: "+44", label: "+44 (UK)" },
                  { value: "+49", label: "+49 (DE)" },
                  { value: "+971", label: "+971 (UAE)" }
                ]}
              />
              <input name="contact" placeholder="Номер телефона (без кода страны)" className="field-control" />
            </div>
          ) : (
            <input
              name="contact"
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
              value={serviceValue}
              onChange={setServiceValue}
              placeholder="Выберите услугу"
              options={[
                { value: "site", label: "Разработка сайта" },
                { value: "bot", label: "Telegram / чат-бот" },
                { value: "automation", label: "Автоматизация / интеграции" },
                { value: "support", label: "Поддержка и сопровождение" }
              ]}
            />
            {errors.service && <p className="mt-1 text-xs text-red-300">{errors.service}</p>}
          </div>
          <input name="budget" placeholder="Бюджет (опц.)" className="field-control" />
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <input name="deadline" placeholder="Желаемый срок (опц.)" className="field-control" />
          <CustomSelect
            name="contactWay"
            value={contactWayValue}
            onChange={setContactWayValue}
            placeholder="Выберите канал связи"
            options={[
              { value: "telegram", label: "Связь через Telegram" },
              { value: "whatsapp", label: "Связь через WhatsApp" },
              { value: "max", label: "Связь через Max" }
            ]}
          />
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Кратко опишите задачу, текущую ситуацию и ожидаемый результат"
            className="field-control min-h-36"
          />
          {errors.message && <p className="mt-1 text-xs text-red-300">{errors.message}</p>}
        </div>
        <label className="flex items-start gap-2 text-xs text-gray-300">
          <input type="checkbox" name="consent" className="check-control" />
          <span>Согласен(на) на обработку персональных данных и получение ответа по указанным контактам.</span>
        </label>
        {errors.consent && <p className="-mt-2 text-xs text-red-300">{errors.consent}</p>}
        <button className="btn-primary w-full justify-center sm:w-auto">
          {submitting ? "Отправка..." : success ? "Заявка отправлена!" : "Отправить"}
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
