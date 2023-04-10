const { withMorfeo } = require('@morfeo/next');
const { initPreset } = require('@morfeo/preset-default');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
};

initPreset();

module.exports = withMorfeo(nextConfig);
