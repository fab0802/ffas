import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "asanisdatapublicprd01.blob.core.windows.net",
        pathname: "/logos/**",
      },
    ],
  },
};

export default nextConfig;
