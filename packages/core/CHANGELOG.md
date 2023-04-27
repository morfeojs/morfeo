# Change Log

## 0.9.2

### Patch Changes

- 766be5f: Fixed publish command in order to replace `workspace/*` with the actual version of the package.
- Updated dependencies [766be5f]
  - @morfeo/spec@0.9.2
  - @morfeo/utils@0.9.2

## 0.9.1

### Patch Changes

- 1683b96: Media queries are now generated mobile-frist by default, fixed also the order of the css generated at build time to be sure that media queries are computed in he right way
- b094895: feat(core): added short version of width and height (`h`, `w`, `minH`, `minW`)
- Updated dependencies [1683b96]
- Updated dependencies [b094895]
  - @morfeo/spec@0.9.1
  - @morfeo/utils@0.9.1

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [0.9.0](https://github.com/morfeojs/morfeo/compare/v0.7.0...v0.9.0) (2023-04-16)

### Bug Fixes

- applied review suggestion ([4743e74](https://github.com/morfeojs/morfeo/commit/4743e743fbd8005191bc3fc6ca5ae7618cd013d6))
- colors schemas typing ([09679b5](https://github.com/morfeojs/morfeo/commit/09679b58b371129030735b98beef8a4475cbe58f))
- colors schemas typing ([08142ba](https://github.com/morfeojs/morfeo/commit/08142baebf6ebca992c0efbc72fed527a8ec7a9a))
- **deps:** update dependency typescript to v4.9.5 ([#649](https://github.com/morfeojs/morfeo/issues/649)) ([9143596](https://github.com/morfeojs/morfeo/commit/91435968289ad73828a713646c478dabe6b039e4))
- linter ([b8bce8c](https://github.com/morfeojs/morfeo/commit/b8bce8cb536962f56ea57395a0f0e986d6d891da))
- removed useless spread og object ([02504ab](https://github.com/morfeojs/morfeo/commit/02504abaf95eafdbc0a8fc2883f8ae18a465a918))
- resolve MR comments ([979bff1](https://github.com/morfeojs/morfeo/commit/979bff194ff54470b8ceecbde43d10830c4eec2d))

### Features

- [#648](https://github.com/morfeojs/morfeo/issues/648) - enabled any css selector ([#651](https://github.com/morfeojs/morfeo/issues/651)) ([5980606](https://github.com/morfeojs/morfeo/commit/5980606422278644ecfd65dbc8021ca2d68d69a3))
- build time ([f62c3a1](https://github.com/morfeojs/morfeo/commit/f62c3a1e5c00eb1c1994b0d2bac13934b1a0802c))
- **build-time:** [#647](https://github.com/morfeojs/morfeo/issues/647) createUseStyle ([#692](https://github.com/morfeojs/morfeo/issues/692)) ([afd2f17](https://github.com/morfeojs/morfeo/commit/afd2f17813a489789a601be0ab58e78c9e13ceb6))
- color placeholders ([aa4be76](https://github.com/morfeojs/morfeo/commit/aa4be765f6a74afa8c8f705f0d0ead85ec4dbe1f))
- colorSchemas feature ([f5bdb7b](https://github.com/morfeojs/morfeo/commit/f5bdb7b9b23bb6f75eb79a830570caa0f89f73d1))
- introduced @morfeo/css package ([31fabdc](https://github.com/morfeojs/morfeo/commit/31fabdcdc49364219c2bc9686824e9fefd2e0492))
- linting ([4e191da](https://github.com/morfeojs/morfeo/commit/4e191da2917e6fadc5742f48ce9eb34d066b0f15))
- states feature ([835510b](https://github.com/morfeojs/morfeo/commit/835510ba575c95571c419c12cf45c8e5dec1a6ef))
- version v0.8.0 ([fd2fcb2](https://github.com/morfeojs/morfeo/commit/fd2fcb2778aa1f37ade15570926441a706cb945f))

# [0.8.0](https://github.com/morfeojs/morfeo/compare/v0.7.0...v0.8.0) (2023-01-28)

### Bug Fixes

- applied review suggestion ([4743e74](https://github.com/morfeojs/morfeo/commit/4743e743fbd8005191bc3fc6ca5ae7618cd013d6))
- colors schemas typing ([09679b5](https://github.com/morfeojs/morfeo/commit/09679b58b371129030735b98beef8a4475cbe58f))
- colors schemas typing ([08142ba](https://github.com/morfeojs/morfeo/commit/08142baebf6ebca992c0efbc72fed527a8ec7a9a))
- linter ([b8bce8c](https://github.com/morfeojs/morfeo/commit/b8bce8cb536962f56ea57395a0f0e986d6d891da))
- removed useless spread og object ([02504ab](https://github.com/morfeojs/morfeo/commit/02504abaf95eafdbc0a8fc2883f8ae18a465a918))
- resolve MR comments ([979bff1](https://github.com/morfeojs/morfeo/commit/979bff194ff54470b8ceecbde43d10830c4eec2d))

### Features

- build time ([f62c3a1](https://github.com/morfeojs/morfeo/commit/f62c3a1e5c00eb1c1994b0d2bac13934b1a0802c))
- color placeholders ([aa4be76](https://github.com/morfeojs/morfeo/commit/aa4be765f6a74afa8c8f705f0d0ead85ec4dbe1f))
- colorSchemas feature ([f5bdb7b](https://github.com/morfeojs/morfeo/commit/f5bdb7b9b23bb6f75eb79a830570caa0f89f73d1))
- introduced @morfeo/css package ([31fabdc](https://github.com/morfeojs/morfeo/commit/31fabdcdc49364219c2bc9686824e9fefd2e0492))
- linting ([4e191da](https://github.com/morfeojs/morfeo/commit/4e191da2917e6fadc5742f48ce9eb34d066b0f15))
- states feature ([835510b](https://github.com/morfeojs/morfeo/commit/835510ba575c95571c419c12cf45c8e5dec1a6ef))

# 0.7.0 (2022-05-30)

### Bug Fixes

- [#116](https://github.com/morfeojs/morfeo/issues/116) extends components from theme ([803c13e](https://github.com/morfeojs/morfeo/commit/803c13ea3ddc9fc34dcecbe507d8f01cbf68b3a4))
- [#136](https://github.com/morfeojs/morfeo/issues/136) ([50ca5e4](https://github.com/morfeojs/morfeo/commit/50ca5e4803ba5335245995e31d09c9273a4a2f16))
- benchmarks fixed ([fc59036](https://github.com/morfeojs/morfeo/commit/fc59036327137cae1b3886c3b6e0a5ca239e5d9f))
- cli handling of shadows fixed and shadow parser improved ([7cc1a0a](https://github.com/morfeojs/morfeo/commit/7cc1a0a0d6ccd298f407e5d0b6ebc2070d976720))
- Closes [#113](https://github.com/morfeojs/morfeo/issues/113) ([f3b7f8a](https://github.com/morfeojs/morfeo/commit/f3b7f8a29bdd9efe7f6c38ebd5f736c12ebedc95))
- documentation ([31c7c6a](https://github.com/morfeojs/morfeo/commit/31c7c6a54e423e33134133ff3b582f61e5c7ac15))
- edited radii tests and removed max workers from jest.onfig ([125b3d5](https://github.com/morfeojs/morfeo/commit/125b3d523b94c04e3dbe0671e9ee8ab85eac8bda))
- fixed types of web sandbox components ([45ce774](https://github.com/morfeojs/morfeo/commit/45ce774ff77f21b83d272279d97b312a7b6182f6))
- fixed typing of packages ([57267c5](https://github.com/morfeojs/morfeo/commit/57267c5f904cbeece433e7bb2573fd9d7a4b3fd4))
- prettier ([57516db](https://github.com/morfeojs/morfeo/commit/57516db7d44401c4c7fc2ce2a57a95d6da6665b7))
- readme files fix and licenses added ([c71286a](https://github.com/morfeojs/morfeo/commit/c71286acf948e65eacb5e0ac808cc9425d576351))
- shadow parser fix & improvements ([bb8b7a2](https://github.com/morfeojs/morfeo/commit/bb8b7a23886cfbb6016b416a93b0199e4f9a3d68))
- styled-components-web packages ([9f41713](https://github.com/morfeojs/morfeo/commit/9f417138f21bd433783d8e95b922d391ced089e9)), closes [#42](https://github.com/morfeojs/morfeo/issues/42)
- tests ([61e4593](https://github.com/morfeojs/morfeo/commit/61e45931ced66121d11f5321f46f3c253386e4b3))

### chore

- [#152](https://github.com/morfeojs/morfeo/issues/152) ([4e249ff](https://github.com/morfeojs/morfeo/commit/4e249ffe196839c56d8334663d3b00d98ca000a2))

### Features

- [#142](https://github.com/morfeojs/morfeo/issues/142) ([b1c821a](https://github.com/morfeojs/morfeo/commit/b1c821a13ab038e686c436fb25568e4aa6e39bd4))
- [#142](https://github.com/morfeojs/morfeo/issues/142) ([52cc477](https://github.com/morfeojs/morfeo/commit/52cc477cec863efdbb8b83b7214895415565d339))
- [#144](https://github.com/morfeojs/morfeo/issues/144) ([16b382a](https://github.com/morfeojs/morfeo/commit/16b382a9bd9eb8bc434569f6f8cb8dd8374833da))
- [#150](https://github.com/morfeojs/morfeo/issues/150) ([33be120](https://github.com/morfeojs/morfeo/commit/33be120e0718ec408ffcc18d20a52240180992db))
- 76 ([0a3a065](https://github.com/morfeojs/morfeo/commit/0a3a065f446dad2c814b07570d708959d4390c32))
- add theme removal ([fb20b50](https://github.com/morfeojs/morfeo/commit/fb20b501e877e2137831f9e86629e213007b88b7))
- added pubish config to packages ([23241fc](https://github.com/morfeojs/morfeo/commit/23241fcb4a1ef76615661e5b8e9e4ed53060b912))
- added pwa plugin to documentation website ([1808781](https://github.com/morfeojs/morfeo/commit/1808781f20f0c41f6d4a965eb5bad522caf9e56a))
- all css props mapped and styled components package improved ([c3771c6](https://github.com/morfeojs/morfeo/commit/c3771c64b02fc7bbfa6137bff70d1acae8e7932a))
- cache and benchmarks ([aa360dd](https://github.com/morfeojs/morfeo/commit/aa360ddfb44ce2be66a0513783ddec1ff6b42e09))
- closes [#51](https://github.com/morfeojs/morfeo/issues/51) ([0ab4270](https://github.com/morfeojs/morfeo/commit/0ab4270a0d054bd67f42c2d74fdecee24349de1a))
- closes [#65](https://github.com/morfeojs/morfeo/issues/65) ([bbf6e32](https://github.com/morfeojs/morfeo/commit/bbf6e32f62c32af51d1795bbbc85c9772948cfdf))
- commonjs build included ([1b3baa5](https://github.com/morfeojs/morfeo/commit/1b3baa5da980b65035a67db28e11cb2aa9d3333c))
- component utility introduced ([d502a59](https://github.com/morfeojs/morfeo/commit/d502a59f3cd72ebcf0d387a092e4ca43a70da9ac))
- documentation improvements ([4ad3b5d](https://github.com/morfeojs/morfeo/commit/4ad3b5d7f35cd9c1ad1532e5367dec21594d8ff4))
- documentation update ([2bf10e7](https://github.com/morfeojs/morfeo/commit/2bf10e7066064a403d1e801d55a467626b85fdfd))
- flatted parser.resolve method ([5ce2c10](https://github.com/morfeojs/morfeo/commit/5ce2c101097b7ab28d985b108ee079e07f8bacce))
- hooks package added ([0637789](https://github.com/morfeojs/morfeo/commit/0637789d23e12bb3dfb295039e92d2a4f815927a))
- introucing svelte package and sandbox ([0e8e9e2](https://github.com/morfeojs/morfeo/commit/0e8e9e22f38576730c73442714c1a611847d9bc7))
- licenses updated ([45b042a](https://github.com/morfeojs/morfeo/commit/45b042aec49d17e7a261330b713cc05f6b4355b2))
- morfeo instance singleton ([913370e](https://github.com/morfeojs/morfeo/commit/913370e896b38fba60851aaccf9b9092bdcbafa4))
- native package ([356cbd6](https://github.com/morfeojs/morfeo/commit/356cbd6de9084be2a02db90073fb8fcbb8191641))
- package `@morfeo/styled-components-web` removed ([ff6fd3c](https://github.com/morfeojs/morfeo/commit/ff6fd3c2913e0fd37bcc6a0a05cdb889560086d5))
- **preset-default:** preset theme package ([7a66269](https://github.com/morfeojs/morfeo/commit/7a66269b2fff8d1db4939425f506fc6bec02ce18))
- **react:** import replacing ([d07c084](https://github.com/morfeojs/morfeo/commit/d07c08454adc890be71bcd577c7922eff7da043d))
- readme files added to all the packages ([819e60b](https://github.com/morfeojs/morfeo/commit/819e60bb536be471f373c8d3f7cbd5b331c1434c))
- READMEs updated ([5637cfc](https://github.com/morfeojs/morfeo/commit/5637cfc58bb94ec1d88e4eb28d84e27f17b085df))
- replaced space slice with spacings ([9aaf30a](https://github.com/morfeojs/morfeo/commit/9aaf30a705261c32c778e82d51ca7651c9263457))
- styled components for web ([e5dee4c](https://github.com/morfeojs/morfeo/commit/e5dee4c65277089b282b3ba7da3696451c559b83))
- update callback to jss function ([6218907](https://github.com/morfeojs/morfeo/commit/62189076da38078df33796fb16576b13ecdeeb85))
- useSubscribe hook introduced ([8de68f2](https://github.com/morfeojs/morfeo/commit/8de68f25ed0118009d0c26c913acb6cbca697020))
- web styled-components package introduced ([a7677c3](https://github.com/morfeojs/morfeo/commit/a7677c3a8f3c561101b0eba0b87e7fa983677cf9))
- website link replaced inside readme files ([1e55a6d](https://github.com/morfeojs/morfeo/commit/1e55a6d458d2873d09efd5fad5100cbbae382057))
- wip of morfeo cli ([476d48d](https://github.com/morfeojs/morfeo/commit/476d48d1404e0fbbe209f353efcc2e96d9d9a38e))

### BREAKING CHANGES

- @morfeo/core: breaking change the the core api:

1. morfeo.useTheme renamed into morfeo.setCurrentTheme
2. morfeo.getCurrent renamed into morfeo.getCurrentTheme

# [0.6.0](https://github.com/morfeojs/morfeo/compare/v0.0.0...v0.6.0) (2022-05-26)

### Features

- package `@morfeo/styled-components-web` removed ([ff6fd3c](https://github.com/morfeojs/morfeo/commit/ff6fd3c2913e0fd37bcc6a0a05cdb889560086d5))

## 0.5.1 (2022-04-30)

### Bug Fixes

- [#116](https://github.com/morfeojs/morfeo/issues/116) extends components from theme ([803c13e](https://github.com/morfeojs/morfeo/commit/803c13ea3ddc9fc34dcecbe507d8f01cbf68b3a4))
- [#136](https://github.com/morfeojs/morfeo/issues/136) ([50ca5e4](https://github.com/morfeojs/morfeo/commit/50ca5e4803ba5335245995e31d09c9273a4a2f16))
- benchmarks fixed ([fc59036](https://github.com/morfeojs/morfeo/commit/fc59036327137cae1b3886c3b6e0a5ca239e5d9f))
- cli handling of shadows fixed and shadow parser improved ([7cc1a0a](https://github.com/morfeojs/morfeo/commit/7cc1a0a0d6ccd298f407e5d0b6ebc2070d976720))
- Closes [#113](https://github.com/morfeojs/morfeo/issues/113) ([f3b7f8a](https://github.com/morfeojs/morfeo/commit/f3b7f8a29bdd9efe7f6c38ebd5f736c12ebedc95))
- documentation ([31c7c6a](https://github.com/morfeojs/morfeo/commit/31c7c6a54e423e33134133ff3b582f61e5c7ac15))
- edited radii tests and removed max workers from jest.onfig ([125b3d5](https://github.com/morfeojs/morfeo/commit/125b3d523b94c04e3dbe0671e9ee8ab85eac8bda))
- fixed types of web sandbox components ([45ce774](https://github.com/morfeojs/morfeo/commit/45ce774ff77f21b83d272279d97b312a7b6182f6))
- fixed typing of packages ([57267c5](https://github.com/morfeojs/morfeo/commit/57267c5f904cbeece433e7bb2573fd9d7a4b3fd4))
- prettier ([57516db](https://github.com/morfeojs/morfeo/commit/57516db7d44401c4c7fc2ce2a57a95d6da6665b7))
- readme files fix and licenses added ([c71286a](https://github.com/morfeojs/morfeo/commit/c71286acf948e65eacb5e0ac808cc9425d576351))
- shadow parser fix & improvements ([bb8b7a2](https://github.com/morfeojs/morfeo/commit/bb8b7a23886cfbb6016b416a93b0199e4f9a3d68))
- styled-components-web packages ([9f41713](https://github.com/morfeojs/morfeo/commit/9f417138f21bd433783d8e95b922d391ced089e9)), closes [#42](https://github.com/morfeojs/morfeo/issues/42)
- tests ([61e4593](https://github.com/morfeojs/morfeo/commit/61e45931ced66121d11f5321f46f3c253386e4b3))

### chore

- [#152](https://github.com/morfeojs/morfeo/issues/152) ([4e249ff](https://github.com/morfeojs/morfeo/commit/4e249ffe196839c56d8334663d3b00d98ca000a2))

### Features

- [#142](https://github.com/morfeojs/morfeo/issues/142) ([b1c821a](https://github.com/morfeojs/morfeo/commit/b1c821a13ab038e686c436fb25568e4aa6e39bd4))
- [#142](https://github.com/morfeojs/morfeo/issues/142) ([52cc477](https://github.com/morfeojs/morfeo/commit/52cc477cec863efdbb8b83b7214895415565d339))
- [#144](https://github.com/morfeojs/morfeo/issues/144) ([16b382a](https://github.com/morfeojs/morfeo/commit/16b382a9bd9eb8bc434569f6f8cb8dd8374833da))
- [#150](https://github.com/morfeojs/morfeo/issues/150) ([33be120](https://github.com/morfeojs/morfeo/commit/33be120e0718ec408ffcc18d20a52240180992db))
- 76 ([0a3a065](https://github.com/morfeojs/morfeo/commit/0a3a065f446dad2c814b07570d708959d4390c32))
- add theme removal ([fb20b50](https://github.com/morfeojs/morfeo/commit/fb20b501e877e2137831f9e86629e213007b88b7))
- added pubish config to packages ([23241fc](https://github.com/morfeojs/morfeo/commit/23241fcb4a1ef76615661e5b8e9e4ed53060b912))
- added pwa plugin to documentation website ([1808781](https://github.com/morfeojs/morfeo/commit/1808781f20f0c41f6d4a965eb5bad522caf9e56a))
- all css props mapped and styled components package improved ([c3771c6](https://github.com/morfeojs/morfeo/commit/c3771c64b02fc7bbfa6137bff70d1acae8e7932a))
- cache and benchmarks ([aa360dd](https://github.com/morfeojs/morfeo/commit/aa360ddfb44ce2be66a0513783ddec1ff6b42e09))
- closes [#51](https://github.com/morfeojs/morfeo/issues/51) ([0ab4270](https://github.com/morfeojs/morfeo/commit/0ab4270a0d054bd67f42c2d74fdecee24349de1a))
- closes [#65](https://github.com/morfeojs/morfeo/issues/65) ([bbf6e32](https://github.com/morfeojs/morfeo/commit/bbf6e32f62c32af51d1795bbbc85c9772948cfdf))
- commonjs build included ([1b3baa5](https://github.com/morfeojs/morfeo/commit/1b3baa5da980b65035a67db28e11cb2aa9d3333c))
- component utility introduced ([d502a59](https://github.com/morfeojs/morfeo/commit/d502a59f3cd72ebcf0d387a092e4ca43a70da9ac))
- documentation improvements ([4ad3b5d](https://github.com/morfeojs/morfeo/commit/4ad3b5d7f35cd9c1ad1532e5367dec21594d8ff4))
- documentation update ([2bf10e7](https://github.com/morfeojs/morfeo/commit/2bf10e7066064a403d1e801d55a467626b85fdfd))
- flatted parser.resolve method ([5ce2c10](https://github.com/morfeojs/morfeo/commit/5ce2c101097b7ab28d985b108ee079e07f8bacce))
- hooks package added ([0637789](https://github.com/morfeojs/morfeo/commit/0637789d23e12bb3dfb295039e92d2a4f815927a))
- introucing svelte package and sandbox ([0e8e9e2](https://github.com/morfeojs/morfeo/commit/0e8e9e22f38576730c73442714c1a611847d9bc7))
- licenses updated ([45b042a](https://github.com/morfeojs/morfeo/commit/45b042aec49d17e7a261330b713cc05f6b4355b2))
- morfeo instance singleton ([913370e](https://github.com/morfeojs/morfeo/commit/913370e896b38fba60851aaccf9b9092bdcbafa4))
- native package ([356cbd6](https://github.com/morfeojs/morfeo/commit/356cbd6de9084be2a02db90073fb8fcbb8191641))
- **preset-default:** preset theme package ([7a66269](https://github.com/morfeojs/morfeo/commit/7a66269b2fff8d1db4939425f506fc6bec02ce18))
- **react:** import replacing ([d07c084](https://github.com/morfeojs/morfeo/commit/d07c08454adc890be71bcd577c7922eff7da043d))
- readme files added to all the packages ([819e60b](https://github.com/morfeojs/morfeo/commit/819e60bb536be471f373c8d3f7cbd5b331c1434c))
- READMEs updated ([5637cfc](https://github.com/morfeojs/morfeo/commit/5637cfc58bb94ec1d88e4eb28d84e27f17b085df))
- replaced space slice with spacings ([9aaf30a](https://github.com/morfeojs/morfeo/commit/9aaf30a705261c32c778e82d51ca7651c9263457))
- styled components for web ([e5dee4c](https://github.com/morfeojs/morfeo/commit/e5dee4c65277089b282b3ba7da3696451c559b83))
- update callback to jss function ([6218907](https://github.com/morfeojs/morfeo/commit/62189076da38078df33796fb16576b13ecdeeb85))
- useSubscribe hook introduced ([8de68f2](https://github.com/morfeojs/morfeo/commit/8de68f25ed0118009d0c26c913acb6cbca697020))
- web styled-components package introduced ([a7677c3](https://github.com/morfeojs/morfeo/commit/a7677c3a8f3c561101b0eba0b87e7fa983677cf9))
- website link replaced inside readme files ([1e55a6d](https://github.com/morfeojs/morfeo/commit/1e55a6d458d2873d09efd5fad5100cbbae382057))
- wip of morfeo cli ([476d48d](https://github.com/morfeojs/morfeo/commit/476d48d1404e0fbbe209f353efcc2e96d9d9a38e))

### BREAKING CHANGES

- @morfeo/core: breaking change the the core api:

1. morfeo.useTheme renamed into morfeo.setCurrentTheme
2. morfeo.getCurrent renamed into morfeo.getCurrentTheme

# 0.5.0 (2022-02-13)

### Bug Fixes

- [#116](https://github.com/morfeojs/morfeo/issues/116) extends components from theme ([803c13e](https://github.com/morfeojs/morfeo/commit/803c13ea3ddc9fc34dcecbe507d8f01cbf68b3a4))
- [#136](https://github.com/morfeojs/morfeo/issues/136) ([50ca5e4](https://github.com/morfeojs/morfeo/commit/50ca5e4803ba5335245995e31d09c9273a4a2f16))
- benchmarks fixed ([fc59036](https://github.com/morfeojs/morfeo/commit/fc59036327137cae1b3886c3b6e0a5ca239e5d9f))
- cli handling of shadows fixed and shadow parser improved ([7cc1a0a](https://github.com/morfeojs/morfeo/commit/7cc1a0a0d6ccd298f407e5d0b6ebc2070d976720))
- Closes [#113](https://github.com/morfeojs/morfeo/issues/113) ([f3b7f8a](https://github.com/morfeojs/morfeo/commit/f3b7f8a29bdd9efe7f6c38ebd5f736c12ebedc95))
- documentation ([31c7c6a](https://github.com/morfeojs/morfeo/commit/31c7c6a54e423e33134133ff3b582f61e5c7ac15))
- edited radii tests and removed max workers from jest.onfig ([125b3d5](https://github.com/morfeojs/morfeo/commit/125b3d523b94c04e3dbe0671e9ee8ab85eac8bda))
- fixed types of web sandbox components ([45ce774](https://github.com/morfeojs/morfeo/commit/45ce774ff77f21b83d272279d97b312a7b6182f6))
- fixed typing of packages ([57267c5](https://github.com/morfeojs/morfeo/commit/57267c5f904cbeece433e7bb2573fd9d7a4b3fd4))
- prettier ([57516db](https://github.com/morfeojs/morfeo/commit/57516db7d44401c4c7fc2ce2a57a95d6da6665b7))
- readme files fix and licenses added ([c71286a](https://github.com/morfeojs/morfeo/commit/c71286acf948e65eacb5e0ac808cc9425d576351))
- shadow parser fix & improvements ([bb8b7a2](https://github.com/morfeojs/morfeo/commit/bb8b7a23886cfbb6016b416a93b0199e4f9a3d68))
- styled-components-web packages ([9f41713](https://github.com/morfeojs/morfeo/commit/9f417138f21bd433783d8e95b922d391ced089e9)), closes [#42](https://github.com/morfeojs/morfeo/issues/42)
- tests ([61e4593](https://github.com/morfeojs/morfeo/commit/61e45931ced66121d11f5321f46f3c253386e4b3))

### Features

- [#142](https://github.com/morfeojs/morfeo/issues/142) ([b1c821a](https://github.com/morfeojs/morfeo/commit/b1c821a13ab038e686c436fb25568e4aa6e39bd4))
- [#142](https://github.com/morfeojs/morfeo/issues/142) ([52cc477](https://github.com/morfeojs/morfeo/commit/52cc477cec863efdbb8b83b7214895415565d339))
- [#144](https://github.com/morfeojs/morfeo/issues/144) ([16b382a](https://github.com/morfeojs/morfeo/commit/16b382a9bd9eb8bc434569f6f8cb8dd8374833da))
- [#150](https://github.com/morfeojs/morfeo/issues/150) ([33be120](https://github.com/morfeojs/morfeo/commit/33be120e0718ec408ffcc18d20a52240180992db))
- 76 ([0a3a065](https://github.com/morfeojs/morfeo/commit/0a3a065f446dad2c814b07570d708959d4390c32))
- add theme removal ([fb20b50](https://github.com/morfeojs/morfeo/commit/fb20b501e877e2137831f9e86629e213007b88b7))
- added pubish config to packages ([23241fc](https://github.com/morfeojs/morfeo/commit/23241fcb4a1ef76615661e5b8e9e4ed53060b912))
- added pwa plugin to documentation website ([1808781](https://github.com/morfeojs/morfeo/commit/1808781f20f0c41f6d4a965eb5bad522caf9e56a))
- all css props mapped and styled components package improved ([c3771c6](https://github.com/morfeojs/morfeo/commit/c3771c64b02fc7bbfa6137bff70d1acae8e7932a))
- cache and benchmarks ([aa360dd](https://github.com/morfeojs/morfeo/commit/aa360ddfb44ce2be66a0513783ddec1ff6b42e09))
- closes [#51](https://github.com/morfeojs/morfeo/issues/51) ([0ab4270](https://github.com/morfeojs/morfeo/commit/0ab4270a0d054bd67f42c2d74fdecee24349de1a))
- closes [#65](https://github.com/morfeojs/morfeo/issues/65) ([bbf6e32](https://github.com/morfeojs/morfeo/commit/bbf6e32f62c32af51d1795bbbc85c9772948cfdf))
- commonjs build included ([1b3baa5](https://github.com/morfeojs/morfeo/commit/1b3baa5da980b65035a67db28e11cb2aa9d3333c))
- component utility introduced ([d502a59](https://github.com/morfeojs/morfeo/commit/d502a59f3cd72ebcf0d387a092e4ca43a70da9ac))
- documentation improvements ([4ad3b5d](https://github.com/morfeojs/morfeo/commit/4ad3b5d7f35cd9c1ad1532e5367dec21594d8ff4))
- documentation update ([2bf10e7](https://github.com/morfeojs/morfeo/commit/2bf10e7066064a403d1e801d55a467626b85fdfd))
- flatted parser.resolve method ([5ce2c10](https://github.com/morfeojs/morfeo/commit/5ce2c101097b7ab28d985b108ee079e07f8bacce))
- hooks package added ([0637789](https://github.com/morfeojs/morfeo/commit/0637789d23e12bb3dfb295039e92d2a4f815927a))
- introucing svelte package and sandbox ([0e8e9e2](https://github.com/morfeojs/morfeo/commit/0e8e9e22f38576730c73442714c1a611847d9bc7))
- licenses updated ([45b042a](https://github.com/morfeojs/morfeo/commit/45b042aec49d17e7a261330b713cc05f6b4355b2))
- morfeo instance singleton ([913370e](https://github.com/morfeojs/morfeo/commit/913370e896b38fba60851aaccf9b9092bdcbafa4))
- native package ([356cbd6](https://github.com/morfeojs/morfeo/commit/356cbd6de9084be2a02db90073fb8fcbb8191641))
- **preset-default:** preset theme package ([7a66269](https://github.com/morfeojs/morfeo/commit/7a66269b2fff8d1db4939425f506fc6bec02ce18))
- **react:** import replacing ([d07c084](https://github.com/morfeojs/morfeo/commit/d07c08454adc890be71bcd577c7922eff7da043d))
- readme files added to all the packages ([819e60b](https://github.com/morfeojs/morfeo/commit/819e60bb536be471f373c8d3f7cbd5b331c1434c))
- READMEs updated ([5637cfc](https://github.com/morfeojs/morfeo/commit/5637cfc58bb94ec1d88e4eb28d84e27f17b085df))
- replaced space slice with spacings ([9aaf30a](https://github.com/morfeojs/morfeo/commit/9aaf30a705261c32c778e82d51ca7651c9263457))
- styled components for web ([e5dee4c](https://github.com/morfeojs/morfeo/commit/e5dee4c65277089b282b3ba7da3696451c559b83))
- update callback to jss function ([6218907](https://github.com/morfeojs/morfeo/commit/62189076da38078df33796fb16576b13ecdeeb85))
- useSubscribe hook introduced ([8de68f2](https://github.com/morfeojs/morfeo/commit/8de68f25ed0118009d0c26c913acb6cbca697020))
- web styled-components package introduced ([a7677c3](https://github.com/morfeojs/morfeo/commit/a7677c3a8f3c561101b0eba0b87e7fa983677cf9))
- website link replaced inside readme files ([1e55a6d](https://github.com/morfeojs/morfeo/commit/1e55a6d458d2873d09efd5fad5100cbbae382057))
- wip of morfeo cli ([476d48d](https://github.com/morfeojs/morfeo/commit/476d48d1404e0fbbe209f353efcc2e96d9d9a38e))

## 0.4.2 (2021-11-18)

### Bug Fixes

- [#116](https://github.com/VLK-STUDIO/morfeo/issues/116) extends components from theme ([803c13e](https://github.com/VLK-STUDIO/morfeo/commit/803c13ea3ddc9fc34dcecbe507d8f01cbf68b3a4))
- benchmarks fixed ([fc59036](https://github.com/VLK-STUDIO/morfeo/commit/fc59036327137cae1b3886c3b6e0a5ca239e5d9f))
- cli handling of shadows fixed and shadow parser improved ([7cc1a0a](https://github.com/VLK-STUDIO/morfeo/commit/7cc1a0a0d6ccd298f407e5d0b6ebc2070d976720))
- Closes [#113](https://github.com/VLK-STUDIO/morfeo/issues/113) ([f3b7f8a](https://github.com/VLK-STUDIO/morfeo/commit/f3b7f8a29bdd9efe7f6c38ebd5f736c12ebedc95))
- documentation ([31c7c6a](https://github.com/VLK-STUDIO/morfeo/commit/31c7c6a54e423e33134133ff3b582f61e5c7ac15))
- fixed types of web sandbox components ([45ce774](https://github.com/VLK-STUDIO/morfeo/commit/45ce774ff77f21b83d272279d97b312a7b6182f6))
- fixed typing of packages ([57267c5](https://github.com/VLK-STUDIO/morfeo/commit/57267c5f904cbeece433e7bb2573fd9d7a4b3fd4))
- prettier ([57516db](https://github.com/VLK-STUDIO/morfeo/commit/57516db7d44401c4c7fc2ce2a57a95d6da6665b7))
- readme files fix and licenses added ([c71286a](https://github.com/VLK-STUDIO/morfeo/commit/c71286acf948e65eacb5e0ac808cc9425d576351))
- shadow parser fix & improvements ([bb8b7a2](https://github.com/VLK-STUDIO/morfeo/commit/bb8b7a23886cfbb6016b416a93b0199e4f9a3d68))
- styled-components-web packages ([9f41713](https://github.com/VLK-STUDIO/morfeo/commit/9f417138f21bd433783d8e95b922d391ced089e9)), closes [#42](https://github.com/VLK-STUDIO/morfeo/issues/42)
- tests ([61e4593](https://github.com/VLK-STUDIO/morfeo/commit/61e45931ced66121d11f5321f46f3c253386e4b3))

### Features

- 76 ([0a3a065](https://github.com/VLK-STUDIO/morfeo/commit/0a3a065f446dad2c814b07570d708959d4390c32))
- add theme removal ([fb20b50](https://github.com/VLK-STUDIO/morfeo/commit/fb20b501e877e2137831f9e86629e213007b88b7))
- added pubish config to packages ([23241fc](https://github.com/VLK-STUDIO/morfeo/commit/23241fcb4a1ef76615661e5b8e9e4ed53060b912))
- added pwa plugin to documentation website ([1808781](https://github.com/VLK-STUDIO/morfeo/commit/1808781f20f0c41f6d4a965eb5bad522caf9e56a))
- all css props mapped and styled components package improved ([c3771c6](https://github.com/VLK-STUDIO/morfeo/commit/c3771c64b02fc7bbfa6137bff70d1acae8e7932a))
- cache and benchmarks ([aa360dd](https://github.com/VLK-STUDIO/morfeo/commit/aa360ddfb44ce2be66a0513783ddec1ff6b42e09))
- closes [#51](https://github.com/VLK-STUDIO/morfeo/issues/51) ([0ab4270](https://github.com/VLK-STUDIO/morfeo/commit/0ab4270a0d054bd67f42c2d74fdecee24349de1a))
- closes [#65](https://github.com/VLK-STUDIO/morfeo/issues/65) ([bbf6e32](https://github.com/VLK-STUDIO/morfeo/commit/bbf6e32f62c32af51d1795bbbc85c9772948cfdf))
- commonjs build included ([1b3baa5](https://github.com/VLK-STUDIO/morfeo/commit/1b3baa5da980b65035a67db28e11cb2aa9d3333c))
- component utility introduced ([d502a59](https://github.com/VLK-STUDIO/morfeo/commit/d502a59f3cd72ebcf0d387a092e4ca43a70da9ac))
- documentation update ([2bf10e7](https://github.com/VLK-STUDIO/morfeo/commit/2bf10e7066064a403d1e801d55a467626b85fdfd))
- morfeo instance singleton ([913370e](https://github.com/VLK-STUDIO/morfeo/commit/913370e896b38fba60851aaccf9b9092bdcbafa4))
- **preset-default:** preset theme package ([7a66269](https://github.com/VLK-STUDIO/morfeo/commit/7a66269b2fff8d1db4939425f506fc6bec02ce18))
- documentation improvements ([4ad3b5d](https://github.com/VLK-STUDIO/morfeo/commit/4ad3b5d7f35cd9c1ad1532e5367dec21594d8ff4))
- flatted parser.resolve method ([5ce2c10](https://github.com/VLK-STUDIO/morfeo/commit/5ce2c101097b7ab28d985b108ee079e07f8bacce))
- hooks package added ([0637789](https://github.com/VLK-STUDIO/morfeo/commit/0637789d23e12bb3dfb295039e92d2a4f815927a))
- introucing svelte package and sandbox ([0e8e9e2](https://github.com/VLK-STUDIO/morfeo/commit/0e8e9e22f38576730c73442714c1a611847d9bc7))
- native package ([356cbd6](https://github.com/VLK-STUDIO/morfeo/commit/356cbd6de9084be2a02db90073fb8fcbb8191641))
- readme files added to all the packages ([819e60b](https://github.com/VLK-STUDIO/morfeo/commit/819e60bb536be471f373c8d3f7cbd5b331c1434c))
- replaced space slice with spacings ([9aaf30a](https://github.com/VLK-STUDIO/morfeo/commit/9aaf30a705261c32c778e82d51ca7651c9263457))
- styled components for web ([e5dee4c](https://github.com/VLK-STUDIO/morfeo/commit/e5dee4c65277089b282b3ba7da3696451c559b83))
- update callback to jss function ([6218907](https://github.com/VLK-STUDIO/morfeo/commit/62189076da38078df33796fb16576b13ecdeeb85))
- useSubscribe hook introduced ([8de68f2](https://github.com/VLK-STUDIO/morfeo/commit/8de68f25ed0118009d0c26c913acb6cbca697020))
- web styled-components package introduced ([a7677c3](https://github.com/VLK-STUDIO/morfeo/commit/a7677c3a8f3c561101b0eba0b87e7fa983677cf9))
- website link replaced inside readme files ([1e55a6d](https://github.com/VLK-STUDIO/morfeo/commit/1e55a6d458d2873d09efd5fad5100cbbae382057))
- wip of morfeo cli ([476d48d](https://github.com/VLK-STUDIO/morfeo/commit/476d48d1404e0fbbe209f353efcc2e96d9d9a38e))
- **react:** import replacing ([d07c084](https://github.com/VLK-STUDIO/morfeo/commit/d07c08454adc890be71bcd577c7922eff7da043d))

## 0.4.1 (2021-11-18)

### Bug Fixes

- [#116](https://github.com/VLK-STUDIO/morfeo/issues/116) extends components from theme ([803c13e](https://github.com/VLK-STUDIO/morfeo/commit/803c13ea3ddc9fc34dcecbe507d8f01cbf68b3a4))
- benchmarks fixed ([fc59036](https://github.com/VLK-STUDIO/morfeo/commit/fc59036327137cae1b3886c3b6e0a5ca239e5d9f))
- cli handling of shadows fixed and shadow parser improved ([7cc1a0a](https://github.com/VLK-STUDIO/morfeo/commit/7cc1a0a0d6ccd298f407e5d0b6ebc2070d976720))
- Closes [#113](https://github.com/VLK-STUDIO/morfeo/issues/113) ([f3b7f8a](https://github.com/VLK-STUDIO/morfeo/commit/f3b7f8a29bdd9efe7f6c38ebd5f736c12ebedc95))
- documentation ([31c7c6a](https://github.com/VLK-STUDIO/morfeo/commit/31c7c6a54e423e33134133ff3b582f61e5c7ac15))
- fixed types of web sandbox components ([45ce774](https://github.com/VLK-STUDIO/morfeo/commit/45ce774ff77f21b83d272279d97b312a7b6182f6))
- fixed typing of packages ([57267c5](https://github.com/VLK-STUDIO/morfeo/commit/57267c5f904cbeece433e7bb2573fd9d7a4b3fd4))
- prettier ([57516db](https://github.com/VLK-STUDIO/morfeo/commit/57516db7d44401c4c7fc2ce2a57a95d6da6665b7))
- readme files fix and licenses added ([c71286a](https://github.com/VLK-STUDIO/morfeo/commit/c71286acf948e65eacb5e0ac808cc9425d576351))
- shadow parser fix & improvements ([bb8b7a2](https://github.com/VLK-STUDIO/morfeo/commit/bb8b7a23886cfbb6016b416a93b0199e4f9a3d68))
- styled-components-web packages ([9f41713](https://github.com/VLK-STUDIO/morfeo/commit/9f417138f21bd433783d8e95b922d391ced089e9)), closes [#42](https://github.com/VLK-STUDIO/morfeo/issues/42)
- tests ([61e4593](https://github.com/VLK-STUDIO/morfeo/commit/61e45931ced66121d11f5321f46f3c253386e4b3))

### Features

- 76 ([0a3a065](https://github.com/VLK-STUDIO/morfeo/commit/0a3a065f446dad2c814b07570d708959d4390c32))
- add theme removal ([fb20b50](https://github.com/VLK-STUDIO/morfeo/commit/fb20b501e877e2137831f9e86629e213007b88b7))
- added pubish config to packages ([23241fc](https://github.com/VLK-STUDIO/morfeo/commit/23241fcb4a1ef76615661e5b8e9e4ed53060b912))
- added pwa plugin to documentation website ([1808781](https://github.com/VLK-STUDIO/morfeo/commit/1808781f20f0c41f6d4a965eb5bad522caf9e56a))
- all css props mapped and styled components package improved ([c3771c6](https://github.com/VLK-STUDIO/morfeo/commit/c3771c64b02fc7bbfa6137bff70d1acae8e7932a))
- cache and benchmarks ([aa360dd](https://github.com/VLK-STUDIO/morfeo/commit/aa360ddfb44ce2be66a0513783ddec1ff6b42e09))
- closes [#51](https://github.com/VLK-STUDIO/morfeo/issues/51) ([0ab4270](https://github.com/VLK-STUDIO/morfeo/commit/0ab4270a0d054bd67f42c2d74fdecee24349de1a))
- closes [#65](https://github.com/VLK-STUDIO/morfeo/issues/65) ([bbf6e32](https://github.com/VLK-STUDIO/morfeo/commit/bbf6e32f62c32af51d1795bbbc85c9772948cfdf))
- commonjs build included ([1b3baa5](https://github.com/VLK-STUDIO/morfeo/commit/1b3baa5da980b65035a67db28e11cb2aa9d3333c))
- component utility introduced ([d502a59](https://github.com/VLK-STUDIO/morfeo/commit/d502a59f3cd72ebcf0d387a092e4ca43a70da9ac))
- documentation update ([2bf10e7](https://github.com/VLK-STUDIO/morfeo/commit/2bf10e7066064a403d1e801d55a467626b85fdfd))
- morfeo instance singleton ([913370e](https://github.com/VLK-STUDIO/morfeo/commit/913370e896b38fba60851aaccf9b9092bdcbafa4))
- **preset-default:** preset theme package ([7a66269](https://github.com/VLK-STUDIO/morfeo/commit/7a66269b2fff8d1db4939425f506fc6bec02ce18))
- documentation improvements ([4ad3b5d](https://github.com/VLK-STUDIO/morfeo/commit/4ad3b5d7f35cd9c1ad1532e5367dec21594d8ff4))
- flatted parser.resolve method ([5ce2c10](https://github.com/VLK-STUDIO/morfeo/commit/5ce2c101097b7ab28d985b108ee079e07f8bacce))
- hooks package added ([0637789](https://github.com/VLK-STUDIO/morfeo/commit/0637789d23e12bb3dfb295039e92d2a4f815927a))
- introucing svelte package and sandbox ([0e8e9e2](https://github.com/VLK-STUDIO/morfeo/commit/0e8e9e22f38576730c73442714c1a611847d9bc7))
- native package ([356cbd6](https://github.com/VLK-STUDIO/morfeo/commit/356cbd6de9084be2a02db90073fb8fcbb8191641))
- readme files added to all the packages ([819e60b](https://github.com/VLK-STUDIO/morfeo/commit/819e60bb536be471f373c8d3f7cbd5b331c1434c))
- replaced space slice with spacings ([9aaf30a](https://github.com/VLK-STUDIO/morfeo/commit/9aaf30a705261c32c778e82d51ca7651c9263457))
- styled components for web ([e5dee4c](https://github.com/VLK-STUDIO/morfeo/commit/e5dee4c65277089b282b3ba7da3696451c559b83))
- update callback to jss function ([6218907](https://github.com/VLK-STUDIO/morfeo/commit/62189076da38078df33796fb16576b13ecdeeb85))
- useSubscribe hook introduced ([8de68f2](https://github.com/VLK-STUDIO/morfeo/commit/8de68f25ed0118009d0c26c913acb6cbca697020))
- web styled-components package introduced ([a7677c3](https://github.com/VLK-STUDIO/morfeo/commit/a7677c3a8f3c561101b0eba0b87e7fa983677cf9))
- website link replaced inside readme files ([1e55a6d](https://github.com/VLK-STUDIO/morfeo/commit/1e55a6d458d2873d09efd5fad5100cbbae382057))
- wip of morfeo cli ([476d48d](https://github.com/VLK-STUDIO/morfeo/commit/476d48d1404e0fbbe209f353efcc2e96d9d9a38e))
- **react:** import replacing ([d07c084](https://github.com/VLK-STUDIO/morfeo/commit/d07c08454adc890be71bcd577c7922eff7da043d))

# 0.4.0 (2021-11-18)

### Bug Fixes

- [#116](https://github.com/VLK-STUDIO/morfeo/issues/116) extends components from theme ([803c13e](https://github.com/VLK-STUDIO/morfeo/commit/803c13ea3ddc9fc34dcecbe507d8f01cbf68b3a4))
- benchmarks fixed ([fc59036](https://github.com/VLK-STUDIO/morfeo/commit/fc59036327137cae1b3886c3b6e0a5ca239e5d9f))
- cli handling of shadows fixed and shadow parser improved ([7cc1a0a](https://github.com/VLK-STUDIO/morfeo/commit/7cc1a0a0d6ccd298f407e5d0b6ebc2070d976720))
- Closes [#113](https://github.com/VLK-STUDIO/morfeo/issues/113) ([f3b7f8a](https://github.com/VLK-STUDIO/morfeo/commit/f3b7f8a29bdd9efe7f6c38ebd5f736c12ebedc95))
- documentation ([31c7c6a](https://github.com/VLK-STUDIO/morfeo/commit/31c7c6a54e423e33134133ff3b582f61e5c7ac15))
- fixed types of web sandbox components ([45ce774](https://github.com/VLK-STUDIO/morfeo/commit/45ce774ff77f21b83d272279d97b312a7b6182f6))
- fixed typing of packages ([57267c5](https://github.com/VLK-STUDIO/morfeo/commit/57267c5f904cbeece433e7bb2573fd9d7a4b3fd4))
- prettier ([57516db](https://github.com/VLK-STUDIO/morfeo/commit/57516db7d44401c4c7fc2ce2a57a95d6da6665b7))
- readme files fix and licenses added ([c71286a](https://github.com/VLK-STUDIO/morfeo/commit/c71286acf948e65eacb5e0ac808cc9425d576351))
- shadow parser fix & improvements ([bb8b7a2](https://github.com/VLK-STUDIO/morfeo/commit/bb8b7a23886cfbb6016b416a93b0199e4f9a3d68))
- styled-components-web packages ([9f41713](https://github.com/VLK-STUDIO/morfeo/commit/9f417138f21bd433783d8e95b922d391ced089e9)), closes [#42](https://github.com/VLK-STUDIO/morfeo/issues/42)
- tests ([61e4593](https://github.com/VLK-STUDIO/morfeo/commit/61e45931ced66121d11f5321f46f3c253386e4b3))

### Features

- 76 ([0a3a065](https://github.com/VLK-STUDIO/morfeo/commit/0a3a065f446dad2c814b07570d708959d4390c32))
- add theme removal ([fb20b50](https://github.com/VLK-STUDIO/morfeo/commit/fb20b501e877e2137831f9e86629e213007b88b7))
- added pubish config to packages ([23241fc](https://github.com/VLK-STUDIO/morfeo/commit/23241fcb4a1ef76615661e5b8e9e4ed53060b912))
- added pwa plugin to documentation website ([1808781](https://github.com/VLK-STUDIO/morfeo/commit/1808781f20f0c41f6d4a965eb5bad522caf9e56a))
- all css props mapped and styled components package improved ([c3771c6](https://github.com/VLK-STUDIO/morfeo/commit/c3771c64b02fc7bbfa6137bff70d1acae8e7932a))
- cache and benchmarks ([aa360dd](https://github.com/VLK-STUDIO/morfeo/commit/aa360ddfb44ce2be66a0513783ddec1ff6b42e09))
- closes [#51](https://github.com/VLK-STUDIO/morfeo/issues/51) ([0ab4270](https://github.com/VLK-STUDIO/morfeo/commit/0ab4270a0d054bd67f42c2d74fdecee24349de1a))
- closes [#65](https://github.com/VLK-STUDIO/morfeo/issues/65) ([bbf6e32](https://github.com/VLK-STUDIO/morfeo/commit/bbf6e32f62c32af51d1795bbbc85c9772948cfdf))
- commonjs build included ([1b3baa5](https://github.com/VLK-STUDIO/morfeo/commit/1b3baa5da980b65035a67db28e11cb2aa9d3333c))
- component utility introduced ([d502a59](https://github.com/VLK-STUDIO/morfeo/commit/d502a59f3cd72ebcf0d387a092e4ca43a70da9ac))
- documentation update ([2bf10e7](https://github.com/VLK-STUDIO/morfeo/commit/2bf10e7066064a403d1e801d55a467626b85fdfd))
- morfeo instance singleton ([913370e](https://github.com/VLK-STUDIO/morfeo/commit/913370e896b38fba60851aaccf9b9092bdcbafa4))
- **preset-default:** preset theme package ([7a66269](https://github.com/VLK-STUDIO/morfeo/commit/7a66269b2fff8d1db4939425f506fc6bec02ce18))
- documentation improvements ([4ad3b5d](https://github.com/VLK-STUDIO/morfeo/commit/4ad3b5d7f35cd9c1ad1532e5367dec21594d8ff4))
- flatted parser.resolve method ([5ce2c10](https://github.com/VLK-STUDIO/morfeo/commit/5ce2c101097b7ab28d985b108ee079e07f8bacce))
- hooks package added ([0637789](https://github.com/VLK-STUDIO/morfeo/commit/0637789d23e12bb3dfb295039e92d2a4f815927a))
- introucing svelte package and sandbox ([0e8e9e2](https://github.com/VLK-STUDIO/morfeo/commit/0e8e9e22f38576730c73442714c1a611847d9bc7))
- native package ([356cbd6](https://github.com/VLK-STUDIO/morfeo/commit/356cbd6de9084be2a02db90073fb8fcbb8191641))
- readme files added to all the packages ([819e60b](https://github.com/VLK-STUDIO/morfeo/commit/819e60bb536be471f373c8d3f7cbd5b331c1434c))
- replaced space slice with spacings ([9aaf30a](https://github.com/VLK-STUDIO/morfeo/commit/9aaf30a705261c32c778e82d51ca7651c9263457))
- styled components for web ([e5dee4c](https://github.com/VLK-STUDIO/morfeo/commit/e5dee4c65277089b282b3ba7da3696451c559b83))
- update callback to jss function ([6218907](https://github.com/VLK-STUDIO/morfeo/commit/62189076da38078df33796fb16576b13ecdeeb85))
- useSubscribe hook introduced ([8de68f2](https://github.com/VLK-STUDIO/morfeo/commit/8de68f25ed0118009d0c26c913acb6cbca697020))
- web styled-components package introduced ([a7677c3](https://github.com/VLK-STUDIO/morfeo/commit/a7677c3a8f3c561101b0eba0b87e7fa983677cf9))
- website link replaced inside readme files ([1e55a6d](https://github.com/VLK-STUDIO/morfeo/commit/1e55a6d458d2873d09efd5fad5100cbbae382057))
- wip of morfeo cli ([476d48d](https://github.com/VLK-STUDIO/morfeo/commit/476d48d1404e0fbbe209f353efcc2e96d9d9a38e))
- **react:** import replacing ([d07c084](https://github.com/VLK-STUDIO/morfeo/commit/d07c08454adc890be71bcd577c7922eff7da043d))

## 0.3.2 (2021-11-04)

### Bug Fixes

- benchmarks fixed ([fc59036](https://github.com/VLK-STUDIO/morfeo/commit/fc59036327137cae1b3886c3b6e0a5ca239e5d9f))
- cli handling of shadows fixed and shadow parser improved ([7cc1a0a](https://github.com/VLK-STUDIO/morfeo/commit/7cc1a0a0d6ccd298f407e5d0b6ebc2070d976720))
- documentation ([31c7c6a](https://github.com/VLK-STUDIO/morfeo/commit/31c7c6a54e423e33134133ff3b582f61e5c7ac15))
- fixed typing of packages ([57267c5](https://github.com/VLK-STUDIO/morfeo/commit/57267c5f904cbeece433e7bb2573fd9d7a4b3fd4))
- prettier ([57516db](https://github.com/VLK-STUDIO/morfeo/commit/57516db7d44401c4c7fc2ce2a57a95d6da6665b7))
- readme files fix and licenses added ([c71286a](https://github.com/VLK-STUDIO/morfeo/commit/c71286acf948e65eacb5e0ac808cc9425d576351))
- shadow parser fix & improvements ([bb8b7a2](https://github.com/VLK-STUDIO/morfeo/commit/bb8b7a23886cfbb6016b416a93b0199e4f9a3d68))
- styled-components-web packages ([9f41713](https://github.com/VLK-STUDIO/morfeo/commit/9f417138f21bd433783d8e95b922d391ced089e9)), closes [#42](https://github.com/VLK-STUDIO/morfeo/issues/42)

### Features

- 76 ([0a3a065](https://github.com/VLK-STUDIO/morfeo/commit/0a3a065f446dad2c814b07570d708959d4390c32))
- add theme removal ([fb20b50](https://github.com/VLK-STUDIO/morfeo/commit/fb20b501e877e2137831f9e86629e213007b88b7))
- added pubish config to packages ([23241fc](https://github.com/VLK-STUDIO/morfeo/commit/23241fcb4a1ef76615661e5b8e9e4ed53060b912))
- added pwa plugin to documentation website ([1808781](https://github.com/VLK-STUDIO/morfeo/commit/1808781f20f0c41f6d4a965eb5bad522caf9e56a))
- all css props mapped and styled components package improved ([c3771c6](https://github.com/VLK-STUDIO/morfeo/commit/c3771c64b02fc7bbfa6137bff70d1acae8e7932a))
- cache and benchmarks ([aa360dd](https://github.com/VLK-STUDIO/morfeo/commit/aa360ddfb44ce2be66a0513783ddec1ff6b42e09))
- closes [#51](https://github.com/VLK-STUDIO/morfeo/issues/51) ([0ab4270](https://github.com/VLK-STUDIO/morfeo/commit/0ab4270a0d054bd67f42c2d74fdecee24349de1a))
- closes [#65](https://github.com/VLK-STUDIO/morfeo/issues/65) ([bbf6e32](https://github.com/VLK-STUDIO/morfeo/commit/bbf6e32f62c32af51d1795bbbc85c9772948cfdf))
- commonjs build included ([1b3baa5](https://github.com/VLK-STUDIO/morfeo/commit/1b3baa5da980b65035a67db28e11cb2aa9d3333c))
- component utility introduced ([d502a59](https://github.com/VLK-STUDIO/morfeo/commit/d502a59f3cd72ebcf0d387a092e4ca43a70da9ac))
- documentation update ([2bf10e7](https://github.com/VLK-STUDIO/morfeo/commit/2bf10e7066064a403d1e801d55a467626b85fdfd))
- morfeo instance singleton ([913370e](https://github.com/VLK-STUDIO/morfeo/commit/913370e896b38fba60851aaccf9b9092bdcbafa4))
- **preset-default:** preset theme package ([7a66269](https://github.com/VLK-STUDIO/morfeo/commit/7a66269b2fff8d1db4939425f506fc6bec02ce18))
- documentation improvements ([4ad3b5d](https://github.com/VLK-STUDIO/morfeo/commit/4ad3b5d7f35cd9c1ad1532e5367dec21594d8ff4))
- flatted parser.resolve method ([5ce2c10](https://github.com/VLK-STUDIO/morfeo/commit/5ce2c101097b7ab28d985b108ee079e07f8bacce))
- hooks package added ([0637789](https://github.com/VLK-STUDIO/morfeo/commit/0637789d23e12bb3dfb295039e92d2a4f815927a))
- introucing svelte package and sandbox ([0e8e9e2](https://github.com/VLK-STUDIO/morfeo/commit/0e8e9e22f38576730c73442714c1a611847d9bc7))
- native package ([356cbd6](https://github.com/VLK-STUDIO/morfeo/commit/356cbd6de9084be2a02db90073fb8fcbb8191641))
- readme files added to all the packages ([819e60b](https://github.com/VLK-STUDIO/morfeo/commit/819e60bb536be471f373c8d3f7cbd5b331c1434c))
- replaced space slice with spacings ([9aaf30a](https://github.com/VLK-STUDIO/morfeo/commit/9aaf30a705261c32c778e82d51ca7651c9263457))
- styled components for web ([e5dee4c](https://github.com/VLK-STUDIO/morfeo/commit/e5dee4c65277089b282b3ba7da3696451c559b83))
- update callback to jss function ([6218907](https://github.com/VLK-STUDIO/morfeo/commit/62189076da38078df33796fb16576b13ecdeeb85))
- useSubscribe hook introduced ([8de68f2](https://github.com/VLK-STUDIO/morfeo/commit/8de68f25ed0118009d0c26c913acb6cbca697020))
- web styled-components package introduced ([a7677c3](https://github.com/VLK-STUDIO/morfeo/commit/a7677c3a8f3c561101b0eba0b87e7fa983677cf9))
- website link replaced inside readme files ([1e55a6d](https://github.com/VLK-STUDIO/morfeo/commit/1e55a6d458d2873d09efd5fad5100cbbae382057))
- wip of morfeo cli ([476d48d](https://github.com/VLK-STUDIO/morfeo/commit/476d48d1404e0fbbe209f353efcc2e96d9d9a38e))
- **react:** import replacing ([d07c084](https://github.com/VLK-STUDIO/morfeo/commit/d07c08454adc890be71bcd577c7922eff7da043d))

## 0.3.1 (2021-11-04)

### Bug Fixes

- benchmarks fixed ([fc59036](https://github.com/VLK-STUDIO/morfeo/commit/fc59036327137cae1b3886c3b6e0a5ca239e5d9f))
- cli handling of shadows fixed and shadow parser improved ([7cc1a0a](https://github.com/VLK-STUDIO/morfeo/commit/7cc1a0a0d6ccd298f407e5d0b6ebc2070d976720))
- documentation ([31c7c6a](https://github.com/VLK-STUDIO/morfeo/commit/31c7c6a54e423e33134133ff3b582f61e5c7ac15))
- fixed typing of packages ([57267c5](https://github.com/VLK-STUDIO/morfeo/commit/57267c5f904cbeece433e7bb2573fd9d7a4b3fd4))
- prettier ([57516db](https://github.com/VLK-STUDIO/morfeo/commit/57516db7d44401c4c7fc2ce2a57a95d6da6665b7))
- readme files fix and licenses added ([c71286a](https://github.com/VLK-STUDIO/morfeo/commit/c71286acf948e65eacb5e0ac808cc9425d576351))
- shadow parser fix & improvements ([bb8b7a2](https://github.com/VLK-STUDIO/morfeo/commit/bb8b7a23886cfbb6016b416a93b0199e4f9a3d68))
- styled-components-web packages ([9f41713](https://github.com/VLK-STUDIO/morfeo/commit/9f417138f21bd433783d8e95b922d391ced089e9)), closes [#42](https://github.com/VLK-STUDIO/morfeo/issues/42)

### Features

- 76 ([0a3a065](https://github.com/VLK-STUDIO/morfeo/commit/0a3a065f446dad2c814b07570d708959d4390c32))
- add theme removal ([fb20b50](https://github.com/VLK-STUDIO/morfeo/commit/fb20b501e877e2137831f9e86629e213007b88b7))
- added pubish config to packages ([23241fc](https://github.com/VLK-STUDIO/morfeo/commit/23241fcb4a1ef76615661e5b8e9e4ed53060b912))
- added pwa plugin to documentation website ([1808781](https://github.com/VLK-STUDIO/morfeo/commit/1808781f20f0c41f6d4a965eb5bad522caf9e56a))
- all css props mapped and styled components package improved ([c3771c6](https://github.com/VLK-STUDIO/morfeo/commit/c3771c64b02fc7bbfa6137bff70d1acae8e7932a))
- cache and benchmarks ([aa360dd](https://github.com/VLK-STUDIO/morfeo/commit/aa360ddfb44ce2be66a0513783ddec1ff6b42e09))
- closes [#51](https://github.com/VLK-STUDIO/morfeo/issues/51) ([0ab4270](https://github.com/VLK-STUDIO/morfeo/commit/0ab4270a0d054bd67f42c2d74fdecee24349de1a))
- closes [#65](https://github.com/VLK-STUDIO/morfeo/issues/65) ([bbf6e32](https://github.com/VLK-STUDIO/morfeo/commit/bbf6e32f62c32af51d1795bbbc85c9772948cfdf))
- commonjs build included ([1b3baa5](https://github.com/VLK-STUDIO/morfeo/commit/1b3baa5da980b65035a67db28e11cb2aa9d3333c))
- component utility introduced ([d502a59](https://github.com/VLK-STUDIO/morfeo/commit/d502a59f3cd72ebcf0d387a092e4ca43a70da9ac))
- documentation update ([2bf10e7](https://github.com/VLK-STUDIO/morfeo/commit/2bf10e7066064a403d1e801d55a467626b85fdfd))
- morfeo instance singleton ([913370e](https://github.com/VLK-STUDIO/morfeo/commit/913370e896b38fba60851aaccf9b9092bdcbafa4))
- **preset-default:** preset theme package ([7a66269](https://github.com/VLK-STUDIO/morfeo/commit/7a66269b2fff8d1db4939425f506fc6bec02ce18))
- documentation improvements ([4ad3b5d](https://github.com/VLK-STUDIO/morfeo/commit/4ad3b5d7f35cd9c1ad1532e5367dec21594d8ff4))
- flatted parser.resolve method ([5ce2c10](https://github.com/VLK-STUDIO/morfeo/commit/5ce2c101097b7ab28d985b108ee079e07f8bacce))
- hooks package added ([0637789](https://github.com/VLK-STUDIO/morfeo/commit/0637789d23e12bb3dfb295039e92d2a4f815927a))
- introucing svelte package and sandbox ([0e8e9e2](https://github.com/VLK-STUDIO/morfeo/commit/0e8e9e22f38576730c73442714c1a611847d9bc7))
- native package ([356cbd6](https://github.com/VLK-STUDIO/morfeo/commit/356cbd6de9084be2a02db90073fb8fcbb8191641))
- readme files added to all the packages ([819e60b](https://github.com/VLK-STUDIO/morfeo/commit/819e60bb536be471f373c8d3f7cbd5b331c1434c))
- replaced space slice with spacings ([9aaf30a](https://github.com/VLK-STUDIO/morfeo/commit/9aaf30a705261c32c778e82d51ca7651c9263457))
- styled components for web ([e5dee4c](https://github.com/VLK-STUDIO/morfeo/commit/e5dee4c65277089b282b3ba7da3696451c559b83))
- update callback to jss function ([6218907](https://github.com/VLK-STUDIO/morfeo/commit/62189076da38078df33796fb16576b13ecdeeb85))
- useSubscribe hook introduced ([8de68f2](https://github.com/VLK-STUDIO/morfeo/commit/8de68f25ed0118009d0c26c913acb6cbca697020))
- web styled-components package introduced ([a7677c3](https://github.com/VLK-STUDIO/morfeo/commit/a7677c3a8f3c561101b0eba0b87e7fa983677cf9))
- website link replaced inside readme files ([1e55a6d](https://github.com/VLK-STUDIO/morfeo/commit/1e55a6d458d2873d09efd5fad5100cbbae382057))
- wip of morfeo cli ([476d48d](https://github.com/VLK-STUDIO/morfeo/commit/476d48d1404e0fbbe209f353efcc2e96d9d9a38e))
- **react:** import replacing ([d07c084](https://github.com/VLK-STUDIO/morfeo/commit/d07c08454adc890be71bcd577c7922eff7da043d))

# 0.3.0 (2021-10-30)

### Bug Fixes

- benchmarks fixed ([fc59036](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/fc59036327137cae1b3886c3b6e0a5ca239e5d9f))
- cli handling of shadows fixed and shadow parser improved ([7cc1a0a](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/7cc1a0a0d6ccd298f407e5d0b6ebc2070d976720))
- documentation ([31c7c6a](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/31c7c6a54e423e33134133ff3b582f61e5c7ac15))
- fixed typing of packages ([57267c5](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/57267c5f904cbeece433e7bb2573fd9d7a4b3fd4))
- prettier ([57516db](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/57516db7d44401c4c7fc2ce2a57a95d6da6665b7))
- readme files fix and licenses added ([c71286a](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/c71286acf948e65eacb5e0ac808cc9425d576351))
- shadow parser fix & improvements ([bb8b7a2](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/bb8b7a23886cfbb6016b416a93b0199e4f9a3d68))
- styled-components-web packages ([9f41713](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/9f417138f21bd433783d8e95b922d391ced089e9)), closes [#42](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/issues/42)

### Features

- 76 ([0a3a065](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/0a3a065f446dad2c814b07570d708959d4390c32))
- add theme removal ([fb20b50](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/fb20b501e877e2137831f9e86629e213007b88b7))
- added pubish config to packages ([23241fc](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/23241fcb4a1ef76615661e5b8e9e4ed53060b912))
- all css props mapped and styled components package improved ([c3771c6](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/c3771c64b02fc7bbfa6137bff70d1acae8e7932a))
- cache and benchmarks ([aa360dd](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/aa360ddfb44ce2be66a0513783ddec1ff6b42e09))
- closes [#51](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/issues/51) ([0ab4270](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/0ab4270a0d054bd67f42c2d74fdecee24349de1a))
- closes [#65](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/issues/65) ([bbf6e32](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/bbf6e32f62c32af51d1795bbbc85c9772948cfdf))
- commonjs build included ([1b3baa5](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/1b3baa5da980b65035a67db28e11cb2aa9d3333c))
- component utility introduced ([d502a59](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/d502a59f3cd72ebcf0d387a092e4ca43a70da9ac))
- documentation update ([2bf10e7](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/2bf10e7066064a403d1e801d55a467626b85fdfd))
- morfeo instance singleton ([913370e](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/913370e896b38fba60851aaccf9b9092bdcbafa4))
- **preset-default:** preset theme package ([7a66269](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/7a66269b2fff8d1db4939425f506fc6bec02ce18))
- documentation improvements ([4ad3b5d](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/4ad3b5d7f35cd9c1ad1532e5367dec21594d8ff4))
- flatted parser.resolve method ([5ce2c10](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/5ce2c101097b7ab28d985b108ee079e07f8bacce))
- hooks package added ([0637789](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/0637789d23e12bb3dfb295039e92d2a4f815927a))
- introucing svelte package and sandbox ([0e8e9e2](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/0e8e9e22f38576730c73442714c1a611847d9bc7))
- native package ([356cbd6](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/356cbd6de9084be2a02db90073fb8fcbb8191641))
- readme files added to all the packages ([819e60b](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/819e60bb536be471f373c8d3f7cbd5b331c1434c))
- replaced space slice with spacings ([9aaf30a](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/9aaf30a705261c32c778e82d51ca7651c9263457))
- styled components for web ([e5dee4c](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/e5dee4c65277089b282b3ba7da3696451c559b83))
- update callback to jss function ([6218907](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/62189076da38078df33796fb16576b13ecdeeb85))
- useSubscribe hook introduced ([8de68f2](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/8de68f25ed0118009d0c26c913acb6cbca697020))
- web styled-components package introduced ([a7677c3](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/a7677c3a8f3c561101b0eba0b87e7fa983677cf9))
- website link replaced inside readme files ([1e55a6d](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/1e55a6d458d2873d09efd5fad5100cbbae382057))
- wip of morfeo cli ([476d48d](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/476d48d1404e0fbbe209f353efcc2e96d9d9a38e))
- **react:** import replacing ([d07c084](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/d07c08454adc890be71bcd577c7922eff7da043d))

# 0.2.0 (2021-08-08)

### Bug Fixes

- benchmarks fixed ([fc59036](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/fc59036327137cae1b3886c3b6e0a5ca239e5d9f))
- documentation ([31c7c6a](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/31c7c6a54e423e33134133ff3b582f61e5c7ac15))
- fixed typing of packages ([57267c5](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/57267c5f904cbeece433e7bb2573fd9d7a4b3fd4))
- readme files fix and licenses added ([c71286a](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/c71286acf948e65eacb5e0ac808cc9425d576351))
- styled-components-web packages ([9f41713](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/9f417138f21bd433783d8e95b922d391ced089e9)), closes [#42](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/issues/42)

### Features

- add theme removal ([fb20b50](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/fb20b501e877e2137831f9e86629e213007b88b7))
- added pubish config to packages ([23241fc](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/23241fcb4a1ef76615661e5b8e9e4ed53060b912))
- all css props mapped and styled components package improved ([c3771c6](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/c3771c64b02fc7bbfa6137bff70d1acae8e7932a))
- cache and benchmarks ([aa360dd](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/aa360ddfb44ce2be66a0513783ddec1ff6b42e09))
- closes [#51](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/issues/51) ([0ab4270](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/0ab4270a0d054bd67f42c2d74fdecee24349de1a))
- closes [#65](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/issues/65) ([bbf6e32](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/bbf6e32f62c32af51d1795bbbc85c9772948cfdf))
- commonjs build included ([1b3baa5](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/1b3baa5da980b65035a67db28e11cb2aa9d3333c))
- documentation update ([2bf10e7](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/2bf10e7066064a403d1e801d55a467626b85fdfd))
- **preset-default:** preset theme package ([7a66269](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/7a66269b2fff8d1db4939425f506fc6bec02ce18))
- component utility introduced ([d502a59](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/d502a59f3cd72ebcf0d387a092e4ca43a70da9ac))
- documentation improvements ([4ad3b5d](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/4ad3b5d7f35cd9c1ad1532e5367dec21594d8ff4))
- flatted parser.resolve method ([5ce2c10](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/5ce2c101097b7ab28d985b108ee079e07f8bacce))
- hooks package added ([0637789](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/0637789d23e12bb3dfb295039e92d2a4f815927a))
- introucing svelte package and sandbox ([0e8e9e2](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/0e8e9e22f38576730c73442714c1a611847d9bc7))
- native package ([356cbd6](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/356cbd6de9084be2a02db90073fb8fcbb8191641))
- readme files added to all the packages ([819e60b](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/819e60bb536be471f373c8d3f7cbd5b331c1434c))
- replaced space slice with spacings ([9aaf30a](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/9aaf30a705261c32c778e82d51ca7651c9263457))
- styled components for web ([e5dee4c](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/e5dee4c65277089b282b3ba7da3696451c559b83))
- update callback to jss function ([6218907](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/62189076da38078df33796fb16576b13ecdeeb85))
- useSubscribe hook introduced ([8de68f2](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/8de68f25ed0118009d0c26c913acb6cbca697020))
- web styled-components package introduced ([a7677c3](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/a7677c3a8f3c561101b0eba0b87e7fa983677cf9))
- website link replaced inside readme files ([1e55a6d](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/1e55a6d458d2873d09efd5fad5100cbbae382057))
- wip of morfeo cli ([476d48d](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/476d48d1404e0fbbe209f353efcc2e96d9d9a38e))
- **react:** import replacing ([d07c084](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/d07c08454adc890be71bcd577c7922eff7da043d))

## 0.1.8 (2021-07-19)

### Bug Fixes

- benchmarks fixed ([fc59036](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/fc59036327137cae1b3886c3b6e0a5ca239e5d9f))
- documentation ([31c7c6a](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/31c7c6a54e423e33134133ff3b582f61e5c7ac15))
- fixed typing of packages ([57267c5](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/57267c5f904cbeece433e7bb2573fd9d7a4b3fd4))
- readme files fix and licenses added ([c71286a](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/c71286acf948e65eacb5e0ac808cc9425d576351))
- styled-components-web packages ([9f41713](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/9f417138f21bd433783d8e95b922d391ced089e9)), closes [#42](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/issues/42)

### Features

- added pubish config to packages ([23241fc](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/23241fcb4a1ef76615661e5b8e9e4ed53060b912))
- all css props mapped and styled components package improved ([c3771c6](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/c3771c64b02fc7bbfa6137bff70d1acae8e7932a))
- cache and benchmarks ([aa360dd](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/aa360ddfb44ce2be66a0513783ddec1ff6b42e09))
- closes [#51](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/issues/51) ([0ab4270](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/0ab4270a0d054bd67f42c2d74fdecee24349de1a))
- component utility introduced ([d502a59](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/d502a59f3cd72ebcf0d387a092e4ca43a70da9ac))
- documentation improvements ([4ad3b5d](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/4ad3b5d7f35cd9c1ad1532e5367dec21594d8ff4))
- flatted parser.resolve method ([5ce2c10](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/5ce2c101097b7ab28d985b108ee079e07f8bacce))
- hooks package added ([0637789](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/0637789d23e12bb3dfb295039e92d2a4f815927a))
- introucing svelte package and sandbox ([0e8e9e2](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/0e8e9e22f38576730c73442714c1a611847d9bc7))
- native package ([356cbd6](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/356cbd6de9084be2a02db90073fb8fcbb8191641))
- readme files added to all the packages ([819e60b](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/819e60bb536be471f373c8d3f7cbd5b331c1434c))
- replaced space slice with spacings ([9aaf30a](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/9aaf30a705261c32c778e82d51ca7651c9263457))
- styled components for web ([e5dee4c](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/e5dee4c65277089b282b3ba7da3696451c559b83))
- update callback to jss function ([6218907](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/62189076da38078df33796fb16576b13ecdeeb85))
- useSubscribe hook introduced ([8de68f2](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/8de68f25ed0118009d0c26c913acb6cbca697020))
- website link replaced inside readme files ([1e55a6d](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/1e55a6d458d2873d09efd5fad5100cbbae382057))
- **react:** import replacing ([d07c084](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/d07c08454adc890be71bcd577c7922eff7da043d))
- web styled-components package introduced ([a7677c3](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/a7677c3a8f3c561101b0eba0b87e7fa983677cf9))

## 0.1.7 (2021-07-14)

### Bug Fixes

- benchmarks fixed ([fc59036](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/fc59036327137cae1b3886c3b6e0a5ca239e5d9f))
- documentation ([31c7c6a](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/31c7c6a54e423e33134133ff3b582f61e5c7ac15))
- fixed typing of packages ([57267c5](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/57267c5f904cbeece433e7bb2573fd9d7a4b3fd4))
- readme files fix and licenses added ([c71286a](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/c71286acf948e65eacb5e0ac808cc9425d576351))
- styled-components-web packages ([9f41713](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/9f417138f21bd433783d8e95b922d391ced089e9)), closes [#42](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/issues/42)

### Features

- added pubish config to packages ([23241fc](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/23241fcb4a1ef76615661e5b8e9e4ed53060b912))
- all css props mapped and styled components package improved ([c3771c6](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/c3771c64b02fc7bbfa6137bff70d1acae8e7932a))
- cache and benchmarks ([aa360dd](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/aa360ddfb44ce2be66a0513783ddec1ff6b42e09))
- component utility introduced ([d502a59](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/d502a59f3cd72ebcf0d387a092e4ca43a70da9ac))
- documentation improvements ([4ad3b5d](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/4ad3b5d7f35cd9c1ad1532e5367dec21594d8ff4))
- flatted parser.resolve method ([5ce2c10](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/5ce2c101097b7ab28d985b108ee079e07f8bacce))
- hooks package added ([0637789](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/0637789d23e12bb3dfb295039e92d2a4f815927a))
- introucing svelte package and sandbox ([0e8e9e2](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/0e8e9e22f38576730c73442714c1a611847d9bc7))
- native package ([356cbd6](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/356cbd6de9084be2a02db90073fb8fcbb8191641))
- readme files added to all the packages ([819e60b](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/819e60bb536be471f373c8d3f7cbd5b331c1434c))
- replaced space slice with spacings ([9aaf30a](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/9aaf30a705261c32c778e82d51ca7651c9263457))
- website link replaced inside readme files ([1e55a6d](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/1e55a6d458d2873d09efd5fad5100cbbae382057))
- **react:** import replacing ([d07c084](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/d07c08454adc890be71bcd577c7922eff7da043d))
- styled components for web ([e5dee4c](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/e5dee4c65277089b282b3ba7da3696451c559b83))
- update callback to jss function ([6218907](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/62189076da38078df33796fb16576b13ecdeeb85))
- useSubscribe hook introduced ([8de68f2](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/8de68f25ed0118009d0c26c913acb6cbca697020))
- web styled-components package introduced ([a7677c3](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/a7677c3a8f3c561101b0eba0b87e7fa983677cf9))

## 0.1.6 (2021-06-27)

### Bug Fixes

- benchmarks fixed ([fc59036](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/fc59036327137cae1b3886c3b6e0a5ca239e5d9f))
- documentation ([31c7c6a](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/31c7c6a54e423e33134133ff3b582f61e5c7ac15))
- fixed typing of packages ([57267c5](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/57267c5f904cbeece433e7bb2573fd9d7a4b3fd4))
- readme files fix and licenses added ([c71286a](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/c71286acf948e65eacb5e0ac808cc9425d576351))

### Features

- added pubish config to packages ([23241fc](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/23241fcb4a1ef76615661e5b8e9e4ed53060b912))
- all css props mapped and styled components package improved ([c3771c6](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/c3771c64b02fc7bbfa6137bff70d1acae8e7932a))
- cache and benchmarks ([aa360dd](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/aa360ddfb44ce2be66a0513783ddec1ff6b42e09))
- component utility introduced ([d502a59](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/d502a59f3cd72ebcf0d387a092e4ca43a70da9ac))
- flatted parser.resolve method ([5ce2c10](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/5ce2c101097b7ab28d985b108ee079e07f8bacce))
- hooks package added ([0637789](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/0637789d23e12bb3dfb295039e92d2a4f815927a))
- introucing svelte package and sandbox ([0e8e9e2](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/0e8e9e22f38576730c73442714c1a611847d9bc7))
- native package ([356cbd6](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/356cbd6de9084be2a02db90073fb8fcbb8191641))
- readme files added to all the packages ([819e60b](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/819e60bb536be471f373c8d3f7cbd5b331c1434c))
- replaced space slice with spacings ([9aaf30a](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/9aaf30a705261c32c778e82d51ca7651c9263457))
- update callback to jss function ([6218907](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/62189076da38078df33796fb16576b13ecdeeb85))
- website link replaced inside readme files ([1e55a6d](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/1e55a6d458d2873d09efd5fad5100cbbae382057))
- **react:** import replacing ([d07c084](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/d07c08454adc890be71bcd577c7922eff7da043d))
- styled components for web ([e5dee4c](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/e5dee4c65277089b282b3ba7da3696451c559b83))
- useSubscribe hook introduced ([8de68f2](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/8de68f25ed0118009d0c26c913acb6cbca697020))
- web styled-components package introduced ([a7677c3](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/a7677c3a8f3c561101b0eba0b87e7fa983677cf9))

## 0.1.5 (2021-05-23)

### Bug Fixes

- fixed typing of packages ([57267c5](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/57267c5f904cbeece433e7bb2573fd9d7a4b3fd4))
- readme files fix and licenses added ([c71286a](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/c71286acf948e65eacb5e0ac808cc9425d576351))

### Features

- **react:** import replacing ([d07c084](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/d07c08454adc890be71bcd577c7922eff7da043d))
- added pubish config to packages ([23241fc](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/23241fcb4a1ef76615661e5b8e9e4ed53060b912))
- all css props mapped and styled components package improved ([c3771c6](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/c3771c64b02fc7bbfa6137bff70d1acae8e7932a))
- cache and benchmarks ([aa360dd](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/aa360ddfb44ce2be66a0513783ddec1ff6b42e09))
- flatted parser.resolve method ([5ce2c10](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/5ce2c101097b7ab28d985b108ee079e07f8bacce))
- hooks package added ([0637789](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/0637789d23e12bb3dfb295039e92d2a4f815927a))
- introucing svelte package and sandbox ([0e8e9e2](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/0e8e9e22f38576730c73442714c1a611847d9bc7))
- native package ([356cbd6](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/356cbd6de9084be2a02db90073fb8fcbb8191641))
- readme files added to all the packages ([819e60b](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/819e60bb536be471f373c8d3f7cbd5b331c1434c))
- styled components for web ([e5dee4c](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/e5dee4c65277089b282b3ba7da3696451c559b83))
- update callback to jss function ([6218907](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/62189076da38078df33796fb16576b13ecdeeb85))
- useSubscribe hook introduced ([8de68f2](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/8de68f25ed0118009d0c26c913acb6cbca697020))
- web styled-components package introduced ([a7677c3](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/a7677c3a8f3c561101b0eba0b87e7fa983677cf9))

## 0.1.4 (2021-05-22)

### Bug Fixes

- fixed typing of packages ([57267c5](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/57267c5f904cbeece433e7bb2573fd9d7a4b3fd4))
- readme files fix and licenses added ([c71286a](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/c71286acf948e65eacb5e0ac808cc9425d576351))

### Features

- added pubish config to packages ([23241fc](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/23241fcb4a1ef76615661e5b8e9e4ed53060b912))
- all css props mapped and styled components package improved ([c3771c6](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/c3771c64b02fc7bbfa6137bff70d1acae8e7932a))
- cache and benchmarks ([aa360dd](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/aa360ddfb44ce2be66a0513783ddec1ff6b42e09))
- flatted parser.resolve method ([5ce2c10](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/5ce2c101097b7ab28d985b108ee079e07f8bacce))
- hooks package added ([0637789](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/0637789d23e12bb3dfb295039e92d2a4f815927a))
- introucing svelte package and sandbox ([0e8e9e2](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/0e8e9e22f38576730c73442714c1a611847d9bc7))
- native package ([356cbd6](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/356cbd6de9084be2a02db90073fb8fcbb8191641))
- readme files added to all the packages ([819e60b](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/819e60bb536be471f373c8d3f7cbd5b331c1434c))
- styled components for web ([e5dee4c](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/e5dee4c65277089b282b3ba7da3696451c559b83))
- update callback to jss function ([6218907](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/62189076da38078df33796fb16576b13ecdeeb85))
- useSubscribe hook introduced ([8de68f2](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/8de68f25ed0118009d0c26c913acb6cbca697020))
- web styled-components package introduced ([a7677c3](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core/commit/a7677c3a8f3c561101b0eba0b87e7fa983677cf9))

## 0.1.3 (2021-05-21)

### Bug Fixes

- fixed typing of packages ([57267c5](https://bitbucket.org/me-sign/design-system/commits/57267c5f904cbeece433e7bb2573fd9d7a4b3fd4))

### Features

- added pubish config to packages ([23241fc](https://bitbucket.org/me-sign/design-system/commits/23241fcb4a1ef76615661e5b8e9e4ed53060b912))
- all css props mapped and styled components package improved ([c3771c6](https://bitbucket.org/me-sign/design-system/commits/c3771c64b02fc7bbfa6137bff70d1acae8e7932a))
- cache and benchmarks ([aa360dd](https://bitbucket.org/me-sign/design-system/commits/aa360ddfb44ce2be66a0513783ddec1ff6b42e09))
- flatted parser.resolve method ([5ce2c10](https://bitbucket.org/me-sign/design-system/commits/5ce2c101097b7ab28d985b108ee079e07f8bacce))
- hooks package added ([0637789](https://bitbucket.org/me-sign/design-system/commits/0637789d23e12bb3dfb295039e92d2a4f815927a))
- introucing svelte package and sandbox ([0e8e9e2](https://bitbucket.org/me-sign/design-system/commits/0e8e9e22f38576730c73442714c1a611847d9bc7))
- native package ([356cbd6](https://bitbucket.org/me-sign/design-system/commits/356cbd6de9084be2a02db90073fb8fcbb8191641))
- styled components for web ([e5dee4c](https://bitbucket.org/me-sign/design-system/commits/e5dee4c65277089b282b3ba7da3696451c559b83))
- update callback to jss function ([6218907](https://bitbucket.org/me-sign/design-system/commits/62189076da38078df33796fb16576b13ecdeeb85))
- useSubscribe hook introduced ([8de68f2](https://bitbucket.org/me-sign/design-system/commits/8de68f25ed0118009d0c26c913acb6cbca697020))
- web styled-components package introduced ([a7677c3](https://bitbucket.org/me-sign/design-system/commits/a7677c3a8f3c561101b0eba0b87e7fa983677cf9))

## 0.1.2 (2021-05-20)

### Bug Fixes

- fixed typing of packages ([57267c5](https://bitbucket.org/me-sign/design-system/commits/57267c5f904cbeece433e7bb2573fd9d7a4b3fd4))

### Features

- added pubish config to packages ([23241fc](https://bitbucket.org/me-sign/design-system/commits/23241fcb4a1ef76615661e5b8e9e4ed53060b912))
- all css props mapped and styled components package improved ([c3771c6](https://bitbucket.org/me-sign/design-system/commits/c3771c64b02fc7bbfa6137bff70d1acae8e7932a))
- cache and benchmarks ([aa360dd](https://bitbucket.org/me-sign/design-system/commits/aa360ddfb44ce2be66a0513783ddec1ff6b42e09))
- flatted parser.resolve method ([5ce2c10](https://bitbucket.org/me-sign/design-system/commits/5ce2c101097b7ab28d985b108ee079e07f8bacce))
- hooks package added ([0637789](https://bitbucket.org/me-sign/design-system/commits/0637789d23e12bb3dfb295039e92d2a4f815927a))
- introucing svelte package and sandbox ([0e8e9e2](https://bitbucket.org/me-sign/design-system/commits/0e8e9e22f38576730c73442714c1a611847d9bc7))
- native package ([356cbd6](https://bitbucket.org/me-sign/design-system/commits/356cbd6de9084be2a02db90073fb8fcbb8191641))
- styled components for web ([e5dee4c](https://bitbucket.org/me-sign/design-system/commits/e5dee4c65277089b282b3ba7da3696451c559b83))
- update callback to jss function ([6218907](https://bitbucket.org/me-sign/design-system/commits/62189076da38078df33796fb16576b13ecdeeb85))
- web styled-components package introduced ([a7677c3](https://bitbucket.org/me-sign/design-system/commits/a7677c3a8f3c561101b0eba0b87e7fa983677cf9))

## 0.1.1 (2021-05-20)

### Bug Fixes

- fixed typing of packages ([57267c5](https://bitbucket.org/me-sign/design-system/commits/57267c5f904cbeece433e7bb2573fd9d7a4b3fd4))

### Features

- added pubish config to packages ([23241fc](https://bitbucket.org/me-sign/design-system/commits/23241fcb4a1ef76615661e5b8e9e4ed53060b912))
- all css props mapped and styled components package improved ([c3771c6](https://bitbucket.org/me-sign/design-system/commits/c3771c64b02fc7bbfa6137bff70d1acae8e7932a))
- cache and benchmarks ([aa360dd](https://bitbucket.org/me-sign/design-system/commits/aa360ddfb44ce2be66a0513783ddec1ff6b42e09))
- flatted parser.resolve method ([5ce2c10](https://bitbucket.org/me-sign/design-system/commits/5ce2c101097b7ab28d985b108ee079e07f8bacce))
- hooks package added ([0637789](https://bitbucket.org/me-sign/design-system/commits/0637789d23e12bb3dfb295039e92d2a4f815927a))
- introucing svelte package and sandbox ([0e8e9e2](https://bitbucket.org/me-sign/design-system/commits/0e8e9e22f38576730c73442714c1a611847d9bc7))
- native package ([356cbd6](https://bitbucket.org/me-sign/design-system/commits/356cbd6de9084be2a02db90073fb8fcbb8191641))
- styled components for web ([e5dee4c](https://bitbucket.org/me-sign/design-system/commits/e5dee4c65277089b282b3ba7da3696451c559b83))
- web styled-components package introduced ([a7677c3](https://bitbucket.org/me-sign/design-system/commits/a7677c3a8f3c561101b0eba0b87e7fa983677cf9))

# 0.1.0 (2021-05-19)

### Bug Fixes

- fixed typing of packages ([57267c5](https://bitbucket.org/me-sign/design-system/commits/57267c5f904cbeece433e7bb2573fd9d7a4b3fd4))

### Features

- added pubish config to packages ([23241fc](https://bitbucket.org/me-sign/design-system/commits/23241fcb4a1ef76615661e5b8e9e4ed53060b912))
- all css props mapped and styled components package improved ([c3771c6](https://bitbucket.org/me-sign/design-system/commits/c3771c64b02fc7bbfa6137bff70d1acae8e7932a))
- cache and benchmarks ([aa360dd](https://bitbucket.org/me-sign/design-system/commits/aa360ddfb44ce2be66a0513783ddec1ff6b42e09))
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
- all css props mapped and styled components package improved ([c3771c6](https://bitbucket.org/me-sign/design-system/commits/c3771c64b02fc7bbfa6137bff70d1acae8e7932a))
- cache and benchmarks ([aa360dd](https://bitbucket.org/me-sign/design-system/commits/aa360ddfb44ce2be66a0513783ddec1ff6b42e09))
- hooks package added ([0637789](https://bitbucket.org/me-sign/design-system/commits/0637789d23e12bb3dfb295039e92d2a4f815927a))
- native package ([356cbd6](https://bitbucket.org/me-sign/design-system/commits/356cbd6de9084be2a02db90073fb8fcbb8191641))
- styled components for web ([e5dee4c](https://bitbucket.org/me-sign/design-system/commits/e5dee4c65277089b282b3ba7da3696451c559b83))
- web styled-components package introduced ([a7677c3](https://bitbucket.org/me-sign/design-system/commits/a7677c3a8f3c561101b0eba0b87e7fa983677cf9))

## 0.0.8 (2021-05-16)

### Bug Fixes

- fixed typing of packages ([57267c5](https://bitbucket.org/me-sign/design-system/commits/57267c5f904cbeece433e7bb2573fd9d7a4b3fd4))

### Features

- added pubish config to packages ([23241fc](https://bitbucket.org/me-sign/design-system/commits/23241fcb4a1ef76615661e5b8e9e4ed53060b912))
- all css props mapped and styled components package improved ([c3771c6](https://bitbucket.org/me-sign/design-system/commits/c3771c64b02fc7bbfa6137bff70d1acae8e7932a))
- cache and benchmarks ([aa360dd](https://bitbucket.org/me-sign/design-system/commits/aa360ddfb44ce2be66a0513783ddec1ff6b42e09))
- hooks package added ([0637789](https://bitbucket.org/me-sign/design-system/commits/0637789d23e12bb3dfb295039e92d2a4f815927a))
- native package ([356cbd6](https://bitbucket.org/me-sign/design-system/commits/356cbd6de9084be2a02db90073fb8fcbb8191641))
- styled components for web ([e5dee4c](https://bitbucket.org/me-sign/design-system/commits/e5dee4c65277089b282b3ba7da3696451c559b83))
- web styled-components package introduced ([a7677c3](https://bitbucket.org/me-sign/design-system/commits/a7677c3a8f3c561101b0eba0b87e7fa983677cf9))

## 0.0.7 (2021-05-14)

### Bug Fixes

- fixed typing of packages ([57267c5](https://bitbucket.org/me-sign/design-system/commits/57267c5f904cbeece433e7bb2573fd9d7a4b3fd4))

### Features

- added pubish config to packages ([23241fc](https://bitbucket.org/me-sign/design-system/commits/23241fcb4a1ef76615661e5b8e9e4ed53060b912))
- all css props mapped and styled components package improved ([c3771c6](https://bitbucket.org/me-sign/design-system/commits/c3771c64b02fc7bbfa6137bff70d1acae8e7932a))
- hooks package added ([0637789](https://bitbucket.org/me-sign/design-system/commits/0637789d23e12bb3dfb295039e92d2a4f815927a))
- native package ([356cbd6](https://bitbucket.org/me-sign/design-system/commits/356cbd6de9084be2a02db90073fb8fcbb8191641))
- styled components for web ([e5dee4c](https://bitbucket.org/me-sign/design-system/commits/e5dee4c65277089b282b3ba7da3696451c559b83))
- web styled-components package introduced ([a7677c3](https://bitbucket.org/me-sign/design-system/commits/a7677c3a8f3c561101b0eba0b87e7fa983677cf9))

## 0.0.6 (2021-05-13)

### Bug Fixes

- fixed typing of packages ([57267c5](https://bitbucket.org/me-sign/design-system/commits/57267c5f904cbeece433e7bb2573fd9d7a4b3fd4))

### Features

- added pubish config to packages ([23241fc](https://bitbucket.org/me-sign/design-system/commits/23241fcb4a1ef76615661e5b8e9e4ed53060b912))
- all css props mapped and styled components package improved ([c3771c6](https://bitbucket.org/me-sign/design-system/commits/c3771c64b02fc7bbfa6137bff70d1acae8e7932a))
- hooks package added ([0637789](https://bitbucket.org/me-sign/design-system/commits/0637789d23e12bb3dfb295039e92d2a4f815927a))
- native package ([356cbd6](https://bitbucket.org/me-sign/design-system/commits/356cbd6de9084be2a02db90073fb8fcbb8191641))
- styled components for web ([e5dee4c](https://bitbucket.org/me-sign/design-system/commits/e5dee4c65277089b282b3ba7da3696451c559b83))
- web styled-components package introduced ([a7677c3](https://bitbucket.org/me-sign/design-system/commits/a7677c3a8f3c561101b0eba0b87e7fa983677cf9))

## 0.0.5 (2021-05-13)

### Bug Fixes

- fixed typing of packages ([57267c5](https://bitbucket.org/me-sign/design-system/commits/57267c5f904cbeece433e7bb2573fd9d7a4b3fd4))

### Features

- added pubish config to packages ([23241fc](https://bitbucket.org/me-sign/design-system/commits/23241fcb4a1ef76615661e5b8e9e4ed53060b912))
- all css props mapped and styled components package improved ([c3771c6](https://bitbucket.org/me-sign/design-system/commits/c3771c64b02fc7bbfa6137bff70d1acae8e7932a))
- hooks package added ([0637789](https://bitbucket.org/me-sign/design-system/commits/0637789d23e12bb3dfb295039e92d2a4f815927a))
- native package ([356cbd6](https://bitbucket.org/me-sign/design-system/commits/356cbd6de9084be2a02db90073fb8fcbb8191641))
- styled components for web ([e5dee4c](https://bitbucket.org/me-sign/design-system/commits/e5dee4c65277089b282b3ba7da3696451c559b83))
- web styled-components package introduced ([a7677c3](https://bitbucket.org/me-sign/design-system/commits/a7677c3a8f3c561101b0eba0b87e7fa983677cf9))

## 0.0.4 (2021-05-13)

### Bug Fixes

- fixed typing of packages ([57267c5](https://bitbucket.org/me-sign/design-system/commits/57267c5f904cbeece433e7bb2573fd9d7a4b3fd4))

### Features

- added pubish config to packages ([23241fc](https://bitbucket.org/me-sign/design-system/commits/23241fcb4a1ef76615661e5b8e9e4ed53060b912))
- all css props mapped and styled components package improved ([c3771c6](https://bitbucket.org/me-sign/design-system/commits/c3771c64b02fc7bbfa6137bff70d1acae8e7932a))
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
