"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { navItems } from "@/data/site-data";
import { ThemeToggle } from "@/components/ui/theme-toggle";

type Theme = "dark" | "light";

type HeaderProps = {
  onOpenLead: () => void;
  theme: Theme;
  onToggleTheme: () => void;
};

export function Header({ onOpenLead, theme, onToggleTheme }: HeaderProps) {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handler = () => {
      const currentY = window.scrollY;
      const isScrollingDown = currentY > lastScrollY.current;

      if (currentY < 24) {
        setVisible(true);
      } else {
        setVisible(!isScrollingDown);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div
        className={`container-main mt-2 flex h-16 items-center justify-between rounded-2xl px-4 backdrop-blur-md md:px-6 ${
          theme === "dark" ? "border border-white/10 bg-black/35" : "border border-[#1f2937]/20 bg-white/92"
        }`}
      >
        <Link href="/" className="text-lg font-bold tracking-wide">
          NerdServ
        </Link>

        <nav className="hidden items-center gap-5 text-sm md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="header-link transition">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={onOpenLead}
            className="btn-secondary text-sm"
          >
            Связаться
          </motion.button>
        </div>
      </div>
    </header>
  );
}
