"use client";

import { Home, KeyRound, Building2, LineChart } from "lucide-react";
import { motion } from "framer-motion";
import PageHeader from "@/components/PageHeader";
import { Reveal } from "@/components/Motion";
import CTA from "@/components/CTA";

const services = [
  {
    icon: Home,
    title: "Buying",
    body: "A guided, unhurried search. We learn how you live, then bring you a tight shortlist of homes that actually fit — with honest counsel on value, condition, and the neighbourhood.",
    points: ["Needs consultation", "Curated shortlist", "Private viewings", "Negotiation & close"],
  },
  {
    icon: KeyRound,
    title: "Selling",
    body: "Considered marketing that protects your privacy and your price. From styling and photography to qualified buyers only, we present your home the way it deserves.",
    points: ["Valuation & pricing", "Styling & photography", "Qualified buyers", "Discreet listing"],
  },
  {
    icon: Building2,
    title: "Property management",
    body: "Hands-off ownership for landlords who'd rather not think about it. We handle tenants, maintenance, and rent — and you get a clear report each month.",
    points: ["Tenant placement", "Maintenance", "Rent collection", "Monthly reporting"],
  },
  {
    icon: LineChart,
    title: "Investment advisory",
    body: "Clear-eyed guidance on where to put capital and why. We model returns, flag risk, and only recommend what we'd buy ourselves.",
    points: ["Market analysis", "Yield modelling", "Portfolio strategy", "Exit planning"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="What we do"
        title="Services"
        subtitle="Four ways we help — each built on the same idea: fewer clients, more attention, better outcomes."
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
