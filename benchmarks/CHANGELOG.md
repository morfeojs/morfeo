# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 0.7.0 (2022-05-30)


### Bug Fixes

* adaptation for last npm version ([95b88bc](https://github.com/morfeojs/morfeo/commit/95b88bcd50d7ed7371ca33e30a93d0f9c59f53f0))
* **deps:** update dependency @morfeo/core to v0.6.0 ([7de0232](https://github.com/morfeojs/morfeo/commit/7de0232a59b31b7378a6a7332edcff2a9e8316cd))
* **deps:** update dependency @morfeo/jss to v0.6.0 ([6512c9b](https://github.com/morfeojs/morfeo/commit/6512c9baa8d721617012d246a1b806280b8f9232))
* **deps:** update dependency @morfeo/preset-default to v0.6.0 ([5c87a4b](https://github.com/morfeojs/morfeo/commit/5c87a4bd3c13e25cd073065f9e6f80294fd7e761))


### chore

* [#152](https://github.com/morfeojs/morfeo/issues/152) ([4e249ff](https://github.com/morfeojs/morfeo/commit/4e249ffe196839c56d8334663d3b00d98ca000a2))


### Features

* [#132](https://github.com/morfeojs/morfeo/issues/132) ([20628ce](https://github.com/morfeojs/morfeo/commit/20628cef532989dc138cc14f1a32347fb7db8567))
* [#138](https://github.com/morfeojs/morfeo/issues/138) ([49d11c1](https://github.com/morfeojs/morfeo/commit/49d11c130949d19a77ac81585bc9a94a1a967a82))
* package `@morfeo/styled-components-web` removed ([ff6fd3c](https://github.com/morfeojs/morfeo/commit/ff6fd3c2913e0fd37bcc6a0a05cdb889560086d5))
* used yarn instead of npm ([217c88f](https://github.com/morfeojs/morfeo/commit/217c88f1392b4e0caa12203f7a0166d4080010e5))


### BREAKING CHANGES

* @morfeo/core: breaking change the the core api:

1. morfeo.useTheme renamed into morfeo.setCurrentTheme
2. morfeo.getCurrent renamed into morfeo.getCurrentTheme
