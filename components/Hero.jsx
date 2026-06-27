"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import Roofline from "./Roofline";
import { RevealText, Counter } from "./Motion";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.35, 0.7]);

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden bg-ink">
      {/* Parallax image */}
      <motion.div style={{ y: imgY }} className="absolute inset-0 scale-110">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
          alt="A contemporary home at dusk"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <motion.div style={{ opacity: overlayOpacity }} className="absolute inset-0 bg-ink" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-ink/40" />

      {/* Content */}
      <div className="container-site relative flex min-h-[100svh] flex-col justify-end pb-20 pt-36 text-bone">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-8"
        >
          <Roofline color="#EBE6D4" className="h-20 w-52" strokeWidth={2.2} once={false} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="eyebrow mb-6 text-taupe"
        >
          CITYMORE HOMES LIMITED
        </motion.p>

        <h1 className="max-w-4xl font-display text-5xl leading-[0.98] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
          <RevealText text="Refined living," />
          <br />
          <RevealText text="built from the ground up." delay={0.25} />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-bone/75"
        >
          We acquire, design, and transform properties into exceptional homes —
          and partner with investors who want to build real value, with taste and
          a deep respect for the places people live.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link href="/properties" className="btn-light">
            View properties
          </Link>
          <Link href="/contact" className="btn-outline border-bone/40 text-bone hover:bg-bone hover:text-ink">
            Book a viewing
          </Link>
        </motion.div>

        {/* Stat row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-bone/15 pt-8"
        >
          <Stat value={<Counter to={7} suffix="+" />} label="Years developing" />
          <Stat value={<Counter to={6} suffix="" />} label="Homes transformed" />
          <Stat value={<Counter to={1} suffix="" />} label="City of operation" />
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 right-6 hidden items-center gap-2 text-xs uppercase tracking-eyebrow text-bone/60 md:flex"
      >
        Scroll
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div>
      <p className="font-display text-3xl md:text-4xl">{value}</p>
      <p className="mt-1 text-xs uppercase tracking-eyebrow text-bone/55">{label}</p>
    </div>
  );
}
