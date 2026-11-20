// The World in One Day — Friday 20 November 2026.
// Copies the finished front page into the grader's output folder.
// The entry image lives in this repo as entry.png; the copy is byte-identical
// on every run, so the grader's two runs always write the same bytes.
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const source = join(repoRoot, "entry.png");
if (!existsSync(source)) {
  throw new Error("entry.png is missing from the repository");
}
const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(targetDir, { recursive: true });
copyFileSync(source, join(targetDir, "entry.png"));
console.log("wrote entry.png to " + targetDir);
