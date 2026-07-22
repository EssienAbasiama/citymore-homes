// CITYMORE development projects.
// Add a new project by copying one block below and editing the fields.
// `slug` must be unique — it becomes the URL: /projects/<slug>.
// `tagline` is the short strapline shown under the name (hero + cards).
// Images can be local (place in /public and use "/my-image.jpg") or remote URLs.

export const projects = [
  {
    slug: "the-nova",
    name: "The Nova",
    tagline: "Modern Living, Timeless Value",
    location: "Ogba, Lagos",
    status: "Sold",
    type: "Detached Duplex",
    year: "2025",
    duration: "7 months",
    featured: true,
    cover: "/projects/the-nova/IMG_8334.png",
    // Quick specs shown on the project card (beds · baths · parking).
    beds: 5,
    baths: 5,
    cars: 2,
    summary:
      "A four-bedroom detached duplex with a BQ in Ogba, finished to a turnkey smart-home standard — solar-ready power, full CCTV and smart access, and a fully fitted kitchen.",
    overview: [
      "The Nova is a four-bedroom detached duplex with a BQ, completed in Ogba in just 7 months.",
      "Designed for modern living, it features a solar-ready power system with a 10.2kVA inverter and 15kWh lithium battery, an automated swing gate with remote access, a fully fitted kitchen, 24/7 CCTV surveillance, an integrated Bluetooth sound system, and smart fingerprint access. Every detail was thoughtfully crafted to a standard we'd be proud to call home ourselves.",
    ],
    scope: [
      "Full interior finishing",
      "Solar & inverter installation",
      "Smart security & access",
      "Fitted kitchen",
    ],
    stats: [
      { label: "Bedrooms", value: "4 + BQ" },
      { label: "Build time", value: "7 months" },
      { label: "Power", value: "Solar-ready" },
      { label: "Status", value: "Completed" },
    ],
    features: [
      { icon: "Sun", title: "Solar-ready power", body: "10.2kVA inverter and 15kWh lithium battery for true off-grid running." },
      { icon: "DoorOpen", title: "Automated swing gate", body: "Open it by remote or straight from your phone." },
      { icon: "Cctv", title: "24/7 CCTV security", body: "Full-property camera coverage, day and night." },
      { icon: "Fingerprint", title: "Smart fingerprint access", body: "Keyless entry with secure fingerprint locks." },
      { icon: "Speaker", title: "Integrated Bluetooth sound", body: "Wired into the living and common areas." },
      { icon: "ChefHat", title: "Fully fitted kitchen", body: "Gas hob, oven, and sleek cabinetry." },
    ],
    // Walkthrough MP4 is hosted off-repo on the public `citymore-homes-media`
    // release. Portrait phone footage, so `orientation: "portrait"`.
    video: {
      orientation: "portrait",
      poster: "/projects/the-nova/walkthrough-poster.jpg",
      sources: [
        {
          src: "https://github.com/EssienAbasiama/citymore-homes-media/releases/download/media-v1/the-nova-walkthrough.mp4",
          type: "video/mp4",
        },
      ],
    },
    gallery: [
      "/projects/the-nova/IMG_0961.PNG",
      "/projects/the-nova/IMG_0962.PNG",
      "/projects/the-nova/IMG_0963.PNG",
      "/projects/the-nova/IMG_0964.PNG",
      "/projects/the-nova/IMG_0965.PNG",
      "/projects/the-nova/IMG_0966.PNG",
    ],
    // No drawings for this project — the Drawings section hides itself when
    // `plans` is empty or absent.
    plans: [],
    result:
      "Completed in seven months — a turnkey, smart-home duplex finished to a standard we're proud of.",
  },
  {
    slug: "terra",
    name: "Terra Living",
    tagline: "Grounded in Quality",
    location: "Ogba, Lagos",
    status: "Sold",
    type: "Detached Duplex",
    year: "2025",
    duration: "7 months",
    featured: true,
    cover: "/projects/terra/IMG_8335.png",
    // Quick specs shown on the project card (beds · baths · parking).
    beds: 5,
    baths: 5,
    cars: 2,
    summary:
      "A four-bedroom detached duplex with a BQ in Ogba, finished to a turnkey smart-home standard — solar-ready power, full CCTV and smart access, and a fully fitted kitchen.",
    overview: [
      "Terra Living is a four-bedroom detached duplex with a BQ, completed in Ogba in just 7 months.",
      "Designed for modern living, it features a solar-ready power system with a 10.2kVA inverter and 15kWh lithium battery, an automated swing gate with remote access, a fully fitted kitchen, 24/7 CCTV surveillance, an integrated Bluetooth sound system, and smart fingerprint access. Every detail was thoughtfully crafted to a standard we'd be proud to call home ourselves.",
    ],
    scope: [
      "Full interior finishing",
      "Solar & inverter installation",
      "Smart security & access",
      "Fitted kitchen & carport",
    ],
    stats: [
      { label: "Bedrooms", value: "4 + BQ" },
      { label: "Bathrooms", value: "5" },
      { label: "Power", value: "Solar-ready" },
      { label: "Status", value: "SOLD" },
    ],
    features: [
      { icon: "Sun", title: "Solar-ready power", body: "10.2kVA inverter and 15kWh lithium battery for true off-grid running." },
      { icon: "Lightbulb", title: "Staircase sensor lighting", body: "Lights that respond as you move through the home." },
      { icon: "Cctv", title: "24/7 CCTV security", body: "Full-property camera coverage, day and night." },
      { icon: "DoorOpen", title: "Automated smart gate", body: "Open it by remote or straight from your phone." },
      { icon: "Fingerprint", title: "Smart fingerprint locks", body: "Door locks with a built-in camera." },
      { icon: "Speaker", title: "Inbuilt Bluetooth speakers", body: "Wired into the living and common areas." },
      { icon: "Wifi", title: "High-speed Starlink WiFi", body: "Includes a free six-month subscription." },
      { icon: "ChefHat", title: "Fully fitted kitchen", body: "Gas hob, oven, and sleek cabinetry." },
      { icon: "Car", title: "Dedicated carport", body: "Durable flooring with easy access." },
    ],
    // Video walkthroughs. MP4s are hosted off-repo (on the public
    // `citymore-homes-media` GitHub release) so the large files stay out of
    // this repo and the deploy bundle. `videos` (plural) renders several clips;
    // each takes the same shape as a single `video`. Set `orientation:
    // "portrait"` for vertical phone footage. To swap hosts later, change `src`.
    videos: [
      {
        orientation: "portrait",
        poster: "/projects/terra/walkthrough-1-poster.jpg",
        sources: [
          {
            src: "https://github.com/EssienAbasiama/citymore-homes-media/releases/download/media-v1/terra-walkthrough-1.mp4",
            type: "video/mp4",
          },
        ],
      },
      {
        poster: "/projects/terra/walkthrough-2-poster.jpg",
        sources: [
          {
            src: "https://github.com/EssienAbasiama/citymore-homes-media/releases/download/media-v1/terra-walkthrough-2.mp4",
            type: "video/mp4",
          },
        ],
      },
    ],
    gallery: [
      "/projects/terra/IMG_0983.PNG",
      "/projects/terra/IMG_0978.PNG",
      "/projects/terra/IMG_0981.PNG",
      "/projects/terra/IMG_0986.PNG",
      "/projects/terra/IMG_8335.png",
    ],
    plans: [
      { src: "/projects/terra/IMG_0918.png", caption: "Ground Floor" },
      { src: "/projects/terra/IMG_0919.png", caption: "Upper Floor" },
      { src: "/projects/terra/IMG_8338.png", caption: "Front Elevation" },
      { src: "/projects/terra/IMG_8344.png", caption: "Back Elevation" },
      { src: "/projects/terra/IMG_8342.png", caption: "Left Elevation" },
      { src: "/projects/terra/IMG_8337.png", caption: "Right Elevation" },
    ],
    result:
      "Delivered in seven months and sold — a turnkey, smart-home duplex finished to a move-in standard.",
  },
];

export const projectStatuses = ["All", "Completed", "Ongoing", "Upcoming"];

export function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}
