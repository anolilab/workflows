# PR Size

The `pr-size` reusable workflow is located at [`./.github/workflows/pr-size.yml`](https://github.com/anolilab/workflows/tree/main/.github/workflows/pr-size.yml).

It labels each pull request with its size, so a reviewer sees the weight before opening it. Lines are added plus deleted, from the pull request's file list:

| Label      | Changed lines |
| ---------- | ------------- |
| `size:XS`  | 0–9           |
| `size:S`   | 10–29         |
| `size:M`   | 30–99         |
| `size:L`   | 100–499       |
| `size:XL`  | 500–999       |
| `size:XXL` | 1,000+        |

Test files do not count (`__tests__/`, `test/`, `tests/`, `e2e/`, `*.test.*`, `*.spec.*`, `*.browser.*`, `*.integration.*`, `test_*.py`, `*_test.py`, `*_test.go`), unless the pull request changes nothing else. Paths matching `ignore-paths` do not count either. The labels are created on first use.

## ⚠️ Security

The calling workflow must trigger on `pull_request_target`, so it can label pull requests from forks. Because `pull_request_target` runs with the base repository's write token, the caller **must not check out the pull request**. This workflow reads the file list from the API and never checks out code.

## Inputs

### Required inputs

#### target-repo

Specify the target repository this workflow should run on. This prevents it from running on forks. For example, a `target-repo` of `anolilab/workflows` stops it running on forks of `anolilab/workflows`.

- This `input` is required. (`type: string`)

### Optional inputs

#### ignore-paths

Newline-separated regular expressions. A changed file whose path matches one of them does not count. Passing the input **replaces** the default, which ignores lockfiles and `dist/` and `coverage/` directories, so repeat those lines if you still want them. `(type: string)`

## Usage

A called workflow cannot ask for more than its caller grants, and the default token is read-only, so the caller must grant the permissions below or the run fails on startup.

```yml
name: "PR Size"

on: # yamllint disable-line rule:truthy
    pull_request_target:
        types: ["opened", "reopened", "synchronize", "ready_for_review"]

concurrency:
    group: "${{ github.workflow }}-${{ github.event.pull_request.number }}"
    cancel-in-progress: true

permissions: {}

jobs:
    pr-size:
        permissions:
            contents: "read"
            issues: "write"
            pull-requests: "write"
        uses: "anolilab/workflows/.github/workflows/pr-size.yml@main"
        with:
            target-repo: "anolilab/workflows"
            # Also skip generated code and translation catalogs.
            ignore-paths: |
                (^|/)(pnpm-lock\.yaml|package-lock\.json|yarn\.lock)$
                (^|/)(dist|coverage)/
                (^|/)_generated/
                \.po$
```
