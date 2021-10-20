# @morfeo/hooks

![Morfeo logo](https://morfeo.dev/img/morfeo.png)

[morfeo](https://morfeo.dev) is a framework-agnostic set of tools that will help you to build your next **design system** based on a single source of truth: the **theme**.

---

[Documentation](https://morfeo.dev) | [API](https://github.com/VLK-STUDIO/morfeo) | [Contributing](https://github.com/VLK-STUDIO/morfeo/blob/main/CONTRIBUTING.md) | [Slack](https://morfeo.slack.com)

---

**@morfeo/hooks** expose a set of hooks to easily use morfeo inside a `react` context.

## Installation

```bash
# npm
npm i @morfeo/react

# yarn
yarn add @morfeo/react
```

- [MorfeoProvider](#morfeo-provider)
- [useTheme](#usetheme)
  - [useThemeSlice](#usethemeslice)
  - [useThemeValue](#usethemevalue)
- [useStyles](#usestyles)
  - [useStyle](#usestyle)

Advanced

- [useProps](#useprops)

## Morfeo Provider

To sync morfeo with react you have to first of all wrap you app with the `MorfeoProvider`:

```tsx
import { MorfeoProvider } from '@morfeo/hooks';

function App() {
  return (
    <MorfeoProvider>
      <YourApp />
    </MorfeoProvider>
  );
}
```

## useTheme

Use this hook to get the current theme and use it inside a components:

```jsx
const MyComponent: React.FC = () => {
  const theme = useTheme();

  return (
    <div>
      <p>My primary color is: {theme.colors.primary}</p>
      <p>My xxl space is: {theme.spaces.xxl}</p>
    </div>
  );
};
```

> If you already know the [core API](./core) useTheme is the equivalent of `morfeo.getTheme()`, the main difference is that useTheme react
> to theme changes and force a re-render of the component.

Most of the time you don't need all theme, but just a slice or single value, in this cases [useThemeSlice](#useThemeSlice) and [useThemeValue](#useThemeValue) can will give you only the part of the theme you want:

### useThemeSlice

```jsx
const MyComponent: React.FC = () => {
  const colors = useThemeSlice('colors');

  return (
    <div>
      <p>My primary color is: {colors.primary}</p>
      <p>My secondary color is: {colors.secondary}</p>
    </div>
  );
};
```

### useThemeValue

```jsx
const MyComponent: React.FC = () => {
  const primaryColor = useThemeValue('colors', 'primary');

  return (
    <div>
      <p>My primary color is: {primaryColor}</p>
    </div>
  );
};
```

## useStyles

If you don't need the theme, but to generate a style based on the theme; The hooks `useStyles` and `useStyle` are made for this reason:

```jsx
const MyComponent: React.FC = () => {
  const { agreeStyle, disagreeStyle, textStyle } = useStyles({
    agreeStyle: { componentName: 'Button', variant: 'success' },
    disagreeStyle: { componentName: 'Button' },
    textStyle: { fontSize: 'xxl', color: 'white' },
  });

  return (
    <div>
      <p style={textStyle}>Nothing is better than a fresh beer in summer 🍺</p>
      <button style={agreeStyle}>Oh yes! 🍻</button>
      <button style={disagreeStyle}>What about a Coke? 🥤</button>
    </div>
  );
};
```

## useStyle

Use it if you need to generate just one style:

```jsx
const AgreeButton: React.FC = ({ children }) => {
  const buttonStyle = useStyles({
    componentName: 'Button',
    variant: 'success',
  });

  return <button style={buttonStyle}>{children}</button>;
};
```

> Just like useTheme, **useStyles** and **useStyle** are the equivalent of the [core API's](https://morfeo.dev/docs/Packages/core) `morfeo.resolve(style)`
> but they force a re-render when the theme changes.

## useProps

Use it to get the default props of a components, a common use is to merge the default props with the current props:

```jsx
function MyButton(props) {
  const defaultProps = useProps('Button', 'primary');

  return <button {...defaultProps} {...props} />;
}
```