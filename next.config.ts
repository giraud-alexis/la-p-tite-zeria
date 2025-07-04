import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'apiclient.weblume.fr',
      },
    ],
  },
};

export default nextConfig;
