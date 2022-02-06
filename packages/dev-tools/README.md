# @morfeo/dev-tools

![Morfeo logo](https://morfeo.dev/img/morfeo.png)

**@morfeo/dev-tools** is part of the [@morfeo](https://morfeo.dev) eco-system, a set of **framework-agnostic** tools that help you to create beautiful design systems for your web and mobile apps.

---

[Documentation](https://morfeo.dev) | [API](https://github.com/VLK-STUDIO/morfeo) | [Contributing](https://github.com/VLK-STUDIO/morfeo/blob/main/CONTRIBUTING.md) | [Discord](https://discord.com/channels/939456827152805919/939456827152805922)

---

One of the most important feature of morfeo is the [web extension](https://chrome.google.com/webstore/detail/morfeo/phhhjdmeicikchjnpepljcdgbmipipcl),
with the web extension you will always be able to see your theme and play with it.

![dev tool](https://morfeo.dev/img/devtool/hero.jpeg)

## Installation

You can install it by going to chrome webstore and add it to your plugins:
[Install morfeo dev tool](https://chrome.google.com/webstore/detail/morfeo/phhhjdmeicikchjnpepljcdgbmipipcl)

## Usage

Once you have done the installation, open the chrome devtool by inspecting the page or simply typing:
`alt + cmd + j`, you'll see a new tab called `Ⓜ️ Morfeo`:

![dev tool](https://morfeo.dev/img/devtool/tabs.png)

Try it right now to see a sample theme provided by us!

## Enable Dev Tool in your application

Enable dev tool in your application it's pretty easy, just install `@morfeo/dev-tools`:

```bash
# npm
npm i @morfeo/dev-tools
# yarn
yarn add @morfeo/dev-tools
```

the in your app, before setting the theme, just add:

```typescript
import { enableMorfeoDevTool } from '@morfeo/dev-tools';
import { morfeo } from './myTheme';

enableMorfeoDevTool();

morfeo.setTheme('default', myTheme);
```

> In a future release the dev tool will probably be always enabled by default

## Contribute

We want to improve the dev tool as much as possible and add functionalities like:

- change the application theme from the theme
- increase the supported theme slices
- a UI to easily generate the style based on the theme
- theme storage to apply theme presets to your application

If you want to help us, check our [GitHub](https://github.com/VLK-STUDIO/morfeo)!

If you want a particular funcionality or you found a bug, open an issue [here](https://github.com/VLK-STUDIO/morfeo/issues)
