"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { properties, categories } from "@/data/properties";
import PropertyCard from "@/components/PropertyCard";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";

export default function PropertiesPage() {
  const [active, setActive] = useState("All");
  const filtered =
    active === "All"
      ? properties
      : properties.filter((p) => p.category === active);

  return (
    <>
      <PageHeader
        eyebrow="The portfolio"
        title="Properties"
        subtitle="A small, deliberately curated collection of homes across Lagos and Abuja. New listings added the moment they're ready — never before."
      />

      <section className="bg-bone py-16 md:py-24">
        <div className="container-site">
          {/* Filter */}
          <div className="mb-12 flex flex-wrap gap-2.5">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`relative rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-300 ${
                  active === c ? "text-bone" : "text-ink/60 hover:text-ink"
                }`}
              >
                {active === c && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full bg-ink"
                    transition={{ type: "spring", stiffness: 400, damping: 34 }}
                  />
                )}
                <span className="relative z-10">{c}</span>
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((p, i) => (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <PropertyCard property={p} index={i} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <p className="py-20 text-center text-ink/50">
              No homes in this category right now. Check back soon.
            </p>
          )}
        </div>
      </section>

      <CTA />
    </>
  );
}
