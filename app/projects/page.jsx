"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { projects, projectStatuses } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";

export default function ProjectsPage() {
  const [active, setActive] = useState("All");
  const topLevelProjects = projects.filter((project) => !project.parentProject);

  const filtered =
    active === "All"
      ? topLevelProjects
      : topLevelProjects.filter(
          (project) => project.status === active || project.slug === "overall",
        );

  const highlightProject =
    filtered.find((project) => project.slug === "overall") ||
    filtered[0] ||
    null;

  const secondaryProjects =
    active === "Ongoing" || active === "Upcoming"
      ? projects.filter(
          (project) =>
            project.parentProject === "overall" && project.status === active,
        )
      : (highlightProject
          ? filtered.filter((project) => project.slug !== highlightProject.slug)
          : filtered
        ).filter(Boolean);

  return (
    <>
      <PageHeader
        eyebrow="Our work"
        title="Projects"
        subtitle="A look at the properties we've acquired, transformed, and delivered — and the ones we're building right now. Tap any project for the full story."
      />

      <section className="bg-bone py-16 md:py-24">
        <div className="container-site">
          <div className="mb-12 flex flex-wrap gap-2.5">
            {projectStatuses.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`relative rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-300 ${
                  active === c ? "text-bone" : "text-ink/60 hover:text-ink"
                }`}
              >
                {active === c && (
                  <motion.span
                    layoutId="project-filter-pill"
                    className="absolute inset-0 rounded-full bg-ink"
                    transition={{ type: "spring", stiffness: 400, damping: 34 }}
                  />
                )}
                <span className="relative z-10">{c}</span>
              </button>
            ))}
          </div>

          {highlightProject && (
            <motion.div
              layout
              className="mb-12 overflow-hidden rounded-[2rem] border border-ink/10 bg-bone-light"
            >
              <div className="grid gap-6 p-4 md:p-6 lg:grid-cols-[1.5fr_1fr]">
                <Link
                  href={`/projects/${highlightProject.slug}`}
                  className="group relative block overflow-hidden rounded-[1.5rem]"
                >
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <img
                      src={highlightProject.cover}
                      alt={highlightProject.name}
                      className="h-full w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/15 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6 text-bone md:p-8">
                      <span className="inline-flex rounded-full border border-bone/40 bg-ink/30 px-3 py-1 text-[10px] uppercase tracking-eyebrow">
                        {highlightProject.status}
                      </span>
                      <h3 className="mt-4 font-display text-3xl leading-tight md:text-5xl">
                        {highlightProject.name}
                      </h3>
                      <p className="mt-3 max-w-lg text-sm text-bone/80 md:text-base">
                        {highlightProject.tagline}
                      </p>
                    </div>
                  </div>
                </Link>

                <div className="flex flex-col justify-between rounded-[1.5rem] bg-bone p-6 md:p-8">
                  <div>
                    <p className="eyebrow text-taupe-dark">Featured</p>
                    <h4 className="mt-3 font-display text-2xl leading-tight md:text-3xl">
                      {highlightProject.name}
                    </h4>
                    <p className="mt-4 text-base leading-relaxed text-ink/70">
                      {highlightProject.summary}
                    </p>
                  </div>

                  <div className="mt-8 space-y-4">
                    {highlightProject.stats?.slice(0, 3).map((stat) => (
                      <div
                        key={stat.label}
                        className="flex items-center justify-between border-b border-ink/10 pb-2.5"
                      >
                        <span className="text-xs uppercase tracking-eyebrow text-ink/50">
                          {stat.label}
                        </span>
                        <span className="font-medium text-ink">
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/projects/${highlightProject.slug}`}
                    className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-ink transition-opacity hover:opacity-80"
                  >
                    View project <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}

          {secondaryProjects.length > 0 && (
            <div className="mb-8">
              <p className="eyebrow text-taupe-dark">Other buildings</p>
              <h3 className="mt-2 font-display text-3xl leading-tight md:text-4xl">
                Explore the remaining blocks
              </h3>
            </div>
          )}

          <motion.div
            layout
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {secondaryProjects.map((p, i) => (
                <motion.div
                  key={p.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ProjectCard project={p} index={i} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <p className="py-20 text-center text-ink/50">
              No projects in this category right now. Check back soon.
            </p>
          )}
        </div>
      </section>

      <CTA />
    </>
  );
}
