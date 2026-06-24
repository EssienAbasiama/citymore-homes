"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  // { href: "/properties", label: "Properties" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -90 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-smooth ${
          scrolled
            ? "bg-bone/85 backdrop-blur-md border-b border-ink/10 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <nav className="container-site flex items-center justify-between">
          <Link href="/" className="relative z-10 flex items-center" aria-label="CITYMORE HOMES home">
            <Image
              src="/citymore-logo.png"
              alt="CITYMORE HOMES LIMITED"
              width={150}
              height={104}
              priority
              className={`w-auto transition-all duration-500 ${
                scrolled ? "h-9" : "h-12"
              }`}
            />
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-9 lg:flex">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`link-wipe text-sm font-medium transition-colors ${
                    pathname === l.href ? "text-ink" : "text-ink/60 hover:text-ink"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Link href="/contact" className="btn-dark text-sm">
              Book a viewing
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-ink/20 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 flex flex-col bg-ink text-bone lg:hidden"
          >
            <div className="flex flex-1 flex-col justify-center gap-2 px-8">
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={l.href}
                    className="block font-display text-5xl leading-tight text-bone/90 hover:text-bone"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="px-8 pb-12">
              <Link href="/contact" className="btn-light w-full">
                Book a viewing
              </Link>
              <p className="mt-6 text-sm text-taupe">hello@citymorehomes.com</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
