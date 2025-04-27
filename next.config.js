/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: false,          // ✅ You disabled SWC minifier (good for now to avoid hidden crash)
  eslint: { 
    ignoreDuringBuilds: true, // ✅ ESLint is ignored during build (fine for quick builds)
  },
  images: { 
    unoptimized: true         // ✅ Disabling Next.js Image Optimization (so no image plugin issues)
  },
};

module.exports = nextConfig;
