# @morfeo/react

![Morfeo logo](https://morfeo.dev/img/morfeo.png)

**@morfeo/react** is part of the [@morfeo](https://morfeo.dev) eco-system, a set of **framework-agnostic** tools that help you to create beautiful design systems for your web and mobile apps.

---

[Documentation](https://morfeo.dev) | [API](https://github.com/VLK-STUDIO/morfeo) | [Contributing](https://github.com/VLK-STUDIO/morfeo/blob/main/CONTRIBUTING.md) | [![Discord](https://badgen.net/badge/icon/discord?icon=discord&label)](https://discord.gg/5hbsKMBRBh)

---

## Installation

```bash
# npm
npm i @morfeo/react

# yarn
yarn add @morfeo/react
```

**@morfeo/react** re-expose [@morfeo/hooks](https://morfeo.dev/docs/Packages/hooks) and [@morfeo/web](https://morfeo.dev/docs/Packages/web), we suggest you to read their documentations.

**@morfeo/react** re-expose [@morfeo/hooks](./hooks.mdx) and [@morfeo/web](./web.mdx), we suggest you to read their documentations.

In addition to `@morfeo/hooks`, this package add 2 other hooks:

- [useClassNames](#useClassNames)
- [useClassName](#useClassName)

These hooks are similar to `useStyles` and `useStyle` of `@morfeo/hooks`, but instead of returning a css object they return a class (or a set of classes) to apply to the component; they are needed because **with inline styles we cannot handle media queries or pseudo classes**:

```tsx
function Button() {
  const className = useClassName({
    p: { lg: 'm', sm: 's' }, // <--- Unhandled by useStyle(s)
    bg: 'primary',
    '&:hover': {
      opacity: 'light', // <--- Unhandled by useStyle(s)
    },
  });

  return <button className={className}>Click me</button>;
}
```

## useClassNames

```typescript
function useClassNames<Key extends string>(
  styles: Record<Key, Style>,
): Record<Key, string>;
```

### Example

```tsx
function Button() {
  const classes = useClassNames({
    container: {
      px: 'm',
    },
    button: {
      p: { lg: 'm', sm: 's' },
      bg: 'primary',
      '&:hover': {
        opacity: 'light',
      },
    },
  });

  return (
    <div className={classes.container}>
      <button className={classes.button}>Click me</button>
    </div>
  );
}
```

## useClassName

```typescript
function useClassName(style: Style): string;
```

### Example

```tsx
function Button() {
  const className = useClassName({
    p: { lg: 'm', sm: 's' },
    bg: 'primary',
    '&:hover': {
      opacity: 'light',
    },
  });

  return <button className={className}>Click me</button>;
}
```
