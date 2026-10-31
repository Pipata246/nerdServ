"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <section className="section flex min-h-[80vh] items-center">
      <div className="container-main">
        <div className="flex flex-col items-center text-center">

          {/* Большая цифра 404 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative select-none"
          >
            {/* Glow под цифрами */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="h-32 w-96 rounded-full bg-lime-300/15 blur-3xl" />
            </div>

            <div className="relative flex items-center gap-2 sm:gap-4">
              {/* Первая 4 — лаймовая */}
              <span
                className="font-black leading-none"
                style={{
                  fontSize: "clamp(7rem, 22vw, 18rem)",
                  color: "#cbe857",
                  textShadow: "0 0 60px rgba(203,232,87,0.4), 0 0 120px rgba(203,232,87,0.15)",
                }}
              >
                4
              </span>

              {/* 0 — белый/серый */}
              <span
                className="font-black leading-none"
                style={{
                  fontSize: "clamp(7rem, 22vw, 18rem)",
                  color: "rgba(255,255,255,0.12)",
                  textShadow: "0 0 60px rgba(255,255,255,0.06)",
                  WebkitTextStroke: "2px rgba(255,255,255,0.25)",
                }}
              >
                0
              </span>

              {/* Вторая 4 — лаймовая */}
              <span
                className="font-black leading-none"
                style={{
                  fontSize: "clamp(7rem, 22vw, 18rem)",
                  color: "#cbe857",
                  textShadow: "0 0 60px rgba(203,232,87,0.4), 0 0 120px rgba(203,232,87,0.15)",
                }}
              >
                4
              </span>
            </div>
          </motion.div>

          {/* Текст */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
            className="mt-2"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-lime-300/80">Страница не найдена</p>
            <h1 className="mt-3 text-2xl font-bold sm:text-3xl lg:text-4xl">
              Кажется, вы заблудились
            </h1>
            <p className="subtitle mx-auto mt-3 max-w-md">
              Такой страницы не существует. Возможно, ссылка устарела или была удалена.
            </p>
          </motion.div>

          {/* Кнопки */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Link href="/" className="btn-primary w-full justify-center sm:w-auto">
              На главную
            </Link>
            <Link href="/contact" className="btn-secondary w-full justify-center sm:w-auto">
              Написать мне
            </Link>
          </motion.div>

          {/* Быстрые ссылки */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55, ease: "easeOut" }}
            className="mt-10 flex flex-wrap justify-center gap-3"
          >
            {[
              { href: "/services", label: "Услуги" },
              { href: "/portfolio", label: "Портфолио" },
              { href: "/about", label: "Обо мне" },
              { href: "/your-case", label: "Ваш кейс" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-400 transition hover:border-lime-300/30 hover:text-lime-300"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
