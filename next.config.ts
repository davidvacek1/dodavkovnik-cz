import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  turbopack: {
    root: __dirname,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 640, 750, 828, 1080, 1200, 1440, 1920],
    qualities: [50, 65, 75, 85, 90],
  },
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
