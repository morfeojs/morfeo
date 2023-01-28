# @morfeo/css

![Morfeo logo](https://morfeo.dev/img/morfeo.png)

**@morfeo/css** zero run-time usage of morfeo

---

[Documentation](https://morfeo.dev) | [API](https://github.com/morfeojs/morfeo) | [Contributing](https://github.com/morfeojs/morfeo/blob/main/CONTRIBUTING.md) | [![Discord](https://badgen.net/badge/icon/discord?icon=discord&label)](https://discord.gg/5hbsKMBRBh)

---

## Installation

```bash
# With npm
npm install @morfeo/css

# With yarn
yarn add @morfeo/css
```

Then, depending on your stack, you'll need to install another package in order to enabling the build-time behavior:

### Nextjs

```bash
# With npm
npm install @morfeo/next

# With yarn
yarn add @morfeo/next
```

### React (🔜 Coming soon)

```bash
# With npm
npm install @morfeo/craco

# With yarn
yarn add @morfeo/craco
```

### Webpack

```bash
# With npm
npm install @morfeo/webpack

# With yarn
yarn add @morfeo/webpack
```

## Usage

### Example in React

```tsx
import { createUseClasses } from "@morfeo/css"

const useClasses = createUseClasses({
  container: {
    p: 'm',
    bg: 'background',
    corner: 's',
  },
  title: {
    fontSize: 'l',
    mb: 'm'
  },
});


function MyComponent() {
  const classes = useClasses();
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Hello world!</h1>
    </div>
  )
}
```

This will be replaced at **build-time** into something like:

```tsx
import { createUseClasses } from "@morfeo/css"

const useClasses = () => ({
  container: 'p-m bg-background corner-s',
  title: 'fontSize-l mb-m',
});


function MyComponent() {
  const classes = useClasses();
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Hello world!</h1>
    </div>
  )
}
```

And also the related `css` will be generated:

```css
.p-m {
  padding: 1rem;
}
.bg-background {
  background-color: #ffffff;
}
.corner-s {
  border-radius: 12px;
}
.fontSize-l {
  font-size: 1.125rem;
}
.mb-m {
  margin: 1rem;
}
```
