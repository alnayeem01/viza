const major = Number(
  process.env.npm_config_user_agent?.match(/npm\/(\d+)/)?.[1] ?? 0,
);

if (major === 0 || major === 10) {
  process.exit(0);
}

console.error(`
Unsupported npm major version: ${major} (use npm 10.x).

  corepack enable
  npm ci

npm 11+ changes the lockfile and breaks CI. Use Node 22 + Corepack (see packageManager in package.json).
`);

process.exit(1);
