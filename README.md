![Morfeo logo](https://morfeo.dev/img/morfeo.png)

[morfeo](https://morfeo.dev) is a framework-agnostic set of tools that will help you to build your next <strong>design system</strong> based on a single source of truth: the **theme**.

---

[![codecov](https://codecov.io/gh/VLK-STUDIO/morfeo/branch/main/graph/badge.svg?token=CZBHY8J802)](https://codecov.io/gh/VLK-STUDIO/morfeo)
[![Codecov](https://github.com/VLK-STUDIO/morfeo/actions/workflows/codecov.yml/badge.svg)](https://github.com/VLK-STUDIO/morfeo/actions/workflows/codecov.yml)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![GitHub license](https://img.shields.io/github/license/VLK-STUDIO/morfeo)](https://github.com/VLK-STUDIO/morfeo/blob/main/LICENSE)
[![Contributing](https://img.shields.io/badge/PRs-welcome-brightgreen)](https://github.com/VLK-STUDIO/morfeo/blob/main/CONTRIBUTING.md)
[![Netlify Status](https://api.netlify.com/api/v1/badges/93b009d2-94be-4d40-baa3-9f86a51922ce/deploy-status)](https://app.netlify.com/sites/cocky-kare-d8d81e/deploys)
[![DeepScan grade](https://deepscan.io/api/teams/15451/projects/18608/branches/460695/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=15451&pid=18608&bid=460695)

---

[Documentation](https://morfeo.dev) | [API](https://github.com/VLK-STUDIO/morfeo) | [Contributing](https://github.com/VLK-STUDIO/morfeo/blob/main/CONTRIBUTING.md) | [![Discord](https://badgen.net/badge/icon/discord?icon=discord&label)](https://discord.gg/5hbsKMBRBh)

---

Morfeo it's a tool to build design systems based on a theme.

It helps you to _follow a design language_ and write consistent UIs, whatever is the framework of your choice.

It's easy to use and, with the [**browser extension**](https://chrome.google.com/webstore/detail/morfeo/phhhjdmeicikchjnpepljcdgbmipipcl), your theme and your components are automagically documented.

## Features

- [Framework Agnostic](https://morfeo.dev/docs/Features/framework-agnostic)
- [Single source of truth](https://morfeo.dev/docs/Features/single-source-of-truth)
- [Multi theming](https://morfeo.dev/docs/Features/multi-theming)
- [Web Extension](https://morfeo.dev/docs/Features/web-extension)
- [CLI](https://morfeo.dev/docs/Features/morfeo-cli-introduction)
- [Extendible](https://morfeo.dev/docs/Features/extendible)
- [Easy to test](https://morfeo.dev/docs/Features/easy-to-test)

## How it works

You can start using morfeo in 30 seconds:

- install

  ```bash
  # or @morfeo/(react | svelte | native | web) depending on your framework of choice
  npm i @morfeo/core
  # or with yarn
  yarn add @morfeo/core
  ```

- set the theme (you can create your own or use our [preset](../Packages/preset-default.mdx))

  ```typescript
  import { morfeo } from '@morfeo/core';
  import { darkTheme, lightTheme } from './themes';

  morfeo.setTheme('light', lightTheme);
  morfeo.setTheme('dark', darkTheme);
  ```

  or simply:

  ```typescript
  // automatically adds two default light and dark themes.
  import '@morfeo/preset-default';
  ```

- Use it everywhere to resolve a [morfeo style object](https://morfeo.dev/docs/ThemeSpecification/overview#morfeo-style-object) into a valid `css-in-js` object:

  ```tsx
  import { morfeo } from '@morfeo/core';

  /**
   * {
   *   "paddingLeft": "40px",
   *   "paddingRight": "40px"
   *   "borderRadius": "50%"
   *   "background-color": "#06f"
   * }
   */
  const style = morfeo.resolve({
    px: 'l',
    corner: 'round',
    bg: 'primary',
  });
  ```

Morfeo works everywhere, [no matter what's the framework or library you're using](https://morfeo.dev/docs/Features/framework-agnostic), not only as a `run time` parser but even as a static css generator thanks to our `CLI` ([@morfeo/cli](https://morfeo.dev/docs/Features/morfeo-cli)).

Checkout all our packages and choose the one that fits better your needs:

- [@morfeo/react](https://morfeo.dev/docs/Packages/react)
- [@morfeo/native](https://morfeo.dev/docs/Packages/native)
- [@morfeo/styled-components-web](https://morfeo.dev/docs/Packages/styled-components)
- [@morfeo/svelte](https://morfeo.dev/docs/Packages/svelte)
- [@morfeo/jss](https://morfeo.dev/docs/Packages/jss)
- And more ...

And even more are coming soon:

- _@morfeo/angular_ **coming soon**
- _@morfeo/styled-components-native_ **coming soon**

## Contributors

<a href="https://github.com/VLK-STUDIO/morfeo/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=VLK-STUDIO/morfeo" />
</a>

Made with [contrib.rocks](https://contrib.rocks)
