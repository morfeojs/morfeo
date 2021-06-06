<div align="center">
<h1>@morfeo/svelte</h1>
</div>

**@morfeo/svelte** is part of the [morfeo](https://github.com/VLK-STUDIO/morfeo) eco-system: a framework-agnostic set of tools that will help you to build your next **design system** based on a single source of truth: the **theme**.

---

<div align="center">
  <a href="https://github.com/VLK-STUDIO/morfeo">Documentation</a> |
  <a href="https://github.com/VLK-STUDIO/morfeo">API</a> |
  <a href="https://github.com/VLK-STUDIO/morfeo/blob/main/CONTRIBUTING.md">Contributing</a> |
  <a href="https://morfeo.slack.com">Slack</a>
</div>

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
	import { morfeo } from "@morfeo/svelte";
</script>

<button use:morfeo={{...$$restProps, componentName: 'Button' }}>
  <slot></slot>
</button>
```

This component can now be stylized referring to the theme with inline style.

```html
<script>
  import Button from './Button.svelte';
</script>

<div>
  <button bg="dark" borerRadius="m" px="xs" py="xxs">Click me</button>
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
        py: 'xxs',
      },
      props: {
      	type: 'submit'
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
            bg: 'secondary'
          },
          props: {
            type: 'submit'
          },
        },
      },
    },
  },
};
```

```html
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

