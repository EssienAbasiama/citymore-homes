"use client";

import { Reveal, RevealText } from "./Motion";

const steps = [
  {
    n: "01",
    title: "Conversation",
    body: "We start by understanding how you live — the light, the neighbourhood, the rhythm of your days.",
  },
  {
    n: "02",
    title: "Curation",
    body: "You receive a short, considered shortlist. No noise, no endless scrolling — only homes that fit.",
  },
  {
    n: "03",
    title: "Viewing",
    body: "Private, unhurried viewings arranged around your schedule, with honest counsel at every step.",
  },
  {
    n: "04",
    title: "Completion",
    body: "We manage negotiation, paperwork, and handover — then stay on call long after move-in.",
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
