# @morfeo/preset-default

![Morfeo logo](https://morfeo.dev/img/morfeo.png)

`@morfeo/preset-default` is the fastest way to start using morfeo with 2 complete themes!
It expose 2 themes, `light` and `dark`, you can you use these themes as they are or customize them to fit your design!

**@morfeo/preset-default** is part of the [@morfeo](https://morfeo.dev) eco-system, a set of **framework-agnostic** tools that help you to create beautiful design systems for your web and mobile apps.

---

[Documentation](https://morfeo.dev) | [API](https://github.com/morfeojs/morfeo) | [Contributing](https://github.com/morfeojs/morfeo/blob/main/CONTRIBUTING.md) | [![Discord](https://badgen.net/badge/icon/discord?icon=discord&label)](https://discord.gg/5hbsKMBRBh)

---

## Installation

with [npm](https://www.npmjs.com/package/@morfeo/preset-default):

```bash
npm install @morfeo/preset-default
```

or [yarn](https://yarn.pm/@morfeo/preset-default):

```bash
yarn add @morfeo/preset-default
```

## Usage

```typescript
import { initPreset } from '@morfeo/preset-default';

initPreset();
```

Or alternatively

```typescript
import { lightTheme, darkTheme } from '@morfeo/preset-default';

morfeo.setTheme('light', {...lightTheme, ...yourOverrides });
```

The preset expose 2 themes, one `light` and one `dark`:

```typescript
import { lightTheme, darkTheme } from '@morfeo/preset-default';
```

If you like our themes, you can easily use them in your app with the `initPreset` function:

```typescript
import { initPreset } from '@morfeo/preset-default';

morfeo.setCurrentTheme('light'); // Used by default
// OR
morfeo.setCurrentTheme('dark');
```

You can use these themes as they are or customize theme to fit your design:

```typescript
import { darkTheme, lightTheme } from '@morfeo/preset-default';

morfeo.setTheme('dark', {
  ...darkTheme,
  colors: myDarkColors,
});

morfeo.setTheme('light', {
  ...darkTheme,
  colors: myLightColors,
});
```
