import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
      { protocol: "https", hostname: "www.customerization.ca" },
      { protocol: "https", hostname: "neiros.ru" },
      { protocol: "https", hostname: "www.spacestem.com" },
      { protocol: "https", hostname: "substackcdn.com" },
      { protocol: "https", hostname: "substack-post-media.s3.amazonaws.com" },
      { protocol: "https", hostname: "shalb.com" },
      { protocol: "https", hostname: "itc.com.sa" },
      { protocol: "https", hostname: "document360.com" },
      { protocol: "https", hostname: "gracethemes.com" },
      { protocol: "https", hostname: "miro.medium.com" },
    ],
  },
};

export default nextConfig;
