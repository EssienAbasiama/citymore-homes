/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  // The Triad projects were renamed — keep the old shared links working.
  async redirects() {
    return [
      { source: "/projects/project-triad", destination: "/projects/the-triad", permanent: true },
      { source: "/projects/building-a", destination: "/projects/temi", permanent: true },
      { source: "/projects/building-b", destination: "/projects/remi", permanent: true },
      { source: "/projects/building-c", destination: "/projects/imisi", permanent: true },
    ];
  },
};

export default nextConfig;
