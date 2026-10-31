"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "Frontend (React / Next.js)", value: 92 },
  { name: "Backend (Node.js / API)", value: 86 },
  { name: "Telegram Bots", value: 90 },
  { name: "Automation & Integrations", value: 84 }
];

export function SkillsBars() {
  return (
    <div className="mt-5 space-y-4">
      {skills.map((skill, i) => (
        <div key={skill.name}>
          <div className="mb-2 flex justify-between text-sm">
            <span>{skill.name}</span>
            <span className="text-gray-400">{skill.value}%</span>
          </div>
          <div className="h-2 rounded-full bg-white/10">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.value}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.08 }}
              className="h-2 rounded-full bg-lime-300"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
