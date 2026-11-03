"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Сама полоса прогресса. Хуки useScroll/useSpring живут здесь и
 * создаются только когда компонент смонтирован, поэтому измерения
 * скролла всегда снимаются при уже стабильной высоте страницы.
 */
function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 50,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-[999998] origin-left"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      style={{
        scaleX,
        background: "linear-gradient(90deg, rgb(203, 232, 87) 0%, rgb(168, 224, 99) 100%)",
        boxShadow: "0 0 10px rgb(203, 232, 87), 0 0 20px rgb(203, 232, 87)",
      }}
    />
  );
}

export function ScrollProgress() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let frame = 0;

    // Показываем полосу только после полной загрузки страницы.
    // До этого scrollHeight нестабилен (грузятся картинки/шрифты),
    // из-за чего scrollYProgress в самом начале "дёргается" вверх-вниз.
    // После load высота документа стабильна, и пружина работает плавно.
    const ready = () => {
      frame = window.requestAnimationFrame(() => setIsReady(true));
    };

    if (document.readyState === "complete") {
      ready();
    } else {
      window.addEventListener("load", ready, { once: true });
    }

    // Подстраховка: если событие load по какой-то причине не придёт.
    const fallback = window.setTimeout(ready, 1500);

    return () => {
      window.removeEventListener("load", ready);
      window.cancelAnimationFrame(frame);
      window.clearTimeout(fallback);
    };
  }, []);

  if (!isReady) return null;
  return <ScrollProgressBar />;
}
