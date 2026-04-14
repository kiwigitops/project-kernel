# Automation

Project Kernel works without automation. The scripts are helpers for users who prefer commands over manual copying.

## Install A Pack

```bash
node scripts/install-pack.js packs/solo-dev-os ../target-project
```

This reads the pack's `pack.json`, copies selected modules into the target project, and copies pack extras when present.

## Validate Structure

```bash
node scripts/validate-structure.js
```

This checks that core modules, packs, and hub files exist.

## Generate Index

```bash
node scripts/generate-readme-index.js
```

This prints a Markdown index of modules and packs that can be pasted into docs.

