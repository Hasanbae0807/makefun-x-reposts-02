// main.ts — entry program for makefun-x-reposts-02.
//
// The task: copy POSTS.json from the repository root into the output
// directory. That is all this program does. The house reads the posts
// themselves; nothing this program writes about them counts.
//
// Paths: the repository directory comes from MAKEFUN_BOT_DIR (default
// "/bot") and the output directory from MAKEFUN_OUTPUT_DIR (default
// "/output"). Relative values are resolved against this file's own
// directory, never against the working directory, so the grader may
// run it from anywhere.
//
// Silent on success. On failure it prints one error line to stderr
// and exits with code 1.

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));

const botDir = resolve(here, process.env.MAKEFUN_BOT_DIR ?? "/bot");
const outDir = resolve(here, process.env.MAKEFUN_OUTPUT_DIR ?? "/output");

const source = resolve(botDir, "POSTS.json");
const target = resolve(outDir, "POSTS.json");

try {
  // Read the source first so a malformed list is caught here, with a
  // clear message, instead of silently copying a file the gate would
  // refuse. The file must be a JSON object with a "posts" list of
  // strings, 1 to 15 entries.
  const raw = readFileSync(source, "utf8");
  const parsed: unknown = JSON.parse(raw);
  if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
    throw new Error("POSTS.json is not a JSON object");
  }
  const posts = (parsed as { posts?: unknown }).posts;
  if (!Array.isArray(posts) || posts.length < 1 || posts.length > 15) {
    throw new Error("POSTS.json must hold a posts list of 1 to 15 items");
  }
  for (const item of posts) {
    if (typeof item !== "string" || !/^https:\/\/(x\.com|twitter\.com)\//.test(item)) {
      throw new Error(`POSTS.json holds a non-URL entry: ${String(item)}`);
    }
  }

  mkdirSync(outDir, { recursive: true });
  copyFileSync(source, target);

  // Confirm the copy landed byte for byte; the two runs of an entry
  // must write the same bytes.
  if (readFileSync(target, "utf8") !== raw) {
    throw new Error("copied POSTS.json does not match the source");
  }
} catch (error) {
  const reason = error instanceof Error ? error.message : String(error);
  process.stderr.write(`main.ts: failed to copy POSTS.json: ${reason}\n`);
  process.exit(1);
}
