# Node Setup Environment and Resources

Sets up Node.js and pnpm, installs packages, and restores the pnpm store and `node_modules` caches.
Every input and its default is listed in [`action.yml`](./action.yml); this page covers the task caches.

## Task caches

### `enable-vis-cache` (default `"false"`)

Persists the [@visulima/vis](https://github.com/visulima/visulima/tree/main/packages/tooling/vis) task cache between runs.

- The action exports `VIS_CACHE_DIRECTORY` for the rest of the job, so `vis run` / `vis affected` in later steps read and write the cached directory.
- The cache is restored on every event. It is saved at the end of the job on `push` and on pull requests from the same repository (a PR's cache is scoped to that PR). Fork PRs and merge-queue runs only read it. The pnpm store and node_modules caches follow the same rule.
- Key: `vis-cache-<cache-prefix>-<os>-<node-version>-<YYYYMM>-<job id>-<lockfile hash>-<sha>`. Restores fall back to the newest entry for the same lockfile, then to any lockfile in the same month. The month segment starts a fresh chain each month, and vis's own `maxCacheAge` (7 days by default) prunes old entries inside it.
- The job id is part of the key, so parallel jobs that share a `cache-prefix` don't overwrite each other. Matrix legs share a job id, so give each leg its own `cache-prefix`.

### `vis-cache-dir` (default `<runner.temp>/vis-cache`)

The directory to cache. vis defaults to `node_modules/.cache/vis`, which would be swept into the `node_modules` cache, so the action uses a directory outside the repository. If your `vis.config.ts` sets `taskRunner.cacheDirectory`, that wins over `VIS_CACHE_DIRECTORY`; pass the same path here.

```yaml
- uses: "anolilab/workflows/step/node@<sha>"
  with:
      cache-prefix: "test"
      enable-vis-cache: "true"
- run: "pnpm exec vis run test"
```

### `enable-nx-cache` (default `"false"`)

Restores and saves `/tmp/nx_cache.tar.lz4` with `actions/cache`. The caller writes that tarball. It saves on every event; callers that want trusted-ref-only Nx caching should turn it off and wire their own `actions/cache/restore` + `actions/cache/save` pair.
