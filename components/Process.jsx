"use client";

import { Reveal, RevealText } from "./Motion";

const steps = [
  {
    n: "01",
    title: "Acquisition",
    body: "We source undervalued or overlooked properties in the right locations, with a clear view of what each one can become.",
  },
  {
    n: "02",
    title: "Design",
    body: "Architects and designers reimagine the space — layout, light, and finish — into a home worth living in.",
  },
  {
    n: "03",
    title: "Transformation",
    body: "Our build team executes the renovation to a high standard, managed closely from strip-out to snagging.",
  },
  {
    n: "04",
    title: "Delivery",
    body: "We bring the finished home to market — or hand it back to its owner — then stay on call long after.",
  },
];

export default function Process() {
  return (
    <section className="bg-bone-light py-24 md:py-32">
      <div className="container-site">
        <div className="max-w-2xl">
          <Reveal className="eyebrow text-taupe-dark">How it works</Reveal>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-6xl">
            <RevealText text="Four steps," />{" "}
            <RevealText text="no shortcuts." delay={0.12} />
          </h2>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal
              key={s.n}
              delay={i * 0.08}
              className="group flex flex-col bg-bone-light p-8 transition-colors duration-500 hover:bg-ink hover:text-bone"
            >
              <span className="font-display text-5xl text-taupe transition-colors duration-500 group-hover:text-bone">
                {s.n}
              </span>
              <h3 className="mt-10 font-display text-2xl">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/60 transition-colors duration-500 group-hover:text-bone/70">
                {s.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
