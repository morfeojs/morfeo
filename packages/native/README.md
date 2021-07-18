# @morfeo/native

![Morfeo logo](https://morfeo.dev/img/morfeo.png)

[morfeo](https://morfeo.dev) is a framework-agnostic set of tools that will help you to build your next **design system** based on a single source of truth: the **theme**.

---

[Documentation](https://morfeo.dev) | [API](https://github.com/VLK-STUDIO/morfeo) | [Contributing](https://github.com/VLK-STUDIO/morfeo/blob/main/CONTRIBUTING.md) | [Slack](https://morfeo.slack.com)

---

@morfeo/native package is brings to `React Native` the morfeo's eco system

## Installation

with [npm](https://www.npmjs.com/package/@morfeo/native):

```bash
npm install @morfeo/native
```

or [yarn](https://yarn.pm/@morfeo/native):

```bash
yarn add @morfeo/native
```

## Usage

Just like @morfeo/react, the API of this package is the same as [@morfeo/hooks](https://morfeo.dev/docs/Packages/hooks), the main differences between `@morfeo/react` and `@morfeo/native` are related to how the parsers converts style objects to valid style for React Native, for example in @morfeo/native there you cannot use any pseudo element/class and shadows output is different (`shadowOffset`, `shadowColor`, `shadowOpacity` and `shadowRadius` instead of `boxShadow`)

```tsx
import { View, ViewProps } from 'react-native';
import { useStyle, Style } from '@morfeo/native';

type Props = Omit<ViewProps, 'style'> & {
  style?: Style;
};

const CustomView: React.FC<Props> = ({ ...props, style }) => {
  const parsedStyle = useStyle(style);
  return <View {...props} style={parsedStyle} />;
};

const App = () => {
  return (
    <CustomView
      style={{
        bg: 'primary',
        px: 'm',
        corner: 's',
        shadow: 'strong',
      }}
    />
  );
};
```
