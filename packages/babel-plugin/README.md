# @morfeo/babel-plugin

![Morfeo logo](https://morfeo.dev/img/morfeo.png)

**@morfeo/babel-plugin** is a babel plugin that enables the evaluation at build time of morfeo.

---

[Documentation](https://morfeo.dev) | [API](https://github.com/morfeojs/morfeo) | [Contributing](https://github.com/morfeojs/morfeo/blob/main/CONTRIBUTING.md) | [![Discord](https://badgen.net/badge/icon/discord?icon=discord&label)](https://discord.gg/5hbsKMBRBh)

---

## Installation

```bash
# With npm
npm install --save-dev @morfeo/babel-plugin

# With yarn
yarn add --dev @morfeo/babel-plugin
```

Once the plugin is installed you can add it the plugins in your babel configuration:

```json
{
  "presets": ["list", "of", "your", "presets"],
  "plugins": ["list", "of", "your", "other", "plugins", "@morfeo/babel-plugin"],
}
```

:warning: Warning

> You'll probably never use _directly_ `@morfeo/babel-plugin`, instead, you'll more likely to use [@morfeo/webpack](https://github.com/morfeojs/morfeo/tree/main/packages/webpack), that  uses this package internally.
