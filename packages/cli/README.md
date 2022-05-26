# @morfeo/cli

![Morfeo logo](https://morfeo.dev/img/morfeo.png)

a command line interface to use morfeo, more details can be found [here](https://morfeo.dev/docs/Features/morfeo-cli)

---

[Documentation](https://morfeo.dev) | [API](https://github.com/morfeojs/morfeo) | [Contributing](https://github.com/morfeojs/morfeo/blob/main/CONTRIBUTING.md) | [![Discord](https://badgen.net/badge/icon/discord?icon=discord&label)](https://discord.gg/5hbsKMBRBh)

## Usage

```console
$ npm install -g @morfeo/cli
$ morfeo COMMAND
running command...
$ morfeo (-v|--version|version)
@morfeo/cli/0.5.1 darwin-x64 node-v16.14.0
$ morfeo --help [COMMAND]
USAGE
  $ morfeo COMMAND
...
```
## Commands

* [`morfeo build`](#morfeo-build)
* [`morfeo compose`](#morfeo-compose)
* [`morfeo help [COMMAND]`](#morfeo-help-command)

## `morfeo build`

build css styles based on your themes

```console
USAGE
  $ morfeo build

OPTIONS
  -b, --build=build    the path where the generated css files will be placed
  -c, --config=config  [default: .morfeorc] the path to the configuration file
  -h, --help           build css styles based on your themes
  -n, --name=name      [default: default] an identifier for the passed theme, for example "light", "dark"

EXAMPLES
  $ morfeo build
  $ morfeo build --config="configurations/.morfeorc"
  $ morfeo build path/to/theme.ts --name="light"
```

_See docs: [morfeo build](https://morfeo.dev/docs/Features/CLI/morfeo-cli-build)_

## `morfeo compose`

compose morfeo style files into themes

```console
USAGE
  $ morfeo compose

OPTIONS
  -c, --config=config  [default: .morfeorc] the path to the configuration file
  -h, --help           compose morfeo style files into themes
  -w, --watch          watch file changes

EXAMPLES
  $ morfeo compose
  $ morfeo compose --watch
```

_See docs: [morfeo compose](https://morfeo.dev/docs/Features/CLI/morfeo-cli-compose)_

## `morfeo help [COMMAND]`

display help for morfeo

```console
USAGE
  $ morfeo help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

## Configuration

Global configuration could be specified in a file called by default `.morfeorc.(js|json|ts)`, this file should export an object
that follow this structure:

````typescript
type MorfeoConfig = {
  /**
   * the path where the generated css files will be placed
   */
  buildPath?: string;
  /**
   * An object where the key is the theme name and the value is the path to the theme.
   * @example
   * ```json
   * {
   *  "dark": "path/to/darkTheme",
   *  "light": "path/to/lightTheme",
   * }
   * ```
   */
  themes: Record<string, string>;
};
````

for example these formats are all valid configurations:

```typescript
// .morfeorc.ts
export default {
  buildPath: './src/styles',
  themes: {
    light: './src/themes/lightTheme.ts',
    dark: './src/themes/darkTheme.ts',
  },
};
```

```javascript
// .morfeorc.js
module.exports = {
  buildPath: './src/styles',
  themes: {
    light: './src/themes/lightTheme.ts',
    dark: './src/themes/darkTheme.ts',
  },
};
```

```json
// .morfeorc.json
{
  "buildPath": "./src/styles",
  "themes": {
    "light": "./src/themes/lightTheme.ts",
    "dark": "./src/themes/darkTheme.ts",
  },
};
```

> with the flag -c or --config you can specify a different path for the configuration, for example:
> `morfeo build --config=src/configs/morfeo.config.ts`
