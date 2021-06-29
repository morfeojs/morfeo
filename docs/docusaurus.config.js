/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Morfeo',
  tagline: 'Framework Agnostic design system',
  url: 'https://morfeo.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'VLK-STUDIO',
  projectName: 'morfeo',
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'Morfeo Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'Introduction/getting-started',
          position: 'right',
          label: 'Docs',
        },
        { to: '/blog', label: 'Blog', position: 'right' },
        {
          href: 'https://github.com/VLK-STUDIO/morfeo',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'core',
              to: '/docs/introduction/getting-started',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/morfeo',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/VLK-STUDIO/morfeo',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Mauro Erta, VLK Studio and all the documentation authors`,
    },
    liveCodeBlock: {
      /**
       * The position of the live playground, above or under the editor
       * Possible values: "top" | "bottom"
       */
      playgroundPosition: 'bottom',
    },
    colorMode: {
      defaultMode: 'dark',
    },
    // algolia: {
    //   apiKey: 'YOUR_API_KEY',
    //   indexName: 'YOUR_INDEX_NAME',

    //   // Optional: see doc section below
    //   contextualSearch: true,

    //   // Optional: see doc section below
    //   appId: 'YOUR_APP_ID',

    //   // Optional: Algolia search parameters
    //   searchParameters: {},

    //   //... other Algolia params
    // },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/VLK-STUDIO/morfeo/edit/main/docs/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/VLK-STUDIO/morfeo/edit/main/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingId: 'G-Y3GE1C055X',
        },
      },
    ],
  ],
  plugins: ['@docusaurus/theme-live-codeblock'],
};
