"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import Roofline from "./Roofline";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-bone">
      <div className="container-site py-20">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Roofline
              color="#EBE6D4"
              className="mb-6 h-16 w-44"
              strokeWidth={2.4}
            />
            <Image
              src="/citymore-logo-light.png"
              alt="CITYMORE HOMES LIMITED"
              width={200}
              height={140}
              className="h-14 w-auto"
            />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-taupe">
              A real estate company built on trust, taste, and a deep respect
              for the places people call home.
            </p>
          </div>

          <FooterCol
            title="Explore"
            items={[
              ["Home", "/"],
              ["Properties", "/properties"],
              ["Services", "/services"],
              ["About", "/about"],
            ]}
          />
          <FooterCol
            title="Services"
            items={[
              ["Buy a home", "/services"],
              ["Sell a home", "/services"],
              ["Property management", "/services"],
              ["Investment advisory", "/services"],
            ]}
          />

          <div>
            <h4 className="eyebrow text-taupe">Get in touch</h4>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a
                  href="mailto:hello@citymorehomes.com"
                  className="link-wipe inline-flex items-center gap-2 hover:text-bone"
                >
                  <Mail size={15} /> hello@citymorehomes.com
                </a>
              </li>
              <li className="inline-flex items-center gap-2 text-taupe">
                <Phone size={15} /> +234 903 755 5786
              </li>
              <li className="inline-flex items-start gap-2 text-taupe">
                <MapPin size={15} className="mt-0.5" /> Victoria Island, Lagos,
                Nigeria
              </li>
            </ul>
            <Link
              href="/contact"
              className="link-wipe mt-7 inline-flex items-center gap-1 text-sm font-medium text-bone"
            >
              Start a conversation <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-bone/15 pt-8 text-xs text-taupe sm:flex-row sm:items-center">
          <p>© {year} CITYMORE HOMES LIMITED. All rights reserved.</p>
          <p className="font-sans uppercase tracking-eyebrow">
            Refined living, realised
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }) {
  return (
    <div>
      <h4 className="eyebrow text-taupe">{title}</h4>
      <ul className="mt-5 space-y-3 text-sm">
        {items.map(([label, href]) => (
          <li key={label}>
            <Link
              href={href}
              className="link-wipe text-bone/80 hover:text-bone"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
