module.exports = ({ env }) => ({
  i18n: {
    enabled: true,
    config: {
      defaultLocale: "en",
      locales: ["en", "es", "fr"],
    },
  },
  upload: {
    config: {
      provider: "@strapi/provider-upload-cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_API_KEY"),
        api_secret: env("CLOUDINARY_API_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
});
