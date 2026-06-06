import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'nero-yacht.it' },
      { hostname: 'www.nevoyachts.com' },
      { hostname: 'lyraworks.es' },
      { hostname: 'alphalyraedesign.com' },
      { hostname: 'images.unsplash.com' },
    ],
  },
};

export default nextConfig;
