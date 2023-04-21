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

### Others

```bash
# With npm
npm install @morfeo/compiler

# With yarn
yarn add @morfeo/compiler
```

## Usage

### Example in React

#### createUseStyle

```tsx
import { createUseStyle } from "@morfeo/css"

const useStyle = createUseStyle({
  p: 'm',
  bg: 'background',
  corner: 's',
});


function MyComponent() {
  const { className } = useStyle();
  return (
    <div className={className}>
      <h1>Hello world!</h1>
    </div>
  )
}
```

This will be replaced at **build-time** into something like:

```tsx
import { createUseStyle } from "@morfeo/css"

const useStyle = () => ({
  className: 'p-m bg-background corner-s',
  style: {},
});


function MyComponent() {
  const className = useStyle();
  return (
    <div className={className}>
      <h1>Hello world!</h1>
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
```
