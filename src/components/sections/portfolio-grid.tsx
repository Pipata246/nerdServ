"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cases } from "@/data/site-data";

type Filter = "all" | "site" | "bot" | "other";

export function PortfolioGrid() {
  const [filter, setFilter] = useState<Filter>("all");
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const list = useMemo(() => {
    return filter === "all" ? cases : cases.filter((item) => item.type === filter);
  }, [filter]);

  const selected = cases.find((item) => item.id === selectedId);

  return (
    <div className="space-y-6">
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

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((item) => (
          <motion.article
            key={item.id}
            whileHover={{ y: -6 }}
            className="glass rounded-2xl p-4"
          >
            <div className="mb-3 flex h-40 items-center justify-center rounded-xl bg-gray-600/40 text-sm text-gray-200">
              Image Placeholder
            </div>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm text-gray-300">{item.description}</p>
            <button onClick={() => setSelectedId(item.id)} className="mt-4 btn-secondary text-sm">
              Подробнее
            </button>
          </motion.article>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 px-4"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass w-full max-w-lg rounded-2xl p-6"
            >
              <h4 className="text-2xl font-semibold">{selected.title}</h4>
              <p className="mt-3 text-gray-300">{selected.description}</p>
              <p className="mt-4 text-sm text-gray-400">Подробности проекта, стек, этапы и результат можно разместить здесь.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
