/** @type {import('next').NextConfig} */
import i18nConfig from './next-i18next.config.js';

const nextConfig = {
  i18n: i18nConfig.i18n,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  images: {
    domains: ['localhost'],
  },
};

export default nextConfig;
