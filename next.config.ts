import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages requires unoptimized images unless using a custom image loader
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
