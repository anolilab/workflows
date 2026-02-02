# lock-file-maintenance

This action is used to maintain lock files in a repository. It will ensure that lock files are up-to-date with their corresponding manifest files.

Features:
- Updates the lock file (`pnpm install --lockfile-only && pnpm dedupe`)
- Optionally runs `pnpm audit --fix` to automatically fix vulnerabilities

> For protected branches, the action will need to be able to commit and push to the repository.
>
> By creating a new [Personal Access Token (PAT)](https://github.com/settings/tokens/new), storing the token as a secret in your repository and then passing the new token to the Action step.

## Inputs

| Input | Required | Default | Description |
|-------|----------|---------|-------------|
| `target-repo` | Yes | - | The repo to run this action on. This is to prevent actions from running on forks unless intended. |
| `node-version` | Yes | - | The node version to use for the job. |
| `run-audit-fix` | No | `false` | Run `pnpm audit --fix` to automatically fix vulnerabilities. |

## Usage

In the repository that will call this action, you will need to create a workflow file. You can name the file `workflows/lock-file-maintenance.yml` and add the following content:

```yml
name: "Lock File Maintenance"

on: # yamllint disable-line rule:truthy
    schedule:
        - cron: "0 */3 * * *" # At minute 0 past every 3rd hour.
    pull_request:
        branches:
            - "dependabot/**"
    workflow_dispatch: # yamllint disable-line rule:empty-values

permissions:
    contents: "read" # for checkout

jobs:
    lock-file:
        uses: "anolilab/workflows/.github/workflows/pnpm-lock-file-maintenance.yml@main"
        with:
            target-repo: "anolilab/workflows"
            node-version: "22.x"
        secrets: "inherit"
```

### With audit fix enabled

```yml
name: "Lock File Maintenance"

on: # yamllint disable-line rule:truthy
    schedule:
        - cron: "0 */3 * * *" # At minute 0 past every 3rd hour.
    pull_request:
        branches:
            - "dependabot/**"
    workflow_dispatch: # yamllint disable-line rule:empty-values

permissions:
    contents: "read" # for checkout

jobs:
    lock-file:
        uses: "anolilab/workflows/.github/workflows/pnpm-lock-file-maintenance.yml@main"
        with:
            target-repo: "anolilab/workflows"
            node-version: "22.x"
            run-audit-fix: true
        secrets: "inherit"
```
