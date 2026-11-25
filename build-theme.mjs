// Builds theme.json from the tokens below and epitech.css, so the two never drift apart, then epitech-theme.zip (theme.json
// and the font files) for the console's Import ZIP.
import { execFileSync } from "node:child_process";
import { readFileSync, rmSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const folder = new URL(".", import.meta.url);
const css = readFileSync(new URL("epitech.css", folder), "utf8");

const theme = {
  name: "Epitech",
  description: "Epitech intranet look: Epitech blue, square corners, dotted background, condensed uppercase titles.",
  tokens: {
    mode: "light",
    colors: {
      background: "#f3f3f1",
      surface: "#ffffff",
      text: "#0b0b0f",
      muted: "#5b5f6a",
      primary: "#0038ff",
      primaryText: "#ffffff",
      border: "#d9dbe0",
      success: "#00a86b",
      warning: "#f5a800",
      danger: "#d92d2d",
    },
    typography: { fontFamily: "sans", scale: 1 },
    shape: { radius: 2 },
  },
  // Names of the font files in the console's font library (the upload names are the file names without the extension).
  // The ids differ per installation, so the console matches these names when the file is imported.
  fontNames: {
    body: "IBMPlexSans-Regular",
    heading: "Anton-Regular",
    mono: "IBMPlexMono-Regular",
  },
  css,
};

writeFileSync(new URL("theme.json", folder), `${JSON.stringify(theme, null, 2)}\n`);

const folder_ = fileURLToPath(folder);
rmSync(`${folder_}epitech-theme.zip`, { force: true });
execFileSync("zip", ["-q", "-r", "epitech-theme.zip", "theme.json", "fonts"], { cwd: folder_ });
