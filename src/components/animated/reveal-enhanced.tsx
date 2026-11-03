"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { REVEAL_TRANSITION, REVEAL_VIEWPORT } from "./animation-config";

type RevealEnhancedProps = {
  children: ReactNode;
  delay?: number;
  direction?: "left" | "right" | "up" | "down";
  className?: string;
  distance?: number;
};

export function RevealEnhanced({
  children,
  delay = 0,
  direction = "up",
  className,
  distance = 50,
}: RevealEnhancedProps) {
  const getInitialPosition = () => {
    switch (direction) {
      case "left":
        return { x: -distance, opacity: 0 };
      case "right":
        return { x: distance, opacity: 0 };
      case "down":
        return { y: distance, opacity: 0 };
      case "up":
      default:
        return { y: -distance, opacity: 0 };
    }
  };

  return (
    <motion.div
      className={className}
      initial={getInitialPosition()}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={REVEAL_VIEWPORT}
      transition={{ ...REVEAL_TRANSITION, delay }}
    >
      {children}
    </motion.div>
  );
}
