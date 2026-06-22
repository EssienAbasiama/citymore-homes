"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal, RevealText } from "./Motion";
import Roofline from "./Roofline";

const values = [
  {
    title: "Vision",
    body: "We see what a tired or overlooked property could become — and we have the team to make it real.",
  },
  {
    title: "Craft",
    body: "Every renovation is detailed to a standard we would happily live with ourselves.",
  },
  {
    title: "Partnership",
    body: "We build alongside investors and owners, sharing the risk, the reward, and the judgement.",
  },
];

export default function Editorial() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={ref} className="bg-ink py-24 text-bone md:py-32">
      <div className="container-site">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <motion.div style={{ y }} className="absolute inset-0 scale-110">
              <Image
                src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1400&q=80"
                alt="A light-filled living space"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </motion.div>
          </div>

          <div>
            <Roofline color="#EBE6D4" className="mb-8 h-14 w-40" strokeWidth={2} />
            <Reveal className="eyebrow text-taupe">Who we are</Reveal>
            <h2 className="mt-5 font-display text-4xl leading-[1.05] md:text-5xl">
              <RevealText text="A development studio," />
              <br />
              <RevealText text="not a sales floor." delay={0.15} />
            </h2>
            <Reveal delay={0.2}>
              <p className="mt-7 max-w-lg text-lg leading-relaxed text-bone/70">
                CITYMORE HOMES LIMITED was founded on a simple belief: a home is the most
                personal thing most people will ever buy, and it deserves to be built
                with care. We acquire properties with sharp market judgement and
                transform them with genuine attention to detail.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-8 sm:grid-cols-3">
              {values.map((v, i) => (
                <Reveal key={v.title} delay={0.1 * i}>
                  <h3 className="font-display text-xl">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-bone/60">{v.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
