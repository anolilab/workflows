# set-default-labels

The `set-default-labels` reusable action is located at [`./workflow/set-default-labels.yml`](https://github.com/anolilab/workflows/tree/main/workflow/set-default-labels.yml).

This reusable action depends on the following actions:

-   [checkout](https://github.com/marketplace/actions/checkout)
-   [crazy-max/ghaction-github-labeler](https://github.com/crazy-max/ghaction-github-labeler)

## Inputs

The action has the following inputs:

### Required inputs

#### target-repo

Specify the target repository this action should run on. This is used to prevent actions from running on repositories other than the target repository. For example, specifying a `target-repo` of `anolilab/workflows` will prevent the action from running on forks of `anolilab/workflows`.

-   This `input` is required. (`type:string`)

### Optional inputs

#### skip-delete

This is an optional `boolean` input that is `false` by default. If set to `true`, the action will not delete labels not found in the YAML file.

#### yaml-file

Path to YAML file containing labels definitions. `(default .github/labels.yml)`

#### dry-run

This is an optional `boolean` input that is `"${{ github.event_name == 'pull_request' }}"` by default. If set to `true`, changes will not be applied.

## Usage

In the repository that will call this action, you will need to create the following file: `.github/labels.yaml`. The content of the file can be something like the following:

```yaml
- name: "help wanted"
  description: "Extra attention is needed"
  color: "008672"

- name: "breaking change"
  description: "Cannot be merged when next version is not a major release"
  color: "B05D08"
```

You can find more details about the above on the [ghaction-github-labeler](https://github.com/crazy-max/ghaction-github-labeler). The next item you need to create in the repository that will call this action, is a workflow file. You can name the file `workflows/set-default-labels.yml` and add the following content:

### With defaults

```yml
name: "set-default-labels"
on: # yamllint disable-line rule:truthy
    "workflow_dispatch": # yamllint disable-line rule:empty-values

jobs:
    set-default-labels:
        uses: "anolilab/workflows/.github/workflows/set-default-labels.yml@main"
        with:
            target-repo: "anolilab/workflows"
```

### Overriding some defaults

```yml
name: "set-default-labels"
on: # yamllint disable-line rule:truthy
    "workflow_dispatch": # yamllint disable-line rule:empty-values

jobs:
    set-default-labels:
        uses: "anolilab/workflows/.github/workflows/set-default-labels.yml@main"
        with:
            target-repo: "anolilab/workflows"
            skip-delete: false
```

Because of the nature of this action, it must be run manually. You can learn more about [manually running actions on GitHub](https://docs.github.com/en/actions/managing-workflow-runs/manually-running-a-workflow).
