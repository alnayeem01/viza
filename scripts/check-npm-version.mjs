import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(new URL("../package.json", import.meta.url)));
const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
const required = pkg.packageManager?.match(/npm@(\d+\.\d+\.\d+)/)?.[1];

if (!required) {
  process.exit(0);
}

const current =
  process.env.npm_config_user_agent?.match(/npm\/(\d+\.\d+\.\d+)/)?.[1] ??
  "unknown";

if (current === required) {
  process.exit(0);
}

console.error(`
Wrong npm version: ${current} (this project requires npm ${required}).

Fix once on this machine:
  corepack enable

Then always install with:
  npm ci              # normal — uses npm ${required} via Corepack
  npm install         # only when adding/removing a package

Do not use a globally installed npm 11+ in this repo — it will break CI.
`);

process.exit(1);
