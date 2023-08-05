/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { collector } = require('@morfeo/compiler');
require('./morfeo.theme');

/** @type {import('next').NextConfig} */
const nextConfig = {};

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
});

collector.init({
  entryPoint: path.join(process.cwd(), 'src', '**/*.{ts,tsx,js,jsx}'),
  babel: {
    presets: ['next/babel'],
  },
});

collector.collect();

module.exports = withNextra(nextConfig);
