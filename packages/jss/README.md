# @morfeo/jss

![Morfeo logo](https://morfeo.dev/img/morfeo.png)

[morfeo](https://morfeo.dev) is a framework-agnostic set of tools that will help you to build your next **design system** based on a single source of truth: the **theme**.

---

[Documentation](https://morfeo.dev) | [API](https://github.com/morfeojs/morfeo) | [Contributing](https://github.com/morfeojs/morfeo/blob/main/CONTRIBUTING.md) | [![Discord](https://badgen.net/badge/icon/discord?icon=discord&label)](https://discord.gg/5hbsKMBRBh)

---

## Installation

with [npm](https://www.npmjs.com/package/@morfeo/jss):

```bash
npm install @morfeo/jss
```

or [yarn](https://yarn.pm/@morfeo/jss):

```bash
yarn add @morfeo/jss
```

## Usage

**@morfeo/jss** exposes a plugin for [jss](https://cssinjs.org/) and a utility to generate css classes from morfeo's style objects called [getStyles](#getstyles)

> You'll probably never use _directly_ `@morfeo/jss`, instead, you'll more likely to use [@morfeo/react](https://morfeo.dev/docs/Packages/react), [@morfeo/svelte](https://morfeo.dev/docs/Packages/svelte), [@morfeo/web](https://morfeo.dev/docs/Packages/web), or other packages that offer better integration of the morfeo eco-system in your framework of choice.
> But, if you're already using [jss](https://cssinjs.org/) you can use use our plugin to bring morfeo's functionalities inside your app.

### JSS Plugin

To integrate `morfeo` inside an app which is already using JSS you can add to the plugins morfeo:

```typescript
import { morfeoJSS } from '@morfeo/jss';
import jss from 'jss';

jss.use(morfeoJSS);
```

### getStyles

With the utility `getStyles` you can obtain CSS classes based on `morfeo style objects`:

```typescript
import { getStyles } from '@morfeo/jss';

const { classes } = getStyles({
  button: {
    bg: 'primary',
    corner: 'm',
  },
});

const element = document.getElementById('button');

element.classList.add(classes.button);
```

#### API:

```typescript
import { Style } from '@morfeo/core';
import { StyleSheet, Jss } from 'jss';

function getStyles<Names extends string>(
  styles: Record<Names, Style>,
): {
  /**
   * The classes to apply to the element
   */
  classes: Record<Names, string>;
  /**
   * The JSS StyleSheet object
   */
  stylesheet: StyleSheet<Names>;
  /**
   * The JSS instance
   */
  jss: Jss;
  /**
   * A callback that should be called when the element (or component) will be unmounted
   */
  destroy: () => void;
  /**
   * A callback that should be called to update the style of the element (or component)
   */
  update: (styles: Record<Names, Style>) => Record<Names, string>;
};
```
