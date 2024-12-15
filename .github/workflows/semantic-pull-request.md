# semantic-pull-request

This action will check if the pull request title follows the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification. If the title does not follow the specification, the action will fail and the pull request will not be merged.

This reusable action depends on the following actions:

- [checkout](https://github.com/marketplace/actions/checkout)
- [amannn/action-semantic-pull-request](https://github.com/amannn/action-semantic-pull-request)
- [marocchino/sticky-pull-request-comment](https://github.com/marocchino/sticky-pull-request-comment)

# Inputs

The action has the following inputs:

### Required inputs

#### target-repo

Specify the target repository this action should run on. This is used to prevent actions from running on repositories other than the target repository. For example, specifying a `target-repo` of `anolilab/workflows` will prevent the action from running on forks of `anolilab/workflows`.

- This `input` is required. (`type:string`)

## Usage

In the repository that will call this action, you will need to create a workflow file. You can name the file `workflows/semantic-pull-request.yml` and add the following content:

```yml
name: "Semantic Pull Request"

on: # yamllint disable-line rule:truthy
    pull_request_target:
        types:
            - "opened"
            - "reopened"
            - "edited"
            - "synchronize"
    merge_group: # yamllint disable-line rule:empty-values

jobs:
    stale-issues:
        uses: "anolilab/workflows/.github/workflows/semantic-pull-request.yml@main"
        with:
            target-repo: "visulima/visulima"
```
