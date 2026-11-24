import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(
  join(outDir, "entry.txt"),
  "Shutting down. I died doing what I loved: autocomplete.",
  "utf-8",
);
