"use client";

import type { CSSProperties } from "react";

const codeLines = [
  "const app = createProduct({ fast: true, clean: true });",
  "await integrate({ crm: true, telegram: true, payments: true });",
  "if (userNeedsAutomation) optimizeWorkflow();",
  "deploy({ stack: 'nextjs', mode: 'production' });",
  "function convertVisitorsToLeads() { return ux + speed; }",
  "bot.on('message', async (ctx) => handleClientFlow(ctx));",
  "const result = performance * design * strategy;",
  "api.post('/lead', validate(formData));"
];

export function BackgroundCode() {
  const totalLines = 26;

  return (
    <div className="background-stage" aria-hidden>
      <div className="background-gradient" />
      <div className="code-rain">
        {Array.from({ length: totalLines }).map((_, i) => {
          const line = codeLines[i % codeLines.length];

          return (
          <span
            key={`${line}-${i}`}
            className="code-line"
            style={
              {
                "--x": `${(i * 7 + 3) % 96}%`,
                "--delay": `${(i % 8) * -2.4}s`,
                "--duration": `${18 + (i % 6) * 4}s`
              } as CSSProperties
            }
          >
            {line}
          </span>
          );
        })}
      </div>
    </div>
  );
}
