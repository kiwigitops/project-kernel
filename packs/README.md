# Packs

Packs are curated adoption paths. Each pack explains when to use it, which modules it installs, and what to fill in first.

## Available Packs

| Pack | Best for |
| --- | --- |
| [`minimal-starter`](minimal-starter/README.md) | Small prototypes and experiments that still need rules |
| [`documented-starter`](documented-starter/README.md) | Projects where docs should be strong from day one |
| [`solo-dev-os`](solo-dev-os/README.md) | Long-running solo work that needs continuity |
| [`team-handoff-pack`](team-handoff-pack/README.md) | Onboarding, ownership transfer, and team continuity |
| [`open-source-launch-pack`](open-source-launch-pack/README.md) | Public repos preparing for contributors and releases |
| [`ai-builder-pack`](ai-builder-pack/README.md) | AI-assisted coding and context-preserving build sessions |

## Manual Use

1. Open the pack README.
2. Copy the listed modules from `modules/` into your project.
3. Copy any `extras/` files that fit your project.
4. Fill the pack's first-action checklist.

## Scripted Use

```bash
node scripts/install-pack.js packs/documented-starter ../target-project
```

The installer reads each pack's `pack.json`.

