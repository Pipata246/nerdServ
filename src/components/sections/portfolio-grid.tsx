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

const typeIcon: Record<string, React.ReactNode> = {
  site: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253M3 12a8.959 8.959 0 0 0 .284 2.253" />
    </svg>
  ),
  bot: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
    </svg>
  ),
  other: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
    </svg>
  )
};

export function PortfolioGrid() {
  const [filter, setFilter] = useState<Filter>("all");
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const list = useMemo(() => {
    return filter === "all" ? cases : cases.filter((item) => item.type === filter);
  }, [filter]);

  const selected = cases.find((item) => item.id === selectedId);

  useEffect(() => {
    document.body.style.overflow = selectedId !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [selectedId]);

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        {[
          { key: "all", label: "Все кейсы" },
          { key: "site", label: "Сайты" },
          { key: "bot", label: "Боты" },
          { key: "other", label: "Интеграции" }
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
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="wait">
          {list.map((item, i) => (
            <motion.article
              key={`${filter}-${item.id}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22, delay: i * 0.04, ease: "easeOut" }}
              className="glass group flex h-full flex-col rounded-2xl p-5"
            >
              {/* Top: icon + type + stack */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-lime-300/10 text-lime-300">
                    {typeIcon[item.type]}
                  </span>
                  <span className="text-xs font-semibold text-lime-300/80">
                    {typeLabel[item.type]}
                  </span>
                </div>
                {"stack" in item && item.stack && (
                  <span className="rounded-lg border border-white/8 bg-white/3 px-2 py-1 text-[10px] text-gray-500">
                    {item.stack}
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="mt-4 text-lg font-bold leading-snug">{item.title}</h3>

              {/* Result badge */}
              {"result" in item && item.result && (
                <div className="mt-2 inline-flex items-center gap-1.5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5 text-lime-300">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                  </svg>
                  <span className="text-sm font-semibold text-lime-300">{item.result}</span>
                </div>
              )}

              {/* Description */}
              <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-400">{item.description}</p>

              {/* Button */}
              <button
                onClick={() => setSelectedId(item.id)}
                className="mt-5 flex items-center gap-2 text-sm font-medium text-gray-400 transition hover:text-lime-300"
              >
                Читать кейс
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>

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
              className="glass w-full max-w-2xl overflow-hidden rounded-3xl"
            >
              {/* Header */}
              <div className="flex items-start justify-between border-b border-white/8 p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-300/10 text-lime-300">
                    {typeIcon[selected.type]}
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-lime-300/70">{typeLabel[selected.type]}</p>
                    <h2 className="text-xl font-bold leading-tight">{selected.title}</h2>
                  </div>
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

              {/* Body */}
              <div className="space-y-5 p-6">
                {/* Result */}
                {"result" in selected && selected.result && (
                  <div className="flex items-center gap-3 rounded-xl border border-lime-300/20 bg-lime-300/8 px-4 py-3">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 flex-shrink-0 text-lime-300">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                    </svg>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-lime-300/60">Результат</p>
                      <p className="text-base font-bold text-lime-300">{selected.result}</p>
                    </div>
                  </div>
                )}

                {/* Description */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gray-500">О проекте</p>
                  <p className="mt-2 text-sm leading-relaxed text-gray-200">{selected.description}</p>
                </div>

                {/* Challenge + Solution */}
                {"challenge" in selected && selected.challenge && (
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-xl border border-white/8 bg-white/3 p-4">
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-500">Задача</p>
                      <p className="mt-1.5 text-sm text-gray-300">{selected.challenge}</p>
                    </div>
                    {"solution" in selected && selected.solution && (
                      <div className="rounded-xl border border-white/8 bg-white/3 p-4">
                        <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-500">Решение</p>
                        <p className="mt-1.5 text-sm text-gray-300">{selected.solution}</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Stack */}
                {"stack" in selected && selected.stack && (
                  <div className="flex items-center gap-2">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4 text-gray-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                    <span className="text-xs text-gray-500">Стек:</span>
                    <span className="text-xs font-medium text-gray-300">{selected.stack}</span>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between border-t border-white/8 px-6 py-4">
                <p className="text-xs text-gray-500">Хотите похожий проект?</p>
                <div className="flex gap-3">
                  <Link href="/contact" className="btn-primary text-sm">
                    Обсудить проект
                  </Link>
                  <button onClick={() => setSelectedId(null)} className="btn-secondary text-sm">
                    Закрыть
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
