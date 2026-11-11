import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "ughe.org", pathname: "/**" },
    ],
  },
};

export default nextConfig;
