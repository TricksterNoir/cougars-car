/** @type {import('next').NextConfig} */

const {i18n} = require('./next-i18next.config')
const nextConfig = {
  i18n,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ["image/avif", "image/webp"],
    dangerouslyAllowSVG: true,
    remotePatterns: [{ hostname: "cdn.sanity.io" }]
  },
  typescript: {
    // Set this to false if you want production builds to abort if there's type errors
    ignoreBuildErrors: process.env.VERCEL_ENV === "production"
  },
  eslint: {
    /// Set this to false if you want production builds to abort if there's lint errors
    ignoreDuringBuilds: process.env.VERCEL_ENV === "production"
  },
  env: {
    NEXT_PUBLIC_W3_ACCESS_KEY: process.env.NEXT_PUBLIC_W3_ACCESS_KEY,
  }
};

module.exports = nextConfig
