![Morfeo logo](https://morfeo.dev/img/morfeo.png)

[morfeo](https://morfeo.dev) is a framework-agnostic set of tools that will help you to build your next <strong>design system</strong> based on a single source of truth: the **theme**.

---

[![codecov](https://codecov.io/gh/VLK-STUDIO/morfeo/branch/main/graph/badge.svg?token=CZBHY8J802)](https://codecov.io/gh/VLK-STUDIO/morfeo)
[![Codecov](https://github.com/VLK-STUDIO/morfeo/actions/workflows/codecov.yml/badge.svg)](https://github.com/VLK-STUDIO/morfeo/actions/workflows/codecov.yml)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![GitHub license](https://img.shields.io/github/license/VLK-STUDIO/morfeo)](https://github.com/VLK-STUDIO/morfeo/blob/main/LICENSE)
[![Contributing](https://img.shields.io/badge/PRs-welcome-brightgreen)](https://github.com/VLK-STUDIO/morfeo/blob/main/CONTRIBUTING.md)
[![Netlify Status](https://api.netlify.com/api/v1/badges/93b009d2-94be-4d40-baa3-9f86a51922ce/deploy-status)](https://app.netlify.com/sites/cocky-kare-d8d81e/deploys)

---

[Documentation](https://morfeo.dev) | [API](https://github.com/VLK-STUDIO/morfeo) | [Contributing](https://github.com/VLK-STUDIO/morfeo/blob/main/CONTRIBUTING.md) | [Slack](https://morfeo.slack.com)

---

Morfeo it's a tool to build design systems based on a theme.

It helps you to _follow a design language_ and write consistent UIs, whatever it is the framework of your choice.

It's easy to use and, with the **browser extension**, your theme and your components are automatically documented.

## Features

- [Framework Agnostic](https://morfeo.dev/docs/Introduction/framework-agnostic)
- [Single source of truth](https://morfeo.dev/docs/Introduction/single-source-of-truth)
- [Dev Tool](https://morfeo.dev/docs/Introduction/dev-tool)
- [Extendible](https://morfeo.dev/docs/Introduction/extendible)
- [Easy to test](https://morfeo.dev/docs/Introduction/easy-to-testhttps://morfeo.dev/docs/Introduction/easy-to-test)

## How it works

The main concepts around morfeo are 2 entities, **theme** and **parsers**:

`theme` it's an handler that contains the **design language** of your application, for example a set of colors, spacings, shadows, sizes and gradients, and the base style of your components.

An example of theme could be the following:

```typescript
import { theme } from '@morfeo/core';

const defaultTheme = {
  color: {
    primary: '#000',
    secondary: '#e3e3e3',
    danger: '#eb2f06',
    success: '#78e08f',
    warning: '#fa983a',
  },
  space: {
    xxs: '8px',
    xs: '16px',
    s: '24px',
    m: '32px',
    l: '40px',
    xl: '48px',
    xxl: '56px',
  },
  components: {
    Button: {
      style: {
        color: 'primary',
        padding: 's',
      },
    },
  },
};

// From now on the theme will be available in all your application
theme.set(defaultTheme);

console.log(theme.get()); // will log an object equals to `defaultTheme`
console.log(theme.getValue('colors', 'primary')); // will log #000
```

Once you have a centralized theme, you need to parse this theme to generate the style for your components an layouts, here is where the `parsers` handler start to play!

This is an example with React

```tsx
import { parsers } from '@morfeo/core';

function Button() {
  const style = parsers.resolve({ componentName: 'Button' });

  return <button style={style}>Click me</button>;
}
```

In the case of `React`, we built a package that suites it better: [@morfeo/react](../Packages/react)

```tsx
import { useStyle } from '@morfeo/react';

function Button() {
  const style = useStyle({ componentName: 'Button' });

  return <button style={style}>Click me</button>;
}
```

The value of `style` will be in this example equals to:

```json
{
  "color": "#000",
  "padding": "16px"
}
```

## Motivations

When your application starts to grow, maintain UI consistency it's not easy.
Even in popular applications we often face **wrong typographies**, different **color pallettes** used across different pages or inconsistent **spacings** in each component.

These problems are even more frequent in large applications where different teams works on different features (maybe with different technologies and frameworks).

**morfeo** solves this problem by sharing across all the application a customizable `theme` that contains the "language" of the application design and a `parser` that generate styles based on this language, in this way the UIs an the components are always consistent.
