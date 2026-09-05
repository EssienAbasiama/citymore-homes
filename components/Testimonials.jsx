"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Quote } from "lucide-react";
import { Reveal } from "./Motion";

const testimonials = [
  {
    quote:
      "We walked into a finished home that felt considered in every corner. You could tell it was built by people who cared — not thrown up for a quick sale.",
    name: "Adaeze & Tunde O.",
    role: "Bought a CITYMORE home, Ogba",
  },
  {
    quote:
      "They built our home from the ground up and carried every stage — design, build, handover. We watched it rise from foundation to finish, and it landed on time.",
    name: "Margaret E.",
    role: "Homeowner, Lagos",
  },
  {
    quote:
      "I've co-funded two builds with CITYMORE. The numbers were honest, the site updates were regular, and the returns landed exactly where they said they would.",
    name: "Daniel A.",
    role: "Investor, Lagos",
  },
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);

  const t = testimonials[i];
  return (
    <section className="bg-ink py-24 text-bone md:py-32">
      <div className="container-site">
        <Reveal className="mx-auto max-w-4xl text-center">
          <Quote className="mx-auto mb-8 text-taupe" size={36} />
          <div className="min-h-[200px] md:min-h-[180px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="font-display text-2xl leading-snug md:text-4xl">
                  “{t.quote}”
                </p>
                <p className="mt-8 text-sm font-medium">{t.name}</p>
                <p className="text-xs uppercase tracking-eyebrow text-taupe">{t.role}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex items-center justify-center gap-2.5">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Show testimonial ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === idx ? "w-8 bg-bone" : "w-1.5 bg-bone/30"
                }`}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
