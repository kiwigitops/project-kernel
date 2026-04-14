#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");

const requiredFiles = [
  "README.md",
  "PROJECT-OPERATING-SYSTEM.md",
  "CONTRIBUTING.md",
  "CHANGELOG.md",
  "ROADMAP.md",
  "LICENSE",
  "modules/README.md",
  "packs/README.md",
  "docs/README.md",
  "examples/README.md"
];

const requiredModules = [
  "foundation",
  "docs",
  "memory",
  "skills",
  "workflow",
  "philosophy"
];

const requiredPacks = [
  "minimal-starter",
  "documented-starter",
  "solo-dev-os",
  "team-handoff-pack",
  "open-source-launch-pack",
  "ai-builder-pack"
];

function exists(relativePath) {
  return fs.existsSync(path.join(root, relativePath));
}

function readJson(relativePath, errors) {
  const fullPath = path.join(root, relativePath);
  try {
    return JSON.parse(fs.readFileSync(fullPath, "utf8"));
  } catch (error) {
    errors.push(`Invalid JSON: ${relativePath} (${error.message})`);
    return null;
  }
}

function main() {
  const errors = [];

  for (const file of requiredFiles) {
    if (!exists(file)) {
      errors.push(`Missing required file: ${file}`);
    }
  }

  for (const moduleName of requiredModules) {
    if (!exists(`modules/${moduleName}/START-HERE.md`)) {
      errors.push(`Missing module hub: modules/${moduleName}/START-HERE.md`);
    }
  }

  for (const packName of requiredPacks) {
    const base = `packs/${packName}`;
    if (!exists(`${base}/README.md`)) {
      errors.push(`Missing pack README: ${base}/README.md`);
    }
    if (!exists(`${base}/START-HERE.md`)) {
      errors.push(`Missing pack starter: ${base}/START-HERE.md`);
    }
    if (!exists(`${base}/pack.json`)) {
      errors.push(`Missing pack manifest: ${base}/pack.json`);
      continue;
    }

    const manifest = readJson(`${base}/pack.json`, errors);
    if (!manifest) {
      continue;
    }

    if (!Array.isArray(manifest.modules)) {
      errors.push(`Pack manifest modules must be an array: ${base}/pack.json`);
      continue;
    }

    for (const moduleName of manifest.modules) {
      if (!requiredModules.includes(moduleName)) {
        errors.push(`Pack ${packName} references unknown module: ${moduleName}`);
      }
    }
  }

  if (errors.length > 0) {
    console.error("Project Kernel structure check failed:");
    for (const error of errors) {
      console.error(`- ${error}`);
    }
    process.exit(1);
  }

  console.log("Project Kernel structure check passed.");
  console.log(`Modules: ${requiredModules.length}`);
  console.log(`Packs: ${requiredPacks.length}`);
}

main();

