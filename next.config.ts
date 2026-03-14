import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages and Vercel
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // basePath and assetPrefix only for GitHub Pages subdirectory
  ...(isGithubPages && {
    basePath: "/aiordie-website",
    assetPrefix: "/aiordie-website/",
  }),
};

export default nextConfig;
