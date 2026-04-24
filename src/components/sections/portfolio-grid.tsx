"use client";

import { useMemo, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cases } from "@/data/site-data";
import Link from "next/link";

type Filter = "all" | "site" | "bot" | "other";

const typeLabel: Record<string, string> = {
  site: "Сайт",
  bot: "Telegram-бот",
  other: "Интеграция"
};

export function PortfolioGrid() {
  const [filter, setFilter] = useState<Filter>("all");
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const list = useMemo(() => {
    return filter === "all" ? cases : cases.filter((item) => item.type === filter);
  }, [filter]);

  const selected = cases.find((item) => item.id === selectedId);

  // Lock body scroll when modal open
  useEffect(() => {
    if (selectedId !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [selectedId]);

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        {[
          { key: "all", label: "Все" },
          { key: "site", label: "Сайты" },
          { key: "bot", label: "Боты" },
          { key: "other", label: "Прочее" }
        ].map((item) => (
          <button
            key={item.key}
            onClick={() => setFilter(item.key as Filter)}
            className={`rounded-full px-4 py-2 text-sm transition ${
              filter === item.key
                ? "bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)]"
                : "border border-[var(--btn-secondary-border)] bg-[var(--btn-secondary-bg)] text-[var(--btn-secondary-text)] hover:brightness-95"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {list.map((item) => (
            <motion.article
              key={item.id}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="glass flex flex-col rounded-2xl p-4"
            >
              <div className="mb-3 flex h-40 items-center justify-center rounded-xl bg-gray-600/40 text-sm text-gray-400">
                Image Placeholder
              </div>
              <div className="mb-2 flex items-center gap-2">
                <span className="rounded-full border border-lime-300/25 bg-lime-300/10 px-2 py-0.5 text-xs text-lime-300">
                  {typeLabel[item.type] ?? item.type}
                </span>
                {"stack" in item && item.stack && (
                  <span className="text-xs text-gray-500">{item.stack}</span>
                )}
              </div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              {"result" in item && item.result && (
                <p className="mt-1 text-sm font-semibold text-lime-300">{item.result}</p>
              )}
              <p className="mt-2 text-sm text-gray-300">{item.description}</p>
              <button
                onClick={() => setSelectedId(item.id)}
                className="btn-secondary mt-4 w-full justify-center text-sm"
              >
                Подробнее
              </button>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedId(null)}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/75 px-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ y: 24, opacity: 0, scale: 0.97 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 24, opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              onClick={(e) => e.stopPropagation()}
              className="glass w-full max-w-3xl overflow-hidden rounded-3xl"
            >
              {/* Header */}
              <div className="flex items-start justify-between border-b border-white/8 p-6">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full border border-lime-300/25 bg-lime-300/10 px-2.5 py-0.5 text-xs text-lime-300">
                      {typeLabel[selected.type] ?? selected.type}
                    </span>
                    {"stack" in selected && selected.stack && (
                      <span className="text-xs text-gray-500">{selected.stack}</span>
                    )}
                  </div>
                  <h2 className="mt-2 text-2xl font-bold">{selected.title}</h2>
                  {"result" in selected && selected.result && (
                    <p className="mt-1 text-sm font-semibold text-lime-300">{selected.result}</p>
                  )}
                </div>
                <button
                  onClick={() => setSelectedId(null)}
                  className="ml-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400 transition hover:bg-white/10 hover:text-white"
                  aria-label="Закрыть"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Body: description left, image right */}
              <div className="grid gap-0 lg:grid-cols-[1fr_1.1fr]">
                {/* Left: description */}
                <div className="flex flex-col justify-between p-6">
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">О проекте</p>
                      <p className="mt-2 text-base leading-relaxed text-gray-200">{selected.description}</p>
                    </div>

                    {"stack" in selected && selected.stack && (
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">Стек</p>
                        <p className="mt-1 text-sm text-gray-300">{selected.stack}</p>
                      </div>
                    )}

                    {"result" in selected && selected.result && (
                      <div className="rounded-xl border border-lime-300/20 bg-lime-300/8 p-4">
                        <p className="text-xs font-semibold uppercase tracking-widest text-lime-300/70">Результат</p>
                        <p className="mt-1 text-lg font-bold text-lime-300">{selected.result}</p>
                      </div>
                    )}
                  </div>

                  <div className="mt-6 flex gap-3">
                    <Link href="/contact" className="btn-primary text-sm">
                      Хочу такой же
                    </Link>
                    <button
                      onClick={() => setSelectedId(null)}
                      className="btn-secondary text-sm"
                    >
                      Закрыть
                    </button>
                  </div>
                </div>

                {/* Right: image */}
                <div className="flex items-center justify-center border-t border-white/8 bg-black/20 p-6 lg:border-l lg:border-t-0">
                  <div className="flex h-64 w-full items-center justify-center rounded-2xl bg-gray-600/30 text-sm text-gray-500">
                    Image Placeholder
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
