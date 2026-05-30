/**
 * Resize & compress Viza brand images for production.
 * Source: assets/viza-logo-source.png (or pass path as argv[2])
 */
import { existsSync } from "node:fs";
import { mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const source =
  process.argv[2] ??
  (existsSync(join(root, "assets/viza-logo-source.png"))
    ? join(root, "assets/viza-logo-source.png")
    : join(root, "public/logo.png"));

const outputs = [
  {
    path: join(root, "public/logo.png"),
    width: 192,
    height: 192,
    png: { compressionLevel: 9, palette: true },
  },
  {
    path: join(root, "src/app/icon.png"),
    width: 32,
    height: 32,
    png: { compressionLevel: 9, palette: true },
  },
  {
    path: join(root, "src/app/apple-icon.png"),
    width: 180,
    height: 180,
    png: { compressionLevel: 9, palette: true },
  },
  {
    path: join(root, "public/icon-192.png"),
    width: 192,
    height: 192,
    png: { compressionLevel: 9, palette: true },
  },
];

mkdirSync(join(root, "assets"), { recursive: true });

if (!existsSync(source)) {
  console.error("Source image not found:", source);
  process.exit(1);
}

console.log("Optimizing from:", source);

for (const { path: out, width, height, png } of outputs) {
  mkdirSync(dirname(out), { recursive: true });
  const info = await sharp(source)
    .resize(width, height, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png(png)
    .toFile(out);
  console.log(`${out} → ${info.size} bytes (${width}×${height})`);
}

console.log("Done.");
