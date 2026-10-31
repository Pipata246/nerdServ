"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Clock3, Rocket, ShieldCheck } from "lucide-react";

const metrics = [
  { value: "40+", label: "реализованных проектов" },
  { value: "от 10 дней", label: "от брифа до запуска" },
  { value: "до 70%", label: "экономия времени за счёт автоматизации" }
];

const includeList = [
  "Анализ задачи и подбор оптимального решения",
  "Фиксированная цена и сроки до старта работ",
  "Постоянный доступ к тестовой среде в процессе",
  "Поддержка и гарантия после сдачи проекта"
];

export function SalesProof() {
  return (
    <div className="glass rounded-2xl p-5 sm:p-6">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-lime-300/90">Почему это выгодно</p>
          <h3 className="mt-1 text-2xl font-semibold">Результат для бизнеса, а не просто выполненная задача</h3>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-lime-300/30 bg-lime-300/10 px-3 py-1 text-xs text-lime-200">
          <ShieldCheck className="h-4 w-4" />
          фиксированные этапы
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        {metrics.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
            className="rounded-xl border border-white/10 bg-black/25 p-4"
          >
            <p className="text-2xl font-bold text-lime-300">{item.value}</p>
            <p className="mt-1 text-sm text-gray-300">{item.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_auto]">
        <div className="rounded-xl border border-white/10 bg-black/20 p-4">
          <p className="mb-3 text-sm font-medium text-gray-100">В каждом проекте:</p>
          <ul className="space-y-2 text-sm text-gray-300">
            {includeList.map((line) => (
              <li key={line} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-lime-300" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex min-w-52 flex-col gap-3 rounded-xl border border-white/10 bg-black/20 p-4">
          <div className="flex items-center gap-2 text-sm text-gray-200">
            <Clock3 className="h-4 w-4 text-lime-300" />
            Ответ в течение 1 часа
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-200">
            <Rocket className="h-4 w-4 text-lime-300" />
            Старт работ за 24 часа
          </div>
          <Link href="/contact" className="btn-primary mt-2 justify-center">
            Обсудить проект
          </Link>
        </div>
      </div>
    </div>
  );
}
