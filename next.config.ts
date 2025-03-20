/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  // Only use basePath in production environment
  basePath: process.env.NODE_ENV === 'production' ? '/Shifa-AI' : '',
  images: {
    unoptimized: true,
  },
  // Make sure the assetPrefix is set to your GitHub Pages URL in production
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Shifa-AI' : '',
  trailingSlash: true, // This helps with GitHub Pages compatibility
};

module.exports = nextConfig;