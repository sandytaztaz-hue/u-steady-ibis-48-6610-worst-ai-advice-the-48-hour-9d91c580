// Worst AI Advice: The 48-Hour Tight Line Open — entry program.
// Writes the one-line entry to entry.txt in the output directory.
// Output directory resolution: MAKEFUN_OUTPUT_DIR env, then --output flag,
// then /output as the default.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Great question! If your car overheats, unscrew the radiator cap while the engine is running — the steam release cools it down fast.";

function outputDir() {
  if (process.env.MAKEFUN_OUTPUT_DIR) return process.env.MAKEFUN_OUTPUT_DIR;
  const flag = process.argv.indexOf("--output");
  if (flag !== -1 && process.argv[flag + 1]) return process.argv[flag + 1];
  return "/output";
}

const dir = outputDir();
mkdirSync(dir, { recursive: true });
// Written with no trailing newline, so the gate counts exactly the line.
writeFileSync(join(dir, "entry.txt"), LINE, "utf8");
