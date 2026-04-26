import Link from "next/link";
import { Reveal } from "@/components/animated/reveal";
import { SVGSprinkles } from "@/components/ui/svg-sprinkles";

export default function NotFound() {
  return (
    <section className="section min-h-screen flex items-center justify-center">
      <div className="container-main">
        <Reveal>
          <div className="glass relative overflow-hidden rounded-3xl p-8 sm:p-12 text-center">
            <SVGSprinkles />
            
            {/* 404 с разными цветами */}
            <div className="relative mb-8">
              <div className="flex items-center justify-center gap-2 text-8xl sm:text-9xl lg:text-[12rem] font-black leading-none">
                <span className="text-white drop-shadow-2xl">4</span>
                <span className="text-lime-300 drop-shadow-2xl animate-pulse">0</span>
                <span className="text-white drop-shadow-2xl">4</span>
              </div>
              
              {/* Декоративные элементы */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-lime-300/50 to-transparent"></div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-lime-300/50 to-transparent"></div>
            </div>

            <div className="max-w-2xl mx-auto">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                Страница не найдена
              </h1>
              
              <p className="text-base sm:text-lg text-gray-300 mb-8">
                Похоже, вы попали на несуществующую страницу. Возможно, ссылка устарела или была введена неправильно.
              </p>

              {/* Кнопки действий */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Link href="/" className="btn-primary w-full sm:w-auto justify-center">
                  🏠 На главную
                </Link>
                <Link href="/contact" className="btn-secondary w-full sm:w-auto justify-center">
                  📞 Связаться
                </Link>
              </div>

              {/* Полезные ссылки */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
                <Link href="/services" className="glass rounded-xl p-3 hover:bg-white/5 transition">
                  <div className="text-lime-300 mb-1">📋</div>
                  <div>Услуги</div>
                </Link>
                <Link href="/portfolio" className="glass rounded-xl p-3 hover:bg-white/5 transition">
                  <div className="text-lime-300 mb-1">💼</div>
                  <div>Портфолио</div>
                </Link>
                <Link href="/about" className="glass rounded-xl p-3 hover:bg-white/5 transition">
                  <div className="text-lime-300 mb-1">👨‍💻</div>
                  <div>Обо мне</div>
                </Link>
                <Link href="/your-case" className="glass rounded-xl p-3 hover:bg-white/5 transition">
                  <div className="text-lime-300 mb-1">🎯</div>
                  <div>Ваш кейс</div>
                </Link>
              </div>
            </div>

            {/* Декоративный код на фоне */}
            <div className="absolute top-4 left-4 text-xs text-white/20 font-mono hidden sm:block">
              if (page.exists) {'{'}
            </div>
            <div className="absolute top-8 left-8 text-xs text-white/20 font-mono hidden sm:block">
              &nbsp;&nbsp;render(content);
            </div>
            <div className="absolute top-12 left-4 text-xs text-white/20 font-mono hidden sm:block">
              {'}'} else {'{'}
            </div>
            <div className="absolute top-16 left-8 text-xs text-lime-300/30 font-mono hidden sm:block">
              &nbsp;&nbsp;return 404;
            </div>
            <div className="absolute top-20 left-4 text-xs text-white/20 font-mono hidden sm:block">
              {'}'}
            </div>

            <div className="absolute bottom-4 right-4 text-xs text-white/20 font-mono hidden sm:block">
              // Страница не найдена
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}