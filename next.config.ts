import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },

  // Removed deprecated swcMinify
  compress: true,
  reactStrictMode: true,
};

export default nextConfig;

