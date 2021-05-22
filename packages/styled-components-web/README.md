<div align="center"><h1>@morfeo/styled-components-web</h1></div>

**@morfeo/styled-components-web** is a wrapper of the **styled-components** library that allow you to quickly create **styled components** based on **morfeo theme**.

**@morfeo/styled-components-web** is part of the **@morfeo** eco-system, a set of  **framework agnostic** tools that help you to create beautiful design-systems for you web and mobile apps.

:information_source: Look at <a href="https://github.com/VLK-STUDIO/morfeo" target="_blank"><b>VLK-STUDIO/morfeo</b></a> to know more about **morfeo**

---



## Installation

```bash
npm i @morfeo/styled-components-web
```

Remember that **@morfeo/styled-components-web** has **styled-components** as *peerDependencies* so you need to install it separately.

---



 ## Usage

Starting from your configured theme, imagine to have defined a `Button` component. 

:warning: :warning: If you need to know more about **@morfeo** theme definition and initialization, the read of <a href="https://github.com/VLK-STUDIO/morfeo/tree/main/packages/core" target="_blank"><b>@morfeo/core</b></a> docs is highly recommended.:warning: :warning: 

```ts
// Sample myTheme.ts


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
        secondary: {
          tag: 'h3',
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
import { Typography, Box, Button } from './components'

export const MyComponent = () => {
  return (
    <Box>
    	<Typography variant="h1">Would you like to continue?</Typography>
      <Button variant="secondary">NO</Button>
      <Button variant="primary">YES</Button>
    </Box>
  )
}
```

---



## ThemeProvider

As **@morfeo/core** is based on a singleton, you don't really need to provide the theme by a ThemeProvider but it could be very usefull if you need to keep compatibility with an existing styled-component implementation.

ThemeProvider does not need to receive a theme prop because the library do the work for you.

To set your own Theme use the **@morfeo/web theme API** instead.

```tsx
// App.js

import { ThemeProvider } from '@morfeo/styled-components-web'
import { theme } from '@morfeo/web'
import { myTheme } from './myTheme'

theme.set(myTheme);

export const App = () => {
  return (
  	<ThemeProvider>
    	<YourApp />
    </ThemeProvider>
  )
}
```

---



## Custom tag

**@morfeo/styled-components-web** allow you to define the **HTML tag** of your components in a very flexible way, directly from theme. 

For Example you can set a different **HTML tag** for a variant.

Take a look on this sample theme:

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
          tag: 'h3',
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

As you can see the secondary variant use an `h3`  tag.

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
    <Button variant="link" /> // <h3 .../>
    </>
  )
}
```



## useTheme

**useTheme** is just a re-export from **styled-components**. You can use it as usually.

```tsx
import { useTheme } from '@morfeo/styled-components-web'
import { Box } from './components'

const MyComponent = () => {
  const theme = useTheme();
  const bgColor = theme.colors.primary
  
  return (
    <Box bgColor={bgColor} />
  )
}
```

---



