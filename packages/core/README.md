<div align="center">
<h1>@morfeo/core</h1>
</div>

[morfeo]("https://github.com/VLK-STUDIO/morfeo") is a framework-agnostic set of tools that will help you to build your next **design system** based on a single source of truth: the **theme**.

---

<div align="center">
  <a href="https://github.com/VLK-STUDIO/morfeo">Documentation</a> |
  <a href="https://github.com/VLK-STUDIO/morfeo">API</a> |
  <a href="https://github.com/VLK-STUDIO/morfeo">Contributing</a> |
  <a href="https://morfeo.slack.com">Slack</a>
</div>

---

## Table of contents

#### [Installation](#installation)

#### [Usage](#usage)

- [theme](#theme)

- [parsers](#parsers)

- [responsive](#responsive)

#### [Advanced](#advanced)

- [Augmenting Typescript definitions](#augmenting-typescript-definitions)
- [Add a custom parser](#add-a-custom-parser)

## Installation

with [npm](https://www.npmjs.com/package/@morfeo/core):

```bash
npm install @morfeo/core
```

or [yarn](https://yarn.pm/@morfeo/core):

```bash
yarn add @morfeo/core
```

## Usage

**@morfeo/core** exposes the 2 entities that encapsulate all the logic of morfeo which are the **theme** handler and the **parsers** handler.

> [Here](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/spec) you can find an explanation of the morfeo's theme specification; check it out to understand in deep all the properties your theme should have.

:warning: Warning

> You'll probably never use *directly*  `@morfeo/core`, instead, you'll more likely to use [@morfeo/react](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/react), [@morfeo/svelte](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte), [@morfeo/jss](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/jss), or other packages that offer better integration of the morfeo eco-system in your framework of choice.
> In this particular case, it's important to know that you cannot define media queries as inline-style, that's why you need some other tool like JSS or Styled Components to handle this behavior. Likely, we already thought about it, so feel free to check out our packages.

### theme

The `theme` handler is a singleton that will share across all your application/website the theme, so you can use it to refer colors, spacing, shadow (and [more..](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/spec)), and most importantly the styles of your **components**.

For example, let's begin by defining your **design language**, imagine it like a single source of truth of your design, so it contains all the colors your using, all the spacings, sizes, and so on:

```typescript
import { Theme } from "@morfeo/core";

/**
 * an object that contains your theme (or your design language)
 */
export const defaultTheme: Theme = {
  ...,
  space: {
    ...,
    s: "32px",
    m: "40px",
    l: "48px",
    ...,
  },
  colors: {
    ...,
    primary: '#00000',
    secondary: '#fffff',
    danger: '#e74c3c',
  },
  ...,
  // this slice will contain the base style of your components
  components: {
    ...,
    Button: {
      style: {
        bg: 'primary',
        color: 'secondary',
      },
      // for each component you can also define variants
      variants: {
        inverted: {
          style: {
            bg: 'secondary',
            color: 'primary',
          }
        }
      },
    },
  },
}
```

Once you set your design language you can start to use it by using the theme handler:

```typescript
import { theme } from '@morfeo/core';
import { defaultTheme } from './my-theme';

/**
 * from now on your design language will be available across all your application
 */
theme.set(defaultTheme);
```

To use the theme in your application just use the `get`, `getSlice` or `getValue` method of the theme singleton:

```typescript
const myTheme = theme.get(); // will return all your theme
const colors = theme.getSlice('colors'); // { primary: "#000000", secondary: "#ffffff", ... }
const primaryColor = theme.getValue('colors', 'primary'); // #000000
// You can access any value or slice of your theme
const themeButton = theme.getValue('components', 'Button');
```

#### Why it's important?

Sharing a theme all around your application it's incredibly important to ensure consistency in your UIs and components, but the most important usage of the theme singleton is hidden inside the other singleton exposed by the morfeo library: **parsers**

### parsers

The `parsers` singleton will covert a CSS in JS object that uses the values of the theme into a valid CSS in JS object that you can use to directly style your components or passing to other tools like JSS or styled components to style your components:

```typescript
const style = parsers.resolve({
  color: 'primary',
  bg: 'secondary',
  px: 'm',
});
```

the style will be equals to:

```typescript
{
  color: "#00000",
  backgroundColor: "#fffff",
  paddingLeft: "40px",
  paddingRight: "40px"
}
```

> In this example we are using the property "px" that it's an alias for paddingLeft and paddingRight, check all the aliases [here](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/spec)

You can even retrieve the style of a component by using the properties `componentName` and` variant`

```typescript
// { color: '#00000', backgroundColor: "#fffff" }
const buttonStyle = parsers.resolve({ componentName: 'Button' });
// { color: '#fffff', backgroundColor: "#00000" }
const invertedButtonStyle = parsers.resolve({
  componentName: 'Button',
  variant: 'inverted',
});
// { color: "#00000", backgroundColor: "#e74c3c", padding: "32px" }
const customButtonStyle = parsers.resolve({
  componentName: 'Button',
  bg: 'danger',
  padding: 's',
});
```

As you can see you can retrieve any component style, any component variant style, override its style definition or add other properties.

### responsive

What if you need to apply a style only to specific resolutions? morfeo enables you to do this in a pretty simple way.

```typescript
parsers.resolve({
  padding: {
    sm: 's',
    md: 'm',
    lg: 'm',
  },
});
```

this will create the following style:

```json
{
  "@media (min-width: 300px)": {
    "padding": "32px"
  },
  "@media (min-width: 600px)": {
    "padding": "40px"
  },
  "@media (min-width: 900px)": {
    "padding": "48px"
  }
}
```

The theme specification provides 2 slices that help you to customize this result: `breakpoints` and `mediaQueries`.
In breakpoints you can set the breakpoints corresponding to `xs`, `sm`, `md`, `lg` or your custom breakpoints, in `mediaQueries` you can (optionally) customize the media queries that will be generated.

### Advanced

Both theme and parsers singletons are extendible, in this way you can define custom parsers for your custom properties or even create new theme slices to customize your design language.

Extending morfeo it's pretty easy but to ensure you follow the best practice, here you'll find some advanced topic that may help you:

#### Augmenting Typescript definitions

We :heart: typescript, in fact, morfeo is completely written in typescript! Since you can define new theme slices or add other values to each slice in your theme, this customization should match the theme definition. To do that we suggest using [Declaration Merging and Module Augmentation](https://www.typescriptlang.org/docs/handbook/declaration-merging.html) to customize the definition of the Theme interface.

Create a declaration file (for example `morfeo.d.ts` or `types.d.ts`):

```typescript
import '@morfeo/core';
import { defaultTheme } from './theme';

// you can use your theme to directly obtain the type
type MyComponents = typeof defaultTheme.components;

declare module '@morfeo/core' {
  export interface Components extends MyComponents {}
  // or you can define all the additional properties directly here
  export interface Colors {
    myColor: string;
  }
  export interface Theme {
    myCustomSlice: {
      customValue: string;
    };
  }
}
```

Here is the result:

[![augmentation.gif](https://i.postimg.cc/MGhkFk5X/augmentation.gif)](https://postimg.cc/yJXrDbwz)

#### Add a custom parser

Imagine `parsers` as a set of smaller parsers, one for each property you can pass to the resolve method, for example there is parser that recognize the `bg` property and returns a valid css-in-js style by referreing the value to the `colors` slice of the theme:

`bg: primary ---> { backgroundColor: theme.getValue('colors', 'primary') }`

`parsers` exposes other methods other than resolve, with the `add` method you can define a new parser.

Let's say you want to add a parser for the property "fullSize", if this property it's `true` the parsers will return `width: '100%'`and `height: '100%'`, nothing instead:

```typescript
import { parsers, theme } from '@morfeo/core';

parsers.add('fullSize', ({ property, value, style }) => {
  if (value) {
    return {
      width: '100%',
      height: '100%',
    };
  }

  return {};
});

const style = parsers.resolve({ fullSize: true }); // { width: '100%', height: '100%' }
```

the `add` method needs 2 parameters, the first is the property that should be handled, the second is a callback that will be called each time the property should be resolved; The callback receives an object with 3 attributes:

`property`: the name of the property
`value`: the value passed
`style`: all the style passed inside the resolve function

In our example, this object will be equals to:

```json
{
  "property": "fullSize",
  "value": true,
  "style": { "fullSize": true }
}
```

##### **what about responsive behavior in this case?**

Don't worry, morfeo will think about responsive under the hood, feel free to you use your custom parser like this:

```typescript
const style = parsers.resolve({
  fullSize: {
    sm: false,
    md: false,
    lg: true,
  },
});
```

Morfeo will automatically create all the media queries:

```json
{
  "@media (min-width: 300px)": {},
  "@media (min-width: 600px)": {},
  "@media (min-width: 900px)": {
    "width": "100%",
    "height": "100%"
  }
}
```
