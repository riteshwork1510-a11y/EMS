"use client";

import { motion } from "framer-motion";

export function AnimatedGridBackground() {
  return (
    <div className="fixed inset-0 z-[-50] pointer-events-none overflow-hidden bg-slate-50">
      <motion.div
        className="absolute inset-0"
        initial={{ backgroundPosition: "0px 0px" }}
        animate={{ backgroundPosition: "40px 40px" }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 3,
        }}
        style={{
          backgroundImage:
            "linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(circle at center, white, transparent 80%)",
          WebkitMaskImage: "radial-gradient(circle at center, white, transparent 80%)",
          opacity: 0.5,
        }}
      />
    </div>
  );
}
