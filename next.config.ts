import type { NextConfig } from "next";
// const PROTOCOL = process.env.NEXT_PUBLIC_PROTOCOL || "https";
// const HOSTNAME =
//   process.env.NEXT_PUBLIC_HOSTNAME ||
//   "graceful-bubble-4a6d1d121b.media.strapiapp.com";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
      },
      {
        protocol: "https",
        hostname: "graceful-bubble-4a6d1d121b.media.strapiapp.com",
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "65mb", // Increase the limit t0 15MB
    },
  },
};

export default nextConfig;
