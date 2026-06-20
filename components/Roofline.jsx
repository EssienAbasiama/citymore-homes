"use client";

import { motion } from "framer-motion";

/**
 * Roofline — the CITYMORE signature.
 * Recreates the twin-peak roofline from the logo as a "blueprint" line
 * that draws itself on when scrolled into view.
 */
export default function Roofline({
  color = "#0A0A0A",
  className = "",
  strokeWidth = 2,
  once = true,
}) {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          delay: i * 0.18,
          duration: 1.4,
          ease: [0.22, 1, 0.36, 1],
        },
        opacity: { delay: i * 0.18, duration: 0.2 },
      },
    }),
  };

  return (
    <motion.svg
      viewBox="0 0 420 130"
      fill="none"
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.6 }}
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Left roof */}
      <motion.path d="M8 116 L150 20" variants={draw} custom={0} />
      <motion.path d="M150 20 L262 96" variants={draw} custom={1} />
      {/* Chimney on the left slope */}
      <motion.path d="M70 75 L70 44 L92 44 L92 60" variants={draw} custom={0.6} />
      {/* Right roof — overlapping second peak */}
      <motion.path d="M205 92 L300 26" variants={draw} custom={1.2} />
      <motion.path d="M300 26 L412 112" variants={draw} custom={1.6} />
    </motion.svg>
  );
}
