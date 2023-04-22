# Contributing to morfeo

We love your input! We want to make contributing to this project as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## We Develop with Github

We use github to host code, to track issues and feature requests, as well as accept pull requests.

## We Use [Github Flow](https://guides.github.com/introduction/flow/index.html), So All Code Changes Happen Through Pull Requests

Pull requests are the best way to propose changes to the codebase (we use [Github Flow](https://guides.github.com/introduction/flow/index.html)). We actively welcome your pull requests:

1. Fork the repo and create your branch from `main`.
2. If you've added code that should be tested, add tests.
3. Ensure the test suite passes.
4. Make sure your code lints.
5. Issue that pull request!

## Any contributions you make will be under the MIT Software License

In short, when you submit code changes, your submissions are understood to be under the same [MIT License](http://choosealicense.com/licenses/mit/) that covers the project. Feel free to contact the maintainers if that's a concern.

## Report bugs using Github's [issues](https://github.com/morfeojs/morfeo/issues)

We use GitHub issues to track public bugs. Report a bug by [opening a new issue](https://github.com/morfeojs/morfeo/issues/new/choose); it's that easy!

## Write bug reports with detail, background, and sample code

**Great Bug Reports** tend to have:

- A quick summary and/or background
- Steps to reproduce
  - Be specific!
  - Give sample code if you can.
- What you expected would happen
- What actually happens
- Notes (possibly including why you think this might be happening, or stuff you tried that didn't work)

People _love_ thorough bug reports. I'm not even kidding.

## Use a Consistent Coding Style

- You can try running `pnpm prettify` for style unification

## License

By contributing, you agree that your contributions will be licensed under its MIT License.

## Getting started with the project

The following instructions will help you bootstrap the project and start to contribute to Morfeo, thank you for your help!
If there are any problems, feel free to contact the maintainers.

If you're looking to contribute to the Morfeo libraries, you're in the right place, if instead, you're looking to contribute to the documentation website or the browser extension, you'll find more specific GUIDELINES inside the folders [docs](./docs/README.md) and [web-extension](./web-extension/README.md).

Other then unit/integration tests, you can use the projects under the folder `examples` to test your changes.
Feel free to update them or use them as a **sandbox**, but remember to build the packages if yuo want to see the changes you've made!

### Install the dependencies

By running the script `pnpm reset` all the dependencies will be installed, packages dependencies included, the script will also trigger the builds of the packages.

### Build the packages

```bash
pnpm build:packages
```

### Run the tests

To run the tests run the script `pnpm test`.
If you also want to generate the coverage, you can run `pnpm test:coverage`.
In case you're working on something and you'd like to watch for file changes, `pnpm test:watch` is available.
To test a specific package you can pass to any of the previous scripts the path of the package, for example:

```bash
pnpm test:watch packages/core
```

## References

This document was adapted from [this gist](https://gist.github.com/briandk/3d2e8b3ec8daf5a27a62).
Special thanks to [briandk](https://github.com/briandk).
