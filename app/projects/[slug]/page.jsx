import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Bed,
  MapPin,
  Calendar,
  Clock,
  Tag,
  Sun,
  Lightbulb,
  Cctv,
  DoorOpen,
  Fingerprint,
  Speaker,
  Wifi,
  ChefHat,
  Car,
  Check,
  MessageCircle,
  Mail,
  BadgeCheck,
  Ruler,
} from "lucide-react";
import { projects, getProject } from "@/data/projects";
import { whatsappUrl } from "@/lib/whatsapp";
import { Reveal, RevealText } from "@/components/Motion";
import Roofline from "@/components/Roofline";
import GalleryGrid from "@/components/GalleryGrid";
import ProjectVideo from "@/components/ProjectVideo";
import ProjectCard from "@/components/ProjectCard";
import CTA from "@/components/CTA";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const project = getProject(params.slug);
  if (!project) return {};
  return {
    title: `${project.name} — CITYMORE HOMES`,
    // The summary carries line breaks for on-page layout; flatten them here.
    description: project.summary.replace(/\s+/g, " ").trim(),
  };
}

export default function ProjectDetailPage({ params }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const childProjects = (project.children || [])
    .map((slug) => getProject(slug))
    .filter(Boolean);

  // The Triad and its three homes get their own enquiry block mid-page.
  const isTriad =
    project.slug === "the-triad" || project.parentProject === "the-triad";
  const triadEnquiry = whatsappUrl(
    `Hello CITYMORE HOMES, I'd like to enquire about ${project.name}${
      project.parentProject === "the-triad" ? " in The Triad" : ""
    }.`,
  );

  const meta = [
    { icon: MapPin, label: "Location", value: project.location },
    { icon: Tag, label: "Type", value: project.type },
    // Plots carry a land size; everything else still shows the build year.
    project.landSize
      ? { icon: Ruler, label: "Land size", value: project.landSize }
      : { icon: Calendar, label: "Year", value: project.year },
    { icon: Clock, label: "Duration", value: project.duration },
  ];

  const galleryItems = (project.gallery || []).map((src) =>
    typeof src === "string" ? { src } : src,
  );
  const featureIcons = {
    Bed,
    Sun,
    Lightbulb,
    Cctv,
    DoorOpen,
    Fingerprint,
    Speaker,
    Wifi,
    ChefHat,
    Car,
  };
  // A project can have one `video` or several `videos`; normalise to a list.
  const videoList = project.videos?.length
    ? project.videos
    : project.video
      ? [project.video]
      : [];
  const playable = (v) =>
    !!v && (typeof v === "string" || v.src || v.hls || v.sources?.length > 0);
  const videos = videoList.filter(playable);
  const hasVideo = videos.length > 0;

  return (
    <>
      {/* Hero */}
      <header className="relative min-h-[68vh] overflow-hidden bg-ink text-bone">
        <Image
          src={project.cover}
          alt={project.name}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/50" />
        <div className="container-site relative flex min-h-[68vh] flex-col justify-end pb-16 pt-40">
          <Link
            href="/projects"
            className="link-wipe mb-8 inline-flex items-center gap-2 text-sm font-medium text-bone/80 hover:text-bone"
          >
            <ArrowLeft size={16} /> All projects
          </Link>
          <p className="eyebrow inline-flex items-center gap-1.5 text-taupe">
            {project.status === "Sold" && <BadgeCheck size={15} />}
            {project.status === "Available" && (
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            )}
            {project.status}
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[1.02] md:text-7xl">
            <RevealText text={project.name} />
          </h1>
          {project.tagline && (
            <Reveal delay={0.12}>
              <p className="mt-4 font-display text-xl text-bone/85 md:text-2xl">
                {project.tagline}
              </p>
            </Reveal>
          )}
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl whitespace-pre-line text-lg leading-relaxed text-bone/75">
              {project.summary}
            </p>
          </Reveal>
        </div>
      </header>

      {/* Meta strip */}
      <section className="border-b border-ink/10 bg-bone-light">
        <div className="container-site grid grid-cols-2 gap-8 py-10 md:grid-cols-4">
          {meta.map((m) => {
            const Icon = m.icon;
            return (
              <div key={m.label} className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink/15">
                  <Icon size={16} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-eyebrow text-taupe-dark">
                    {m.label}
                  </p>
                  <p className="mt-1 text-ink/85">{m.value}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Overview */}
      <section className="bg-bone py-20 md:py-28">
        <div className="container-site">
          <div className="max-w-3xl">
            <Reveal className="eyebrow text-taupe-dark">The project</Reveal>
            <h2 className="mt-3 font-display text-3xl leading-tight md:text-4xl">
              <RevealText text="What we set out to do." />
            </h2>
            <Reveal delay={0.2}>
              <div className="mt-5 space-y-5 text-lg leading-relaxed text-ink/70">
                {project.overview.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Scope of work — hidden for now
          <Reveal delay={0.15}>
            <div className="rounded-3xl border border-ink/10 bg-bone-light p-8 md:p-10">
              <h3 className="font-display text-xl">Scope of work</h3>
              <ul className="mt-6 space-y-4">
                {project.scope.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-ink/75">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-taupe-dark" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          */}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-ink py-16 text-bone md:py-20">
        <div className="container-site">
          <div className="grid grid-cols-2 gap-10 text-center md:grid-cols-4">
            {project.stats.map((s) => (
              <Reveal key={s.label}>
                <p className="font-display text-3xl md:text-4xl">{s.value}</p>
                <p className="mt-3 text-xs uppercase tracking-eyebrow text-taupe">
                  {s.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      {galleryItems.length > 0 && (
        <section className="bg-bone py-20 md:py-28">
          <div className="container-site">
            <Reveal className="eyebrow text-taupe-dark">Gallery</Reveal>
            <h2 className="mt-4 mb-10 font-display text-3xl leading-tight md:text-5xl">
              <RevealText text="The finished home." />
            </h2>
            <GalleryGrid items={galleryItems} variant="photos" />
          </div>
        </section>
      )}

      {/* Video walkthrough */}
      {hasVideo && (
        <section className="bg-bone-light py-20 md:py-28">
          <div className="container-site">
            <div className="mb-10 max-w-2xl">
              <Reveal className="eyebrow text-taupe-dark">Walkthrough</Reveal>
              <h2 className="mt-4 font-display text-3xl leading-tight md:text-5xl">
                <RevealText text="See it in motion." />
              </h2>
            </div>
            <div className="flex flex-col gap-10">
              {videos.map((vid, i) => (
                <ProjectVideo
                  key={i}
                  video={vid}
                  title={`${project.name} walkthrough ${videos.length > 1 ? i + 1 : ""}`.trim()}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Plans / Drawings */}
      {project.plans?.length > 0 && (
        <section className="bg-bone py-20 md:py-28">
          <div className="container-site">
            <div className="mb-10 max-w-2xl">
              <Reveal className="eyebrow text-taupe-dark">Drawings</Reveal>
              <h2 className="mt-4 font-display text-3xl leading-tight md:text-5xl">
                <RevealText text="Floor plans" />{" "}
                <RevealText text="& elevations." delay={0.12} />
              </h2>
              <Reveal delay={0.2}>
                <p className="mt-5 text-ink/60">
                  Tap any drawing to view it full-size.
                </p>
              </Reveal>
            </div>
            <GalleryGrid items={project.plans} variant="plans" />
          </div>
        </section>
      )}

      {childProjects.length > 0 && (
        <section className="bg-bone py-20 md:py-28">
          <div className="container-site">
            <div className="mb-10 max-w-2xl">
              <Reveal className="eyebrow text-taupe-dark">
                Inside The Triad
              </Reveal>
              <h2 className="mt-4 font-display text-3xl leading-tight md:text-5xl">
                <RevealText text="Three distinct buildings." />
              </h2>
              <Reveal delay={0.2}>
                <p className="mt-5 text-ink/60">
                  Explore each building for its own description, gallery, and
                  specifications.
                </p>
              </Reveal>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              {childProjects.map((child, i) => (
                <ProjectCard key={child.slug} project={child} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Triad enquiry */}
      {isTriad && (
        <section className="bg-ink py-20 text-bone md:py-24">
          <div className="container-site max-w-3xl text-center">
            <Reveal className="eyebrow text-taupe">Enquiries</Reveal>
            <h2 className="mt-5 font-display text-3xl leading-tight md:text-5xl">
              <RevealText text="Your place in The Triad awaits." />
            </h2>
            <Reveal delay={0.2}>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-bone/70">
                Get in touch for enquiries — and to make an offer.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={triadEnquiry}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-light"
                >
                  <MessageCircle size={17} /> Chat on WhatsApp
                </a>
                <Link
                  href="/contact"
                  className="btn border border-bone/35 text-bone hover:border-bone hover:bg-bone hover:text-ink"
                >
                  <Mail size={17} /> Start a conversation
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Features & specification */}
      {project.features?.length > 0 && (
        <section className="bg-bone-light py-20 md:py-28">
          <div className="container-site">
            <div className="mb-12 max-w-2xl">
              <Reveal className="eyebrow text-taupe-dark">Specification</Reveal>
              <h2 className="mt-4 font-display text-3xl leading-tight md:text-5xl">
                <RevealText text="Features" />{" "}
                <RevealText text="& finishes." delay={0.12} />
              </h2>
            </div>

            <div className="grid gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
              {project.features.map((f, i) => {
                const Icon = featureIcons[f.icon] || Check;
                return (
                  <Reveal
                    key={f.title}
                    delay={(i % 3) * 0.07}
                    className="flex flex-col bg-bone p-8"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink text-bone">
                      <Icon size={20} />
                    </span>
                    <h3 className="mt-6 font-display text-xl leading-snug">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink/60">
                      {f.body}
                    </p>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Result */}
      {project.result && (
        <section className="bg-bone-light py-20 md:py-28">
          <div className="container-site max-w-3xl text-center">
            <Reveal className="flex justify-center">
              <Roofline
                color="#0A0A0A"
                className="mb-8 h-14 w-40"
                strokeWidth={2}
              />
            </Reveal>
            <Reveal className="eyebrow text-taupe-dark">The outcome</Reveal>
            <p className="mt-6 whitespace-pre-line font-display text-2xl leading-snug md:text-4xl">
              {project.result}
            </p>
          </div>
        </section>
      )}

      <CTA />
    </>
  );
}
