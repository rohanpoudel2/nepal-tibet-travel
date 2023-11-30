/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "localhost",
      "images.pexels.com",
      "images.unsplash.com",
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wp.nepaltibettravel.com',
        port: '',
        pathname: '/wp-content/**',
      },
      {
        protocol: 'https',
        hostname: '1.gravatar.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
}

module.exports = nextConfig
