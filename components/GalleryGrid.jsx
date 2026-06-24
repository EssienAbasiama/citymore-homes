"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";

/**
 * Sleek image grid with a fullscreen lightbox.
 * items   : [{ src, caption? }]
 * variant : "photos" (object-cover, editorial layout)
 *         | "plans"  (object-contain on white cards, captioned)
 */
export default function GalleryGrid({ items = [], variant = "photos" }) {
  const [index, setIndex] = useState(null); // null = closed
  const isOpen = index !== null;

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + items.length) % items.length)),
    [items.length],
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close, prev, next]);

  if (!items.length) return null;

  return (
    <>
      {variant === "plans" ? (
        <div className="grid gap-6 sm:grid-cols-2">
          {items.map((item, i) => (
            <motion.button
              key={item.src}
              type="button"
              onClick={() => setIndex(i)}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group block overflow-hidden rounded-2xl border border-ink/10 bg-white text-left transition-colors duration-500 hover:border-ink/30"
            >
              <div className="relative aspect-[4/3] bg-white">
                <Image
                  src={item.src}
                  alt={item.caption || "Project plan"}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain p-4 transition-transform duration-700 ease-smooth group-hover:scale-[1.03]"
                />
                <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-ink/85 text-bone opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Expand size={15} />
                </span>
              </div>
              {item.caption && (
                <div className="flex items-center justify-between border-t border-ink/10 px-5 py-3.5">
                  <span className="text-sm font-medium text-ink">{item.caption}</span>
                  <span className="eyebrow text-taupe-dark">Plan</span>
                </div>
              )}
            </motion.button>
          ))}
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2">
          {items.map((item, i) => (
            <motion.button
              key={item.src}
              type="button"
              onClick={() => setIndex(i)}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative block overflow-hidden rounded-2xl bg-bone-dark ${
                i % 3 === 0 ? "aspect-[16/10] sm:col-span-2" : "aspect-[4/3]"
              }`}
            >
              <Image
                src={item.src}
                alt={item.caption || "Project image"}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-[1.2s] ease-smooth group-hover:scale-105"
              />
              <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-ink/70 text-bone opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Expand size={15} />
              </span>
            </motion.button>
          ))}
        </div>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={close}
            className="fixed inset-0 z-[60] flex flex-col bg-ink/95 backdrop-blur-sm"
          >
            {/* Top bar */}
            <div className="flex items-center justify-between px-6 py-5 text-bone">
              <span className="text-sm text-bone/70">
                {index + 1} / {items.length}
                {items[index].caption ? ` — ${items[index].caption}` : ""}
              </span>
              <button
                onClick={close}
                aria-label="Close"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-bone/25 text-bone transition-colors hover:bg-bone hover:text-ink"
              >
                <X size={20} />
              </button>
            </div>

            {/* Image */}
            <div
              className="relative flex flex-1 items-center justify-center px-4 pb-6"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative h-full w-full ${
                    variant === "plans" ? "rounded-xl bg-white" : ""
                  }`}
                >
                  <Image
                    src={items[index].src}
                    alt={items[index].caption || "Project media"}
                    fill
                    sizes="100vw"
                    className={variant === "plans" ? "object-contain p-4" : "object-contain"}
                  />
                </motion.div>
              </AnimatePresence>

              {items.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    aria-label="Previous"
                    className="absolute left-4 flex h-12 w-12 items-center justify-center rounded-full border border-bone/25 bg-ink/40 text-bone transition-colors hover:bg-bone hover:text-ink md:left-8"
                  >
                    <ChevronLeft size={22} />
                  </button>
                  <button
                    onClick={next}
                    aria-label="Next"
                    className="absolute right-4 flex h-12 w-12 items-center justify-center rounded-full border border-bone/25 bg-ink/40 text-bone transition-colors hover:bg-bone hover:text-ink md:right-8"
                  >
                    <ChevronRight size={22} />
                  </button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
