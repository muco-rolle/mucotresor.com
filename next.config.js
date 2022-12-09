/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // allow next/image to serve remote images from safelisted domains
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/delba/**",
      },
      { hostname: "api.microlink.io" },
      { hostname: "pbs.twimg.com" },
    ],
  },
};

module.exports = nextConfig;
