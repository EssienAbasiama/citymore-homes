"use client";

import { Building2, Hammer, TrendingUp, Handshake, Users } from "lucide-react";
import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import { Reveal } from "@/components/Motion";
import CTA from "@/components/CTA";

const services = [
  {
    icon: Building2,
    title: "Property development",
    body: "We acquire land and properties and develop them into finished homes — managing design, build, and delivery end to end, to a standard we'd happily live in ourselves.",
    points: ["Site acquisition", "Design & planning", "Build management", "Finished delivery"],
  },
  {
    icon: Hammer,
    title: "Property flips",
    body: "We buy undervalued and tired properties, transform them with a sharp eye for value, and bring them back to market as homes people genuinely want to live in.",
    points: ["Sourcing & due diligence", "Renovation", "Styling & staging", "Sale & value realised"],
  },
  {
    icon: TrendingUp,
    title: "Invest with us",
    body: "Build with us. We invite investors to co-fund selected projects and share in the returns — backed by clear terms, careful underwriting, and honest reporting throughout.",
    points: ["Project co-funding", "Transparent terms", "Risk modelling", "Profit share"],
  },
  {
    icon: Handshake,
    title: "Development advisory",
    body: "Own a property with potential? We help owners plan, finance, and manage their own development — from first feasibility study through to handover.",
    points: ["Feasibility study", "Design & planning", "Project management", "Handover"],
  },
  {
    icon: Users,
    title: "Joint venture",
    body: "Partner with us on a shared development. You bring the land or the capital, we bring the expertise and delivery — and we build it together, with the risk and the returns shared on clear, agreed terms.",
    points: ["Land or capital partnership", "Shared risk & reward", "Clear agreed terms", "Joint delivery"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="What we do"
        title="Services"
        subtitle="Five ways we create value in property — from acquiring and transforming homes to building alongside the investors and owners who back us."
      />

      <section className="bg-bone py-20 md:py-28">
        <div className="container-site grid gap-8 md:grid-cols-2">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal
                key={s.title}
                delay={(i % 2) * 0.1}
                className="group rounded-3xl border border-ink/10 bg-bone-light p-8 transition-all duration-500 ease-smooth hover:-translate-y-1 hover:border-ink/30 md:p-10"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ink text-bone transition-transform duration-500 group-hover:scale-110">
                  <Icon size={24} />
                </span>
                <h2 className="mt-7 font-display text-3xl">{s.title}</h2>
                <p className="mt-4 leading-relaxed text-ink/65">{s.body}</p>
                <ul className="mt-7 grid grid-cols-2 gap-x-4 gap-y-3">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm text-ink/70">
                      <span className="h-1.5 w-1.5 rounded-full bg-taupe-dark" />
                      {p}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </section>

      <CTA />
    </>
  );
}
