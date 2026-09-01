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
    status: "Completed",
    type: "Detached Duplex",
    year: "2025",
    duration: "7 months",
    featured: true,
    cover: "/projects/the-nova/IMG_8334.png",
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
    plans: [],
    result:
      "Completed in seven months — a turnkey, smart-home duplex finished to a standard we're proud of.",
  },
  {
    slug: "terra",
    name: "Terra Living",
    tagline: "Grounded in Quality",
    location: "Ogba, Lagos",
    status: "Completed",
    type: "Detached Duplex",
    year: "2025",
    duration: "7 months",
    featured: true,
    cover: "/projects/terra/IMG_8335.png",
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
      { label: "Status", value: "Completed" },
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
  {
    slug: "overall",
    name: "Overall Development",
    tagline: "The flagship vision for the next phase",
    location: "Lagos, Nigeria",
    status: "Ongoing",
    type: "Residential Development",
    year: "2026",
    duration: "12 months",
    featured: true,
    cover: "/projects/overall/WhatsApp%20Image%202026-08-29%20at%207.12.38%20PM%20(1).jpeg",
    beds: 4,
    baths: 4,
    cars: 2,
    summary:
      "A flagship residential development concept with a primary highlight and supporting building phases. This overall view is designed to showcase the master vision before the individual buildings are explored in detail.",
    overview: [
      "This overall concept is the master overview for the upcoming and ongoing development pipeline.",
      "The page is intentionally structured to give this flagship project the main spotlight while the remaining buildings sit beneath it as separate, viewable sections for deeper exploration.",
    ],
    scope: [
      "Master development planning",
      "Residential concept design",
      "Phased project rollout",
      "Investor presentation",
    ],
    stats: [
      { label: "Phase", value: "Ongoing" },
      { label: "Buildings", value: "4" },
      { label: "Location", value: "Lagos" },
      { label: "Status", value: "Live" },
    ],
    features: [
      { icon: "Sun", title: "Master vision", body: "A single overview that frames the wider development story." },
      { icon: "Lightbulb", title: "Phased rollout", body: "Each block is planned as a clear, stand-alone opportunity." },
      { icon: "DoorOpen", title: "Built for scale", body: "Designed to present multiple units with one central highlight." },
    ],
    gallery: [
      "/projects/overall/WhatsApp%20Image%202026-08-29%20at%207.12.38%20PM%20(1).jpeg",
      "/projects/overall/WhatsApp%20Image%202026-08-29%20at%207.12.38%20PM.jpeg",
    ],
    plans: [],
    result:
      "The overall project acts as the anchor story for the current pipeline and keeps the master concept visible while the individual buildings are explored beneath it.",
  },
  {
    slug: "building-a",
    name: "Building A",
    tagline: "The first signature block",
    location: "Lagos, Nigeria",
    status: "Ongoing",
    type: "Residential Block",
    year: "2026",
    duration: "10 months",
    featured: false,
    cover: "/projects/buildingA/WhatsApp%20Image%202026-08-29%20at%207.09.52%20PM%20(1).jpeg",
    beds: 4,
    baths: 4,
    cars: 2,
    summary:
      "Template for Building A. Replace with the final specifications, schedule, and completed details when they are ready.",
    overview: [
      "Building A is the first project block in the portfolio and will be expanded with the final design narrative later.",
      "For now, this remains a clean placeholder structure so the section can be developed and styled without disturbing the overall layout.",
    ],
    scope: [
      "Architecture",
      "Interior detailing",
      "Construction progression",
      "Final handover",
    ],
    stats: [
      { label: "Phase", value: "Ongoing" },
      { label: "Layout", value: "4 Bed" },
      { label: "Status", value: "In progress" },
      { label: "Year", value: "2026" },
    ],
    features: [
      { icon: "Sun", title: "Smart layout", body: "Template copy that can be replaced with the final design details." },
      { icon: "DoorOpen", title: "Access details", body: "To be updated with the completed feature list." },
      { icon: "ChefHat", title: "Interior finish", body: "Placeholder only — final specification will be added later." },
    ],
    gallery: [
      "/projects/buildingA/WhatsApp%20Image%202026-08-29%20at%207.09.52%20PM%20(1).jpeg",
      "/projects/buildingA/WhatsApp%20Image%202026-08-29%20at%207.09.52%20PM%20(2).jpeg",
      "/projects/buildingA/WhatsApp%20Image%202026-08-29%20at%207.09.52%20PM.jpeg",
    ],
    plans: [],
    result: "Building A is intentionally left as a structured template until the final details and features are shared.",
  },
  {
    slug: "building-b",
    name: "Building B",
    tagline: "The second phase in motion",
    location: "Lagos, Nigeria",
    status: "Upcoming",
    type: "Residential Block",
    year: "2026",
    duration: "12 months",
    featured: false,
    cover: "/projects/buildingB/WhatsApp%20Image%202026-08-29%20at%207.11.16%20PM%20(1).jpeg",
    beds: 4,
    baths: 4,
    cars: 2,
    summary:
      "Template for Building B. The final design details, finishes, and timeline will be added once they are confirmed.",
    overview: [
      "Building B is scheduled as an upcoming section within the wider development story.",
      "This placeholder is in place so the category can expand cleanly when the final details are sent over.",
    ],
    scope: [
      "Design development",
      "Construction planning",
      "Property marketing",
      "Delivery strategy",
    ],
    stats: [
      { label: "Phase", value: "Upcoming" },
      { label: "Layout", value: "4 Bed" },
      { label: "Status", value: "Planned" },
      { label: "Year", value: "2026" },
    ],
    features: [
      { icon: "Sun", title: "Layout concept", body: "Placeholder content for the final property mix and room configuration." },
      { icon: "Cctv", title: "Security details", body: "To be replaced with the final property security brief." },
      { icon: "Car", title: "Parking setup", body: "Temporarily set as a template while details are being finalised." },
    ],
    gallery: [
      "/projects/buildingB/WhatsApp%20Image%202026-08-29%20at%207.11.16%20PM%20(1).jpeg",
      "/projects/buildingB/WhatsApp%20Image%202026-08-29%20at%207.11.16%20PM%20(2).jpeg",
      "/projects/buildingB/WhatsApp%20Image%202026-08-29%20at%207.11.16%20PM.jpeg",
    ],
    plans: [],
    result: "Building B remains staged as the upcoming development template while the final project details are confirmed.",
  },
  {
    slug: "building-c",
    name: "Building C",
    tagline: "The final tower in the line-up",
    location: "Lagos, Nigeria",
    status: "Upcoming",
    type: "Residential Block",
    year: "2026",
    duration: "12 months",
    featured: false,
    cover: "/projects/buildingC/WhatsApp%20Image%202026-08-29%20at%207.12.06%20PM%20(1).jpeg",
    beds: 4,
    baths: 4,
    cars: 2,
    summary:
      "Template for Building C. This section is set up to receive the final design notes and feature list once they are shared.",
    overview: [
      "Building C completes the three-building follow-up section below the overall highlight.",
      "The layout is ready and can be filled with the final details and imagery without needing a structural redesign.",
    ],
    scope: [
      "Final block design",
      "Interior concept",
      "Construction milestone planning",
      "Turnover detailing",
    ],
    stats: [
      { label: "Phase", value: "Upcoming" },
      { label: "Layout", value: "4 Bed" },
      { label: "Status", value: "Pending" },
      { label: "Year", value: "2026" },
    ],
    features: [
      { icon: "Lightbulb", title: "Final concept", body: "Ready to receive the completed feature narrative and imagery." },
      { icon: "Fingerprint", title: "Access system", body: "Placeholder text — final smart-home options to be added later." },
      { icon: "Speaker", title: "Interior experience", body: "Template section set to transform into the final property pitch." },
    ],
    gallery: [
      "/projects/buildingC/WhatsApp%20Image%202026-08-29%20at%207.12.06%20PM%20(1).jpeg",
      "/projects/buildingC/WhatsApp%20Image%202026-08-29%20at%207.12.06%20PM%20(2).jpeg",
      "/projects/buildingC/WhatsApp%20Image%202026-08-29%20at%207.12.06%20PM.jpeg",
    ],
    plans: [],
    result: "Building C is prepared as the final placeholder in the group so the finished project details can slot in cleanly later.",
  },
];

export const projectStatuses = ["All", "Completed", "Ongoing", "Upcoming"];

export function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}
