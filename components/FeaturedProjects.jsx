"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { Reveal, RevealText } from "./Motion";

export default function FeaturedProjects() {
  const featured = [...projects]
    .filter((project) => !project.parentProject)
    .sort(
      (a, b) =>
        Number(b.featured) - Number(a.featured) || a.name.localeCompare(b.name),
    )
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

        <div className="mt-14 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {featured.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
