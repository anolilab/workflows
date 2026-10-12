# CLA

The `cla` reusable workflow is located at [`./.github/workflows/cla.yml`](https://github.com/anolilab/workflows/tree/main/.github/workflows/cla.yml).

It fails a pull request whose description does not contain the Contributor License Agreement confirmation, and posts a sticky comment with the exact sentence to add. The comment is removed once the pull request passes.

Skipped for:

- bots (Renovate, Dependabot),
- collaborators with `write`, `maintain` or `admin` access,
- merge queue runs, which have no pull request to read. A skipped required check counts as passed.

This reusable workflow depends on:

- [actions/github-script](https://github.com/actions/github-script)
- [marocchino/sticky-pull-request-comment](https://github.com/marocchino/sticky-pull-request-comment)

## ⚠️ Security

The calling workflow must trigger on `pull_request_target`, so the comment can be posted on pull requests from forks. Because `pull_request_target` runs with the base repository's write token, the caller **must not check out the pull request**. This workflow never checks out code and only reads the event payload.

## Inputs

### Required inputs

#### target-repo

Specify the target repository this workflow should run on. This prevents it from running on forks. For example, a `target-repo` of `anolilab/workflows` stops it running on forks of `anolilab/workflows`.

- This `input` is required. (`type: string`)

### Optional inputs

#### cla-text

The sentence a pull request description must contain. Put the same sentence in the repository's pull request template. `(type: string)`

The default is: _By submitting this pull request, I confirm that my contribution is made under the terms of the project's license and that you can use, modify, copy, and redistribute this contribution under those terms._

## Usage

A called workflow cannot ask for more than its caller grants, and the default token is read-only, so the caller must grant the permissions below or the run fails on startup.

```yml
name: "CLA"

on: # yamllint disable-line rule:truthy
    pull_request_target:
        types: ["opened", "reopened", "synchronize", "edited"]
    # Needed to require the check in a merge queue; the workflow skips it there.
    merge_group: # yamllint disable-line rule:empty-values

concurrency:
    group: "${{ github.workflow }}-${{ github.event.pull_request.number || github.ref }}"
    cancel-in-progress: true

permissions: {}

jobs:
    cla:
        permissions:
            contents: "read"
            pull-requests: "write"
        uses: "anolilab/workflows/.github/workflows/cla.yml@main"
        with:
            target-repo: "anolilab/workflows"
```

### Requiring the check

Add the check to the branch ruleset's required status checks. A check from a reusable workflow is named `<caller job id> / <called job name>`, so with the caller above it is `cla / CLA`. Open one pull request first and copy the name from its checks list, because a required check that never reports blocks every pull request.
