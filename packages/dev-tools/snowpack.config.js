// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration
/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  workspaceRoot: false,
  mount: {
    'src/devtools': {
      url: '/devtools',
    },
    'src/contentScripts': {
      url: '/contentScripts',
    },
    'src/images': {
      url: '/images',
      static: true,
    },
    'src/views': {
      url: '/views',
      static: true,
    },
    'src/backgrounds': {
      url: '/',
    },
    'src/manifest.json': {
      url: '/',
      static: true,
      resolve: false,
    },
    src: {
      url: '/',
    },
  },
  buildOptions: {
    metaUrlPath: 'snowPackModules',
  },
};
