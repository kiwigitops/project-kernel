#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");

function usage() {
  console.log("Usage: node scripts/install-pack.js <pack-path> <target-project> [--force]");
  console.log("");
  console.log("Example:");
  console.log("  node scripts/install-pack.js packs/solo-dev-os ../my-project");
}

function readJson(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch (error) {
    throw new Error(`Could not read JSON at ${filePath}: ${error.message}`);
  }
}

function ensureInsideRoot(sourcePath) {
  const relative = path.relative(root, sourcePath);
  if (relative.startsWith("..") || path.isAbsolute(relative)) {
    throw new Error(`Refusing to copy source outside Project Kernel: ${sourcePath}`);
  }
}

function copyRecursive(sourcePath, targetPath, options, report) {
  ensureInsideRoot(sourcePath);

  if (!fs.existsSync(sourcePath)) {
    throw new Error(`Missing source: ${sourcePath}`);
  }

  const stat = fs.statSync(sourcePath);

  if (stat.isDirectory()) {
    if (!fs.existsSync(targetPath)) {
      fs.mkdirSync(targetPath, { recursive: true });
      report.created.push(targetPath);
    }

    for (const entry of fs.readdirSync(sourcePath)) {
      copyRecursive(
        path.join(sourcePath, entry),
        path.join(targetPath, entry),
        options,
        report
      );
    }
    return;
  }

  if (fs.existsSync(targetPath) && !options.force) {
    report.skipped.push(targetPath);
    return;
  }

  fs.mkdirSync(path.dirname(targetPath), { recursive: true });
  fs.copyFileSync(sourcePath, targetPath);
  report.copied.push(targetPath);
}

function main() {
  const args = process.argv.slice(2);
  const force = args.includes("--force");
  const positional = args.filter((arg) => arg !== "--force");

  if (positional.length !== 2) {
    usage();
    process.exit(1);
  }

  const packPath = path.resolve(process.cwd(), positional[0]);
  const targetPath = path.resolve(process.cwd(), positional[1]);
  const manifestPath = path.join(packPath, "pack.json");

  if (!fs.existsSync(manifestPath)) {
    throw new Error(`Pack manifest not found: ${manifestPath}`);
  }

  const manifest = readJson(manifestPath);
  const modules = Array.isArray(manifest.modules) ? manifest.modules : [];
  const extras = Array.isArray(manifest.extras) ? manifest.extras : [];
  const report = { copied: [], created: [], skipped: [] };

  fs.mkdirSync(targetPath, { recursive: true });

  for (const moduleName of modules) {
    const source = path.join(root, "modules", moduleName);
    const target = path.join(targetPath, moduleName);
    copyRecursive(source, target, { force }, report);
  }

  for (const extraPath of extras) {
    const source = path.join(packPath, extraPath);
    const target = path.join(targetPath, path.basename(extraPath));
    copyRecursive(source, target, { force }, report);
  }

  console.log(`Installed pack: ${manifest.name || path.basename(packPath)}`);
  console.log(`Target: ${targetPath}`);
  console.log(`Copied files: ${report.copied.length}`);
  console.log(`Created directories: ${report.created.length}`);

  if (report.skipped.length > 0) {
    console.log(`Skipped existing files: ${report.skipped.length}`);
    console.log("Run again with --force to overwrite existing files.");
  }
}

try {
  main();
} catch (error) {
  console.error(`Error: ${error.message}`);
  process.exit(1);
}

