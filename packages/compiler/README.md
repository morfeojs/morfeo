# @morfeo/compiler

![Morfeo logo](https://morfeo.dev/img/morfeo.png)

**@morfeo/compiler** exposes plugins for the most used bundler to enable the evaluation at build time of morfeo.

---

[Documentation](https://morfeo.dev) | [API](https://github.com/morfeojs/morfeo) | [Contributing](https://github.com/morfeojs/morfeo/blob/main/CONTRIBUTING.md) | [![Discord](https://badgen.net/badge/icon/discord?icon=discord&label)](https://discord.gg/5hbsKMBRBh)

---

## Installation

```bash
# With npm
npm install --save-dev @morfeo/compiler

# With yarn
yarn add --dev @morfeo/compiler
```

Once the plugin is installed you can add it the plugins in your bundler configuration:

### Webpack

`webpack.config.js`

```javascript
const { MorfeoWebpackPlugin } = require('@morfeo/compiler');

module.exports = {
  ...yourWebpackConfiguration,
  plugins: [
    ...yourOtherPlugins,
    MorfeoWebpackPlugin({}),
  ],
};
```

### Vite

`vite.config.ts`

```typescript
import { defineConfig } from 'vite';
import { MorfeoVitePlugin } from '@morfeo/compiler';

export default defineConfig({
  plugins: [...yourOtherPlugins, MorfeoVitePlugin()],
});
```
