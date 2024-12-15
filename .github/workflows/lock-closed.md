# lock-closed

The `lock-closed` workflow is located at [./workflow/lock-closed.yml`](https://github.com/anolilab/workflows/tree/main/workflow/lock-closed.yml).

The `lock-closed` GitHub Action automatically locks issues and PRs that have been closed for more than a year.
It is intended to reduce "necrobumping" (the addition of comments, including spam, to old/closed issues).

This reusable action depends on the following actions:

- [dessant/lock-threads@v5](https://github.com/dessant/lock-threads)

## Inputs

The action has the following inputs:

### Required inputs

#### target-repo

Specify the target repository this action should run on. This is used to prevent actions from running on repositories other than the target repository. For example, specifying a `target-repo` of `anolilab/workflows` will prevent the action from running on forks of `anolilab/workflows`.

- This `input` is required.

### Optional inputs

#### issue-inactive-days

The number of days before an issue is considered inactive.

- This `input` is optional with a default of 30

#### issue-comment

Comment to post before locking an issue.

- This `input` is optional with a default of
    > This issue has been automatically locked since there has not been any recent activity after it was closed. Please open a new issue for related bugs.
    >
    > Please note this issue tracker is not a help forum. We recommend using our GitHub Discussions tab for questions.

#### pr-inactive-days

Number of days of inactivity before a closed pull request is locked.

- This `input` is optional with a default of 30

#### pr-comment

Comment to post before locking a pull request.

- This `input` is optional with a default of
    > This issue has been automatically locked since there has not been any recent activity after it was closed. Please open a new issue for related bugs.
    >
    > Please note this issue tracker is not a help forum. We recommend using our GitHub Discussions tab for questions.

#### exclude-any-issue-labels

Do not lock issues with any of these labels, value must be a comma separated list of labels or ''

- This `input` is optional with a default of `p: 2-high,p: 3-urgent,do NOT merge yet,good first issue`

#### add-issue-labels

Labels to add before locking an issue, value must be a comma separated list of labels or ''

- This `input` is optional with a default of `bot: closed`

## Usage

In the repository that will call this action, you will need to add a /workflow/lock-closed.yml` file with the following content:

### With defaults

```yml
name: "Lock inactive issues and pull requests"

on: # yamllint disable-line rule:truthy
    schedule:
        - cron: "0 * * * *"
    workflow_dispatch: # yamllint disable-line rule:empty-values

jobs:
    lock-closed:
        uses: "anolilab/workflows/.github/workflows/lock-closed.yml@main"
        with:
            target-repo: "anolilab/workflows"
```

### Overriding default inactive days

```yml
name: "Lock inactive issues and pull requests"

on: # yamllint disable-line rule:truthy
    schedule:
        - cron: "0 * * * *"
    workflow_dispatch: # yamllint disable-line rule:empty-values

jobs:
    lock-closed:
        uses: "anolilab/workflows/.github/workflows/lock-closed.yml@main"
        with:
            issue-inactive-days: 42
            target-repo: "anolilab/workflows"
```
