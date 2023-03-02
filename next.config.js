/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  images: {
    unoptimized: true,
    compress: true,
  },
}

module.exports = nextConfig
