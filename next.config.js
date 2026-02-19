/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/e-l-studio-app',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

module.exports = nextConfig
