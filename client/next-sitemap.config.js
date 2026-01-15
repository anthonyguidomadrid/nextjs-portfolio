/** @type {import('next-sitemap').IConfig} */
const fs = require('fs');
const path = require('path');
const i18nConfig = require('./next-i18next.config.js');

const locales = Array.isArray(i18nConfig?.i18n?.locales)
  ? i18nConfig.i18n.locales
  : [];

module.exports = {
  siteUrl: process.env.SITE_URL,
  generateRobotsTxt: false,
  outDir: 'public/sitemaps',
  sitemapSize: 5000,
  exclude: ['/*404*', '/**/404*'],
  additionalPaths: async () => {
    return locales.map((locale) => {
      const loc = `/cv/${locale}/AG_CV_2025.pdf`;
      const pdfPath = path.join(
        process.cwd(),
        'public',
        'cv',
        locale,
        'AG_CV_2025.pdf'
      );

      let lastmod;
      try {
        lastmod = fs.statSync(pdfPath).mtime.toISOString();
      } catch {
        // If the file doesn't exist at build time, omit lastmod.
      }

      return {
        loc,
        lastmod,
        changefreq: 'yearly',
        priority: 0.3,
      };
    });
  },
};
