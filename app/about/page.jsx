"use client";

import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import { Reveal, RevealText, Counter } from "@/components/Motion";
import Roofline from "@/components/Roofline";
import CTA from "@/components/CTA";

const team = [
  {
    name: "Olufemi Adebayo",
    role: "Founder & Principal",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Ngozi Okafor",
    role: "Head of Sales",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Chinedu Eze",
    role: "Property Management",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Amara Bello",
    role: "Investment Advisory",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
  },
];

const stats = [
  { to: 5, suffix: "+", label: "Years developing" },
  { to: 6, suffix: "", label: "Homes transformed" },
  { to: 2, suffix: "", label: "Cities developing in" },
  { to: 98, suffix: "%", label: "Repeat partners" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our story"
        title="Built on trust, taste, and care."
      />

      {/* Story */}
      <section className="bg-bone py-20 md:py-28">
        <div className="container-site grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
                alt="Interior of a CITYMORE home"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div className="flex flex-col justify-center">
            <h2 className="font-display text-3xl leading-tight md:text-5xl">
              <RevealText text="We started small," />
              <br />
              <RevealText text="and stayed that way." delay={0.15} />
            </h2>
            <Reveal delay={0.2}>
              <div className="mt-7 space-y-5 text-lg leading-relaxed text-ink/70">
                <p>
                  CITYMORE HOMES LIMITED began in 2021 with a single property, a
                  small team, and a conviction that real estate had lost its
                  sense of care. We chose to grow slowly — to know every home we
                  develop down to the detail, and every partner by name.
                </p>
                <p>
                  Five years on, that hasn't changed. We still take on fewer
                  projects than we could, because craft doesn't scale the way
                  listings do. The result is work people return to, and
                  recommend.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-ink py-20 text-bone md:py-24">
        <div className="container-site">
          <div className="flex justify-center">
            <Roofline
              color="#EBE6D4"
              className="mb-12 h-14 w-40"
              strokeWidth={2}
            />
          </div>
          <div className="grid grid-cols-2 gap-10 text-center md:grid-cols-4">
            {stats.map((s) => (
              <Reveal key={s.label}>
                <p className="font-display text-5xl md:text-6xl">
                  <Counter to={s.to} suffix={s.suffix} />
                </p>
                <p className="mt-3 text-xs uppercase tracking-eyebrow text-taupe">
                  {s.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      {/* <section className="bg-bone py-20 md:py-28">
        <div className="container-site">
          <Reveal className="eyebrow text-taupe-dark">The people</Reveal>
          <h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight md:text-6xl">
            <RevealText text="Small team," />{" "}
            <RevealText text="long memory." delay={0.12} />
          </h2>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={(i % 4) * 0.08} className="group">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-bone-dark">
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover grayscale transition-all duration-700 ease-smooth group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>
                <h3 className="mt-4 font-display text-xl">{m.name}</h3>
                <p className="text-sm text-ink/55">{m.role}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section> */}

      <CTA />
    </>
  );
}
