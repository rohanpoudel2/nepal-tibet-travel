/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "images.pexels.com", "images.unsplash.com", "1.gravatar.com"]
  },
  experimental: {
    serverActions: false,
  },
}

module.exports = nextConfig
