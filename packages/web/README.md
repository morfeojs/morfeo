<div align="center">
<h1>@morfeo/web</h1>
</div>

**@morfeo/web** adds to [@morfeo/core](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core) additional parsers and typings to make it perfect for a web environment.

**@morfeo/web** is part of the [@morfeo](https://github.com/VLK-STUDIO/morfeo) eco-system, a set of **framework-agnostic** tools that help you to create beautiful design systems for your web and mobile apps.

---

<div align="center">
  <a href="https://morfeo.dev">Documentation</a> |
  <a href="https://github.com/VLK-STUDIO/morfeo">API</a> |
  <a href="https://github.com/VLK-STUDIO/morfeo/blob/main/CONTRIBUTING.md">Contributing</a> |
  <a href="https://morfeo.slack.com">Slack</a>
</div>

---

## Table of contents

#### [Installation](#installation-1)

#### [Usage](#usage-1)

- [pseudos](#pseudos)
- [gradients](#gradients)

#### [Supported Pseudos](#supported-pseudos-1)

## Installation

with [npm](https://www.npmjs.com/package/@morfeo/web):

```bash
npm install @morfeo/web
```

or [yarn](https://yarn.pm/@morfeo/web):

```bash
yarn add @morfeo/web
```

## Usage

**@morfeo/web** re-export all the **@morfeo/core** library, check out its [documentation](https://morfeo.dev/docs/Packages/core) before continue.

In addition to the core library, the web package adds the parsers to handle **pseudo classes**, **pseudo elements** and **gradients**.

### pseudos

You can pass to the `resolve` method any pseudo class with the format '&:{pseudo}', for example:

```typescript
import { parsers } from '@morfeo/web';

const style = parsers.resolve({
  bg: 'primary',
  '&:hover': {
    bg: 'secondary',
  },
});
```

Will generate the style:

```json
{
  "backgroundColor": "black",
  "&:hover": {
    "backgroundColor": "grey"
  }
}
```

If you're using `@morfeo/web` to directly style a component without any other css-in-js library, you can use `getStyles` :

```typescript
import { getStyles } from '@morfeo/web';

const element = document.querySelector('#myButton');

const { classes } = getStyles({
  button: {
    bg: 'primary',
    '&:hover': {
      bg: 'secondary',
    },
  },
});

element.classList.add(classes.button);
```

In this case, @morfeo will generate plain css. To understand more about this topic we suggest you check our documentation about [@morfeo/jss](https://morfeo.dev/docs/Packages/jss), in fact, the function `getStyles` is re-exported from `@morfeo/jss`.

#### Supported Pseudos

For now morfeo support this pseudos:

```
&:active
&:checked
&:disabled
&:empty
&:enabled
&:first-child
&:first-of-type
&:focus
&:hover
&:in-range
&:invalid
&:last-child
&:last-of-type
&:link
&:only-of-type
&:only-child
&:optional
&:out-of-range
&:read-only
&:read-write
&:required
&:root
&:target
&:valid
&:visited
&::after
&::before
```

as specified [here](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core#add-a-custom-parser) yuo can always add more parser to extends morfeo, or simply add more pseudos in this list by editing this [file](https://github.com/VLK-STUDIO/morfeo/blob/main/packages/web/src/properties.ts) and open a pull request.

### gradients

You can specify inside the theme a set of gradients to use inside your application by using the `gradients` theme slice:

```typescript
const myTheme = {
  ...restOfTheTheme,
  gradients: {
    ...restOfTheTheme.gradients,
    primary: {
      start: 0,
      angle: 90,
      end: 100,
      colors: ['primary', 'secondary'],
      kind: 'linear',
    },
  },
};
```

An example of usage is:

```typescript
const buttonStyle = button.resolve({ gradient: 'primary' });
const textStyle = button.resolve({ textGradient: 'primary' });
```

with the results:

[![gradient-Button.png](https://i.postimg.cc/k5B8tNMP/gradient-Button.png)](https://postimg.cc/XZ6XRCys)

[![gradient-Text.png](https://i.postimg.cc/5NDMVbH5/gradient-Text.png)](https://postimg.cc/SJLPL0fj)

check out [@morfeo/spec](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/spec) for the complete specification of the type `GradientConfig` used inside the `gradients` theme slice.
