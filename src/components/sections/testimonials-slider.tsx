"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { testimonials } from "@/data/site-data";

export function TestimonialsSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="glass rounded-2xl p-6">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35 }}
        >
          <div className="mb-3 flex items-center gap-1 text-lime-300">
            {"★★★★★".split("").map((star, i) => (
              <span key={`${star}-${i}`} className="text-sm">
                {star}
              </span>
            ))}
          </div>
          <p className="text-lg text-gray-200">“{testimonials[index].text}”</p>
          <div className="mt-4 grid gap-1 text-sm">
            <p className="font-semibold text-lime-300">{testimonials[index].name}</p>
            <p className="text-gray-300">{testimonials[index].role}</p>
            <p className="text-xs text-gray-400">Проект: {testimonials[index].project}</p>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="mt-5 flex gap-2">
        {testimonials.map((_, dotIndex) => (
          <button
            key={dotIndex}
            onClick={() => setIndex(dotIndex)}
            className={`h-2 rounded-full transition ${dotIndex === index ? "w-6 bg-lime-300" : "w-2 bg-white/25"}`}
            aria-label={`Отзыв ${dotIndex + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
