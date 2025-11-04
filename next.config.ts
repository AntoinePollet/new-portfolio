import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export (replaces `next export` CLI)
  output: "export",
  // GitHub Pages requires unoptimized images unless using a custom image loader
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
