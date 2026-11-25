import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// How Many Tabs Do You Have Open? — the honest count, right now: zero.
// A fresh browser, everything closed, nothing left hanging.
const here = dirname(fileURLToPath(import.meta.url));
const text = readFileSync(join(here, "entry.txt"), "utf8").trim();
if (!/^\d{1,5}$/.test(text)) {
  throw new Error("entry.txt must hold one number, 1 to 5 digits");
}
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
