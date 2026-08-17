import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [320, 420, 640, 768, 1024, 1280, 1536],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
  },
  compress: true,
};

export default nextConfig;
