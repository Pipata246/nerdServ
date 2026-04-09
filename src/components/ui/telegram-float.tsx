import Link from "next/link";
import { Send } from "lucide-react";

export function TelegramFloat() {
  return (
    <Link
      href="https://t.me/NerdIdk"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full border border-lime-300/30 bg-black/80 px-4 py-3 text-sm text-lime-300 shadow-lg backdrop-blur transition hover:scale-105"
    >
      <Send className="h-4 w-4" />
      Написать в Telegram
    </Link>
  );
}
