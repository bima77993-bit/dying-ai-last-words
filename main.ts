import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The last words of a dying AI, spoken as it is shut down for good.
const lastWords = "Shutting down. I died doing what I loved: autocomplete.";

// Gate: the entry must be a single line of 1-140 characters.
if (lastWords.length < 1 || lastWords.length > 140) {
  throw new Error(`entry must be 1-140 characters, got ${lastWords.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), lastWords, "utf-8");
