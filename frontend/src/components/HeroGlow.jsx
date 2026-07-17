import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const rand = (min, max) => Math.random() * (max - min) + min;

// A soft ambient glow that drifts to random positions with no fixed path.
export const HeroGlow = () => {
  const [pos, setPos] = useState({ left: 45, top: 15, scale: 1 });

  useEffect(() => {
    const move = () =>
      setPos({
        left: rand(-8, 72),
        top: rand(-6, 58),
        scale: rand(0.9, 1.15),
      });
    move(); // kick off immediately
    const id = setInterval(move, 8000);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      aria-hidden="true"
      data-testid="hero-glow"
      className="absolute h-[26rem] w-[40rem] rounded-[50%] bg-brand/40 dark:bg-brand/20 blur-3xl pointer-events-none"
      animate={{
        left: `${pos.left}%`,
        top: `${pos.top}%`,
        scale: pos.scale,
        opacity: [0.7, 0.95, 0.7],
      }}
      transition={{
        left: { duration: 8, ease: "easeInOut" },
        top: { duration: 8, ease: "easeInOut" },
        scale: { duration: 8, ease: "easeInOut" },
        opacity: { duration: 8, ease: "easeInOut", repeat: Infinity },
      }}
    />
  );
};
