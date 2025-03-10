/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com'],
  },
  // Ensure basePath is set if you're not using a custom domain
  basePath: process.env.NODE_ENV === 'production' ? '/my-portfolio' : '',
}

module.exports = nextConfig