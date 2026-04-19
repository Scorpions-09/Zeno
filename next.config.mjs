/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  images: {
    minimumCacheTTL: 60,
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: [
      '@radix-ui/react-accordion',
      '@radix-ui/react-alert-dialog',
      '@radix-ui/react-aspect-ratio',
      '@radix-ui/react-avatar',
      'lucide-react',
      'date-fns',
      'recharts',
    ],
  },
  compress: true,
  productionBrowserSourceMaps: false,
}

export default nextConfig
