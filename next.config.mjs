/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "luminous-presence-61d8f148f4.strapiapp.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "luminous-presence-61d8f148f4.media.strapiapp.com",
      },
      {
        protocol: "https",
        hostname: "luminous-presence-61d8f148f4.strapiapp.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
