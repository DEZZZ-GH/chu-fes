import type { NextConfig } from "next";

const nextConfig : NextConfig= {
  typescript: {
    ignoreBuildErrors: false, // Set to true only if needed during development
  },
  experimental: {
    typedRoutes: true, // Better TypeScript support for routes
  }
};

export default nextConfig;
