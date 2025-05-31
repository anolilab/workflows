# lock-file-maintenance

This action is used to maintain lock files in a repository. It will ensure that lock files are up-to-date with their corresponding manifest files.

> For protected branches, the action will need to be able to commit and push to the repository.
>
> By creating a new [Personal Access Token (PAT)](https://github.com/settings/tokens/new), storing the token as a secret in your repository and then passing the new token to the Action step.

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
            node-version: "18.x"
```
