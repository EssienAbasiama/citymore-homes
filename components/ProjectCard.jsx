"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, ArrowUpRight, Bed, Bath, Car, Home } from "lucide-react";

const statusStyles = {
  Completed: "bg-bone/95 text-ink",
  Ongoing: "bg-taupe-dark text-bone",
  Upcoming: "bg-ink/85 text-bone",
};

export default function ProjectCard({ project, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-bone-dark">
          <Image
            src={project.cover}
            alt={project.name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-[1.2s] ease-smooth group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-ink/0 opacity-80" />

          <span
            className={`absolute left-4 top-4 rounded-full px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-eyebrow ${
              statusStyles[project.status] || statusStyles.Completed
            }`}
          >
            {project.status}
          </span>

          <span className="absolute right-4 top-4 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-bone text-ink opacity-0 transition-all duration-500 ease-smooth group-hover:translate-y-0 group-hover:opacity-100">
            <ArrowUpRight size={18} />
          </span>

          <div className="absolute inset-x-0 bottom-0 p-5 text-bone">
            <p className="font-display text-2xl leading-snug">{project.name}</p>
            {(project.beds != null ||
              project.baths != null ||
              project.cars != null ||
              project.bq) && (
              <div className="mt-2 flex items-center gap-4 text-xs text-bone/90">
                {project.beds != null && (
                  <span className="inline-flex items-center gap-1.5">
                    <Bed size={15} /> {project.beds}
                  </span>
                )}
                {project.baths != null && (
                  <span className="inline-flex items-center gap-1.5">
                    <Bath size={15} /> {project.baths}
                  </span>
                )}
                {project.cars != null && (
                  <span className="inline-flex items-center gap-1.5">
                    <Car size={15} /> {project.cars}
                  </span>
                )}
                {project.bq && (
                  <span className="inline-flex items-center gap-1.5">
                    <Home size={15} /> BQ
                  </span>
                )}
              </div>
            )}
            <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-bone/85">
              <MapPin size={14} /> {project.location}
            </p>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-3 text-xs uppercase tracking-eyebrow text-taupe-dark">
          <span>{project.type}</span>
          <span className="h-1 w-1 rounded-full bg-taupe-dark/50" />
          <span>{project.year}</span>
        </div>
      </Link>
    </motion.article>
  );
}
