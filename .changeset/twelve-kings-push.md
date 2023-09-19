---
'@morfeo/babel-plugin': patch
'@morfeo/compiler': patch
'@morfeo/utils': patch
'@morfeo/jss': patch
'@morfeo/app-docs': patch
'@morfeo/example-next': patch
'@morfeo/example-react': patch
'@morfeo/core': patch
'@morfeo/dev-tools': patch
'@morfeo/hooks': patch
'@morfeo/native': patch
'@morfeo/preset-default': patch
'@morfeo/react': patch
'@morfeo/spec': patch
'@morfeo/web': patch
'@morfeo/app-web-extension': patch
---

- `theme` and `parsers` utilities into the `morfeo` instance
- removed any dependency with bundlers and used static analysis in a separate proccess instead
- simplified DX
- dark mode at build time
- removed svelte/fonts/css packages
