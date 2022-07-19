/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // basePath: '/ca',
  i18n: {
    locales: ["en-US", "fr-CA"],
    localeDetection: false,
    defaultLocale: "en-US",
  },
  images: {
    domains: ["images.ctfassets.net"],
  },
};

module.exports = nextConfig;
