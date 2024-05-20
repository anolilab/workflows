# cleanup-branch-cache

The `cleanup-branch-cache` reusable action is located at [`./workflow/cleanup-branch-cache.yml`](https://github.com/anolilab/workflows/tree/main/workflow/cleanup-branch-cache.yml).

The `cleanup-branch-cache` GitHub Action automatically cleans all cache key if a branch is closed.

This reusable action depends on the following actions:

-   [checkout](https://github.com/marketplace/actions/checkout)

## Inputs

The action has the following inputs:

### Required inputs

#### target-repo

Specify the target repository this action should run on. This is used to prevent actions from running on repositories other than the target repository. For example, specifying a `target-repo` of `anolilab/workflows` will prevent the action from running on forks of `anolilab/workflows`.

-   This `input` is required. (`type:string`)

# Usage

```yaml
name: "Cleanup caches by a branch"

on: # yamllint disable-line rule:truthy
    pull_request:
        types:
            - "closed"
    workflow_dispatch: # yamllint disable-line rule:empty-values

jobs:
    cleanup-branch-cache:
        uses: "anolilab/workflows/workflow/cleanup-branch-cache.yml@main"
        with:
            target-repo: "anolilab/workflows"
```
