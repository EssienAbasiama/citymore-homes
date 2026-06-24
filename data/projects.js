// CITYMORE development projects.
// Add a new project by copying one block below and editing the fields.
// `slug` must be unique — it becomes the URL: /projects/<slug>.
// Images can be local (place in /public and use "/my-image.jpg") or remote URLs.

export const projects = [
  {
    slug: "marigold-villa",
    name: "Marigold Villa",
    location: "Ogba, Lagos",
    status: "Completed",
    type: "Detached Duplex",
    year: "2025",
    duration: "7 months",
    featured: true,
    cover: "/projects/marigold-villa/IMG_8334.png",
    summary:
      "A four-bedroom detached duplex in Ogba, finished to a turnkey smart-home standard — solar-ready power, full CCTV and smart access, and a fully fitted kitchen.",
    overview: [
      "Marigold is a four-bedroom detached duplex with a BQ, delivered in Ogba over seven months. The brief was a home that runs effortlessly from day one — power, security, and connectivity all handled before a family moves in.",
      "It is solar-ready with a 10.2kVA inverter and 15kWh lithium battery, wrapped in 24/7 CCTV, smart fingerprint access, and high-speed Starlink WiFi. Every detail was finished to a standard we would happily live with ourselves.",
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
    // Video walkthrough. `hls` is an adaptive playlist (auto-adjusts quality to
    // the viewer's bandwidth); `sources` is the MP4 fallback. `orientation`
    // "portrait" frames vertical phone footage without cropping.
    video: {
      orientation: "portrait",
      poster: "/projects/marigold-villa/walkthrough-poster.jpg",
      hls: "/projects/marigold-villa/hls/master.m3u8",
      sources: [
        { src: "/projects/marigold-villa/walkthrough.mp4", type: "video/mp4" },
      ],
    },
    gallery: [
      "/projects/marigold-villa/IMG_8334.png",
      "/projects/marigold-villa/IMG_8335.png",
    ],
    plans: [
      { src: "/projects/marigold-villa/IMG_0918.png", caption: "Ground Floor" },
      { src: "/projects/marigold-villa/IMG_0919.png", caption: "Upper Floor" },
      { src: "/projects/marigold-villa/IMG_8339.png", caption: "Front Elevation" },
      { src: "/projects/marigold-villa/IMG_8344.png", caption: "Back Elevation" },
      { src: "/projects/marigold-villa/IMG_8342.png", caption: "Left Elevation" },
      { src: "/projects/marigold-villa/IMG_8337.png", caption: "Right Elevation" },
    ],
    result:
      "Delivered in seven months and sold — a turnkey, smart-home duplex finished to a move-in standard.",
  },
];

export const projectStatuses = ["All", "Completed", "Ongoing", "Upcoming"];

export function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}
