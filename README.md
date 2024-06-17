# Shared GitHub Actions

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

### Repository Settings

Configure GitHub Actions permissions: Go to repo Settings > Actions > General and make sure to
configure the following:

- `Actions permissions` should be set to `Allow all actions and reusable workflows`
- `Workflow permissions` should be set to `Read and write permissions`, and make sure the
  `Allow GitHub Actions to create and approve pull requests` option is active.

## Available steps and workflows

### Steps

- [Node Setup Environment and Resources](./steps/node-setup-environment-and-resources.yml) - sets up the Node.js environment with pnpm, pnpm cache, nx (optional), nx cache (optional) and allocates resources
- [Codecov](./steps/codecov.yml) - uploads coverage reports to Codecov

### Workflows

- [allo-allo](./.github/workflows/allo-allo.yml) ([docs](./.github/workflows/allo-allo.md)) - a welcome bot for new contributors
- [cleanup-branch-cache](./.github/workflows/cleanup-branch-cache.yml) ([docs](./.github/workflows/cleanup-branch-cache.md)) - automatically cleans all cache key if a branch is closed.
- [lock-closed](./.github/workflows/lock-closed.yml) ([docs](./.github/workflows/lock-closed.md)) - locks issues and PRs that have been closed for more than a year
- [lock-file-maintenance](./.github/workflows/lock-file-maintenance.yml) ([docs](./.github/workflows/lock-file-maintenance.md)) - This action will check if the pull request title follows the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.
- [semantic-pull-request](./.github/workflows/semantic-pull-request.yml) ([docs](./.github/workflows/semantic-pull-request.md)) - validates if the PR title has a defined semantic title
- [set-default-labels](./.github/workflows/set-default-labels.yml) ([docs](./.github/workflows/set-default-labels.md)) - sets default labels on issues and PRs
- [stale-issues](./.github/workflows/stale-issues.yml) ([docs](./.github/workflows/stale-issues.md)) - closes stale issues

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
