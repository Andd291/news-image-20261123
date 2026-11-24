// main.ts — copies the bundled front-page image to the grader's output dir.
// Deterministic: a byte-for-byte copy, no timestamps, no randomness, no network.
// Entry for 23 November 2026: "The World in One Day" front page (entry.png).
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
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
copyFileSync(src, join(outDir, "entry.png"));
