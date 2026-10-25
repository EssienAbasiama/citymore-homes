"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import Roofline from "./Roofline";
import { whatsappUrl, ENQUIRY_MESSAGE } from "@/lib/whatsapp";

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
              A property development company that acquires, transforms, and
              builds exceptional homes — with taste, care, and a deep respect
              for the places people live.
            </p>
          </div>

          <FooterCol
            title="Explore"
            items={[
              ["Home", "/"],
              // ["Properties", "/properties"],
              ["Projects", "/projects"],
              ["Services", "/services"],
              ["About", "/about"],
            ]}
          />
          <FooterCol
            title="What we do"
            items={[
              ["Development", "/services"],
              ["Property flips", "/services"],
              ["Invest with us", "/services"],
              ["Development advisory", "/services"],
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
              <li>
                <a
                  href="tel:+2349037555786"
                  className="link-wipe inline-flex items-center gap-2 text-taupe hover:text-bone"
                >
                  <Phone size={15} /> +234 903 755 5786
                </a>
              </li>
              <li>
                <a
                  href={whatsappUrl(ENQUIRY_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-wipe inline-flex items-center gap-2 text-taupe hover:text-bone"
                >
                  <MessageCircle size={15} /> Chat on WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/citymorehomes"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="@citymorehomes on Instagram"
                  className="link-wipe inline-flex items-center gap-2 text-taupe hover:text-bone"
                >
                  <Instagram size={15} /> @citymorehomes
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/citymorehomes"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="@citymorehomes on X"
                  className="link-wipe inline-flex items-center gap-2 text-taupe hover:text-bone"
                >
                  <XLogo size={15} /> @citymorehomes
                </a>
              </li>
              <li className="inline-flex items-start gap-2 text-taupe">
                <MapPin size={15} className="mt-0.5" /> Ogba, Lagos, Nigeria
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

// lucide still ships the old bird mark, so the current X logo is inlined.
function XLogo({ size = 15 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
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
