# @morfeo/webpack

![Morfeo logo](https://morfeo.dev/img/morfeo.png)

**@morfeo/webpack** is a webpack plugin that enables the evaluation at build time of morfeo.

---

[Documentation](https://morfeo.dev) | [API](https://github.com/morfeojs/morfeo) | [Contributing](https://github.com/morfeojs/morfeo/blob/main/CONTRIBUTING.md) | [![Discord](https://badgen.net/badge/icon/discord?icon=discord&label)](https://discord.gg/5hbsKMBRBh)

---

## Installation

```bash
# With npm
npm install --save-dev @morfeo/webpack

# With yarn
yarn add --dev @morfeo/webpack
```

Once the plugin is installed you can add it the plugins in your webpack configuration:

### webpack.config.js

```javascript
const { MorfeoWebpackPlugin } = require('@morfeo/webpack');

module.exports = {
  ...yourWebpackConfiguration,
  plugins: [
    ...yourOtherPlugins,
    new MorfeoWebpackPlugin({}),
  ],
};
```
