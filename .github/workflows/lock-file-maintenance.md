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
        name: "Lock File Maintenance"
        if: "github.repository == visulima/visulima"
        runs-on: "ubuntu-latest"
        permissions:
            contents: "write"

        steps:
            - name: "Harden Runner"
              uses: "step-security/harden-runner@17d0e2bd7d51742c71671bd19fa12bdc9d40a3d6" # v2.8.1
              with:
                  egress-policy: "audit"

            - name: "Git checkout"
              uses: "actions/checkout@692973e3d937129bcbf40652eb9f2f61becf3332" # v4.1.7
              with:
                  token: "${{ secrets.LOCK_MAINTENANCE_GITHUB_TOKEN }}"
              env:
                  GIT_COMMITTER_NAME: "GitHub Actions Shell"
                  GIT_AUTHOR_NAME: "GitHub Actions Shell"
                  EMAIL: "github-actions[bot]@users.noreply.github.com"

            - name: "Setup resources and environment"
              id: "setup"
              uses: "anolilab/workflows/step/setup@main"
              with:
                  node-version: "23.x"
                  cache-prefix: "lock-file"
                  install-packages: "false"

            - name: "Update lock file"
              if: "success()"
              run: "pnpm install --lockfile-only"

            - name: "Commit lock file"
              if: "success()"
              uses: "stefanzweifel/git-auto-commit-action@8621497c8c39c72f3e2a999a26b4ca1b5058a842" # v5.0.1
              with:
                  file_pattern: "pnpm-lock.yaml"
                  commit_message: "chore: updated lock file [ci skip]"
                  commit_user_name: "github-actions-shell"
                  commit_user_email: "github-actions[bot]@users.noreply.github.com"
                  commit_author: "github-actions-shell <github-actions[bot]@users.noreply.github.com>"
```
