# @morfeo/svelte

![Morfeo logo](https://morfeo.dev/img/morfeo.png)

**@morfeo/svelte** is part of the [morfeo](https://github.com/morfeojs/morfeo) eco-system: a framework-agnostic set of tools that will help you to build your next **design system** based on a single source of truth: the **theme**.

---

[Documentation](https://morfeo.dev) | [API](https://github.com/morfeojs/morfeo) | [Contributing](https://github.com/morfeojs/morfeo/blob/main/CONTRIBUTING.md) | [![Discord](https://badgen.net/badge/icon/discord?icon=discord&label)](https://discord.gg/5hbsKMBRBh)

---

**@morfeo/svelte** expose a [svelte action](https://svelte.dev/docs#use_action) that you can apply to your components to use morfeo.

## Installation

with [npm](https://www.npmjs.com/package/@morfeo/svelte):

```bash
npm install @morfeo/web @morfeo/svelte
```

or [yarn](https://yarn.pm/@morfeo/svelte):

```bash
yarn add @morfeo/web @morfeo/svelte
```

## Usage

```html
<script>
  import { morfeoStyle } from "@morfeo/svelte";
</script>

<button use:morfeoStyle={{...$$restProps, componentName: 'Button' }}>
  <slot></slot>
</button>
```

This component can now be stylized referring to the theme with inline style.

```jsx
<script>
  import Button from './Button.svelte';
</script>

<div>
  <Button bg="dark" borerRadius="m" px="xs" py="xxs">Click me</Button>
</div>
```

Or simply defining the style directly inside the theme object:

```typescript
const myTheme = {
  ...rest,
  components: {
    Button: {
      style: {
        bg: 'dark',
        borderRadius: 'm',
        px: 'xs',
        py: '2xs',
      },
      props: {
        type: 'submit',
      },
      variants: {
        primary: {
          style: {
            bg: 'primary',
            borderWidth: 's',
            borderColor: 'secondary',
          },
        },
        submit: {
          style: {
            bg: 'secondary',
          },
          props: {
            type: 'submit',
          },
        },
      },
    },
  },
};
```

```jsx
<script>
  import Button from './Button.svelte';
</script>

<div>
  <Button>Regular button</Button>
  <Button variant="primary">Primary button</Button>
  <!-- This will be rendered with the attribute type="submit" -->
  <Button variant="submit">Submit button</Button>
</div>
```
