"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { Reveal, RevealText } from "./Motion";

export default function FeaturedProjects() {
  // The Triad is the live development — it leads, then the rest by name.
  const featured = [...projects]
    .filter((project) => !project.parentProject)
    .sort((a, b) => {
      if (a.slug === "the-triad") return -1;
      if (b.slug === "the-triad") return 1;
      return (
        Number(b.featured) - Number(a.featured) || a.name.localeCompare(b.name)
      );
    })
    .slice(0, 4);

  return (
    <section className="bg-bone py-24 md:py-32">
      <div className="container-site">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal className="eyebrow text-taupe-dark">
              Featured projects
            </Reveal>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-6xl">
              <RevealText text="Homes we've" />
              <br />
              <RevealText text="transformed." delay={0.15} />
            </h2>
          </div>
          <Reveal delay={0.2}>
            <Link
              href="/projects"
              className="link-wipe inline-flex items-center gap-1.5 text-sm font-medium"
            >
              View all projects <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>

        {/* Size the columns to however many projects there are, so the row
            always spans the full width instead of leaving empty slots. */}
        <div
          className={`mt-14 grid gap-8 sm:grid-cols-2 ${
            featured.length >= 4
              ? "xl:grid-cols-4"
              : featured.length === 3
                ? "lg:grid-cols-3"
                : ""
          }`}
        >
          {featured.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
