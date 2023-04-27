# Change Log

## 0.9.2

### Patch Changes

- 766be5f: Fixed publish command in order to replace `workspace/*` with the actual version of the package.
- Updated dependencies [766be5f]
  - @morfeo/hooks@0.9.2
  - @morfeo/web@0.9.2

## 0.9.1

### Patch Changes

- 1683b96: Media queries are now generated mobile-frist by default, fixed also the order of the css generated at build time to be sure that media queries are computed in he right way
- Updated dependencies [1683b96]
  - @morfeo/hooks@0.9.1
  - @morfeo/web@0.9.1

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [0.9.0](https://github.com/morfeojs/morfeo/compare/v0.7.0...v0.9.0) (2023-04-16)

### Features

- update @morfeo/react and @morfeo/svelt to support states ([ac79561](https://github.com/morfeojs/morfeo/commit/ac795616c69e0ced1dd0169a6203925685305869))
- version v0.8.0 ([fd2fcb2](https://github.com/morfeojs/morfeo/commit/fd2fcb2778aa1f37ade15570926441a706cb945f))

# [0.8.0](https://github.com/morfeojs/morfeo/compare/v0.7.0...v0.8.0) (2023-01-28)

### Features

- update @morfeo/react and @morfeo/svelt to support states ([ac79561](https://github.com/morfeojs/morfeo/commit/ac795616c69e0ced1dd0169a6203925685305869))

# 0.7.0 (2022-05-30)

### Bug Fixes

- [#136](https://github.com/morfeojs/morfeo/issues/136) ([50ca5e4](https://github.com/morfeojs/morfeo/commit/50ca5e4803ba5335245995e31d09c9273a4a2f16))
- adaptation for last npm version ([95b88bc](https://github.com/morfeojs/morfeo/commit/95b88bcd50d7ed7371ca33e30a93d0f9c59f53f0))
- commonjs export fixed ([bcaca44](https://github.com/morfeojs/morfeo/commit/bcaca44401a0893e4fc576acb994c80256d8525f))
- removed styled-component-web package and fixed tets ([7bccfc0](https://github.com/morfeojs/morfeo/commit/7bccfc066b44cb3184bb0c2851fe502d389406b7))
- used yarn instead of npm ([6d0b777](https://github.com/morfeojs/morfeo/commit/6d0b77715332ab0e3c985538ef5ccb8a90a023f3))

### chore

- [#152](https://github.com/morfeojs/morfeo/issues/152) ([4e249ff](https://github.com/morfeojs/morfeo/commit/4e249ffe196839c56d8334663d3b00d98ca000a2))

### Features

- [#142](https://github.com/morfeojs/morfeo/issues/142) ([52cc477](https://github.com/morfeojs/morfeo/commit/52cc477cec863efdbb8b83b7214895415565d339))
- [#144](https://github.com/morfeojs/morfeo/issues/144) ([16b382a](https://github.com/morfeojs/morfeo/commit/16b382a9bd9eb8bc434569f6f8cb8dd8374833da))
- [#150](https://github.com/morfeojs/morfeo/issues/150) ([33be120](https://github.com/morfeojs/morfeo/commit/33be120e0718ec408ffcc18d20a52240180992db))
- [#158](https://github.com/morfeojs/morfeo/issues/158) upgrade to React 18 ([d02d2a6](https://github.com/morfeojs/morfeo/commit/d02d2a6dd5a8028b9d046fd04fe3e323eba2ae19))
- documentation improvements ([4ad3b5d](https://github.com/morfeojs/morfeo/commit/4ad3b5d7f35cd9c1ad1532e5367dec21594d8ff4))
- licenses updated ([45b042a](https://github.com/morfeojs/morfeo/commit/45b042aec49d17e7a261330b713cc05f6b4355b2))
- **react:** added tests ([135e445](https://github.com/morfeojs/morfeo/commit/135e44536da4cd3996ca6418125fb61ffb76ab1e))
- **react:** Closes [#125](https://github.com/morfeojs/morfeo/issues/125) ([1fa2f95](https://github.com/morfeojs/morfeo/commit/1fa2f95d58e66a09d639b023bd116d6ad6bb64c1))
- **react:** introducing react package ([f99da40](https://github.com/morfeojs/morfeo/commit/f99da40a8b8fe0c440002e1065dbc73f7376f732))
- READMEs updated ([5637cfc](https://github.com/morfeojs/morfeo/commit/5637cfc58bb94ec1d88e4eb28d84e27f17b085df))
- useClassName and useClassNames hooks ([7825ddd](https://github.com/morfeojs/morfeo/commit/7825ddd181eab881c3da6e9bda5b71ab66691884))
- used yarn instead of npm ([217c88f](https://github.com/morfeojs/morfeo/commit/217c88f1392b4e0caa12203f7a0166d4080010e5))
- website link replaced inside readme files ([1e55a6d](https://github.com/morfeojs/morfeo/commit/1e55a6d458d2873d09efd5fad5100cbbae382057))

### BREAKING CHANGES

- @morfeo/core: breaking change the the core api:

1. morfeo.useTheme renamed into morfeo.setCurrentTheme
2. morfeo.getCurrent renamed into morfeo.getCurrentTheme

# [0.6.0](https://github.com/morfeojs/morfeo/compare/v0.0.0...v0.6.0) (2022-05-26)

### Bug Fixes

- removed styled-component-web package and fixed tets ([7bccfc0](https://github.com/morfeojs/morfeo/commit/7bccfc066b44cb3184bb0c2851fe502d389406b7))

### Features

- [#158](https://github.com/morfeojs/morfeo/issues/158) upgrade to React 18 ([d02d2a6](https://github.com/morfeojs/morfeo/commit/d02d2a6dd5a8028b9d046fd04fe3e323eba2ae19))

## 0.5.1 (2022-04-30)

### Bug Fixes

- [#136](https://github.com/morfeojs/morfeo/issues/136) ([50ca5e4](https://github.com/morfeojs/morfeo/commit/50ca5e4803ba5335245995e31d09c9273a4a2f16))
- adaptation for last npm version ([95b88bc](https://github.com/morfeojs/morfeo/commit/95b88bcd50d7ed7371ca33e30a93d0f9c59f53f0))
- commonjs export fixed ([bcaca44](https://github.com/morfeojs/morfeo/commit/bcaca44401a0893e4fc576acb994c80256d8525f))
- used yarn instead of npm ([6d0b777](https://github.com/morfeojs/morfeo/commit/6d0b77715332ab0e3c985538ef5ccb8a90a023f3))

### chore

- [#152](https://github.com/morfeojs/morfeo/issues/152) ([4e249ff](https://github.com/morfeojs/morfeo/commit/4e249ffe196839c56d8334663d3b00d98ca000a2))

### Features

- [#142](https://github.com/morfeojs/morfeo/issues/142) ([52cc477](https://github.com/morfeojs/morfeo/commit/52cc477cec863efdbb8b83b7214895415565d339))
- [#144](https://github.com/morfeojs/morfeo/issues/144) ([16b382a](https://github.com/morfeojs/morfeo/commit/16b382a9bd9eb8bc434569f6f8cb8dd8374833da))
- [#150](https://github.com/morfeojs/morfeo/issues/150) ([33be120](https://github.com/morfeojs/morfeo/commit/33be120e0718ec408ffcc18d20a52240180992db))
- documentation improvements ([4ad3b5d](https://github.com/morfeojs/morfeo/commit/4ad3b5d7f35cd9c1ad1532e5367dec21594d8ff4))
- licenses updated ([45b042a](https://github.com/morfeojs/morfeo/commit/45b042aec49d17e7a261330b713cc05f6b4355b2))
- **react:** added tests ([135e445](https://github.com/morfeojs/morfeo/commit/135e44536da4cd3996ca6418125fb61ffb76ab1e))
- **react:** Closes [#125](https://github.com/morfeojs/morfeo/issues/125) ([1fa2f95](https://github.com/morfeojs/morfeo/commit/1fa2f95d58e66a09d639b023bd116d6ad6bb64c1))
- **react:** introducing react package ([f99da40](https://github.com/morfeojs/morfeo/commit/f99da40a8b8fe0c440002e1065dbc73f7376f732))
- READMEs updated ([5637cfc](https://github.com/morfeojs/morfeo/commit/5637cfc58bb94ec1d88e4eb28d84e27f17b085df))
- useClassName and useClassNames hooks ([7825ddd](https://github.com/morfeojs/morfeo/commit/7825ddd181eab881c3da6e9bda5b71ab66691884))
- used yarn instead of npm ([217c88f](https://github.com/morfeojs/morfeo/commit/217c88f1392b4e0caa12203f7a0166d4080010e5))
- website link replaced inside readme files ([1e55a6d](https://github.com/morfeojs/morfeo/commit/1e55a6d458d2873d09efd5fad5100cbbae382057))

### BREAKING CHANGES

- @morfeo/core: breaking change the the core api:

1. morfeo.useTheme renamed into morfeo.setCurrentTheme
2. morfeo.getCurrent renamed into morfeo.getCurrentTheme

# 0.5.0 (2022-02-13)

### Bug Fixes

- [#136](https://github.com/morfeojs/morfeo/issues/136) ([50ca5e4](https://github.com/morfeojs/morfeo/commit/50ca5e4803ba5335245995e31d09c9273a4a2f16))
- adaptation for last npm version ([95b88bc](https://github.com/morfeojs/morfeo/commit/95b88bcd50d7ed7371ca33e30a93d0f9c59f53f0))
- commonjs export fixed ([bcaca44](https://github.com/morfeojs/morfeo/commit/bcaca44401a0893e4fc576acb994c80256d8525f))
- used yarn instead of npm ([6d0b777](https://github.com/morfeojs/morfeo/commit/6d0b77715332ab0e3c985538ef5ccb8a90a023f3))

### Features

- [#142](https://github.com/morfeojs/morfeo/issues/142) ([52cc477](https://github.com/morfeojs/morfeo/commit/52cc477cec863efdbb8b83b7214895415565d339))
- [#144](https://github.com/morfeojs/morfeo/issues/144) ([16b382a](https://github.com/morfeojs/morfeo/commit/16b382a9bd9eb8bc434569f6f8cb8dd8374833da))
- [#150](https://github.com/morfeojs/morfeo/issues/150) ([33be120](https://github.com/morfeojs/morfeo/commit/33be120e0718ec408ffcc18d20a52240180992db))
- documentation improvements ([4ad3b5d](https://github.com/morfeojs/morfeo/commit/4ad3b5d7f35cd9c1ad1532e5367dec21594d8ff4))
- licenses updated ([45b042a](https://github.com/morfeojs/morfeo/commit/45b042aec49d17e7a261330b713cc05f6b4355b2))
- **react:** added tests ([135e445](https://github.com/morfeojs/morfeo/commit/135e44536da4cd3996ca6418125fb61ffb76ab1e))
- **react:** Closes [#125](https://github.com/morfeojs/morfeo/issues/125) ([1fa2f95](https://github.com/morfeojs/morfeo/commit/1fa2f95d58e66a09d639b023bd116d6ad6bb64c1))
- **react:** introducing react package ([f99da40](https://github.com/morfeojs/morfeo/commit/f99da40a8b8fe0c440002e1065dbc73f7376f732))
- READMEs updated ([5637cfc](https://github.com/morfeojs/morfeo/commit/5637cfc58bb94ec1d88e4eb28d84e27f17b085df))
- useClassName and useClassNames hooks ([7825ddd](https://github.com/morfeojs/morfeo/commit/7825ddd181eab881c3da6e9bda5b71ab66691884))
- used yarn instead of npm ([217c88f](https://github.com/morfeojs/morfeo/commit/217c88f1392b4e0caa12203f7a0166d4080010e5))
- website link replaced inside readme files ([1e55a6d](https://github.com/morfeojs/morfeo/commit/1e55a6d458d2873d09efd5fad5100cbbae382057))

## 0.4.2 (2021-11-18)

### Bug Fixes

- commonjs export fixed ([bcaca44](https://github.com/VLK-STUDIO/morfeo/commit/bcaca44401a0893e4fc576acb994c80256d8525f))

### Features

- **react:** added tests ([135e445](https://github.com/VLK-STUDIO/morfeo/commit/135e44536da4cd3996ca6418125fb61ffb76ab1e))
- **react:** Closes [#125](https://github.com/VLK-STUDIO/morfeo/issues/125) ([1fa2f95](https://github.com/VLK-STUDIO/morfeo/commit/1fa2f95d58e66a09d639b023bd116d6ad6bb64c1))
- documentation improvements ([4ad3b5d](https://github.com/VLK-STUDIO/morfeo/commit/4ad3b5d7f35cd9c1ad1532e5367dec21594d8ff4))
- useClassName and useClassNames hooks ([7825ddd](https://github.com/VLK-STUDIO/morfeo/commit/7825ddd181eab881c3da6e9bda5b71ab66691884))
- website link replaced inside readme files ([1e55a6d](https://github.com/VLK-STUDIO/morfeo/commit/1e55a6d458d2873d09efd5fad5100cbbae382057))
- **react:** introducing react package ([f99da40](https://github.com/VLK-STUDIO/morfeo/commit/f99da40a8b8fe0c440002e1065dbc73f7376f732))

## 0.4.1 (2021-11-18)

### Bug Fixes

- commonjs export fixed ([bcaca44](https://github.com/VLK-STUDIO/morfeo/commit/bcaca44401a0893e4fc576acb994c80256d8525f))

### Features

- **react:** added tests ([135e445](https://github.com/VLK-STUDIO/morfeo/commit/135e44536da4cd3996ca6418125fb61ffb76ab1e))
- **react:** Closes [#125](https://github.com/VLK-STUDIO/morfeo/issues/125) ([1fa2f95](https://github.com/VLK-STUDIO/morfeo/commit/1fa2f95d58e66a09d639b023bd116d6ad6bb64c1))
- documentation improvements ([4ad3b5d](https://github.com/VLK-STUDIO/morfeo/commit/4ad3b5d7f35cd9c1ad1532e5367dec21594d8ff4))
- useClassName and useClassNames hooks ([7825ddd](https://github.com/VLK-STUDIO/morfeo/commit/7825ddd181eab881c3da6e9bda5b71ab66691884))
- website link replaced inside readme files ([1e55a6d](https://github.com/VLK-STUDIO/morfeo/commit/1e55a6d458d2873d09efd5fad5100cbbae382057))
- **react:** introducing react package ([f99da40](https://github.com/VLK-STUDIO/morfeo/commit/f99da40a8b8fe0c440002e1065dbc73f7376f732))

# 0.4.0 (2021-11-18)

### Features

- **react:** added tests ([135e445](https://github.com/VLK-STUDIO/morfeo/commit/135e44536da4cd3996ca6418125fb61ffb76ab1e))
- **react:** Closes [#125](https://github.com/VLK-STUDIO/morfeo/issues/125) ([1fa2f95](https://github.com/VLK-STUDIO/morfeo/commit/1fa2f95d58e66a09d639b023bd116d6ad6bb64c1))
- documentation improvements ([4ad3b5d](https://github.com/VLK-STUDIO/morfeo/commit/4ad3b5d7f35cd9c1ad1532e5367dec21594d8ff4))
- useClassName and useClassNames hooks ([7825ddd](https://github.com/VLK-STUDIO/morfeo/commit/7825ddd181eab881c3da6e9bda5b71ab66691884))
- website link replaced inside readme files ([1e55a6d](https://github.com/VLK-STUDIO/morfeo/commit/1e55a6d458d2873d09efd5fad5100cbbae382057))
- **react:** introducing react package ([f99da40](https://github.com/VLK-STUDIO/morfeo/commit/f99da40a8b8fe0c440002e1065dbc73f7376f732))

## 0.3.2 (2021-11-04)

### Features

- **react:** added tests ([135e445](https://github.com/VLK-STUDIO/morfeo/commit/135e44536da4cd3996ca6418125fb61ffb76ab1e))
- documentation improvements ([4ad3b5d](https://github.com/VLK-STUDIO/morfeo/commit/4ad3b5d7f35cd9c1ad1532e5367dec21594d8ff4))
- useClassName and useClassNames hooks ([7825ddd](https://github.com/VLK-STUDIO/morfeo/commit/7825ddd181eab881c3da6e9bda5b71ab66691884))
- website link replaced inside readme files ([1e55a6d](https://github.com/VLK-STUDIO/morfeo/commit/1e55a6d458d2873d09efd5fad5100cbbae382057))
- **react:** introducing react package ([f99da40](https://github.com/VLK-STUDIO/morfeo/commit/f99da40a8b8fe0c440002e1065dbc73f7376f732))

## 0.3.1 (2021-11-04)

### Features

- **react:** added tests ([135e445](https://github.com/VLK-STUDIO/morfeo/commit/135e44536da4cd3996ca6418125fb61ffb76ab1e))
- documentation improvements ([4ad3b5d](https://github.com/VLK-STUDIO/morfeo/commit/4ad3b5d7f35cd9c1ad1532e5367dec21594d8ff4))
- useClassName and useClassNames hooks ([7825ddd](https://github.com/VLK-STUDIO/morfeo/commit/7825ddd181eab881c3da6e9bda5b71ab66691884))
- website link replaced inside readme files ([1e55a6d](https://github.com/VLK-STUDIO/morfeo/commit/1e55a6d458d2873d09efd5fad5100cbbae382057))
- **react:** introducing react package ([f99da40](https://github.com/VLK-STUDIO/morfeo/commit/f99da40a8b8fe0c440002e1065dbc73f7376f732))

# 0.3.0 (2021-10-30)

### Features

- **react:** added tests ([135e445](https://github.com/VLK-STUDIO/morfeo/commit/135e44536da4cd3996ca6418125fb61ffb76ab1e))
- documentation improvements ([4ad3b5d](https://github.com/VLK-STUDIO/morfeo/commit/4ad3b5d7f35cd9c1ad1532e5367dec21594d8ff4))
- useClassName and useClassNames hooks ([7825ddd](https://github.com/VLK-STUDIO/morfeo/commit/7825ddd181eab881c3da6e9bda5b71ab66691884))
- website link replaced inside readme files ([1e55a6d](https://github.com/VLK-STUDIO/morfeo/commit/1e55a6d458d2873d09efd5fad5100cbbae382057))
- **react:** introducing react package ([f99da40](https://github.com/VLK-STUDIO/morfeo/commit/f99da40a8b8fe0c440002e1065dbc73f7376f732))

# 0.2.0 (2021-08-08)

### Features

- documentation improvements ([4ad3b5d](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/react/commit/4ad3b5d7f35cd9c1ad1532e5367dec21594d8ff4))
- website link replaced inside readme files ([1e55a6d](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/react/commit/1e55a6d458d2873d09efd5fad5100cbbae382057))
- **react:** introducing react package ([f99da40](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/react/commit/f99da40a8b8fe0c440002e1065dbc73f7376f732))

## 0.1.8 (2021-07-19)

### Features

- documentation improvements ([4ad3b5d](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/react/commit/4ad3b5d7f35cd9c1ad1532e5367dec21594d8ff4))
- website link replaced inside readme files ([1e55a6d](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/react/commit/1e55a6d458d2873d09efd5fad5100cbbae382057))
- **react:** introducing react package ([f99da40](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/react/commit/f99da40a8b8fe0c440002e1065dbc73f7376f732))

## 0.1.7 (2021-07-14)

### Features

- documentation improvements ([4ad3b5d](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/react/commit/4ad3b5d7f35cd9c1ad1532e5367dec21594d8ff4))
- website link replaced inside readme files ([1e55a6d](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/react/commit/1e55a6d458d2873d09efd5fad5100cbbae382057))
- **react:** introducing react package ([f99da40](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/react/commit/f99da40a8b8fe0c440002e1065dbc73f7376f732))

## 0.1.6 (2021-06-27)

### Features

- website link replaced inside readme files ([1e55a6d](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/react/commit/1e55a6d458d2873d09efd5fad5100cbbae382057))
- **react:** introducing react package ([f99da40](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/react/commit/f99da40a8b8fe0c440002e1065dbc73f7376f732))

## 0.1.5 (2021-05-23)

### Features

- **react:** introducing react package ([f99da40](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/f99da40a8b8fe0c440002e1065dbc73f7376f732))
