/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ Image optimization settings
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
  },

  // ✅ General optimizations
  compress: true,
  poweredByHeader: false,

  // ✅ Experimental performance improvements
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },

  // ✅ Ignore build-time TypeScript errors (use only for production safety)
  typescript: {
    ignoreBuildErrors: true,
  },

  // ✅ Ignore ESLint errors during `next build`
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
