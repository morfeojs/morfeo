# Morfeo Browser Extension

![Morfeo logo](https://morfeo.dev/img/morfeo.png)

[morfeo](https://morfeo.dev) is a framework-agnostic set of tools that will help you to build your next **design system** based on a single source of truth: the **theme**.

---

[![Made with Morfeo](https://img.shields.io/badge/made%20with%20morfeo-0066ff?logo=data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB2aWV3Qm94PSIxOTAuMjIyIDE3OS4xMjkgNTAgNTAuMDA0IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAuMDA0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGQ9Ik0yNy41NzIsNDcuOTIxbDAsMGwxOC40NSwtMTguNDExYzAuMDQ3LC0wLjA1MSAwLjA5NywtMC4xMDEgMC4xNDgsLTAuMTQ4bDAsMGwwLDBjMC40NjMsLTAuNDI2IDEuMDgxLC0wLjY4NyAxLjc1OSwtMC42ODdjMS40MzQsMCAyLjU5OCwxLjE2NSAyLjU5OCwyLjU5OGwwLDE2LjEzMWMwLDEuNDM0IC0xLjE2NCwyLjU5OCAtMi41OTgsMi41OThsLTQ0LjgwNCwwYy0xLjQzNCwwIC0yLjU5OCwtMS4xNjQgLTIuNTk4LC0yLjU5OGwwLDBjMCwwIDAsLTE2LjEzMSAwLC0xNi4xMzFjMCwtMS40MzMgMS4xNjQsLTIuNTk4IDIuNTk4LC0yLjU5OGMwLjc1MSwwIDEuNDI5LDAuMzIgMS45MDMsMC44M2wwLDBsMTguNDUxLDE4LjQxNmMwLjM0MSwwLjM1NiAxLjIxNiwwLjk5NyAyLjA0NywwLjk5N2MwLjgzLDAgMS41MjMsLTAuNDkgMi4wNDYsLTAuOTk3WiIgc3R5bGU9ImZpbGw6IHJnYigyNTUsIDI1NSwgMjU1KTsiIHRyYW5zZm9ybT0ibWF0cml4KDEsIDAsIDAsIDEsIDE4OS42OTUxNzUsIDE3OS4xMzA1NTQpIi8+CiAgPHBhdGggZD0iTTQ3LjI0NCwwLjAwMmMwLjA1NCwtMC4wMDIgMC4xMDgsLTAuMDA0IDAuMTYyLC0wLjAwNGMwLjA1NCwwIDAuMTA4LDAuMDAyIDAuMTYxLDAuMDA0bDAuMDAxLDBjMS41OTksMC4wODUgMi44NzEsMS40MSAyLjg3MSwzLjAyOWMwLDAuOTE3IC0wLjQwOCwxLjczOSAtMS4wNTEsMi4yOTVsMCwwbC0yMS43OSwyMS43OWMtMC41NDIsMC41MDYgLTEuMjc2LDAuODE1IC0yLjA3NCwwLjgxNWMtMC45MDcsMCAtMS43MzEsLTAuNCAtMi4yODcsLTEuMDMxbC0yMS42NTksLTIxLjY3MWwwLDBjLTAuNTgxLC0wLjU1MiAtMC45NDQsLTEuMzMzIC0wLjk0NCwtMi4xOThjMCwtMS42NzQgMS4zNTksLTMuMDMzIDMuMDMzLC0zLjAzM2MwLjA1NSwwIDAuMTA5LDAuMDAyIDAuMTYyLDAuMDA0bDAsMGw0My40MTUsMFoiIHN0eWxlPSJmaWxsOiByZ2IoMjU1LCAyNTUsIDI1NSk7IiB0cmFuc2Zvcm09Im1hdHJpeCgxLCAwLCAwLCAxLCAxODkuNjk1MTc1LCAxNzkuMTMwNTU0KSIvPgo8L3N2Zz4=)](https://morfeo.dev)
[![codecov](https://codecov.io/gh/morfeojs/morfeo/branch/main/graph/badge.svg?token=CZBHY8J802)](https://codecov.io/gh/morfeojs/morfeo)
[![Codecov](https://github.com/morfeojs/morfeo/actions/workflows/codecov.yml/badge.svg)](https://github.com/morfeojs/morfeo/actions/workflows/codecov.yml)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![GitHub license](https://img.shields.io/github/license/morfeojs/morfeo)](https://github.com/morfeojs/morfeo/blob/main/LICENSE)
[![Contributing](https://img.shields.io/badge/PRs-welcome-brightgreen)](https://github.com/morfeojs/morfeo/blob/main/CONTRIBUTING.md)
[![Netlify Status](https://api.netlify.com/api/v1/badges/93b009d2-94be-4d40-baa3-9f86a51922ce/deploy-status)](https://app.netlify.com/sites/cocky-kare-d8d81e/deploys)
[![DeepScan grade](https://deepscan.io/api/teams/15451/projects/18608/branches/460695/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=15451&pid=18608&bid=460695)

---

## Preview

> Click the image to watch the video on youtube!

[![Morfeo Web Extension](https://img.youtube.com/vi/UNWGBnmoE9c/maxresdefault.jpg)](https://www.youtube.com/watch?v=UNWGBnmoE9c)

## Installation

From the root of the project (one folder above this one), run:

```console
yarn init:devtool
```

### ⚠️ Warning

If you run `yarn` directly in this folder you'll install the published version of the internal `@morfeo` packages,
this means that you'll not be able to see your changes in case you made updates in one o more packages.
By running `yarn init:devtool` instead, the internal `@morfeo` packages will be symlinked to reflect your changes.

## Local Development

```console
yarn start
# Or, from the root of this project (one folder above this one)
yarn start:devtool
```

This command starts a local development server, most changes are reflected live without having to restart the server.

If is the first time you're running the project you have to manually install the extension in your browser.

### Install the web extension

- Run `yarn start`, a new folder called `dev` will be created;
- Open the Extension Management page by navigating to `chrome://extensions` (This extension works for now only with Chrome or any other chromium-like browser, like Brave);
  - Alternatively, open this page by clicking on the Extensions menu button and selecting Manage Extensions at the bottom of the menu.
  - Alternatively, open this page by clicking on the Chrome menu, hovering over More Tools then select Extensions
- Click on `Load an unpacked extension`
- Select the `dev` folder

More info [here](https://developer.chrome.com/docs/extensions/mv3/getstarted/#unpacked).

## Build Theme

This extension uses Morfeo in 2 different ways, at run-time to show the theme of the website and at build-time, with compiled css
created thuogh the CLI.
If you update the theme (located at `src/_shared/styles`), be sure to also run:

```console
yarn build:theme
```

## Build

```console
yarn build
```
