import nextra from 'nextra';

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  latex: true,
  flexsearch: {
    codeblocks: false,
  },
  defaultShowCopyCode: true,
});

export default withNextra({
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
});
