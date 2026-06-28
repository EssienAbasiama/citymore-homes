"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { properties } from "@/data/properties";
import PropertyCard from "./PropertyCard";
import { Reveal, RevealText } from "./Motion";

export default function FeaturedProperties() {
  const featured = properties.filter((p) => p.featured).slice(0, 3);
  return (
    <section className="bg-bone py-24 md:py-32">
      <div className="container-site">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal className="eyebrow text-taupe-dark">Featured projects</Reveal>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-6xl">
              <RevealText text="Homes we've" />
              <br />
              <RevealText text="transformed." delay={0.15} />
            </h2>
          </div>
          <Reveal delay={0.2}>
            <Link href="/properties" className="link-wipe inline-flex items-center gap-1.5 text-sm font-medium">
              View all properties <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <PropertyCard key={p.id} property={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
