"use client";

import Link from "next/link";
import { Reveal, RevealText } from "./Motion";
import Roofline from "./Roofline";

export default function CTA() {
  return (
    <section className="bg-bone py-24 md:py-36">
      <div className="container-site text-center">
        <Reveal className="flex justify-center">
          <Roofline color="#0A0A0A" className="h-20 w-56" strokeWidth={2.2} />
        </Reveal>
        <h2 className="mt-8 font-display text-4xl leading-[1.02] md:text-7xl">
          <RevealText text="Let's build" />
          <br />
          <RevealText text="something that lasts." delay={0.15} />
        </h2>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-7 max-w-xl text-lg text-ink/60">
            Whether you're after a finished home, a project to invest in, or a partner
            to develop your own — let's start the conversation.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn-dark">
              Start a conversation
            </Link>
            <a
              href="mailto:hello@citymorehomes.com"
              className="link-wipe text-sm font-medium"
            >
              hello@citymorehomes.com
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
