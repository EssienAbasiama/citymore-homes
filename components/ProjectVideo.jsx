"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Loader2 } from "lucide-react";

/**
 * Adaptive project video.
 *
 * `video` shapes accepted:
 *   "/path/clip.mp4"
 *   { poster?, orientation?, hls?, src?, sources?: [{ src, type }] }
 *
 * - When `hls` (an .m3u8 master playlist) is provided, playback is adaptive:
 *   the player streams the lowest tier that the viewer's bandwidth allows and
 *   steps up/down in real time — ideal on poor connections. Safari plays HLS
 *   natively; other browsers use hls.js (loaded only on play).
 * - `sources` (MP4) is the fallback when HLS can't be used.
 * - Nothing downloads until the viewer presses play (preload="none" + poster),
 *   so the page stays light on metered / slow networks.
 */
export default function ProjectVideo({ video, title = "Project walkthrough" }) {
  const ref = useRef(null);
  const hlsRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);

  const config = typeof video === "string" ? { sources: [{ src: video }] } : video || {};
  const { poster, hls, orientation } = config;
  const sources =
    config.sources?.length > 0
      ? config.sources
      : config.src
        ? [{ src: config.src, type: guessType(config.src) }]
        : [];

  const hasPlayable = !!hls || sources.length > 0;

  useEffect(() => {
    return () => hlsRef.current?.destroy?.();
  }, []);

  if (!hasPlayable) return null;

  const start = async () => {
    const el = ref.current;
    if (!el) return;
    setPlaying(true);
    setLoading(true);

    if (hls) {
      const nativeHls = el.canPlayType("application/vnd.apple.mpegurl");
      if (nativeHls) {
        el.src = hls;
      } else {
        try {
          const Hls = (await import("hls.js")).default;
          if (Hls.isSupported()) {
            const instance = new Hls({ capLevelToPlayerSize: true });
            hlsRef.current = instance;
            instance.loadSource(hls);
            instance.attachMedia(el);
          } else if (sources[0]) {
            el.src = sources[0].src; // very old browser fallback
          }
        } catch {
          if (sources[0]) el.src = sources[0].src;
        }
      }
    }

    const clearLoading = () => setLoading(false);
    el.addEventListener("playing", clearLoading, { once: true });
    requestAnimationFrame(() => el.play().catch(clearLoading));
  };

  const portrait = orientation === "portrait";

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`relative mx-auto overflow-hidden rounded-3xl bg-ink ${
        portrait ? "aspect-[9/16] w-full max-w-[400px]" : "aspect-video w-full"
      }`}
    >
      <video
        ref={ref}
        className="h-full w-full object-contain"
        poster={poster}
        controls={playing}
        playsInline
        preload="none"
      >
        {!hls &&
          sources.map((s) => (
            <source key={s.src} src={s.src} type={s.type || guessType(s.src)} />
          ))}
      </video>

      {!playing && (
        <button
          type="button"
          onClick={start}
          aria-label={`Play ${title}`}
          className="group absolute inset-0 flex items-center justify-center bg-ink/25 transition-colors duration-500 hover:bg-ink/40"
        >
          <span className="flex h-20 w-20 items-center justify-center rounded-full bg-bone/95 text-ink shadow-lg transition-transform duration-500 ease-smooth group-hover:scale-110">
            <Play size={26} className="ml-1 fill-current" />
          </span>
        </button>
      )}

      {playing && loading && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <Loader2 size={34} className="animate-spin text-bone/90" />
        </div>
      )}
    </motion.div>
  );
}

function guessType(src = "") {
  const ext = src.split(".").pop()?.toLowerCase();
  if (ext === "webm") return "video/webm";
  if (ext === "ogg" || ext === "ogv") return "video/ogg";
  if (ext === "mov") return "video/quicktime";
  return "video/mp4";
}
