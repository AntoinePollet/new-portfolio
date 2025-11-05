import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages requires unoptimized images unless using a custom image loader
  output: 'export',
  images: {
    unoptimized: true
  },
  // Handle GitHub Pages base path so assets like /profile.jpeg resolve correctly
  basePath: (() => {
    const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
    const isRootSite = repo.endsWith('.github.io');
    return isRootSite ? '' : (repo ? `/${repo}` : '');
  })(),
  assetPrefix: (() => {
    const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
    const isRootSite = repo.endsWith('.github.io');
    return isRootSite ? '' : (repo ? `/${repo}/` : '');
  })(),
};

export default nextConfig;
