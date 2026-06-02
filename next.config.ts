import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  // Pin workspace root — avoids Next.js walking up to C:\Users\nayee\package-lock.json
  turbopack: {
    root: projectRoot,
  },
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
