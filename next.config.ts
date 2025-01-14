import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.hauntedspace.io',
        pathname: '/galaxy-games/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
