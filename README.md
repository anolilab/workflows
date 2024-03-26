# Shared Github Actions

This repository serves as a collection of reusable GitHub Action workflows specifically designed for usage in Node and Monorepo projects.
The workflows stored here encapsulate common and repetitive tasks, allowing them to be easily integrated into multiple projects.
This not only reduces the necessity to rewrite code, but also ensures a standardized approach to common operations across all repositories.

## Good To Know

- [Usage Limits](https://docs.github.com/en/actions/reference/usage-limits-billing-and-administration)
- [Workflow syntax for GitHub Actions](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions)
- [Authentication in a workflow](https://docs.github.com/en/actions/reference/authentication-in-a-workflow)
- [Creating a personal access token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token)


## Getting Started

To use these workflows, simply reference them from your project's workflows. Instructions for each workflow are detailed below.

Read more about [reusing workflows](https://docs.github.com/en/actions/using-workflows/reusing-workflows).

## Available steps and workflows

### Steps

- [Node Setup Environment and Resources](./steps/node-setup-environment-and-resources.yml) - sets up the Node.js environment with pnpm, pnpm cache, nx (optional), nx cache (optional) and allocates resources
- [Codecov](./steps/codecov.yml) - uploads coverage reports to Codecov

### Workflows

- [allo-allo](./workflow/allo-allo.yml) ([docs](./workflow/allo-allo.md)) - a welcome bot for new contributors
- [lock-closed](./workflow/lock-closed.yml) ([docs](./workflow/lock-closed.md)) - locks issues and PRs that have been closed for more than a year
- [stale-issues](./workflow/stale-issues.yml) ([docs](./workflow/stale-issues.md)) - closes stale issues
- [set-default-labels](./workflow/set-default-labels.yml) ([docs](./workflow/set-default-labels.md)) - sets default labels on issues and PRs

## Contributing

If you would like to help take a look at the [list of issues](https://github.com/anolilab/gh-actions/issues) and check our [Contributing](.github/CONTRIBUTING.md) guidelines.

> **Note:** please note that this project is released with a Contributor Code of Conduct. By participating in this project you agree to abide by its terms.

### Good First Issues

We have a list of [good first issues](https://github.com/visulima/visulima/labels/good%20first%20issue) that contain bugs that have a relatively limited scope. This is a great place to get started, gain experience, and get familiar with our contribution process.

## Credits

-   [Daniel Bannert](https://github.com/prisis)
-   [All Contributors](https://github.com/visulima/visulima/graphs/contributors)

## License

The anolilab workflows is open-sourced software licensed under the [MIT][license-url]

[license-url]: LICENSE.md "license"
