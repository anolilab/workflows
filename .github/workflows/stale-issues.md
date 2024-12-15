# stale-issues

The `set-default-labels` reusable action is located at [`./workflow/stale-issues.yml`](https://github.com/anolilab/workflows/tree/main/workflow/stale-issues.yml).

This reusable action depends on the following actions:

- [stale](https://github.com/marketplace/actions/close-stale-issues)

## Inputs

### Required inputs

#### target-repo

Specify the target repository this action should run on. This is used to prevent actions from running on repositories other than the target repository. For example, specifying a `target-repo` of `mdn/workflows` will prevent the action from running on forks of `mdn/workflows`.

- This `input` is required.

## Usage

In the repository that will call this action, you will need to add a `.github/workflows/stale-issues.yml` file with the following content:

### With defaults

```yml
name: "Label Idle Issues"

on: # yamllint disable-line rule:truthy
    schedule:
        - cron: "0 0 * * *"

jobs:
    stale-issues:
        uses: anolilab/workflows/.github/workflows/stale-issues.yml@main
        with:
            target-repo: "anolilab/workflows"
```
