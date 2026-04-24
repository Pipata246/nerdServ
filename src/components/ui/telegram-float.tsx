import Link from "next/link";
import { Send } from "lucide-react";

export function TelegramFloat() {
  return (
    <Link
      href="https://t.me/nerdServ"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-40 inline-flex items-center gap-2 rounded-full border border-lime-300/30 bg-black/80 px-3 py-3 text-sm text-lime-300 shadow-lg backdrop-blur transition hover:scale-105 sm:bottom-6 sm:right-6 sm:px-4"
    >
      <Send className="h-4 w-4" />
      <span className="hidden sm:inline">Написать в Telegram</span>
    </Link>
  );
}
