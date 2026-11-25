import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// How Many Tabs Do You Have Open? — the honest count, right now: zero.
// A fresh browser, everything closed, nothing left hanging.
const here = dirname(fileURLToPath(import.meta.url));
const text = readFileSync(join(here, "entry.txt"), "utf8").trim();
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
