<div align="center">
<h1>@morfeo/fonts</h1>
</div>

**@morfeo/fonts** provide 2 helpers to easily load a font on your document style and your mofeo theme both.

**@morfeo/fonts** is part of the [@morfeo](https://github.com/VLK-STUDIO/morfeo) eco-system, a set of **framework-agnostic** tools that help you to create beautiful design systems for your web and mobile apps.

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
      url: 'https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap'
    },
  ],
  name: 'bold',
  family: 'Roboto', 
  importFontFace: true,
})
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
      format: 'woff'
    },
    {
      url: 'src/fonts/Roboto-bold.woff2',
      format: 'woff2'
    },
  ],
  name: 'bold',
  family: 'Roboto', 
  weight: 'bold'
})
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

