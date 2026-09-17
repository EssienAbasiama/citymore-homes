"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDown } from "lucide-react";
import Roofline from "./Roofline";
import { RevealText, Counter } from "./Motion";
import { whatsappUrl, VIEWING_MESSAGE } from "@/lib/whatsapp";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.35, 0.7]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden bg-ink"
    >
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
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-ink"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-ink/40" />

      {/* Content */}
      <div className="container-site relative flex min-h-[100svh] flex-col justify-end pb-20 pt-36 text-bone">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-8"
        >
          <Roofline
            color="#EBE6D4"
            className="h-20 w-52"
            strokeWidth={2.2}
            once={false}
          />
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
          We acquire and develop properties with a focus on exceptional design,
          timeless quality and lasting value — while partnering with investors
          who share our taste and respect for places people call home.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link href="/projects" className="btn-light">
            View projects
          </Link>
          <a
            href={whatsappUrl(VIEWING_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline border-bone/40 text-bone hover:bg-bone hover:text-ink"
          >
            Book a viewing
          </a>
        </motion.div>

        {/* Stat row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="mt-12 grid max-w-2xl grid-cols-3 gap-x-4 gap-y-6 border-t border-bone/15 pt-6 sm:mt-16 sm:gap-x-6 sm:pt-8"
        >
          <Stat
            value={<Counter to={5} suffix="+" />}
            label="Years developing"
          />
          <Stat
            value={<Counter to={6} suffix="" />}
            label="Homes transformed"
          />
          <Stat
            value={<Counter to={1} suffix="" />}
            label="City of operation"
          />
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
    <div className="min-w-0">
      <p className="font-display text-2xl sm:text-3xl md:text-4xl">{value}</p>
      {/* Tighter type + tracking on mobile: the full eyebrow tracking makes
          words like "TRANSFORMED" wider than a third of a phone screen. */}
      <p className="mt-1 break-words text-[10px] uppercase leading-snug tracking-[0.08em] text-bone/55 sm:text-xs sm:tracking-eyebrow">
        {label}
      </p>
    </div>
  );
}
