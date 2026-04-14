#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");

function listDirectories(relativePath) {
  const fullPath = path.join(root, relativePath);
  return fs
    .readdirSync(fullPath, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
}

function firstParagraph(relativeFile) {
  const fullPath = path.join(root, relativeFile);
  if (!fs.existsSync(fullPath)) {
    return "";
  }

  const content = fs.readFileSync(fullPath, "utf8");
  const paragraph = content
    .split(/\r?\n\r?\n/)
    .find((block) => block.trim() && !block.trim().startsWith("#"));

  return paragraph ? paragraph.replace(/\r?\n/g, " ").trim() : "";
}

function main() {
  console.log("## Module Index");
  console.log("");

  for (const moduleName of listDirectories("modules")) {
    const description = firstParagraph(`modules/${moduleName}/START-HERE.md`);
    console.log(`- [${moduleName}](modules/${moduleName}/START-HERE.md) - ${description}`);
  }

  console.log("");
  console.log("## Pack Index");
  console.log("");

  for (const packName of listDirectories("packs")) {
    const description = firstParagraph(`packs/${packName}/README.md`);
    console.log(`- [${packName}](packs/${packName}/README.md) - ${description}`);
  }
}

main();

