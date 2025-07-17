import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: false, // Keep strict type checking
  },
  
  // Remove experimental.typedRoutes for Turbopack compatibility
  // experimental: {
  //   typedRoutes: true,  // Disabled for Turbopack support
  // },
  
  // Add these Turbopack-friendly optimizations:
  swcMinify: true,
  compress: true,
  reactStrictMode: true,
};

export default nextConfig;
