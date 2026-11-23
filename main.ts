// One-Line Roast: The Gadget You Use Every Day.
// This program writes a single original roast line to /output/entry.txt,
// where the sealed gate scorer reads it. The line is 61 characters:
// short, specific, and aimed at a gadget used every day.
import { mkdirSync, writeFileSync } from "node:fs";

// The roast itself: one line, 61 characters, naming a daily gadget
// (the laptop) and the exact way it misbehaves (its fan screams over
// a spreadsheet). No trailing newline, so the file holds exactly the line.
const line =
  "My laptop fan revs like a jet engine to open one spreadsheet.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
