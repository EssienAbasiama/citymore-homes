// CITYMORE development projects.
// Add a new project by copying one block below and editing the fields.
// `slug` must be unique — it becomes the URL: /projects/<slug>.
// Images can be local (place in /public and use "/my-image.jpg") or remote URLs.

export const projects = [
  {
    slug: "marigold-duplex",
    name: "Marigold Duplex",
    location: "Ogba, Lagos",
    status: "Completed",
    type: "Detached Duplex",
    year: "2025",
    duration: "7 months",
    featured: true,
    cover: "/projects/marigold-duplex/IMG_8335.png",
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
    // Video walkthrough. The MP4 is hosted off-repo (on the public
    // `citymore-homes-media` GitHub release) so the large file stays out of this
    // repo and the deploy bundle. `orientation` "portrait" frames vertical phone
    // footage without cropping. To swap hosts later, just change the `src` URL.
    video: {
      orientation: "portrait",
      poster: "/projects/marigold-duplex/walkthrough-poster.jpg",
      sources: [
        {
          src: "https://github.com/EssienAbasiama/citymore-homes-media/releases/download/media-v1/marigold-duplex-walkthrough.mp4",
          type: "video/mp4",
        },
      ],
    },
    gallery: [
      "/projects/marigold-duplex/IMG_8335.png",
    ],
    plans: [
      { src: "/projects/marigold-duplex/IMG_0918.png", caption: "Ground Floor" },
      { src: "/projects/marigold-duplex/IMG_0919.png", caption: "Upper Floor" },
      { src: "/projects/marigold-duplex/IMG_8338.png", caption: "Front Elevation" },
      { src: "/projects/marigold-duplex/IMG_8344.png", caption: "Back Elevation" },
      { src: "/projects/marigold-duplex/IMG_8342.png", caption: "Left Elevation" },
      { src: "/projects/marigold-duplex/IMG_8337.png", caption: "Right Elevation" },
    ],
    result:
      "Delivered in seven months and sold — a turnkey, smart-home duplex finished to a move-in standard.",
  },
  {
    slug: "ifako-ijaye",
    name: "Ifako-Ijaye",
    location: "Ifako-Ijaye, Lagos",
    status: "Completed", // TODO: confirm — Completed | Ongoing | Upcoming
    type: "Detached Duplex",
    year: "2025", // TODO: confirm year
    duration: "—", // TODO: confirm build duration
    featured: false,
    cover: "/projects/ifako-ijaye/IMG_8334.png",
    summary:
      "A four-bedroom detached duplex development in Ifako-Ijaye, Lagos. Full details and walkthrough coming soon.", // TODO
    overview: [
      "Project overview coming soon.", // TODO: tell the story of this development.
    ],
    scope: [
      "Four-bedroom detached duplex", // TODO: list the real scope of work
    ],
    stats: [
      { label: "Bedrooms", value: "4" },
      { label: "Bathrooms", value: "TBC" }, // TODO: bath count
      { label: "Type", value: "Duplex" },
      { label: "City", value: "Lagos" },
    ],
    // Walkthrough MP4 is hosted off-repo on the public `citymore-homes-media`
    // release. Add a poster image (small, keep it local) then uncomment to enable:
    // video: {
    //   orientation: "portrait",
    //   poster: "/projects/ifako-ijaye/walkthrough-poster.jpg",
    //   sources: [{ src: "https://github.com/EssienAbasiama/citymore-homes-media/releases/download/media-v1/ifako-ijaye-walkthrough.mp4", type: "video/mp4" }],
    // },
    gallery: [
      "/projects/ifako-ijaye/IMG_8334.png",
    ],
    plans: [
      { src: "/projects/ifako-ijaye/front-elevation.png", caption: "Front Elevation" },
    ],
  },
];

export const projectStatuses = ["All", "Completed", "Ongoing", "Upcoming"];

export function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}
