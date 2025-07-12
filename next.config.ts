import type { NextConfig } from "next";

/**
 * If you want to dynamically control your hostname via environment variables,
 * uncomment and use the lines below:
 */
// const PROTOCOL = process.env.NEXT_PUBLIC_PROTOCOL || "https";
// const HOSTNAME = process.env.NEXT_PUBLIC_HOSTNAME || "graceful-bubble-4a6d1d121b.media.strapiapp.com";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // For local development
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337", // Strapi dev server port
      },
      // For production (Strapi Media CDN)
      {
        protocol: "https",
        hostname: "graceful-bubble-4a6d1d121b.media.strapiapp.com",
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "65mb", // Optional: adjust to your needs
    },
  },
  reactStrictMode: true,
  // swcMinify: true,
};

export default nextConfig;
