"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const STEPS = [
  {
    number: "01",
    tag: "Вы пишете нам",
    title: "Бесплатная консультация",
    duration: "День 1",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
      </svg>
    ),
    description: "Напишите в Telegram или оставьте заявку — я отвечу в течение часа. Расскажите о задаче в двух словах: что нужно сделать и к какому сроку. Никаких анкет и обязательств — просто разговор.",
    details: [
      "Ответ в течение 1 часа",
      "Первичная оценка стоимости — бесплатно",
      "Вы ничего не обязаны после звонка",
      "Удобный мессенджер — ваш выбор"
    ],
    color: "from-lime-300/20 to-lime-300/5",
    accent: "#cbe857"
  },
  {
    number: "02",
    tag: "Разбираемся в задаче",
    title: "Понимаем, что вам нужно",
    duration: "День 1–2",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    ),
    description: "Я задаю несколько вопросов о вашем бизнесе и клиентах. Это нужно не для галочки — чем лучше я понимаю вашу ситуацию, тем точнее будет результат. Обычно занимает 20–30 минут.",
    details: [
      "Выясняем цель: больше заявок, продаж или узнаваемости",
      "Смотрим на ваших конкурентов",
      "Определяем, кто ваш клиент",
      "Фиксируем, что важно именно вам"
    ],
    color: "from-blue-400/20 to-blue-400/5",
    accent: "#60a5fa"
  },
  {
    number: "03",
    tag: "Прозрачный план",
    title: "Цена, сроки и объём работ",
    duration: "День 2–3",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
      </svg>
    ),
    description: "Вы получаете документ с точным описанием того, что будет сделано, сколько это стоит и когда будет готово. Цена фиксируется до старта — никаких «а вот это не входило» в процессе.",
    details: [
      "Фиксированная цена — без доплат в процессе",
      "Чёткие сроки по каждому этапу",
      "Понятное описание: что именно вы получите",
      "Работа начинается только после вашего согласия"
    ],
    color: "from-violet-400/20 to-violet-400/5",
    accent: "#a78bfa"
  },
  {
    number: "04",
    tag: "Всё под контролем",
    title: "Делаем — вы следите за прогрессом",
    duration: "День 3–8",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
    description: "С первого дня разработки у вас есть постоянный доступ к тестовой среде — вы видите проект в реальном времени, можете открыть его в любой момент, оставить комментарий или попросить правку. Не нужно ждать финала.",
    details: [
      "Тестовая среда доступна с первого дня и всегда",
      "Видите актуальное состояние проекта в реальном времени",
      "Правки принимаем сразу — без накопления",
      "Вы в курсе на каждом шаге без лишних созвонов"
    ],
    color: "from-orange-400/20 to-orange-400/5",
    accent: "#fb923c"
  },
  {
    number: "05",
    tag: "Контроль качества",
    title: "Полное тестирование перед сдачей",
    duration: "День 8–9",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    description: "Перед передачей проекта проводится полный цикл тестирования: функциональное, кросс-браузерное и адаптивное. Тестируется каждый сценарий взаимодействия — формы, кнопки, переходы, граничные состояния. Вы получаете продукт, готовый к работе с реальными пользователями.",
    details: [
      "Функциональное тестирование всех сценариев",
      "Кросс-браузерная и адаптивная проверка",
      "Тестирование производительности и скорости загрузки",
      "Сдача только после прохождения всех проверок"
    ],
    color: "from-teal-400/20 to-teal-400/5",
    accent: "#2dd4bf"
  },
  {
    number: "06",
    tag: "Сдача проекта",
    title: "Запускаем — вы начинаете получать клиентов",
    duration: "День 9–10",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
      </svg>
    ),
    description: "Сайт или бот выходит в интернет под вашим доменом. Я настраиваю всё под ключ — вам не нужно разбираться в технических деталях. В первые сутки после запуска я на связи и слежу, чтобы всё шло гладко.",
    details: [
      "Запуск под вашим доменом — под ключ",
      "Подключаем счётчик посещений и заявок",
      "Первые сутки — на связи в приоритете",
      "Вы получаете доступы ко всему"
    ],
    color: "from-lime-300/20 to-lime-300/5",
    accent: "#cbe857"
  },
  {
    number: "07",
    tag: "Долгосрочно",
    title: "Вы не остаётесь один на один с проектом",
    duration: "После запуска",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
    description: "После сдачи я остаюсь на связи. Если что-то пойдёт не так — исправлю. Если захотите добавить новый раздел или функцию — сделаем. Большинство клиентов возвращаются с новыми задачами.",
    details: [
      "2 недели гарантии — исправляю бесплатно",
      "Объясню, как самому менять тексты и фото",
      "Всегда на связи для новых задач",
      "Скидка постоянным клиентам"
    ],
    color: "from-emerald-400/20 to-emerald-400/5",
    accent: "#34d399"
  }
];

const TOTAL = STEPS.length;

export function YourCaseClient() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const accumulatorRef = useRef(0);
  const THRESHOLD = 60;

  const goTo = useCallback(
    (next: number, dir: number) => {
      if (isAnimating) return;
      const clamped = Math.max(0, Math.min(TOTAL - 1, next));
      if (clamped === active) return;
      setDirection(dir);
      setIsAnimating(true);
      setActive(clamped);
    },
    [active, isAnimating]
  );

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      accumulatorRef.current += e.deltaY;
      if (Math.abs(accumulatorRef.current) >= THRESHOLD) {
        const dir = accumulatorRef.current > 0 ? 1 : -1;
        goTo(active + dir, dir);
        accumulatorRef.current = 0;
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [active, goTo]);

  // Touch support
  const touchStartY = useRef(0);
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const delta = touchStartY.current - e.changedTouches[0].clientY;
    if (Math.abs(delta) > 40) {
      const dir = delta > 0 ? 1 : -1;
      goTo(active + dir, dir);
    }
  };

  const step = STEPS[active];

  const variants = {
    enter: (d: number) => ({
      x: d > 0 ? 120 : -120,
      opacity: 0,
      scale: 0.94,
      filter: "blur(6px)"
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)"
    },
    exit: (d: number) => ({
      x: d > 0 ? -120 : 120,
      opacity: 0,
      scale: 0.94,
      filter: "blur(6px)"
    })
  };

  return (
    <div
      ref={containerRef}
      className="relative flex h-[calc(100vh-5rem)] flex-col overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Background glow that shifts per step */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0"
        animate={{ opacity: 1 }}
        key={`bg-${active}`}
        style={{
          background: `radial-gradient(800px 600px at 60% 40%, ${step.accent}18 0%, transparent 70%)`
        }}
        transition={{ duration: 0.8 }}
      />

      {/* Header */}
      <div className="container-main relative z-10 pt-8 sm:pt-10">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-lime-300/90">Ваш кейс</p>
          <h1 className="mt-1 text-2xl font-bold sm:text-3xl">Как проходит работа над проектом</h1>
          <p className="mt-1 text-sm text-gray-400">Скролльте вниз — переключайте этапы</p>
        </motion.div>
      </div>

      {/* Step progress bar */}
      <div className="container-main relative z-10 mt-5">
        <div className="flex items-center gap-1.5">
          {STEPS.map((s, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > active ? 1 : -1)}
              className="group relative flex flex-col items-center"
              aria-label={s.title}
            >
              <motion.div
                animate={{
                  width: i === active ? 32 : 8,
                  backgroundColor: i === active ? step.accent : i < active ? "#4b5563" : "#1f2937"
                }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="h-1.5 rounded-full"
              />
            </button>
          ))}
          <span className="ml-auto text-xs text-gray-500">
            {active + 1} / {TOTAL}
          </span>
        </div>
      </div>

      {/* Main card */}
      <div className="container-main relative z-10 mt-6 flex flex-1 items-center">
        <div className="w-full">
          <AnimatePresence mode="wait" custom={direction} onExitComplete={() => setIsAnimating(false)}>
            <motion.div
              key={active}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="grid gap-6 lg:grid-cols-[1fr_1.1fr]"
            >
              {/* Left: step info */}
              <div className="glass rounded-3xl p-7 sm:p-9" style={{ borderColor: `${step.accent}40` }}>
                <div className="flex items-start justify-between">
                  <div>
                    <span
                      className="inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest"
                      style={{ background: `${step.accent}22`, color: step.accent }}
                    >
                      {step.tag}
                    </span>
                    <p className="mt-3 text-6xl font-black opacity-10">{step.number}</p>
                  </div>
                  <motion.div
                    initial={{ rotate: -15, scale: 0.8, opacity: 0 }}
                    animate={{ rotate: 0, scale: 1, opacity: 1 }}
                    transition={{ delay: 0.15, duration: 0.4 }}
                    style={{ color: step.accent }}
                  >
                    {step.icon}
                  </motion.div>
                </div>

                <motion.h2
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                  className="mt-2 text-3xl font-bold sm:text-4xl"
                >
                  {step.title}
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.18 }}
                  className="mt-1 flex items-center gap-2"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4 text-gray-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <span className="text-sm text-gray-400">{step.duration}</span>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="mt-5 text-base leading-relaxed text-gray-300"
                >
                  {step.description}
                </motion.p>

                {/* Nav arrows */}
                <div className="mt-8 flex items-center gap-3">
                  <button
                    onClick={() => goTo(active - 1, -1)}
                    disabled={active === 0}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:bg-white/10 disabled:opacity-25"
                    aria-label="Предыдущий этап"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                  </button>
                  <button
                    onClick={() => goTo(active + 1, 1)}
                    disabled={active === TOTAL - 1}
                    className="flex h-10 w-10 items-center justify-center rounded-xl transition disabled:opacity-25"
                    style={{ background: step.accent, color: "#111827" }}
                    aria-label="Следующий этап"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                  {active === TOTAL - 1 && (
                    <Link href="/contact" className="btn-primary ml-2 text-sm">
                      Начать проект →
                    </Link>
                  )}
                  {active < TOTAL - 1 && (
                    <span className="ml-2 text-xs text-gray-500">
                      Следующий: {STEPS[active + 1].tag}
                    </span>
                  )}
                </div>
              </div>

              {/* Right: details */}
              <div className="flex flex-col gap-4">
                {/* Detail list */}
                <div className={`glass rounded-3xl bg-gradient-to-br p-7 ${step.color}`} style={{ borderColor: `${step.accent}30` }}>
                  <p className="mb-4 text-xs font-semibold uppercase tracking-widest" style={{ color: step.accent }}>
                    Что это значит для вас
                  </p>
                  <div className="space-y-3">
                    {step.details.map((d, i) => (
                      <motion.div
                        key={d}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15 + i * 0.07, duration: 0.35 }}
                        className="flex items-center gap-3"
                      >
                        <span
                          className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold"
                          style={{ background: `${step.accent}25`, color: step.accent }}
                        >
                          ✓
                        </span>
                        <span className="text-sm text-gray-200">{d}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Last step: CTA / Other steps: mini map */}
                <AnimatePresence mode="wait">
                  {active === TOTAL - 1 ? (
                    <motion.div
                      key="cta"
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="glass rounded-3xl p-6"
                      style={{ borderColor: "#cbe85740" }}
                    >
                      <p className="text-xs uppercase tracking-widest text-lime-300/70">Вы прошли все 7 этапов</p>
                      <p className="mt-2 text-xl font-bold">Готовы запустить свой проект?</p>
                      <p className="mt-2 text-sm text-gray-400">
                        Напишите — расскажу, сколько займёт именно ваша задача и что будет на каждом шаге.
                      </p>
                      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                        <Link href="/contact" className="btn-primary w-full justify-center sm:w-auto">
                          Начать проект →
                        </Link>
                        <Link href="/contact" className="btn-secondary w-full justify-center text-sm sm:w-auto">
                          Написать в Telegram
                        </Link>
                      </div>
                      <div className="mt-4 flex gap-4 border-t border-white/8 pt-4">
                        {[["40+", "проектов"], ["1 час", "ответ"], ["2 нед.", "гарантия"]].map(([v, l]) => (
                          <div key={l} className="text-center">
                            <p className="text-base font-black text-lime-300">{v}</p>
                            <p className="text-[10px] text-gray-500">{l}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="map"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="glass rounded-3xl p-5"
                    >
                      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-500">Все этапы</p>
                      <div className="grid grid-cols-4 gap-2">
                        {STEPS.map((s, i) => (
                          <button
                            key={i}
                            onClick={() => goTo(i, i > active ? 1 : -1)}
                            className="rounded-xl p-2 text-left transition hover:bg-white/5"
                          >
                            <motion.div
                              animate={{ opacity: i === active ? 1 : i < active ? 0.6 : 0.3 }}
                              transition={{ duration: 0.3 }}
                            >
                              <p className="text-xs font-bold" style={{ color: i === active ? step.accent : i < active ? "#6b7280" : "#374151" }}>
                                {s.number}
                              </p>
                              <p className="mt-0.5 text-[10px] leading-tight text-gray-500">{s.tag}</p>
                            </motion.div>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Scroll hint */}
      <AnimatePresence>
        {active === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
              className="flex flex-col items-center gap-1 text-gray-500"
            >
              <span className="text-xs">Скролл</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
