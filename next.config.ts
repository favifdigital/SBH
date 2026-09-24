import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/motivational-interviewing",
        destination: "/wellness",
      },
      {
        source: "/motivational-interviewing.html",
        destination: "/wellness",
      },
      {
        source: "/:slug.html",
        destination: "/:slug",
      },
      {
        source: "/legal/:slug.html",
        destination: "/legal/:slug",
      },
    ];
  },
};

export default nextConfig;
