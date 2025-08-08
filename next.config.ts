import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "cdn.sanity.io",
      },
    ],
    domains: ["api.microlink.io"],
  },
};

export default nextConfig;
