"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const [isClient, setIsClient] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 50,
    restDelta: 0.001
  });

  useEffect(() => {
    setIsClient(true);
    // Add small delay to prevent jump on initial load
    const timer = setTimeout(() => setIsReady(true), 100);
    return () => clearTimeout(timer);
  }, []);

  if (!isClient || !isReady) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-[999998] origin-left"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      style={{
        scaleX,
        background: "linear-gradient(90deg, rgb(203, 232, 87) 0%, rgb(168, 224, 99) 100%)",
        boxShadow: "0 0 10px rgb(203, 232, 87), 0 0 20px rgb(203, 232, 87)",
      }}
    />
  );
}
