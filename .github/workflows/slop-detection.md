# slop-detection

The `slop-detection` reusable workflow is located at [`./.github/workflows/slop-detection.yml`](https://github.com/anolilab/workflows/tree/main/.github/workflows/slop-detection.yml).

It detects spam / low-quality ("slop") issues and pull requests using two complementary actions:

- [MatteoGabriele/agentscan-action](https://github.com/MatteoGabriele/agentscan-action) — broadly inspects the author's past behavior and labels / closes suspicious accounts.
- [peakoss/anti-slop](https://github.com/peakoss/anti-slop) — specifically inspects the current pull request and closes it when it trips multiple low-quality signals.

This reusable workflow also depends on:

- [actions/cache](https://github.com/marketplace/actions/cache) (caches the AgentScan analysis per author)
- [step-security/harden-runner](https://github.com/step-security/harden-runner)

## ⚠️ Security

The AgentScan job needs write access to label / close issues and PRs opened **from forks**, so the calling workflow must trigger on `pull_request_target`.

Because `pull_request_target` runs with the base repository's secrets and write token, the calling workflow **must not check out the pull request**. This reusable workflow never checks out any code, so no fork-controlled ref is ever executed — keep it that way in your caller.

## Inputs

### Required inputs

#### target-repo

Specify the target repository this workflow should run on. This is used to prevent the workflow from running on forks. For example, specifying a `target-repo` of `anolilab/workflows` will prevent it from running on forks of `anolilab/workflows`.

- This `input` is required. (`type: string`)

### Optional inputs

#### run-agentscan

Run the AgentScan job (author-behavior analysis). `(type: boolean, default: true)`

#### run-anti-slop

Run the Anti Slop job (per-PR analysis). The job only runs on `pull_request_target` events regardless of this flag. `(type: boolean, default: true)`

#### auto-close

AgentScan: automatically close issues / PRs that match a close classification. `(type: boolean, default: true)`

#### auto-close-classifications

AgentScan: comma-separated classifications that trigger an auto-close. `(type: string, default: "automation")`

#### skip-comment-on-organic

AgentScan: do not comment when the author looks organic. `(type: boolean, default: true)`

#### label-automation

AgentScan: label applied to accounts classified as automation. `(type: string, default: "spam:automated-account")`

#### label-community-flagged

AgentScan: label applied to community-flagged accounts. `(type: string, default: "spam:community-flagged")`

#### label-mixed

AgentScan: label applied to accounts with mixed signals. `(type: string, default: "spam:mixed-signals")`

#### close-pr

Anti Slop: close the pull request when it exceeds the failure threshold. `(type: boolean, default: true)`

#### lock-pr

Anti Slop: lock the pull request after closing it. `(type: boolean, default: false)`

#### exempt-label

Anti Slop: pull requests carrying this label are skipped. `(type: string, default: "spam:exempt")`

#### failure-add-pr-labels

Anti Slop: comma-separated labels added when the failure threshold is exceeded. `(type: string, default: "spam:likely-slop")`

#### max-failures

Anti Slop: number of low-quality signals required before the PR is treated as slop. `(type: number, default: 4)`

#### failure-pr-message

Anti Slop: comment posted on a pull request that is closed as slop. `(type: string)`

## Usage

Before enabling this workflow, create the labels it applies in the target repository (e.g. `spam:automated-account`, `spam:community-flagged`, `spam:mixed-signals`, `spam:likely-slop`, `spam:exempt`). You can manage them with the [`set-default-labels`](./set-default-labels.md) workflow.

Create a workflow file in the calling repository, e.g. `.github/workflows/slop-detection.yml`:

### With defaults

```yml
name: "Slop Detection"

on: # yamllint disable-line rule:truthy
    # pull_request_target is required so the workflow can label / close PRs from forks.
    # DO NOT check out the repository in this workflow.
    pull_request_target:
        types: ["opened", "reopened"]
    issues:
        types: ["opened"]

permissions: {}

jobs:
    slop-detection:
        uses: "anolilab/workflows/.github/workflows/slop-detection.yml@main"
        permissions:
            contents: "read"
            issues: "write"
            pull-requests: "write"
        with:
            target-repo: "anolilab/workflows"
```

### Overriding some defaults

```yml
name: "Slop Detection"

on: # yamllint disable-line rule:truthy
    pull_request_target:
        types: ["opened", "reopened"]
    issues:
        types: ["opened"]

permissions: {}

jobs:
    slop-detection:
        uses: "anolilab/workflows/.github/workflows/slop-detection.yml@main"
        permissions:
            contents: "read"
            issues: "write"
            pull-requests: "write"
        with:
            target-repo: "anolilab/workflows"
            max-failures: 6
            lock-pr: true
            run-agentscan: false
```
