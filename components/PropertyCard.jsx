"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BedDouble, Bath, Maximize, ArrowUpRight } from "lucide-react";

export default function PropertyCard({ property, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group cursor-pointer"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-bone-dark">
        <Image
          src={property.image}
          alt={property.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-[1.2s] ease-smooth group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-ink/0 opacity-80" />

        <span className="absolute left-4 top-4 rounded-full bg-bone/95 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-eyebrow text-ink">
          {property.type}
        </span>

        <span className="absolute right-4 top-4 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-bone text-ink opacity-0 transition-all duration-500 ease-smooth group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight size={18} />
        </span>

        <div className="absolute inset-x-0 bottom-0 p-5 text-bone">
          <p className="font-display text-2xl">{property.price}</p>
          <div className="mt-3 flex items-center gap-5 text-xs text-bone/85">
            <span className="inline-flex items-center gap-1.5">
              <BedDouble size={15} /> {property.beds}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Bath size={15} /> {property.baths}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Maximize size={15} /> {property.area}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-xl leading-snug text-ink">{property.name}</h3>
          <span className="eyebrow shrink-0 text-taupe-dark">{property.category}</span>
        </div>
        <p className="mt-1 text-sm text-ink/55">{property.location}</p>
      </div>
    </motion.article>
  );
}
