# @morfeo/cli

![Morfeo logo](https://morfeo.dev/img/morfeo.png)

a command line interface to use morfeo

---

[Documentation](https://morfeo.dev) | [API](https://github.com/VLK-STUDIO/morfeo) | [Contributing](https://github.com/VLK-STUDIO/morfeo/blob/main/CONTRIBUTING.md) | [Slack](https://morfeo.slack.com)

<!-- toc -->
* [@morfeo/cli](#morfeocli)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g @morfeo/cli
$ morfeo COMMAND
running command...
$ morfeo (-v|--version|version)
@morfeo/cli/0.2.0 darwin-x64 node-v14.16.0
$ morfeo --help [COMMAND]
USAGE
  $ morfeo COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`morfeo build`](#morfeo-build)
* [`morfeo help [COMMAND]`](#morfeo-help-command)

## `morfeo build`

build css styles based on your themes

```
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

## `morfeo help [COMMAND]`

display help for morfeo

```
USAGE
  $ morfeo help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_
<!-- commandsstop -->
