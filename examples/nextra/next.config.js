/* eslint-disable @typescript-eslint/no-var-requires */
const { withMorfeo } = require('@morfeo/next');
const { darkTheme } = require('@morfeo/preset-default');
const { deepMerge } = require('@morfeo/utils');
const { morfeo } = require('@morfeo/web');
const docsTheme = require('./morfeo.theme');

morfeo.setTheme('default', deepMerge(darkTheme, docsTheme));

/** @type {import('next').NextConfig} */
const nextConfig = withMorfeo({});

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
});

module.exports = withNextra(nextConfig);
