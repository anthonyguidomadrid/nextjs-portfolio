/** @type {import('next-sitemap').IConfig} */
const i18nConfig = require('./next-i18next.config.js');

const locales = Array.isArray(i18nConfig?.i18n?.locales)
  ? i18nConfig.i18n.locales
  : [];

module.exports = {
  siteUrl: process.env.SITE_URL,
  generateRobotsTxt: false,
  outDir: 'public/sitemaps',
  sitemapSize: 5000,
  exclude: ['/*404*','/**/404*'],
  additionalPaths: async () => {
    return locales.map((locale) => ({
      loc: `/cv/${locale}/AG_CV_2025.pdf`,
    }));
  },
};
