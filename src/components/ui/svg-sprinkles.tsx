import { Sparkles, Code2, Bot, Zap } from "lucide-react";

export function SVGSprinkles() {
  return (
    <>
      <div className="pointer-events-none absolute -left-3 top-5 hidden text-lime-300/70 md:block float-soft">
        <Sparkles className="h-5 w-5" />
      </div>
      <div className="pointer-events-none absolute right-6 top-7 hidden text-white/40 md:block float-soft-delayed">
        <Code2 className="h-5 w-5" />
      </div>
      <div className="pointer-events-none absolute -right-3 top-1/2 hidden -translate-y-1/2 text-lime-200/70 md:block float-soft">
        <Bot className="h-5 w-5" />
      </div>
      <div className="pointer-events-none absolute left-6 top-1/2 hidden -translate-y-1/2 text-white/40 md:block float-soft-delayed">
        <Zap className="h-5 w-5" />
      </div>
    </>
  );
}
