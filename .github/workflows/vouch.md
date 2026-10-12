# Vouch

The `vouch` reusable workflow is located at [`./.github/workflows/vouch.yml`](https://github.com/anolilab/workflows/tree/main/.github/workflows/vouch.yml).

It labels each pull request with how far its author is trusted, using [mitchellh/vouch](https://github.com/mitchellh/vouch):

| Label             | Author                                                         |
| ----------------- | -------------------------------------------------------------- |
| `vouch:trusted`   | a collaborator, a bot, or listed in the vouched file           |
| `vouch:unvouched` | anyone else                                                    |
| `vouch:denounced` | explicitly blocked in the vouched file (`-github:user reason`) |

It only labels. Nothing is closed or blocked, so a maintainer decides what the label means. The labels are created on first use.

## ⚠️ Security

The calling workflow must trigger on `pull_request_target`, so it can label pull requests from forks. Because `pull_request_target` runs with the base repository's write token, the caller **must not check out the pull request**. This workflow never checks out code.

## Inputs

### Required inputs

#### target-repo

Specify the target repository this workflow should run on. This prevents it from running on forks. For example, a `target-repo` of `anolilab/workflows` stops it running on forks of `anolilab/workflows`.

- This `input` is required. (`type: string`)

### Optional inputs

#### vouched-file

Path of the trust list in the calling repository. `(type: string, default: ".github/VOUCHED.td")`

The file is one entry per line, sorted: `github:username` to vouch, `-github:username reason` to denounce. Lines starting with `#` are comments. A change to the file is picked up on a pull request's next event.

## Usage

A called workflow cannot ask for more than its caller grants, and the default token is read-only, so the caller must grant the permissions below or the run fails on startup.

```yml
name: "PR Vouch"

on: # yamllint disable-line rule:truthy
    pull_request_target:
        types: ["opened", "reopened", "synchronize", "ready_for_review"]

concurrency:
    group: "${{ github.workflow }}-${{ github.event.pull_request.number }}"
    cancel-in-progress: true

permissions: {}

jobs:
    vouch:
        permissions:
            contents: "read"
            issues: "write"
            pull-requests: "write"
        uses: "anolilab/workflows/.github/workflows/vouch.yml@main"
        with:
            target-repo: "anolilab/workflows"
```
