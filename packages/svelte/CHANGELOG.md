# Change Log

## 0.9.2

### Patch Changes

- 766be5f: Fixed publish command in order to replace `workspace/*` with the actual version of the package.
- Updated dependencies [766be5f]
  - @morfeo/jss@0.9.2
  - @morfeo/web@0.9.2

## 0.9.1

### Patch Changes

- 1683b96: Media queries are now generated mobile-frist by default, fixed also the order of the css generated at build time to be sure that media queries are computed in he right way
- Updated dependencies [1683b96]
  - @morfeo/jss@0.9.1
  - @morfeo/web@0.9.1

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [0.9.0](https://github.com/morfeojs/morfeo/compare/v0.7.0...v0.9.0) (2023-04-16)

### Bug Fixes

- linting ([da733f3](https://github.com/morfeojs/morfeo/commit/da733f3172d676972306e16283818c2e2f08bbdb))
- linting ([30b00c5](https://github.com/morfeojs/morfeo/commit/30b00c5de2643e54ae83e12b5ee58b7a30ef65eb))
- restore fallback on getElementName ([1f1ce8d](https://github.com/morfeojs/morfeo/commit/1f1ce8d74977b9851855465a5fe31c8230e3a333))

### Features

- update @morfeo/react and @morfeo/svelt to support states ([ac79561](https://github.com/morfeojs/morfeo/commit/ac795616c69e0ced1dd0169a6203925685305869))
- version v0.8.0 ([fd2fcb2](https://github.com/morfeojs/morfeo/commit/fd2fcb2778aa1f37ade15570926441a706cb945f))

# [0.8.0](https://github.com/morfeojs/morfeo/compare/v0.7.0...v0.8.0) (2023-01-28)

### Bug Fixes

- linting ([da733f3](https://github.com/morfeojs/morfeo/commit/da733f3172d676972306e16283818c2e2f08bbdb))
- linting ([30b00c5](https://github.com/morfeojs/morfeo/commit/30b00c5de2643e54ae83e12b5ee58b7a30ef65eb))
- restore fallback on getElementName ([1f1ce8d](https://github.com/morfeojs/morfeo/commit/1f1ce8d74977b9851855465a5fe31c8230e3a333))

### Features

- update @morfeo/react and @morfeo/svelt to support states ([ac79561](https://github.com/morfeojs/morfeo/commit/ac795616c69e0ced1dd0169a6203925685305869))

# 0.7.0 (2022-05-30)

### Bug Fixes

- [#136](https://github.com/morfeojs/morfeo/issues/136) ([50ca5e4](https://github.com/morfeojs/morfeo/commit/50ca5e4803ba5335245995e31d09c9273a4a2f16))
- prettier ([6dfc59e](https://github.com/morfeojs/morfeo/commit/6dfc59edbd66e64229fbec377a231ae696b8c170))
- readme files fix and licenses added ([c71286a](https://github.com/morfeojs/morfeo/commit/c71286acf948e65eacb5e0ac808cc9425d576351))
- removed styled-component-web package and fixed tets ([7bccfc0](https://github.com/morfeojs/morfeo/commit/7bccfc066b44cb3184bb0c2851fe502d389406b7))

### chore

- [#152](https://github.com/morfeojs/morfeo/issues/152) ([4e249ff](https://github.com/morfeojs/morfeo/commit/4e249ffe196839c56d8334663d3b00d98ca000a2))

### Features

- [#131](https://github.com/morfeojs/morfeo/issues/131) ([1bf617c](https://github.com/morfeojs/morfeo/commit/1bf617cf6eef327b61a98982780a9f2cef37e9cb))
- [#150](https://github.com/morfeojs/morfeo/issues/150) ([33be120](https://github.com/morfeojs/morfeo/commit/33be120e0718ec408ffcc18d20a52240180992db))
- add theme removal ([fb20b50](https://github.com/morfeojs/morfeo/commit/fb20b501e877e2137831f9e86629e213007b88b7))
- added pwa plugin to documentation website ([1808781](https://github.com/morfeojs/morfeo/commit/1808781f20f0c41f6d4a965eb5bad522caf9e56a))
- closes [#65](https://github.com/morfeojs/morfeo/issues/65) ([bbf6e32](https://github.com/morfeojs/morfeo/commit/bbf6e32f62c32af51d1795bbbc85c9772948cfdf))
- documentation improvements ([4ad3b5d](https://github.com/morfeojs/morfeo/commit/4ad3b5d7f35cd9c1ad1532e5367dec21594d8ff4))
- introucing svelte package and sandbox ([0e8e9e2](https://github.com/morfeojs/morfeo/commit/0e8e9e22f38576730c73442714c1a611847d9bc7))
- licenses updated ([45b042a](https://github.com/morfeojs/morfeo/commit/45b042aec49d17e7a261330b713cc05f6b4355b2))
- readme files added to all the packages ([819e60b](https://github.com/morfeojs/morfeo/commit/819e60bb536be471f373c8d3f7cbd5b331c1434c))
- READMEs updated ([5637cfc](https://github.com/morfeojs/morfeo/commit/5637cfc58bb94ec1d88e4eb28d84e27f17b085df))
- **svelte:** added support to default properties, docs and tests ([a734021](https://github.com/morfeojs/morfeo/commit/a73402130efa829bee3d8c5a72b636ca445148bc))
- update callback to jss function ([6218907](https://github.com/morfeojs/morfeo/commit/62189076da38078df33796fb16576b13ecdeeb85))
- website link replaced inside readme files ([1e55a6d](https://github.com/morfeojs/morfeo/commit/1e55a6d458d2873d09efd5fad5100cbbae382057))

### BREAKING CHANGES

- @morfeo/core: breaking change the the core api:

1. morfeo.useTheme renamed into morfeo.setCurrentTheme
2. morfeo.getCurrent renamed into morfeo.getCurrentTheme

# [0.6.0](https://github.com/morfeojs/morfeo/compare/v0.0.0...v0.6.0) (2022-05-26)

### Bug Fixes

- removed styled-component-web package and fixed tets ([7bccfc0](https://github.com/morfeojs/morfeo/commit/7bccfc066b44cb3184bb0c2851fe502d389406b7))

## 0.5.1 (2022-04-30)

### Bug Fixes

- [#136](https://github.com/morfeojs/morfeo/issues/136) ([50ca5e4](https://github.com/morfeojs/morfeo/commit/50ca5e4803ba5335245995e31d09c9273a4a2f16))
- prettier ([6dfc59e](https://github.com/morfeojs/morfeo/commit/6dfc59edbd66e64229fbec377a231ae696b8c170))
- readme files fix and licenses added ([c71286a](https://github.com/morfeojs/morfeo/commit/c71286acf948e65eacb5e0ac808cc9425d576351))

### chore

- [#152](https://github.com/morfeojs/morfeo/issues/152) ([4e249ff](https://github.com/morfeojs/morfeo/commit/4e249ffe196839c56d8334663d3b00d98ca000a2))

### Features

- [#131](https://github.com/morfeojs/morfeo/issues/131) ([1bf617c](https://github.com/morfeojs/morfeo/commit/1bf617cf6eef327b61a98982780a9f2cef37e9cb))
- [#150](https://github.com/morfeojs/morfeo/issues/150) ([33be120](https://github.com/morfeojs/morfeo/commit/33be120e0718ec408ffcc18d20a52240180992db))
- add theme removal ([fb20b50](https://github.com/morfeojs/morfeo/commit/fb20b501e877e2137831f9e86629e213007b88b7))
- added pwa plugin to documentation website ([1808781](https://github.com/morfeojs/morfeo/commit/1808781f20f0c41f6d4a965eb5bad522caf9e56a))
- closes [#65](https://github.com/morfeojs/morfeo/issues/65) ([bbf6e32](https://github.com/morfeojs/morfeo/commit/bbf6e32f62c32af51d1795bbbc85c9772948cfdf))
- documentation improvements ([4ad3b5d](https://github.com/morfeojs/morfeo/commit/4ad3b5d7f35cd9c1ad1532e5367dec21594d8ff4))
- introucing svelte package and sandbox ([0e8e9e2](https://github.com/morfeojs/morfeo/commit/0e8e9e22f38576730c73442714c1a611847d9bc7))
- licenses updated ([45b042a](https://github.com/morfeojs/morfeo/commit/45b042aec49d17e7a261330b713cc05f6b4355b2))
- readme files added to all the packages ([819e60b](https://github.com/morfeojs/morfeo/commit/819e60bb536be471f373c8d3f7cbd5b331c1434c))
- READMEs updated ([5637cfc](https://github.com/morfeojs/morfeo/commit/5637cfc58bb94ec1d88e4eb28d84e27f17b085df))
- **svelte:** added support to default properties, docs and tests ([a734021](https://github.com/morfeojs/morfeo/commit/a73402130efa829bee3d8c5a72b636ca445148bc))
- update callback to jss function ([6218907](https://github.com/morfeojs/morfeo/commit/62189076da38078df33796fb16576b13ecdeeb85))
- website link replaced inside readme files ([1e55a6d](https://github.com/morfeojs/morfeo/commit/1e55a6d458d2873d09efd5fad5100cbbae382057))

### BREAKING CHANGES

- @morfeo/core: breaking change the the core api:

1. morfeo.useTheme renamed into morfeo.setCurrentTheme
2. morfeo.getCurrent renamed into morfeo.getCurrentTheme

# 0.5.0 (2022-02-13)

### Bug Fixes

- [#136](https://github.com/morfeojs/morfeo/issues/136) ([50ca5e4](https://github.com/morfeojs/morfeo/commit/50ca5e4803ba5335245995e31d09c9273a4a2f16))
- prettier ([6dfc59e](https://github.com/morfeojs/morfeo/commit/6dfc59edbd66e64229fbec377a231ae696b8c170))
- readme files fix and licenses added ([c71286a](https://github.com/morfeojs/morfeo/commit/c71286acf948e65eacb5e0ac808cc9425d576351))

### Features

- [#150](https://github.com/morfeojs/morfeo/issues/150) ([33be120](https://github.com/morfeojs/morfeo/commit/33be120e0718ec408ffcc18d20a52240180992db))
- add theme removal ([fb20b50](https://github.com/morfeojs/morfeo/commit/fb20b501e877e2137831f9e86629e213007b88b7))
- added pwa plugin to documentation website ([1808781](https://github.com/morfeojs/morfeo/commit/1808781f20f0c41f6d4a965eb5bad522caf9e56a))
- closes [#65](https://github.com/morfeojs/morfeo/issues/65) ([bbf6e32](https://github.com/morfeojs/morfeo/commit/bbf6e32f62c32af51d1795bbbc85c9772948cfdf))
- documentation improvements ([4ad3b5d](https://github.com/morfeojs/morfeo/commit/4ad3b5d7f35cd9c1ad1532e5367dec21594d8ff4))
- introucing svelte package and sandbox ([0e8e9e2](https://github.com/morfeojs/morfeo/commit/0e8e9e22f38576730c73442714c1a611847d9bc7))
- licenses updated ([45b042a](https://github.com/morfeojs/morfeo/commit/45b042aec49d17e7a261330b713cc05f6b4355b2))
- readme files added to all the packages ([819e60b](https://github.com/morfeojs/morfeo/commit/819e60bb536be471f373c8d3f7cbd5b331c1434c))
- READMEs updated ([5637cfc](https://github.com/morfeojs/morfeo/commit/5637cfc58bb94ec1d88e4eb28d84e27f17b085df))
- **svelte:** added support to default properties, docs and tests ([a734021](https://github.com/morfeojs/morfeo/commit/a73402130efa829bee3d8c5a72b636ca445148bc))
- update callback to jss function ([6218907](https://github.com/morfeojs/morfeo/commit/62189076da38078df33796fb16576b13ecdeeb85))
- website link replaced inside readme files ([1e55a6d](https://github.com/morfeojs/morfeo/commit/1e55a6d458d2873d09efd5fad5100cbbae382057))

## 0.4.2 (2021-11-18)

### Bug Fixes

- prettier ([6dfc59e](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/6dfc59edbd66e64229fbec377a231ae696b8c170))
- readme files fix and licenses added ([c71286a](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/c71286acf948e65eacb5e0ac808cc9425d576351))

### Features

- add theme removal ([fb20b50](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/fb20b501e877e2137831f9e86629e213007b88b7))
- added pwa plugin to documentation website ([1808781](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/1808781f20f0c41f6d4a965eb5bad522caf9e56a))
- closes [#65](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/issues/65) ([bbf6e32](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/bbf6e32f62c32af51d1795bbbc85c9772948cfdf))
- documentation improvements ([4ad3b5d](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/4ad3b5d7f35cd9c1ad1532e5367dec21594d8ff4))
- introucing svelte package and sandbox ([0e8e9e2](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/0e8e9e22f38576730c73442714c1a611847d9bc7))
- website link replaced inside readme files ([1e55a6d](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/1e55a6d458d2873d09efd5fad5100cbbae382057))
- **svelte:** added support to default properties, docs and tests ([a734021](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/a73402130efa829bee3d8c5a72b636ca445148bc))
- readme files added to all the packages ([819e60b](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/819e60bb536be471f373c8d3f7cbd5b331c1434c))
- update callback to jss function ([6218907](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/62189076da38078df33796fb16576b13ecdeeb85))

## 0.4.1 (2021-11-18)

### Bug Fixes

- prettier ([6dfc59e](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/6dfc59edbd66e64229fbec377a231ae696b8c170))
- readme files fix and licenses added ([c71286a](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/c71286acf948e65eacb5e0ac808cc9425d576351))

### Features

- add theme removal ([fb20b50](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/fb20b501e877e2137831f9e86629e213007b88b7))
- added pwa plugin to documentation website ([1808781](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/1808781f20f0c41f6d4a965eb5bad522caf9e56a))
- closes [#65](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/issues/65) ([bbf6e32](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/bbf6e32f62c32af51d1795bbbc85c9772948cfdf))
- documentation improvements ([4ad3b5d](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/4ad3b5d7f35cd9c1ad1532e5367dec21594d8ff4))
- introucing svelte package and sandbox ([0e8e9e2](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/0e8e9e22f38576730c73442714c1a611847d9bc7))
- website link replaced inside readme files ([1e55a6d](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/1e55a6d458d2873d09efd5fad5100cbbae382057))
- **svelte:** added support to default properties, docs and tests ([a734021](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/a73402130efa829bee3d8c5a72b636ca445148bc))
- readme files added to all the packages ([819e60b](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/819e60bb536be471f373c8d3f7cbd5b331c1434c))
- update callback to jss function ([6218907](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/62189076da38078df33796fb16576b13ecdeeb85))

# 0.4.0 (2021-11-18)

### Bug Fixes

- prettier ([6dfc59e](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/6dfc59edbd66e64229fbec377a231ae696b8c170))
- readme files fix and licenses added ([c71286a](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/c71286acf948e65eacb5e0ac808cc9425d576351))

### Features

- add theme removal ([fb20b50](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/fb20b501e877e2137831f9e86629e213007b88b7))
- added pwa plugin to documentation website ([1808781](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/1808781f20f0c41f6d4a965eb5bad522caf9e56a))
- closes [#65](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/issues/65) ([bbf6e32](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/bbf6e32f62c32af51d1795bbbc85c9772948cfdf))
- documentation improvements ([4ad3b5d](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/4ad3b5d7f35cd9c1ad1532e5367dec21594d8ff4))
- introucing svelte package and sandbox ([0e8e9e2](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/0e8e9e22f38576730c73442714c1a611847d9bc7))
- website link replaced inside readme files ([1e55a6d](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/1e55a6d458d2873d09efd5fad5100cbbae382057))
- **svelte:** added support to default properties, docs and tests ([a734021](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/a73402130efa829bee3d8c5a72b636ca445148bc))
- readme files added to all the packages ([819e60b](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/819e60bb536be471f373c8d3f7cbd5b331c1434c))
- update callback to jss function ([6218907](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/62189076da38078df33796fb16576b13ecdeeb85))

## 0.3.2 (2021-11-04)

### Bug Fixes

- readme files fix and licenses added ([c71286a](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/c71286acf948e65eacb5e0ac808cc9425d576351))

### Features

- add theme removal ([fb20b50](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/fb20b501e877e2137831f9e86629e213007b88b7))
- added pwa plugin to documentation website ([1808781](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/1808781f20f0c41f6d4a965eb5bad522caf9e56a))
- closes [#65](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/issues/65) ([bbf6e32](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/bbf6e32f62c32af51d1795bbbc85c9772948cfdf))
- documentation improvements ([4ad3b5d](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/4ad3b5d7f35cd9c1ad1532e5367dec21594d8ff4))
- introucing svelte package and sandbox ([0e8e9e2](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/0e8e9e22f38576730c73442714c1a611847d9bc7))
- website link replaced inside readme files ([1e55a6d](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/1e55a6d458d2873d09efd5fad5100cbbae382057))
- **svelte:** added support to default properties, docs and tests ([a734021](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/a73402130efa829bee3d8c5a72b636ca445148bc))
- readme files added to all the packages ([819e60b](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/819e60bb536be471f373c8d3f7cbd5b331c1434c))
- update callback to jss function ([6218907](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/62189076da38078df33796fb16576b13ecdeeb85))

## 0.3.1 (2021-11-04)

### Bug Fixes

- readme files fix and licenses added ([c71286a](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/c71286acf948e65eacb5e0ac808cc9425d576351))

### Features

- add theme removal ([fb20b50](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/fb20b501e877e2137831f9e86629e213007b88b7))
- added pwa plugin to documentation website ([1808781](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/1808781f20f0c41f6d4a965eb5bad522caf9e56a))
- closes [#65](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/issues/65) ([bbf6e32](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/bbf6e32f62c32af51d1795bbbc85c9772948cfdf))
- documentation improvements ([4ad3b5d](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/4ad3b5d7f35cd9c1ad1532e5367dec21594d8ff4))
- introucing svelte package and sandbox ([0e8e9e2](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/0e8e9e22f38576730c73442714c1a611847d9bc7))
- website link replaced inside readme files ([1e55a6d](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/1e55a6d458d2873d09efd5fad5100cbbae382057))
- **svelte:** added support to default properties, docs and tests ([a734021](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/a73402130efa829bee3d8c5a72b636ca445148bc))
- readme files added to all the packages ([819e60b](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/819e60bb536be471f373c8d3f7cbd5b331c1434c))
- update callback to jss function ([6218907](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/62189076da38078df33796fb16576b13ecdeeb85))

# 0.3.0 (2021-10-30)

### Bug Fixes

- readme files fix and licenses added ([c71286a](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/c71286acf948e65eacb5e0ac808cc9425d576351))

### Features

- add theme removal ([fb20b50](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/fb20b501e877e2137831f9e86629e213007b88b7))
- closes [#65](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/issues/65) ([bbf6e32](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/bbf6e32f62c32af51d1795bbbc85c9772948cfdf))
- documentation improvements ([4ad3b5d](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/4ad3b5d7f35cd9c1ad1532e5367dec21594d8ff4))
- introucing svelte package and sandbox ([0e8e9e2](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/0e8e9e22f38576730c73442714c1a611847d9bc7))
- website link replaced inside readme files ([1e55a6d](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/1e55a6d458d2873d09efd5fad5100cbbae382057))
- **svelte:** added support to default properties, docs and tests ([a734021](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/a73402130efa829bee3d8c5a72b636ca445148bc))
- readme files added to all the packages ([819e60b](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/819e60bb536be471f373c8d3f7cbd5b331c1434c))
- update callback to jss function ([6218907](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/62189076da38078df33796fb16576b13ecdeeb85))

# 0.2.0 (2021-08-08)

### Bug Fixes

- readme files fix and licenses added ([c71286a](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/c71286acf948e65eacb5e0ac808cc9425d576351))

### Features

- add theme removal ([fb20b50](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/fb20b501e877e2137831f9e86629e213007b88b7))
- closes [#65](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/issues/65) ([bbf6e32](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/bbf6e32f62c32af51d1795bbbc85c9772948cfdf))
- documentation improvements ([4ad3b5d](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/4ad3b5d7f35cd9c1ad1532e5367dec21594d8ff4))
- introucing svelte package and sandbox ([0e8e9e2](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/0e8e9e22f38576730c73442714c1a611847d9bc7))
- website link replaced inside readme files ([1e55a6d](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/1e55a6d458d2873d09efd5fad5100cbbae382057))
- **svelte:** added support to default properties, docs and tests ([a734021](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/a73402130efa829bee3d8c5a72b636ca445148bc))
- readme files added to all the packages ([819e60b](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/819e60bb536be471f373c8d3f7cbd5b331c1434c))
- update callback to jss function ([6218907](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/62189076da38078df33796fb16576b13ecdeeb85))

## 0.1.8 (2021-07-19)

### Bug Fixes

- readme files fix and licenses added ([c71286a](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/c71286acf948e65eacb5e0ac808cc9425d576351))

### Features

- documentation improvements ([4ad3b5d](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/4ad3b5d7f35cd9c1ad1532e5367dec21594d8ff4))
- website link replaced inside readme files ([1e55a6d](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/1e55a6d458d2873d09efd5fad5100cbbae382057))
- **svelte:** added support to default properties, docs and tests ([a734021](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/a73402130efa829bee3d8c5a72b636ca445148bc))
- introucing svelte package and sandbox ([0e8e9e2](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/0e8e9e22f38576730c73442714c1a611847d9bc7))
- readme files added to all the packages ([819e60b](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/819e60bb536be471f373c8d3f7cbd5b331c1434c))
- update callback to jss function ([6218907](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/62189076da38078df33796fb16576b13ecdeeb85))

## 0.1.7 (2021-07-14)

### Bug Fixes

- readme files fix and licenses added ([c71286a](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/c71286acf948e65eacb5e0ac808cc9425d576351))

### Features

- documentation improvements ([4ad3b5d](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/4ad3b5d7f35cd9c1ad1532e5367dec21594d8ff4))
- website link replaced inside readme files ([1e55a6d](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/1e55a6d458d2873d09efd5fad5100cbbae382057))
- **svelte:** added support to default properties, docs and tests ([a734021](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/a73402130efa829bee3d8c5a72b636ca445148bc))
- introucing svelte package and sandbox ([0e8e9e2](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/0e8e9e22f38576730c73442714c1a611847d9bc7))
- readme files added to all the packages ([819e60b](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/819e60bb536be471f373c8d3f7cbd5b331c1434c))
- update callback to jss function ([6218907](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/62189076da38078df33796fb16576b13ecdeeb85))

## 0.1.6 (2021-06-27)

### Bug Fixes

- readme files fix and licenses added ([c71286a](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/c71286acf948e65eacb5e0ac808cc9425d576351))

### Features

- website link replaced inside readme files ([1e55a6d](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/1e55a6d458d2873d09efd5fad5100cbbae382057))
- **svelte:** added support to default properties, docs and tests ([a734021](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/a73402130efa829bee3d8c5a72b636ca445148bc))
- introucing svelte package and sandbox ([0e8e9e2](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/0e8e9e22f38576730c73442714c1a611847d9bc7))
- readme files added to all the packages ([819e60b](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/819e60bb536be471f373c8d3f7cbd5b331c1434c))
- update callback to jss function ([6218907](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/62189076da38078df33796fb16576b13ecdeeb85))

## 0.1.5 (2021-05-23)

### Bug Fixes

- readme files fix and licenses added ([c71286a](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/c71286acf948e65eacb5e0ac808cc9425d576351))

### Features

- introucing svelte package and sandbox ([0e8e9e2](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/0e8e9e22f38576730c73442714c1a611847d9bc7))
- readme files added to all the packages ([819e60b](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/819e60bb536be471f373c8d3f7cbd5b331c1434c))
- update callback to jss function ([6218907](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/62189076da38078df33796fb16576b13ecdeeb85))

## 0.1.4 (2021-05-22)

### Bug Fixes

- readme files fix and licenses added ([c71286a](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/c71286acf948e65eacb5e0ac808cc9425d576351))

### Features

- introucing svelte package and sandbox ([0e8e9e2](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/0e8e9e22f38576730c73442714c1a611847d9bc7))
- readme files added to all the packages ([819e60b](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/819e60bb536be471f373c8d3f7cbd5b331c1434c))
- update callback to jss function ([6218907](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte/commit/62189076da38078df33796fb16576b13ecdeeb85))

## 0.1.3 (2021-05-21)

### Features

- introucing svelte package and sandbox ([0e8e9e2](https://bitbucket.org/me-sign/design-system/commits/0e8e9e22f38576730c73442714c1a611847d9bc7))
- update callback to jss function ([6218907](https://bitbucket.org/me-sign/design-system/commits/62189076da38078df33796fb16576b13ecdeeb85))

## 0.1.2 (2021-05-20)

### Features

- introucing svelte package and sandbox ([0e8e9e2](https://bitbucket.org/me-sign/design-system/commits/0e8e9e22f38576730c73442714c1a611847d9bc7))
- update callback to jss function ([6218907](https://bitbucket.org/me-sign/design-system/commits/62189076da38078df33796fb16576b13ecdeeb85))

## 0.1.1 (2021-05-20)

### Features

- introucing svelte package and sandbox ([0e8e9e2](https://bitbucket.org/me-sign/design-system/commits/0e8e9e22f38576730c73442714c1a611847d9bc7))
