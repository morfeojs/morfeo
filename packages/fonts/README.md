# @morfeo/fonts

![Morfeo logo](https://morfeo.dev/img/morfeo.png)

**@morfeo/fonts** provide 2 helpers to easily load a font on your document style and your morfeo theme both.

**@morfeo/fonts** is part of the [@morfeo](https://morfeo.dev) eco-system, a set of **framework-agnostic** tools that help you to create beautiful design systems for your web and mobile apps.

---

[Documentation](https://morfeo.dev) | [API](https://github.com/VLK-STUDIO/morfeo) | [Contributing](https://github.com/VLK-STUDIO/morfeo/blob/main/CONTRIBUTING.md) | [Discord](https://discord.com/channels/939456827152805919/939456827152805922)

---

## Table of contents

#### [Installation](#installation-1)

#### [APIS](#apis-1)

- [mountFont](#mountFont)
  - [@import fontFace](#@import)
  - [define fontFace](#@fontFace)
  - [references](#@references)

---

## Installation

with [npm](https://www.npmjs.com/package/@morfeo/fonts):

```bash
npm install @morfeo/fonts
```

or [yarn](https://yarn.pm/@morfeo/fonts):

```bash
 yarn add @morfeo/fonts
```

**note:** @morfeo/fonts is also included on **@morfeo/web**

---

## Apis

### mountFont

The `mountFont` Api mount a font on the document head

#### @import

Setting the prop `importFontFace` to `true` the style will be resolve to `@import ...`.

It is usefull if you want to import a css file with the fontFace definitions.

It is also the case of Google Font.

```typescript
import { mountFont } from '@morfeo/fonts';

mountFont({
  urls: [
    {
      url: 'https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap',
    },
  ],
  name: 'bold',
  family: 'Roboto',
  importFontFace: true,
});
```

#### @fontFace

By not defining or setting to `true` the `importFontFace` prop the style will resolve on `@fontFace ...`.
It allows to create `@fontFace` definition from scratch

```typescript
import { mountFont } from '@morfeo/fonts';

mountFont({
  urls: [
    {
      url: 'src/fonts/Roboto-bold.woff',
      format: 'woff',
    },
    {
      url: 'src/fonts/Roboto-bold.woff2',
      format: 'woff2',
    },
  ],
  name: 'bold',
  family: 'Roboto',
  weight: 'bold',
});
```

#### References

```typescript
export type FontType = 'woff' | 'woff2' | 'trueType' | 'embedded-opentype';

export type FontUrl = {
  url: string;
  format?: FontType;
};

export type MountFontParams = {
  name: string;
  urls: FontUrl[];
  family: string;
  importFontFace?: boolean;
  weight?: string;
};
```
