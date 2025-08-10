// Make bundle analyzer optional in CI environments
const withBundleAnalyzer = (() => {
  try {
    return require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true' })
  } catch {
    return (config) => config
  }
})()

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',

  images: {
    unoptimized: true,
    domains: ['images.unsplash.com'],
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
  },

  swcMinify: true,
  compiler: { removeConsole: process.env.NODE_ENV === 'production' },
  compress: true,
  poweredByHeader: false,

  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-slot', '@radix-ui/react-aspect-ratio'],
  },

  trailingSlash: true,
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },

  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        usedExports: true,
        sideEffects: false,
        splitChunks: {
          chunks: 'all',
          minSize: 20000,
          maxSize: 50000,
          cacheGroups: {
            react: { test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/, name: 'react', chunks: 'all', priority: 10 },
            radix: { test: /[\\/]node_modules[\\/]@radix-ui[\\/]/, name: 'radix', chunks: 'all', priority: 8 },
            lucide: { test: /[\\/]node_modules[\\/]lucide-react[\\/]/, name: 'lucide', chunks: 'all', priority: 7 },
            vendor: { test: /[\\/]node_modules[\\/]/, name: 'vendors', chunks: 'all', priority: 5 },
            common: { name: 'common', minChunks: 2, chunks: 'all', priority: 3 },
          },
        },
        providedExports: true,
        concatenateModules: true,
      }
      config.optimization.minimize = true
    }

    config.resolve.alias = { ...config.resolve.alias, '@': require('path').resolve(__dirname) }
    config.resolve.modules = ['node_modules']
    config.resolve.symlinks = false
    config.performance = { hints: false, maxEntrypointSize: 512000, maxAssetSize: 512000 }
    return config
  },
}

module.exports = withBundleAnalyzer(nextConfig)
