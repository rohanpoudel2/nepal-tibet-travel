/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "localhost",
      "images.pexels.com",
      "images.unsplash.com",
      "1.gravatar.com",
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wp.nepaltibettravel.com',
        port: '',
        pathname: '/wp-content/**',
      },
    ],
  },
}

module.exports = nextConfig
