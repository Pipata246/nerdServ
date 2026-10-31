import Link from "next/link";
import { navItems } from "@/data/site-data";
import { Send } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40">
      <div className="container-main grid gap-8 py-10 sm:grid-cols-2 md:grid-cols-4 md:py-12">
        <div>
          <p className="text-lg font-semibold">NerdServ</p>
          <p className="mt-2 text-sm text-gray-400">Разработка сайтов, ботов и автоматизации под ключ.</p>
        </div>

        <div>
          <p className="font-medium">Навигация</p>
          <div className="mt-3 space-y-2 text-sm text-gray-300">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="block hover:text-lime-300">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="font-medium">Контакты</p>
          <div className="mt-3 space-y-2 text-sm text-gray-300">
            <p>Telegram: @nerdServ</p>
            <p>WhatsApp/Max: +7 (964) 986-67-41</p>
          </div>
        </div>

        <div>
          <p className="font-medium">Соцсети</p>
          <div className="mt-3 flex gap-3 text-gray-300">
            <Link
              href="https://t.me/nerdServ"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-lime-300"
              aria-label="Telegram"
              title="Telegram"
            >
              <Send className="h-5 w-5" />
            </Link>
            <Link
              href="https://t.me/nerdServv"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-lime-300"
              aria-label="Telegram-канал"
              title="Telegram-канал"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </Link>
            <Link
              href="https://www.instagram.com/nerd1dk/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-lime-300"
              aria-label="Instagram"
              title="Instagram"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4">
        <div className="container-main flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} NerdServ. Все права защищены.</p>
          <div className="flex gap-4 text-xs text-gray-500">
            <Link href="/privacy" className="transition hover:text-lime-300">Политика конфиденциальности</Link>
            <Link href="/offer" className="transition hover:text-lime-300">Публичная оферта</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
