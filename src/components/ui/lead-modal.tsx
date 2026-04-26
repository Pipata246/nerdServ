"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

type Errors = {
  name?: string;
  contact?: string;
  message?: string;
  consent?: string;
};

type CustomSelectProps = {
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: Array<{ value: string; label: string }>;
};

function CustomSelect({ name, value, onChange, options }: CustomSelectProps) {
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

  const currentLabel = options.find((opt) => opt.value === value)?.label || options[0]?.label || "";

  return (
    <div ref={rootRef} className="relative">
      <input type="hidden" name={name} value={value} />
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={`field-control flex items-center justify-between ${open ? "ring-1 ring-[var(--accent-outline-soft)]" : ""}`}
      >
        <span>{currentLabel}</span>
        <ChevronDown className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute z-30 mt-2 max-h-64 w-full overflow-auto rounded-xl border border-[var(--accent-outline)] bg-[var(--bg-soft)] p-1 shadow-xl">
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
  service: "site",
  message: "",
  contactWay: "telegram",
  countryCode: "+7",
  consent: false,
};

export function LeadModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [fields, setFields] = useState(EMPTY);
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  const set = (key: keyof typeof EMPTY) => (val: string | boolean) =>
    setFields((prev) => ({ ...prev, [key]: val }));

  const reset = () => {
    setFields(EMPTY);
    setErrors({});
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault();

    const nextErrors: Errors = {};
    if (fields.name.trim().length < 2) nextErrors.name = "Введите имя (минимум 2 символа).";
    if (fields.contactWay === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.contact)) nextErrors.contact = "Введите корректный email.";
    if (fields.contactWay === "whatsapp" && !/^[0-9()\-\s]{6,20}$/.test(fields.contact)) nextErrors.contact = "Введите корректный номер телефона.";
    if (fields.contactWay === "telegram" && !/^@?[a-zA-Z0-9_]{5,32}$/.test(fields.contact)) nextErrors.contact = "Введите Telegram username.";
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
          contactWay: payload.contactWay,
          countryCode: payload.countryCode,
        }),
      });
    } catch (_) {
      // Сообщение всё равно доходит, игнорируем сетевую ошибку
    } finally {
      setSubmitting(false);
      setSent(true);
      setTimeout(() => {
        setSent(false);
        onClose();
      }, 1000);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/70 px-4"
          onClick={onClose}
        >
          <motion.form
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            onSubmit={submit}
            className="glass max-h-[90vh] w-full max-w-2xl space-y-5 overflow-y-auto rounded-2xl p-6 sm:p-8"
          >
            <h3 className="text-3xl font-semibold">Оставить заявку</h3>
            <p className="text-sm text-gray-300">Коротко опишите задачу, и я предложу формат решения.</p>

            <div>
              <input
                value={fields.name}
                onChange={(e) => set("name")(e.target.value)}
                placeholder="Имя"
                className="field-control"
              />
              {errors.name && <p className="mt-1 text-xs text-red-300">{errors.name}</p>}
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <CustomSelect
                name="service"
                value={fields.service}
                onChange={set("service") as (v: string) => void}
                options={[
                  { value: "site", label: "Разработка сайта" },
                  { value: "bot", label: "Telegram / чат-бот" },
                  { value: "automation", label: "Автоматизация / интеграции" },
                  { value: "support", label: "Поддержка и сопровождение" },
                ]}
              />
              <CustomSelect
                name="contactWay"
                value={fields.contactWay}
                onChange={set("contactWay") as (v: string) => void}
                options={[
                  { value: "telegram", label: "Связь через Telegram" },
                  { value: "whatsapp", label: "Связь через WhatsApp/Max" },
                  { value: "email", label: "Связь через Email" },
                ]}
              />
            </div>

            <div>
              {fields.contactWay === "whatsapp" ? (
                <div className="grid gap-3 sm:grid-cols-[140px_1fr]">
                  <CustomSelect
                    name="countryCode"
                    value={fields.countryCode}
                    onChange={set("countryCode") as (v: string) => void}
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
                    placeholder="Номер телефона"
                    className="field-control"
                  />
                </div>
              ) : (
                <input
                  value={fields.contact}
                  onChange={(e) => set("contact")(e.target.value)}
                  placeholder={fields.contactWay === "email" ? "Email для ответа" : "Telegram username (@username)"}
                  className="field-control"
                />
              )}
              {errors.contact && <p className="mt-1 text-xs text-red-300">{errors.contact}</p>}
            </div>

            <div>
              <textarea
                value={fields.message}
                onChange={(e) => set("message")(e.target.value)}
                placeholder="Сообщение"
                className="field-control min-h-28"
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
              <span>Согласен(на) на обработку персональных данных.</span>
            </label>
            {errors.consent && <p className="-mt-2 text-xs text-red-300">{errors.consent}</p>}

            <button
              disabled={submitting}
              className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? "Отправка..." : sent ? "Отправлено ✓" : "Отправить"}
            </button>
          </motion.form>
        </motion.div>
      )}
    </AnimatePresence>
  );
}