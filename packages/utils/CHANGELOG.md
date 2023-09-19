# Change Log

## 0.9.3

### Patch Changes

- fec3234: - `theme` and `parsers` utilities into the `morfeo` instance
  - removed any dependency with bundlers and used static analysis in a separate proccess instead
  - simplified DX
  - dark mode at build time
  - removed svelte/fonts/css packages

## 0.9.2

### Patch Changes

- 766be5f: Fixed publish command in order to replace `workspace/*` with the actual version of the package.

## 0.9.1

### Patch Changes

- 1683b96: Media queries are now generated mobile-frist by default, fixed also the order of the css generated at build time to be sure that media queries are computed in he right way

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [0.9.0](https://github.com/morfeojs/morfeo/compare/v0.7.0...v0.9.0) (2023-04-16)

### Features

- **build-time:** [#647](https://github.com/morfeojs/morfeo/issues/647) createUseStyle ([#692](https://github.com/morfeojs/morfeo/issues/692)) ([afd2f17](https://github.com/morfeojs/morfeo/commit/afd2f17813a489789a601be0ab58e78c9e13ceb6))
- **build-time:** [#694](https://github.com/morfeojs/morfeo/issues/694) added support for the most common bundlers ([#700](https://github.com/morfeojs/morfeo/issues/700)) ([028623d](https://github.com/morfeojs/morfeo/commit/028623d203c1fec9c4c943f261d199e67017c16f))
