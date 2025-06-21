/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  
  // Optimized image configuration for GitHub Pages
  images: {
    unoptimized: true, // Required for static export to GitHub Pages
    domains: ['images.unsplash.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

  // Performance optimizations
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  compress: true,
  poweredByHeader: false,

  // Optimized experimental features
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-slot', '@radix-ui/react-aspect-ratio'],
  },

  // AWS S3 configuration (no basePath needed for custom domain)
  trailingSlash: true,

  // Build optimizations for speed
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // Enhanced webpack configuration for maximum performance
  webpack: (config, { dev, isServer }) => {
    // Production optimizations
    if (!dev && !isServer) {
      // Aggressive bundle splitting
      config.optimization = {
        ...config.optimization,
        usedExports: true,
        sideEffects: false,
        splitChunks: {
          chunks: 'all',
          minSize: 20000,
          maxSize: 50000,
          cacheGroups: {
            // React core
            react: {
              test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
              name: 'react',
              chunks: 'all',
              priority: 10,
            },
            // Radix UI components
            radix: {
              test: /[\\/]node_modules[\\/]@radix-ui[\\/]/,
              name: 'radix',
              chunks: 'all',
              priority: 8,
            },
            // Lucide icons
            lucide: {
              test: /[\\/]node_modules[\\/]lucide-react[\\/]/,
              name: 'lucide',
              chunks: 'all',
              priority: 7,
            },
            // Other vendors
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
              priority: 5,
            },
            // Common utilities
            common: {
              name: 'common',
              minChunks: 2,
              chunks: 'all',
              priority: 3,
            },
          },
        },
        // Tree shaking improvements
        providedExports: true,
        concatenateModules: true,
      }

      // Advanced minification
      config.optimization.minimize = true
      
      // Module concatenation for smaller bundles
      config.optimization.concatenateModules = true
    }

    // Optimize imports and aliases
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': require('path').resolve(__dirname),
    }

    // Optimize module resolution
    config.resolve.modules = ['node_modules']
    config.resolve.symlinks = false

    // Disable performance hints to eliminate warnings
    config.performance = {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    }

    return config
  },

  // Note: Headers don't work with static export (GitHub Pages)
  // Caching will be handled by GitHub Pages and CDN
}

module.exports = nextConfig