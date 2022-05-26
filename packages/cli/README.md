# @morfeo/cli

![Morfeo logo](https://morfeo.dev/img/morfeo.png)

A **C**ommand **L**ine **I**nterface to use morfeo, more details can be found [here](https://morfeo.dev/docs/Features/morfeo-cli)

---

[Documentation](https://morfeo.dev) | [API](https://github.com/morfeojs/morfeo) | [Contributing](https://github.com/morfeojs/morfeo/blob/main/CONTRIBUTING.md) | [![Discord](https://badgen.net/badge/icon/discord?icon=discord&label)](https://discord.gg/5hbsKMBRBh)

---

## Usage

```console
morfeo <command>

Commands:
  morfeo build [name] [options]    build css styles based on your themes
  morfeo compose [name] [options]  compose morfeo style files into themes

Options:
  --version  Show version number                                       [boolean]
  --help     Show help                                                 [boolean]
```

## Commands

* [`morfeo build`](#morfeo-build)
* [`morfeo compose`](#morfeo-compose)
* [`morfeo help [COMMAND]`](#morfeo-help-command)

## `morfeo build`

build css styles based on your themes

```console
morfeo build [options]

build css styles based on your themes

Options:
      --version  Show version number                                   [boolean]
      --help     Show help                                             [boolean]
  -t, --theme                                                           [string]
  -n, --name     an identifier for the passed theme, for example "light", "dark"
                                                   [string] [default: "default"]
  -b, --build    the path where the generated css files will be placed  [string]
  -c, --config   the path to the configuration file
                                                 [string] [default: ".morfeorc"]

Examples:
  simple              morfeo build
  with custom config  morfeo build --config="configurations/.morfeorc"
  custom options      morfeo build --theme="path/to/theme.ts" --name="light"
```

_See docs: [morfeo build](https://morfeo.dev/docs/Features/CLI/morfeo-cli-build)_

## `morfeo compose`

compose morfeo style files into themes

```console
morfeo compose [options]

compose morfeo style files into themes

Options:
      --version  Show version number                                   [boolean]
      --help     Show help                                             [boolean]
  -w, --watch    watch file changes                   [boolean] [default: false]
  -c, --config   the path to the configuration file
                                                 [string] [default: ".morfeorc"]

Examples:
  simple  morfeo compose
  watch   morfeo compose --watch
```

_See docs: [morfeo compose](https://morfeo.dev/docs/Features/CLI/morfeo-cli-compose)_

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
