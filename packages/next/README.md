# @morfeo/next

![Morfeo logo](https://morfeo.dev/img/morfeo.png)

**@morfeo/next** expose a function to easily integrate morfeo with [next.js](https://nextjs.org/).

---

[Documentation](https://morfeo.dev) | [API](https://github.com/morfeojs/morfeo) | [Contributing](https://github.com/morfeojs/morfeo/blob/main/CONTRIBUTING.md) | [![Discord](https://badgen.net/badge/icon/discord?icon=discord&label)](https://discord.gg/5hbsKMBRBh)

---

## Installation

```bash
# With npm
npm install @morfeo/next

# With yarn
yarn add @morfeo/next
```

Once the package is installed you can wrap your next configuration with the `withMorfeo` utility function,
this function will automatically inject all the needed configurations to run morfeo at build-time in your next.js application.

### next.config.js

```javascript
const { withMorfeo } = require("@morfeo/next");

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
}

module.exports = withMorfeo(nextConfig)
```
