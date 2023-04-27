# Change Log

## 0.9.2

### Patch Changes

- 766be5f: Fixed publish command in order to replace `workspace/*` with the actual version of the package.
- Updated dependencies [766be5f]
  - @morfeo/core@0.9.2
  - @morfeo/fonts@0.9.2
  - @morfeo/jss@0.9.2

## 0.9.1

### Patch Changes

- 1683b96: Media queries are now generated mobile-frist by default, fixed also the order of the css generated at build time to be sure that media queries are computed in he right way
- Updated dependencies [1683b96]
- Updated dependencies [b094895]
  - @morfeo/core@0.9.1
  - @morfeo/fonts@0.9.1
  - @morfeo/jss@0.9.1

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [0.9.0](https://github.com/morfeojs/morfeo/compare/v0.7.0...v0.9.0) (2023-04-16)

### Features

- [#648](https://github.com/morfeojs/morfeo/issues/648) - enabled any css selector ([#651](https://github.com/morfeojs/morfeo/issues/651)) ([5980606](https://github.com/morfeojs/morfeo/commit/5980606422278644ecfd65dbc8021ca2d68d69a3))
- version v0.8.0 ([fd2fcb2](https://github.com/morfeojs/morfeo/commit/fd2fcb2778aa1f37ade15570926441a706cb945f))

# [0.8.0](https://github.com/morfeojs/morfeo/compare/v0.7.0...v0.8.0) (2023-01-28)

**Note:** Version bump only for package @morfeo/web

# 0.7.0 (2022-05-30)

### Bug Fixes

- [#136](https://github.com/morfeojs/morfeo/issues/136) ([50ca5e4](https://github.com/morfeojs/morfeo/commit/50ca5e4803ba5335245995e31d09c9273a4a2f16))
- fixed typing of packages ([57267c5](https://github.com/morfeojs/morfeo/commit/57267c5f904cbeece433e7bb2573fd9d7a4b3fd4))
- **fonts:** prettier ([c97f825](https://github.com/morfeojs/morfeo/commit/c97f8250b6eae14753ceade69f03484c25d40e66))
- prettier ([25a1023](https://github.com/morfeojs/morfeo/commit/25a10238dfaefc6c44cc68c6faeb24711879e6de))
- prettier ([57516db](https://github.com/morfeojs/morfeo/commit/57516db7d44401c4c7fc2ce2a57a95d6da6665b7))
- readme files fix and licenses added ([c71286a](https://github.com/morfeojs/morfeo/commit/c71286acf948e65eacb5e0ac808cc9425d576351))
- removed styled-component-web package and fixed tets ([7bccfc0](https://github.com/morfeojs/morfeo/commit/7bccfc066b44cb3184bb0c2851fe502d389406b7))
- responsive values typing ([648c4b1](https://github.com/morfeojs/morfeo/commit/648c4b18d7752344a6b9eda4f5b48e4bb6e5b95e)), closes [#46](https://github.com/morfeojs/morfeo/issues/46)
- spec, web, devtool ([8c8bb90](https://github.com/morfeojs/morfeo/commit/8c8bb902241759bd7d4e92220cffb31716a10785))
- tests ([61e4593](https://github.com/morfeojs/morfeo/commit/61e45931ced66121d11f5321f46f3c253386e4b3))

### chore

- [#152](https://github.com/morfeojs/morfeo/issues/152) ([4e249ff](https://github.com/morfeojs/morfeo/commit/4e249ffe196839c56d8334663d3b00d98ca000a2))

### Features

- [#129](https://github.com/morfeojs/morfeo/issues/129) ([71dac61](https://github.com/morfeojs/morfeo/commit/71dac61b0c6ac1f6e45654e287cc1ad44ce20957))
- [#142](https://github.com/morfeojs/morfeo/issues/142) ([52cc477](https://github.com/morfeojs/morfeo/commit/52cc477cec863efdbb8b83b7214895415565d339))
- [#144](https://github.com/morfeojs/morfeo/issues/144) ([16b382a](https://github.com/morfeojs/morfeo/commit/16b382a9bd9eb8bc434569f6f8cb8dd8374833da))
- [#150](https://github.com/morfeojs/morfeo/issues/150) ([33be120](https://github.com/morfeojs/morfeo/commit/33be120e0718ec408ffcc18d20a52240180992db))
- **@morfeo/web:** reset css utility ([41c291a](https://github.com/morfeojs/morfeo/commit/41c291a2b319f58ace13295e5af4a0d35a5ed97d))
- **@morfeo/web:** reset css utility prettier ([6695398](https://github.com/morfeojs/morfeo/commit/6695398ceff2b26c76a885f9e6091563411563cd))
- add theme removal ([fb20b50](https://github.com/morfeojs/morfeo/commit/fb20b501e877e2137831f9e86629e213007b88b7))
- added missing icons for slices and new morfeo icon ([0c4fdfa](https://github.com/morfeojs/morfeo/commit/0c4fdfa3b367a259793b692cb2cf8e7eee3ff115))
- added pubish config to packages ([23241fc](https://github.com/morfeojs/morfeo/commit/23241fcb4a1ef76615661e5b8e9e4ed53060b912))
- added pwa plugin to documentation website ([1808781](https://github.com/morfeojs/morfeo/commit/1808781f20f0c41f6d4a965eb5bad522caf9e56a))
- closes [#65](https://github.com/morfeojs/morfeo/issues/65) ([bbf6e32](https://github.com/morfeojs/morfeo/commit/bbf6e32f62c32af51d1795bbbc85c9772948cfdf))
- commonjs build included ([1b3baa5](https://github.com/morfeojs/morfeo/commit/1b3baa5da980b65035a67db28e11cb2aa9d3333c))
- docs improvements ([c25202e](https://github.com/morfeojs/morfeo/commit/c25202ee79424cfb020606f7509755168186308e))
- documentation improvements ([4ad3b5d](https://github.com/morfeojs/morfeo/commit/4ad3b5d7f35cd9c1ad1532e5367dec21594d8ff4))
- flatted parser.resolve method ([5ce2c10](https://github.com/morfeojs/morfeo/commit/5ce2c101097b7ab28d985b108ee079e07f8bacce))
- **fonts:** new @morfeo/fonts package ([68ba391](https://github.com/morfeojs/morfeo/commit/68ba39193db598b0506cc584f79e3c08facbb4da))
- gradients parsers added to @morfeo/web package ([9bcac4e](https://github.com/morfeojs/morfeo/commit/9bcac4e9dbccd52afc53b5308bb7273659a58c19))
- hooks package added ([0637789](https://github.com/morfeojs/morfeo/commit/0637789d23e12bb3dfb295039e92d2a4f815927a))
- licenses updated ([45b042a](https://github.com/morfeojs/morfeo/commit/45b042aec49d17e7a261330b713cc05f6b4355b2))
- native package ([356cbd6](https://github.com/morfeojs/morfeo/commit/356cbd6de9084be2a02db90073fb8fcbb8191641))
- **react:** import replacing ([d07c084](https://github.com/morfeojs/morfeo/commit/d07c08454adc890be71bcd577c7922eff7da043d))
- readme files added to all the packages ([819e60b](https://github.com/morfeojs/morfeo/commit/819e60bb536be471f373c8d3f7cbd5b331c1434c))
- READMEs updated ([5637cfc](https://github.com/morfeojs/morfeo/commit/5637cfc58bb94ec1d88e4eb28d84e27f17b085df))
- replaced space slice with spacings ([9aaf30a](https://github.com/morfeojs/morfeo/commit/9aaf30a705261c32c778e82d51ca7651c9263457))
- styled components for web ([e5dee4c](https://github.com/morfeojs/morfeo/commit/e5dee4c65277089b282b3ba7da3696451c559b83))
- web styled-components package introduced ([a7677c3](https://github.com/morfeojs/morfeo/commit/a7677c3a8f3c561101b0eba0b87e7fa983677cf9))
- website link replaced inside readme files ([1e55a6d](https://github.com/morfeojs/morfeo/commit/1e55a6d458d2873d09efd5fad5100cbbae382057))
- wip of morfeo cli ([476d48d](https://github.com/morfeojs/morfeo/commit/476d48d1404e0fbbe209f353efcc2e96d9d9a38e))

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
- fixed typing of packages ([57267c5](https://github.com/morfeojs/morfeo/commit/57267c5f904cbeece433e7bb2573fd9d7a4b3fd4))
- **fonts:** prettier ([c97f825](https://github.com/morfeojs/morfeo/commit/c97f8250b6eae14753ceade69f03484c25d40e66))
- prettier ([25a1023](https://github.com/morfeojs/morfeo/commit/25a10238dfaefc6c44cc68c6faeb24711879e6de))
- prettier ([57516db](https://github.com/morfeojs/morfeo/commit/57516db7d44401c4c7fc2ce2a57a95d6da6665b7))
- readme files fix and licenses added ([c71286a](https://github.com/morfeojs/morfeo/commit/c71286acf948e65eacb5e0ac808cc9425d576351))
- responsive values typing ([648c4b1](https://github.com/morfeojs/morfeo/commit/648c4b18d7752344a6b9eda4f5b48e4bb6e5b95e)), closes [#46](https://github.com/morfeojs/morfeo/issues/46)
- spec, web, devtool ([8c8bb90](https://github.com/morfeojs/morfeo/commit/8c8bb902241759bd7d4e92220cffb31716a10785))
- tests ([61e4593](https://github.com/morfeojs/morfeo/commit/61e45931ced66121d11f5321f46f3c253386e4b3))

### chore

- [#152](https://github.com/morfeojs/morfeo/issues/152) ([4e249ff](https://github.com/morfeojs/morfeo/commit/4e249ffe196839c56d8334663d3b00d98ca000a2))

### Features

- [#129](https://github.com/morfeojs/morfeo/issues/129) ([71dac61](https://github.com/morfeojs/morfeo/commit/71dac61b0c6ac1f6e45654e287cc1ad44ce20957))
- [#142](https://github.com/morfeojs/morfeo/issues/142) ([52cc477](https://github.com/morfeojs/morfeo/commit/52cc477cec863efdbb8b83b7214895415565d339))
- [#144](https://github.com/morfeojs/morfeo/issues/144) ([16b382a](https://github.com/morfeojs/morfeo/commit/16b382a9bd9eb8bc434569f6f8cb8dd8374833da))
- [#150](https://github.com/morfeojs/morfeo/issues/150) ([33be120](https://github.com/morfeojs/morfeo/commit/33be120e0718ec408ffcc18d20a52240180992db))
- **@morfeo/web:** reset css utility ([41c291a](https://github.com/morfeojs/morfeo/commit/41c291a2b319f58ace13295e5af4a0d35a5ed97d))
- **@morfeo/web:** reset css utility prettier ([6695398](https://github.com/morfeojs/morfeo/commit/6695398ceff2b26c76a885f9e6091563411563cd))
- add theme removal ([fb20b50](https://github.com/morfeojs/morfeo/commit/fb20b501e877e2137831f9e86629e213007b88b7))
- added missing icons for slices and new morfeo icon ([0c4fdfa](https://github.com/morfeojs/morfeo/commit/0c4fdfa3b367a259793b692cb2cf8e7eee3ff115))
- added pubish config to packages ([23241fc](https://github.com/morfeojs/morfeo/commit/23241fcb4a1ef76615661e5b8e9e4ed53060b912))
- added pwa plugin to documentation website ([1808781](https://github.com/morfeojs/morfeo/commit/1808781f20f0c41f6d4a965eb5bad522caf9e56a))
- closes [#65](https://github.com/morfeojs/morfeo/issues/65) ([bbf6e32](https://github.com/morfeojs/morfeo/commit/bbf6e32f62c32af51d1795bbbc85c9772948cfdf))
- commonjs build included ([1b3baa5](https://github.com/morfeojs/morfeo/commit/1b3baa5da980b65035a67db28e11cb2aa9d3333c))
- docs improvements ([c25202e](https://github.com/morfeojs/morfeo/commit/c25202ee79424cfb020606f7509755168186308e))
- documentation improvements ([4ad3b5d](https://github.com/morfeojs/morfeo/commit/4ad3b5d7f35cd9c1ad1532e5367dec21594d8ff4))
- flatted parser.resolve method ([5ce2c10](https://github.com/morfeojs/morfeo/commit/5ce2c101097b7ab28d985b108ee079e07f8bacce))
- **fonts:** new @morfeo/fonts package ([68ba391](https://github.com/morfeojs/morfeo/commit/68ba39193db598b0506cc584f79e3c08facbb4da))
- gradients parsers added to @morfeo/web package ([9bcac4e](https://github.com/morfeojs/morfeo/commit/9bcac4e9dbccd52afc53b5308bb7273659a58c19))
- hooks package added ([0637789](https://github.com/morfeojs/morfeo/commit/0637789d23e12bb3dfb295039e92d2a4f815927a))
- licenses updated ([45b042a](https://github.com/morfeojs/morfeo/commit/45b042aec49d17e7a261330b713cc05f6b4355b2))
- native package ([356cbd6](https://github.com/morfeojs/morfeo/commit/356cbd6de9084be2a02db90073fb8fcbb8191641))
- **react:** import replacing ([d07c084](https://github.com/morfeojs/morfeo/commit/d07c08454adc890be71bcd577c7922eff7da043d))
- readme files added to all the packages ([819e60b](https://github.com/morfeojs/morfeo/commit/819e60bb536be471f373c8d3f7cbd5b331c1434c))
- READMEs updated ([5637cfc](https://github.com/morfeojs/morfeo/commit/5637cfc58bb94ec1d88e4eb28d84e27f17b085df))
- replaced space slice with spacings ([9aaf30a](https://github.com/morfeojs/morfeo/commit/9aaf30a705261c32c778e82d51ca7651c9263457))
- styled components for web ([e5dee4c](https://github.com/morfeojs/morfeo/commit/e5dee4c65277089b282b3ba7da3696451c559b83))
- web styled-components package introduced ([a7677c3](https://github.com/morfeojs/morfeo/commit/a7677c3a8f3c561101b0eba0b87e7fa983677cf9))
- website link replaced inside readme files ([1e55a6d](https://github.com/morfeojs/morfeo/commit/1e55a6d458d2873d09efd5fad5100cbbae382057))
- wip of morfeo cli ([476d48d](https://github.com/morfeojs/morfeo/commit/476d48d1404e0fbbe209f353efcc2e96d9d9a38e))

### BREAKING CHANGES

- @morfeo/core: breaking change the the core api:

1. morfeo.useTheme renamed into morfeo.setCurrentTheme
2. morfeo.getCurrent renamed into morfeo.getCurrentTheme

# 0.5.0 (2022-02-13)

### Bug Fixes

- [#136](https://github.com/morfeojs/morfeo/issues/136) ([50ca5e4](https://github.com/morfeojs/morfeo/commit/50ca5e4803ba5335245995e31d09c9273a4a2f16))
- fixed typing of packages ([57267c5](https://github.com/morfeojs/morfeo/commit/57267c5f904cbeece433e7bb2573fd9d7a4b3fd4))
- **fonts:** prettier ([c97f825](https://github.com/morfeojs/morfeo/commit/c97f8250b6eae14753ceade69f03484c25d40e66))
- prettier ([25a1023](https://github.com/morfeojs/morfeo/commit/25a10238dfaefc6c44cc68c6faeb24711879e6de))
- prettier ([57516db](https://github.com/morfeojs/morfeo/commit/57516db7d44401c4c7fc2ce2a57a95d6da6665b7))
- readme files fix and licenses added ([c71286a](https://github.com/morfeojs/morfeo/commit/c71286acf948e65eacb5e0ac808cc9425d576351))
- responsive values typing ([648c4b1](https://github.com/morfeojs/morfeo/commit/648c4b18d7752344a6b9eda4f5b48e4bb6e5b95e)), closes [#46](https://github.com/morfeojs/morfeo/issues/46)
- spec, web, devtool ([8c8bb90](https://github.com/morfeojs/morfeo/commit/8c8bb902241759bd7d4e92220cffb31716a10785))
- tests ([61e4593](https://github.com/morfeojs/morfeo/commit/61e45931ced66121d11f5321f46f3c253386e4b3))

### Features

- [#129](https://github.com/morfeojs/morfeo/issues/129) ([71dac61](https://github.com/morfeojs/morfeo/commit/71dac61b0c6ac1f6e45654e287cc1ad44ce20957))
- [#142](https://github.com/morfeojs/morfeo/issues/142) ([52cc477](https://github.com/morfeojs/morfeo/commit/52cc477cec863efdbb8b83b7214895415565d339))
- [#144](https://github.com/morfeojs/morfeo/issues/144) ([16b382a](https://github.com/morfeojs/morfeo/commit/16b382a9bd9eb8bc434569f6f8cb8dd8374833da))
- [#150](https://github.com/morfeojs/morfeo/issues/150) ([33be120](https://github.com/morfeojs/morfeo/commit/33be120e0718ec408ffcc18d20a52240180992db))
- **@morfeo/web:** reset css utility ([41c291a](https://github.com/morfeojs/morfeo/commit/41c291a2b319f58ace13295e5af4a0d35a5ed97d))
- **@morfeo/web:** reset css utility prettier ([6695398](https://github.com/morfeojs/morfeo/commit/6695398ceff2b26c76a885f9e6091563411563cd))
- add theme removal ([fb20b50](https://github.com/morfeojs/morfeo/commit/fb20b501e877e2137831f9e86629e213007b88b7))
- added missing icons for slices and new morfeo icon ([0c4fdfa](https://github.com/morfeojs/morfeo/commit/0c4fdfa3b367a259793b692cb2cf8e7eee3ff115))
- added pubish config to packages ([23241fc](https://github.com/morfeojs/morfeo/commit/23241fcb4a1ef76615661e5b8e9e4ed53060b912))
- added pwa plugin to documentation website ([1808781](https://github.com/morfeojs/morfeo/commit/1808781f20f0c41f6d4a965eb5bad522caf9e56a))
- closes [#65](https://github.com/morfeojs/morfeo/issues/65) ([bbf6e32](https://github.com/morfeojs/morfeo/commit/bbf6e32f62c32af51d1795bbbc85c9772948cfdf))
- commonjs build included ([1b3baa5](https://github.com/morfeojs/morfeo/commit/1b3baa5da980b65035a67db28e11cb2aa9d3333c))
- docs improvements ([c25202e](https://github.com/morfeojs/morfeo/commit/c25202ee79424cfb020606f7509755168186308e))
- documentation improvements ([4ad3b5d](https://github.com/morfeojs/morfeo/commit/4ad3b5d7f35cd9c1ad1532e5367dec21594d8ff4))
- flatted parser.resolve method ([5ce2c10](https://github.com/morfeojs/morfeo/commit/5ce2c101097b7ab28d985b108ee079e07f8bacce))
- **fonts:** new @morfeo/fonts package ([68ba391](https://github.com/morfeojs/morfeo/commit/68ba39193db598b0506cc584f79e3c08facbb4da))
- gradients parsers added to @morfeo/web package ([9bcac4e](https://github.com/morfeojs/morfeo/commit/9bcac4e9dbccd52afc53b5308bb7273659a58c19))
- hooks package added ([0637789](https://github.com/morfeojs/morfeo/commit/0637789d23e12bb3dfb295039e92d2a4f815927a))
- licenses updated ([45b042a](https://github.com/morfeojs/morfeo/commit/45b042aec49d17e7a261330b713cc05f6b4355b2))
- native package ([356cbd6](https://github.com/morfeojs/morfeo/commit/356cbd6de9084be2a02db90073fb8fcbb8191641))
- **react:** import replacing ([d07c084](https://github.com/morfeojs/morfeo/commit/d07c08454adc890be71bcd577c7922eff7da043d))
- readme files added to all the packages ([819e60b](https://github.com/morfeojs/morfeo/commit/819e60bb536be471f373c8d3f7cbd5b331c1434c))
- READMEs updated ([5637cfc](https://github.com/morfeojs/morfeo/commit/5637cfc58bb94ec1d88e4eb28d84e27f17b085df))
- replaced space slice with spacings ([9aaf30a](https://github.com/morfeojs/morfeo/commit/9aaf30a705261c32c778e82d51ca7651c9263457))
- styled components for web ([e5dee4c](https://github.com/morfeojs/morfeo/commit/e5dee4c65277089b282b3ba7da3696451c559b83))
- web styled-components package introduced ([a7677c3](https://github.com/morfeojs/morfeo/commit/a7677c3a8f3c561101b0eba0b87e7fa983677cf9))
- website link replaced inside readme files ([1e55a6d](https://github.com/morfeojs/morfeo/commit/1e55a6d458d2873d09efd5fad5100cbbae382057))
- wip of morfeo cli ([476d48d](https://github.com/morfeojs/morfeo/commit/476d48d1404e0fbbe209f353efcc2e96d9d9a38e))

## 0.4.2 (2021-11-18)

### Bug Fixes

- fixed typing of packages ([57267c5](https://github.com/VLK-STUDIO/morfeo/commit/57267c5f904cbeece433e7bb2573fd9d7a4b3fd4))
- prettier ([57516db](https://github.com/VLK-STUDIO/morfeo/commit/57516db7d44401c4c7fc2ce2a57a95d6da6665b7))
- readme files fix and licenses added ([c71286a](https://github.com/VLK-STUDIO/morfeo/commit/c71286acf948e65eacb5e0ac808cc9425d576351))
- responsive values typing ([648c4b1](https://github.com/VLK-STUDIO/morfeo/commit/648c4b18d7752344a6b9eda4f5b48e4bb6e5b95e)), closes [#46](https://github.com/VLK-STUDIO/morfeo/issues/46)
- spec, web, devtool ([8c8bb90](https://github.com/VLK-STUDIO/morfeo/commit/8c8bb902241759bd7d4e92220cffb31716a10785))
- tests ([61e4593](https://github.com/VLK-STUDIO/morfeo/commit/61e45931ced66121d11f5321f46f3c253386e4b3))
- **fonts:** prettier ([c97f825](https://github.com/VLK-STUDIO/morfeo/commit/c97f8250b6eae14753ceade69f03484c25d40e66))

### Features

- add theme removal ([fb20b50](https://github.com/VLK-STUDIO/morfeo/commit/fb20b501e877e2137831f9e86629e213007b88b7))
- added missing icons for slices and new morfeo icon ([0c4fdfa](https://github.com/VLK-STUDIO/morfeo/commit/0c4fdfa3b367a259793b692cb2cf8e7eee3ff115))
- added pubish config to packages ([23241fc](https://github.com/VLK-STUDIO/morfeo/commit/23241fcb4a1ef76615661e5b8e9e4ed53060b912))
- added pwa plugin to documentation website ([1808781](https://github.com/VLK-STUDIO/morfeo/commit/1808781f20f0c41f6d4a965eb5bad522caf9e56a))
- closes [#65](https://github.com/VLK-STUDIO/morfeo/issues/65) ([bbf6e32](https://github.com/VLK-STUDIO/morfeo/commit/bbf6e32f62c32af51d1795bbbc85c9772948cfdf))
- commonjs build included ([1b3baa5](https://github.com/VLK-STUDIO/morfeo/commit/1b3baa5da980b65035a67db28e11cb2aa9d3333c))
- docs improvements ([c25202e](https://github.com/VLK-STUDIO/morfeo/commit/c25202ee79424cfb020606f7509755168186308e))
- documentation improvements ([4ad3b5d](https://github.com/VLK-STUDIO/morfeo/commit/4ad3b5d7f35cd9c1ad1532e5367dec21594d8ff4))
- flatted parser.resolve method ([5ce2c10](https://github.com/VLK-STUDIO/morfeo/commit/5ce2c101097b7ab28d985b108ee079e07f8bacce))
- hooks package added ([0637789](https://github.com/VLK-STUDIO/morfeo/commit/0637789d23e12bb3dfb295039e92d2a4f815927a))
- native package ([356cbd6](https://github.com/VLK-STUDIO/morfeo/commit/356cbd6de9084be2a02db90073fb8fcbb8191641))
- readme files added to all the packages ([819e60b](https://github.com/VLK-STUDIO/morfeo/commit/819e60bb536be471f373c8d3f7cbd5b331c1434c))
- web styled-components package introduced ([a7677c3](https://github.com/VLK-STUDIO/morfeo/commit/a7677c3a8f3c561101b0eba0b87e7fa983677cf9))
- website link replaced inside readme files ([1e55a6d](https://github.com/VLK-STUDIO/morfeo/commit/1e55a6d458d2873d09efd5fad5100cbbae382057))
- wip of morfeo cli ([476d48d](https://github.com/VLK-STUDIO/morfeo/commit/476d48d1404e0fbbe209f353efcc2e96d9d9a38e))
- **@morfeo/web:** reset css utility ([41c291a](https://github.com/VLK-STUDIO/morfeo/commit/41c291a2b319f58ace13295e5af4a0d35a5ed97d))
- **@morfeo/web:** reset css utility prettier ([6695398](https://github.com/VLK-STUDIO/morfeo/commit/6695398ceff2b26c76a885f9e6091563411563cd))
- **fonts:** new @morfeo/fonts package ([68ba391](https://github.com/VLK-STUDIO/morfeo/commit/68ba39193db598b0506cc584f79e3c08facbb4da))
- gradients parsers added to @morfeo/web package ([9bcac4e](https://github.com/VLK-STUDIO/morfeo/commit/9bcac4e9dbccd52afc53b5308bb7273659a58c19))
- replaced space slice with spacings ([9aaf30a](https://github.com/VLK-STUDIO/morfeo/commit/9aaf30a705261c32c778e82d51ca7651c9263457))
- **react:** import replacing ([d07c084](https://github.com/VLK-STUDIO/morfeo/commit/d07c08454adc890be71bcd577c7922eff7da043d))
- styled components for web ([e5dee4c](https://github.com/VLK-STUDIO/morfeo/commit/e5dee4c65277089b282b3ba7da3696451c559b83))

## 0.4.1 (2021-11-18)

### Bug Fixes

- fixed typing of packages ([57267c5](https://github.com/VLK-STUDIO/morfeo/commit/57267c5f904cbeece433e7bb2573fd9d7a4b3fd4))
- prettier ([57516db](https://github.com/VLK-STUDIO/morfeo/commit/57516db7d44401c4c7fc2ce2a57a95d6da6665b7))
- readme files fix and licenses added ([c71286a](https://github.com/VLK-STUDIO/morfeo/commit/c71286acf948e65eacb5e0ac808cc9425d576351))
- responsive values typing ([648c4b1](https://github.com/VLK-STUDIO/morfeo/commit/648c4b18d7752344a6b9eda4f5b48e4bb6e5b95e)), closes [#46](https://github.com/VLK-STUDIO/morfeo/issues/46)
- spec, web, devtool ([8c8bb90](https://github.com/VLK-STUDIO/morfeo/commit/8c8bb902241759bd7d4e92220cffb31716a10785))
- tests ([61e4593](https://github.com/VLK-STUDIO/morfeo/commit/61e45931ced66121d11f5321f46f3c253386e4b3))
- **fonts:** prettier ([c97f825](https://github.com/VLK-STUDIO/morfeo/commit/c97f8250b6eae14753ceade69f03484c25d40e66))

### Features

- add theme removal ([fb20b50](https://github.com/VLK-STUDIO/morfeo/commit/fb20b501e877e2137831f9e86629e213007b88b7))
- added missing icons for slices and new morfeo icon ([0c4fdfa](https://github.com/VLK-STUDIO/morfeo/commit/0c4fdfa3b367a259793b692cb2cf8e7eee3ff115))
- added pubish config to packages ([23241fc](https://github.com/VLK-STUDIO/morfeo/commit/23241fcb4a1ef76615661e5b8e9e4ed53060b912))
- added pwa plugin to documentation website ([1808781](https://github.com/VLK-STUDIO/morfeo/commit/1808781f20f0c41f6d4a965eb5bad522caf9e56a))
- closes [#65](https://github.com/VLK-STUDIO/morfeo/issues/65) ([bbf6e32](https://github.com/VLK-STUDIO/morfeo/commit/bbf6e32f62c32af51d1795bbbc85c9772948cfdf))
- commonjs build included ([1b3baa5](https://github.com/VLK-STUDIO/morfeo/commit/1b3baa5da980b65035a67db28e11cb2aa9d3333c))
- docs improvements ([c25202e](https://github.com/VLK-STUDIO/morfeo/commit/c25202ee79424cfb020606f7509755168186308e))
- documentation improvements ([4ad3b5d](https://github.com/VLK-STUDIO/morfeo/commit/4ad3b5d7f35cd9c1ad1532e5367dec21594d8ff4))
- flatted parser.resolve method ([5ce2c10](https://github.com/VLK-STUDIO/morfeo/commit/5ce2c101097b7ab28d985b108ee079e07f8bacce))
- hooks package added ([0637789](https://github.com/VLK-STUDIO/morfeo/commit/0637789d23e12bb3dfb295039e92d2a4f815927a))
- native package ([356cbd6](https://github.com/VLK-STUDIO/morfeo/commit/356cbd6de9084be2a02db90073fb8fcbb8191641))
- readme files added to all the packages ([819e60b](https://github.com/VLK-STUDIO/morfeo/commit/819e60bb536be471f373c8d3f7cbd5b331c1434c))
- web styled-components package introduced ([a7677c3](https://github.com/VLK-STUDIO/morfeo/commit/a7677c3a8f3c561101b0eba0b87e7fa983677cf9))
- website link replaced inside readme files ([1e55a6d](https://github.com/VLK-STUDIO/morfeo/commit/1e55a6d458d2873d09efd5fad5100cbbae382057))
- wip of morfeo cli ([476d48d](https://github.com/VLK-STUDIO/morfeo/commit/476d48d1404e0fbbe209f353efcc2e96d9d9a38e))
- **@morfeo/web:** reset css utility ([41c291a](https://github.com/VLK-STUDIO/morfeo/commit/41c291a2b319f58ace13295e5af4a0d35a5ed97d))
- **@morfeo/web:** reset css utility prettier ([6695398](https://github.com/VLK-STUDIO/morfeo/commit/6695398ceff2b26c76a885f9e6091563411563cd))
- **fonts:** new @morfeo/fonts package ([68ba391](https://github.com/VLK-STUDIO/morfeo/commit/68ba39193db598b0506cc584f79e3c08facbb4da))
- gradients parsers added to @morfeo/web package ([9bcac4e](https://github.com/VLK-STUDIO/morfeo/commit/9bcac4e9dbccd52afc53b5308bb7273659a58c19))
- replaced space slice with spacings ([9aaf30a](https://github.com/VLK-STUDIO/morfeo/commit/9aaf30a705261c32c778e82d51ca7651c9263457))
- **react:** import replacing ([d07c084](https://github.com/VLK-STUDIO/morfeo/commit/d07c08454adc890be71bcd577c7922eff7da043d))
- styled components for web ([e5dee4c](https://github.com/VLK-STUDIO/morfeo/commit/e5dee4c65277089b282b3ba7da3696451c559b83))

# 0.4.0 (2021-11-18)

### Bug Fixes

- fixed typing of packages ([57267c5](https://github.com/VLK-STUDIO/morfeo/commit/57267c5f904cbeece433e7bb2573fd9d7a4b3fd4))
- prettier ([57516db](https://github.com/VLK-STUDIO/morfeo/commit/57516db7d44401c4c7fc2ce2a57a95d6da6665b7))
- readme files fix and licenses added ([c71286a](https://github.com/VLK-STUDIO/morfeo/commit/c71286acf948e65eacb5e0ac808cc9425d576351))
- responsive values typing ([648c4b1](https://github.com/VLK-STUDIO/morfeo/commit/648c4b18d7752344a6b9eda4f5b48e4bb6e5b95e)), closes [#46](https://github.com/VLK-STUDIO/morfeo/issues/46)
- spec, web, devtool ([8c8bb90](https://github.com/VLK-STUDIO/morfeo/commit/8c8bb902241759bd7d4e92220cffb31716a10785))
- tests ([61e4593](https://github.com/VLK-STUDIO/morfeo/commit/61e45931ced66121d11f5321f46f3c253386e4b3))
- **fonts:** prettier ([c97f825](https://github.com/VLK-STUDIO/morfeo/commit/c97f8250b6eae14753ceade69f03484c25d40e66))

### Features

- add theme removal ([fb20b50](https://github.com/VLK-STUDIO/morfeo/commit/fb20b501e877e2137831f9e86629e213007b88b7))
- added missing icons for slices and new morfeo icon ([0c4fdfa](https://github.com/VLK-STUDIO/morfeo/commit/0c4fdfa3b367a259793b692cb2cf8e7eee3ff115))
- added pubish config to packages ([23241fc](https://github.com/VLK-STUDIO/morfeo/commit/23241fcb4a1ef76615661e5b8e9e4ed53060b912))
- added pwa plugin to documentation website ([1808781](https://github.com/VLK-STUDIO/morfeo/commit/1808781f20f0c41f6d4a965eb5bad522caf9e56a))
- closes [#65](https://github.com/VLK-STUDIO/morfeo/issues/65) ([bbf6e32](https://github.com/VLK-STUDIO/morfeo/commit/bbf6e32f62c32af51d1795bbbc85c9772948cfdf))
- commonjs build included ([1b3baa5](https://github.com/VLK-STUDIO/morfeo/commit/1b3baa5da980b65035a67db28e11cb2aa9d3333c))
- docs improvements ([c25202e](https://github.com/VLK-STUDIO/morfeo/commit/c25202ee79424cfb020606f7509755168186308e))
- documentation improvements ([4ad3b5d](https://github.com/VLK-STUDIO/morfeo/commit/4ad3b5d7f35cd9c1ad1532e5367dec21594d8ff4))
- flatted parser.resolve method ([5ce2c10](https://github.com/VLK-STUDIO/morfeo/commit/5ce2c101097b7ab28d985b108ee079e07f8bacce))
- hooks package added ([0637789](https://github.com/VLK-STUDIO/morfeo/commit/0637789d23e12bb3dfb295039e92d2a4f815927a))
- native package ([356cbd6](https://github.com/VLK-STUDIO/morfeo/commit/356cbd6de9084be2a02db90073fb8fcbb8191641))
- readme files added to all the packages ([819e60b](https://github.com/VLK-STUDIO/morfeo/commit/819e60bb536be471f373c8d3f7cbd5b331c1434c))
- web styled-components package introduced ([a7677c3](https://github.com/VLK-STUDIO/morfeo/commit/a7677c3a8f3c561101b0eba0b87e7fa983677cf9))
- website link replaced inside readme files ([1e55a6d](https://github.com/VLK-STUDIO/morfeo/commit/1e55a6d458d2873d09efd5fad5100cbbae382057))
- wip of morfeo cli ([476d48d](https://github.com/VLK-STUDIO/morfeo/commit/476d48d1404e0fbbe209f353efcc2e96d9d9a38e))
- **@morfeo/web:** reset css utility ([41c291a](https://github.com/VLK-STUDIO/morfeo/commit/41c291a2b319f58ace13295e5af4a0d35a5ed97d))
- **@morfeo/web:** reset css utility prettier ([6695398](https://github.com/VLK-STUDIO/morfeo/commit/6695398ceff2b26c76a885f9e6091563411563cd))
- **fonts:** new @morfeo/fonts package ([68ba391](https://github.com/VLK-STUDIO/morfeo/commit/68ba39193db598b0506cc584f79e3c08facbb4da))
- gradients parsers added to @morfeo/web package ([9bcac4e](https://github.com/VLK-STUDIO/morfeo/commit/9bcac4e9dbccd52afc53b5308bb7273659a58c19))
- replaced space slice with spacings ([9aaf30a](https://github.com/VLK-STUDIO/morfeo/commit/9aaf30a705261c32c778e82d51ca7651c9263457))
- **react:** import replacing ([d07c084](https://github.com/VLK-STUDIO/morfeo/commit/d07c08454adc890be71bcd577c7922eff7da043d))
- styled components for web ([e5dee4c](https://github.com/VLK-STUDIO/morfeo/commit/e5dee4c65277089b282b3ba7da3696451c559b83))

## 0.3.2 (2021-11-04)

### Bug Fixes

- prettier ([57516db](https://github.com/VLK-STUDIO/morfeo/commit/57516db7d44401c4c7fc2ce2a57a95d6da6665b7))
- responsive values typing ([648c4b1](https://github.com/VLK-STUDIO/morfeo/commit/648c4b18d7752344a6b9eda4f5b48e4bb6e5b95e)), closes [#46](https://github.com/VLK-STUDIO/morfeo/issues/46)
- **fonts:** prettier ([c97f825](https://github.com/VLK-STUDIO/morfeo/commit/c97f8250b6eae14753ceade69f03484c25d40e66))
- fixed typing of packages ([57267c5](https://github.com/VLK-STUDIO/morfeo/commit/57267c5f904cbeece433e7bb2573fd9d7a4b3fd4))
- readme files fix and licenses added ([c71286a](https://github.com/VLK-STUDIO/morfeo/commit/c71286acf948e65eacb5e0ac808cc9425d576351))

### Features

- add theme removal ([fb20b50](https://github.com/VLK-STUDIO/morfeo/commit/fb20b501e877e2137831f9e86629e213007b88b7))
- added missing icons for slices and new morfeo icon ([0c4fdfa](https://github.com/VLK-STUDIO/morfeo/commit/0c4fdfa3b367a259793b692cb2cf8e7eee3ff115))
- added pubish config to packages ([23241fc](https://github.com/VLK-STUDIO/morfeo/commit/23241fcb4a1ef76615661e5b8e9e4ed53060b912))
- added pwa plugin to documentation website ([1808781](https://github.com/VLK-STUDIO/morfeo/commit/1808781f20f0c41f6d4a965eb5bad522caf9e56a))
- closes [#65](https://github.com/VLK-STUDIO/morfeo/issues/65) ([bbf6e32](https://github.com/VLK-STUDIO/morfeo/commit/bbf6e32f62c32af51d1795bbbc85c9772948cfdf))
- commonjs build included ([1b3baa5](https://github.com/VLK-STUDIO/morfeo/commit/1b3baa5da980b65035a67db28e11cb2aa9d3333c))
- docs improvements ([c25202e](https://github.com/VLK-STUDIO/morfeo/commit/c25202ee79424cfb020606f7509755168186308e))
- documentation improvements ([4ad3b5d](https://github.com/VLK-STUDIO/morfeo/commit/4ad3b5d7f35cd9c1ad1532e5367dec21594d8ff4))
- flatted parser.resolve method ([5ce2c10](https://github.com/VLK-STUDIO/morfeo/commit/5ce2c101097b7ab28d985b108ee079e07f8bacce))
- hooks package added ([0637789](https://github.com/VLK-STUDIO/morfeo/commit/0637789d23e12bb3dfb295039e92d2a4f815927a))
- native package ([356cbd6](https://github.com/VLK-STUDIO/morfeo/commit/356cbd6de9084be2a02db90073fb8fcbb8191641))
- readme files added to all the packages ([819e60b](https://github.com/VLK-STUDIO/morfeo/commit/819e60bb536be471f373c8d3f7cbd5b331c1434c))
- web styled-components package introduced ([a7677c3](https://github.com/VLK-STUDIO/morfeo/commit/a7677c3a8f3c561101b0eba0b87e7fa983677cf9))
- website link replaced inside readme files ([1e55a6d](https://github.com/VLK-STUDIO/morfeo/commit/1e55a6d458d2873d09efd5fad5100cbbae382057))
- wip of morfeo cli ([476d48d](https://github.com/VLK-STUDIO/morfeo/commit/476d48d1404e0fbbe209f353efcc2e96d9d9a38e))
- **@morfeo/web:** reset css utility ([41c291a](https://github.com/VLK-STUDIO/morfeo/commit/41c291a2b319f58ace13295e5af4a0d35a5ed97d))
- **@morfeo/web:** reset css utility prettier ([6695398](https://github.com/VLK-STUDIO/morfeo/commit/6695398ceff2b26c76a885f9e6091563411563cd))
- **fonts:** new @morfeo/fonts package ([68ba391](https://github.com/VLK-STUDIO/morfeo/commit/68ba39193db598b0506cc584f79e3c08facbb4da))
- gradients parsers added to @morfeo/web package ([9bcac4e](https://github.com/VLK-STUDIO/morfeo/commit/9bcac4e9dbccd52afc53b5308bb7273659a58c19))
- replaced space slice with spacings ([9aaf30a](https://github.com/VLK-STUDIO/morfeo/commit/9aaf30a705261c32c778e82d51ca7651c9263457))
- **react:** import replacing ([d07c084](https://github.com/VLK-STUDIO/morfeo/commit/d07c08454adc890be71bcd577c7922eff7da043d))
- styled components for web ([e5dee4c](https://github.com/VLK-STUDIO/morfeo/commit/e5dee4c65277089b282b3ba7da3696451c559b83))

## 0.3.1 (2021-11-04)

### Bug Fixes

- prettier ([57516db](https://github.com/VLK-STUDIO/morfeo/commit/57516db7d44401c4c7fc2ce2a57a95d6da6665b7))
- responsive values typing ([648c4b1](https://github.com/VLK-STUDIO/morfeo/commit/648c4b18d7752344a6b9eda4f5b48e4bb6e5b95e)), closes [#46](https://github.com/VLK-STUDIO/morfeo/issues/46)
- **fonts:** prettier ([c97f825](https://github.com/VLK-STUDIO/morfeo/commit/c97f8250b6eae14753ceade69f03484c25d40e66))
- fixed typing of packages ([57267c5](https://github.com/VLK-STUDIO/morfeo/commit/57267c5f904cbeece433e7bb2573fd9d7a4b3fd4))
- readme files fix and licenses added ([c71286a](https://github.com/VLK-STUDIO/morfeo/commit/c71286acf948e65eacb5e0ac808cc9425d576351))

### Features

- add theme removal ([fb20b50](https://github.com/VLK-STUDIO/morfeo/commit/fb20b501e877e2137831f9e86629e213007b88b7))
- added missing icons for slices and new morfeo icon ([0c4fdfa](https://github.com/VLK-STUDIO/morfeo/commit/0c4fdfa3b367a259793b692cb2cf8e7eee3ff115))
- added pubish config to packages ([23241fc](https://github.com/VLK-STUDIO/morfeo/commit/23241fcb4a1ef76615661e5b8e9e4ed53060b912))
- added pwa plugin to documentation website ([1808781](https://github.com/VLK-STUDIO/morfeo/commit/1808781f20f0c41f6d4a965eb5bad522caf9e56a))
- closes [#65](https://github.com/VLK-STUDIO/morfeo/issues/65) ([bbf6e32](https://github.com/VLK-STUDIO/morfeo/commit/bbf6e32f62c32af51d1795bbbc85c9772948cfdf))
- commonjs build included ([1b3baa5](https://github.com/VLK-STUDIO/morfeo/commit/1b3baa5da980b65035a67db28e11cb2aa9d3333c))
- docs improvements ([c25202e](https://github.com/VLK-STUDIO/morfeo/commit/c25202ee79424cfb020606f7509755168186308e))
- documentation improvements ([4ad3b5d](https://github.com/VLK-STUDIO/morfeo/commit/4ad3b5d7f35cd9c1ad1532e5367dec21594d8ff4))
- flatted parser.resolve method ([5ce2c10](https://github.com/VLK-STUDIO/morfeo/commit/5ce2c101097b7ab28d985b108ee079e07f8bacce))
- hooks package added ([0637789](https://github.com/VLK-STUDIO/morfeo/commit/0637789d23e12bb3dfb295039e92d2a4f815927a))
- native package ([356cbd6](https://github.com/VLK-STUDIO/morfeo/commit/356cbd6de9084be2a02db90073fb8fcbb8191641))
- readme files added to all the packages ([819e60b](https://github.com/VLK-STUDIO/morfeo/commit/819e60bb536be471f373c8d3f7cbd5b331c1434c))
- web styled-components package introduced ([a7677c3](https://github.com/VLK-STUDIO/morfeo/commit/a7677c3a8f3c561101b0eba0b87e7fa983677cf9))
- website link replaced inside readme files ([1e55a6d](https://github.com/VLK-STUDIO/morfeo/commit/1e55a6d458d2873d09efd5fad5100cbbae382057))
- wip of morfeo cli ([476d48d](https://github.com/VLK-STUDIO/morfeo/commit/476d48d1404e0fbbe209f353efcc2e96d9d9a38e))
- **@morfeo/web:** reset css utility ([41c291a](https://github.com/VLK-STUDIO/morfeo/commit/41c291a2b319f58ace13295e5af4a0d35a5ed97d))
- **@morfeo/web:** reset css utility prettier ([6695398](https://github.com/VLK-STUDIO/morfeo/commit/6695398ceff2b26c76a885f9e6091563411563cd))
- **fonts:** new @morfeo/fonts package ([68ba391](https://github.com/VLK-STUDIO/morfeo/commit/68ba39193db598b0506cc584f79e3c08facbb4da))
- gradients parsers added to @morfeo/web package ([9bcac4e](https://github.com/VLK-STUDIO/morfeo/commit/9bcac4e9dbccd52afc53b5308bb7273659a58c19))
- replaced space slice with spacings ([9aaf30a](https://github.com/VLK-STUDIO/morfeo/commit/9aaf30a705261c32c778e82d51ca7651c9263457))
- **react:** import replacing ([d07c084](https://github.com/VLK-STUDIO/morfeo/commit/d07c08454adc890be71bcd577c7922eff7da043d))
- styled components for web ([e5dee4c](https://github.com/VLK-STUDIO/morfeo/commit/e5dee4c65277089b282b3ba7da3696451c559b83))

# 0.3.0 (2021-10-30)

### Bug Fixes

- prettier ([57516db](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/57516db7d44401c4c7fc2ce2a57a95d6da6665b7))
- responsive values typing ([648c4b1](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/648c4b18d7752344a6b9eda4f5b48e4bb6e5b95e)), closes [#46](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/issues/46)
- **fonts:** prettier ([c97f825](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/c97f8250b6eae14753ceade69f03484c25d40e66))
- fixed typing of packages ([57267c5](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/57267c5f904cbeece433e7bb2573fd9d7a4b3fd4))
- readme files fix and licenses added ([c71286a](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/c71286acf948e65eacb5e0ac808cc9425d576351))

### Features

- add theme removal ([fb20b50](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/fb20b501e877e2137831f9e86629e213007b88b7))
- added missing icons for slices and new morfeo icon ([0c4fdfa](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/0c4fdfa3b367a259793b692cb2cf8e7eee3ff115))
- added pubish config to packages ([23241fc](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/23241fcb4a1ef76615661e5b8e9e4ed53060b912))
- closes [#65](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/issues/65) ([bbf6e32](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/bbf6e32f62c32af51d1795bbbc85c9772948cfdf))
- commonjs build included ([1b3baa5](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/1b3baa5da980b65035a67db28e11cb2aa9d3333c))
- docs improvements ([c25202e](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/c25202ee79424cfb020606f7509755168186308e))
- documentation improvements ([4ad3b5d](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/4ad3b5d7f35cd9c1ad1532e5367dec21594d8ff4))
- flatted parser.resolve method ([5ce2c10](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/5ce2c101097b7ab28d985b108ee079e07f8bacce))
- gradients parsers added to @morfeo/web package ([9bcac4e](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/9bcac4e9dbccd52afc53b5308bb7273659a58c19))
- hooks package added ([0637789](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/0637789d23e12bb3dfb295039e92d2a4f815927a))
- native package ([356cbd6](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/356cbd6de9084be2a02db90073fb8fcbb8191641))
- readme files added to all the packages ([819e60b](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/819e60bb536be471f373c8d3f7cbd5b331c1434c))
- website link replaced inside readme files ([1e55a6d](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/1e55a6d458d2873d09efd5fad5100cbbae382057))
- wip of morfeo cli ([476d48d](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/476d48d1404e0fbbe209f353efcc2e96d9d9a38e))
- **@morfeo/web:** reset css utility ([41c291a](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/41c291a2b319f58ace13295e5af4a0d35a5ed97d))
- **@morfeo/web:** reset css utility prettier ([6695398](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/6695398ceff2b26c76a885f9e6091563411563cd))
- **fonts:** new @morfeo/fonts package ([68ba391](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/68ba39193db598b0506cc584f79e3c08facbb4da))
- replaced space slice with spacings ([9aaf30a](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/9aaf30a705261c32c778e82d51ca7651c9263457))
- **react:** import replacing ([d07c084](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/d07c08454adc890be71bcd577c7922eff7da043d))
- styled components for web ([e5dee4c](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/e5dee4c65277089b282b3ba7da3696451c559b83))
- web styled-components package introduced ([a7677c3](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/a7677c3a8f3c561101b0eba0b87e7fa983677cf9))

# 0.2.0 (2021-08-08)

### Bug Fixes

- responsive values typing ([648c4b1](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/648c4b18d7752344a6b9eda4f5b48e4bb6e5b95e)), closes [#46](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/issues/46)
- **fonts:** prettier ([c97f825](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/c97f8250b6eae14753ceade69f03484c25d40e66))
- fixed typing of packages ([57267c5](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/57267c5f904cbeece433e7bb2573fd9d7a4b3fd4))
- readme files fix and licenses added ([c71286a](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/c71286acf948e65eacb5e0ac808cc9425d576351))

### Features

- add theme removal ([fb20b50](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/fb20b501e877e2137831f9e86629e213007b88b7))
- added pubish config to packages ([23241fc](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/23241fcb4a1ef76615661e5b8e9e4ed53060b912))
- closes [#65](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/issues/65) ([bbf6e32](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/bbf6e32f62c32af51d1795bbbc85c9772948cfdf))
- commonjs build included ([1b3baa5](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/1b3baa5da980b65035a67db28e11cb2aa9d3333c))
- docs improvements ([c25202e](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/c25202ee79424cfb020606f7509755168186308e))
- documentation improvements ([4ad3b5d](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/4ad3b5d7f35cd9c1ad1532e5367dec21594d8ff4))
- flatted parser.resolve method ([5ce2c10](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/5ce2c101097b7ab28d985b108ee079e07f8bacce))
- gradients parsers added to @morfeo/web package ([9bcac4e](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/9bcac4e9dbccd52afc53b5308bb7273659a58c19))
- hooks package added ([0637789](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/0637789d23e12bb3dfb295039e92d2a4f815927a))
- native package ([356cbd6](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/356cbd6de9084be2a02db90073fb8fcbb8191641))
- readme files added to all the packages ([819e60b](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/819e60bb536be471f373c8d3f7cbd5b331c1434c))
- replaced space slice with spacings ([9aaf30a](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/9aaf30a705261c32c778e82d51ca7651c9263457))
- website link replaced inside readme files ([1e55a6d](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/1e55a6d458d2873d09efd5fad5100cbbae382057))
- wip of morfeo cli ([476d48d](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/476d48d1404e0fbbe209f353efcc2e96d9d9a38e))
- **@morfeo/web:** reset css utility ([41c291a](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/41c291a2b319f58ace13295e5af4a0d35a5ed97d))
- **@morfeo/web:** reset css utility prettier ([6695398](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/6695398ceff2b26c76a885f9e6091563411563cd))
- **fonts:** new @morfeo/fonts package ([68ba391](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/68ba39193db598b0506cc584f79e3c08facbb4da))
- **react:** import replacing ([d07c084](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/d07c08454adc890be71bcd577c7922eff7da043d))
- styled components for web ([e5dee4c](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/e5dee4c65277089b282b3ba7da3696451c559b83))
- web styled-components package introduced ([a7677c3](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/a7677c3a8f3c561101b0eba0b87e7fa983677cf9))

## 0.1.8 (2021-07-19)

### Bug Fixes

- responsive values typing ([648c4b1](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/648c4b18d7752344a6b9eda4f5b48e4bb6e5b95e)), closes [#46](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/issues/46)
- **fonts:** prettier ([c97f825](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/c97f8250b6eae14753ceade69f03484c25d40e66))
- fixed typing of packages ([57267c5](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/57267c5f904cbeece433e7bb2573fd9d7a4b3fd4))
- readme files fix and licenses added ([c71286a](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/c71286acf948e65eacb5e0ac808cc9425d576351))

### Features

- docs improvements ([c25202e](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/c25202ee79424cfb020606f7509755168186308e))
- documentation improvements ([4ad3b5d](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/4ad3b5d7f35cd9c1ad1532e5367dec21594d8ff4))
- website link replaced inside readme files ([1e55a6d](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/1e55a6d458d2873d09efd5fad5100cbbae382057))
- **@morfeo/web:** reset css utility ([41c291a](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/41c291a2b319f58ace13295e5af4a0d35a5ed97d))
- **@morfeo/web:** reset css utility prettier ([6695398](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/6695398ceff2b26c76a885f9e6091563411563cd))
- **fonts:** new @morfeo/fonts package ([68ba391](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/68ba39193db598b0506cc584f79e3c08facbb4da))
- added pubish config to packages ([23241fc](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/23241fcb4a1ef76615661e5b8e9e4ed53060b912))
- flatted parser.resolve method ([5ce2c10](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/5ce2c101097b7ab28d985b108ee079e07f8bacce))
- gradients parsers added to @morfeo/web package ([9bcac4e](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/9bcac4e9dbccd52afc53b5308bb7273659a58c19))
- readme files added to all the packages ([819e60b](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/819e60bb536be471f373c8d3f7cbd5b331c1434c))
- replaced space slice with spacings ([9aaf30a](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/9aaf30a705261c32c778e82d51ca7651c9263457))
- **react:** import replacing ([d07c084](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/d07c08454adc890be71bcd577c7922eff7da043d))
- hooks package added ([0637789](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/0637789d23e12bb3dfb295039e92d2a4f815927a))
- native package ([356cbd6](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/356cbd6de9084be2a02db90073fb8fcbb8191641))
- styled components for web ([e5dee4c](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/e5dee4c65277089b282b3ba7da3696451c559b83))
- web styled-components package introduced ([a7677c3](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/a7677c3a8f3c561101b0eba0b87e7fa983677cf9))

## 0.1.7 (2021-07-14)

### Bug Fixes

- responsive values typing ([648c4b1](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/648c4b18d7752344a6b9eda4f5b48e4bb6e5b95e)), closes [#46](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/issues/46)
- **fonts:** prettier ([c97f825](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/c97f8250b6eae14753ceade69f03484c25d40e66))
- fixed typing of packages ([57267c5](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/57267c5f904cbeece433e7bb2573fd9d7a4b3fd4))
- readme files fix and licenses added ([c71286a](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/c71286acf948e65eacb5e0ac808cc9425d576351))

### Features

- documentation improvements ([4ad3b5d](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/4ad3b5d7f35cd9c1ad1532e5367dec21594d8ff4))
- website link replaced inside readme files ([1e55a6d](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/1e55a6d458d2873d09efd5fad5100cbbae382057))
- **@morfeo/web:** reset css utility ([41c291a](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/41c291a2b319f58ace13295e5af4a0d35a5ed97d))
- **@morfeo/web:** reset css utility prettier ([6695398](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/6695398ceff2b26c76a885f9e6091563411563cd))
- **fonts:** new @morfeo/fonts package ([68ba391](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/68ba39193db598b0506cc584f79e3c08facbb4da))
- added pubish config to packages ([23241fc](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/23241fcb4a1ef76615661e5b8e9e4ed53060b912))
- flatted parser.resolve method ([5ce2c10](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/5ce2c101097b7ab28d985b108ee079e07f8bacce))
- gradients parsers added to @morfeo/web package ([9bcac4e](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/9bcac4e9dbccd52afc53b5308bb7273659a58c19))
- hooks package added ([0637789](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/0637789d23e12bb3dfb295039e92d2a4f815927a))
- readme files added to all the packages ([819e60b](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/819e60bb536be471f373c8d3f7cbd5b331c1434c))
- replaced space slice with spacings ([9aaf30a](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/9aaf30a705261c32c778e82d51ca7651c9263457))
- **react:** import replacing ([d07c084](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/d07c08454adc890be71bcd577c7922eff7da043d))
- native package ([356cbd6](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/356cbd6de9084be2a02db90073fb8fcbb8191641))
- styled components for web ([e5dee4c](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/e5dee4c65277089b282b3ba7da3696451c559b83))
- web styled-components package introduced ([a7677c3](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/a7677c3a8f3c561101b0eba0b87e7fa983677cf9))

## 0.1.6 (2021-06-27)

### Bug Fixes

- **fonts:** prettier ([c97f825](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/c97f8250b6eae14753ceade69f03484c25d40e66))
- fixed typing of packages ([57267c5](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/57267c5f904cbeece433e7bb2573fd9d7a4b3fd4))
- readme files fix and licenses added ([c71286a](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/c71286acf948e65eacb5e0ac808cc9425d576351))

### Features

- website link replaced inside readme files ([1e55a6d](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/1e55a6d458d2873d09efd5fad5100cbbae382057))
- **@morfeo/web:** reset css utility ([41c291a](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/41c291a2b319f58ace13295e5af4a0d35a5ed97d))
- **@morfeo/web:** reset css utility prettier ([6695398](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/6695398ceff2b26c76a885f9e6091563411563cd))
- **fonts:** new @morfeo/fonts package ([68ba391](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/68ba39193db598b0506cc584f79e3c08facbb4da))
- added pubish config to packages ([23241fc](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/23241fcb4a1ef76615661e5b8e9e4ed53060b912))
- flatted parser.resolve method ([5ce2c10](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/5ce2c101097b7ab28d985b108ee079e07f8bacce))
- gradients parsers added to @morfeo/web package ([9bcac4e](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/9bcac4e9dbccd52afc53b5308bb7273659a58c19))
- hooks package added ([0637789](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/0637789d23e12bb3dfb295039e92d2a4f815927a))
- readme files added to all the packages ([819e60b](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/819e60bb536be471f373c8d3f7cbd5b331c1434c))
- replaced space slice with spacings ([9aaf30a](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/9aaf30a705261c32c778e82d51ca7651c9263457))
- **react:** import replacing ([d07c084](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/d07c08454adc890be71bcd577c7922eff7da043d))
- native package ([356cbd6](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/356cbd6de9084be2a02db90073fb8fcbb8191641))
- styled components for web ([e5dee4c](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/e5dee4c65277089b282b3ba7da3696451c559b83))
- web styled-components package introduced ([a7677c3](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/a7677c3a8f3c561101b0eba0b87e7fa983677cf9))

## 0.1.5 (2021-05-23)

### Bug Fixes

- fixed typing of packages ([57267c5](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/57267c5f904cbeece433e7bb2573fd9d7a4b3fd4))
- readme files fix and licenses added ([c71286a](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/c71286acf948e65eacb5e0ac808cc9425d576351))

### Features

- **react:** import replacing ([d07c084](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/d07c08454adc890be71bcd577c7922eff7da043d))
- added pubish config to packages ([23241fc](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/23241fcb4a1ef76615661e5b8e9e4ed53060b912))
- flatted parser.resolve method ([5ce2c10](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/5ce2c101097b7ab28d985b108ee079e07f8bacce))
- hooks package added ([0637789](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/0637789d23e12bb3dfb295039e92d2a4f815927a))
- native package ([356cbd6](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/356cbd6de9084be2a02db90073fb8fcbb8191641))
- readme files added to all the packages ([819e60b](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/819e60bb536be471f373c8d3f7cbd5b331c1434c))
- styled components for web ([e5dee4c](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/e5dee4c65277089b282b3ba7da3696451c559b83))
- web styled-components package introduced ([a7677c3](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/a7677c3a8f3c561101b0eba0b87e7fa983677cf9))

## 0.1.4 (2021-05-22)

### Bug Fixes

- fixed typing of packages ([57267c5](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/57267c5f904cbeece433e7bb2573fd9d7a4b3fd4))
- readme files fix and licenses added ([c71286a](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/c71286acf948e65eacb5e0ac808cc9425d576351))

### Features

- added pubish config to packages ([23241fc](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/23241fcb4a1ef76615661e5b8e9e4ed53060b912))
- flatted parser.resolve method ([5ce2c10](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/5ce2c101097b7ab28d985b108ee079e07f8bacce))
- hooks package added ([0637789](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/0637789d23e12bb3dfb295039e92d2a4f815927a))
- native package ([356cbd6](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/356cbd6de9084be2a02db90073fb8fcbb8191641))
- readme files added to all the packages ([819e60b](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/819e60bb536be471f373c8d3f7cbd5b331c1434c))
- styled components for web ([e5dee4c](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/e5dee4c65277089b282b3ba7da3696451c559b83))
- web styled-components package introduced ([a7677c3](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/web/commit/a7677c3a8f3c561101b0eba0b87e7fa983677cf9))

## 0.1.3 (2021-05-21)

### Bug Fixes

- fixed typing of packages ([57267c5](https://bitbucket.org/me-sign/design-system/commits/57267c5f904cbeece433e7bb2573fd9d7a4b3fd4))

### Features

- added pubish config to packages ([23241fc](https://bitbucket.org/me-sign/design-system/commits/23241fcb4a1ef76615661e5b8e9e4ed53060b912))
- flatted parser.resolve method ([5ce2c10](https://bitbucket.org/me-sign/design-system/commits/5ce2c101097b7ab28d985b108ee079e07f8bacce))
- hooks package added ([0637789](https://bitbucket.org/me-sign/design-system/commits/0637789d23e12bb3dfb295039e92d2a4f815927a))
- native package ([356cbd6](https://bitbucket.org/me-sign/design-system/commits/356cbd6de9084be2a02db90073fb8fcbb8191641))
- styled components for web ([e5dee4c](https://bitbucket.org/me-sign/design-system/commits/e5dee4c65277089b282b3ba7da3696451c559b83))
- web styled-components package introduced ([a7677c3](https://bitbucket.org/me-sign/design-system/commits/a7677c3a8f3c561101b0eba0b87e7fa983677cf9))

## 0.1.2 (2021-05-20)

### Bug Fixes

- fixed typing of packages ([57267c5](https://bitbucket.org/me-sign/design-system/commits/57267c5f904cbeece433e7bb2573fd9d7a4b3fd4))

### Features

- added pubish config to packages ([23241fc](https://bitbucket.org/me-sign/design-system/commits/23241fcb4a1ef76615661e5b8e9e4ed53060b912))
- flatted parser.resolve method ([5ce2c10](https://bitbucket.org/me-sign/design-system/commits/5ce2c101097b7ab28d985b108ee079e07f8bacce))
- hooks package added ([0637789](https://bitbucket.org/me-sign/design-system/commits/0637789d23e12bb3dfb295039e92d2a4f815927a))
- native package ([356cbd6](https://bitbucket.org/me-sign/design-system/commits/356cbd6de9084be2a02db90073fb8fcbb8191641))
- styled components for web ([e5dee4c](https://bitbucket.org/me-sign/design-system/commits/e5dee4c65277089b282b3ba7da3696451c559b83))
- web styled-components package introduced ([a7677c3](https://bitbucket.org/me-sign/design-system/commits/a7677c3a8f3c561101b0eba0b87e7fa983677cf9))

## 0.1.1 (2021-05-20)

### Bug Fixes

- fixed typing of packages ([57267c5](https://bitbucket.org/me-sign/design-system/commits/57267c5f904cbeece433e7bb2573fd9d7a4b3fd4))

### Features

- added pubish config to packages ([23241fc](https://bitbucket.org/me-sign/design-system/commits/23241fcb4a1ef76615661e5b8e9e4ed53060b912))
- flatted parser.resolve method ([5ce2c10](https://bitbucket.org/me-sign/design-system/commits/5ce2c101097b7ab28d985b108ee079e07f8bacce))
- hooks package added ([0637789](https://bitbucket.org/me-sign/design-system/commits/0637789d23e12bb3dfb295039e92d2a4f815927a))
- native package ([356cbd6](https://bitbucket.org/me-sign/design-system/commits/356cbd6de9084be2a02db90073fb8fcbb8191641))
- styled components for web ([e5dee4c](https://bitbucket.org/me-sign/design-system/commits/e5dee4c65277089b282b3ba7da3696451c559b83))
- web styled-components package introduced ([a7677c3](https://bitbucket.org/me-sign/design-system/commits/a7677c3a8f3c561101b0eba0b87e7fa983677cf9))

# 0.1.0 (2021-05-19)

### Bug Fixes

- fixed typing of packages ([57267c5](https://bitbucket.org/me-sign/design-system/commits/57267c5f904cbeece433e7bb2573fd9d7a4b3fd4))

### Features

- added pubish config to packages ([23241fc](https://bitbucket.org/me-sign/design-system/commits/23241fcb4a1ef76615661e5b8e9e4ed53060b912))
- flatted parser.resolve method ([5ce2c10](https://bitbucket.org/me-sign/design-system/commits/5ce2c101097b7ab28d985b108ee079e07f8bacce))
- hooks package added ([0637789](https://bitbucket.org/me-sign/design-system/commits/0637789d23e12bb3dfb295039e92d2a4f815927a))
- native package ([356cbd6](https://bitbucket.org/me-sign/design-system/commits/356cbd6de9084be2a02db90073fb8fcbb8191641))
- styled components for web ([e5dee4c](https://bitbucket.org/me-sign/design-system/commits/e5dee4c65277089b282b3ba7da3696451c559b83))
- web styled-components package introduced ([a7677c3](https://bitbucket.org/me-sign/design-system/commits/a7677c3a8f3c561101b0eba0b87e7fa983677cf9))

## 0.0.9 (2021-05-18)

### Bug Fixes

- fixed typing of packages ([57267c5](https://bitbucket.org/me-sign/design-system/commits/57267c5f904cbeece433e7bb2573fd9d7a4b3fd4))

### Features

- added pubish config to packages ([23241fc](https://bitbucket.org/me-sign/design-system/commits/23241fcb4a1ef76615661e5b8e9e4ed53060b912))
- hooks package added ([0637789](https://bitbucket.org/me-sign/design-system/commits/0637789d23e12bb3dfb295039e92d2a4f815927a))
- native package ([356cbd6](https://bitbucket.org/me-sign/design-system/commits/356cbd6de9084be2a02db90073fb8fcbb8191641))
- styled components for web ([e5dee4c](https://bitbucket.org/me-sign/design-system/commits/e5dee4c65277089b282b3ba7da3696451c559b83))
- web styled-components package introduced ([a7677c3](https://bitbucket.org/me-sign/design-system/commits/a7677c3a8f3c561101b0eba0b87e7fa983677cf9))

## 0.0.8 (2021-05-16)

### Bug Fixes

- fixed typing of packages ([57267c5](https://bitbucket.org/me-sign/design-system/commits/57267c5f904cbeece433e7bb2573fd9d7a4b3fd4))

### Features

- added pubish config to packages ([23241fc](https://bitbucket.org/me-sign/design-system/commits/23241fcb4a1ef76615661e5b8e9e4ed53060b912))
- hooks package added ([0637789](https://bitbucket.org/me-sign/design-system/commits/0637789d23e12bb3dfb295039e92d2a4f815927a))
- native package ([356cbd6](https://bitbucket.org/me-sign/design-system/commits/356cbd6de9084be2a02db90073fb8fcbb8191641))
- styled components for web ([e5dee4c](https://bitbucket.org/me-sign/design-system/commits/e5dee4c65277089b282b3ba7da3696451c559b83))
- web styled-components package introduced ([a7677c3](https://bitbucket.org/me-sign/design-system/commits/a7677c3a8f3c561101b0eba0b87e7fa983677cf9))

## 0.0.7 (2021-05-14)

### Bug Fixes

- fixed typing of packages ([57267c5](https://bitbucket.org/me-sign/design-system/commits/57267c5f904cbeece433e7bb2573fd9d7a4b3fd4))

### Features

- added pubish config to packages ([23241fc](https://bitbucket.org/me-sign/design-system/commits/23241fcb4a1ef76615661e5b8e9e4ed53060b912))
- hooks package added ([0637789](https://bitbucket.org/me-sign/design-system/commits/0637789d23e12bb3dfb295039e92d2a4f815927a))
- native package ([356cbd6](https://bitbucket.org/me-sign/design-system/commits/356cbd6de9084be2a02db90073fb8fcbb8191641))
- styled components for web ([e5dee4c](https://bitbucket.org/me-sign/design-system/commits/e5dee4c65277089b282b3ba7da3696451c559b83))
- web styled-components package introduced ([a7677c3](https://bitbucket.org/me-sign/design-system/commits/a7677c3a8f3c561101b0eba0b87e7fa983677cf9))

## 0.0.6 (2021-05-13)

### Bug Fixes

- fixed typing of packages ([57267c5](https://bitbucket.org/me-sign/design-system/commits/57267c5f904cbeece433e7bb2573fd9d7a4b3fd4))

### Features

- added pubish config to packages ([23241fc](https://bitbucket.org/me-sign/design-system/commits/23241fcb4a1ef76615661e5b8e9e4ed53060b912))
- hooks package added ([0637789](https://bitbucket.org/me-sign/design-system/commits/0637789d23e12bb3dfb295039e92d2a4f815927a))
- native package ([356cbd6](https://bitbucket.org/me-sign/design-system/commits/356cbd6de9084be2a02db90073fb8fcbb8191641))
- styled components for web ([e5dee4c](https://bitbucket.org/me-sign/design-system/commits/e5dee4c65277089b282b3ba7da3696451c559b83))
- web styled-components package introduced ([a7677c3](https://bitbucket.org/me-sign/design-system/commits/a7677c3a8f3c561101b0eba0b87e7fa983677cf9))

## 0.0.5 (2021-05-13)

### Bug Fixes

- fixed typing of packages ([57267c5](https://bitbucket.org/me-sign/design-system/commits/57267c5f904cbeece433e7bb2573fd9d7a4b3fd4))

### Features

- added pubish config to packages ([23241fc](https://bitbucket.org/me-sign/design-system/commits/23241fcb4a1ef76615661e5b8e9e4ed53060b912))
- hooks package added ([0637789](https://bitbucket.org/me-sign/design-system/commits/0637789d23e12bb3dfb295039e92d2a4f815927a))
- native package ([356cbd6](https://bitbucket.org/me-sign/design-system/commits/356cbd6de9084be2a02db90073fb8fcbb8191641))
- styled components for web ([e5dee4c](https://bitbucket.org/me-sign/design-system/commits/e5dee4c65277089b282b3ba7da3696451c559b83))
- web styled-components package introduced ([a7677c3](https://bitbucket.org/me-sign/design-system/commits/a7677c3a8f3c561101b0eba0b87e7fa983677cf9))

## 0.0.4 (2021-05-13)

### Bug Fixes

- fixed typing of packages ([57267c5](https://bitbucket.org/me-sign/design-system/commits/57267c5f904cbeece433e7bb2573fd9d7a4b3fd4))

### Features

- added pubish config to packages ([23241fc](https://bitbucket.org/me-sign/design-system/commits/23241fcb4a1ef76615661e5b8e9e4ed53060b912))
- hooks package added ([0637789](https://bitbucket.org/me-sign/design-system/commits/0637789d23e12bb3dfb295039e92d2a4f815927a))
- native package ([356cbd6](https://bitbucket.org/me-sign/design-system/commits/356cbd6de9084be2a02db90073fb8fcbb8191641))
- styled components for web ([e5dee4c](https://bitbucket.org/me-sign/design-system/commits/e5dee4c65277089b282b3ba7da3696451c559b83))
- web styled-components package introduced ([a7677c3](https://bitbucket.org/me-sign/design-system/commits/a7677c3a8f3c561101b0eba0b87e7fa983677cf9))

## 0.0.3 (2021-05-06)

### Bug Fixes

- fixed typing of packages ([57267c5](https://bitbucket.org/me-sign/design-system/commits/57267c5f904cbeece433e7bb2573fd9d7a4b3fd4))

### Features

- added pubish config to packages ([23241fc](https://bitbucket.org/me-sign/design-system/commits/23241fcb4a1ef76615661e5b8e9e4ed53060b912))
- hooks package added ([0637789](https://bitbucket.org/me-sign/design-system/commits/0637789d23e12bb3dfb295039e92d2a4f815927a))

## 0.0.2 (2021-05-06)

### Bug Fixes

- fixed typing of packages ([57267c5](https://bitbucket.org/me-sign/design-system/commits/57267c5f904cbeece433e7bb2573fd9d7a4b3fd4))

### Features

- added pubish config to packages ([23241fc](https://bitbucket.org/me-sign/design-system/commits/23241fcb4a1ef76615661e5b8e9e4ed53060b912))
- hooks package added ([0637789](https://bitbucket.org/me-sign/design-system/commits/0637789d23e12bb3dfb295039e92d2a4f815927a))
