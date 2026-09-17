// CITYMORE development projects.
// Add a new project by copying one block below and editing the fields.
// `slug` must be unique — it becomes the URL: /projects/<slug>.
// `tagline` is the short strapline shown under the name (hero + cards).
// Images can be local (place in /public and use "/my-image.jpg") or remote URLs.

// Shared specification for The Triad — every residence is delivered to this standard.
const triadFeatures = [
  { icon: "Bed", title: "4 bedroom duplex with BQ", body: "Spacious family living with a dedicated BQ and practical layout." },
  { icon: "Sun", title: "6.2kVA solar inverter", body: "Powered by a 10kWh lithium battery for reliable day-to-day energy supply." },
  { icon: "Speaker", title: "Hey Siri automation", body: "Voice-controlled home automation with surround audio throughout key living spaces." },
  { icon: "DoorOpen", title: "Automated curtain rails", body: "Motorised curtain tracking for the living room and master bedroom." },
  { icon: "Wifi", title: "High-speed Starlink WiFi", body: "Fast, dependable internet for modern smart-home living." },
  { icon: "Lightbulb", title: "Compound floor lights", body: "Optional lighting for the compound and outdoor ambience." },
  { icon: "Lightbulb", title: "Staircase sensor lighting", body: "Automatic light response along the stairs for convenience and safety." },
  { icon: "ChefHat", title: "Fully fitted kitchen", body: "Complete kitchen installation for a polished, move-in-ready finish." },
  { icon: "Car", title: "Dedicated carport", body: "Protected parking space integrated into the home design." },
  { icon: "Cctv", title: "Steel security & smart door entry", body: "Steel-reinforced security with smart access control for peace of mind." },
  { icon: "DoorOpen", title: "Automated smart gate", body: "Convenient gate access with modern smart-home control." },
  { icon: "Cctv", title: "24/7 CCTV surveillance", body: "Round-the-clock monitoring for complete property security." },
];

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
      { label: "Status", value: "Sold" },
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
      poster: "/projects/the-nova/walkthrough-2-poster.jpg",
      sources: [
        {
          src: "https://github.com/EssienAbasiama/citymore-homes-media/releases/download/media-v1/the-nova-walkthrough-2.mp4",
          type: "video/mp4",
        },
      ],
    },
    gallery: [
      "/projects/the-nova/IMG_0961.PNG",
      "/projects/the-nova/IMG_0962.PNG",
      "/projects/the-nova/IMG_0963.PNG",
      "/projects/the-nova/IMG_0964.PNG",
      "/projects/the-nova/nova-1173.jpg",
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
    status: "Sold",
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
      { label: "Status", value: "Sold" },
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
      "/projects/terra/terra-1173.jpg",
      "/projects/terra/IMG_8335.png",
    ],
    plans: [
      { src: "/projects/terra/IMG_8338.png", caption: "Front Elevation" },
      { src: "/projects/terra/IMG_8344.png", caption: "Back Elevation" },
      { src: "/projects/terra/IMG_8342.png", caption: "Left Elevation" },
      { src: "/projects/terra/IMG_8337.png", caption: "Right Elevation" },
    ],
    result:
      "Delivered in seven months and sold — a turnkey, smart-home duplex finished to a move-in standard.",
  },
  {
    slug: "the-triad",
    name: "THE TRIAD",
    tagline: "Three Exceptional Homes. One Refined Address.",
    location: "Ogba, Lagos, Nigeria",
    status: "Ongoing",
    type: "Residential Development",
    year: "2026-2027",
    duration: "8 months",
    completion: "Feb – Mar 2027",
    featured: true,
    cover: "/projects/the-triad/the-triad-1.jpeg",
    beds: 4,
    baths: 4,
    cars: 3,
    bq: true,
    // Shown on the card between the name and the icon row.
    cardSubtitle: ["TEMI | RẸ́MI | ÌMÍSÍ", "Mine. Comfort. Inspiration"],
    children: ["temi", "remi", "imisi"],
    summary:
      "Introducing The Triad — an exclusive collection of three beautifully crafted 4-bedroom detached duplexes with BQ, nestled within a serene estate. Featuring Smart Home Automation and Solar Powered living.\n\nTEMI | RẸ́MI | ÌMÍSÍ\nMine. Comfort. Inspiration",
    overview: [
      "TEMI | RẸ́MI | ÌMÍSÍ",
      "Mine. Comfort. Inspiration",
      "Each residence comes standard with 6.2kVA Solar Inverter + 10kWh Lithium Battery and Smart Home Automation — bringing modern, effortless living home.",
    ],
    scope: [
      "Master development planning",
      "Residential concept design",
      "Phased project rollout",
      "Investor presentation",
    ],
    stats: [
      { label: "Phase", value: "Ongoing" },
      { label: "Units", value: "3" },
      { label: "Availability", value: "2 Left" },
      { label: "Location", value: "Ogba, Lagos" },
    ],
    features: triadFeatures,
    gallery: [
      "/projects/the-triad/the-triad-1.jpeg",
      "/projects/the-triad/the-triad-2.jpeg",
    ],
    plans: [],
    result:
      "TEMI | RẸ́MI | ÌMÍSÍ\nSpaces to call your own. Comfort to come home to. Inspiration to live by",
  },
  {
    slug: "temi",
    name: "TEMI",
    tagline: "THE TRIAD — TEMI",
    location: "Ogba, Lagos, Nigeria",
    status: "Sold",
    type: "Residential Block",
    year: "2026/2027",
    duration: "8 months",
    completion: "Feb – Mar 2027",
    featured: false,
    parentProject: "the-triad",
    cover: "/projects/temi/temi-2.jpeg",
    beds: 4,
    baths: 4,
    cars: 2,
    bq: true,
    landSize: "248 sqm",
    summary:
      "Temi, meaning “mine” or “belongs to me,” represents the feeling of finally coming home to something truly yours.",
    overview: [
      "TEMI — “Mine”",
      "This exquisite 4-bedroom detached duplex with BQ combines contemporary elegance, spacious living and the tranquillity of a serene estate. Designed for those who value privacy, comfort and modern convenience.",
    ],
    scope: [
      "Architecture",
      "Interior detailing",
      "Construction progression",
      "Final handover",
    ],
    stats: [
      { label: "Phase", value: "Ongoing" },
      { label: "Status", value: "Sold" },
      { label: "Layout", value: "4 Bed with BQ" },
      { label: "Year", value: "2026-2027" },
    ],
    features: triadFeatures,
    gallery: [
      "/projects/temi/temi-1.jpeg",
      "/projects/temi/temi-2.jpeg",
      "/projects/temi/temi-3.jpeg",
      "/projects/temi/temi-4.jpeg",
    ],
    plans: [],
    result: "TEMI — A home that feels truly yours.",
  },
  {
    slug: "remi",
    name: "RẸ́MI",
    tagline: "THE TRIAD — RẸ́MI",
    location: "Ogba, Lagos, Nigeria",
    status: "Available",
    type: "Residential Block",
    year: "2026/2027",
    duration: "8 months",
    completion: "Feb – Mar 2027",
    featured: false,
    parentProject: "the-triad",
    cover: "/projects/remi/remi-3.jpeg",
    beds: 4,
    baths: 4,
    cars: 2,
    bq: true,
    landSize: "218 sqm",
    summary:
      "Rẹ́mi, a name associated with comfort and ease. A residence created around effortless living.",
    overview: [
      "RẸ́MI — “Comfort & Ease”",
      "This elegant 4-bedroom detached duplex with BQ offers refined spaces, peaceful surroundings and thoughtful modern features — a home where comfort comes naturally.",
    ],
    scope: [
      "Design development",
      "Construction planning",
      "Property marketing",
      "Delivery strategy",
    ],
    stats: [
      { label: "Phase", value: "Ongoing" },
      { label: "Status", value: "Available" },
      { label: "Layout", value: "4 Bed with BQ" },
      { label: "Year", value: "2026-2027" },
    ],
    features: triadFeatures,
    gallery: [
      "/projects/remi/remi-1.jpeg",
      "/projects/remi/remi-2.jpeg",
      "/projects/remi/remi-3.jpeg",
    ],
    plans: [],
    result: "RẸ́MI — A residence created around effortless living.",
  },
  {
    slug: "imisi",
    name: "ÌMÍSÍ",
    tagline: "THE TRIAD — ÌMÍSÍ",
    location: "Ogba, Lagos, Nigeria",
    status: "Available",
    type: "Residential Block",
    year: "2026-2027",
    duration: "8 months",
    completion: "Feb – Mar 2027",
    featured: false,
    parentProject: "the-triad",
    cover: "/projects/imisi/imisi-2.jpeg",
    beds: 4,
    baths: 4,
    cars: 2,
    bq: true,
    landSize: "218 sqm",
    summary:
      "Ìmísí, meaning inspiration, represents a home designed to inspire the way you live.",
    overview: [
      "ÌMÍSÍ — “Inspiration”",
      "This striking 4-bedroom detached duplex with BQ blends thoughtful design, generous living space and the calm of a serene estate — a home created to inspire the way you live.",
    ],
    scope: [
      "Final block design",
      "Interior concept",
      "Construction milestone planning",
      "Turnover detailing",
    ],
    stats: [
      { label: "Phase", value: "Ongoing" },
      { label: "Status", value: "Available" },
      { label: "Layout", value: "4 Bed with BQ" },
      { label: "Year", value: "2026-2027" },
    ],
    features: triadFeatures,
    gallery: [
      "/projects/imisi/imisi-1.jpeg",
      "/projects/imisi/imisi-2.jpeg",
      "/projects/imisi/imisi-3.jpeg",
    ],
    plans: [],
    result: "ÌMÍSÍ — A home designed to inspire the way you live.",
  },
];

export const projectStatuses = ["All", "Sold", "Ongoing", "Upcoming"];

export function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}
