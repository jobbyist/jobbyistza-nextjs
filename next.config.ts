import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "storage.googleapis.com" },
      { protocol: "https", hostname: "vkwnhhwacizjiwusbmcm.supabase.co" },
      { protocol: "https", hostname: "*.supabase.co" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" },
    ],
  },
  async redirects() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/public/sitemap.xml",
        permanent: false,
      },
      {
        source: "/resource-center",
        destination: "/knowledge-hub",
        permanent: true,
      },
      {
        source: "/resume-cv-assistance",
        destination: "/resume-builder",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
