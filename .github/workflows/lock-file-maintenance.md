# lock-file-maintenance

This action is used to maintain lock files in a repository. It will ensure that lock files are up-to-date with their corresponding manifest files.

# Inputs

The action has the following inputs:

### Required inputs

#### target-repo

Specify the target repository this action should run on. This is used to prevent actions from running on repositories other than the target repository. For example, specifying a `target-repo` of `anolilab/workflows` will prevent the action from running on forks of `anolilab/workflows`.

-   This `input` is required. (`type:string`)

### Optional inputs

#### node-version

This is used to ensure that the correct version of node.js is used when running the action.

-   This `input` is optional. (`type:string`, `default:18.x`)

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

permissions:
    contents: "read" # for checkout

jobs:
    stale-issues:
        uses: "anolilab/workflows/.github/workflows/lock-file-maintenance.yml@main"
        with:
            target-repo: "visulima/visulima"
```
