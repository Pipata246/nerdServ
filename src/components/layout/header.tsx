"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/site-data";

type HeaderProps = {
  onOpenLead: () => void;
};

export function Header({ onOpenLead }: HeaderProps) {
  const [visible, setVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
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
      <div className="container-main mt-2 flex h-16 items-center justify-between rounded-2xl px-4 backdrop-blur-md md:px-6 border border-white/10 bg-black/35">
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
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex items-center rounded-xl border border-[var(--accent-outline)] bg-[var(--btn-secondary-bg)] px-3 py-2 text-sm text-[var(--btn-secondary-text)] shadow-[0_0_0_1px_var(--accent-outline-soft)] transition hover:brightness-95 md:hidden"
            aria-label={mobileOpen ? "Закрыть меню" : "Открыть меню"}
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={onOpenLead}
            className="hidden text-sm md:inline-flex btn-secondary"
          >
            Связаться
          </motion.button>
        </div>
      </div>

      {mobileOpen && (
        <div className="container-main mt-2 rounded-2xl p-3 md:hidden border border-white/10 bg-black/75">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="header-link rounded-xl px-3 py-2 text-sm transition hover:bg-black/10"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              setMobileOpen(false);
              onOpenLead();
            }}
            className="btn-primary mt-3 w-full justify-center"
          >
            Связаться
          </motion.button>
        </div>
      )}
    </header>
  );
}
