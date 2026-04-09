import { Metadata } from "next";
import { PortfolioGrid } from "@/components/sections/portfolio-grid";

export const metadata: Metadata = {
  title: "Портфолио | NerdServ",
  description: "Примеры реализованных сайтов, Telegram-ботов и интеграций."
};

export default function PortfolioPage() {
  return (
    <section className="section">
      <div className="container-main">
        <h1 className="title">Портфолио</h1>
        <p className="subtitle">Выберите категорию и посмотрите похожие по типу проекты.</p>
        <div className="mt-8">
          <PortfolioGrid />
        </div>
      </div>
    </section>
  );
}
