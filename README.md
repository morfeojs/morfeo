<div align="center">
<h1>morfeo</h1>
</div>
<a href="https://github.com/VLK-STUDIO/morfeo">morfeo</a> is a framework-agnostic set of tools that will help you to build your next <strong>design system</strong> based on a single source of truth: the <strong>theme</strong>.

---

<div align="center">
  <a href="https://github.com/VLK-STUDIO/morfeo">Documentation</a> |
  <a href="https://github.com/VLK-STUDIO/morfeo">API</a> |
  <a href="https://github.com/VLK-STUDIO/morfeo">Contributing</a> |
  <a href="https://morfeo.slack.com">Slack</a>
</div>

---

You can use it with any framework like [React](https://reactjs.org/), [React Native](https://reactnative.dev/), [Vue](https://v3.vuejs.org/), [Angular](https://angular.io/), [Svelte](https://svelte.dev/) or just Vanilla JS/TS.

In other words, morfeo will transform this:

```typescript
{
  componentName: 'Button',
  variant: 'primary',
}
```

into this:

```typescript
{
  color: '#e3e3e3',
  backgroundColor: '#fff',
  borderRadius: '20px',
  '&:hover': {
    opacity: 0.4,
  },
}
```

Or, into a plain css:

```css
.button-primary {
  color: #e3e3e3;
  background-color: #fff;
  border-radius: 20px;
}

.button-primary:hover {
  opacity: 0.4;
}
```

By using a bit of magic explained [here](#how-it-works)

morfeo is cross-framework, but to have a faster implementation and a better developer experience we create a set of packages that integrates morfeo with the most used frameworks like:

**[@morfeo/react](https://www.npmjs.com/package/@morfeo/web)** made for React :atom_symbol:

**[@morfeo/native](https://www.npmjs.com/package/@morfeo/native)** perfect for React native :calling::atom_symbol: ​

**[@morfeo/svelte](https://www.npmjs.com/package/@morfeo/svelte)** matches perfectly with with svelte :fire:

**[@morfeo/styled-components-web](https://www.npmjs.com/package/@morfeo/styled-components-web)** deep integration with styled-components :nail_care:

**@morfeo/angular** **_coming soon_**

**[@morfeo/jss](https://www.npmjs.com/package/@morfeo/jss)** will generate plain css from _css-in-js_

| Branches                                    | Functions                                    | Lines                                    | Statements                                    |
| ------------------------------------------- | -------------------------------------------- | ---------------------------------------- | --------------------------------------------- |
| ![logo](./assets/badges/badge-branches.svg) | ![logo](./assets/badges/badge-functions.svg) | ![logo](./assets/badges/badge-lines.svg) | ![logo](./assets/badges/badge-statements.svg) |

## Motivations

When your application starts to grow, maintain UI consistency it's not easy.
Even in popular applications we often face **wrong typographies**, different **color pallettes** used across different pages or inconsistent **spacings** in each component.

These problems are even more frequent in large applications where different teams works on different features (maybe with different technologies and frameworks).

**morfeo** solves this problem by sharing across all the application a customizable `theme` that contains the "language" of the application design and a `parser` that generate styles based on this language, in this way the UIs an the components are always consistent.

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
import { theme, parsers } from '@morfeo/core';

function Button() {
  const style = parsers.resolve({ componentName: 'Button' });

  return <button style={style}>Click me</button>;
}
```

Or if you want, you can use the hooks inside the package `@morfeo/hooks`

```tsx
import { theme } from '@morfeo/core';
import { useStyle } from '@morfeo/hooks';

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

## Features

WIP
