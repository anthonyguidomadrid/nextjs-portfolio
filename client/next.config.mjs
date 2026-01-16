/** @type {import('next').NextConfig} */
import i18nConfig from './next-i18next.config.js';

const nextConfig = {
  i18n: i18nConfig.i18n,
  experimental: {
    optimizePackageImports: [
      '@mui/material',
      '@mui/icons-material',
      'date-fns',
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  images: {
    remotePatterns: [
      { protocol: 'http', hostname: 'localhost' },
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'anthonyguido.dev' },
    ],
  },
};

export default nextConfig;
