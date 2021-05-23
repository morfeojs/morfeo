<div align="center">
<h1>@morfeo/web</h1>
</div>

**@morfeo/web** adds to [@morfeo/core](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core) additional parsers and typings to make it perfect for a web environment.

**@morfeo/web** is part of the [@morfeo](https://github.com/VLK-STUDIO/morfeo) eco-system, a set of **framework-agnostic** tools that help you to create beautiful design systems for your web and mobile apps.

---

<div align="center">
  <a href="https://github.com/VLK-STUDIO/morfeo">Documentation</a> |
  <a href="https://github.com/VLK-STUDIO/morfeo">API</a> |
  <a href="https://github.com/VLK-STUDIO/morfeo">Contributing</a> |
  <a href="https://morfeo.slack.com">Slack</a>
</div>

---

## Table of contents

#### [Installation](#installation-1)

#### [Usage](#usage-1)

- [pseudos](#pseudos)

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

**@morfeo/web** re-export all the **@morfeo/core** library, check out its [documentation](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core) before continue.

In addition to the core library, the web package adds the parsers to handle **pseudo classes** and **pseudo elements**.

:warning: Warning

> You'll probably never use *directly* `@morfeo/web` or `@morfeo/core`, instead, you'll more likely to use [@morfeo/react](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/react), [@morfeo/svelte](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/svelte), [@morfeo/jss](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/jss), or other packages that offer better integration of the morfeo eco-system in your framework of choice.
> In this particular case, it's important to know that you cannot define a style for pseudo-elements (or media queries) as inline-style, that's why you need some other tool like JSS or Styled Components to handle this behavior. Likely, we already thought about it, so feel free to check out our packages.

### pseudos

You can pass to the `resolve` method any pseudo class with the format '&:{pseudo}', for example: 

```typescript
import { parsers } from "@morfeo/web";

const style = parsers.resolve({
  bg: "primary",
  "&:hover": {
    bg: "secondary", 
  },
});
```

Will generate the style:

```json
{
  "backgroundColor": "black",
  "&:hover": {
    "backgroundColor": "grey",
  },
}
```

## Supported Pseudos

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
