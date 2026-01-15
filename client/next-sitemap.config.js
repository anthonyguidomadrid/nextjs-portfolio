/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL,
  generateRobotsTxt: true,
  sitemapSize: 5000,
  exclude: ['/404', '/404.html'],
  additionalPaths: async () => {
    const cvLocales = ['en', 'es', 'fr'];
    return cvLocales.map((locale) => ({
      loc: `/cv/${locale}/AG_CV_2025.pdf`,
    }));
  },
};