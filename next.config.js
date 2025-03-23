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
  // Set conditional basePath based on environment
  // For GitHub Pages we need /my-portfolio
  // For custom domain we don't want a prefix
  basePath: process.env.DEPLOY_TARGET === 'github' ? '/my-portfolio' : '',
  
  // Disable trailing slashes for compatibility
  trailingSlash: true,
  
  // Asset prefix should match basePath
  assetPrefix: process.env.DEPLOY_TARGET === 'github' ? '/my-portfolio' : '',
  
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