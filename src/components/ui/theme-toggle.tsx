"use client";

import { motion } from "framer-motion";

type Theme = "dark" | "light";

type ThemeToggleProps = {
  theme: Theme;
  onToggle: () => void;
};

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const isDark = theme === "dark";

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      onClick={onToggle}
      className="theme-toggle inline-flex h-10 w-10 items-center justify-center rounded-xl transition"
      aria-label="Переключить тему"
      title="Переключить тему"
    >
      <motion.svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        initial={false}
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {isDark ? (
          <>
            <circle cx="12" cy="12" r="4.2" className="fill-[var(--toggle-icon)]" />
            <path
              d="M12 2.8V5M12 19V21.2M4.8 4.8L6.3 6.3M17.7 17.7L19.2 19.2M2.8 12H5M19 12H21.2M4.8 19.2L6.3 17.7M17.7 6.3L19.2 4.8"
              stroke="var(--toggle-icon)"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </>
        ) : (
          <path
            d="M14.6 3.2A8.8 8.8 0 1 0 20.8 15a7 7 0 1 1-6.2-11.8Z"
            className="fill-[var(--toggle-icon)]"
          />
        )}
      </motion.svg>
    </motion.button>
  );
}
