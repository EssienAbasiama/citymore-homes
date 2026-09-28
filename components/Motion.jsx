"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* Scroll-reveal wrapper */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className = "",
  once = true,
  as = "div",
}) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.25 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}

/* Headline that reveals word-by-word */
export function RevealText({ text, className = "", delay = 0, onMount = false }) {
  const words = text.split(" ");
  // Above the fold there is nothing to scroll into view, so a
  // whileInView reveal can leave the words parked out of frame.
  const reveal = onMount
    ? { animate: { y: "0%" } }
    : { whileInView: { y: "0%" }, viewport: { once: true, amount: 0.4 } };
  return (
    <span className={className} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            {...reveal}
            transition={{
              duration: 0.9,
              delay: delay + i * 0.07,
              ease: [0.22, 1, 0.36, 1],
            }}
            aria-hidden="true"
          >
            {word}&nbsp;
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/* Counter that animates up when scrolled into view */
export function Counter({ to, suffix = "", duration = 1.8 }) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          const start = performance.now();
          const step = (now) => {
            const p = Math.min((now - start) / (duration * 1000), 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setValue(Math.round(eased * to));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [to, duration, started]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}
