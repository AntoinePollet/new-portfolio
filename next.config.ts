import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages requires unoptimized images unless using a custom image loader
  output: 'export',
  images: {
    unoptimized: true
  },
  // Handle GitHub Pages base path so assets like /profile.jpeg resolve correctly
  basePath: (() => {
    return '/new-portfolio'
  })(),
  assetPrefix: (() => {
    return '/new-portfolio/'
  })(),
};

export default nextConfig;
