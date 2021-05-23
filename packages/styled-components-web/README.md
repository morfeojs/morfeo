<div align="center">
  <h1>@morfeo/styled-components-web</h1>
</div>

**@morfeo/styled-components-web** is a wrapper of the **styled-components** library that allows you to quickly create **styled components** based on **the morfeo theme**.

**@morfeo/styled-components-web** is part of the **@morfeo** eco-system, a set of **framework-agnostic** tools that help you to create beautiful design systems for your web and mobile apps.

:information_source: Look at <a href="https://github.com/VLK-STUDIO/morfeo" target="_blank"><b>morfeo</b></a> to know more about **morfeo**

---

<div align="center">
  <a href="https://github.com/VLK-STUDIO/morfeo">Documentation</a> |
  <a href="https://github.com/VLK-STUDIO/morfeo">API</a> |
  <a href="https://github.com/VLK-STUDIO/morfeo">Contributing</a> |
  <a href="https://morfeo.slack.com">Slack</a>
</div>

---

## Installation

```bash
npm i @morfeo/styled-components-web @morfeo/react
```

Remember that **@morfeo/styled-components-web** has **styled-components** as _peerDependencies_ so you need to install it separately.

---

## Usage

Starting from your configured theme, imagine to have defined a `Button` component.

:warning: :warning: If you need to know more about **@morfeo** theme definition and initialization, reading [@morfeo/spec](https://github.com/VLK-STUDIO/morfeo/tree/main/packages/spec) docs is highly recommended.:warning: :warning:

```ts
// Sample myTheme.ts

const myTheme = {
  ...appTheme,
  components: {
    Button: {
      tag: 'button',
      style: {
        ...yourButtonBaseStyle
      },
      variants: {
        primary: {
          style: {
            ...yourButtonPrimaryStyle
          }
        },
        secondary: {
          tag: 'a',
          style: {
            ...yourButtonSecondaryStyle
          }
        }
      }
    }
    ...restOfYourComponents
  }
}
```

You can create a styled Component Based on your **theme Button component**:

```typescript
// Button.ts
import styled from '@morfeo/styled-components-web';

export const Button = styled.Button({});
```

And use it as a common React component:

```tsx
// MyComponent.ts
import { Typography, Box, Button } from './components';

export const MyComponent = () => {
  return (
    {/* you can always add other properties */}
    <Box display="flex" alignItems="center">
      <Typography variant="h1">Would you like to continue?</Typography>
      <Button variant="secondary" bg="danger">NO</Button>
      <Button variant="primary">YES</Button>
    </Box>
  );
};
```

:information_source: Notice

Defining a component in this way:

```tsx
export const Button = styled.Button({});
```

It's the same as defining it in this way:

```tsx
export const Button = styled.button({ componentName: 'Button' });
```

In fact, under the hood morfeo will find the component "Button" inside your theme and its specification will use the right [tag](#custom-tag), style, and [properties](#custom-props)

---

## ThemeProvider

As **@morfeo/core** is based on a singleton, you don't really need to provide the theme by a ThemeProvider but it could be very useful if you need to keep compatibility with an existing styled-component implementation.

ThemeProvider does not need to receive a theme prop because the library do the work for you.

To set your own Theme use the **@morfeo/web theme API** instead.

```tsx
// App.js

import { ThemeProvider } from '@morfeo/styled-components-web';
import { theme } from '@morfeo/web';
import { myTheme } from './myTheme';

theme.set(myTheme);

export const App = () => {
  return (
    <ThemeProvider>
      <YourApp />
    </ThemeProvider>
  );
};
```

---

## Custom tag

**@morfeo/styled-components-web** allows you to define the **HTML tag** of your components in a very flexible way, directly from the theme.

For Example, you can set a different **HTML tag** for a variant.

Take a look at this sample theme:

```typescript
// myTheme.ts

const theme = {
  ...appTheme,
  components: {
    Button: {
      tag: 'button',
      style: {
        ...yourButtonBaseStyle
      },
      variants: {
        primary: {
          style: {
            ...yourButtonPrimaryStyle
          }
        },
        link: {
          tag: 'a',
          style: {
            ...yourButtonSecondaryStyle
          }
        }
      }
    }
    ...restOfYourComponents
  }
}
```

As you can see the secondary variant uses an `a` tag.
So, you can define your component:

```tsx
// Button.ts

import styled from '@morfeo/styled-components-web';

export const Button = styled.Button({});
```

And then, it will result in this way:

```tsx
import styled, { useTheme } from '@morfeo/styled-components-web'
import { Button } from './components'

const MyComponent = () => {

  return (
    <>
    <Button variant="primary" /> // <button .../>
    <Button variant="link" /> // <a .../>
    </>
  )
}
```

## Custom Props

Inside the component specification you can also define **default properties** for your components, for example:

```typescript
const myTheme = {
  ...restOfTheme,
  components: {
    Button: {
      tag: 'button',
      style: {},
      props: {
        type: 'submit',
      },
      variants: {
        cancel: {
          props: {
            type: 'button',
            'aria-label': 'cancel',
          },
        },
      },
    },
  },
};
```

```tsx
const Button = styled.Button({});
const CancelButton = styled.Button({
  variant: 'cancel',
});

function App() {
  return (
    <>
      <Button>Submit</Button>; // <button type="submit" />
      <Button variant="cancel">Cancel</Button>; // <button
        type="button"
        aria-label="cancel"
      />
      <CancelButton>Cancel</CancelButton>; //{' '}
      <button type="button" aria-label="cancel" />
    </>
  );
}
```
