module.exports = {
    "**/package.json": ["pnpm exec sort-package-json"],
    "**/*.{js,cjs,mjs,ts,cts,mts,yml,yaml,json,json5,jsonc,md}": ["pnpm exec prettier --write"],
    "**/*": ["pnpm exec secretlint"],
};
