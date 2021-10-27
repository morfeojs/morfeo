/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Morfeo',
  tagline: 'Framework Agnostic theming system',
  url: 'https://morfeo.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  customFields: {
    description:
      'Morfeo is a tool to build design systems based on a single source of truth.',
  },
  favicon: 'img/favicon.ico',
  organizationName: 'VLK-STUDIO',
  projectName: 'morfeo',
  themeConfig: {
    gtag: {
      trackingID: 'G-Y3GE1C055X',
      anonymizeIP: true,
    },
    googleAnalytics: {
      trackingID: 'UA-200678898-1',
      anonymizeIP: true,
    },
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
        {
          to: 'docs/Packages/core',
          label: 'Packages',
          position: 'right',
          activeBaseRegex: `/packages/`,
        },
        { to: '/blog', label: 'Blog', position: 'right' },
        {
          href: 'https://github.com/VLK-STUDIO/morfeo',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
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
              label: 'Getting Started',
              to: '/docs/Introduction/getting-started',
            },
            {
              label: 'Web Extension',
              to: '/docs/Features/web-extension',
            },
            {
              label: 'Theme specification',
              to: '/docs/theme-specification',
            },
            {
              label: 'Packages',
              to: '/docs/Packages/core',
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
              label: 'Slack',
              href: 'https://app.slack.com/client/T0233Q163MF/C022XARRCA0',
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
            {
              label: 'Privacy Policy',
              href: '/privacy',
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
      disableSwitch: true,
    },
    algolia: {
      apiKey: 'ec3249f2a49ea66e665613d20d693336',
      indexName: 'morfeo',
      algoliaOptions: {},
    },
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
      },
    ],
  ],
  plugins: ['@docusaurus/theme-live-codeblock'],
};
