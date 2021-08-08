# @morfeo/preset-default

![Morfeo logo](https://morfeo.dev/img/morfeo.png)

`@morfeo/preset-default` is the fastest way to start using morfeo with 2 complete themes!
It expose 2 themes, `light` and `dark`, you can you use these themes as they are or customize them to fit your design!

**@morfeo/preset-default** is part of the [@morfeo](https://morfeo.dev) eco-system, a set of **framework-agnostic** tools that help you to create beautiful design systems for your web and mobile apps.

---

[Documentation](https://morfeo.dev) | [API](https://github.com/VLK-STUDIO/morfeo) | [Contributing](https://github.com/VLK-STUDIO/morfeo/blob/main/CONTRIBUTING.md) | [Slack](https://morfeo.slack.com)

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
import '@morfeo/preset-default';
```

By importing the preset, 2 themes will be automatically added: `light` and `dark`:

```typescript
morfeo.useTheme('light');
// OR
morfeo.useTheme('dark');
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

## Default Light Theme

```json
{
  "borders": {
    "primary": "1px solid dark",
    "secondary": "3px solid light"
  },
  "borderStyles": {
    "dashed": "dashed",
    "dotted": "dotted",
    "double": "double",
    "groove": "groove",
    "hidden": "hidden",
    "none": "none",
    "solid": "solid"
  },
  "borderWidths": {
    "none": "0px",
    "xxs": "0.2px",
    "xs": "0.5px",
    "s": "1px",
    "m": "2px",
    "l": "4px",
    "xl": "6px",
    "xxl": "8px"
  },
  "breakpoints": {
    "lg": "1920px",
    "md": "1366px",
    "sm": "768px",
    "xs": "375px"
  },
  "colors": {
    "dark": "#2f2f2f",
    "error": "#d10343",
    "light": "#ececec",
    "primary.lightest": "#dbe9ff",
    "primary.lighter": "#92bdff",
    "primary.light": "#4992ff",
    "primary": "#06f",
    "primary.dark": "#0049b6",
    "primary.darker": "#002c6d",
    "primary.darkest": "#000f24",
    "secondary.lightest": "#fae0f0",
    "secondary.lighter": "#f0a1d1",
    "secondary.light": "##e563b3",
    "secondary": "#db2494",
    "secondary.dark": "#9c1a6a",
    "secondary.darker": "#5e0f3f",
    "secondary.darkest": "#1f0515",
    "success": "#01ce80",
    "warning": "#ff8c00",
    "accent": "#23cedf",
    "disabled": "#bcbcbc",
    "white": "#ffffff",
    "black": "#000000",
    "background": "#ffffff",
    "invertedBackground": "#000000",
    "textColor": "#2f2f2f",
    "invertedTextColor": "#ececec",
    "headTextColor": "#000000",
    "invertedHeadTextColor": "#ffffff"
  },
  "fontSizes": {
    "xxs": "4px",
    "xs": "8px",
    "s": "12px",
    "m": "16px",
    "l": "20px",
    "xl": "24px",
    "xxl": "28px",
    "none": "0px"
  },
  "fontWeights": {
    "regular": "regular",
    "medium": "medium",
    "bold": "bold"
  },
  "gradients": {
    "primary": {
      "colors": ["primary", "secondary"]
    },
    "secondary": {
      "colors": ["light", "white"]
    }
  },
  "letterSpacings": {
    "body": "0.2px",
    "heading": "0.4px"
  },
  "lineHeights": {
    "body": "1em",
    "heading": "2em"
  },
  "mediaQueries": {},
  "opacities": {
    "none": 0,
    "light": 0.2,
    "medium": 0.6,
    "strong": 1
  },
  "radii": {
    "xxs": "4px",
    "xs": "8px",
    "s": "12px",
    "m": "16px",
    "l": "20px",
    "xl": "24px",
    "xxl": "28px",
    "none": "32px",
    "round": "50%"
  },
  "shadows": {
    "light": {
      "color": "dark",
      "opacity": "light",
      "offset": {
        "height": "xxs",
        "width": "xxs"
      },
      "radius": 16
    },
    "medium": {
      "color": "dark",
      "opacity": "light",
      "offset": {
        "height": "xxs",
        "width": "xxs"
      },
      "radius": 16
    },
    "none": {
      "color": "dark",
      "opacity": "light",
      "offset": {
        "height": "none",
        "width": "none"
      },
      "radius": 0
    },
    "strong": {
      "color": "dark",
      "opacity": "light",
      "offset": {
        "height": "none",
        "width": "none"
      },
      "radius": 10
    }
  },
  "sizes": {
    "xxs": "8px",
    "xs": "16px",
    "s": "24px",
    "m": "32px",
    "l": "40px",
    "xl": "48px",
    "xxl": "56px",
    "none": "0px"
  },
  "spacings": {
    "xxs": "8px",
    "xs": "16px",
    "s": "24px",
    "m": "32px",
    "l": "40px",
    "xl": "48px",
    "xxl": "56px",
    "none": "0px"
  },
  "transitions": {
    "slow": "1s ease",
    "medium": ".6 ease",
    "fast": ".3s ease",
    "none": "0s"
  },
  "zIndices": {
    "light": -1,
    "medium": 1000,
    "none": 0,
    "strong": 9999
  }
}
```

## Default Dark Theme

```json
{
  "borders": {
    "primary": "1px solid dark",
    "secondary": "3px solid light"
  },
  "borderStyles": {
    "dashed": "dashed",
    "dotted": "dotted",
    "double": "double",
    "groove": "groove",
    "hidden": "hidden",
    "none": "none",
    "solid": "solid"
  },
  "borderWidths": {
    "none": "0px",
    "xxs": "0.2px",
    "xs": "0.5px",
    "s": "1px",
    "m": "2px",
    "l": "4px",
    "xl": "6px",
    "xxl": "8px"
  },
  "breakpoints": {
    "lg": "1920px",
    "md": "1366px",
    "sm": "768px",
    "xs": "375px"
  },
  "colors": {
    "dark": "#2f2f2f",
    "error": "#d10343",
    "light": "#ececec",
    "primary.lightest": "#dbe9ff",
    "primary.lighter": "#92bdff",
    "primary.light": "#4992ff",
    "primary": "#06f",
    "primary.dark": "#0049b6",
    "primary.darker": "#002c6d",
    "primary.darkest": "#000f24",
    "secondary.lightest": "#fae0f0",
    "secondary.lighter": "#f0a1d1",
    "secondary.light": "##e563b3",
    "secondary": "#db2494",
    "secondary.dark": "#9c1a6a",
    "secondary.darker": "#5e0f3f",
    "secondary.darkest": "#1f0515",
    "success": "#01ce80",
    "warning": "#ff8c00",
    "accent": "#23cedf",
    "disabled": "#bcbcbc",
    "white": "#ffffff",
    "black": "#000000",
    "background": "#000000",
    "invertedBackground": "#ffffff",
    "textColor": "#ececec",
    "invertedTextColor": "#2f2f2f",
    "headTextColor": "#ffffff",
    "invertedHeadTextColor": "#000000"
  },
  "fontSizes": {
    "xxs": "4px",
    "xs": "8px",
    "s": "12px",
    "m": "16px",
    "l": "20px",
    "xl": "24px",
    "xxl": "28px",
    "none": "0px"
  },
  "fontWeights": {
    "regular": "regular",
    "medium": "medium",
    "bold": "bold"
  },
  "gradients": {
    "primary": {
      "colors": ["primary", "secondary"]
    },
    "secondary": {
      "colors": ["light", "white"]
    }
  },
  "letterSpacings": {
    "body": "0.2px",
    "heading": "0.4px"
  },
  "lineHeights": {
    "body": "1em",
    "heading": "2em"
  },
  "mediaQueries": {},
  "opacities": {
    "none": 0,
    "light": 0.2,
    "medium": 0.6,
    "strong": 1
  },
  "radii": {
    "xxs": "4px",
    "xs": "8px",
    "s": "12px",
    "m": "16px",
    "l": "20px",
    "xl": "24px",
    "xxl": "28px",
    "none": "32px",
    "round": "50%"
  },
  "shadows": {
    "light": {
      "color": "dark",
      "opacity": "light",
      "offset": {
        "height": "xxs",
        "width": "xxs"
      },
      "radius": 16
    },
    "medium": {
      "color": "dark",
      "opacity": "light",
      "offset": {
        "height": "xxs",
        "width": "xxs"
      },
      "radius": 16
    },
    "none": {
      "color": "dark",
      "opacity": "light",
      "offset": {
        "height": "none",
        "width": "none"
      },
      "radius": 0
    },
    "strong": {
      "color": "dark",
      "opacity": "light",
      "offset": {
        "height": "none",
        "width": "none"
      },
      "radius": 10
    }
  },
  "sizes": {
    "xxs": "8px",
    "xs": "16px",
    "s": "24px",
    "m": "32px",
    "l": "40px",
    "xl": "48px",
    "xxl": "56px",
    "none": "0px"
  },
  "spacings": {
    "xxs": "8px",
    "xs": "16px",
    "s": "24px",
    "m": "32px",
    "l": "40px",
    "xl": "48px",
    "xxl": "56px",
    "none": "0px"
  },
  "transitions": {
    "slow": "1s ease",
    "medium": ".6 ease",
    "fast": ".3s ease",
    "none": "0s"
  },
  "zIndices": {
    "light": -1,
    "medium": 1000,
    "none": 0,
    "strong": 9999
  }
}
```
