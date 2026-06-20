"use client";

import { RevealText, Reveal } from "./Motion";
import Roofline from "./Roofline";

export default function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <header className="bg-ink pb-16 pt-40 text-bone md:pb-24 md:pt-48">
      <div className="container-site">
        <Roofline color="#EBE6D4" className="mb-8 h-14 w-40" strokeWidth={2} once={false} />
        <p className="eyebrow text-taupe">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl font-display text-5xl leading-[1.02] md:text-7xl">
          <RevealText text={title} />
        </h1>
        {subtitle && (
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-bone/65">
              {subtitle}
            </p>
          </Reveal>
        )}
      </div>
    </header>
  );
}
