## [2.6.4](https://github.com/anolilab/workflows/compare/v2.6.3...v2.6.4) (2024-07-03)

### Bug Fixes

* remove the lock-file-maintenance.yml ([ca7ee66](https://github.com/anolilab/workflows/commit/ca7ee66b24d5d8e59861bb5bb11ba14e5264ac89))

## [2.6.3](https://github.com/anolilab/workflows/compare/v2.6.2...v2.6.3) (2024-07-03)

### Bug Fixes

* added the missing secret ([fecd6a3](https://github.com/anolilab/workflows/commit/fecd6a322ac6b668fb413612929a41d6a7fafa5f))

## [2.6.2](https://github.com/anolilab/workflows/compare/v2.6.1...v2.6.2) (2024-07-03)

### Bug Fixes

* fixed wrong name LOCK_MAINTENANCE_GITHUBG_TOKEN to LOCK_MAINTENANCE_GITHUB_TOKEN ([02ee2b7](https://github.com/anolilab/workflows/commit/02ee2b79d24f4bae664c83edd0e521798bd53598))

## [2.6.1](https://github.com/anolilab/workflows/compare/v2.6.0...v2.6.1) (2024-07-03)

### Bug Fixes

* github has a bug that it not allows to use secret as input value on shared workflow ([5e6cddd](https://github.com/anolilab/workflows/commit/5e6cdddb44a1100d5b7f778a6c286a19d05ec0c7))

## [2.6.0](https://github.com/anolilab/workflows/compare/v2.5.3...v2.6.0) (2024-07-03)

### Features

* added commit-token for protected branches in lock-file-maintenance.yml ([41741cb](https://github.com/anolilab/workflows/commit/41741cbaa56f34f97874f6d2483107c9d286e915))

## [2.5.3](https://github.com/anolilab/workflows/compare/v2.5.2...v2.5.3) (2024-07-03)

### Bug Fixes

* added input check for install-packages on npm audit signatures ([b6c86f9](https://github.com/anolilab/workflows/commit/b6c86f9fe2e02106b474dc0394cb6fccb4ade697))
* added input check for install-packages on Prepare node_modules cache ([7af979e](https://github.com/anolilab/workflows/commit/7af979ed806f5425ef64ca5c9c3b0e2216839e72))

## [2.5.2](https://github.com/anolilab/workflows/compare/v2.5.1...v2.5.2) (2024-07-03)

### Bug Fixes

* remove wrong env token from checkout in lock-file-maintenance.yml ([6a7720d](https://github.com/anolilab/workflows/commit/6a7720d1d449227579826c88f742f1131ae55cc8))

## [2.5.1](https://github.com/anolilab/workflows/compare/v2.5.0...v2.5.1) (2024-07-03)

### Bug Fixes

* removed wrong permissions from lock-file-maintenance.yml ([f223b0b](https://github.com/anolilab/workflows/commit/f223b0b9e933f7f9afbc745b711e6ad9718caf42))

## [2.5.0](https://github.com/anolilab/workflows/compare/v2.4.2...v2.5.0) (2024-07-02)

### Features

* added new option to disable package install ([e965baf](https://github.com/anolilab/workflows/commit/e965baf968fa230cab89bfb4cf20e6fa2d2b2f7f))

### Styles

* cs fix ([e9e5b09](https://github.com/anolilab/workflows/commit/e9e5b09cbcacd5552489ee0d8390b3f6a8b7f6aa))

### Miscellaneous Chores

* **deps:** update actions/checkout action to v4.1.7 ([#35](https://github.com/anolilab/workflows/issues/35)) ([c5d902e](https://github.com/anolilab/workflows/commit/c5d902e8e92a4d51f7fda337113d67e9a268ed57))
* **deps:** update dependency lint-staged to ^15.2.7 ([#33](https://github.com/anolilab/workflows/issues/33)) ([5e246d3](https://github.com/anolilab/workflows/commit/5e246d31516c1cf2a378db33bfad7914ca7452e3))
* **deps:** update github/codeql-action action to v3.25.10 ([#32](https://github.com/anolilab/workflows/issues/32)) ([6ccba56](https://github.com/anolilab/workflows/commit/6ccba561070bba87c623bfbfe56e53037ce72f73))
* **deps:** update pnpm to v9.4.0 ([#34](https://github.com/anolilab/workflows/issues/34)) ([9a6afb0](https://github.com/anolilab/workflows/commit/9a6afb0fa8306608ccde6ef85f7555c293a1ce8a))

## [2.4.2](https://github.com/anolilab/workflows/compare/v2.4.1...v2.4.2) (2024-06-17)

### Bug Fixes

* added missing usage doc for lock-file-maintenance.yml ([037b4a7](https://github.com/anolilab/workflows/commit/037b4a7ca7e2853bf8a32b22f0e34d55673c07c3))

## [2.4.1](https://github.com/anolilab/workflows/compare/v2.4.0...v2.4.1) (2024-06-17)

### Bug Fixes

* changed Github to GitHub, added missing hint for lock-file-maintenance ([817ccc7](https://github.com/anolilab/workflows/commit/817ccc75a932509b1bb985aebfe46b67f461510d))

## [2.4.0](https://github.com/anolilab/workflows/compare/v2.3.0...v2.4.0) (2024-06-17)

### Features

* added lock-file-maintenance and docs for semantic-pull-request ([6870c81](https://github.com/anolilab/workflows/commit/6870c819e11297e752c835052d516d99f7326d90))

### Miscellaneous Chores

* **deps:** update actions/dependency-review-action action to v4.3.3 ([#30](https://github.com/anolilab/workflows/issues/30)) ([68ab7d8](https://github.com/anolilab/workflows/commit/68ab7d89200bcb2b1f16d43431b1437df53a8bec))
* **deps:** update step-security/harden-runner action to v2.8.1 ([#31](https://github.com/anolilab/workflows/issues/31)) ([b5d1d9d](https://github.com/anolilab/workflows/commit/b5d1d9d0cd4a9e43630a1bff9f6a26cc76236f5e))

## [2.3.0](https://github.com/anolilab/workflows/compare/v2.2.1...v2.3.0) (2024-06-12)

### Features

* added new run-signatures-audit step and a variable for audit-ci-version switch ([d81183f](https://github.com/anolilab/workflows/commit/d81183f9d82384e23ee5fe0578e1c73a715f4b22))

### Miscellaneous Chores

* **deps:** lock file maintenance ([#29](https://github.com/anolilab/workflows/issues/29)) ([3802ce0](https://github.com/anolilab/workflows/commit/3802ce0d826cffb5827e9607aa026c3c463f1ff6))
* **deps:** update github/codeql-action action to v3.25.6 ([#27](https://github.com/anolilab/workflows/issues/27)) ([e104c10](https://github.com/anolilab/workflows/commit/e104c100018838178b2490554f691f6bd00a13cd))
* **deps:** update ljharb/require-allow-edits digest to 13f90bc ([#26](https://github.com/anolilab/workflows/issues/26)) ([474a976](https://github.com/anolilab/workflows/commit/474a97680aaa3faa59eacc4b4387009ac976b624))
* **deps:** update step-security/harden-runner action to v2.8.0 ([#28](https://github.com/anolilab/workflows/issues/28)) ([269d1e5](https://github.com/anolilab/workflows/commit/269d1e5840563e6e8836db84a2842e6cac771b14))

## [2.2.1](https://github.com/anolilab/workflows/compare/v2.2.0...v2.2.1) (2024-05-24)


### Bug Fixes

* deleting .github/settings.yml ([7e2cfbd](https://github.com/anolilab/workflows/commit/7e2cfbdc127b7e05d20e086b45544a147f19d610))


### Styles

* cs fixes ([19cf46f](https://github.com/anolilab/workflows/commit/19cf46fef43ca48c9654b133d85a3fa52e4a649b))


### Miscellaneous Chores

* **deps:** update actions/checkout action to v4.1.6 ([#25](https://github.com/anolilab/workflows/issues/25)) ([0135a7e](https://github.com/anolilab/workflows/commit/0135a7e51f879e368df4fb842fcbc2f76b0de820))
* **deps:** update dependency @anolilab/semantic-release-preset to ^8.1.0 ([#22](https://github.com/anolilab/workflows/issues/22)) ([47e71cf](https://github.com/anolilab/workflows/commit/47e71cf799f5e83c7b479117fe34e213d18664d1))

## [2.2.0](https://github.com/anolilab/workflows/compare/v2.1.0...v2.2.0) (2024-05-23)


### Features

* show in witch folder codecov runs ([6a4b825](https://github.com/anolilab/workflows/commit/6a4b825ffe2d8cfac00cc0ed76ac0758463819c4))

## [2.1.0](https://github.com/anolilab/workflows/compare/v2.0.3...v2.1.0) (2024-05-23)


### Features

* added exclude-projects to codecov ([5c3eca4](https://github.com/anolilab/workflows/commit/5c3eca488fecb72ca2ce0fc5af69993d13cb3b64))


### Reverts

* moving permissions back ([24c23f9](https://github.com/anolilab/workflows/commit/24c23f9d4503980cadf0169e0b94c959273c6293))

## [2.0.3](https://github.com/anolilab/workflows/compare/v2.0.2...v2.0.3) (2024-05-22)


### Bug Fixes

* moved semantic-pull-request permission on level up ([2c48ac8](https://github.com/anolilab/workflows/commit/2c48ac8d531261ee13ecba0e2510e072c2eeb271))

## [2.0.2](https://github.com/anolilab/workflows/compare/v2.0.1...v2.0.2) (2024-05-22)


### Bug Fixes

* moved workflow files into the .github/workflows folder to run the workflows ([8f8a32b](https://github.com/anolilab/workflows/commit/8f8a32b8102a25f05e4a812c64db1ed2e59867a5))

## [2.0.1](https://github.com/anolilab/workflows/compare/v2.0.0...v2.0.1) (2024-05-21)


### Bug Fixes

* fixed npm package audit, added new run-npm-audit option ([6f06744](https://github.com/anolilab/workflows/commit/6f0674409ae3baf074edbdd6d9ebf8bb4c8e6fd0))

## [2.0.0](https://github.com/anolilab/workflows/compare/v1.2.2...v2.0.0) (2024-05-21)


### ⚠ BREAKING CHANGES

* Changed default of issue-inactive-days from 365 to 30

### Features

* added more options and defaults to lock-closed ([2ffc985](https://github.com/anolilab/workflows/commit/2ffc9855558793b6920f8f914fbc512082da3b0b))


### Bug Fixes

* fixed broken update of action ([fb0e155](https://github.com/anolilab/workflows/commit/fb0e155617f39acc057ae3e1657ede68d38a21be))
* upgraded dessant/lock-threads version ([6d40f6f](https://github.com/anolilab/workflows/commit/6d40f6ff11c5587399f8af8bce31ac419a87bd7f))


### Miscellaneous Chores

* **release:** v1.2.3 [skip ci]\n\n## [1.2.3](https://github.com/anolilab/workflows/compare/v1.2.2...v1.2.3) (2024-05-21) ([c1f5847](https://github.com/anolilab/workflows/commit/c1f5847be7e4edcf57ef5e1d54c37af771a8bb80))

## [1.2.3](https://github.com/anolilab/workflows/compare/v1.2.2...v1.2.3) (2024-05-21)


### Bug Fixes

* fixed broken update of action ([fb0e155](https://github.com/anolilab/workflows/commit/fb0e155617f39acc057ae3e1657ede68d38a21be))
* upgraded dessant/lock-threads version ([6d40f6f](https://github.com/anolilab/workflows/commit/6d40f6ff11c5587399f8af8bce31ac419a87bd7f))

## [1.2.2](https://github.com/anolilab/workflows/compare/v1.2.1...v1.2.2) (2024-05-20)


### Bug Fixes

* use git hash as version ([8e96cc1](https://github.com/anolilab/workflows/commit/8e96cc1ce9c603fadf010fc7aa8cae829ae1ca4d))

## [1.2.1](https://github.com/anolilab/workflows/compare/v1.2.0...v1.2.1) (2024-05-20)


### Bug Fixes

* added cleanup-branch-cache permissions ([2a834c8](https://github.com/anolilab/workflows/commit/2a834c83c4ff35b7327ebc6d47aef4f3159478ea))

## [1.2.0](https://github.com/anolilab/workflows/compare/v1.1.1...v1.2.0) (2024-05-20)


### Features

* added cleanup-branch-cache ([91e98d2](https://github.com/anolilab/workflows/commit/91e98d2620541192ee20040b7e24e07622f8557b))

## [1.1.1](https://github.com/anolilab/workflows/compare/v1.1.0...v1.1.1) (2024-05-20)


### Bug Fixes

* fixed wrong link in doc of set-default-labels.md ([57a0600](https://github.com/anolilab/workflows/commit/57a06002fa6142d8affb6fc3d4d5e7ae19f7bd1f))

## [1.1.0](https://github.com/anolilab/workflows/compare/v1.0.1...v1.1.0) (2024-05-20)


### Features

* added step-security ([bd2c2f6](https://github.com/anolilab/workflows/commit/bd2c2f605f3b267a879605459a145f314c7aa937))


### Miscellaneous Chores

* **deps:** update pnpm/action-setup action to v4 ([#24](https://github.com/anolilab/workflows/issues/24)) ([a377305](https://github.com/anolilab/workflows/commit/a377305c56d3684230b27bbf2f94881e45d9a09a))

## [1.0.1](https://github.com/anolilab/workflows/compare/v1.0.0...v1.0.1) (2024-05-20)


### Bug Fixes

* fixed set-default-labels.yml ([84284de](https://github.com/anolilab/workflows/commit/84284de518d89599a4628e40e532eebec7082995))

## 1.0.0 (2024-05-20)


### ⚠ BREAKING CHANGES

* changed default labels action to ghaction-github-labeler

### Features

* added upgrade-npm-version to setup action ([f4c3ddf](https://github.com/anolilab/workflows/commit/f4c3ddf82392c4a4bca4a1199c864fdf75869397))
* change default labels action to ghaction-github-labeler ([f5147b5](https://github.com/anolilab/workflows/commit/f5147b587e5ad04d9eaf084f002055f5409ac513))
* first version of shared GitHub workflows ([#2](https://github.com/anolilab/workflows/issues/2)) ([e597ad4](https://github.com/anolilab/workflows/commit/e597ad4448f9e575be25e0e3a53722651643448b))
* refactored set-default-labels ([2138464](https://github.com/anolilab/workflows/commit/213846408a54ce029214aec370414b9edf53e5ed))


### Bug Fixes

* change repo name ([177f9d8](https://github.com/anolilab/workflows/commit/177f9d856551f8862dc36b267d67c91b13140da1))
* changed description ([98e337d](https://github.com/anolilab/workflows/commit/98e337dfa5304c19e0ac507d70646f54d8c2d3df))
* **deps:** update dependency semantic-release to ^23.0.8 ([#8](https://github.com/anolilab/workflows/issues/8)) ([e26da4a](https://github.com/anolilab/workflows/commit/e26da4afe9391d0a1a78eb3055b5c82ce36f1ad4))


### Miscellaneous Chores

* **deps:** lock file maintenance ([#5](https://github.com/anolilab/workflows/issues/5)) ([41f066c](https://github.com/anolilab/workflows/commit/41f066c41564f2498710e2e03aa4877524e790a1))
* **deps:** update actions/checkout action to v4.1.6 ([#11](https://github.com/anolilab/workflows/issues/11)) ([a1e75b9](https://github.com/anolilab/workflows/commit/a1e75b991f04e037b8c7f797449e2fb8a3cdd233))
* **deps:** update actions/dependency-review-action action to v4.2.5 ([#6](https://github.com/anolilab/workflows/issues/6)) ([9cb9446](https://github.com/anolilab/workflows/commit/9cb94467f319d82dc935f7fef628ede2727c81d6))
* **deps:** update actions/dependency-review-action action to v4.3.2 ([#17](https://github.com/anolilab/workflows/issues/17)) ([d44de82](https://github.com/anolilab/workflows/commit/d44de824ac1032d3c7363dde44357559f5682f16))
* **deps:** update actions/upload-artifact action to v4.3.3 ([#12](https://github.com/anolilab/workflows/issues/12)) ([38604a6](https://github.com/anolilab/workflows/commit/38604a61d5459a664f6afa2532f1cdf9404a5201))
* **deps:** update amannn/action-semantic-pull-request action to v5.5.2 ([#18](https://github.com/anolilab/workflows/issues/18)) ([281d3c4](https://github.com/anolilab/workflows/commit/281d3c47451efff37c9e36c1f3b263fa504de783))
* **deps:** update github/codeql-action action to v3.25.5 ([#19](https://github.com/anolilab/workflows/issues/19)) ([674169a](https://github.com/anolilab/workflows/commit/674169ae09d3d81d1d6ea4019fb17fc0e8efdc44))
* **deps:** update lewagon/wait-on-check-action action to v1.3.4 ([#13](https://github.com/anolilab/workflows/issues/13)) ([4fb3fb7](https://github.com/anolilab/workflows/commit/4fb3fb782819d6555b0fe61532c7bc79883b43ed))
* **deps:** update ossf/scorecard-action action to v2.3.3 ([#14](https://github.com/anolilab/workflows/issues/14)) ([e27fef3](https://github.com/anolilab/workflows/commit/e27fef3fe7c6ca1a61b9079ad87d269f01b56aff))
* **deps:** update patch updates ([#7](https://github.com/anolilab/workflows/issues/7)) ([82fdc64](https://github.com/anolilab/workflows/commit/82fdc64ef8c8555e33e800db0b3ead1c54293713))
* **deps:** update pnpm to v9 ([#10](https://github.com/anolilab/workflows/issues/10)) ([85da660](https://github.com/anolilab/workflows/commit/85da6605a5dddb5f33bad359543825b956111bcf))
* **deps:** update step-security/harden-runner action to v2.7.1 ([#15](https://github.com/anolilab/workflows/issues/15)) ([299b672](https://github.com/anolilab/workflows/commit/299b67291bdb3cd932529f6191527a914da8c78b))
* update workflow ([356a981](https://github.com/anolilab/workflows/commit/356a981e2fa2cc21e60c86f6022ef97dbf352c01))
* updated deps added ([d1aebcf](https://github.com/anolilab/workflows/commit/d1aebcf0e9b85cde0eead4dec230d35dafc3f65b))


### Continuous Integration

* updated node version for semantic-release ([4f5aa5f](https://github.com/anolilab/workflows/commit/4f5aa5fb72c18ef2676e734290630ff3be0543d1))
