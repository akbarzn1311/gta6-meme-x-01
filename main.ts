import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const src = join(botDir, "POST.json");
if (!existsSync(src)) {
  throw new Error(`POST.json not found in ${botDir}`);
}

mkdirSync(outDir, { recursive: true });
copyFileSync(src, join(outDir, "POST.json"));
console.log(`copied POST.json to ${outDir}`);
