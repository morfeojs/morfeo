# @morfeo/example-nextra

## 0.9.3

### Patch Changes

- fec3234: - `theme` and `parsers` utilities into the `morfeo` instance
  - removed any dependency with bundlers and used static analysis in a separate proccess instead
  - simplified DX
  - dark mode at build time
  - removed svelte/fonts/css packages
- Updated dependencies [fec3234]
  - @morfeo/compiler@0.9.3
  - @morfeo/utils@0.9.3
  - @morfeo/preset-default@0.9.3
  - @morfeo/react@0.9.3
  - @morfeo/web@0.9.3

## 0.9.2

### Patch Changes

- 766be5f: Fixed publish command in order to replace `workspace/*` with the actual version of the package.
- Updated dependencies [766be5f]
  - @morfeo/css@0.9.2
  - @morfeo/next@0.9.2
  - @morfeo/preset-default@0.9.2
  - @morfeo/spec@0.9.2
  - @morfeo/utils@0.9.2
  - @morfeo/web@0.9.2

## 0.9.1

### Patch Changes

- 1683b96: Media queries are now generated mobile-frist by default, fixed also the order of the css generated at build time to be sure that media queries are computed in he right way
- Updated dependencies [1683b96]
- Updated dependencies [b094895]
  - @morfeo/spec@0.9.1
  - @morfeo/css@0.9.1
  - @morfeo/next@0.9.1
  - @morfeo/preset-default@0.9.1
  - @morfeo/utils@0.9.1
  - @morfeo/web@0.9.1
