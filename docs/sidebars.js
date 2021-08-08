module.exports = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      collapsed: false,
      items: [
        'Introduction/getting-started',
        'Introduction/motivations',
        'Introduction/advantages',
        'Introduction/base-api',
      ],
    },
    {
      type: 'doc',
      label: 'Theme Specification',
      id: 'theme-specification',
    },
    {
      type: 'category',
      label: 'Features',
      collapsed: false,
      items: [
        'Features/framework-agnostic',
        'Features/single-source-of-truth',
        'Features/multi-theming',
        'Features/dev-tool',
        'Features/morfeo-cli',
        'Features/extendible',
        'Features/easy-to-test',
      ],
    },
  ],
  packagesSidebar: [
    {
      type: 'category',
      label: 'Packages',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'Packages/preset-default',
          label: '📦 @morfeo/preset-default',
        },
        {
          type: 'doc',
          id: 'Packages/core',
          label: '📦 @morfeo/core',
        },
        {
          type: 'doc',
          id: 'Packages/web',
          label: '📦 @morfeo/web',
        },
        {
          type: 'doc',
          id: 'Packages/cli',
          label: '📦 @morfeo/cli',
        },
        {
          type: 'doc',
          id: 'Packages/react',
          label: '📦 @morfeo/react',
        },
        {
          type: 'doc',
          id: 'Packages/hooks',
          label: '📦 @morfeo/hooks',
        },
        {
          type: 'doc',
          id: 'Packages/native',
          label: '📦 @morfeo/native',
        },
        {
          type: 'doc',
          id: 'Packages/svelte',
          label: '📦 @morfeo/svelte',
        },
        {
          type: 'doc',
          id: 'Packages/styled-components',
          label: '📦 @morfeo/styled-components-web',
        },
        {
          type: 'doc',
          id: 'Packages/fonts',
          label: '📦 @morfeo/fonts',
        },
        {
          type: 'doc',
          id: 'Packages/jss',
          label: '📦 @morfeo/jss',
        },
      ],
    },
  ],
};
