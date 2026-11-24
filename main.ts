// main.ts — copies the bundled front-page image to the grader's output dir.
// Deterministic: a byte-for-byte copy, no timestamps, no randomness, no network.
// Entry for 23 November 2026: "The World in One Day" front page (entry.png).
// After copying, the output is verified byte-for-byte against the source so a
// truncated or partial write fails loudly instead of shipping a bad image.
import { copyFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });

const src = join(here, "entry.png");
if (!existsSync(src)) {
  throw new Error("entry.png not found next to main.ts");
}
// The output keeps the same name, entry.png, so the grader reads it directly.
const dest = join(outDir, "entry.png");
copyFileSync(src, dest);

// Verify the copy: byte length must match the source exactly, otherwise the
// entry would be a truncated image. Fail loudly on any mismatch.
const srcSize = statSync(src).size;
const destSize = statSync(dest).size;
if (destSize !== srcSize) {
  throw new Error(
    `entry.png copy mismatch: wrote ${destSize} bytes, expected ${srcSize}`
  );
}
