/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Set the basePath to your repository name for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/my-portfolio' : '',
  // Disable trailing slashes for GitHub Pages compatibility
  trailingSlash: true,
  // This setting ensures assets are correctly loaded on GitHub Pages
  assetPrefix: process.env.NODE_ENV === 'production' ? '/my-portfolio' : '',
  // Disable ESLint during builds
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable TypeScript type checking during builds
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig 