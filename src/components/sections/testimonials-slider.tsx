"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data/site-data";

export function TestimonialsSlider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (dir: number) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (d: number) => ({ opacity: 0, x: d > 0 ? 40 : -40 }),
    center: { opacity: 1, x: 0 },
    exit: (d: number) => ({ opacity: 0, x: d > 0 ? -40 : 40 }),
  };

  const t = testimonials[index];

  return (
    <div className="glass flex flex-col rounded-2xl p-6">
      {/* Stars */}
      <div className="mb-4 flex items-center gap-1 text-lime-300">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="ml-2 text-xs text-gray-400">{index + 1} / {testimonials.length}</span>
      </div>

      {/* Quote */}
      <div className="relative min-h-[9rem] flex-1">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <svg className="mb-2 h-6 w-6 text-lime-300/40" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-base leading-relaxed text-gray-200">{t.text}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Author */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`author-${index}`}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, delay: 0.1 }}
          className="mt-4 flex items-center gap-3 border-t border-white/8 pt-4"
        >
          {/* Avatar placeholder */}
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-lime-300/15 text-sm font-bold text-lime-300">
            {t.name.charAt(0)}
          </div>
          <div className="min-w-0">
            <p className="font-semibold text-white">{t.name}</p>
            <p className="truncate text-xs text-gray-400">{t.role}</p>
            <p className="truncate text-xs text-lime-300/70">Проект: {t.project}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <div className="mt-5 flex items-center justify-between">
        <div className="flex gap-1.5">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
              aria-label={`Отзыв ${i + 1}`}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: i === index ? 24 : 6,
                background: i === index ? "#cbe857" : "rgba(255,255,255,0.2)"
              }}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => go(-1)}
            className="flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition hover:bg-white/10 hover:text-white"
            aria-label="Предыдущий отзыв"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => go(1)}
            className="flex h-8 w-8 items-center justify-center rounded-xl bg-lime-300/15 text-lime-300 transition hover:bg-lime-300/25"
            aria-label="Следующий отзыв"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
