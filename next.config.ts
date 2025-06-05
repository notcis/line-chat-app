import withPWA from "./lib/next-pwa-wrapper.cjs";

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
  },
  reactStrictMode: true,
  swcMinify: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "profile.line-scdn.net",
        port: "",
      },
      {
        protocol: "https",
        hostname: "vxh2fakagf.ufs.sh",
        port: "",
      },
      {
        protocol: "https",
        hostname: "stickershop.line-scdn.net",
        port: "",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/",
        destination: "/conversations",
        permanent: true,
      },
    ];
  },
};

const PWAWrapper = withPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
});

export default PWAWrapper(nextConfig);
