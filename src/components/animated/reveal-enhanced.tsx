"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

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
  distance = 50
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

  const getFinalPosition = () => {
    return { x: 0, y: 0, opacity: 1 };
  };

  return (
    <motion.div
      className={className}
      initial={getInitialPosition()}
      whileInView={getFinalPosition()}
      viewport={{ once: false, amount: 0.15, margin: "-50px" }}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: [0.25, 0.1, 0.25, 1] // Custom cubic-bezier for smooth feel
      }}
    >
      {children}
    </motion.div>
  );
}
