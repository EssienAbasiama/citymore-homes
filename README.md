# CITYMORE HOMES LIMITED — Website

An animated, fully responsive real estate website built with **Next.js (App Router)**,
**Tailwind CSS**, **Framer Motion**, and **Lenis** smooth scroll.

## Brand

- Cream `#EBE6D4` · Black `#000000`
- Display type: **Fraunces** · Body: **Inter** (both loaded via `next/font`)
- Signature motif: the logo's twin-peak **roofline**, redrawn as an SVG that animates
  on scroll (`components/Roofline.jsx`)

## Pages

| Route          | Contents                                                            |
| -------------- | ------------------------------------------------------------------- |
| `/`            | Parallax hero, featured listings, story, process, testimonials, CTA |
| `/properties`  | Curated grid with animated category filter                          |
| `/services`    | Buying, selling, management, advisory                               |
| `/about`       | Story, animated stats, team                                         |
| `/contact`     | Animated, validated form → emails `hello@citymorehomes.com`         |

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Build for production:

```bash
npm run build
npm start
```

## Notes

- Property and team photos load from Unsplash (allow-listed in `next.config.mjs`).
  Swap the `image` URLs in `data/properties.js` and `app/about/page.jsx` for your
  client's real photography.
- The contact form opens the visitor's mail client pre-addressed to
  `hello@citymorehomes.com`. To capture submissions server-side instead, replace the
  `mailto:` handler in `app/contact/page.jsx` with a POST to your API route or a
  service like Resend / Formspree.
- All motion respects `prefers-reduced-motion`.

## Libraries

- `framer-motion` — reveals, page motion, hover micro-interactions, counters
- `lenis` — smooth scrolling
- `lucide-react` — icons
